//variable declaration
let yEnemies = [60, 140, 220, 140, 60, 210];
let hearts = document.getElementsByTagName('ul')[0];
let lives = 3;


// Enemies our player must avoid
const Enemy = function(place, speed) {
    this.y = place;
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
/*Every time a bug reaches the end of canvas,
it starts over from a new random y from
yEnemies array with different speed. */
Enemy.prototype.update = function(dt) {
    let i;
    if (this.x < 505) {
        this.x += dt * 15 * this.speed * Math.random();
    } else {
        i = Math.random() * yEnemies.length | 0 + 0;
        this.y = yEnemies[i];
        this.x = -100;
    }
    //checks for collisions
    collisionDet.call(this)
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let enemy1 = new Enemy(60, 40);
let enemy2 = new Enemy(140, 20);
let enemy3 = new Enemy(220, 15);
let allEnemies = [enemy1, enemy2, enemy3];
/*function for collision detection from
https://stackoverflow.com/questions/2440377/javascript-collision-detection
based on pythagorean theorem*/
function collisionDet() {
    let a, b, c;
    a = this.x - player.x;
    b = this.y - player.y;
    c = 70;
    if (a * a + b * b <= c * c) {
        player.x = 200;
        player.y = 380;
        checkLives();
    }
}
/*function for checking collisions' number in order to remove hearts
,freezes the enemies and opens modal if game is over*/
function checkLives() {
    lives -= 1;
    hearts.removeChild(hearts.children[0]);
    if (lives === 0) {
        player.sprite = 'images/ghost.png';
        allEnemies.forEach(function(enemy) {
            enemy.speed = 0;
        });
        openModal();
    }
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function() {
    this.x = 200;
    this.y = 380;
    this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function(dt) {
    //checks if player reaches water
    if (this.y < 40) {
        this.x = 200;
        this.y = 380;
    }
    Player.prototype.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};
//function for player movement
Player.prototype.handleInput = function(key) {
    if (key === 'left' && this.x > 0) {
        this.x -= 100;
    } else if (key === 'right' && this.x < 400) {
        this.x += 100;
    } else if (key === 'up') {
        this.y -= 80;
    } else if (key === 'down' && this.y < 380) {
        this.y += 80;
    }
}
// Place the player object in a letiable called player
let player = new Player;
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
/***********modal code*********************************/
// Get modal element
let modal = document.getElementById('gameOverModal');
// Listen for outside or inside click
modal.addEventListener('click', modalClick);
// Function to open modal
function openModal() {
    modal.style.display = 'block';
}
// Function to close modal and start new game if outside click
function modalClick(e) {
    modal.style.display = 'none';
    location.reload()
}
