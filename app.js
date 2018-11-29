var timeForPost = document.getElementById('postTime');

// UTC
var today2 = Date.now();

function SetTime() {
  // today
  var today = new Date();

  // gather the info we need
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  
  // format the output
  // 11-28-2018
  var date = month + '-' + day + '-' + year;
  
  // display on HTML
  timeForPost.innerHTML = date;
}

SetTime();