// Types
export type Sex = 'male' | 'female';
export type GoalType = 'slim_toned' | 'lean_shredded' | 'big_muscular' | 'custom';
export type ExperienceLevel = 'brand_new' | 'beginner' | 'intermediate' | 'veteran';
export type UnitSystem = 'metric' | 'imperial';

export interface SetupData {
  sex: Sex;
  age: number;
  heightCm: number;
  weightKg: number;
  bodyFatPercent: number;
  muscleLevel: number; // 1-10 scale
  experience: ExperienceLevel;
  goalType: GoalType;
  goalBodyFatPercent: number;
  goalMuscleLevel: number;
  goalWeightKg: number;
  daysPerWeek: number;
  sessionMinutes: number;
  noSpotter: boolean;
  shyBeginner: boolean;
  currentWeightKg: number; // the only thing user updates
  unitSystem: UnitSystem;
}

export interface MacroTargets {
  calories: number;
  protein: number; // grams
  carbs: number;
  fats: number;
  proteinPerKgLBM: number;
}

export interface Checkpoint {
  weightKg: number;
  label: string;
  isGoal: boolean;
  phase: number;
}

export interface TimelineData {
  totalWeeks: number;
  totalMonths: number;
  checkpoints: Checkpoint[];
  weeklyWeightChangeKg: number;
  dailyDeficitOrSurplus: number;
}

export interface RefeedPlan {
  needsRefeed: boolean;
  frequencyDays: number | null;
  description: string;
  refeedMacros: MacroTargets | null;
}

export interface WalkFix {
  durationMinutes: number;
  distanceKm: number;
  explanation: string;
}

export interface WaterRetention {
  waterGrams: number;
  durationHours: number;
  explanation: string;
}

// -----------------------------------------
// Core Calculations
// -----------------------------------------

export function calculateLBM(weightKg: number, bodyFatPercent: number): number {
  return weightKg * (1 - bodyFatPercent / 100);
}

export function calculateBMR(weightKg: number, bodyFatPercent: number): number {
  const lbm = calculateLBM(weightKg, bodyFatPercent);
  return 370 + (21.6 * lbm);
}

export function calculateTDEE(bmr: number, daysPerWeek: number, sessionMinutes: number): number {
  let multiplier = 1.2; // sedentary base
  if (daysPerWeek >= 1 && daysPerWeek <= 2) {
    multiplier = 1.375;
  } else if (daysPerWeek >= 3 && daysPerWeek <= 4) {
    multiplier = 1.55;
  } else if (daysPerWeek >= 5) {
    multiplier = 1.725;
  }
  
  // slightly adjust based on session duration if needed, but standard multipliers usually cover it
  return bmr * multiplier;
}

export function calculateProteinTarget(lbm: number, goalType: GoalType, experience: ExperienceLevel, bodyFatPercent: number, sex: Sex): number {
  let multiplier = 2.0;

  if (goalType === 'slim_toned') {
    multiplier = 1.7; // 1.6-1.8
  } else if (goalType === 'big_muscular') {
    multiplier = 1.9; // 1.8-2.0
  } else {
    // Cutters
    const isHighBf = (sex === 'male' && bodyFatPercent > 20) || (sex === 'female' && bodyFatPercent > 30);
    const isLowBf = (sex === 'male' && bodyFatPercent < 15) || (sex === 'female' && bodyFatPercent < 23);

    if (isHighBf) {
      multiplier = 2.1; // 2.0-2.2
    } else if (isLowBf) {
      multiplier = 2.4; // 2.2-2.6
    } else {
      multiplier = 2.2;
    }
  }

  return lbm * multiplier;
}

export function calculateMacroTargets(setupData: SetupData): MacroTargets {
  const { weightKg, bodyFatPercent, daysPerWeek, sessionMinutes, goalType, experience, sex, currentWeightKg, goalWeightKg } = setupData;
  const currentKg = currentWeightKg || weightKg;
  
  const bmr = calculateBMR(currentKg, bodyFatPercent);
  const tdee = calculateTDEE(bmr, daysPerWeek, sessionMinutes);
  const lbm = calculateLBM(currentKg, bodyFatPercent);
  
  let calories = tdee;
  const isCutting = goalWeightKg < currentKg;
  const isBulking = goalWeightKg > currentKg;

  if (isCutting) {
    calories = tdee * 0.78; // ~22% deficit
  } else if (isBulking) {
    calories = tdee * 1.125; // ~12.5% surplus
  }
  
  const proteinPerKgLBM = calculateProteinTarget(lbm, goalType, experience, bodyFatPercent, sex) / lbm;
  const protein = lbm * proteinPerKgLBM;
  
  // Fat: 25% of calories
  let fats = (calories * 0.25) / 9;
  if (fats < currentKg * 0.5) {
    fats = currentKg * 0.5; // minimum 0.5g/kg
  }
  
  const carbs = (calories - (protein * 4) - (fats * 9)) / 4;

  return {
    calories: Math.round(calories),
    protein: Math.round(protein),
    carbs: Math.max(0, Math.round(carbs)),
    fats: Math.round(fats),
    proteinPerKgLBM: Math.round(proteinPerKgLBM * 10) / 10
  };
}

export function calculateCheckpoints(startWeight: number, goalWeight: number): Checkpoint[] {
  const diff = goalWeight - startWeight;
  const checkpoints: Checkpoint[] = [];
  
  checkpoints.push({ weightKg: startWeight, label: 'Start', isGoal: false, phase: 0 });
  
  if (Math.abs(diff) > 2) {
    checkpoints.push({ weightKg: startWeight + (diff * 0.33), label: 'Phase 1', isGoal: false, phase: 1 });
    checkpoints.push({ weightKg: startWeight + (diff * 0.66), label: 'Phase 2', isGoal: false, phase: 2 });
  }
  
  checkpoints.push({ weightKg: goalWeight, label: 'Goal', isGoal: true, phase: 3 });
  
  return checkpoints;
}

export function calculateTimeline(startWeight: number, goalWeight: number, bodyFatPercent: number, sex: Sex): TimelineData {
  const diff = goalWeight - startWeight;
  // 0.7% of bodyweight per week
  const weeklyChange = startWeight * 0.007; 
  const totalWeeks = Math.abs(diff) / weeklyChange;
  const totalMonths = totalWeeks / 4.345;
  
  const dailyDeficit = (weeklyChange * 7700) / 7;

  return {
    totalWeeks: Math.round(totalWeeks),
    totalMonths: Math.round(totalMonths * 10) / 10,
    checkpoints: calculateCheckpoints(startWeight, goalWeight),
    weeklyWeightChangeKg: Math.round(weeklyChange * 100) / 100,
    dailyDeficitOrSurplus: diff < 0 ? -Math.round(dailyDeficit) : Math.round(dailyDeficit)
  };
}

export function calculateRefeedPlan(bodyFatPercent: number, sex: Sex, experience: ExperienceLevel): RefeedPlan {
  const isMale = sex === 'male';
  const highBf = isMale ? bodyFatPercent > 20 : bodyFatPercent > 30;
  const lowBf = isMale ? bodyFatPercent < 15 : bodyFatPercent < 23;

  if (highBf) {
    return {
      needsRefeed: false,
      frequencyDays: null,
      description: 'Higher body fat percentages do not require frequent refeeds. Take a maintenance diet break at major checkpoints instead.',
      refeedMacros: null
    };
  } else if (lowBf) {
    return {
      needsRefeed: true,
      frequencyDays: 7,
      description: 'Scheduled high-carb refeed every 7-10 days to restore glycogen and hormones.',
      refeedMacros: null // This should be calculated based on TDEE, kept null for simplification
    };
  } else {
    return {
      needsRefeed: true,
      frequencyDays: 14,
      description: 'Scheduled high-carb refeed every 14 days to sustain metabolism.',
      refeedMacros: null
    };
  }
}

export function calculateWalkFix(extraCalories: number): WalkFix {
  // ~300 kcal per hour at 4.5-5.0 km/h (varies by weight, but this is a rough average)
  const durationMinutes = (extraCalories / 300) * 60;
  const distanceKm = (durationMinutes / 60) * 4.8;
  return {
    durationMinutes: Math.round(durationMinutes),
    distanceKm: Math.round(distanceKm * 10) / 10,
    explanation: `Walking for ${Math.round(durationMinutes)} minutes (${(Math.round(distanceKm * 10) / 10)} km) will burn approximately ${Math.round(extraCalories)} extra calories at a brisk pace.`
  };
}

export function calculateWaterRetention(carbsGrams: number, saltMg: number): WaterRetention {
  // 1g carb holds 3-4g water. Let's use 3.5g.
  const waterGrams = carbsGrams * 3.5 + (saltMg * 0.5); // simplistic salt impact
  return {
    waterGrams: Math.round(waterGrams),
    durationHours: 48,
    explanation: `${Math.round(waterGrams)}g of water weight may be retained from these carbs and sodium for about 48 hours.`
  };
}

// -----------------------------------------
// Unit Conversions
// -----------------------------------------
export function kgToLbs(kg: number): number {
  return kg * 2.20462;
}

export function lbsToKg(lbs: number): number {
  return lbs / 2.20462;
}

export function cmToFeetInches(cm: number): { feet: number, inches: number } {
  const inches = cm / 2.54;
  const feet = Math.floor(inches / 12);
  const remainingInches = Math.round(inches % 12);
  return { feet, inches: remainingInches };
}

export function feetInchesToCm(feet: number, inches: number): number {
  return (feet * 12 + inches) * 2.54;
}

export function convertUnits(value: number, from: UnitSystem, to: UnitSystem, type: 'weight' | 'height'): number {
  if (from === to) return value;
  
  if (type === 'weight') {
    return from === 'metric' ? kgToLbs(value) : lbsToKg(value);
  } else {
    // for height, assuming value is total inches or cm
    return from === 'metric' ? value / 2.54 : value * 2.54;
  }
}
