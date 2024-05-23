console.log("wow this doesnt work");

var qMark = document.getElementById("q-mark");
var aboutMe = document.getElementById("about-me-container");

qMark.addEventListener("click",function(){
  aboutMe.scrollIntoView({behavior:"smooth"});
});