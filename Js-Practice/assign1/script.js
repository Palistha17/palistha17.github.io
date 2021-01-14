var points = [
	{x: 10, y:20},
	{x: 40, y:40},
	{x: 60, y:20},
	{x:80, y: 50},
	{x:100, y: 60},
	{x:100, y: 30},
	{x:140, y: 90}
];

for (var i=0; i<points.length; i++)
{

	var ball= document.createElement('div');
	ball.className= 'ball';
	document.body.appendChild(ball);
	ball.style.top = points[i].y + "px";
	ball.style.left = points[i].x + "px";
}

