lane = document.querySelector('#lane');
car1 = document.querySelector('#car1');
car2 = document.querySelector('#car2');
scoreDiv = document.querySelector('#score');
btn = document.querySelector('#btn'); 
var increment = true;


function moveLeft() {
    car1LeftPos = parseInt(window.getComputedStyle(car1).getPropertyValue('left'));
    car1LeftPos -= 100;
    if (car1LeftPos >= 0) {
        car1.style.left = car1LeftPos + 'px';
    }

}

    function moveRight() {
    car1RightPos = parseInt(window.getComputedStyle(car1).getPropertyValue('left'));
    car1RightPos += 100;
    if (car1RightPos < 300) {
        car1.style.left = car1RightPos + 'px';
    }
    
}


document.addEventListener('keydown', function(e) {
    if(e.key == 'ArrowLeft') {
        moveLeft();
    }

    if(e.key == 'ArrowRight') {
        moveRight();
    }
})

btn.addEventListener('click', function(e) {
        e.preventDefault();
        lane.style.animation='';
        car2.style.animation='';
        car2.style.top= 0 + 'px';
        lane.classList.add('start');
        start();
});




function start() {

    document.addEventListener('animationiteration', function() {
    randomNum = Math.floor(Math.random() * 3) * 100;
    car2.style.left = randomNum + 'px';
});

var score = 0;
gameCrashed = setInterval(function() {
    
     scoreDiv.innerHTML = 'Score: ' + score;
    car1Pos = parseInt(window.getComputedStyle(car1).getPropertyValue('left'));
    car2Pos = parseInt(window.getComputedStyle(car2).getPropertyValue('left'));
    car1Posheight = parseInt(window.getComputedStyle(car1).getPropertyValue('height'));	
    
    
    car2Postop = parseInt(window.getComputedStyle(car2).getPropertyValue('top'));

    if (car2Postop > 0 && car2Postop < 300 ) {
        increment = true;
    }

    car2Posheight = parseInt(window.getComputedStyle(car2).getPropertyValue('height'));	
    car1Postop = parseInt(window.getComputedStyle(car1).getPropertyValue('top'));	

    car2.style.animationDuration = Math.max(0.5, 2 - (score/20)) + 's';
        
    if (car1Pos == car2Pos && ((car2Postop + car2Posheight)  > 300) && ((car2Postop + car2Posheight)  < 500)) {
        lane.style.animation='none';
        car2.style.animation='none';
        car2.style.top= car2Postop + 'px';
        clearInterval(gameCrashed);
        alert('Game Over');
    }
    if ((car2Postop  > 400) && increment == true) {
        score +=1;
        increment = false;
    }
}, 100)
}