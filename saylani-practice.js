// //Make a program which allows students who live in Karachi only.
// // take city from the user and decide if he is allowed or not

function myciti(citi) {
    if (citi == "karachi") {
        console.log("You are allowed to enter")
    }
    else {
        console.log("Your must be resident of Karachi")
    }
}

let yourCiti = prompt("Enter your city? ");
 yourCiti = yourCiti.toLowerCase();
let allowedCiti = myciti(yourCiti);
console.log(allowedCiti);

// //Make a program which allows students who are not from Karachi. they can be from any city. take city
// // from the user and decide if he is allowed or not
function mycity(city) {
    if (city != "karachi") {
        console.log("You are allowed to enter")
    }
    else {
        console.log("Your must not be resident of Karachi")
    }
}

let yourCity = prompt("Enter your city? ");
 yourCity = yourCity.toLowerCase();
let allowedCity = mycity(yourCity);
console.log(allowedCity);

// //Make a program which allows students who are above 16 and female
function studentAge (age , gender){
    if (age > 16 && gender == "female"){
console.log("allowed");
    }
    else{
        console.log("you are not allowed");
    }
}

let yourAge = +prompt("ënter your age ?");
let yourGender = prompt("enter your gender please: ");
yourGender = yourGender.toLowerCase();
let allowedStudent = studentAge(yourAge,yourGender);
console.log(allowedStudent);

// //Make a program in which it tell which two variables add up to make sum of 6.

function addUpPairs (arr,targetSum){
const obj = {};
for (let j = 0 ; j<arr.length ;j++){
    const num = arr[j];
    const difference = targetSum - num;
    if (obj[difference]!== undefined){
        return [num , difference];
    }
obj[num]=j;
}
return null;
}
const arr = [2,5,7]
const targetSum = 6;
const result =addUpPairs (arr,targetSum);
if (result){
console.log(`The two number which are making ${targetSum} are ${result[0]} and ${result[1]}`)
}
else{
console.log(`No pairs to make target sum is found.`)
 }


