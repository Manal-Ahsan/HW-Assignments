//Task 2
let input = prompt("Enter you name")
function userName(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
console.log("success")
        },2000)
resolve();
 } )
}
 async function displayName(){
    await userName();
    document.getElementById("username").innerText=`Your name is ${input}`
 } displayName() ; 


//Task 1
let mode = document.querySelector("#h2")
let a= 0;
mode.onmouseover = ()=>{
    a++
    if(a>10){
   document.querySelector("body").style.backgroundColor= "red"
   alert("you clicked the div more than 10 times")
}}

