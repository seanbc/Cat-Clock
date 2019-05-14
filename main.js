var noon = 12;

// Get clock to show current time
var showCurrentTime = function ()
{
 var clock = document.getElementById('clock');

 var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";


   // Set hours to 12 hour clock
  if (hours >= noon)
  {
    var meridian = "PM";
  }

   // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var clockTime = hours + ":" + minutes + ":" + seconds + meridian + "!!";
  clock.innerText = clockTime;
}
showCurrentTime();

var updateClock = function()
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var timeEventJS = document.getElementById("timeEvent");
