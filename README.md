# An Introduction to Disney Trivia!
This week’s project involved timers and limits. I built a trivia app where each question only gives you 30 seconds to answer; in addition, the remaining time results in your score if the answer is correct. The timer actually “transfers” to your score, as one decreases while the other increases.

There are actually 3 categories; Disney History, Disneyland Facts, and Disney’s Animated TV Shows. Complete one, and the app will cycle to the next. The app is fully responsive, and the castle appears different depending on the device you use.

### How does it work?
A series of setTimeout commands help count down the timer every 1000 ms and display the new number. As a help to unsure users, a little additional time is provided at the end before the timer expires. If the user provides a correct answer, the setTimeout is cancelled, and the timer is reduced to 0 while the score is increased by the same number. No points are awarded for an incorrect answer.

The background is actually a solid blue color, and the castle is a transparent PNG image that will always rest at the bottom of the screen and use either the full height or width, depending on which is reached first. It's a different experience on mobile, tablets, and PCs. Images and borders are revealed via CSS when the user hovers over an answer; the cursor also changes to the pointing finger. Small touches like these show a level of consideration that most other projects lack.

### Who will use this?
Disney fans who want to prove their quick knowledge of largely unknown trivia will fight to compare high scores with each other.

### What is the goal?
The main goal was to become familiar with the setTimeout and setInterval commands to create and manipulate timers. Each question has its own time limit of 30 seconds, which counts down. If the time limit is reached, the answer is revealed so the game can move on; if the user answers in time, the setTimeout is cancelled, and points are awarded for correct answers.

After answering the question, the next one will automatically appear after a 3 second delay.

# Deployment
The code can be used in most web servers; there is no required node or database requirement.

# Screenshot
![Screenshot](http://www.fullstacksteve.com/wp-content/uploads/2017/12/hero-disneytrivia.png)

# Credits
Steve Marshall, Sole Developer
* [Steve's Online Portfolio](http://fullstacksteve.com/)
* [Steve's LinkedIn Profile](https://www.linkedin.com/in/sonoa/)