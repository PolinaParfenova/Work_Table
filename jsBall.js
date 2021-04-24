var circle1 = document.querySelector(".circle1");
var container = document.querySelector(".bigContainer");

var clicked = false;  //flag used to determine whether div is clicked or not


//mouse events
circle1.addEventListener("mousedown",function(e){
    clicked = true ;
});

circle1.addEventListener("mouseup",function(e){
    clicked = false;
});

container.addEventListener("mouseleave",function(e){
    clicked = false;
});

container.addEventListener("mousemove",function(e){
  e.preventDefault();
  if(e.target == container ){ //prevent mousemove event from triggering on box 
      if(clicked){
        circle1.style.transform = "translate(" + (e.offsetX - 150 ) + "px" + "," + (e.offsetY - 130 ) + "px" + ")"; 
      }
  }
});

// document.querySelectorAll('circle').forEach(item => {
//   item.addEventListener('dragstart', event => {
//     event.dataTransfer.setData('text/html',
//     getComputedStyle(item).backgroundColor)
//   })
// });

// document.querySelectorAll('.secondBasket').forEach(item => {
//   item.addEventListener('dragover', event => {
//     event.preventDefault()
//   })
//   item.addEventListener('dragleave', event => {
//     item.classList.remove('hover')
//   })
//   item.addEventListener('dragenter', event => {
//     item.classList.add('hover')
//   })
  
//   item.addEventListener('drop', event => {
//     item.style.backgroundColor = 
//     event.dataTransfer.getData('text/html')
//   })
// });
