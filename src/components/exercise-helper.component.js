import React, { useState } from 'react'

import WorkoutImg from './cardio-workouts.jpg'

import './exercise-helper.css'

const ExerciseHelper = () => {
  const [exerciseType, setExerciseType] = useState('cardio')

  return (
    <div className='exercise-help-container'>
      <label className='help-label'>What type of exercise you want?</label>
      <select name="exercise type" id="" onChange={(e) => setExerciseType(e.target.value)}>
        <option value="cardio">Weight Loss At Home</option>
        <option value="crossfit">CrossFit</option>
        <option value="arm">Arm Workout</option>
        <option value="leg">Leg Workout</option>
        <option value="chest">Chest Workout</option>
        <option value="back">Back/Traps Workout</option>
      </select>
      {exerciseType === 'cardio' ? (
        <div className='container-sm'>
          <h1>Best Cardio Workouts You Can Do At Home</h1>
          <img src={WorkoutImg} alt="workouts" style={{ maxWidth: '100%' }} />
          <h2>1. Burpees</h2>
            Burpees might be the dread of CrossFit pros, but they do provide a killer cardio workout in a short period of time. You do not need any equipment or a lot of space, making them a great cardio workout at home. To do a <a href='https://www.fitnessmagazine.com/workout/lose-weight/burn-fat/how-to-do-a-burpee/' target='_'>burpee</a>, alternate between a plank position and jumping forward in the air. Make sure that your hands are flat on the ground and your back straight. In just 10 minutes, you can burn more than 100 calories. We recommend starting slow and working your way up to 10 minutes or more to avoid injury.

            <h2>2. Jump Rope</h2>
            Do you have fond memories of jumping rope as a kid? Well, you can bring that into your workouts by jumping rope at home. Jumping rope is often considered the best cardio workout and is used for cross training by many athletes. You can do it almost anywhere with just a simple jump rope you can buy in many locations, which is why it is a great cardio workout at home. If you jump rope for only 20 minutes, you can burn about 220 calories. Although you might have memories of jumping for long periods of time as a kid with no problem, you also want to work your way up to the full 20 minutes.

            <h2>3. Jumping Jacks</h2>
            Another cardio workout at home that might bring you back to your childhood is jumping jacks. Similar to burpees, doing jumping jacks for 10 minutes straight can burn around 100 calories. You can easily integrate jumping jacks into a circuit training that includes some of the other exercises on this page, such as burpees, jumping rope and squat jumps. With no equipment necessary, you can perform jumping jacks anywhere at any time.

            <h2>4. Squat Jumps</h2>
            Another great cardio exercise that you can do alone or as part of a cardio circuit is squat jumps. As their name implies, you start out in a squat and then jump up, trying to get as high as possible, and then land back in the squat. It is high impact, especially on your knees, so care is needed when you are a beginner or if you are suffering a knee injury.

          <h2>5. Kickboxing</h2>
            Want to feel the burn in a more organized cardio session? Then try kickboxing, the best cardio workout to do at home. Kickboxing is a combination of karate and boxing which is excellent for not only cardio but also strength straining. You can use some equipment, such as a punching bag and exercise video, or you can do it on your own if you already have some skills. In addition to burning around 100 calories per 10 minutes of working out, you also can get rid of your stress and aggression.
        
          <h2>6. Running the Stairs</h2>
            Another cardio workout at home is stair running, as long as you have some stairs nearby. Stair workouts help you build strength and power in your lower body and gets the heart rate pumping. Challenge yourself with mini intervals by alternating between a regular stair run and sideways stair run to burn more calories even after your workout. Make sure you have a good workout shoes so you can also perform some stair exercises if you have a single stair somewhere, or if you purchase a special stepping stool for exercising like the Tone Fitness Aerobic Stepper or The Step Original Aerobic Platform.
          
          <h2>7. Jogging in Place</h2>
            You do not need to head outside or hit the treadmill to get the benefits of running; simply jogging in place in your home provides many of the same benefits. Of course, you might find it boring to run in place for an extensive length of time. That is why most people incorporate jogging in place with other exercises, such as burpees, jump ropes or strength training for a complete workout.
        </div>
      ) : null }
      {exerciseType === 'crossfit' ? (
        <div className='container-sm'>
          <h1>List of 10 Best CrossFit Workouts</h1>
Now as you know how beneficial is crossfit workouts, it is cardinal to understand the ways in which it can be done effectively. There are numerous types of crossfit workouts. To choose the best from it is a daunting task. Workouts depends on the level of your skills. There are beginner’s workouts which are comparatively simple and flexible for a new health bee. And there are advanced workouts, which are combination of certain workouts. Here’s a list of ten best crossfit workouts for both.

 
 <h2>1. Front Squat</h2>
Front squat is a crossfit workout done with a weight.
<ul>
  <li>Stand straight with legs apart (shoulder width)</li>
  <li>Place the bar on your chest level and the fingers below it. Your elbows should be parallel to the ground.</li>
  <li>Now push your hips back and butt out, in a deep lower squat position. Spread the knees, which should be pointing towards the corner.</li>
  <li>Repeat it for 10 reps.</li>
</ul>
‍
<h2>2. Kettle Bell Swings</h2>
Done with a kettle bell and intense sweating.
<ul>
  <li>Place a kettle bell in front of you.</li>
  <li>Stand with your feet slightly wider apart than shoulder width.</li>
  <li>Bent your knees forward and grab the handle of the kettle bell with both your hands.</li>
  <li>With a flat and straight back, swing the kettle bell between your legs, by lowering your body.</li>
  <li>Now swing it back with a pull to the shoulder height with your arms straight in front of you.</li>
  <li>Return back to the initial position and repeat it without a pause.</li>
  <li>Your target should be, completing 5 sets with 30 seconds</li>. 
</ul>
Though considered as primary crossfit workout, this is one among all the advanced crossfit exercises. It provides flexibility to the body and improves the strength of the bone muscles.

 
<h2>3. Cindy</h2>
It is one of the best crossfit workout, done with a series of other workouts. In this vigorous exercise you have to complete as many possible rounds in 20 minutes. It contains
<ul>
  <li>5 pull ups,</li>
  <li>10 push-ups</li>
  <li>15 squats, which should be completed within time. It serves as a  good beginner’s workout as it only contains body movements.</li>
</ul>
‍
<h2>4. Murph</h2>
Murph is an advanced form of crossfit workout. Has a lot more exercise, a lot more sweating and a lot more burning of calories.
<br />
<br />
This intense workout includes in itself
<ul>
  <li>1 mile run up initially</li>
  <li>100 pull ups</li>
  <li>200 push ups</li>
  <li>300 squats</li>
  <li>1mile run up as ending of a set.  Now that’s quite a lot, but it does helps burning off quite a lot calories too</li>
</ul>
‍
<h2>5. Grace</h2>
It is not as graceful as it sounds to be.It involves 30 continues repetition of clean and jerks for a time. Doing a clean and jerk is not an easy task.
<ul>
  <li>Keeping a weight bar ahead, stand with your feet, shoulder width apart.</li>
  <li>Reach down and grab the bar.</li>
  <li>Pull the bar</li>
  <li>Catch it</li>
  <li>Jerk it</li>
  <li>Drop it down, With precision.</li>
</ul>
‍
<h2>6. Barbell Deadlift</h2>
This is a beginner’s crossfit workout using a <a href='https://www.decathlon.in/18214-olympic-bar?utm_medium=referral&utm_source=decathlon_blog&utm_campaign=10-best-crossfit-workouts-to-get-fit-faster-2019-updated' target='_'>barbell</a>
<ul>
  <li>Stand with wide legs shoulder width apart</li>
  <li>Squat down and lift the barbell with both your hands.</li>
  <li>Keeping your chest up, pull up your shoulders back.</li>
  <li>Look straight ahead when you lift the bar. This is to make sure that your body is straight and fern.</li>
  <li>Focus on pulling the weight back and forth. The bar must be closer to your body.</li>
  <li>Lift the bar to your thigh level, stay for a few second and return back to the initial position.</li>
  <li>Repeat it for 5 sets with 10 repetitions.</li>
</ul>
‍
<h2>7. Helen</h2>
Helen, not as sweet as the name suggests, this is an intense crossfit workout which is a blend of few beginner’s workouts. It involves:
<ul>
  <li>400m run initially</li>
  <li>21 kettlebells, which itself is hard nut</li>
  <li>12 pull ups to complete one set.</li>
</ul> 
This workout comes with best bunch of exercise to reduce body fat. Along with reducing fat, it improves the core strength thereby providing sufficient stamina for the body to work on.‍
<h2>8. Shoulder Press</h2>
Shoulder press is a quite simple and beginner workout compared to other crossfit workouts. The method to do a proper shoulder press includes:
<ul>
  <li>Stand straight with feet shoulder width apart</li>
  <li>Place your hands slightly apart from shoulder width with the bars</li>
  <li>Hold the bar at the shoulder level</li>
  <li>Now slowly extend the arms above your head and lift the bar</li>
  <li>As a safety measure for your shoulder, to avoid injuries, use the chicken neck movement, tuck your neck out and tuck it in after pulling the bar up.</li>
  <li>Repeat the workout for 10 reps.  Make sure you keep your back straight and head looking forward throughout the exercise.</li>
</ul>
‍
<h2>9. Filthy Fifty</h2>
The name does not disguise here. These set of crossfit workout routines are filthy harsh and hard to do. This is an advanced level workout strictly not prescribed for the beginners. In the filthy fifty you have to complete all the following workouts 50 times within a day or an hour accordingly.
<ul>
  <li>50 box jumps</li>
  <li>50 jumping pull-ups</li>
  <li>50 kettle bell swings</li>
  <li>50 walking lunges steps</li>
  <li>50 knees to elbows</li>
  <li>50 push presses</li>
  <li>50 back extensions</li>
  <li>50 wall ball shots</li>
  <li>50 burpees</li>
  <li>50 double-unders.</li>
</ul> 
That’s quite a lot, but it does shoes intense benefit and burns up your calories in a quicker pace than you can imagine!

<h2>10. Josie</h2>
Yet another intense and hard cross fit workout. It burns up calories at a pace which normal workouts can never achieve. This workout includes
<ul>
  <li>Run one mile using a weighted vest</li>
  <li>30 burpees</li>
  <li>6 front squats</li>
  <li>Now end it by again a run of one mile with a weighted vest.</li>
</ul>
Being the blend of such squats and running, along with burning the calories it also increases the heart health rate, by pumping up enough blood.
        </div>
      ) : null}
      {exerciseType === 'arm' ? (
        <div className='container-sm'>
          <h1>BICEPS</h1>
During your time in the gym, you'll probably come across some weird and wonderful exercises, with many trying to target the biceps in different ways. 
          <br />
          <br />
          
But... believe us when we say, the most effective lifts are often the most basic. Execute these three biceps exercises correctly in your next arm workout and reap the rewards.

          <h2>BARBELL BICEP CURL</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/4hhf4xvRCpIeqU0UsdqgcQ/840ab4343d9e820c691b281fdd9ce759/_uploads_1571836981-barbell-bicep-curl.gif" />
          <b>Muscles Targeted:</b> Biceps Brachii (Long Head & Short Head)
<br />
<br />
<b>Overview:</b>
<br />
If the Barbell Bicep Curl isn't part of your arm workout, now is the time to include it. Being one of the best exercises for developing muscle mass in the biceps, the utilisation of the barbell allows both arms to work together, shifting more weight during each rep.
<br />
<br />
And remember, increasing volume through total weight and reps helps stimulate adaptation in the muscle groups targeted, leading to muscular growth and development.
<br />
<br />
<b>TIP:</b> Classic bad form for the bicep curl includes erratic swinging at the bottom of the rep. Keep your feet planted shoulder-width apart, knees slightly bent and elbows kept strictly by your side. Aim for a powerful contraction to the top of the rep, with a slow three-second eccentric movement.
<br />
          <h2>DUMBBELL PREACHER CURL</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/bKUpQeek9q4qwCRefUHJA/69e4713bf5f245a8426d29fb9db29d6f/_uploads_1571835590-single-arm-bicep-preacher-curl.gif" />
          <b>Muscle Targeted:</b> Biceps Brachii & Brachialis
<br />
<br />
<b>Overview:</b>
<br />
<br />
The beloved preacher curl, the perfect exercise for isolating the biceps brachii. This exercise is well known as the ez bar preacher curl, however switching out the bar for dumbbells allows for unilateral conditioning, ensuring both arms are as strong as each other.
<br />
<br />
Utilising the preacher curl bench (or an incline bench) with dumbbells creates one of the best biceps exercises for targeting the muscle, reducing the ability to 'cheat' whilst placing more emphasis on the contraction of the muscle throughout the movement.
<br />
<br />
<b>TIP:</b> Rotate your grip for a preacher hammer curl, giving the same amount of isolation, with more focus on the forearm, Brachialis and Brachioradialis.
<br />
<br />
          <h2>CABLE BICEP CURL</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/5xLEgn9l4A9NbuRfcWH8M3/99ad761c57d49ff123a6da197e107e20/_uploads_1571837368-cable-bicep-curl.gif" />
          <b>Muscle Targeted:</b> Biceps Brachii
<br />
<br />
<b>Overview:</b>
<br />
<br />
Cable bicep exercises can often be overlooked for the more favourable barbell or dumbbell variations, but you don't need to fall into that same trap. The Cable Bicep Curl is essential for increasing training volume in your arm workouts, often used towards the end of sessions with a higher repetition focus.
<br />
<br />
Using the cables for bicep curls creates a 'constant tension' environment for the biceps, making them work uniquely compared to the traditional aforementioned methods.
<br />
<br />
<b>TIP:</b> The cable machine can be great for drop sets and working to failure, with the weight pin system making it quick and simple to alter resistance.
        <br />
          <h1>TRICEPS</h1>
It isn't an arm workout if you don't hit your biceps and triceps. Made up of three muscles located on the rear of your upper arm, the main function of the triceps is the extension of your elbow.
<br />
<br />
Larger push movements such as triceps dips and barbell bench press also recruit the muscle fibres of the triceps. But, we're here to give you the best triceps exercises to isolate the muscle.
<br />
<br />
          <h2>SKULL CRUSHER</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/6QcbxirtxgRQcSynKPmvbI/8a6816873b2677c809d814b1fbb9ac82/_uploads_1571839030-ez-bar-skull-crushers.gif" />
          <b>Muscle Targeted:</b> Triceps Brachii (Lateral Head, Medial Head & Long Head)
<br />
<br />
<b>Overview:</b>
<br />
<br />
Otherwise known as the Lying Triceps Extension; If you're chasing big triceps, the skull crusher exercise should be near the top of your list. This triceps exercise is usually performed with the barbell or ez bar, allowing both triceps to work together, targeting all three heads of the triceps brachii.
<br />
<br />
Focus on the slow eccentric movement, before powerfully extending your arms, engaging the triceps throughout the exercise.
<br />
<br />
<b>TIP:</b> Don't drop the weight; else you'll find out why this exercise is called the 'skull crusher'.
<br />
<br />
          <h2>CABLE TRICEPS PUSHDOWN</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/4rqOKAFfcPMe0MSunEhsXU/283942d48ac82e0c673d633ca0206ba5/_uploads_1571839061-cable-tricep-pushdown.gif" />
          <b>Muscle Targeted:</b> Triceps Brachii
<br />
<br />
<b>Overview:</b>
<br />
<br />
Utilising the cable machine isn't just for bicep exercises... mounting the attachment higher on the frame allows for an abundance of cable tricep extension exercises to be performed.
<br />
<br />
Helping isolate the triceps brachii, the Cable Tricep Pushdown using the straight bar attachment targets the three heads of the triceps.
<br />
<br />
The Cable Extension is a great tool for beginners before moving on to more demanding exercises, helping develop muscular conditioning and strength.
<br />
<br />
Experienced lifters can also take advantage of the cable system, isolating key areas of the triceps through different tricep extension attachments, including single arm triceps exercises.
<br />
<br />
<b>TIP:</b> A strict posture is key to isolating the triceps effectively. Position yourself with a balanced stance, soft knees and retracted shoulders; keeping your elbows pinned by your side throughout the movement.
<br />
<br />
          <h2>SINGLE-ARM DUMBBELL OVERHEAD TRICEPS EXTENSION</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/6K9ARf4YO7BR5HWLXvYTpb/3cb9f9e649df1e14327872dc9311250e/_uploads_1571839092-single-arm-overhead-tricep-extension.gif" />
          <b>Muscle Targeted:</b> Triceps Brachii
<br />
<br />
<b>Overview:</b>
<br />
<br />
This exercise provides a unique way to isolate the tricep, lifting the arm above the head to stretch the long head of the muscle placing more emphasis on the contraction.
<br />
<br />
You'll need to leave your ego at the door for this lift. The single-arm overhead extension the weight you can shift will be limited, but that doesn't reduce its effectiveness. Start with a light weight and build your way up as your stability, and strength improves.
<br />
<br />
Rest assured, this is one of the best dumbbell exercises for triceps to help isolate and target the three heads of the muscle.
<br />
<br />
<b>TIP:</b> When standing, ensure you are contracting your abs to hold your body still and prevent your lower back from arching.
        </div>
      ) : null }
      {exerciseType === 'leg' ? (
        <div className='container-sm'>
          <h1>HERE ARE 5 OF THE BEST EXERCISES FOR LEGS</h1>
          <h2>FRONT SQUATS</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/6tgKk5SjfppvOrv9EmgDav/b609ef6a7b0905828f2ee120fd5a2a4a/_uploads_1571143586-front-squat-demo.gif" />
<br />
<br />
<b>Primary Muscles Targeted:</b> Quadriceps and Gluteus Maximus
<br />
<br />
<b>Overview:</b>
<br />
<br />
You were probably expecting the back squat to sit in prime position, but the front squat is ideal for specifically targeting the quadriceps (thighs).
<br />
<br />
While still hitting the other muscle groups in your legs, the front squats anterior (front) bar position means the quads are recruited more to complete each rep. The front squat also replicates more advanced movements such as the snatch and clean & press, helping develop full-body strength Olympic lift progression.
<br />
<br />
Although loading the bar on the front can feel uncomfortable to begin with, it reduces pressure on the spine, engages the core well and can also help promote better squat form.
<br />
<br />
<b>TIP:</b> If you don't have the wrist flexibility for a traditional clean and press front squat grip, try the crossed arm approach; loading the bar from a rack with hands resting on the opposite shoulder.
<br />
<br />
          <h2>ROMANIAN DEADLIFT</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/4jbcYPpNcdrfwIbwcxK8QK/05c2ae0520647e3edab5660492465883/_uploads_1571142714-romanian-deadlift-demo.gif" />
<br />
<br />
<b>Primary Muscles Targeted:</b> Hamstrings and Gluteus Maximus
<br />
<br />
<b>Overview:</b>
<br />
<br />
Otherwise known as the Stiff-Legged Deadlift or RDL, this exercise is a fundamental exercise for both the hamstrings and posterior chain in general.
<br />
<br />
The Romanian Deadlift allows for a significant load to be placed upon the hamstrings, recruiting the glutes and erector spinae to assist in the movement. Utilising a bar or dumbbell will allow for plenty of volume to be put through these key muscle groups, essential for muscular development and conditioning.
<br />
<br />
<b>TIP:</b> Your knees should have a slight bend during this movement, keeping your shoulders (scapula) retracted and your chest proud. Keeping your upper torso in a strict position, with arms working like hooks, will allow you to focus on the contraction in the muscle groups you're targeting.
<br />
<br />
          <h2>SPLIT SQUATS</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/40NOdPRODkd1tt9Ff6uPKA/fce1b449dcbf4edc5797204facf81d85/_uploads_1571142852-split-squat-demo.gif" />
<br />
<br />
<b>Primary Muscles Targeted:</b> Quadriceps and Gluteus Maximus
<br />
<br />
<b>Overview:</b>
<br />
<br />
Single leg exercises are a fantastic way to develop muscle growth, balance and coordination, and the split squat is no different. Muscular imbalances are natural and can be more prominent in lifters who mainly stick to barbell-based lifts.
<br />
<br />
The split squat places a significant emphasis on the contraction of the quadriceps, whilst also engaging the glutes and calves (gastrocnemius) for stability. 
<br />
<br />
Weights can be added to increase difficulty; dumbbell split squats can be better for beginners to develop balance whilst barbell split squats can help increase weight and volume to the exercise.
<br />
<br />
<b>TIP:</b> When performing the exercises, keep an upright torso and lower the hips towards the ground on the eccentric motion of the split squat, rather than leaning forward. A rear foot elevated split squat can also be performed to increase difficulty.
<br />
<br />
          <h2>GLUTE BRIDGE</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/2mEQUDmeWF1kRjBber61Cn/96064b6a8e382863cd31cefe203ce029/_uploads_1571143586-glute-bridge-demo.gif" />
<br />
<br />
<b>Primary Muscles Targeted:</b> Gluteus Maximus and Hamstrings.
<br />
<br />
<b>Overview:</b>
<br />
<br />
If you're dreaming of heavy squats and powerful deadlifts, the Glute Bridge is a must for your training programme. Engaging and utilising this huge muscle group will pay dividends in your bigger lifts, and getting this one right from the get-go will help you quickly develop onto a Weighted Glute Bridge.
<br />
<br />
Contracting your glutes and hamstrings to lift your hips off the ground may sound easy, but once you start incorporating more time under tension and loading weight, this soon becomes an area of rapid development and power.
<br />
<br />
Find them easy? Progress the exercise with weight, the Barbell Glute Bridge can help increase volume.
<br />
<br />
<b>TIP:</b> To get the right angle, aim for your ankle to be directly below your knee. During the movement, push your heels into the ground and contract your hamstring and butt. Perform each rep in a controlled manner for maximum effect.
<br />
<br />
          <h2>SINGLE-LEG ROMANIAN DEADLIFT</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/4elyfuATqA8Q6MzQoCHmYp/a645c2253c52703868f8151e18d777e0/_uploads_1571151508-single-leg-rdl-demo.gif" />
<br />
<br />
<b>Primary Muscles Targeted:</b> Gluteus Maximus and Hamstrings.
<br />
<br />
<b>Overview:</b>
<br />
<br />
Ensuring your leg workout has unilateral exercises is crucial for not only a balanced physique, but also for peak performance.
<br />
<br />
We're all guilty of smashing heavy bilateral exercises such as squats, the leg press and hack squats. It's important to acknowledge the fact that although you're using both legs, you may be favouring one over the other, meaning your right leg may be taking more load than your right...
<br />
<br />
The Split Squats mentioned above are great unilateral exercises to help target the glutes and quads; these Single-Leg Romanian Deadlifts are no different.
<br />
<br />
Also known as Single-Leg RDL's, they put the key emphasis on your hamstrings and glutes, the Single-Leg Romanian Deadlift will soon have your muscles firing on all cylinders. Testing not only the muscular contraction and strength endurance, but also your balance and posture.
<br />
<br />
<b>TIP:</b> Start with a light weight and focus on keeping your shoulders retracted throughout the exercise, controlling the movement slowly on the way down. On the way back up, push your heel into the ground, contracting your hamstrings and glutes to bring your torso back up to a vertical position.
        </div>
      ) : null }
      {exerciseType === 'chest' ? (
        <div className='container-sm'>
          <h1>HERE ARE 5 OF THE BEST CHEST EXERCISES</h1>
          <h2>FLAT BARBELL BENCH PRESS</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/5ZR0yiFs7ltK3TCqyQtbCg/0c1b82808deef88a10192a199553f730/_uploads_1570098184-ezgifcom-video-to-gif-3.gif" alt="Flat Barbell Bench Press" />
<b>Main Muscles Targeted:</b> Pectoralis Major and Minor
<br />
<br />
<b>Overview:</b>
<br />
<br />
The most popular chest day exercise, rightly regarded as one of the best chest exercises for mass. The barbell bench press recruits muscles fibres from the entire chest, alongside assistance from the anterior deltoid (shoulder) and triceps.
<br />
<br />
Utilising the barbell for the bench press allows the muscle groups to work as one, moving the bar away from the torso before controlling the eccentric portion of the rep. The barbell also allows more weight to be added to the bar, compared to a flat dumbbell bench press, making it an excellent exercise for increasing overall strength and power.
<br />
<br />
<b>Tip:</b> Grasp the bar slightly wider than shoulder-width: your elbow, forearm and wrist should all be in-line at the bottom of the movement.
<br />
<br />
          <h2>INCLINE DUMBBELL BENCH PRESS</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/5uwkcgODlkP6YEzzpLiWUX/2b8e95c60226f7728acc80b4fbac3eb0/_uploads_1570110367-ezgifcom-video-to-gif-4.gif" alt="Incline Dumbbell Bench Press" />
<b>Primary Muscles Targeted:</b> Pectoralis Major and Clavicular Head
<br />
<br />
<b>Overview:</b>
<br />
<br />
A staple exercise when targeting the upper portions of the chest. Utilising the incline dumbbell press still targets the pectoralis major, but with an increased emphasis on the clavicular head (upper part of the chest).
<br />
<br />
The upper section of the chest can sometimes lack growth in comparison to the pectoralis major, especially amongst beginners in strength training. So, incorporating this exercise in your workouts will promote a well-developed chest.
<br />
<br />
<b>TIP:</b> Don't angle the bench any higher than 60 degrees - this will keep the focus on your chest, rather than your shoulders.
<br />
<br />
          <h2>BODYWEIGHT DIP</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/2JeDiwxAWirsfItM8FGetS/dc96e9ad631e7fdd99f91608d6b783b8/_uploads_1570112998-ezgifcom-video-to-gif-5.gif" alt="Bodyweight Dips" />
<b>Primary Muscles Targeted:</b> Pectoralis Major and Triceps Brachii
<br />
<br />
<b>Overview:</b>
<br />
<br />
Mainly contributing to development in the chest and triceps, the dip is one of the most popular bodyweight exercises.
<br />
<br />
Requiring a significant amount of strength, beginners can build strength and confidence from the use of assisted dip machines or resistance bands. Alternatively, to progress the movement and increase strength, weighted dips can be performed by adding a dumbbell between your legs or wearing a weight belt.
<br />
<br />
<b>TIP:</b> Leaning forward during the exercise will place more emphasis on the chest. Keeping the torso upright will result in more of the triceps being used.
<br />
<br />
          <h2>INCLINE BENCH CABLE CHEST FLY</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/6tCP9ugfRVOMrSXooXitRi/4c6c3a39dda370fdd25f0aeef0a5852f/_uploads_1570113966-ezgifcom-video-to-gif-6.gif" alt="Incline Bench Cable Chest Fly" />
<b>Primary Muscles Targeted:</b> Pectoralis Major and Clavicular Head
<br />
<br />
<b>Overview:</b>
<br />
<br />
The incline cable fly recruits muscle fibres from the pectoralis major, focusing especially on the upper chest (clavicular head) and inner chest (sternal head).
<br />
<br />
This is a great exercise to help develop the chest, often used in hypertrophy training, where muscle growth is the main goal.
<br />
<br />
Using a bench, rather than performing a standing cable fly, helps to isolate the chest, keeping constant tension on the muscle.
<br />
<br />
<b>TIP:</b> Crossing the arms during each rep helps place more focus on the sternal head.
<br />
<br />
          <h2>BODYWEIGHT PUSH-UP</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/7jO0rBrKsCi1f1XGxjAM5Y/6583b5586290d3560f94c83b44559988/_uploads_1570115299-gymshark-push-up.gif" alt="Bodyweight Push-Up" />
<b>Primary Muscles Targeted:</b> Pectoralis Major and Triceps Brachii
<br />
<br />
<b>Overview:</b>
<br />
<br />
Arguably the first ever chest exercise invented... The push-up has been around for quite some time, and for good reason.
<br />
<br />
Utilising a variety of muscle groups, the push-up focuses mainly on the pectoralis major and triceps brachii.
<br />
<br />
The anterior deltoid (shoulder) and forearms also play a key role, helping stabilise the body during the exercise; while a certain level of core strength is required to keep good form.
<br />
<br />
<b>TIP:</b> By raising the feet on a bench, the upper part (clavicle head) of the chest can be isolated.
        </div>
      ) : null }
      {exerciseType === 'back' ? (
        <div className='container-sm'>
          <h1>HERE ARE 5 OF THE BEST EXERCISES FOR TRAPS</h1>
          <h2>SHRUGS</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/RgGmaCQB2ACEwwj6ceydo/896f0ea2a4b702c1db9486c188f57541/_uploads_1574946197-how-to-barbell-shrug.gif" />

It wouldn’t be a list of the best exercises for traps if we didn’t mention shrugs.  When you think of training your traps, shrugs are probably one of the first exercises that come to mind, and for good reason. These bad boys are great for activating your upper and middle traps and help to build mass, strength and muscular endurance. 
<br />
<br />
Shrugs are a great exercise whatever your ability, as they can be done with anything from dumbbells and barbells to cables or a trap bar. This also makes them the perfect traps exercise if you’re short on equipment or don’t fancy waiting around for the barbell.
<br />
<br />
The shrug exercise can make for a great upper body finisher, isolating the traps muscles. Pick an appropriate weight and aim for 3 sets of 15-20 repetitions to really feel the burn.
<br />
<br />
          <h2>BARBELL DEADLIFT</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/1yccUEv2KXzNefFNPApwvv/3d4e723e644657740f3957471f9afb0d/_uploads_1574946537-how-to-deadlift.gif" />

If we’re talking about the best ways to build a specific muscle group, deadlifts pretty much always feature, and we’re not even sorry about it.
<br />
<br />
When performed correctly, deadlifting is one of the best compound exercises out there, demanding so much, from so many muscle groups in the body. This lift requires your entire back to be engaged, including your traps muscles.
<br />
<br />
Yes, the traps aren't the main focus with this lift, but the beauty of the deadlift is that all three parts of the trapezius muscle are challenged.
<br />
<br />
Start your workout with deadlifts, end it with shrugs and trust us, your traps will have got a serious pump from two of the best traps exercises.
<br />
<br />
          <h2>RACK PULLS</h2>
          
If you don’t know what rack pulls are, it's pretty much the top half of a deadlift; rather than lifting the bar from the floor, you pull from the rack at roughly knee height.
<br />
<br />
So why are they featuring as well as a deadlift? Well, as you are pulling from a higher point when compared to a conventional deadlift, rack pulls concentrate on the upper portion fo the deadlift movement, which demands more from the upper body, back and traps muscles.
<br />
<br />
Therefore, if today isn't leg day, you can target your traps with rack pulls rather than a full, conventional deadlift. They’re not going to give you the same full-body strength development, but rack pulls are definitely up there with the best exercises for traps.
<br />
<br />
          <h2>UPRIGHT ROWS</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/01MPtl54LCNvns8ZwVXBiq/52f5dfe21014e47b47d5c047860d04a0/_uploads_1574946668-how-to-upright-row.gif" />

Upright rows are a great exercise to add to your traps muscle workout routine, and if you're currently skipping them, it's definitely time to give this exercise a little love. Not only are they going to help you build strength and mass in your traps, but they also challenge your anterior and rear deltoids.
<br />
<br />
Linked to shoulder pain and causing shoulder impingement, the upright row is an exercise that needs to be performed correctly to avoid issues.
<br />
<br />
Start light and master the the movement, focusing on the muscular contraction in a higher rep range. The upright row is also an essential part of the clean and press; so if if you're an olympic lifter, isolating this movement may help you throw more weight above your head!
<br />
<br />
If you do struggle with shoulder pain, this may be one to avoid.
<br />
<br />
          <h2>FACE PULLS</h2>
          <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/2j8xuEYMJMkKBaTPoyp9Ov/f503e595914b3433ebab71fd5796c14c/_uploads_1574947315-how-to-face-pull.gif" />

Face pulls are often overlooked when it comes to upper body exercises. However, they are an excellent exercise when it comes to building muscle, correcting posture and promoting good overall shoulder health.
<br />
<br />
Similar to upright rows, face pulls are a shoulder exercise that also engage the traps muscles.
<br />
<br />
They need to be performed in a controlled motion, ensuring the muscles are loaded correctly is key to avoiding shoulder joint issues.
<br />
<br />
Add them in at the end of your workout for a finisher that is guaranteed to leave your traps muscles ruined… in a good way.
        </div>
      ) : null }
    </div>
  )
}

export default ExerciseHelper

