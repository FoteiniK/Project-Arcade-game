# project-arcade-game
Fourth project for Udacity's FEND nanodegree program.


## Instructions

 Use the arrow keys to move the player.Player should avoid bugs(enemies),and reach the water.Every time the player is hit by a bug,
it loses a life(heart). When all the hearts are lost,the game ends.


## How to run the arcade game
  I used Player and Enemy constructor functions,and inserted data regarding their images and location.Then I created some Enemy objects and placed them all in the allEnemies array,in order to display the canvas properly.(canvas was not displayed with the starting given code).
  After succesfully displaying the canvas, I used the Enemy's update(dt) method to make the enemies move constantly,having a diferrent speed and different starting point each time they started over.
  I made a global check collision function,which I call from inside the Enemy.update method with this as a parameter.
 During the game,we constantly check for collisions. If there is a a collision, our player loses a heart. There is a variable called lives,which decrements each time a collision happens. After three collisions, the game stops(enemies stop moving),and a modal appears
to inform that the game is over.


  
---
   ###### GitHub page:  https://foteinik.github.io/Project-Arcade-game/
