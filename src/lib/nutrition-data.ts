export interface FoodItem {
  name: string;
  caloriesPer100g: number;
  proteinPer100g: number;
  carbsPer100g: number;
  fatsPer100g: number;
  rawToCookedRatio: number; // 1.0 for non-meats, ~0.72 for chicken/beef/pork
  category: 'protein' | 'carb' | 'fat' | 'vegetable' | 'fruit' | 'dairy';
  universallyAvailable: boolean;
}

export interface MealTemplate {
  name: string;
  phase: 'cut' | 'lean' | 'bulk' | 'maintenance';
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  items: { foodId: string; gramsRaw: number }[];
  description: string;
}

export const foodDatabase: Record<string, FoodItem> = {
  // Proteins
  chicken_breast: { name: 'Chicken Breast (Raw)', caloriesPer100g: 120, proteinPer100g: 22.5, carbsPer100g: 0, fatsPer100g: 2.6, rawToCookedRatio: 0.75, category: 'protein', universallyAvailable: true },
  lean_beef: { name: 'Lean Beef 93/7 (Raw)', caloriesPer100g: 150, proteinPer100g: 21, carbsPer100g: 0, fatsPer100g: 7, rawToCookedRatio: 0.72, category: 'protein', universallyAvailable: true },
  pork_loin: { name: 'Lean Pork Loin (Raw)', caloriesPer100g: 143, proteinPer100g: 21, carbsPer100g: 0, fatsPer100g: 6, rawToCookedRatio: 0.74, category: 'protein', universallyAvailable: true },
  tuna_water: { name: 'Tuna (Water-packed)', caloriesPer100g: 86, proteinPer100g: 19.4, carbsPer100g: 0, fatsPer100g: 0.9, rawToCookedRatio: 1.0, category: 'protein', universallyAvailable: true },
  eggs: { name: 'Whole Eggs', caloriesPer100g: 143, proteinPer100g: 12.6, carbsPer100g: 0.7, fatsPer100g: 9.5, rawToCookedRatio: 1.0, category: 'protein', universallyAvailable: true },
  egg_whites: { name: 'Egg Whites', caloriesPer100g: 52, proteinPer100g: 10.9, carbsPer100g: 0.7, fatsPer100g: 0.2, rawToCookedRatio: 1.0, category: 'protein', universallyAvailable: true },
  turkey_breast: { name: 'Turkey Breast (Raw)', caloriesPer100g: 104, proteinPer100g: 24, carbsPer100g: 0, fatsPer100g: 1, rawToCookedRatio: 0.75, category: 'protein', universallyAvailable: true },
  salmon: { name: 'Salmon (Raw)', caloriesPer100g: 208, proteinPer100g: 20, carbsPer100g: 0, fatsPer100g: 13, rawToCookedRatio: 0.80, category: 'protein', universallyAvailable: true },
  white_fish: { name: 'White Fish (Tilapia/Cod)', caloriesPer100g: 96, proteinPer100g: 20, carbsPer100g: 0, fatsPer100g: 1.7, rawToCookedRatio: 0.80, category: 'protein', universallyAvailable: true },
  
  // Carbs
  white_rice: { name: 'White Rice (Dry)', caloriesPer100g: 360, proteinPer100g: 6.6, carbsPer100g: 80, fatsPer100g: 0.6, rawToCookedRatio: 2.8, category: 'carb', universallyAvailable: true },
  brown_rice: { name: 'Brown Rice (Dry)', caloriesPer100g: 367, proteinPer100g: 7.5, carbsPer100g: 76, fatsPer100g: 2.8, rawToCookedRatio: 2.5, category: 'carb', universallyAvailable: true },
  oats: { name: 'Rolled Oats (Dry)', caloriesPer100g: 389, proteinPer100g: 16.9, carbsPer100g: 66, fatsPer100g: 6.9, rawToCookedRatio: 2.0, category: 'carb', universallyAvailable: true },
  sweet_potato: { name: 'Sweet Potato (Raw)', caloriesPer100g: 86, proteinPer100g: 1.6, carbsPer100g: 20, fatsPer100g: 0.1, rawToCookedRatio: 1.0, category: 'carb', universallyAvailable: true },
  potato: { name: 'White Potato (Raw)', caloriesPer100g: 77, proteinPer100g: 2, carbsPer100g: 17, fatsPer100g: 0.1, rawToCookedRatio: 1.0, category: 'carb', universallyAvailable: true },
  whole_wheat_bread: { name: 'Whole Wheat Bread', caloriesPer100g: 252, proteinPer100g: 12.5, carbsPer100g: 43, fatsPer100g: 3.4, rawToCookedRatio: 1.0, category: 'carb', universallyAvailable: true },
  pasta: { name: 'Pasta (Dry)', caloriesPer100g: 371, proteinPer100g: 13, carbsPer100g: 74, fatsPer100g: 1.5, rawToCookedRatio: 2.25, category: 'carb', universallyAvailable: true },
  quinoa: { name: 'Quinoa (Dry)', caloriesPer100g: 368, proteinPer100g: 14.1, carbsPer100g: 64, fatsPer100g: 6, rawToCookedRatio: 3.0, category: 'carb', universallyAvailable: true },
  banana: { name: 'Banana', caloriesPer100g: 89, proteinPer100g: 1.1, carbsPer100g: 22.8, fatsPer100g: 0.3, rawToCookedRatio: 1.0, category: 'fruit', universallyAvailable: true },

  // Fats
  olive_oil: { name: 'Olive Oil', caloriesPer100g: 884, proteinPer100g: 0, carbsPer100g: 0, fatsPer100g: 100, rawToCookedRatio: 1.0, category: 'fat', universallyAvailable: true },
  peanut_butter: { name: 'Peanut Butter', caloriesPer100g: 588, proteinPer100g: 25, carbsPer100g: 20, fatsPer100g: 50, rawToCookedRatio: 1.0, category: 'fat', universallyAvailable: true },
  avocado: { name: 'Avocado', caloriesPer100g: 160, proteinPer100g: 2, carbsPer100g: 8.5, fatsPer100g: 14.7, rawToCookedRatio: 1.0, category: 'fat', universallyAvailable: true },
  mixed_nuts: { name: 'Mixed Nuts', caloriesPer100g: 607, proteinPer100g: 20, carbsPer100g: 21, fatsPer100g: 54, rawToCookedRatio: 1.0, category: 'fat', universallyAvailable: true },
  cheese: { name: 'Cheddar Cheese', caloriesPer100g: 402, proteinPer100g: 25, carbsPer100g: 1.3, fatsPer100g: 33, rawToCookedRatio: 1.0, category: 'fat', universallyAvailable: true },
  coconut_oil: { name: 'Coconut Oil', caloriesPer100g: 862, proteinPer100g: 0, carbsPer100g: 0, fatsPer100g: 100, rawToCookedRatio: 1.0, category: 'fat', universallyAvailable: true },

  // Vegetables
  broccoli: { name: 'Broccoli', caloriesPer100g: 34, proteinPer100g: 2.8, carbsPer100g: 6.6, fatsPer100g: 0.4, rawToCookedRatio: 1.0, category: 'vegetable', universallyAvailable: true },
  spinach: { name: 'Spinach', caloriesPer100g: 23, proteinPer100g: 2.9, carbsPer100g: 3.6, fatsPer100g: 0.4, rawToCookedRatio: 1.0, category: 'vegetable', universallyAvailable: true },
  cabbage: { name: 'Shredded Cabbage', caloriesPer100g: 25, proteinPer100g: 1.3, carbsPer100g: 5.8, fatsPer100g: 0.1, rawToCookedRatio: 1.0, category: 'vegetable', universallyAvailable: true },
  bell_peppers: { name: 'Bell Peppers', caloriesPer100g: 20, proteinPer100g: 0.9, carbsPer100g: 4.6, fatsPer100g: 0.2, rawToCookedRatio: 1.0, category: 'vegetable', universallyAvailable: true },
  carrots: { name: 'Carrots', caloriesPer100g: 41, proteinPer100g: 0.9, carbsPer100g: 9.6, fatsPer100g: 0.2, rawToCookedRatio: 1.0, category: 'vegetable', universallyAvailable: true },
  tomatoes: { name: 'Tomatoes', caloriesPer100g: 18, proteinPer100g: 0.9, carbsPer100g: 3.9, fatsPer100g: 0.2, rawToCookedRatio: 1.0, category: 'vegetable', universallyAvailable: true },
  onions: { name: 'Onions', caloriesPer100g: 40, proteinPer100g: 1.1, carbsPer100g: 9.3, fatsPer100g: 0.1, rawToCookedRatio: 1.0, category: 'vegetable', universallyAvailable: true },
  cucumbers: { name: 'Cucumbers', caloriesPer100g: 15, proteinPer100g: 0.7, carbsPer100g: 3.6, fatsPer100g: 0.1, rawToCookedRatio: 1.0, category: 'vegetable', universallyAvailable: true },
  zucchini: { name: 'Zucchini', caloriesPer100g: 17, proteinPer100g: 1.2, carbsPer100g: 3.1, fatsPer100g: 0.3, rawToCookedRatio: 1.0, category: 'vegetable', universallyAvailable: true },

  // Fruits
  apple: { name: 'Apple', caloriesPer100g: 52, proteinPer100g: 0.3, carbsPer100g: 14, fatsPer100g: 0.2, rawToCookedRatio: 1.0, category: 'fruit', universallyAvailable: true },
  berries: { name: 'Mixed Berries', caloriesPer100g: 57, proteinPer100g: 0.7, carbsPer100g: 14, fatsPer100g: 0.3, rawToCookedRatio: 1.0, category: 'fruit', universallyAvailable: true },
  orange: { name: 'Orange', caloriesPer100g: 47, proteinPer100g: 0.9, carbsPer100g: 12, fatsPer100g: 0.1, rawToCookedRatio: 1.0, category: 'fruit', universallyAvailable: true },
  watermelon: { name: 'Watermelon', caloriesPer100g: 30, proteinPer100g: 0.6, carbsPer100g: 7.6, fatsPer100g: 0.2, rawToCookedRatio: 1.0, category: 'fruit', universallyAvailable: true },

  // Dairy
  milk: { name: 'Milk (Whole)', caloriesPer100g: 61, proteinPer100g: 3.1, carbsPer100g: 4.8, fatsPer100g: 3.2, rawToCookedRatio: 1.0, category: 'dairy', universallyAvailable: true },
  skim_milk: { name: 'Milk (Skim)', caloriesPer100g: 34, proteinPer100g: 3.4, carbsPer100g: 5, fatsPer100g: 0.1, rawToCookedRatio: 1.0, category: 'dairy', universallyAvailable: true },
  greek_yogurt: { name: 'Greek Yogurt (Plain, Nonfat)', caloriesPer100g: 59, proteinPer100g: 10, carbsPer100g: 3.6, fatsPer100g: 0.4, rawToCookedRatio: 1.0, category: 'dairy', universallyAvailable: true },
  cottage_cheese: { name: 'Cottage Cheese (Low fat)', caloriesPer100g: 85, proteinPer100g: 11, carbsPer100g: 3, fatsPer100g: 2, rawToCookedRatio: 1.0, category: 'dairy', universallyAvailable: true }
};

export const mealTemplates: MealTemplate[] = [
  // CUTTING MEALS
  {
    name: 'Lean Egg White Scramble',
    phase: 'cut',
    mealType: 'breakfast',
    description: 'High volume, high protein breakfast to keep you full.',
    items: [
      { foodId: 'egg_whites', gramsRaw: 200 },
      { foodId: 'spinach', gramsRaw: 50 },
      { foodId: 'tomatoes', gramsRaw: 50 },
      { foodId: 'whole_wheat_bread', gramsRaw: 40 }
    ]
  },
  {
    name: 'Chicken & Veggie Bowl',
    phase: 'cut',
    mealType: 'lunch',
    description: 'Classic lean lunch packed with micronutrients.',
    items: [
      { foodId: 'chicken_breast', gramsRaw: 150 },
      { foodId: 'broccoli', gramsRaw: 100 },
      { foodId: 'white_rice', gramsRaw: 50 },
      { foodId: 'olive_oil', gramsRaw: 5 }
    ]
  },
  {
    name: 'White Fish & Sweet Potato',
    phase: 'cut',
    mealType: 'dinner',
    description: 'Light dinner with slow-digesting carbs.',
    items: [
      { foodId: 'white_fish', gramsRaw: 200 },
      { foodId: 'sweet_potato', gramsRaw: 150 },
      { foodId: 'cabbage', gramsRaw: 100 }
    ]
  },
  
  // LEAN PHASE MEALS (Maintenance / recomp)
  {
    name: 'Oats & Protein Power',
    phase: 'lean',
    mealType: 'breakfast',
    description: 'Balanced breakfast with healthy carbs.',
    items: [
      { foodId: 'oats', gramsRaw: 60 },
      { foodId: 'greek_yogurt', gramsRaw: 100 },
      { foodId: 'berries', gramsRaw: 80 }
    ]
  },
  {
    name: 'Turkey Wrap Style Salad',
    phase: 'lean',
    mealType: 'lunch',
    description: 'Hearty protein-dense salad.',
    items: [
      { foodId: 'turkey_breast', gramsRaw: 150 },
      { foodId: 'spinach', gramsRaw: 100 },
      { foodId: 'avocado', gramsRaw: 30 },
      { foodId: 'quinoa', gramsRaw: 40 }
    ]
  },
  {
    name: 'Pork Loin Roast',
    phase: 'lean',
    mealType: 'dinner',
    description: 'Satiating dinner with root vegetables.',
    items: [
      { foodId: 'pork_loin', gramsRaw: 160 },
      { foodId: 'potato', gramsRaw: 200 },
      { foodId: 'carrots', gramsRaw: 80 },
      { foodId: 'olive_oil', gramsRaw: 8 }
    ]
  },
  
  // BULKING MEALS
  {
    name: 'Mass Builder Omelette',
    phase: 'bulk',
    mealType: 'breakfast',
    description: 'Calorie dense and highly anabolic.',
    items: [
      { foodId: 'eggs', gramsRaw: 150 }, // ~3 eggs
      { foodId: 'cheese', gramsRaw: 30 },
      { foodId: 'whole_wheat_bread', gramsRaw: 80 },
      { foodId: 'milk', gramsRaw: 250 }
    ]
  },
  {
    name: 'Beef & Pasta',
    phase: 'bulk',
    mealType: 'lunch',
    description: 'Heavy carb and protein meal for recovery.',
    items: [
      { foodId: 'lean_beef', gramsRaw: 200 },
      { foodId: 'pasta', gramsRaw: 120 },
      { foodId: 'tomatoes', gramsRaw: 100 },
      { foodId: 'olive_oil', gramsRaw: 10 }
    ]
  },
  {
    name: 'Salmon & Rice Mountain',
    phase: 'bulk',
    mealType: 'dinner',
    description: 'Omega-3 rich feast.',
    items: [
      { foodId: 'salmon', gramsRaw: 200 },
      { foodId: 'white_rice', gramsRaw: 150 }, // dry weight
      { foodId: 'broccoli', gramsRaw: 150 },
      { foodId: 'olive_oil', gramsRaw: 15 }
    ]
  },
  
  // MAINTENANCE / SNACKS
  {
    name: 'Greek Yogurt Bowl',
    phase: 'maintenance',
    mealType: 'snack',
    description: 'Quick protein fix.',
    items: [
      { foodId: 'greek_yogurt', gramsRaw: 200 },
      { foodId: 'berries', gramsRaw: 100 },
      { foodId: 'mixed_nuts', gramsRaw: 20 }
    ]
  },
  {
    name: 'Tuna Salad on Wheat',
    phase: 'maintenance',
    mealType: 'lunch',
    description: 'Convenient work lunch.',
    items: [
      { foodId: 'tuna_water', gramsRaw: 150 },
      { foodId: 'whole_wheat_bread', gramsRaw: 80 },
      { foodId: 'spinach', gramsRaw: 30 }
    ]
  },
  {
    name: 'Cottage Cheese & Apple',
    phase: 'maintenance',
    mealType: 'snack',
    description: 'Slow-digesting casein protein.',
    items: [
      { foodId: 'cottage_cheese', gramsRaw: 150 },
      { foodId: 'apple', gramsRaw: 150 },
      { foodId: 'peanut_butter', gramsRaw: 15 }
    ]
  },
  {
    name: 'Chicken & Sweet Potato',
    phase: 'maintenance',
    mealType: 'dinner',
    description: 'The standard fitness dinner.',
    items: [
      { foodId: 'chicken_breast', gramsRaw: 180 },
      { foodId: 'sweet_potato', gramsRaw: 250 },
      { foodId: 'broccoli', gramsRaw: 100 },
      { foodId: 'olive_oil', gramsRaw: 10 }
    ]
  }
];
