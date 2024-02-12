// Write a function that takes two arrays as parameters. The first array will be an array of people's names, and the second array will be the alphabet
//Results should be a new array listing the first name with a colon with the alphabet after it, with each letter listed separately with "" and a comma(,). 

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var splitAlpha = alphabet.split("")
//var concatPeoAlpha = people.concat(splitAlpha) - I realized this doesn't work for this function/problem

//Results should be a new array listing the first name with a colon with the alphabet after it, with each letter listed separately with "" and a comma(,). 
function people(array){
  for(var i = 0; i < people.length; i++){
    console.log(people[i].concat(splitAlpha))
      }
}
