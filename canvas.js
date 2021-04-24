// Document.getElementById();
// HTMLCanvasElement.getContext();
// CanvasRenderingContext2D;

// function draw() {
//   const canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     let ctx = canvas.getContext('2d');

//     ctx.fillStyle = 'green';
//     ctx.fillRect(10,10,250,150);

//     ctx.beginPath();
//     ctx.moveTo(100,100);
//     ctx.lineTo(50,75);
//     ctx.lineTo(50,25);
//     ctx.fillStyle = 'black';
//     ctx.fill();

//     ctx.beginPath();
//     ctx.moveTo(25, 25);
//     ctx.lineTo(75, 25);
//     ctx.lineTo(25, 50);
//     ctx.closePath();
//     ctx.stroke();
    
//     ctx.font = ' 10px';
//     ctx.strokeText("Приветики, это текст на canvas", 80, 30);
//     ctx.strokeText("Я тоже текст отрисованный на canvas!!!!",65, 50 );
//     ctx.stroke();
  

//  }
// } 





circle.onclick = function(){
let start = Date.now(); 

let timer = setInterval(function() {
  let timePassed = Date.now() - start;

  if (timePassed >= 2000) {
    clearInterval(timer); 
    return;
  }

  draw(timePassed);

}, 20);

function draw(timePassed) {
  circle.style.left = timePassed / 5 + 'px';
}
}


circle2.onmouseover = function(){
  let start = Date.now(); 
  
  let timer = setInterval(function() {
    let timePassed = Date.now() - start;
  
    if (timePassed >= 2000) {
      clearInterval(timer); 
      return;
    }
  
    draw(timePassed);
  
  }, 20);
  
  function draw(timePassed) {
    circle2.style.top = timePassed / 5 + 'px';
  }

}





// circle.onclick = function(){
// function animate({timing, draw, duration}) {

//   let start = perfomance.now();

//   requestAnimationFrame(function animate(time) {
//     let timeFraction = ( time - start) / duration;
//     if (timeFraction > 1) timeFraction = 1;

//     let progress = timing(timeFraction);

//     draw(progress);

//     if (timeFraction < 1 ) {
//       requestAnimationFrame(animation);
//     }
//   });

// function makeEaseOut(timing) {
//   return function(timeFraction) {
//     return 1 - timing(1 - timeFraction);
//   }
// }

// function bounce(timeFraction) {
//   for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
//     if (timeFraction >= (7 - 4 * a) / 11) {
//       return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
//     }
//   }
// }

// let bounceEaseOut = makeEaseOut(bounce);

// circle.onclick = function() {
//   animate({
//     duration: 3000,
//     timing: bounceEaseOut,
//     draw: function(progress) {
//       circle.style.left = progress * 500 + 'px';
//     }
//   });
// };
