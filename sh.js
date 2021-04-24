
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
    
    // анимация двух шариков
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

// Захват голубого шарика

var circle5 = document.querySelector(".circle5");
var container = document.querySelector(".container");

var clicked = false;  //flag used to determine whether div is clicked or not


//mouse events
circle5.addEventListener("mousedown",function(e){
    clicked = true ;
});

circle5.addEventListener("mouseup",function(e){
    clicked = false;
});

container.addEventListener("mouseleave",function(e){
    clicked = false;
});

container.addEventListener("mousemove",function(e){
  e.preventDefault();
  if(e.target == container ){ //prevent mousemove event from triggering on box 
      if(clicked){
        circle5.style.transform = "translate(" + (e.offsetX - 75 ) + "px" + "," + (e.offsetY - 550 ) + "px" + ")"; 
      }
  }
});





