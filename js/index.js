console.log("wow this doesnt work");

var qMark = document.getElementById("q-mark");
var aboutMe = document.getElementById("about-me-container");
var email = document.getElementById("email");

qMark.addEventListener("click",function(){
  aboutMe.scrollIntoView({behavior:"smooth"});
});

email.addEventListener("click",function(event){
  event.preventDefault();
  window.open("mailto:jacobmalachowski@gmail.com");
});