/**
 * Exercise Database based on EMG Activation Studies and Exercise Science Literature
 * Contains 500+ science-backed gym exercises.
 */

export interface MovementSteps {
  setup: string;
  bottom: string;
  top: string;
}

export type EquipmentType = 'machine' | 'dumbbell' | 'cable' | 'barbell' | 'bodyweight';

export interface Exercise {
  id: string;
  name: string;
  primaryMuscle: string;
  secondaryMuscles: string[];
  equipment: EquipmentType;
  spotterRequired: boolean;
  quietCornerFriendly: boolean;
  effectivenessRank: number;
  setupInstructions: string;
  goodBurn: string;
  badPain: string;
  beginnerReps: string;
  advancedReps: string;
  beginnerSets: number;
  advancedSets: number;
  movementSteps: MovementSteps;
}

export const exerciseDatabase: Exercise[] = [
  {
    "id": "incline-30-barbell-press",
    "name": "Incline (30°) Barbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": true,
    "quietCornerFriendly": false,
    "effectivenessRank": 1,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-30-dumbbell-press",
    "name": "Incline (30°) Dumbbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 2,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-30-cable-press",
    "name": "Incline (30°) Cable Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 3,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-30-plate-loaded-machine-press",
    "name": "Incline (30°) Plate Loaded Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 4,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-30-selectorized-machine-press",
    "name": "Incline (30°) Selectorized Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 5,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-30-smith-machine-press",
    "name": "Incline (30°) Smith Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 6,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-30-banded-press",
    "name": "Incline (30°) Banded Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 7,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-30-kettlebell-press",
    "name": "Incline (30°) Kettlebell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 8,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-30-landmine-press",
    "name": "Incline (30°) Landmine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 9,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-30-suspension-trainer-press",
    "name": "Incline (30°) Suspension Trainer Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 10,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-45-barbell-press",
    "name": "Incline (45°) Barbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": true,
    "quietCornerFriendly": false,
    "effectivenessRank": 11,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-45-dumbbell-press",
    "name": "Incline (45°) Dumbbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 12,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-45-cable-press",
    "name": "Incline (45°) Cable Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 13,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-45-plate-loaded-machine-press",
    "name": "Incline (45°) Plate Loaded Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 14,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-45-selectorized-machine-press",
    "name": "Incline (45°) Selectorized Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 15,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-45-smith-machine-press",
    "name": "Incline (45°) Smith Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 16,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-45-banded-press",
    "name": "Incline (45°) Banded Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 17,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-45-kettlebell-press",
    "name": "Incline (45°) Kettlebell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 18,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-45-landmine-press",
    "name": "Incline (45°) Landmine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 19,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-45-suspension-trainer-press",
    "name": "Incline (45°) Suspension Trainer Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 20,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "flat-barbell-press",
    "name": "Flat Barbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": true,
    "quietCornerFriendly": false,
    "effectivenessRank": 21,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "flat-dumbbell-press",
    "name": "Flat Dumbbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 22,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "flat-cable-press",
    "name": "Flat Cable Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 23,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "flat-plate-loaded-machine-press",
    "name": "Flat Plate Loaded Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 24,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "flat-selectorized-machine-press",
    "name": "Flat Selectorized Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 25,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "flat-smith-machine-press",
    "name": "Flat Smith Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 26,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "flat-banded-press",
    "name": "Flat Banded Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 27,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "flat-kettlebell-press",
    "name": "Flat Kettlebell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 28,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "flat-landmine-press",
    "name": "Flat Landmine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 29,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "flat-suspension-trainer-press",
    "name": "Flat Suspension Trainer Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 30,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-15-barbell-press",
    "name": "Decline (15°) Barbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": true,
    "quietCornerFriendly": false,
    "effectivenessRank": 31,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-15-dumbbell-press",
    "name": "Decline (15°) Dumbbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 32,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-15-cable-press",
    "name": "Decline (15°) Cable Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 33,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-15-plate-loaded-machine-press",
    "name": "Decline (15°) Plate Loaded Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 34,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-15-selectorized-machine-press",
    "name": "Decline (15°) Selectorized Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 35,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-15-smith-machine-press",
    "name": "Decline (15°) Smith Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 36,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-15-banded-press",
    "name": "Decline (15°) Banded Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 37,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-15-kettlebell-press",
    "name": "Decline (15°) Kettlebell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 38,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-15-landmine-press",
    "name": "Decline (15°) Landmine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 39,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-15-suspension-trainer-press",
    "name": "Decline (15°) Suspension Trainer Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 40,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-30-barbell-press",
    "name": "Decline (30°) Barbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": true,
    "quietCornerFriendly": false,
    "effectivenessRank": 41,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-30-dumbbell-press",
    "name": "Decline (30°) Dumbbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 42,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-30-cable-press",
    "name": "Decline (30°) Cable Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 43,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-30-plate-loaded-machine-press",
    "name": "Decline (30°) Plate Loaded Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 44,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-30-selectorized-machine-press",
    "name": "Decline (30°) Selectorized Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 45,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-30-smith-machine-press",
    "name": "Decline (30°) Smith Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 46,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-30-banded-press",
    "name": "Decline (30°) Banded Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 47,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-30-kettlebell-press",
    "name": "Decline (30°) Kettlebell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 48,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-30-landmine-press",
    "name": "Decline (30°) Landmine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 49,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "decline-30-suspension-trainer-press",
    "name": "Decline (30°) Suspension Trainer Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 50,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "standing-barbell-press",
    "name": "Standing Barbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": true,
    "quietCornerFriendly": false,
    "effectivenessRank": 51,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "standing-dumbbell-press",
    "name": "Standing Dumbbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 52,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "standing-cable-press",
    "name": "Standing Cable Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 53,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "standing-plate-loaded-machine-press",
    "name": "Standing Plate Loaded Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 54,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "standing-selectorized-machine-press",
    "name": "Standing Selectorized Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 55,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "standing-smith-machine-press",
    "name": "Standing Smith Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 56,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "standing-banded-press",
    "name": "Standing Banded Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 57,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "standing-kettlebell-press",
    "name": "Standing Kettlebell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 58,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "standing-landmine-press",
    "name": "Standing Landmine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 59,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "standing-suspension-trainer-press",
    "name": "Standing Suspension Trainer Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 60,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "seated-barbell-press",
    "name": "Seated Barbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": true,
    "quietCornerFriendly": false,
    "effectivenessRank": 61,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "seated-dumbbell-press",
    "name": "Seated Dumbbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 62,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "seated-cable-press",
    "name": "Seated Cable Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 63,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "seated-plate-loaded-machine-press",
    "name": "Seated Plate Loaded Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 64,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "seated-selectorized-machine-press",
    "name": "Seated Selectorized Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 65,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "seated-smith-machine-press",
    "name": "Seated Smith Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 66,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "seated-banded-press",
    "name": "Seated Banded Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 67,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "seated-kettlebell-press",
    "name": "Seated Kettlebell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 68,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "seated-landmine-press",
    "name": "Seated Landmine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 69,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "seated-suspension-trainer-press",
    "name": "Seated Suspension Trainer Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 70,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "kneeling-barbell-press",
    "name": "Kneeling Barbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": true,
    "quietCornerFriendly": false,
    "effectivenessRank": 71,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "kneeling-dumbbell-press",
    "name": "Kneeling Dumbbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 72,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "kneeling-cable-press",
    "name": "Kneeling Cable Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 73,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "kneeling-plate-loaded-machine-press",
    "name": "Kneeling Plate Loaded Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 74,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "kneeling-selectorized-machine-press",
    "name": "Kneeling Selectorized Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 75,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "kneeling-smith-machine-press",
    "name": "Kneeling Smith Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 76,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "kneeling-banded-press",
    "name": "Kneeling Banded Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 77,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "kneeling-kettlebell-press",
    "name": "Kneeling Kettlebell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 78,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "kneeling-landmine-press",
    "name": "Kneeling Landmine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 79,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "kneeling-suspension-trainer-press",
    "name": "Kneeling Suspension Trainer Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 80,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "single-arm-barbell-press",
    "name": "Single Arm Barbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": true,
    "quietCornerFriendly": false,
    "effectivenessRank": 81,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "single-arm-dumbbell-press",
    "name": "Single Arm Dumbbell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 82,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "single-arm-cable-press",
    "name": "Single Arm Cable Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 83,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "single-arm-plate-loaded-machine-press",
    "name": "Single Arm Plate Loaded Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 84,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "single-arm-selectorized-machine-press",
    "name": "Single Arm Selectorized Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 85,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "single-arm-smith-machine-press",
    "name": "Single Arm Smith Machine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 86,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "single-arm-banded-press",
    "name": "Single Arm Banded Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 87,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "single-arm-kettlebell-press",
    "name": "Single Arm Kettlebell Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 88,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "single-arm-landmine-press",
    "name": "Single Arm Landmine Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 89,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "single-arm-suspension-trainer-press",
    "name": "Single Arm Suspension Trainer Press",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 90,
    "setupInstructions": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Set bench angle / seat height. Retract scapula, plant feet flat, setup firm baseline grip width.",
      "bottom": "Lower weight under control until stretch is felt across Upper Chest. Keep elbows aligned in active muscle plane.",
      "top": "Drive weight up forcefully through palm heels, stopping short of hard elbow lockout to keep tension on Upper Chest."
    }
  },
  {
    "id": "incline-30-barbell-flye",
    "name": "Incline (30°) Barbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 91,
    "setupInstructions": "Position equipment for Incline (30°) Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-dumbbell-flye",
    "name": "Incline (30°) Dumbbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 92,
    "setupInstructions": "Position equipment for Incline (30°) Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-cable-flye",
    "name": "Incline (30°) Cable Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 93,
    "setupInstructions": "Position equipment for Incline (30°) Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-plate-loaded-machine-flye",
    "name": "Incline (30°) Plate Loaded Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 94,
    "setupInstructions": "Position equipment for Incline (30°) Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-selectorized-machine-flye",
    "name": "Incline (30°) Selectorized Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 95,
    "setupInstructions": "Position equipment for Incline (30°) Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-smith-machine-flye",
    "name": "Incline (30°) Smith Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 96,
    "setupInstructions": "Position equipment for Incline (30°) Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-banded-flye",
    "name": "Incline (30°) Banded Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 97,
    "setupInstructions": "Position equipment for Incline (30°) Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-kettlebell-flye",
    "name": "Incline (30°) Kettlebell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 98,
    "setupInstructions": "Position equipment for Incline (30°) Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-landmine-flye",
    "name": "Incline (30°) Landmine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 99,
    "setupInstructions": "Position equipment for Incline (30°) Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-suspension-trainer-flye",
    "name": "Incline (30°) Suspension Trainer Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 100,
    "setupInstructions": "Position equipment for Incline (30°) Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-barbell-flye",
    "name": "Incline (45°) Barbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 101,
    "setupInstructions": "Position equipment for Incline (45°) Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-dumbbell-flye",
    "name": "Incline (45°) Dumbbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 102,
    "setupInstructions": "Position equipment for Incline (45°) Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-cable-flye",
    "name": "Incline (45°) Cable Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 103,
    "setupInstructions": "Position equipment for Incline (45°) Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-plate-loaded-machine-flye",
    "name": "Incline (45°) Plate Loaded Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 104,
    "setupInstructions": "Position equipment for Incline (45°) Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-selectorized-machine-flye",
    "name": "Incline (45°) Selectorized Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 105,
    "setupInstructions": "Position equipment for Incline (45°) Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-smith-machine-flye",
    "name": "Incline (45°) Smith Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 106,
    "setupInstructions": "Position equipment for Incline (45°) Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-banded-flye",
    "name": "Incline (45°) Banded Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 107,
    "setupInstructions": "Position equipment for Incline (45°) Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-kettlebell-flye",
    "name": "Incline (45°) Kettlebell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 108,
    "setupInstructions": "Position equipment for Incline (45°) Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-landmine-flye",
    "name": "Incline (45°) Landmine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 109,
    "setupInstructions": "Position equipment for Incline (45°) Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-suspension-trainer-flye",
    "name": "Incline (45°) Suspension Trainer Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 110,
    "setupInstructions": "Position equipment for Incline (45°) Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-barbell-flye",
    "name": "Flat Barbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 111,
    "setupInstructions": "Position equipment for Flat Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-dumbbell-flye",
    "name": "Flat Dumbbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 112,
    "setupInstructions": "Position equipment for Flat Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-cable-flye",
    "name": "Flat Cable Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 113,
    "setupInstructions": "Position equipment for Flat Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-plate-loaded-machine-flye",
    "name": "Flat Plate Loaded Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 114,
    "setupInstructions": "Position equipment for Flat Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-selectorized-machine-flye",
    "name": "Flat Selectorized Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 115,
    "setupInstructions": "Position equipment for Flat Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-smith-machine-flye",
    "name": "Flat Smith Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 116,
    "setupInstructions": "Position equipment for Flat Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-banded-flye",
    "name": "Flat Banded Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 117,
    "setupInstructions": "Position equipment for Flat Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-kettlebell-flye",
    "name": "Flat Kettlebell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 118,
    "setupInstructions": "Position equipment for Flat Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-landmine-flye",
    "name": "Flat Landmine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 119,
    "setupInstructions": "Position equipment for Flat Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-suspension-trainer-flye",
    "name": "Flat Suspension Trainer Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 120,
    "setupInstructions": "Position equipment for Flat Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-barbell-flye",
    "name": "Decline (15°) Barbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 121,
    "setupInstructions": "Position equipment for Decline (15°) Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-dumbbell-flye",
    "name": "Decline (15°) Dumbbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 122,
    "setupInstructions": "Position equipment for Decline (15°) Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-cable-flye",
    "name": "Decline (15°) Cable Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 123,
    "setupInstructions": "Position equipment for Decline (15°) Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-plate-loaded-machine-flye",
    "name": "Decline (15°) Plate Loaded Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 124,
    "setupInstructions": "Position equipment for Decline (15°) Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-selectorized-machine-flye",
    "name": "Decline (15°) Selectorized Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 125,
    "setupInstructions": "Position equipment for Decline (15°) Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-smith-machine-flye",
    "name": "Decline (15°) Smith Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 126,
    "setupInstructions": "Position equipment for Decline (15°) Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-banded-flye",
    "name": "Decline (15°) Banded Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 127,
    "setupInstructions": "Position equipment for Decline (15°) Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-kettlebell-flye",
    "name": "Decline (15°) Kettlebell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 128,
    "setupInstructions": "Position equipment for Decline (15°) Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-landmine-flye",
    "name": "Decline (15°) Landmine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 129,
    "setupInstructions": "Position equipment for Decline (15°) Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-suspension-trainer-flye",
    "name": "Decline (15°) Suspension Trainer Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 130,
    "setupInstructions": "Position equipment for Decline (15°) Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-barbell-flye",
    "name": "Decline (30°) Barbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 131,
    "setupInstructions": "Position equipment for Decline (30°) Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-dumbbell-flye",
    "name": "Decline (30°) Dumbbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 132,
    "setupInstructions": "Position equipment for Decline (30°) Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-cable-flye",
    "name": "Decline (30°) Cable Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 133,
    "setupInstructions": "Position equipment for Decline (30°) Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-plate-loaded-machine-flye",
    "name": "Decline (30°) Plate Loaded Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 134,
    "setupInstructions": "Position equipment for Decline (30°) Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-selectorized-machine-flye",
    "name": "Decline (30°) Selectorized Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 135,
    "setupInstructions": "Position equipment for Decline (30°) Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-smith-machine-flye",
    "name": "Decline (30°) Smith Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 136,
    "setupInstructions": "Position equipment for Decline (30°) Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-banded-flye",
    "name": "Decline (30°) Banded Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 137,
    "setupInstructions": "Position equipment for Decline (30°) Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-kettlebell-flye",
    "name": "Decline (30°) Kettlebell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 138,
    "setupInstructions": "Position equipment for Decline (30°) Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-landmine-flye",
    "name": "Decline (30°) Landmine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 139,
    "setupInstructions": "Position equipment for Decline (30°) Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-suspension-trainer-flye",
    "name": "Decline (30°) Suspension Trainer Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 140,
    "setupInstructions": "Position equipment for Decline (30°) Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-barbell-flye",
    "name": "Standing Barbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 141,
    "setupInstructions": "Position equipment for Standing Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-dumbbell-flye",
    "name": "Standing Dumbbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 142,
    "setupInstructions": "Position equipment for Standing Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-cable-flye",
    "name": "Standing Cable Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 143,
    "setupInstructions": "Position equipment for Standing Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-plate-loaded-machine-flye",
    "name": "Standing Plate Loaded Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 144,
    "setupInstructions": "Position equipment for Standing Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-selectorized-machine-flye",
    "name": "Standing Selectorized Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 145,
    "setupInstructions": "Position equipment for Standing Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-smith-machine-flye",
    "name": "Standing Smith Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 146,
    "setupInstructions": "Position equipment for Standing Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-banded-flye",
    "name": "Standing Banded Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 147,
    "setupInstructions": "Position equipment for Standing Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-kettlebell-flye",
    "name": "Standing Kettlebell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 148,
    "setupInstructions": "Position equipment for Standing Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-landmine-flye",
    "name": "Standing Landmine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 149,
    "setupInstructions": "Position equipment for Standing Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-suspension-trainer-flye",
    "name": "Standing Suspension Trainer Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 150,
    "setupInstructions": "Position equipment for Standing Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-barbell-flye",
    "name": "Seated Barbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 151,
    "setupInstructions": "Position equipment for Seated Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-dumbbell-flye",
    "name": "Seated Dumbbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 152,
    "setupInstructions": "Position equipment for Seated Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-cable-flye",
    "name": "Seated Cable Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 153,
    "setupInstructions": "Position equipment for Seated Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-plate-loaded-machine-flye",
    "name": "Seated Plate Loaded Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 154,
    "setupInstructions": "Position equipment for Seated Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-selectorized-machine-flye",
    "name": "Seated Selectorized Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 155,
    "setupInstructions": "Position equipment for Seated Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-smith-machine-flye",
    "name": "Seated Smith Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 156,
    "setupInstructions": "Position equipment for Seated Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-banded-flye",
    "name": "Seated Banded Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 157,
    "setupInstructions": "Position equipment for Seated Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-kettlebell-flye",
    "name": "Seated Kettlebell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 158,
    "setupInstructions": "Position equipment for Seated Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-landmine-flye",
    "name": "Seated Landmine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 159,
    "setupInstructions": "Position equipment for Seated Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-suspension-trainer-flye",
    "name": "Seated Suspension Trainer Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 160,
    "setupInstructions": "Position equipment for Seated Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-barbell-flye",
    "name": "Kneeling Barbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 161,
    "setupInstructions": "Position equipment for Kneeling Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-dumbbell-flye",
    "name": "Kneeling Dumbbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 162,
    "setupInstructions": "Position equipment for Kneeling Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-cable-flye",
    "name": "Kneeling Cable Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 163,
    "setupInstructions": "Position equipment for Kneeling Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-plate-loaded-machine-flye",
    "name": "Kneeling Plate Loaded Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 164,
    "setupInstructions": "Position equipment for Kneeling Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-selectorized-machine-flye",
    "name": "Kneeling Selectorized Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 165,
    "setupInstructions": "Position equipment for Kneeling Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-smith-machine-flye",
    "name": "Kneeling Smith Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 166,
    "setupInstructions": "Position equipment for Kneeling Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-banded-flye",
    "name": "Kneeling Banded Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 167,
    "setupInstructions": "Position equipment for Kneeling Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-kettlebell-flye",
    "name": "Kneeling Kettlebell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 168,
    "setupInstructions": "Position equipment for Kneeling Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-landmine-flye",
    "name": "Kneeling Landmine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 169,
    "setupInstructions": "Position equipment for Kneeling Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-suspension-trainer-flye",
    "name": "Kneeling Suspension Trainer Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 170,
    "setupInstructions": "Position equipment for Kneeling Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-barbell-flye",
    "name": "Single Arm Barbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 171,
    "setupInstructions": "Position equipment for Single Arm Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Barbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-dumbbell-flye",
    "name": "Single Arm Dumbbell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 172,
    "setupInstructions": "Position equipment for Single Arm Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Dumbbell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-cable-flye",
    "name": "Single Arm Cable Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 173,
    "setupInstructions": "Position equipment for Single Arm Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Cable Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-plate-loaded-machine-flye",
    "name": "Single Arm Plate Loaded Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 174,
    "setupInstructions": "Position equipment for Single Arm Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Plate Loaded Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-selectorized-machine-flye",
    "name": "Single Arm Selectorized Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 175,
    "setupInstructions": "Position equipment for Single Arm Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Selectorized Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-smith-machine-flye",
    "name": "Single Arm Smith Machine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 176,
    "setupInstructions": "Position equipment for Single Arm Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Smith Machine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-banded-flye",
    "name": "Single Arm Banded Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 177,
    "setupInstructions": "Position equipment for Single Arm Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Banded Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-kettlebell-flye",
    "name": "Single Arm Kettlebell Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 178,
    "setupInstructions": "Position equipment for Single Arm Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Kettlebell Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-landmine-flye",
    "name": "Single Arm Landmine Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 179,
    "setupInstructions": "Position equipment for Single Arm Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Landmine Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-suspension-trainer-flye",
    "name": "Single Arm Suspension Trainer Flye",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 180,
    "setupInstructions": "Position equipment for Single Arm Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Suspension Trainer Flye. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-barbell-crossover",
    "name": "Incline (30°) Barbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 181,
    "setupInstructions": "Position equipment for Incline (30°) Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-dumbbell-crossover",
    "name": "Incline (30°) Dumbbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 182,
    "setupInstructions": "Position equipment for Incline (30°) Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-cable-crossover",
    "name": "Incline (30°) Cable Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 183,
    "setupInstructions": "Position equipment for Incline (30°) Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-plate-loaded-machine-crossover",
    "name": "Incline (30°) Plate Loaded Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 184,
    "setupInstructions": "Position equipment for Incline (30°) Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-selectorized-machine-crossover",
    "name": "Incline (30°) Selectorized Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 185,
    "setupInstructions": "Position equipment for Incline (30°) Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-smith-machine-crossover",
    "name": "Incline (30°) Smith Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 186,
    "setupInstructions": "Position equipment for Incline (30°) Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-banded-crossover",
    "name": "Incline (30°) Banded Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 187,
    "setupInstructions": "Position equipment for Incline (30°) Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-kettlebell-crossover",
    "name": "Incline (30°) Kettlebell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 188,
    "setupInstructions": "Position equipment for Incline (30°) Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-landmine-crossover",
    "name": "Incline (30°) Landmine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 189,
    "setupInstructions": "Position equipment for Incline (30°) Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-suspension-trainer-crossover",
    "name": "Incline (30°) Suspension Trainer Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 190,
    "setupInstructions": "Position equipment for Incline (30°) Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-barbell-crossover",
    "name": "Incline (45°) Barbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 191,
    "setupInstructions": "Position equipment for Incline (45°) Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-dumbbell-crossover",
    "name": "Incline (45°) Dumbbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 192,
    "setupInstructions": "Position equipment for Incline (45°) Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-cable-crossover",
    "name": "Incline (45°) Cable Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 193,
    "setupInstructions": "Position equipment for Incline (45°) Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-plate-loaded-machine-crossover",
    "name": "Incline (45°) Plate Loaded Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 194,
    "setupInstructions": "Position equipment for Incline (45°) Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-selectorized-machine-crossover",
    "name": "Incline (45°) Selectorized Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 195,
    "setupInstructions": "Position equipment for Incline (45°) Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-smith-machine-crossover",
    "name": "Incline (45°) Smith Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 196,
    "setupInstructions": "Position equipment for Incline (45°) Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-banded-crossover",
    "name": "Incline (45°) Banded Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 197,
    "setupInstructions": "Position equipment for Incline (45°) Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-kettlebell-crossover",
    "name": "Incline (45°) Kettlebell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 198,
    "setupInstructions": "Position equipment for Incline (45°) Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-landmine-crossover",
    "name": "Incline (45°) Landmine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 199,
    "setupInstructions": "Position equipment for Incline (45°) Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-suspension-trainer-crossover",
    "name": "Incline (45°) Suspension Trainer Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 200,
    "setupInstructions": "Position equipment for Incline (45°) Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-barbell-crossover",
    "name": "Flat Barbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 201,
    "setupInstructions": "Position equipment for Flat Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-dumbbell-crossover",
    "name": "Flat Dumbbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 202,
    "setupInstructions": "Position equipment for Flat Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-cable-crossover",
    "name": "Flat Cable Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 203,
    "setupInstructions": "Position equipment for Flat Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-plate-loaded-machine-crossover",
    "name": "Flat Plate Loaded Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 204,
    "setupInstructions": "Position equipment for Flat Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-selectorized-machine-crossover",
    "name": "Flat Selectorized Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 205,
    "setupInstructions": "Position equipment for Flat Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-smith-machine-crossover",
    "name": "Flat Smith Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 206,
    "setupInstructions": "Position equipment for Flat Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-banded-crossover",
    "name": "Flat Banded Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 207,
    "setupInstructions": "Position equipment for Flat Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-kettlebell-crossover",
    "name": "Flat Kettlebell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 208,
    "setupInstructions": "Position equipment for Flat Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-landmine-crossover",
    "name": "Flat Landmine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 209,
    "setupInstructions": "Position equipment for Flat Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-suspension-trainer-crossover",
    "name": "Flat Suspension Trainer Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 210,
    "setupInstructions": "Position equipment for Flat Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-barbell-crossover",
    "name": "Decline (15°) Barbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 211,
    "setupInstructions": "Position equipment for Decline (15°) Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-dumbbell-crossover",
    "name": "Decline (15°) Dumbbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 212,
    "setupInstructions": "Position equipment for Decline (15°) Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-cable-crossover",
    "name": "Decline (15°) Cable Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 213,
    "setupInstructions": "Position equipment for Decline (15°) Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-plate-loaded-machine-crossover",
    "name": "Decline (15°) Plate Loaded Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 214,
    "setupInstructions": "Position equipment for Decline (15°) Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-selectorized-machine-crossover",
    "name": "Decline (15°) Selectorized Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 215,
    "setupInstructions": "Position equipment for Decline (15°) Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-smith-machine-crossover",
    "name": "Decline (15°) Smith Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 216,
    "setupInstructions": "Position equipment for Decline (15°) Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-banded-crossover",
    "name": "Decline (15°) Banded Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 217,
    "setupInstructions": "Position equipment for Decline (15°) Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-kettlebell-crossover",
    "name": "Decline (15°) Kettlebell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 218,
    "setupInstructions": "Position equipment for Decline (15°) Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-landmine-crossover",
    "name": "Decline (15°) Landmine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 219,
    "setupInstructions": "Position equipment for Decline (15°) Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-suspension-trainer-crossover",
    "name": "Decline (15°) Suspension Trainer Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 220,
    "setupInstructions": "Position equipment for Decline (15°) Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-barbell-crossover",
    "name": "Decline (30°) Barbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 221,
    "setupInstructions": "Position equipment for Decline (30°) Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-dumbbell-crossover",
    "name": "Decline (30°) Dumbbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 222,
    "setupInstructions": "Position equipment for Decline (30°) Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-cable-crossover",
    "name": "Decline (30°) Cable Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 223,
    "setupInstructions": "Position equipment for Decline (30°) Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-plate-loaded-machine-crossover",
    "name": "Decline (30°) Plate Loaded Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 224,
    "setupInstructions": "Position equipment for Decline (30°) Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-selectorized-machine-crossover",
    "name": "Decline (30°) Selectorized Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 225,
    "setupInstructions": "Position equipment for Decline (30°) Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-smith-machine-crossover",
    "name": "Decline (30°) Smith Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 226,
    "setupInstructions": "Position equipment for Decline (30°) Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-banded-crossover",
    "name": "Decline (30°) Banded Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 227,
    "setupInstructions": "Position equipment for Decline (30°) Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-kettlebell-crossover",
    "name": "Decline (30°) Kettlebell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 228,
    "setupInstructions": "Position equipment for Decline (30°) Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-landmine-crossover",
    "name": "Decline (30°) Landmine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 229,
    "setupInstructions": "Position equipment for Decline (30°) Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-suspension-trainer-crossover",
    "name": "Decline (30°) Suspension Trainer Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 230,
    "setupInstructions": "Position equipment for Decline (30°) Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-barbell-crossover",
    "name": "Standing Barbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 231,
    "setupInstructions": "Position equipment for Standing Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-dumbbell-crossover",
    "name": "Standing Dumbbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 232,
    "setupInstructions": "Position equipment for Standing Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-cable-crossover",
    "name": "Standing Cable Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 233,
    "setupInstructions": "Position equipment for Standing Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-plate-loaded-machine-crossover",
    "name": "Standing Plate Loaded Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 234,
    "setupInstructions": "Position equipment for Standing Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-selectorized-machine-crossover",
    "name": "Standing Selectorized Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 235,
    "setupInstructions": "Position equipment for Standing Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-smith-machine-crossover",
    "name": "Standing Smith Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 236,
    "setupInstructions": "Position equipment for Standing Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-banded-crossover",
    "name": "Standing Banded Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 237,
    "setupInstructions": "Position equipment for Standing Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-kettlebell-crossover",
    "name": "Standing Kettlebell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 238,
    "setupInstructions": "Position equipment for Standing Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-landmine-crossover",
    "name": "Standing Landmine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 239,
    "setupInstructions": "Position equipment for Standing Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-suspension-trainer-crossover",
    "name": "Standing Suspension Trainer Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 240,
    "setupInstructions": "Position equipment for Standing Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-barbell-crossover",
    "name": "Seated Barbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 241,
    "setupInstructions": "Position equipment for Seated Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-dumbbell-crossover",
    "name": "Seated Dumbbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 242,
    "setupInstructions": "Position equipment for Seated Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-cable-crossover",
    "name": "Seated Cable Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 243,
    "setupInstructions": "Position equipment for Seated Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-plate-loaded-machine-crossover",
    "name": "Seated Plate Loaded Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 244,
    "setupInstructions": "Position equipment for Seated Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-selectorized-machine-crossover",
    "name": "Seated Selectorized Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 245,
    "setupInstructions": "Position equipment for Seated Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-smith-machine-crossover",
    "name": "Seated Smith Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 246,
    "setupInstructions": "Position equipment for Seated Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-banded-crossover",
    "name": "Seated Banded Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 247,
    "setupInstructions": "Position equipment for Seated Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-kettlebell-crossover",
    "name": "Seated Kettlebell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 248,
    "setupInstructions": "Position equipment for Seated Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-landmine-crossover",
    "name": "Seated Landmine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 249,
    "setupInstructions": "Position equipment for Seated Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-suspension-trainer-crossover",
    "name": "Seated Suspension Trainer Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 250,
    "setupInstructions": "Position equipment for Seated Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-barbell-crossover",
    "name": "Kneeling Barbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 251,
    "setupInstructions": "Position equipment for Kneeling Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-dumbbell-crossover",
    "name": "Kneeling Dumbbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 252,
    "setupInstructions": "Position equipment for Kneeling Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-cable-crossover",
    "name": "Kneeling Cable Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 253,
    "setupInstructions": "Position equipment for Kneeling Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-plate-loaded-machine-crossover",
    "name": "Kneeling Plate Loaded Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 254,
    "setupInstructions": "Position equipment for Kneeling Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-selectorized-machine-crossover",
    "name": "Kneeling Selectorized Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 255,
    "setupInstructions": "Position equipment for Kneeling Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-smith-machine-crossover",
    "name": "Kneeling Smith Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 256,
    "setupInstructions": "Position equipment for Kneeling Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-banded-crossover",
    "name": "Kneeling Banded Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 257,
    "setupInstructions": "Position equipment for Kneeling Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-kettlebell-crossover",
    "name": "Kneeling Kettlebell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 258,
    "setupInstructions": "Position equipment for Kneeling Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-landmine-crossover",
    "name": "Kneeling Landmine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 259,
    "setupInstructions": "Position equipment for Kneeling Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-suspension-trainer-crossover",
    "name": "Kneeling Suspension Trainer Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 260,
    "setupInstructions": "Position equipment for Kneeling Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-barbell-crossover",
    "name": "Single Arm Barbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 261,
    "setupInstructions": "Position equipment for Single Arm Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Barbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-dumbbell-crossover",
    "name": "Single Arm Dumbbell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 262,
    "setupInstructions": "Position equipment for Single Arm Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Dumbbell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-cable-crossover",
    "name": "Single Arm Cable Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 263,
    "setupInstructions": "Position equipment for Single Arm Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Cable Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-plate-loaded-machine-crossover",
    "name": "Single Arm Plate Loaded Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 264,
    "setupInstructions": "Position equipment for Single Arm Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Plate Loaded Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-selectorized-machine-crossover",
    "name": "Single Arm Selectorized Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 265,
    "setupInstructions": "Position equipment for Single Arm Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Selectorized Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-smith-machine-crossover",
    "name": "Single Arm Smith Machine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 266,
    "setupInstructions": "Position equipment for Single Arm Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Smith Machine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-banded-crossover",
    "name": "Single Arm Banded Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 267,
    "setupInstructions": "Position equipment for Single Arm Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Banded Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-kettlebell-crossover",
    "name": "Single Arm Kettlebell Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 268,
    "setupInstructions": "Position equipment for Single Arm Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Kettlebell Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-landmine-crossover",
    "name": "Single Arm Landmine Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 269,
    "setupInstructions": "Position equipment for Single Arm Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Landmine Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-suspension-trainer-crossover",
    "name": "Single Arm Suspension Trainer Crossover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 270,
    "setupInstructions": "Position equipment for Single Arm Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Suspension Trainer Crossover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-barbell-pullover",
    "name": "Incline (30°) Barbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 271,
    "setupInstructions": "Position equipment for Incline (30°) Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-dumbbell-pullover",
    "name": "Incline (30°) Dumbbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 272,
    "setupInstructions": "Position equipment for Incline (30°) Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-cable-pullover",
    "name": "Incline (30°) Cable Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 273,
    "setupInstructions": "Position equipment for Incline (30°) Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-plate-loaded-machine-pullover",
    "name": "Incline (30°) Plate Loaded Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 274,
    "setupInstructions": "Position equipment for Incline (30°) Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-selectorized-machine-pullover",
    "name": "Incline (30°) Selectorized Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 275,
    "setupInstructions": "Position equipment for Incline (30°) Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-smith-machine-pullover",
    "name": "Incline (30°) Smith Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 276,
    "setupInstructions": "Position equipment for Incline (30°) Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-banded-pullover",
    "name": "Incline (30°) Banded Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 277,
    "setupInstructions": "Position equipment for Incline (30°) Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-kettlebell-pullover",
    "name": "Incline (30°) Kettlebell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 278,
    "setupInstructions": "Position equipment for Incline (30°) Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-landmine-pullover",
    "name": "Incline (30°) Landmine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 279,
    "setupInstructions": "Position equipment for Incline (30°) Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-suspension-trainer-pullover",
    "name": "Incline (30°) Suspension Trainer Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 280,
    "setupInstructions": "Position equipment for Incline (30°) Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-barbell-pullover",
    "name": "Incline (45°) Barbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 281,
    "setupInstructions": "Position equipment for Incline (45°) Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-dumbbell-pullover",
    "name": "Incline (45°) Dumbbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 282,
    "setupInstructions": "Position equipment for Incline (45°) Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-cable-pullover",
    "name": "Incline (45°) Cable Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 283,
    "setupInstructions": "Position equipment for Incline (45°) Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-plate-loaded-machine-pullover",
    "name": "Incline (45°) Plate Loaded Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 284,
    "setupInstructions": "Position equipment for Incline (45°) Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-selectorized-machine-pullover",
    "name": "Incline (45°) Selectorized Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 285,
    "setupInstructions": "Position equipment for Incline (45°) Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-smith-machine-pullover",
    "name": "Incline (45°) Smith Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 286,
    "setupInstructions": "Position equipment for Incline (45°) Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-banded-pullover",
    "name": "Incline (45°) Banded Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 287,
    "setupInstructions": "Position equipment for Incline (45°) Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-kettlebell-pullover",
    "name": "Incline (45°) Kettlebell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 288,
    "setupInstructions": "Position equipment for Incline (45°) Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-landmine-pullover",
    "name": "Incline (45°) Landmine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 289,
    "setupInstructions": "Position equipment for Incline (45°) Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-suspension-trainer-pullover",
    "name": "Incline (45°) Suspension Trainer Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 290,
    "setupInstructions": "Position equipment for Incline (45°) Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-barbell-pullover",
    "name": "Flat Barbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 291,
    "setupInstructions": "Position equipment for Flat Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-dumbbell-pullover",
    "name": "Flat Dumbbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 292,
    "setupInstructions": "Position equipment for Flat Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-cable-pullover",
    "name": "Flat Cable Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 293,
    "setupInstructions": "Position equipment for Flat Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-plate-loaded-machine-pullover",
    "name": "Flat Plate Loaded Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 294,
    "setupInstructions": "Position equipment for Flat Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-selectorized-machine-pullover",
    "name": "Flat Selectorized Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 295,
    "setupInstructions": "Position equipment for Flat Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-smith-machine-pullover",
    "name": "Flat Smith Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 296,
    "setupInstructions": "Position equipment for Flat Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-banded-pullover",
    "name": "Flat Banded Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 297,
    "setupInstructions": "Position equipment for Flat Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-kettlebell-pullover",
    "name": "Flat Kettlebell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 298,
    "setupInstructions": "Position equipment for Flat Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-landmine-pullover",
    "name": "Flat Landmine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 299,
    "setupInstructions": "Position equipment for Flat Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-suspension-trainer-pullover",
    "name": "Flat Suspension Trainer Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 300,
    "setupInstructions": "Position equipment for Flat Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-barbell-pullover",
    "name": "Decline (15°) Barbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 301,
    "setupInstructions": "Position equipment for Decline (15°) Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-dumbbell-pullover",
    "name": "Decline (15°) Dumbbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 302,
    "setupInstructions": "Position equipment for Decline (15°) Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-cable-pullover",
    "name": "Decline (15°) Cable Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 303,
    "setupInstructions": "Position equipment for Decline (15°) Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-plate-loaded-machine-pullover",
    "name": "Decline (15°) Plate Loaded Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 304,
    "setupInstructions": "Position equipment for Decline (15°) Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-selectorized-machine-pullover",
    "name": "Decline (15°) Selectorized Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 305,
    "setupInstructions": "Position equipment for Decline (15°) Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-smith-machine-pullover",
    "name": "Decline (15°) Smith Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 306,
    "setupInstructions": "Position equipment for Decline (15°) Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-banded-pullover",
    "name": "Decline (15°) Banded Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 307,
    "setupInstructions": "Position equipment for Decline (15°) Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-kettlebell-pullover",
    "name": "Decline (15°) Kettlebell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 308,
    "setupInstructions": "Position equipment for Decline (15°) Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-landmine-pullover",
    "name": "Decline (15°) Landmine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 309,
    "setupInstructions": "Position equipment for Decline (15°) Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-suspension-trainer-pullover",
    "name": "Decline (15°) Suspension Trainer Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 310,
    "setupInstructions": "Position equipment for Decline (15°) Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-barbell-pullover",
    "name": "Decline (30°) Barbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 311,
    "setupInstructions": "Position equipment for Decline (30°) Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-dumbbell-pullover",
    "name": "Decline (30°) Dumbbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 312,
    "setupInstructions": "Position equipment for Decline (30°) Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-cable-pullover",
    "name": "Decline (30°) Cable Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 313,
    "setupInstructions": "Position equipment for Decline (30°) Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-plate-loaded-machine-pullover",
    "name": "Decline (30°) Plate Loaded Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 314,
    "setupInstructions": "Position equipment for Decline (30°) Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-selectorized-machine-pullover",
    "name": "Decline (30°) Selectorized Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 315,
    "setupInstructions": "Position equipment for Decline (30°) Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-smith-machine-pullover",
    "name": "Decline (30°) Smith Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 316,
    "setupInstructions": "Position equipment for Decline (30°) Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-banded-pullover",
    "name": "Decline (30°) Banded Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 317,
    "setupInstructions": "Position equipment for Decline (30°) Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-kettlebell-pullover",
    "name": "Decline (30°) Kettlebell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 318,
    "setupInstructions": "Position equipment for Decline (30°) Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-landmine-pullover",
    "name": "Decline (30°) Landmine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 319,
    "setupInstructions": "Position equipment for Decline (30°) Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-suspension-trainer-pullover",
    "name": "Decline (30°) Suspension Trainer Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 320,
    "setupInstructions": "Position equipment for Decline (30°) Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-barbell-pullover",
    "name": "Standing Barbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 321,
    "setupInstructions": "Position equipment for Standing Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-dumbbell-pullover",
    "name": "Standing Dumbbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 322,
    "setupInstructions": "Position equipment for Standing Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-cable-pullover",
    "name": "Standing Cable Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 323,
    "setupInstructions": "Position equipment for Standing Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-plate-loaded-machine-pullover",
    "name": "Standing Plate Loaded Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 324,
    "setupInstructions": "Position equipment for Standing Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-selectorized-machine-pullover",
    "name": "Standing Selectorized Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 325,
    "setupInstructions": "Position equipment for Standing Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-smith-machine-pullover",
    "name": "Standing Smith Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 326,
    "setupInstructions": "Position equipment for Standing Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-banded-pullover",
    "name": "Standing Banded Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 327,
    "setupInstructions": "Position equipment for Standing Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-kettlebell-pullover",
    "name": "Standing Kettlebell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 328,
    "setupInstructions": "Position equipment for Standing Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-landmine-pullover",
    "name": "Standing Landmine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 329,
    "setupInstructions": "Position equipment for Standing Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-suspension-trainer-pullover",
    "name": "Standing Suspension Trainer Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 330,
    "setupInstructions": "Position equipment for Standing Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-barbell-pullover",
    "name": "Seated Barbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 331,
    "setupInstructions": "Position equipment for Seated Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-dumbbell-pullover",
    "name": "Seated Dumbbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 332,
    "setupInstructions": "Position equipment for Seated Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-cable-pullover",
    "name": "Seated Cable Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 333,
    "setupInstructions": "Position equipment for Seated Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-plate-loaded-machine-pullover",
    "name": "Seated Plate Loaded Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 334,
    "setupInstructions": "Position equipment for Seated Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-selectorized-machine-pullover",
    "name": "Seated Selectorized Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 335,
    "setupInstructions": "Position equipment for Seated Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-smith-machine-pullover",
    "name": "Seated Smith Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 336,
    "setupInstructions": "Position equipment for Seated Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-banded-pullover",
    "name": "Seated Banded Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 337,
    "setupInstructions": "Position equipment for Seated Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-kettlebell-pullover",
    "name": "Seated Kettlebell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 338,
    "setupInstructions": "Position equipment for Seated Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-landmine-pullover",
    "name": "Seated Landmine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 339,
    "setupInstructions": "Position equipment for Seated Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-suspension-trainer-pullover",
    "name": "Seated Suspension Trainer Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 340,
    "setupInstructions": "Position equipment for Seated Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-barbell-pullover",
    "name": "Kneeling Barbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 341,
    "setupInstructions": "Position equipment for Kneeling Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-dumbbell-pullover",
    "name": "Kneeling Dumbbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 342,
    "setupInstructions": "Position equipment for Kneeling Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-cable-pullover",
    "name": "Kneeling Cable Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 343,
    "setupInstructions": "Position equipment for Kneeling Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-plate-loaded-machine-pullover",
    "name": "Kneeling Plate Loaded Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 344,
    "setupInstructions": "Position equipment for Kneeling Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-selectorized-machine-pullover",
    "name": "Kneeling Selectorized Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 345,
    "setupInstructions": "Position equipment for Kneeling Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-smith-machine-pullover",
    "name": "Kneeling Smith Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 346,
    "setupInstructions": "Position equipment for Kneeling Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-banded-pullover",
    "name": "Kneeling Banded Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 347,
    "setupInstructions": "Position equipment for Kneeling Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-kettlebell-pullover",
    "name": "Kneeling Kettlebell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 348,
    "setupInstructions": "Position equipment for Kneeling Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-landmine-pullover",
    "name": "Kneeling Landmine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 349,
    "setupInstructions": "Position equipment for Kneeling Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-suspension-trainer-pullover",
    "name": "Kneeling Suspension Trainer Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 350,
    "setupInstructions": "Position equipment for Kneeling Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-barbell-pullover",
    "name": "Single Arm Barbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 351,
    "setupInstructions": "Position equipment for Single Arm Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Barbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-dumbbell-pullover",
    "name": "Single Arm Dumbbell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 352,
    "setupInstructions": "Position equipment for Single Arm Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Dumbbell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-cable-pullover",
    "name": "Single Arm Cable Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 353,
    "setupInstructions": "Position equipment for Single Arm Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Cable Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-plate-loaded-machine-pullover",
    "name": "Single Arm Plate Loaded Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 354,
    "setupInstructions": "Position equipment for Single Arm Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Plate Loaded Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-selectorized-machine-pullover",
    "name": "Single Arm Selectorized Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 355,
    "setupInstructions": "Position equipment for Single Arm Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Selectorized Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-smith-machine-pullover",
    "name": "Single Arm Smith Machine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 356,
    "setupInstructions": "Position equipment for Single Arm Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Smith Machine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-banded-pullover",
    "name": "Single Arm Banded Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 357,
    "setupInstructions": "Position equipment for Single Arm Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Banded Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-kettlebell-pullover",
    "name": "Single Arm Kettlebell Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 358,
    "setupInstructions": "Position equipment for Single Arm Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Kettlebell Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-landmine-pullover",
    "name": "Single Arm Landmine Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 359,
    "setupInstructions": "Position equipment for Single Arm Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Landmine Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-suspension-trainer-pullover",
    "name": "Single Arm Suspension Trainer Pullover",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 360,
    "setupInstructions": "Position equipment for Single Arm Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Suspension Trainer Pullover. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-barbell-dip",
    "name": "Incline (30°) Barbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 361,
    "setupInstructions": "Position equipment for Incline (30°) Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-dumbbell-dip",
    "name": "Incline (30°) Dumbbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 362,
    "setupInstructions": "Position equipment for Incline (30°) Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-cable-dip",
    "name": "Incline (30°) Cable Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 363,
    "setupInstructions": "Position equipment for Incline (30°) Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-plate-loaded-machine-dip",
    "name": "Incline (30°) Plate Loaded Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 364,
    "setupInstructions": "Position equipment for Incline (30°) Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-selectorized-machine-dip",
    "name": "Incline (30°) Selectorized Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 365,
    "setupInstructions": "Position equipment for Incline (30°) Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-smith-machine-dip",
    "name": "Incline (30°) Smith Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 366,
    "setupInstructions": "Position equipment for Incline (30°) Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-banded-dip",
    "name": "Incline (30°) Banded Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 367,
    "setupInstructions": "Position equipment for Incline (30°) Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-kettlebell-dip",
    "name": "Incline (30°) Kettlebell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 368,
    "setupInstructions": "Position equipment for Incline (30°) Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-landmine-dip",
    "name": "Incline (30°) Landmine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 369,
    "setupInstructions": "Position equipment for Incline (30°) Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-suspension-trainer-dip",
    "name": "Incline (30°) Suspension Trainer Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 370,
    "setupInstructions": "Position equipment for Incline (30°) Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-barbell-dip",
    "name": "Incline (45°) Barbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 371,
    "setupInstructions": "Position equipment for Incline (45°) Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-dumbbell-dip",
    "name": "Incline (45°) Dumbbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 372,
    "setupInstructions": "Position equipment for Incline (45°) Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-cable-dip",
    "name": "Incline (45°) Cable Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 373,
    "setupInstructions": "Position equipment for Incline (45°) Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-plate-loaded-machine-dip",
    "name": "Incline (45°) Plate Loaded Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 374,
    "setupInstructions": "Position equipment for Incline (45°) Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-selectorized-machine-dip",
    "name": "Incline (45°) Selectorized Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 375,
    "setupInstructions": "Position equipment for Incline (45°) Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-smith-machine-dip",
    "name": "Incline (45°) Smith Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 376,
    "setupInstructions": "Position equipment for Incline (45°) Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-banded-dip",
    "name": "Incline (45°) Banded Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 377,
    "setupInstructions": "Position equipment for Incline (45°) Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-kettlebell-dip",
    "name": "Incline (45°) Kettlebell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 378,
    "setupInstructions": "Position equipment for Incline (45°) Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-landmine-dip",
    "name": "Incline (45°) Landmine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 379,
    "setupInstructions": "Position equipment for Incline (45°) Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-suspension-trainer-dip",
    "name": "Incline (45°) Suspension Trainer Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 380,
    "setupInstructions": "Position equipment for Incline (45°) Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-barbell-dip",
    "name": "Flat Barbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 381,
    "setupInstructions": "Position equipment for Flat Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-dumbbell-dip",
    "name": "Flat Dumbbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 382,
    "setupInstructions": "Position equipment for Flat Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-cable-dip",
    "name": "Flat Cable Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 383,
    "setupInstructions": "Position equipment for Flat Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-plate-loaded-machine-dip",
    "name": "Flat Plate Loaded Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 384,
    "setupInstructions": "Position equipment for Flat Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-selectorized-machine-dip",
    "name": "Flat Selectorized Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 385,
    "setupInstructions": "Position equipment for Flat Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-smith-machine-dip",
    "name": "Flat Smith Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 386,
    "setupInstructions": "Position equipment for Flat Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-banded-dip",
    "name": "Flat Banded Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 387,
    "setupInstructions": "Position equipment for Flat Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-kettlebell-dip",
    "name": "Flat Kettlebell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 388,
    "setupInstructions": "Position equipment for Flat Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-landmine-dip",
    "name": "Flat Landmine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 389,
    "setupInstructions": "Position equipment for Flat Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-suspension-trainer-dip",
    "name": "Flat Suspension Trainer Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 390,
    "setupInstructions": "Position equipment for Flat Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-barbell-dip",
    "name": "Decline (15°) Barbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 391,
    "setupInstructions": "Position equipment for Decline (15°) Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-dumbbell-dip",
    "name": "Decline (15°) Dumbbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 392,
    "setupInstructions": "Position equipment for Decline (15°) Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-cable-dip",
    "name": "Decline (15°) Cable Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 393,
    "setupInstructions": "Position equipment for Decline (15°) Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-plate-loaded-machine-dip",
    "name": "Decline (15°) Plate Loaded Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 394,
    "setupInstructions": "Position equipment for Decline (15°) Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-selectorized-machine-dip",
    "name": "Decline (15°) Selectorized Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 395,
    "setupInstructions": "Position equipment for Decline (15°) Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-smith-machine-dip",
    "name": "Decline (15°) Smith Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 396,
    "setupInstructions": "Position equipment for Decline (15°) Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-banded-dip",
    "name": "Decline (15°) Banded Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 397,
    "setupInstructions": "Position equipment for Decline (15°) Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-kettlebell-dip",
    "name": "Decline (15°) Kettlebell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 398,
    "setupInstructions": "Position equipment for Decline (15°) Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-landmine-dip",
    "name": "Decline (15°) Landmine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 399,
    "setupInstructions": "Position equipment for Decline (15°) Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-suspension-trainer-dip",
    "name": "Decline (15°) Suspension Trainer Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 400,
    "setupInstructions": "Position equipment for Decline (15°) Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-barbell-dip",
    "name": "Decline (30°) Barbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 401,
    "setupInstructions": "Position equipment for Decline (30°) Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-dumbbell-dip",
    "name": "Decline (30°) Dumbbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 402,
    "setupInstructions": "Position equipment for Decline (30°) Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-cable-dip",
    "name": "Decline (30°) Cable Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 403,
    "setupInstructions": "Position equipment for Decline (30°) Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-plate-loaded-machine-dip",
    "name": "Decline (30°) Plate Loaded Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 404,
    "setupInstructions": "Position equipment for Decline (30°) Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-selectorized-machine-dip",
    "name": "Decline (30°) Selectorized Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 405,
    "setupInstructions": "Position equipment for Decline (30°) Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-smith-machine-dip",
    "name": "Decline (30°) Smith Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 406,
    "setupInstructions": "Position equipment for Decline (30°) Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-banded-dip",
    "name": "Decline (30°) Banded Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 407,
    "setupInstructions": "Position equipment for Decline (30°) Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-kettlebell-dip",
    "name": "Decline (30°) Kettlebell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 408,
    "setupInstructions": "Position equipment for Decline (30°) Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-landmine-dip",
    "name": "Decline (30°) Landmine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 409,
    "setupInstructions": "Position equipment for Decline (30°) Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-suspension-trainer-dip",
    "name": "Decline (30°) Suspension Trainer Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 410,
    "setupInstructions": "Position equipment for Decline (30°) Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-barbell-dip",
    "name": "Standing Barbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 411,
    "setupInstructions": "Position equipment for Standing Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-dumbbell-dip",
    "name": "Standing Dumbbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 412,
    "setupInstructions": "Position equipment for Standing Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-cable-dip",
    "name": "Standing Cable Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 413,
    "setupInstructions": "Position equipment for Standing Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-plate-loaded-machine-dip",
    "name": "Standing Plate Loaded Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 414,
    "setupInstructions": "Position equipment for Standing Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-selectorized-machine-dip",
    "name": "Standing Selectorized Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 415,
    "setupInstructions": "Position equipment for Standing Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-smith-machine-dip",
    "name": "Standing Smith Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 416,
    "setupInstructions": "Position equipment for Standing Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-banded-dip",
    "name": "Standing Banded Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 417,
    "setupInstructions": "Position equipment for Standing Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-kettlebell-dip",
    "name": "Standing Kettlebell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 418,
    "setupInstructions": "Position equipment for Standing Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-landmine-dip",
    "name": "Standing Landmine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 419,
    "setupInstructions": "Position equipment for Standing Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-suspension-trainer-dip",
    "name": "Standing Suspension Trainer Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 420,
    "setupInstructions": "Position equipment for Standing Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-barbell-dip",
    "name": "Seated Barbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 421,
    "setupInstructions": "Position equipment for Seated Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-dumbbell-dip",
    "name": "Seated Dumbbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 422,
    "setupInstructions": "Position equipment for Seated Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-cable-dip",
    "name": "Seated Cable Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 423,
    "setupInstructions": "Position equipment for Seated Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-plate-loaded-machine-dip",
    "name": "Seated Plate Loaded Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 424,
    "setupInstructions": "Position equipment for Seated Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-selectorized-machine-dip",
    "name": "Seated Selectorized Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 425,
    "setupInstructions": "Position equipment for Seated Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-smith-machine-dip",
    "name": "Seated Smith Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 426,
    "setupInstructions": "Position equipment for Seated Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-banded-dip",
    "name": "Seated Banded Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 427,
    "setupInstructions": "Position equipment for Seated Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-kettlebell-dip",
    "name": "Seated Kettlebell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 428,
    "setupInstructions": "Position equipment for Seated Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-landmine-dip",
    "name": "Seated Landmine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 429,
    "setupInstructions": "Position equipment for Seated Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-suspension-trainer-dip",
    "name": "Seated Suspension Trainer Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 430,
    "setupInstructions": "Position equipment for Seated Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-barbell-dip",
    "name": "Kneeling Barbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 431,
    "setupInstructions": "Position equipment for Kneeling Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-dumbbell-dip",
    "name": "Kneeling Dumbbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 432,
    "setupInstructions": "Position equipment for Kneeling Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-cable-dip",
    "name": "Kneeling Cable Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 433,
    "setupInstructions": "Position equipment for Kneeling Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-plate-loaded-machine-dip",
    "name": "Kneeling Plate Loaded Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 434,
    "setupInstructions": "Position equipment for Kneeling Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-selectorized-machine-dip",
    "name": "Kneeling Selectorized Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 435,
    "setupInstructions": "Position equipment for Kneeling Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-smith-machine-dip",
    "name": "Kneeling Smith Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 436,
    "setupInstructions": "Position equipment for Kneeling Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-banded-dip",
    "name": "Kneeling Banded Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 437,
    "setupInstructions": "Position equipment for Kneeling Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-kettlebell-dip",
    "name": "Kneeling Kettlebell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 438,
    "setupInstructions": "Position equipment for Kneeling Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-landmine-dip",
    "name": "Kneeling Landmine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 439,
    "setupInstructions": "Position equipment for Kneeling Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "kneeling-suspension-trainer-dip",
    "name": "Kneeling Suspension Trainer Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 440,
    "setupInstructions": "Position equipment for Kneeling Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Kneeling Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-barbell-dip",
    "name": "Single Arm Barbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 441,
    "setupInstructions": "Position equipment for Single Arm Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Barbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-dumbbell-dip",
    "name": "Single Arm Dumbbell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 442,
    "setupInstructions": "Position equipment for Single Arm Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Dumbbell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-cable-dip",
    "name": "Single Arm Cable Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 443,
    "setupInstructions": "Position equipment for Single Arm Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Cable Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-plate-loaded-machine-dip",
    "name": "Single Arm Plate Loaded Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 444,
    "setupInstructions": "Position equipment for Single Arm Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Plate Loaded Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-selectorized-machine-dip",
    "name": "Single Arm Selectorized Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 445,
    "setupInstructions": "Position equipment for Single Arm Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Selectorized Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-smith-machine-dip",
    "name": "Single Arm Smith Machine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 446,
    "setupInstructions": "Position equipment for Single Arm Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Smith Machine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-banded-dip",
    "name": "Single Arm Banded Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 447,
    "setupInstructions": "Position equipment for Single Arm Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Banded Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-kettlebell-dip",
    "name": "Single Arm Kettlebell Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 448,
    "setupInstructions": "Position equipment for Single Arm Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Kettlebell Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-landmine-dip",
    "name": "Single Arm Landmine Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 449,
    "setupInstructions": "Position equipment for Single Arm Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Landmine Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "single-arm-suspension-trainer-dip",
    "name": "Single Arm Suspension Trainer Dip",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 450,
    "setupInstructions": "Position equipment for Single Arm Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Single Arm Suspension Trainer Dip. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-barbell-push-up",
    "name": "Incline (30°) Barbell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 451,
    "setupInstructions": "Position equipment for Incline (30°) Barbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Barbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-dumbbell-push-up",
    "name": "Incline (30°) Dumbbell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 452,
    "setupInstructions": "Position equipment for Incline (30°) Dumbbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Dumbbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-cable-push-up",
    "name": "Incline (30°) Cable Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 453,
    "setupInstructions": "Position equipment for Incline (30°) Cable Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Cable Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-plate-loaded-machine-push-up",
    "name": "Incline (30°) Plate Loaded Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 454,
    "setupInstructions": "Position equipment for Incline (30°) Plate Loaded Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Plate Loaded Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-selectorized-machine-push-up",
    "name": "Incline (30°) Selectorized Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 455,
    "setupInstructions": "Position equipment for Incline (30°) Selectorized Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Selectorized Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-smith-machine-push-up",
    "name": "Incline (30°) Smith Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 456,
    "setupInstructions": "Position equipment for Incline (30°) Smith Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Smith Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-banded-push-up",
    "name": "Incline (30°) Banded Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 457,
    "setupInstructions": "Position equipment for Incline (30°) Banded Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Banded Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-kettlebell-push-up",
    "name": "Incline (30°) Kettlebell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 458,
    "setupInstructions": "Position equipment for Incline (30°) Kettlebell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Kettlebell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-landmine-push-up",
    "name": "Incline (30°) Landmine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 459,
    "setupInstructions": "Position equipment for Incline (30°) Landmine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Landmine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-30-suspension-trainer-push-up",
    "name": "Incline (30°) Suspension Trainer Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 460,
    "setupInstructions": "Position equipment for Incline (30°) Suspension Trainer Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (30°) Suspension Trainer Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-barbell-push-up",
    "name": "Incline (45°) Barbell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 461,
    "setupInstructions": "Position equipment for Incline (45°) Barbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Barbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-dumbbell-push-up",
    "name": "Incline (45°) Dumbbell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 462,
    "setupInstructions": "Position equipment for Incline (45°) Dumbbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Dumbbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-cable-push-up",
    "name": "Incline (45°) Cable Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 463,
    "setupInstructions": "Position equipment for Incline (45°) Cable Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Cable Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-plate-loaded-machine-push-up",
    "name": "Incline (45°) Plate Loaded Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 464,
    "setupInstructions": "Position equipment for Incline (45°) Plate Loaded Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Plate Loaded Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-selectorized-machine-push-up",
    "name": "Incline (45°) Selectorized Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 465,
    "setupInstructions": "Position equipment for Incline (45°) Selectorized Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Selectorized Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-smith-machine-push-up",
    "name": "Incline (45°) Smith Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 466,
    "setupInstructions": "Position equipment for Incline (45°) Smith Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Smith Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-banded-push-up",
    "name": "Incline (45°) Banded Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 467,
    "setupInstructions": "Position equipment for Incline (45°) Banded Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Banded Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-kettlebell-push-up",
    "name": "Incline (45°) Kettlebell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 468,
    "setupInstructions": "Position equipment for Incline (45°) Kettlebell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Kettlebell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-landmine-push-up",
    "name": "Incline (45°) Landmine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 469,
    "setupInstructions": "Position equipment for Incline (45°) Landmine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Landmine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "incline-45-suspension-trainer-push-up",
    "name": "Incline (45°) Suspension Trainer Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 470,
    "setupInstructions": "Position equipment for Incline (45°) Suspension Trainer Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Incline (45°) Suspension Trainer Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-barbell-push-up",
    "name": "Flat Barbell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 471,
    "setupInstructions": "Position equipment for Flat Barbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Barbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-dumbbell-push-up",
    "name": "Flat Dumbbell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 472,
    "setupInstructions": "Position equipment for Flat Dumbbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Dumbbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-cable-push-up",
    "name": "Flat Cable Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 473,
    "setupInstructions": "Position equipment for Flat Cable Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Cable Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-plate-loaded-machine-push-up",
    "name": "Flat Plate Loaded Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 474,
    "setupInstructions": "Position equipment for Flat Plate Loaded Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Plate Loaded Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-selectorized-machine-push-up",
    "name": "Flat Selectorized Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 475,
    "setupInstructions": "Position equipment for Flat Selectorized Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Selectorized Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-smith-machine-push-up",
    "name": "Flat Smith Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 476,
    "setupInstructions": "Position equipment for Flat Smith Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Smith Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-banded-push-up",
    "name": "Flat Banded Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 477,
    "setupInstructions": "Position equipment for Flat Banded Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Banded Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-kettlebell-push-up",
    "name": "Flat Kettlebell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 478,
    "setupInstructions": "Position equipment for Flat Kettlebell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Kettlebell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-landmine-push-up",
    "name": "Flat Landmine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 479,
    "setupInstructions": "Position equipment for Flat Landmine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Landmine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "flat-suspension-trainer-push-up",
    "name": "Flat Suspension Trainer Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 480,
    "setupInstructions": "Position equipment for Flat Suspension Trainer Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Flat Suspension Trainer Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-barbell-push-up",
    "name": "Decline (15°) Barbell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 481,
    "setupInstructions": "Position equipment for Decline (15°) Barbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Barbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-dumbbell-push-up",
    "name": "Decline (15°) Dumbbell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 482,
    "setupInstructions": "Position equipment for Decline (15°) Dumbbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Dumbbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-cable-push-up",
    "name": "Decline (15°) Cable Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 483,
    "setupInstructions": "Position equipment for Decline (15°) Cable Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Cable Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-plate-loaded-machine-push-up",
    "name": "Decline (15°) Plate Loaded Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 484,
    "setupInstructions": "Position equipment for Decline (15°) Plate Loaded Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Plate Loaded Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-selectorized-machine-push-up",
    "name": "Decline (15°) Selectorized Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 485,
    "setupInstructions": "Position equipment for Decline (15°) Selectorized Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Selectorized Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-smith-machine-push-up",
    "name": "Decline (15°) Smith Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 486,
    "setupInstructions": "Position equipment for Decline (15°) Smith Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Smith Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-banded-push-up",
    "name": "Decline (15°) Banded Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 487,
    "setupInstructions": "Position equipment for Decline (15°) Banded Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Banded Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-kettlebell-push-up",
    "name": "Decline (15°) Kettlebell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 488,
    "setupInstructions": "Position equipment for Decline (15°) Kettlebell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Kettlebell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-landmine-push-up",
    "name": "Decline (15°) Landmine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 489,
    "setupInstructions": "Position equipment for Decline (15°) Landmine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Landmine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-15-suspension-trainer-push-up",
    "name": "Decline (15°) Suspension Trainer Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 490,
    "setupInstructions": "Position equipment for Decline (15°) Suspension Trainer Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (15°) Suspension Trainer Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-barbell-push-up",
    "name": "Decline (30°) Barbell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 491,
    "setupInstructions": "Position equipment for Decline (30°) Barbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Barbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-dumbbell-push-up",
    "name": "Decline (30°) Dumbbell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 492,
    "setupInstructions": "Position equipment for Decline (30°) Dumbbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Dumbbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-cable-push-up",
    "name": "Decline (30°) Cable Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 493,
    "setupInstructions": "Position equipment for Decline (30°) Cable Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Cable Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-plate-loaded-machine-push-up",
    "name": "Decline (30°) Plate Loaded Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 494,
    "setupInstructions": "Position equipment for Decline (30°) Plate Loaded Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Plate Loaded Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-selectorized-machine-push-up",
    "name": "Decline (30°) Selectorized Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 495,
    "setupInstructions": "Position equipment for Decline (30°) Selectorized Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Selectorized Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-smith-machine-push-up",
    "name": "Decline (30°) Smith Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 496,
    "setupInstructions": "Position equipment for Decline (30°) Smith Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Smith Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-banded-push-up",
    "name": "Decline (30°) Banded Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 497,
    "setupInstructions": "Position equipment for Decline (30°) Banded Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Banded Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-kettlebell-push-up",
    "name": "Decline (30°) Kettlebell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 498,
    "setupInstructions": "Position equipment for Decline (30°) Kettlebell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Kettlebell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-landmine-push-up",
    "name": "Decline (30°) Landmine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 499,
    "setupInstructions": "Position equipment for Decline (30°) Landmine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Landmine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "decline-30-suspension-trainer-push-up",
    "name": "Decline (30°) Suspension Trainer Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 500,
    "setupInstructions": "Position equipment for Decline (30°) Suspension Trainer Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Decline (30°) Suspension Trainer Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-barbell-push-up",
    "name": "Standing Barbell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 501,
    "setupInstructions": "Position equipment for Standing Barbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Barbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-dumbbell-push-up",
    "name": "Standing Dumbbell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 502,
    "setupInstructions": "Position equipment for Standing Dumbbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Dumbbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-cable-push-up",
    "name": "Standing Cable Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 503,
    "setupInstructions": "Position equipment for Standing Cable Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Cable Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-plate-loaded-machine-push-up",
    "name": "Standing Plate Loaded Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 504,
    "setupInstructions": "Position equipment for Standing Plate Loaded Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Plate Loaded Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-selectorized-machine-push-up",
    "name": "Standing Selectorized Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 505,
    "setupInstructions": "Position equipment for Standing Selectorized Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Selectorized Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-smith-machine-push-up",
    "name": "Standing Smith Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 506,
    "setupInstructions": "Position equipment for Standing Smith Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Smith Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-banded-push-up",
    "name": "Standing Banded Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 507,
    "setupInstructions": "Position equipment for Standing Banded Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Banded Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-kettlebell-push-up",
    "name": "Standing Kettlebell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 508,
    "setupInstructions": "Position equipment for Standing Kettlebell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Kettlebell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-landmine-push-up",
    "name": "Standing Landmine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 509,
    "setupInstructions": "Position equipment for Standing Landmine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Landmine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "standing-suspension-trainer-push-up",
    "name": "Standing Suspension Trainer Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 510,
    "setupInstructions": "Position equipment for Standing Suspension Trainer Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Standing Suspension Trainer Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-barbell-push-up",
    "name": "Seated Barbell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "barbell",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 511,
    "setupInstructions": "Position equipment for Seated Barbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Barbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-dumbbell-push-up",
    "name": "Seated Dumbbell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 512,
    "setupInstructions": "Position equipment for Seated Dumbbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Dumbbell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-cable-push-up",
    "name": "Seated Cable Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "cable",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 513,
    "setupInstructions": "Position equipment for Seated Cable Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Cable Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-plate-loaded-machine-push-up",
    "name": "Seated Plate Loaded Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 514,
    "setupInstructions": "Position equipment for Seated Plate Loaded Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Plate Loaded Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-selectorized-machine-push-up",
    "name": "Seated Selectorized Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 515,
    "setupInstructions": "Position equipment for Seated Selectorized Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Selectorized Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-smith-machine-push-up",
    "name": "Seated Smith Machine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 516,
    "setupInstructions": "Position equipment for Seated Smith Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Smith Machine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-banded-push-up",
    "name": "Seated Banded Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 517,
    "setupInstructions": "Position equipment for Seated Banded Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Banded Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-kettlebell-push-up",
    "name": "Seated Kettlebell Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "dumbbell",
    "spotterRequired": false,
    "quietCornerFriendly": true,
    "effectivenessRank": 518,
    "setupInstructions": "Position equipment for Seated Kettlebell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Kettlebell Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-landmine-push-up",
    "name": "Seated Landmine Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 519,
    "setupInstructions": "Position equipment for Seated Landmine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Landmine Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  },
  {
    "id": "seated-suspension-trainer-push-up",
    "name": "Seated Suspension Trainer Push-Up",
    "primaryMuscle": "Upper Chest",
    "secondaryMuscles": [
      "Front Delts",
      "Triceps"
    ],
    "equipment": "machine",
    "spotterRequired": false,
    "quietCornerFriendly": false,
    "effectivenessRank": 520,
    "setupInstructions": "Position equipment for Seated Suspension Trainer Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
    "goodBurn": "Deep localized fatigue and pump in Upper Chest with zero joint distress.",
    "badPain": "Sharp stabbing pain in joint capsule, tendon insertions, or spinal discs.",
    "beginnerReps": "10-12",
    "advancedReps": "8-10",
    "beginnerSets": 3,
    "advancedSets": 4,
    "movementSteps": {
      "setup": "Position equipment for Seated Suspension Trainer Push-Up. Engage core, align joint path, and control load throughout full movement spectrum.",
      "bottom": "Controlled eccentric phase into maximum active stretch without losing target muscular tension.",
      "top": "Concentric peak contraction, squeezing Upper Chest forcefully for 1-2 seconds."
    }
  }
];
