var date = new Date();
console.log(date);
var months = [
  "يناير",
  "فبراير",
  "مارس",
  "إبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر"
];
var days = [
  "اﻷحد",
  "اﻷثنين",
  "الثلاثاء",
  "اﻷربعاء",
  "الخميس",
  "الجمعة",
  "السبت"
];
var delDateString =
  days[date.getDay()] +
  ", " +
  date.getDate() +
  " " +
  months[date.getMonth()] +
  ", " +
  date.getFullYear();

console.log(delDateString); // Outputs اﻷحد, 4 ديسمبر, 2016
$(document).ready(function() {
  $("#date").text(delDateString);
  $(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    // Do something
    // console.log(scroll);
    if (scroll > 20) {
      $("#myBtn").css("display", "block");
    } else {
      $("#myBtn").css("display", "none");
    }
    if (scroll > 140) {
      $("#main-nav").addClass("fixed-nav");
    } else {
      $("#main-nav").removeClass("fixed-nav");
    }
  });
});
$(function() {
  $("#js-news").ticker({
    speed: 0.1, // The speed of the reveal
    ajaxFeed: false, // Populate jQuery News Ticker via a feed
    feedUrl: false, // The URL of the feed
    // MUST BE ON THE SAME DOMAIN AS THE TICKER
    feedType: "xml", // Currently only XML
    htmlFeed: true, // Populate jQuery News Ticker via HTML
    debugMode: true, // Show some helpful errors in the console or as alerts
    // SHOULD BE SET TO FALSE FOR PRODUCTION SITES!
    controls: true, // Whether or not to show the jQuery News Ticker controls
    titleText: "Latest", // To remove the title set this to an empty String
    displayType: "reveal", // Animation type - current options are 'reveal' or 'fade'
    direction: "rtl", // Ticker direction - current options are 'ltr' or 'rtl'
    pauseOnItems: 2000, // The pause on a news item before being replaced
    fadeInSpeed: 600, // Speed of fade in animation
    fadeOutSpeed: 300 // Speed of fade out animation
  });
});
// Set the date we're counting down to
var countDownDate = new Date("April 13, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML = days;
  // + "d " + hours + "h " + minutes + "m " + seconds + "s "
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
