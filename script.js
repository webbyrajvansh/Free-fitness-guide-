// script.js

const programs = { "strength": { title: "Strength Program", description: ` <h3>Strength Program</h3> <p><strong>work out plan 👇🏻</strong></p>

<p>squats - 3sets of 30 reps</p>
<p>deadlift - starting from your own weight then add progressive overload.</p> 
<p>Bench Press – 4 sets of 8 reps</p>
<p>Overhead Shoulder Press – 3 sets of 10 reps</p>
<p>Barbell Row – 4 sets of 8 reps</p>
<p>Pull-Ups – 3 sets till failure</p>
<p>Dumbbell Lunges – 3 sets of 12 reps (each leg)</p>
<p>Leg Press – 4 sets of 10 reps</p>
<p>Barbell Shrugs – 3 sets of 15 reps</p>
<p>Plank – 3 sets, hold for 1 minute</p>
<p>Russian Twists – 3 sets of 20 reps</p>
<p>Farmer's Walk – 3 rounds, 30 seconds each</p>
      <p><strong>– Diet Plan 🥗</strong></p>
<p><strong>Morning (7–8 AM):</strong> 4 boiled eggs + 2 slices brown bread + 1 banana + 1 glass milk</p>
<p><strong>Mid-Morning (10–11 AM):</strong> Handful of almonds & walnuts + 1 apple</p>
<p><strong>Lunch (1–2 PM):</strong> 2 chapatis + 1 bowl brown rice + paneer sabzi + green salad</p>
<p><strong>Pre-Workout Snack (4–5 PM):</strong> Peanut butter sandwich + 1 banana + black coffee (optional)</p>
<p><strong>Post-Workout (6–6:30 PM):</strong> Protein shake (or 3 boiled eggs) + 1 banana</p>
<p><strong>Dinner (8–9 PM):</strong> 2 chapatis + soya chunks or dal + steamed vegetables</p>
<p><strong>Before Bed (10–11 PM):</strong> 1 glass warm milk + 2 soaked almonds</p>
<p><strong>Hydration:</strong> Drink at least 3–4 liters of water daily</p>
<p><strong>Optional Supplements:</strong> Creatine (after workout) + Multivitamin (morning)</p>
<p><strong>Tip:</strong> Avoid junk food, fried food, and sugary drinks for best results</p>
<p>Protein, moderate carbs, healthy fats. Eat clean and track calories.</p>
    `
  },
  "weight-loss": {
    title: "Weight Loss Program",
    description: `
      <h3>Weight Loss Program</h3>
      <p><strong>Workout Plan 👇🏻</strong></p>
<p>Jump Rope – 3 sets of 1 min</p>
<p>Burpees – 3 sets of 15 reps</p>
<p>HIIT Circuit – 20 min</p>
<p>Plank – 3 sets of 45 seconds</p>
<p>Mountain Climbers – 3 sets of 20 reps</p>
<p>Brisk Walking or Jogging – 30 min daily</p>
<p><strong>Diet Plan 🥗</strong></p>
<p><strong>Morning:</strong> Warm lemon water + soaked almonds</p>
<p><strong>Breakfast:</strong> Oats + fruits + green tea</p>
<p><strong>Lunch:</strong> 1 chapati + dal + sabzi + salad</p>
<p><strong>Snack:</strong> Buttermilk + fruit</p>
<p><strong>Dinner:</strong> Soup + 1 chapati + veggies</p>
<p><strong>Hydration:</strong> 3-4 liters water</p>
<p><strong>Avoid:</strong> Sugar, fried food, soft drinks</p>
    `
  },
  "weight-gain": {
    title: "Weight Gain Program",
    description: `
      <h3>Weight Gain Program</h3>
      <p><strong>Workout Plan 👇🏻</strong></p>
<p>Bench Press – 4 sets of 10 reps</p>
<p>Deadlifts – 3 sets of 8 reps</p>
<p>Squats – 4 sets of 12 reps</p>
<p>Dumbbell Press – 3 sets of 10 reps</p>
<p>Pull-Ups – 3 sets till failure</p>
<p><strong>Diet Plan 🥗</strong></p>
<p><strong>Morning:</strong> Banana shake + nuts + oats</p>
<p><strong>Breakfast:</strong> Milk + chapati + paneer</p>
<p><strong>Lunch:</strong> Rice + dal + curd + ghee</p>
<p><strong>Snack:</strong> Peanut butter toast + boiled eggs</p>
<p><strong>Dinner:</strong> Sabzi + chapati + salad</p>
<p><strong>Late Snack:</strong> Milk + banana</p>
<p><strong>Hydration:</strong> 3–4 liters water</p>
<p>Goal: High-calorie clean diet, regular meals every 2–3 hours</p>
    `
  },
  "height-increase": {
    title: "Height Increase Program",
    description: `
      <h3>Height Increase Program</h3>
      <p><strong>Workout Plan 👇🏻</strong></p>
<p>Hanging – 3 sets x 30 sec hold</p>
<p>Cobra Stretch – 3 sets x 20 sec hold</p>
<p>Pelvic Tilt – 3 sets x 15 reps</p>
<p>Jumping Rope – 3 sets x 1 min</p>
<p>Spot Jumps – 3 sets x 20 jumps</p>
<p>Forward Bend – 3 sets x 30 sec</p>
<p>Bridge Pose – 3 sets x 20 sec hold</p>
<p>Leg Stretch (each leg) – 3 sets x 20 sec</p>
<p>Surya Namaskar – 5 rounds daily</p>
<p>Toe Touch – 3 sets x 15 reps</p>
<p><strong>Diet Plan 🥗</strong></p>
<p><strong>Morning:</strong> Warm water + banana + almonds + soaked raisins</p>
<p><strong>Breakfast:</strong> Milk + 2 boiled eggs or paneer/tofu sandwich</p>
<p><strong>Mid-Morning:</strong> Seasonal fruit (papaya/mango/apple) + walnuts</p>
<p><strong>Lunch:</strong> Rice/chapati + dal + sabzi + salad + curd</p>
<p><strong>Evening Snack:</strong> Peanut butter toast or sprouts + fruit juice</p>
<p><strong>Dinner:</strong> Light sabzi + 1 chapati + soup + salad</p>
<p><strong>Before Bed:</strong> 1 cup warm milk with haldi or ashwagandha powder</p>
<p><strong>Hydration:</strong> 3–4 liters of water every day</p>
<p><strong>Sleep:</strong> 8–9 hours of deep sleep for optimal growth</p>
<p><strong>Manifesting:</strong> Visualize your taller self daily. Affirm: “I am growing taller every day.”</p>
<p><strong>Important:</strong> You can’t grow if you are 21+. It's over for you buddy. Now focus on the Physique Program. Best of luck.</p>
    `
  },
  "physique": {
    title: "Physique Program",
    description: `
      <h3>Physique Program</h3>
      <p><strong>Workout Plan 👇🏻</strong></p>
<p>Push/Pull/Legs Split – 6 days/week</p>
<p>Monday – Push (Chest, Shoulders, Triceps)</p>
<p>Tuesday – Pull (Back, Biceps)</p>
<p>Wednesday – Legs + Core</p>
<p>Thursday – Push</p>
<p>Friday – Pull</p>
<p>Saturday – Legs + Abs</p>
<p><strong>Diet Plan 🥗</strong></p>
<p><strong>Breakfast:</strong> Oats + protein shake + almonds</p>
<p><strong>Lunch:</strong> Rice + chicken/tofu + salad</p>
<p><strong>Snack:</strong> Boiled eggs + banana + black coffee</p>
<p><strong>Dinner:</strong> Paneer/tofu + 1 chapati + vegetables</p>
<p><strong>Hydration:</strong> 3–4 liters daily</p>
<p>Goal: Symmetry + low fat + visible muscles</p>
    `
  }
};function showProgram(programKey) { const programInfo = document.getElementById("program-info"); if (programs[programKey]) { programInfo.innerHTML = programs[programKey].description; } else { programInfo.innerHTML = "<p>Program details not found.</p>"; } }
