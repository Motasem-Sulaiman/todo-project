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
