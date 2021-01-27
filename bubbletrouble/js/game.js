class Game {
    constructor() {
        this.context = document.getElementById("canvas").getContext("2d");

        this.floor = new Floor();
        this.player = new Player(); 
        this.level = new Level();
        this.spikes = new Spikes();
        this.arrow = new Arrow();
        
       
        this.balls = [];
        this.balls.push(new Ball(200, 200, 25, 3, 3, '#944633'));
        this.balls.push(new Ball(400, 200, 30, 3, 2, '#022717'));
    }


    run() {
        setInterval(() => {
            this.context.clearRect(0, 0, 800, 500);
            this.detectCollisions();
            this.update();
            this.draw();
            

        }, 16);
    }


    detectCollisions() {
         for (let ball of this.balls) {
            if (this.player.arrow.hasCollided(ball)){
              this.splitBall(ball);  
            } 

            if (this.player.hasCollided(ball)) {
                // alert('Game over');
            };
        }
    }


    update() {
        this.player.update();
        for (let ball of this.balls) {
          ball.update();  
        }
        updateScore(); 
    }

    draw() {
        this.level.draw(this.context);
        this.player.draw(this.context);
        this.floor.draw(this.context);
        this.spikes.draw(this.context);
        for (let ball of this.balls) {
          ball.draw(this.context); 
        } 
        updateScore();
    }


    splitBall(ball) {
        if (ball.splitCount > 0) {
            var b1 = new Ball(ball.posX, ball.posY, ball.radius / 1.7, ball.speedX, ball.splitCount - 1, ball.color);
            var b2 = new Ball(ball.posX, ball.posY, ball.radius / 1.7, -ball.speedX, ball.splitCount - 1, ball.color);
            this.balls.push(b1);
            this.balls.push(b2);
            score += 5;
        }

        let ballIndex = this.balls.indexOf(ball);
        this.balls.splice(ballIndex, 1);
    }
}


var score = 0;
var highscore = 0;


function updateScore() {
    context = document.getElementById("canvas").getContext("2d");
    context.fillStyle = "#000";
    context.font = "20px Verdana";
    context.fillText("Score : " + score, 10, 60);
  
    context.fillText("Highscore : " + highscore, 10, 80);
    if (score > highscore) {
      highscore = score;  
    } 
}
