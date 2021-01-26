
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

let player = new Player();
let floor = new Floor();
let spikes = new Spikes();
let level = new Level("images/level3.jpg");

let balls = [];
balls.push(new Ball(200, 200, 25, 3, 3, '#944633'));
balls.push(new Ball(400, 200, 30, 3, 2, '#022717'));

setInterval(function () {
    context.clearRect(0, 0, 800, 500);

    // Collision Detection
    for (let ball of balls) {
        if (player.arrow.hasCollided(ball)) splitBall(ball);
    }

    // Update
    player.update();
    for (let ball of balls) ball.update();

    // Draw
    level.draw(context);
    spikes.draw(context);
    player.draw(context);
    for (let ball of balls) ball.draw(context);
    floor.draw(context);

}, 16);

function splitBall(ball) {
    if (ball.splitCount == 0) {
        removeBall(ball);
        return;
    }

    var b1 = new Ball(ball.posX, ball.posY, ball.radius / 1.7, ball.speedX, ball.splitCount - 1, ball.color);
    var b2 = new Ball(ball.posX, ball.posY, ball.radius / 1.7, -ball.speedX, ball.splitCount - 1, ball.color);
    balls.push(b1);
    balls.push(b2);
    removeBall(ball);
}

function removeBall(ball) {
    let ballIndex = balls.indexOf(ball);
    balls.splice(ballIndex, 1);
}
