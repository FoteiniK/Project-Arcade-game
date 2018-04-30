# project-arcade-game
Fourth project for Udacity's FEND nanodegree program.


## Instructions

 Use the arrow keys to move the player.Player should avoid bugs(enemies),and reach the water.Every time the player is hit by a bug,
it loses a life(heart). When all the hearts are lost,the game ends.

## How to run the arcade game
  After cloning or downloading the file,use the index.html file to run the game.

## General info about my approach in this project's code.
  I used a Game class,from which both Player and Enemy classes inherit their displaying properties(image and location).Then I created some Enemy objects and placed them all in the allEnemies array,in order to display the canvas properly.(canvas was not displayed with the starting given code).
  After succesfully displaying the canvas, I used the Enemy's update(dt) method to make the enemies move constantly,having a diferrent speed and different starting point each time they started over.In this method,we also check constantly for collisions.
   If there is a a collision, our player loses a heart. There is a variable called lives,which decrements each time a collision happens. After three collisions, the game stops(enemies stop moving),and a modal appears
to inform that the game is over.
  The variable lives is a Player's reference variable. In Player class,we also increment the score by 100 each time the player reaches the water. If the score reaches 1000 , a modal appears to congratulate the player.


  
---
   ###### GitHub page:  https://foteinik.github.io/Project-Arcade-game/
