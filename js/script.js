$( document ).ready(function() {
    $(".page-content-big-text").hide()
    $("small-text").hide()

    $(".page-content-bg").ready(function() {
      $(".page-content-big-text").delay(500).fadeIn(2000)
      $(".small-text").delay(1200).fadeIn(2000)
    });
});

function menuButtonClicked() {
    var header = document.getElementById("header");
    var cornerIcon = document.getElementById("corner-icon");
    header.classList.toggle("fullscreen");
 
    if (cornerIcon.classList.contains("fa-bars")) {
         cornerIcon.classList.replace("fa-bars", "fa-times");
       }
       else{
         cornerIcon.classList.replace("fa-times", "fa-bars");
       }
 }

 
 function testScroll(){
    if(window.pageYOffset>150){
    document.getElementById("scroll").style.opacity = "0"
    }
    else {
      document.getElementById("scroll").style.opacity = "1"
    }
}
window.onscroll=testScroll



