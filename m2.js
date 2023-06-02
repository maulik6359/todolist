const preson = {
  fullname: function () {
    return this.fname + " " + this.lname;
  },
};
const purson1 = {
  fname: "maulik",
  lname: "bhadani",
};
const purson2 = {
  fname: "jeel",
  lname: "kakadiya",
};

document.getElementById("p").innerHTML = preson.fullname.call(purson2);
// console.log(purson1);

const number = ["1", "2", "3", "4"];
// let size = number.puch();

(document.getElementById("p1").innerHTML = number.unshift("hello")),
  (document.getElementById("p1").innerHTML = number);

// var year = prompt("enter a /year:");

// function leapyear(year=2020) {

//     if (year % 4 === 0) {
//         if (year % 100 !== 0) {
//             if (year % 400 === 0) {
//                 // console.log("leapyear");
//                 (document.getElementById("p2").innerHTML = year+" is a leap year");
//             }
//             // console.log("not a laap year");
//             (document.getElementById("p2").innerHTML = year+"is a not leap year");
//         }
//         (document.getElementById("p2").innerHTML = year+"ia a leap year");

//         // console.log("is a leap yaer");
//     }
// }

const name1 = ["jeel", "maulik", "jon", "wick"];

// document.getElementById("p2").innerHTML = name1;

function lunch() {
  var numberOfPurson = name1.length;
  var rendumNumber = Math.floor(Math.random() * numberOfPurson);
  var renadumname = name1[rendumNumber];

  // return renadumname + " is going to lanch..";
  // console.log(renadumname+"is goinf to lanch..");
  document.getElementById("p2").innerHTML =lunch(renadumname+" is going  to lanch");
}
// console.log(lunch(renadumname));

