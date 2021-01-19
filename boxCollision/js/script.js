const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const WIDTH =canvas.width;
const HEIGHT = canvas.height;
const numBalls =10;
const colors = ["#fff",
    "#ff596e",
    "#4d375d",
    "#81c8d5",
    "#141013",
    "#dc4646",
    "#663f3f",
    "#51c2d5",
    "#fff7e1",
    "#a2d0c1",
    ];


circles = [];

let cir ={
	x: 50,
	y: 50,
	r: 20
}
function draw() {

	ctx.fillStyle = "#000";	
	ctx.fillRect(0, 0, WIDTH, HEIGHT);

	for(let i= 0; i<numBalls; i++){
		cir.x= Math.round(Math.random()*WIDTH); 
		cir.y= Math.round(Math.random()*HEIGHT);
		var circle = {x: cir.x, y: cir.y, r: 20, speedX: 3, speedY: 3};
		circles.push(circle);		
		drawCircle(cir.x, cir.y, cir.r, colors[i]);
	}

setInterval(changePosition, 1000/30);

}

function changePosition() {
	ctx.fillStyle = "#000";	
		ctx.fillRect(0, 0, WIDTH, HEIGHT);
	for(let i= 0; i<numBalls; i++) {
		var currentSpeedX =  circles[i].speedX;
		var currentSpeedY =  circles[i].speedY;	
		var xaxis = circles[i].x + currentSpeedX;
		var yaxis = circles[i].y + currentSpeedY;
// right
		if (xaxis + 20 > WIDTH   ) {
			xaxis = WIDTH - 20;
			currentSpeedX  = -1 * currentSpeedX;
		}
		// left
		if (xaxis - 20 < 0) {
			xaxis =20;
			currentSpeedX  = -1 * currentSpeedX;
		}
		// bottom

		if (yaxis + 20 > HEIGHT  ) {
			yaxis = HEIGHT - 20;
			currentSpeedY  = -1 * currentSpeedY;
		}

		//top

		if (yaxis - 20 < 0 ) {
			yaxis = 20;
			currentSpeedY  = -1 * currentSpeedY;
		}

		// checkCollid(circle[j]);

		// function checkCollid(circle) {
		// 	var currentSpeedX =  circle.speedX;
		// 	var currentSpeedY =  circle.speedY;	
		// 	var xaxis = circles[i].x;
		// 	var yaxis = circles[i].y;

		// 	for (var j=0; j<numBalls; j++) {
		// 		if (circle[i] != circle[j] &&
		// 		(Math.abs(xaxis - circle[j].xaxis) < (circle[i].r + circle[j].r)) &&
		//  		(Math.abs(yaxis - circle[j].yaxis) < (circle[i].r + circle[j].r))) {
		// 			currentSpeedX = -currentSpeedX;
  //   				currentSpeedY = -currentSpeedY;

		// 		}
		// 	}
		// }



		
		drawCircle(xaxis, yaxis, 20, colors[i]);
		var newCircle = {
			x: xaxis,
			y: yaxis,
			speedX: currentSpeedX,
			speedY: currentSpeedY
		}
		circles.splice(i, 1 , newCircle);

	}
}



function drawCircle(x, y, r, color) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2);
	ctx.fillStyle=color;
	ctx.fill();
}
draw();






