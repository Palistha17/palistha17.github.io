var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var btn = document.querySelector('#btn'); 

var bird = new Image();
var background = new Image();
var lane = new Image();
var pipeUp = new Image();
var pipeDown = new Image();

bird.src = "images/bird.png";
background.src = "images/background.png";
lane.src = "images/lane.png";
pipeUp.src = "images/pipe-up.png";
pipeDown.src = "images/pipe-down.png";

var birdX = 0;
var birdY = 0;
var distance = 100;
var pipeX = canvas.width;

var score = 0;
var highscore = 0;

var laneX = 0;
var gravity = 0;

var isRunning = false;

var pipes = [];

background.onload = function() {
    context.drawImage(background,0,0); 
    context.drawImage(lane, laneX, background.height - lane.height);  
}

function reset() {
	birdX = 0;
	birdY = 0;
	distance = 100;
	pipeX = canvas.width;
	score = 0;
	laneX = 0;
	gravity = 0;
	pipes = [];
	pipes[0] = {
		x: pipeX,
		y: 0
	};

}

reset();



function updateScore() {
	context.fillStyle = "#000";
	context.font = "20px Verdana";
	context.fillText("Score : " + score, 10, canvas.height - 20);
	context.fillText("Highscore : " + highscore, 10, canvas.height - 40);
	if (score > highscore) highscore = score;
}


canvas.addEventListener('click', function () {
	if (!isRunning) {
		isRunning = true;
		reset();	
		return;
	}

	gravity = 3;
}, false);




btn.addEventListener('click', function () {
	if (!isRunning) {
		isRunning = true;
		reset();
		draw();
		return;
	}

	gravity = 3;
}, false);


function draw() {
	if (isRunning) {
		requestAnimationFrame(draw);
	}
	
	context.drawImage(background, 0, 0);

	for (var i = 0; i < pipes.length; i++) {
		context.drawImage(pipeUp, pipes[i].x, pipes[i].y);
		context.drawImage(pipeDown, pipes[i].x, pipeUp.height + distance + pipes[i].y);
		pipes[i].x--;

		var laneCrash = birdY + bird.height >= background.height - lane.height;
		var inPipeInterval = birdX + bird.width >= pipes[i].x && birdX <= pipes[i].x + pipeUp.width;
		var upCrash = inPipeInterval && birdY <= pipes[i].y + pipeUp.height;
		var downCrash = inPipeInterval && birdY + bird.height >= pipes[i].y + pipeUp.height + distance;

		if (laneCrash || upCrash || downCrash) {
			isRunning = false;
			reset();
			draw();
			alert('Game Over');
			return;

		}

		if (pipes[i].x + pipeUp.width == birdX) {
			score++;
		}
	}

	if (pipes[pipes.length - 1].x == 100) {
		pipes.push({
			x: pipeX,
			y: Math.floor(pipeUp.height * Math.random()) - pipeDown.height + lane.height
		});
	}

	laneX--;
	if (laneX < - lane.width) {
		laneX = 0;
	}


	birdY -= gravity -= 0.1;
	context.drawImage(bird, birdX, birdY);

	context.drawImage(lane, laneX, background.height - lane.height);
	context.drawImage(lane, laneX + lane.width, background.height - lane.height);

	updateScore();
}



















