var dt = new Date();
var dt = dt.toString().split(" ");
var dateSpan = document.querySelector('.date-span');
var time = dt[4];
var date = dt[0] + ", " + dt[2] + " " + dt[1] + ", " + dt[3];
dateSpan.innerHTML = date;