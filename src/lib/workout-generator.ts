import type { SetupData } from './science';
import type { Exercise } from './workout-data';

export interface WorkoutDay {
  dayNumber: number;
  name: string; // e.g., 'Upper Body Push', 'Pull Day', 'Legs'
  focus: string[]; // muscle groups
  exercises: {
    exercise: Exercise;
    sets: number;
    reps: string;
    restSeconds: number;
  }[];
}

export interface WeeklyPlan {
  split: string; // 'Full Body' | 'Upper/Lower' | 'Push/Pull/Legs' etc.
  days: WorkoutDay[];
  restDays: number[];
  description: string;
}

function getRepsAndSets(experience: string): { sets: number; reps: string } {
  switch (experience) {
    case 'brand_new':
      return { sets: 2, reps: '12-15' };
    case 'beginner':
      return { sets: 3, reps: '10-12' };
    case 'intermediate':
      return { sets: 4, reps: '8-12' };
    case 'veteran':
      return { sets: 4, reps: '6-10 (Intensity)' };
    default:
      return { sets: 3, reps: '8-12' };
  }
}

function getExerciseCount(sessionMinutes: number): number {
  if (sessionMinutes <= 30) return 4;
  if (sessionMinutes <= 45) return 6;
  if (sessionMinutes <= 60) return 7;
  return 9; // 90 mins
}

function filterAndSortExercises(exercises: Exercise[], targetMuscles: string[], noSpotter: boolean, shyBeginner: boolean): Exercise[] {
  let filtered = exercises.filter(ex => {
    // Filter by spotter requirements
    if (noSpotter && ex.spotterRequired) return false;
    // Filter by quiet corner friendliness
    if (shyBeginner && !ex.quietCornerFriendly) return false;
    
    // Check if it targets at least one of the needed muscles
    const allMuscles = [ex.primaryMuscle, ...ex.secondaryMuscles];
    return allMuscles.some(m => targetMuscles.includes(m));
  });

  // Sort by effectiveness (descending, assuming lower rank number is better: 1 = best)
  filtered.sort((a, b) => a.effectivenessRank - b.effectivenessRank);
  return filtered;
}

export function generateWeeklyPlan(setupData: SetupData, allExercises: Exercise[]): WeeklyPlan {
  const { daysPerWeek, sessionMinutes, noSpotter, shyBeginner, experience } = setupData;
  const numExercises = getExerciseCount(sessionMinutes);
  const { sets, reps } = getRepsAndSets(experience);

  const plan: WeeklyPlan = {
    split: '',
    days: [],
    restDays: [],
    description: ''
  };

  const getDayExercises = (focus: string[], num: number) => {
    const sorted = filterAndSortExercises(allExercises, focus, noSpotter, shyBeginner);
    // Take the top 'num' exercises, unique if possible.
    const selected = sorted.slice(0, num);
    return selected.map(ex => ({
      exercise: ex,
      sets,
      reps,
      restSeconds: experience === 'brand_new' ? 90 : 60
    }));
  };

  if (daysPerWeek <= 3) {
    plan.split = 'Full Body';
    plan.description = 'A balanced full body routine hitting all major muscle groups.';
    const focus = ['chest', 'back', 'legs', 'shoulders', 'arms', 'core'];
    
    for (let i = 1; i <= daysPerWeek; i++) {
      plan.days.push({
        dayNumber: i,
        name: `Full Body Workout ${i}`,
        focus,
        exercises: getDayExercises(focus, numExercises)
      });
    }
    // Simplistic rest day assignment
    plan.restDays = daysPerWeek === 3 ? [2, 4, 6, 7] : [2, 3, 4, 5, 6, 7].slice(0, 7 - daysPerWeek);
  } else if (daysPerWeek === 4) {
    plan.split = 'Upper/Lower';
    plan.description = 'A classic 4-day split dividing upper body and lower body days for optimal recovery and stimulus.';
    
    plan.days.push({ dayNumber: 1, name: 'Upper Body', focus: ['chest', 'back', 'shoulders', 'arms'], exercises: getDayExercises(['chest', 'back', 'shoulders', 'arms'], numExercises) });
    plan.days.push({ dayNumber: 2, name: 'Lower Body & Core', focus: ['legs', 'core', 'calves', 'glutes'], exercises: getDayExercises(['legs', 'core', 'calves', 'glutes'], numExercises) });
    plan.days.push({ dayNumber: 3, name: 'Upper Body', focus: ['chest', 'back', 'shoulders', 'arms'], exercises: getDayExercises(['chest', 'back', 'shoulders', 'arms'], numExercises) });
    plan.days.push({ dayNumber: 4, name: 'Lower Body & Core', focus: ['legs', 'core', 'calves', 'glutes'], exercises: getDayExercises(['legs', 'core', 'calves', 'glutes'], numExercises) });
    
    plan.restDays = [3, 6, 7]; // Example rest days (Work Mon/Tue, Thu/Fri)
  } else if (daysPerWeek === 5) {
    plan.split = 'Upper/Lower/Push/Pull/Legs';
    plan.description = 'An advanced 5-day hybrid routine combining Upper/Lower with a PPL split.';
    
    plan.days.push({ dayNumber: 1, name: 'Upper Body', focus: ['chest', 'back', 'shoulders', 'arms'], exercises: getDayExercises(['chest', 'back', 'shoulders', 'arms'], numExercises) });
    plan.days.push({ dayNumber: 2, name: 'Lower Body', focus: ['legs', 'core'], exercises: getDayExercises(['legs', 'core'], numExercises) });
    plan.days.push({ dayNumber: 3, name: 'Push', focus: ['chest', 'shoulders', 'triceps'], exercises: getDayExercises(['chest', 'shoulders', 'triceps'], numExercises) });
    plan.days.push({ dayNumber: 4, name: 'Pull', focus: ['back', 'biceps', 'rear_delts'], exercises: getDayExercises(['back', 'biceps', 'rear_delts'], numExercises) });
    plan.days.push({ dayNumber: 5, name: 'Legs', focus: ['legs', 'calves'], exercises: getDayExercises(['legs', 'calves'], numExercises) });
    
    plan.restDays = [6, 7];
  } else {
    // 6 days
    plan.split = 'Push/Pull/Legs (x2)';
    plan.description = 'A high-frequency 6-day split hitting every muscle group twice a week.';
    
    for (let i = 0; i < 2; i++) {
      plan.days.push({ dayNumber: i*3 + 1, name: `Push ${i+1}`, focus: ['chest', 'shoulders', 'triceps'], exercises: getDayExercises(['chest', 'shoulders', 'triceps'], numExercises) });
      plan.days.push({ dayNumber: i*3 + 2, name: `Pull ${i+1}`, focus: ['back', 'biceps'], exercises: getDayExercises(['back', 'biceps'], numExercises) });
      plan.days.push({ dayNumber: i*3 + 3, name: `Legs ${i+1}`, focus: ['legs', 'calves', 'core'], exercises: getDayExercises(['legs', 'calves', 'core'], numExercises) });
    }
    plan.restDays = [7];
  }

  return plan;
}
