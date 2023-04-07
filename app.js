'use strict'
let userName=prompt("Please enter your username");
console.log(userName)
let gender=prompt("Please enter your gender (male or female)");
if(gender=="male"||gender=="female"){
    console.log(gender)
}

let age=prompt("Please enter your age");
if(age<=0){

    alert("the age must be bigger than 0");
}
else(console.log(age))

let userConf=confirm("press cancel to skip the welcoming message or ok to show")

if(userConf==true){

if(gender=="male"){

    alert("Welcome Mr "+userName);
}else if(gender=="female"){

    alert ("Welcome Ms "+userName);
}
 else if(gender!=="male"&&gender!=="female"){
alert("Welcome "+ userName);

}}

let answerQues1=prompt("is this the first time u visit this website? (Yes/No)");

let answerQues2=prompt("are you enjoying this website? (Yes/No)")

let answerQues3=prompt("will u visit this website again? (Yes/No)")


let myArr=[answerQues1,answerQues2,answerQues3];



function answerQues(arr){


for(let i=0;i<=arr.length;i++)
{
    if(arr[i]===""){
        
        arr[i]="invalid"
    
    }
        
    }
  
       return arr;
    }
     
    



console.log(answerQues(myArr));
console.log("HELLO")