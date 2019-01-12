$(document).ready(function() {
    // Fade in text on page load
    $(".page-content-big-text").hide()
    $(".small-text").hide()

    $(".page-content-bg").ready(function() {
      $(".page-content-big-text").delay(500).fadeIn(2000)
      $(".small-text").delay(1200).fadeIn(2000)
    });

    // Book table, date picker

    $('#picker').dateTimePicker({
        dateFormat: "YYYY-MM-DD HH:mm",
        locale: 'sv',
        showTime: true,
        selectData: "now",
        positionShift: { top: 20, left: 0},
        title: "Välj datum och tid",
        buttonTitle: "Klar"
    });
        


});

window.addEventListener('load', function () {
    2
      vanillacalendar.init();
    3
    })
    
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

/* // When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 190 || document.documentElement.scrollTop > 190) {
      document.getElementById("smaller").style.fontSize = "2em";
    } else {
        document.getElementById("smaller").style.fontSize = "4em";
    }
}
 */

$(function(){
  $(window).scroll(function() {
      var scroll = $(window).scrollTop(); // how many pixels you've scrolled
      var os = $('#page-content-text').offset().top; // pixels to the top of div1
      var ht = $('#smaller').height(); // height of div1 in pixels
      // if you've scrolled further than the top of div1 plus it's height
      // change the color. either by adding a class or setting a css property
      if(scroll > os + ht){
          $('#smaller').css("font-size", "2em");
          $('#smaller-text').css("font-size", "1em");
      } else {
        $('#smaller').css("font-size", "3em");
        $('#smaller-text').css("font-size", "1.5em");
      }
  });

  $("#scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#main").offset().top
    }, 1000);
});
});


