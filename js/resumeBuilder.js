//
// var awesomeThoughts = "I am Ivan and I am AWESOME!";
// // console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//
// $("#main").append(funThoughts);

// var email = "ivan@udacity.com";
// var newEmail = email.replace("udacity", "gmail");
// console.log(email);
// console.log(newEmail);
var name = "Ivan";
var formatedName = HTMLheaderName.replace("%data%", name);

var role = "Junior Web Developer";
var formatedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);
