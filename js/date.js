const d = new Date();
console.log(d)
document.getElementById("year").innerHTML = d.getFullYear();

document.getElementById("day").innerHTML = d.getDate();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("month").innerHTML = months[d.getMonth()];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("weekday").innerHTML = days[d.getDay()];

console.log("loaded");