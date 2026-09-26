/**
 * Exercise Database based on EMG Activation Studies and Exercise Science Literature
 *
 * Effectiveness Ranking Explanation:
 * Exercises are ranked (1 = most effective) within their specific primary muscle target based on
 * electromyography (EMG) studies (e.g., Boeckh-Behrens & Buskies, Bret Contreras, ACE research).
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
  // CHEST: UPPER (CLAVICULAR)
  {
    id: 'incline-dumbbell-press', name: 'Incline Dumbbell Press', primaryMuscle: 'Upper Chest', secondaryMuscles: ['Front Delts', 'Triceps'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 1, setupInstructions: 'Bench at 30-45 degrees.', goodBurn: 'Deep stretch across upper chest.', badPain: 'Front shoulder pain.', beginnerReps: '10-12', advancedReps: '6-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Dumbbells at shoulders.', bottom: 'Lower outside upper chest.', top: 'Press up and in.' }
  },
  {
    id: 'incline-barbell-press', name: 'Incline Barbell Press', primaryMuscle: 'Upper Chest', secondaryMuscles: ['Front Delts', 'Triceps'], equipment: 'barbell', spotterRequired: true, quietCornerFriendly: false, effectivenessRank: 2, setupInstructions: 'Bench 30-45 deg, slightly wider grip.', goodBurn: 'Upper chest activation.', badPain: 'Wrist/shoulder pain.', beginnerReps: '8-12', advancedReps: '5-8', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Unrack bar.', bottom: 'Lower to collarbones.', top: 'Press explosively.' }
  },
  {
    id: 'low-to-high-cable-crossover', name: 'Low to High Cable Crossover', primaryMuscle: 'Upper Chest', secondaryMuscles: ['Front Delts'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 3, setupInstructions: 'Pulleys at lowest position.', goodBurn: 'Isolated upper chest tension.', badPain: 'Bicep tendon strain.', beginnerReps: '12-15', advancedReps: '10-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Staggered stance.', bottom: 'Hands low and behind.', top: 'Sweep to eye level.' }
  },
  {
    id: 'incline-machine-press', name: 'Incline Machine Press', primaryMuscle: 'Upper Chest', secondaryMuscles: ['Front Delts', 'Triceps'], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 4, setupInstructions: 'Seat so handles align with upper chest.', goodBurn: 'Stable upper pec squeeze.', badPain: 'Shoulder impingement.', beginnerReps: '10-15', advancedReps: '8-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Sit tight, chest up.', bottom: 'Let handles come back to stretch.', top: 'Press forward and up.' }
  },
  {
    id: 'reverse-grip-bench-press', name: 'Reverse Grip Bench Press', primaryMuscle: 'Upper Chest', secondaryMuscles: ['Front Delts', 'Triceps'], equipment: 'barbell', spotterRequired: true, quietCornerFriendly: false, effectivenessRank: 5, setupInstructions: 'Underhand grip on flat bench.', goodBurn: 'Surprising upper chest activation.', badPain: 'Wrist strain or dropping bar.', beginnerReps: '10-12', advancedReps: '6-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Unrack with underhand grip.', bottom: 'Lower below nipples.', top: 'Press up and slightly back.' }
  },
  // CHEST: MID (STERNAL)
  {
    id: 'barbell-bench-press', name: 'Barbell Bench Press', primaryMuscle: 'Mid Chest', secondaryMuscles: ['Front Delts', 'Triceps'], equipment: 'barbell', spotterRequired: true, quietCornerFriendly: false, effectivenessRank: 1, setupInstructions: 'Flat bench, slight arch.', goodBurn: 'Mid pec power.', badPain: 'Shoulder joint pain.', beginnerReps: '8-12', advancedReps: '4-8', beginnerSets: 3, advancedSets: 5, movementSteps: { setup: 'Eyes under bar.', bottom: 'Lower to nipple line.', top: 'Press up.' }
  },
  {
    id: 'flat-dumbbell-press', name: 'Flat Dumbbell Press', primaryMuscle: 'Mid Chest', secondaryMuscles: ['Front Delts', 'Triceps'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 2, setupInstructions: 'Flat bench, dumbbells on knees to kick up.', goodBurn: 'Deep stretch at bottom.', badPain: 'Elbow pain.', beginnerReps: '10-12', advancedReps: '6-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Kick dumbbells up.', bottom: 'Lower to chest sides.', top: 'Press and squeeze.' }
  },
  {
    id: 'pec-deck-machine', name: 'Pec Deck Machine', primaryMuscle: 'Mid Chest', secondaryMuscles: ['Front Delts'], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 3, setupInstructions: 'Seat height at chest level.', goodBurn: 'Inner chest squeeze.', badPain: 'Shoulder capsule stress.', beginnerReps: '12-15', advancedReps: '10-15', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Sit back against pad.', bottom: 'Stretch arms back.', top: 'Squeeze handles together.' }
  },
  {
    id: 'cable-crossover-mid', name: 'Cable Crossover (Mid)', primaryMuscle: 'Mid Chest', secondaryMuscles: ['Front Delts'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 4, setupInstructions: 'Pulleys at shoulder height.', goodBurn: 'Mid chest continuous tension.', badPain: 'Front delt takeover.', beginnerReps: '12-15', advancedReps: '10-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Step forward.', bottom: 'Arms spread wide.', top: 'Hug a barrel in front.' }
  },
  {
    id: 'push-ups', name: 'Push-Ups', primaryMuscle: 'Mid Chest', secondaryMuscles: ['Front Delts', 'Triceps', 'Core'], equipment: 'bodyweight', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 5, setupInstructions: 'Hands shoulder-width, body straight.', goodBurn: 'Overall chest fatigue.', badPain: 'Lower back sagging pain.', beginnerReps: '10-15', advancedReps: '20-40', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Plank position.', bottom: 'Lower chest to floor.', top: 'Push back up.' }
  },
  // CHEST: LOWER
  {
    id: 'decline-dumbbell-press', name: 'Decline Dumbbell Press', primaryMuscle: 'Lower Chest', secondaryMuscles: ['Triceps', 'Front Delts'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 1, setupInstructions: '15-30 degree decline bench.', goodBurn: 'Lower pec contraction.', badPain: 'Headache from blood flow.', beginnerReps: '10-12', advancedReps: '8-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Lie back on decline.', bottom: 'Lower to lower chest.', top: 'Press up.' }
  },
  {
    id: 'high-to-low-cable-crossover', name: 'High to Low Cable Crossover', primaryMuscle: 'Lower Chest', secondaryMuscles: ['Front Delts'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 2, setupInstructions: 'Pulleys highest position.', goodBurn: 'Lower pec cramp.', badPain: 'Elbow locking pain.', beginnerReps: '12-15', advancedReps: '10-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Staggered stance, lean forward.', bottom: 'Arms stretched high.', top: 'Pull down to hips.' }
  },
  {
    id: 'chest-dips', name: 'Chest Dips', primaryMuscle: 'Lower Chest', secondaryMuscles: ['Triceps', 'Front Delts'], equipment: 'bodyweight', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 3, setupInstructions: 'Lean torso forward 30 degrees.', goodBurn: 'Deep tearing sensation lower pecs.', badPain: 'Sternum pain.', beginnerReps: '6-10', advancedReps: '10-15 (weighted)', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Suspend on dip bars.', bottom: 'Lower until deep stretch.', top: 'Press up short of lockout.' }
  },
  {
    id: 'decline-barbell-press', name: 'Decline Barbell Press', primaryMuscle: 'Lower Chest', secondaryMuscles: ['Triceps', 'Front Delts'], equipment: 'barbell', spotterRequired: true, quietCornerFriendly: false, effectivenessRank: 4, setupInstructions: 'Decline bench with leg pads.', goodBurn: 'Lower chest power.', badPain: 'Shoulder impingement.', beginnerReps: '8-12', advancedReps: '6-8', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Unrack barbell.', bottom: 'Lower to sternum.', top: 'Press up and slightly back.' }
  },

  // BACK: LATS
  {
    id: 'pull-ups', name: 'Pull-Ups', primaryMuscle: 'Lats', secondaryMuscles: ['Biceps', 'Rhomboids'], equipment: 'bodyweight', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 1, setupInstructions: 'Overhand wide grip.', goodBurn: 'Outer wing fatigue.', badPain: 'Shoulder impingement.', beginnerReps: '4-8', advancedReps: '8-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Hang freely.', bottom: 'Arms extended.', top: 'Pull chest to bar.' }
  },
  {
    id: 'lat-pulldown', name: 'Lat Pulldown', primaryMuscle: 'Lats', secondaryMuscles: ['Biceps', 'Rhomboids'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 2, setupInstructions: 'Thigh pad locked in.', goodBurn: 'Isolating lats down back.', badPain: 'Neck pain.', beginnerReps: '10-15', advancedReps: '8-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Sit back slightly.', bottom: 'Arms extended.', top: 'Pull bar to upper chest.' }
  },
  {
    id: 'single-arm-dumbbell-row', name: 'Single Arm Dumbbell Row', primaryMuscle: 'Lats', secondaryMuscles: ['Rhomboids', 'Biceps'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 3, setupInstructions: 'One knee on bench.', goodBurn: 'Lat and mid back contraction.', badPain: 'Lower back strain.', beginnerReps: '10-12', advancedReps: '6-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Support on bench.', bottom: 'Dumbbell hanging.', top: 'Pull to hip.' }
  },
  {
    id: 'straight-arm-pulldown', name: 'Straight Arm Pulldown', primaryMuscle: 'Lats', secondaryMuscles: ['Triceps Long Head'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 4, setupInstructions: 'Straight bar high pulley.', goodBurn: 'Sweeping lat contraction.', badPain: 'Triceps burning.', beginnerReps: '12-15', advancedReps: '10-15', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Hinge hips, arms straight.', bottom: 'Arms overhead.', top: 'Pull in arc to thighs.' }
  },
  {
    id: 'underhand-lat-pulldown', name: 'Underhand Lat Pulldown', primaryMuscle: 'Lats', secondaryMuscles: ['Biceps', 'Lower Lats'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 5, setupInstructions: 'Underhand shoulder-width grip.', goodBurn: 'Lower lat sweep.', badPain: 'Bicep tendon pain.', beginnerReps: '10-12', advancedReps: '8-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Sit and secure knees.', bottom: 'Full stretch overhead.', top: 'Pull to lower chest.' }
  },
  {
    id: 'machine-lat-pulldown', name: 'Machine Lat Pulldown', primaryMuscle: 'Lats', secondaryMuscles: ['Biceps'], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 6, setupInstructions: 'Adjust seat and chest pad.', goodBurn: 'Isolated strict lat pull.', badPain: 'Forearm cramp.', beginnerReps: '10-15', advancedReps: '8-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Chest against pad.', bottom: 'Handles up.', top: 'Pull handles down and back.' }
  },

  // BACK: UPPER BACK / TRAPS
  {
    id: 'barbell-shrug', name: 'Barbell Shrug', primaryMuscle: 'Upper Traps', secondaryMuscles: ['Levator Scapulae'], equipment: 'barbell', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 1, setupInstructions: 'Shoulder-width overhand grip.', goodBurn: 'Burning base of neck.', badPain: 'Neck strain.', beginnerReps: '12-15', advancedReps: '8-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Hold barbell front.', bottom: 'Shoulders droop.', top: 'Shrug straight up.' }
  },
  {
    id: 'dumbbell-shrug', name: 'Dumbbell Shrug', primaryMuscle: 'Upper Traps', secondaryMuscles: ['Levator Scapulae'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 2, setupInstructions: 'Neutral grip at sides.', goodBurn: 'Deep upper trap contraction.', badPain: 'Bicep strain.', beginnerReps: '12-15', advancedReps: '10-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Stand tall.', bottom: 'Stretch traps.', top: 'Elevate shoulders.' }
  },
  {
    id: 'face-pulls', name: 'Face Pulls', primaryMuscle: 'Upper Traps', secondaryMuscles: ['Rear Delts', 'Rhomboids'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 3, setupInstructions: 'Cable at face height, rope.', goodBurn: 'Upper back and rear delt burn.', badPain: 'Lower back strain.', beginnerReps: '15-20', advancedReps: '12-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Grip rope thumbs back.', bottom: 'Arms extended.', top: 'Pull to face, spread rope.' }
  },
  {
    id: 'farmers-walk', name: 'Farmers Walk', primaryMuscle: 'Upper Traps', secondaryMuscles: ['Forearms', 'Core'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 4, setupInstructions: 'Heavy dumbbells, chest up.', goodBurn: 'Whole upper back and grip fatigue.', badPain: 'Lower back rounding.', beginnerReps: '30 seconds', advancedReps: '60 seconds', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Pick up weights safely.', bottom: 'Standing tall.', top: 'Walk while maintaining posture.' }
  },
  {
    id: 'cable-shrugs', name: 'Cable Shrugs', primaryMuscle: 'Upper Traps', secondaryMuscles: ['Levator Scapulae'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 5, setupInstructions: 'Low pulley, straight bar.', goodBurn: 'Constant tension shrug.', badPain: 'Wrist discomfort.', beginnerReps: '12-15', advancedReps: '10-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Hold bar at thighs.', bottom: 'Full stretch down.', top: 'Shrug up and slightly back.' }
  },

  // BACK: RHOMBOIDS (MID BACK)
  {
    id: 'barbell-row', name: 'Barbell Row', primaryMuscle: 'Rhomboids', secondaryMuscles: ['Lats', 'Erectors'], equipment: 'barbell', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 1, setupInstructions: 'Hinge 45 degrees, overhand.', goodBurn: 'Thick mid back contraction.', badPain: 'Lower back pain.', beginnerReps: '8-12', advancedReps: '5-8', beginnerSets: 3, advancedSets: 5, movementSteps: { setup: 'Hinge over.', bottom: 'Arms extended.', top: 'Pull to belly button.' }
  },
  {
    id: 't-bar-row', name: 'T-Bar Row', primaryMuscle: 'Rhomboids', secondaryMuscles: ['Lats', 'Lower Back'], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 2, setupInstructions: 'Straddle T-bar, hinge.', goodBurn: 'Intense mid back squeeze.', badPain: 'Spinal pain.', beginnerReps: '10-12', advancedReps: '6-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Grip handles.', bottom: 'Arms extended.', top: 'Pull to torso.' }
  },
  {
    id: 'seated-cable-row', name: 'Seated Cable Row', primaryMuscle: 'Rhomboids', secondaryMuscles: ['Lats', 'Biceps'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 3, setupInstructions: 'V-grip or neutral grip.', goodBurn: 'Burn between shoulder blades.', badPain: 'Lower back swing.', beginnerReps: '10-15', advancedReps: '8-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Sit upright.', bottom: 'Arms forward, stretch.', top: 'Pull to stomach, retract.' }
  },
  {
    id: 'pendlay-row', name: 'Pendlay Row', primaryMuscle: 'Rhomboids', secondaryMuscles: ['Lats', 'Erectors'], equipment: 'barbell', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 4, setupInstructions: 'Torso parallel to floor.', goodBurn: 'Explosive mid-back power.', badPain: 'Lower back rounding.', beginnerReps: '6-8', advancedReps: '4-6', beginnerSets: 3, advancedSets: 5, movementSteps: { setup: 'Bar on floor.', bottom: 'Resting on floor.', top: 'Explosively pull to chest.' }
  },
  {
    id: 'chest-supported-dumbbell-row', name: 'Chest-Supported Dumbbell Row', primaryMuscle: 'Rhomboids', secondaryMuscles: ['Lats', 'Rear Delts'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 5, setupInstructions: 'Incline bench, chest down.', goodBurn: 'Strict mid-back isolation.', badPain: 'Chest compression pain.', beginnerReps: '10-12', advancedReps: '8-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Lie face down on bench.', bottom: 'Dumbbells hanging.', top: 'Row up, squeeze blades.' }
  },
  {
    id: 'machine-row', name: 'Machine Row', primaryMuscle: 'Rhomboids', secondaryMuscles: ['Lats'], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 6, setupInstructions: 'Chest against pad.', goodBurn: 'Safe middle back contraction.', badPain: 'Wrist awkwardness.', beginnerReps: '10-15', advancedReps: '8-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Sit and grip.', bottom: 'Arms extended.', top: 'Pull handles back.' }
  },

  // BACK: LOWER BACK
  {
    id: 'barbell-deadlift', name: 'Barbell Deadlift', primaryMuscle: 'Lower Back', secondaryMuscles: ['Glutes', 'Hamstrings'], equipment: 'barbell', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 1, setupInstructions: 'Bar over mid-foot, hinge hips.', goodBurn: 'Full-body fatigue, erectors.', badPain: 'Cat back shooting pain.', beginnerReps: '5-8', advancedReps: '1-5', beginnerSets: 3, advancedSets: 5, movementSteps: { setup: 'Hips low, chest up.', bottom: 'Weight on floor.', top: 'Stand tall, lockout.' }
  },
  {
    id: 'hyperextensions', name: 'Hyperextensions', primaryMuscle: 'Lower Back', secondaryMuscles: ['Glutes', 'Hamstrings'], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 2, setupInstructions: 'Pad just below hips.', goodBurn: 'Deep ache in spinal erectors.', badPain: 'Spinal pain from overextending.', beginnerReps: '12-15', advancedReps: '10-15', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Lock feet in.', bottom: 'Bend forward.', top: 'Raise torso straight.' }
  },
  {
    id: 'good-mornings', name: 'Good Mornings', primaryMuscle: 'Lower Back', secondaryMuscles: ['Hamstrings', 'Glutes'], equipment: 'barbell', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 3, setupInstructions: 'Bar on upper back.', goodBurn: 'Erector fatigue and hamstring stretch.', badPain: 'Lower back injury.', beginnerReps: '10-12', advancedReps: '8-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Stand tall.', bottom: 'Hinge hips back.', top: 'Squeeze glutes to stand.' }
  },
  {
    id: 'supermans', name: 'Supermans', primaryMuscle: 'Lower Back', secondaryMuscles: ['Glutes'], equipment: 'bodyweight', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 4, setupInstructions: 'Lie face down on floor.', goodBurn: 'Lower back squeeze.', badPain: 'Neck pain.', beginnerReps: '12-15', advancedReps: '15-20', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Arms and legs extended.', bottom: 'Resting on floor.', top: 'Lift arms and legs off floor.' }
  },

  // SHOULDERS: FRONT DELT
  {
    id: 'overhead-barbell-press', name: 'Overhead Barbell Press', primaryMuscle: 'Front Delts', secondaryMuscles: ['Side Delts', 'Triceps'], equipment: 'barbell', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 1, setupInstructions: 'Grip outside shoulders.', goodBurn: 'Heavy front shoulder load.', badPain: 'Lower back lean pain.', beginnerReps: '8-10', advancedReps: '4-8', beginnerSets: 3, advancedSets: 5, movementSteps: { setup: 'Bar at chest level.', bottom: 'Rest on upper chest.', top: 'Press overhead.' }
  },
  {
    id: 'seated-dumbbell-press', name: 'Seated Dumbbell Press', primaryMuscle: 'Front Delts', secondaryMuscles: ['Side Delts', 'Triceps'], equipment: 'dumbbell', spotterRequired: true, quietCornerFriendly: true, effectivenessRank: 2, setupInstructions: 'Bench at 85 degrees.', goodBurn: 'Front and mid shoulder burn.', badPain: 'Rotator cuff flare pain.', beginnerReps: '10-12', advancedReps: '6-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Kick dumbbells up.', bottom: 'At ear level.', top: 'Press up and together.' }
  },
  {
    id: 'arnold-press', name: 'Arnold Press', primaryMuscle: 'Front Delts', secondaryMuscles: ['Side Delts', 'Triceps'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 3, setupInstructions: 'Palms facing you at bottom.', goodBurn: 'Sweeping front delt tension.', badPain: 'Shoulder clicking.', beginnerReps: '10-12', advancedReps: '8-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Hold weights in front of face.', bottom: 'Palms facing you.', top: 'Press and rotate palms out.' }
  },
  {
    id: 'cable-front-raise', name: 'Cable Front Raise', primaryMuscle: 'Front Delts', secondaryMuscles: ['Upper Chest'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 4, setupInstructions: 'Low pulley, straight bar.', goodBurn: 'Constant anterior tension.', badPain: 'Lower back swing.', beginnerReps: '12-15', advancedReps: '10-15', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Straddle cable.', bottom: 'Bar at thighs.', top: 'Raise to eye level.' }
  },
  {
    id: 'dumbbell-front-raise', name: 'Dumbbell Front Raise', primaryMuscle: 'Front Delts', secondaryMuscles: ['Upper Chest'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 5, setupInstructions: 'Alternating or together.', goodBurn: 'Front delt burn.', badPain: 'Momentum swing.', beginnerReps: '12-15', advancedReps: '10-12', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Hold dumbbells at front.', bottom: 'Rest at thighs.', top: 'Raise to shoulder height.' }
  },

  // SHOULDERS: SIDE / LATERAL DELT
  {
    id: 'dumbbell-lateral-raise', name: 'Dumbbell Lateral Raise', primaryMuscle: 'Side Delts', secondaryMuscles: ['Traps'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 1, setupInstructions: 'Slight bend in elbows.', goodBurn: 'Fiery burn side caps.', badPain: 'Neck pain from shrugging.', beginnerReps: '12-15', advancedReps: '10-20', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Lean slightly forward.', bottom: 'Hanging naturally.', top: 'Raise parallel, pour pitcher.' }
  },
  {
    id: 'cable-lateral-raise', name: 'Cable Lateral Raise', primaryMuscle: 'Side Delts', secondaryMuscles: ['Traps'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 2, setupInstructions: 'Bottom pulley, cross body.', goodBurn: 'Constant tension stretch.', badPain: 'Shoulder clicking.', beginnerReps: '12-15', advancedReps: '10-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Stand sideways.', bottom: 'Across body.', top: 'Raise out to side.' }
  },
  {
    id: 'machine-lateral-raise', name: 'Machine Lateral Raise', primaryMuscle: 'Side Delts', secondaryMuscles: ['Traps'], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 3, setupInstructions: 'Align pivot with shoulders.', goodBurn: 'Deep isolated side burn.', badPain: 'Trap cramping.', beginnerReps: '15-20', advancedReps: '12-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Arms on pads.', bottom: 'Resting down.', top: 'Drive elbows up and out.' }
  },
  {
    id: 'leaning-dumbbell-lateral-raise', name: 'Leaning Dumbbell Lateral Raise', primaryMuscle: 'Side Delts', secondaryMuscles: ['Traps'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 4, setupInstructions: 'Hold a pole, lean away.', goodBurn: 'Increased stretch tension.', badPain: 'Unbalanced stance.', beginnerReps: '12-15', advancedReps: '10-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Lean away from anchor.', bottom: 'Dumbbell hanging across.', top: 'Raise parallel to floor.' }
  },
  {
    id: 'upright-row', name: 'Upright Row', primaryMuscle: 'Side Delts', secondaryMuscles: ['Traps'], equipment: 'barbell', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 5, setupInstructions: 'Wide grip on barbell.', goodBurn: 'Side delt and trap thickness.', badPain: 'Shoulder impingement (go wide to avoid).', beginnerReps: '10-12', advancedReps: '8-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Hold bar at waist.', bottom: 'Arms straight.', top: 'Pull elbows high and wide.' }
  },

  // SHOULDERS: REAR DELT
  {
    id: 'reverse-pec-deck', name: 'Reverse Pec Deck', primaryMuscle: 'Rear Delts', secondaryMuscles: ['Rhomboids', 'Traps'], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 1, setupInstructions: 'Face into machine.', goodBurn: 'Sharp back shoulder burn.', badPain: 'Over-extending back pain.', beginnerReps: '15-20', advancedReps: '12-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Sit facing pad.', bottom: 'Arms forward.', top: 'Sweep arms backward.' }
  },
  {
    id: 'bent-over-dumbbell-reverse-fly', name: 'Bent Over Dumbbell Reverse Fly', primaryMuscle: 'Rear Delts', secondaryMuscles: ['Rhomboids', 'Traps'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 2, setupInstructions: 'Hinge parallel to ground.', goodBurn: 'Back of shoulder cap contraction.', badPain: 'Lower back strain.', beginnerReps: '12-15', advancedReps: '10-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Hinge forward.', bottom: 'Dumbbells hanging.', top: 'Raise out to sides.' }
  },
  {
    id: 'cable-rear-delt-fly', name: 'Cable Rear Delt Fly', primaryMuscle: 'Rear Delts', secondaryMuscles: ['Rhomboids', 'Traps'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 3, setupInstructions: 'Cross cables at shoulder height.', goodBurn: 'Constant tension rear delt.', badPain: 'Tricep fatigue.', beginnerReps: '15-20', advancedReps: '12-15', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Cross arms, grab handles.', bottom: 'Arms straight out crossed.', top: 'Pull apart and back.' }
  },
  {
    id: 'incline-bench-reverse-fly', name: 'Incline Bench Reverse Fly', primaryMuscle: 'Rear Delts', secondaryMuscles: ['Rhomboids'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 4, setupInstructions: 'Lie face down on incline bench.', goodBurn: 'Strict rear delt burn without momentum.', badPain: 'Neck craning.', beginnerReps: '12-15', advancedReps: '10-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Face down on bench.', bottom: 'Arms dangling.', top: 'Raise dumbbells outward.' }
  },
  {
    id: 'rope-face-pulls-high', name: 'High Rope Face Pulls', primaryMuscle: 'Rear Delts', secondaryMuscles: ['Upper Traps'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 5, setupInstructions: 'Set cable above head.', goodBurn: 'Rear delt and rotator cuff.', badPain: 'Lower back arch.', beginnerReps: '15-20', advancedReps: '12-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Grip rope high.', bottom: 'Arms up and forward.', top: 'Pull down to face.' }
  },

  // BICEPS
  {
    id: 'incline-dumbbell-curl', name: 'Incline Dumbbell Curl', primaryMuscle: 'Biceps Long Head', secondaryMuscles: ['Brachialis'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 1, setupInstructions: 'Bench at 45-60 deg.', goodBurn: 'Massive stretch outer bicep.', badPain: 'Anterior shoulder pain.', beginnerReps: '10-12', advancedReps: '8-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Sit back, let arms hang.', bottom: 'Fully extended down.', top: 'Curl up, elbows pointed down.' }
  },
  {
    id: 'preacher-curl', name: 'Preacher Curl', primaryMuscle: 'Biceps Short Head', secondaryMuscles: ['Brachialis'], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 1, setupInstructions: 'Pad under armpits.', goodBurn: 'Inner bicep tension.', badPain: 'Bicep tendon hyper-extension.', beginnerReps: '10-12', advancedReps: '8-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Pin triceps to pad.', bottom: 'Almost fully straight.', top: 'Curl to chin.' }
  },
  {
    id: 'alternating-dumbbell-curl', name: 'Alternating Dumbbell Curl', primaryMuscle: 'Biceps', secondaryMuscles: ['Brachialis'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 2, setupInstructions: 'Twist wrist outward as you curl.', goodBurn: 'Peak bicep squeeze.', badPain: 'Lower back swing.', beginnerReps: '10-12', advancedReps: '8-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Stand holding dumbbells.', bottom: 'Arms extended.', top: 'Curl and twist pinky.' }
  },
  {
    id: 'barbell-curl', name: 'Barbell Curl', primaryMuscle: 'Biceps', secondaryMuscles: ['Forearms'], equipment: 'barbell', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 3, setupInstructions: 'Shoulder-width, pin elbows.', goodBurn: 'Overall thickness pump.', badPain: 'Wrist/lower back pain.', beginnerReps: '8-12', advancedReps: '6-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Hold bar front.', bottom: 'Arms extended.', top: 'Curl to shoulder.' }
  },
  {
    id: 'hammer-curl', name: 'Hammer Curl', primaryMuscle: 'Brachialis', secondaryMuscles: ['Biceps', 'Forearms'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 4, setupInstructions: 'Neutral grip (palms facing in).', goodBurn: 'Outer arm and forearm pump.', badPain: 'Elbow swinging.', beginnerReps: '10-12', advancedReps: '8-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Hold dumbbells neutral.', bottom: 'Arms at sides.', top: 'Curl up like a hammer.' }
  },
  {
    id: 'cable-curl', name: 'Cable Curl', primaryMuscle: 'Biceps', secondaryMuscles: [], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 5, setupInstructions: 'Low pulley, straight bar.', goodBurn: 'Constant tension throughout.', badPain: 'Standing too close to pulley.', beginnerReps: '12-15', advancedReps: '10-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Grip bar, step back.', bottom: 'Arms fully straight.', top: 'Curl to chest.' }
  },
  {
    id: 'concentration-curl', name: 'Concentration Curl', primaryMuscle: 'Biceps', secondaryMuscles: [], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 6, setupInstructions: 'Sit, elbow against inner thigh.', goodBurn: 'Intense bicep peak isolation.', badPain: 'Leaning back too much.', beginnerReps: '10-12', advancedReps: '8-10', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Elbow braced on thigh.', bottom: 'Arm fully extended.', top: 'Curl up and squeeze.' }
  },
  {
    id: 'spider-curl', name: 'Spider Curl', primaryMuscle: 'Biceps Short Head', secondaryMuscles: [], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 7, setupInstructions: 'Face down on 45 deg incline bench.', goodBurn: 'Strict bicep contraction.', badPain: 'Shoulder swinging.', beginnerReps: '10-15', advancedReps: '8-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Lie prone, arms dangle.', bottom: 'Arms straight down.', top: 'Curl up.' }
  },

  // TRICEPS
  {
    id: 'overhead-triceps-extension', name: 'Overhead Triceps Extension', primaryMuscle: 'Triceps Long Head', secondaryMuscles: ['Medial Head'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 1, setupInstructions: 'One heavy dumbbell overhead.', goodBurn: 'Deep stretch down back of arm.', badPain: 'Elbow joint clicking.', beginnerReps: '10-12', advancedReps: '8-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Press dumbbell overhead.', bottom: 'Lower behind head.', top: 'Extend elbows up.' }
  },
  {
    id: 'triceps-pushdown-rope', name: 'Triceps Pushdown (Rope)', primaryMuscle: 'Triceps Lateral Head', secondaryMuscles: ['Medial Head'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 1, setupInstructions: 'High cable, rope.', goodBurn: 'Intense outer horseshoe pump.', badPain: 'Front shoulder roll.', beginnerReps: '12-15', advancedReps: '10-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Pin elbows to sides.', bottom: 'Spread hands apart to lock out.', top: 'Hands rise to chest.' }
  },
  {
    id: 'ez-bar-skullcrushers', name: 'EZ-Bar Skullcrushers', primaryMuscle: 'Triceps Long Head', secondaryMuscles: ['Lateral Head'], equipment: 'barbell', spotterRequired: true, quietCornerFriendly: false, effectivenessRank: 2, setupInstructions: 'Flat bench, narrow overhand.', goodBurn: 'Heavy stretch triceps.', badPain: 'Tennis elbow pain.', beginnerReps: '10-12', advancedReps: '6-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Press bar over chest.', bottom: 'Lower towards forehead.', top: 'Extend elbows.' }
  },
  {
    id: 'close-grip-bench-press', name: 'Close-Grip Bench Press', primaryMuscle: 'Triceps Lateral Head', secondaryMuscles: ['Mid Chest'], equipment: 'barbell', spotterRequired: true, quietCornerFriendly: false, effectivenessRank: 3, setupInstructions: 'Grip shoulder width.', goodBurn: 'Massive overall triceps overload.', badPain: 'Wrist/shoulder pain (too narrow).', beginnerReps: '8-10', advancedReps: '5-8', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Unrack narrow grip.', bottom: 'Lower to lower chest.', top: 'Press powerfully.' }
  },
  {
    id: 'triceps-kickback', name: 'Triceps Kickback', primaryMuscle: 'Triceps', secondaryMuscles: [], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 4, setupInstructions: 'Hinge forward, elbow high.', goodBurn: 'Squeeze at full extension.', badPain: 'Swinging shoulder.', beginnerReps: '12-15', advancedReps: '10-12', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Elbow pinned high.', bottom: 'Dumbbell at hip.', top: 'Kick back until straight.' }
  },
  {
    id: 'cable-overhead-extension', name: 'Cable Overhead Extension', primaryMuscle: 'Triceps Long Head', secondaryMuscles: [], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 5, setupInstructions: 'Rope, turn away from machine.', goodBurn: 'Constant stretch long head.', badPain: 'Lower back rounding.', beginnerReps: '12-15', advancedReps: '10-15', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Hold rope behind head.', bottom: 'Triceps fully stretched.', top: 'Extend straight out.' }
  },
  {
    id: 'triceps-dips', name: 'Triceps Dips', primaryMuscle: 'Triceps', secondaryMuscles: ['Lower Chest'], equipment: 'bodyweight', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 6, setupInstructions: 'Upright torso on dip bars.', goodBurn: 'Heavy tricep tear.', badPain: 'Sternum or shoulder pain.', beginnerReps: '8-12', advancedReps: '10-15 (weighted)', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Suspend on bars, upright.', bottom: 'Lower until 90 degrees.', top: 'Press up and lock out.' }
  },
  {
    id: 'machine-triceps-extension', name: 'Machine Triceps Extension', primaryMuscle: 'Triceps', secondaryMuscles: [], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 7, setupInstructions: 'Elbows on pad.', goodBurn: 'Isolated squeeze.', badPain: 'Elbow rubbing.', beginnerReps: '12-15', advancedReps: '10-12', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Sit and grip.', bottom: 'Arms bent.', top: 'Push down until straight.' }
  },

  // QUADS
  {
    id: 'barbell-back-squat', name: 'Barbell Back Squat', primaryMuscle: 'Quadriceps', secondaryMuscles: ['Glutes', 'Hamstrings'], equipment: 'barbell', spotterRequired: true, quietCornerFriendly: false, effectivenessRank: 1, setupInstructions: 'Bar on traps.', goodBurn: 'Full leg fatigue.', badPain: 'Lower back rounding.', beginnerReps: '8-10', advancedReps: '4-8', beginnerSets: 3, advancedSets: 5, movementSteps: { setup: 'Brace core, step back.', bottom: 'Squat parallel.', top: 'Drive to stand.' }
  },
  {
    id: 'hack-squat', name: 'Hack Squat', primaryMuscle: 'Quadriceps', secondaryMuscles: ['Glutes'], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 2, setupInstructions: 'Feet low on platform.', goodBurn: 'Teardrop quad pump.', badPain: 'Knee pain (heels up).', beginnerReps: '10-12', advancedReps: '8-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Back flat against pad.', bottom: 'Lower deep.', top: 'Press up.' }
  },
  {
    id: 'leg-extension', name: 'Leg Extension', primaryMuscle: 'Quadriceps', secondaryMuscles: [], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 3, setupInstructions: 'Align knee joint with pivot.', goodBurn: 'Searing middle quad burn.', badPain: 'Patellar tendon pain.', beginnerReps: '12-15', advancedReps: '10-20', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Sit firmly.', bottom: 'Legs bent 90 deg.', top: 'Extend fully.' }
  },
  {
    id: 'bulgarian-split-squat', name: 'Bulgarian Split Squat', primaryMuscle: 'Quadriceps', secondaryMuscles: ['Glutes', 'Hamstrings'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 4, setupInstructions: 'Rear foot on bench.', goodBurn: 'Extreme front quad fatigue.', badPain: 'Rear knee pain.', beginnerReps: '8-10', advancedReps: '6-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Split stance.', bottom: 'Drop back knee to floor.', top: 'Drive front heel.' }
  },
  {
    id: 'front-squat', name: 'Front Squat', primaryMuscle: 'Quadriceps', secondaryMuscles: ['Upper Back', 'Core'], equipment: 'barbell', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 5, setupInstructions: 'Bar on front delts.', goodBurn: 'Upright quad focus.', badPain: 'Wrist/collarbone pain.', beginnerReps: '8-10', advancedReps: '4-8', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Front rack position.', bottom: 'Squat deep and upright.', top: 'Drive up.' }
  },
  {
    id: 'leg-press', name: 'Leg Press', primaryMuscle: 'Quadriceps', secondaryMuscles: ['Glutes'], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 6, setupInstructions: 'Feet middle of sled.', goodBurn: 'Heavy leg load.', badPain: 'Lower back rounding off pad.', beginnerReps: '10-15', advancedReps: '8-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Unlock sled.', bottom: 'Lower knees to chest.', top: 'Press up.' }
  },
  {
    id: 'goblet-squat', name: 'Goblet Squat', primaryMuscle: 'Quadriceps', secondaryMuscles: ['Core'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 7, setupInstructions: 'Hold dumbbell at chest.', goodBurn: 'Deep squat mobility and quad burn.', badPain: 'Lower back ache.', beginnerReps: '12-15', advancedReps: '10-12', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Hold weight at chest.', bottom: 'Squat very deep.', top: 'Stand tall.' }
  },
  {
    id: 'sissy-squat', name: 'Sissy Squat', primaryMuscle: 'Quadriceps', secondaryMuscles: [], equipment: 'bodyweight', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 8, setupInstructions: 'Hold a support, lean back.', goodBurn: 'Massive stretch in rectus femoris.', badPain: 'Knee shear pain.', beginnerReps: '8-12', advancedReps: '10-15', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Hold support.', bottom: 'Knees forward, lean back.', top: 'Squeeze quads to return.' }
  },

  // HAMSTRINGS
  {
    id: 'romanian-deadlift', name: 'Romanian Deadlift (RDL)', primaryMuscle: 'Hamstrings', secondaryMuscles: ['Glutes', 'Lower Back'], equipment: 'barbell', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 1, setupInstructions: 'Slight knee bend, straight back.', goodBurn: 'Deep tearing stretch back of thighs.', badPain: 'Lower back rounding pain.', beginnerReps: '8-12', advancedReps: '6-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Bar at hips.', bottom: 'Push hips to wall.', top: 'Squeeze glutes forward.' }
  },
  {
    id: 'lying-leg-curl', name: 'Lying Leg Curl', primaryMuscle: 'Hamstrings', secondaryMuscles: ['Calves'], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 2, setupInstructions: 'Align knees with pivot.', goodBurn: 'Intense cramp hamstring belly.', badPain: 'Hips rising off pad.', beginnerReps: '10-15', advancedReps: '8-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Lie down face first.', bottom: 'Legs straight.', top: 'Curl pad to glutes.' }
  },
  {
    id: 'seated-leg-curl', name: 'Seated Leg Curl', primaryMuscle: 'Hamstrings', secondaryMuscles: ['Calves'], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 3, setupInstructions: 'Thigh pad locked firm.', goodBurn: 'Strong contraction and stretch.', badPain: 'Knee pain.', beginnerReps: '12-15', advancedReps: '10-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Sit upright, legs straight.', bottom: 'Full stretch.', top: 'Pull ankles down and back.' }
  },
  {
    id: 'dumbbell-rdl', name: 'Dumbbell RDL', primaryMuscle: 'Hamstrings', secondaryMuscles: ['Glutes'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 4, setupInstructions: 'Hold dumbbells at sides.', goodBurn: 'Deep hamstring stretch.', badPain: 'Lower back rounding.', beginnerReps: '10-12', advancedReps: '8-10', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Stand tall with weights.', bottom: 'Hinge hips back.', top: 'Stand up and squeeze.' }
  },
  {
    id: 'nordic-hamstring-curl', name: 'Nordic Hamstring Curl', primaryMuscle: 'Hamstrings', secondaryMuscles: ['Glutes'], equipment: 'bodyweight', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 5, setupInstructions: 'Kneel, anchor feet.', goodBurn: 'Extreme eccentric overload.', badPain: 'Knee cap pain on floor.', beginnerReps: '3-5', advancedReps: '6-10', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Kneeling, tall torso.', bottom: 'Fall forward slowly.', top: 'Push off floor to return.' }
  },
  {
    id: 'glute-ham-raise', name: 'Glute-Ham Raise', primaryMuscle: 'Hamstrings', secondaryMuscles: ['Glutes', 'Calves'], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 6, setupInstructions: 'Lock feet in GHR machine.', goodBurn: 'Simultaneous glute/hamstring burn.', badPain: 'Lower back hyperextension.', beginnerReps: '8-12', advancedReps: '10-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Knees on pad, feet locked.', bottom: 'Torso parallel to floor.', top: 'Curl up to vertical.' }
  },

  // GLUTES
  {
    id: 'barbell-hip-thrust', name: 'Barbell Hip Thrust', primaryMuscle: 'Glutes', secondaryMuscles: ['Hamstrings'], equipment: 'barbell', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 1, setupInstructions: 'Upper back on bench, bar on hips.', goodBurn: 'Massive glute pump.', badPain: 'Lower back overextension.', beginnerReps: '10-12', advancedReps: '6-10', beginnerSets: 3, advancedSets: 5, movementSteps: { setup: 'Sit on floor, roll bar over.', bottom: 'Hips near floor.', top: 'Drive hips up, squeeze.' }
  },
  {
    id: 'cable-pull-through', name: 'Cable Pull-Through', primaryMuscle: 'Glutes', secondaryMuscles: ['Hamstrings'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 2, setupInstructions: 'Straddle cable with rope.', goodBurn: 'Deep stretch and hard squeeze.', badPain: 'Lower back rounding.', beginnerReps: '12-15', advancedReps: '10-15', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Step forward.', bottom: 'Hinge hips back.', top: 'Thrust hips forward.' }
  },
  {
    id: 'glute-kickbacks', name: 'Cable Glute Kickbacks', primaryMuscle: 'Glutes', secondaryMuscles: ['Hamstrings'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 3, setupInstructions: 'Ankle cuff low pulley.', goodBurn: 'Isolated upper glute burn.', badPain: 'Lower back arch.', beginnerReps: '12-15', advancedReps: '10-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Strap ankle, lean forward.', bottom: 'Leg slightly forward.', top: 'Kick straight back.' }
  },
  {
    id: 'machine-hip-abductor', name: 'Machine Hip Abductor', primaryMuscle: 'Glutes (Medius)', secondaryMuscles: [], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 4, setupInstructions: 'Sit in machine, pads on outside of knees.', goodBurn: 'Side glute burn.', badPain: 'Hip joint pinching.', beginnerReps: '15-20', advancedReps: '12-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Sit tall.', bottom: 'Knees together.', top: 'Push knees outward.' }
  },
  {
    id: 'dumbbell-sumo-squat', name: 'Dumbbell Sumo Squat', primaryMuscle: 'Glutes', secondaryMuscles: ['Quads', 'Adductors'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 5, setupInstructions: 'Wide stance, toes out, hold DB vertical.', goodBurn: 'Glute and inner thigh stretch.', badPain: 'Knees caving in.', beginnerReps: '10-15', advancedReps: '8-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Wide stance.', bottom: 'Squat deep.', top: 'Squeeze glutes to stand.' }
  },
  {
    id: 'single-leg-hip-thrust', name: 'Single-Leg Hip Thrust', primaryMuscle: 'Glutes', secondaryMuscles: ['Hamstrings'], equipment: 'bodyweight', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 6, setupInstructions: 'Back on bench, one leg up.', goodBurn: 'Unilateral glute pump.', badPain: 'Lower back rotation.', beginnerReps: '10-15', advancedReps: '8-12 (weighted)', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'One foot planted.', bottom: 'Hips down.', top: 'Drive up with one leg.' }
  },

  // CALVES
  {
    id: 'standing-calf-raise', name: 'Standing Calf Raise', primaryMuscle: 'Calves (Gastrocnemius)', secondaryMuscles: [], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 1, setupInstructions: 'Shoulders under pads.', goodBurn: 'Deep stretch, intense cramp.', badPain: 'Plantar fascia pain.', beginnerReps: '15-20', advancedReps: '10-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Stand tall.', bottom: 'Drop heels below step.', top: 'Push onto toes.' }
  },
  {
    id: 'seated-calf-raise', name: 'Seated Calf Raise', primaryMuscle: 'Calves (Soleus)', secondaryMuscles: [], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 2, setupInstructions: 'Pads over lower quads.', goodBurn: 'Lower calf burn.', badPain: 'Knee joint pressure.', beginnerReps: '15-20', advancedReps: '12-20', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Sit upright.', bottom: 'Lower heels.', top: 'Drive onto toes.' }
  },
  {
    id: 'leg-press-calf-raise', name: 'Leg Press Calf Raise', primaryMuscle: 'Calves', secondaryMuscles: [], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 3, setupInstructions: 'Toes on bottom edge of leg press.', goodBurn: 'Heavy calf stretch.', badPain: 'Knee hyper-extension.', beginnerReps: '12-15', advancedReps: '10-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Legs straight (not locked).', bottom: 'Toes back.', top: 'Press sled with toes.' }
  },
  {
    id: 'dumbbell-calf-raise', name: 'Dumbbell Calf Raise', primaryMuscle: 'Calves', secondaryMuscles: [], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 4, setupInstructions: 'Hold dumbbells, stand on a step.', goodBurn: 'Calf pump.', badPain: 'Loss of balance.', beginnerReps: '15-20', advancedReps: '10-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Hold weights.', bottom: 'Drop heels off step.', top: 'Raise onto toes.' }
  },
  {
    id: 'donkey-calf-raise', name: 'Donkey Calf Raise', primaryMuscle: 'Calves', secondaryMuscles: [], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 5, setupInstructions: 'Hinge forward in machine.', goodBurn: 'Maximum gastrocnemius stretch.', badPain: 'Lower back stretch pain.', beginnerReps: '15-20', advancedReps: '12-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Pad on lower back.', bottom: 'Drop heels.', top: 'Push up.' }
  },

  // CORE: UPPER ABS
  {
    id: 'cable-crunch', name: 'Cable Crunch', primaryMuscle: 'Upper Abs', secondaryMuscles: ['Lower Abs'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 1, setupInstructions: 'Kneel down facing machine.', goodBurn: 'Deep front stomach cramp.', badPain: 'Lower back strain.', beginnerReps: '12-15', advancedReps: '10-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Hold rope behind head.', bottom: 'Torso upright.', top: 'Crunch elbows to knees.' }
  },
  {
    id: 'decline-sit-up', name: 'Decline Sit-Up', primaryMuscle: 'Upper Abs', secondaryMuscles: ['Hip Flexors'], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 2, setupInstructions: 'Lock feet in decline bench.', goodBurn: 'Intense rectus abdominis burn.', badPain: 'Lower back jerking.', beginnerReps: '10-15', advancedReps: '10-20 (weighted)', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Cross arms over chest.', bottom: 'Lower torso parallel.', top: 'Sit back up, round spine.' }
  },
  {
    id: 'ab-wheel-rollout', name: 'Ab Wheel Rollout', primaryMuscle: 'Upper Abs', secondaryMuscles: ['Lower Abs', 'Lats'], equipment: 'bodyweight', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 3, setupInstructions: 'Kneel, hold ab wheel.', goodBurn: 'Full abdominal tension.', badPain: 'Lower back sagging.', beginnerReps: '8-10', advancedReps: '12-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Kneeling, hold wheel.', bottom: 'Roll out until flat.', top: 'Pull back in.' }
  },
  {
    id: 'crunch', name: 'Crunch', primaryMuscle: 'Upper Abs', secondaryMuscles: [], equipment: 'bodyweight', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 4, setupInstructions: 'Lie on floor, knees bent.', goodBurn: 'Upper ab squeeze.', badPain: 'Neck pulling pain.', beginnerReps: '15-20', advancedReps: '20-30', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Hands behind ears.', bottom: 'Shoulders on floor.', top: 'Lift shoulder blades off floor.' }
  },
  {
    id: 'machine-crunch', name: 'Machine Crunch', primaryMuscle: 'Upper Abs', secondaryMuscles: [], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 5, setupInstructions: 'Sit in ab machine.', goodBurn: 'Weighted ab contraction.', badPain: 'Hip flexor takeover.', beginnerReps: '12-15', advancedReps: '10-12', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Grip handles.', bottom: 'Upright.', top: 'Crunch forward.' }
  },

  // CORE: LOWER ABS
  {
    id: 'hanging-leg-raise', name: 'Hanging Leg Raise', primaryMuscle: 'Lower Abs', secondaryMuscles: ['Hip Flexors'], equipment: 'bodyweight', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 1, setupInstructions: 'Hang from pull-up bar.', goodBurn: 'Burn below belly button.', badPain: 'Lower back pinch.', beginnerReps: '8-12', advancedReps: '10-15', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Straight arms and legs.', bottom: 'Legs straight down.', top: 'Raise legs to 90 degrees.' }
  },
  {
    id: 'lying-leg-raises', name: 'Lying Leg Raises', primaryMuscle: 'Lower Abs', secondaryMuscles: ['Hip Flexors'], equipment: 'bodyweight', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 2, setupInstructions: 'Lie flat, lower back pressed down.', goodBurn: 'Lower ab fatigue.', badPain: 'Lower back arching.', beginnerReps: '12-15', advancedReps: '15-20', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Hands under glutes.', bottom: 'Legs hover above floor.', top: 'Raise to 90 degrees.' }
  },
  {
    id: 'captains-chair-leg-raise', name: 'Captains Chair Leg Raise', primaryMuscle: 'Lower Abs', secondaryMuscles: ['Hip Flexors'], equipment: 'machine', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 3, setupInstructions: 'Support on forearms.', goodBurn: 'Lower ab squeeze without grip limit.', badPain: 'Shoulder sagging.', beginnerReps: '10-15', advancedReps: '15-20', beginnerSets: 3, advancedSets: 4, movementSteps: { setup: 'Forearms on pads.', bottom: 'Legs down.', top: 'Raise knees or legs.' }
  },
  {
    id: 'reverse-crunch', name: 'Reverse Crunch', primaryMuscle: 'Lower Abs', secondaryMuscles: [], equipment: 'bodyweight', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 4, setupInstructions: 'Lie flat, grab something behind head.', goodBurn: 'Lower ab contraction.', badPain: 'Using momentum too much.', beginnerReps: '12-15', advancedReps: '15-20', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Legs bent.', bottom: 'Feet near floor.', top: 'Curl pelvis off floor.' }
  },
  {
    id: 'mountain-climbers', name: 'Mountain Climbers', primaryMuscle: 'Lower Abs', secondaryMuscles: ['Core', 'Shoulders'], equipment: 'bodyweight', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 5, setupInstructions: 'Plank position.', goodBurn: 'Core fatigue and cardio.', badPain: 'Hips bouncing up and down.', beginnerReps: '30 seconds', advancedReps: '60 seconds', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Push-up position.', bottom: 'Leg extended.', top: 'Drive knee to chest.' }
  },

  // CORE: OBLIQUES
  {
    id: 'cable-woodchopper', name: 'Cable Woodchopper', primaryMuscle: 'Obliques', secondaryMuscles: ['Core'], equipment: 'cable', spotterRequired: false, quietCornerFriendly: false, effectivenessRank: 1, setupInstructions: 'High cable, stand sideways.', goodBurn: 'Rotational waist tension.', badPain: 'Twisting hips instead of torso.', beginnerReps: '10-15 per side', advancedReps: '10-12', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Wide stance.', bottom: 'Twisted toward machine.', top: 'Pull diagonally down across body.' }
  },
  {
    id: 'russian-twists', name: 'Russian Twists', primaryMuscle: 'Obliques', secondaryMuscles: ['Upper Abs'], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 2, setupInstructions: 'Lean back 45 degrees.', goodBurn: 'Side abs burn.', badPain: 'Lower back pain.', beginnerReps: '15-20 per side', advancedReps: '20-30', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Balance on glutes.', bottom: 'Twist one side.', top: 'Twist opposite side.' }
  },
  {
    id: 'side-plank', name: 'Side Plank', primaryMuscle: 'Obliques', secondaryMuscles: ['Core'], equipment: 'bodyweight', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 3, setupInstructions: 'Support on one forearm.', goodBurn: 'Deep isometric burn in side.', badPain: 'Shoulder joint pain.', beginnerReps: '30 seconds', advancedReps: '60 seconds', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Forearm on floor.', bottom: 'Hips down.', top: 'Lift hips to straight line.' }
  },
  {
    id: 'bicycle-crunches', name: 'Bicycle Crunches', primaryMuscle: 'Obliques', secondaryMuscles: ['Upper Abs', 'Lower Abs'], equipment: 'bodyweight', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 4, setupInstructions: 'Lie on floor, pedal legs.', goodBurn: 'Complete core burn.', badPain: 'Yanking the neck.', beginnerReps: '15-20 per side', advancedReps: '20-30', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Hands behind ears.', bottom: 'Leg extended.', top: 'Opposite elbow to knee.' }
  },
  {
    id: 'dumbbell-side-bend', name: 'Dumbbell Side Bend', primaryMuscle: 'Obliques', secondaryMuscles: [], equipment: 'dumbbell', spotterRequired: false, quietCornerFriendly: true, effectivenessRank: 5, setupInstructions: 'Hold one dumbbell in one hand.', goodBurn: 'Stretch and flex of side abs.', badPain: 'Lower back bending forward.', beginnerReps: '12-15', advancedReps: '10-12', beginnerSets: 3, advancedSets: 3, movementSteps: { setup: 'Stand tall.', bottom: 'Bend towards weight.', top: 'Crunch to opposite side.' }
  }
];
