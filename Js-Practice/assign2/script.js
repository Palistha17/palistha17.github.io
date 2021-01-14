

var ball = document.getElementById("ball");

var y=0;
var speed=10;

function move() {
	var maxPosition = 450;
	y = y + speed;
	if (y > maxPosition || y < 0) {
		speed =  speed * (-1);
	}
	console.log(y, speed );

	ball.style.top= y + 'px';


}



setInterval(move, 1000/30);



