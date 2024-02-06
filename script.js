const button = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result"); 
button.onclick = check;

function check(){
  if(input.value == ""){
    return alert("Please input a value")
  }else if(input.value.toLowerCase().replace(/\s+/g, '').replace(/\W|_/g,"") == input.value.toLowerCase().replace(/\s+/g, '').replace(/\W|_/g,"").split("").reverse().join("")){
    result.innerText = "";
    result.innerText += input.value +" is a palindrome";
  }else{
    console.log(input.value.split("").reverse().join(""))
    result.innerText = "";
    result.innerText += input.value +" is not a palindrome";
  }
}

console.log("0_0 (: /-\ :) 0-0".toLowerCase().replace(/\s+/g, '').replace(/\W|_/g,""))
