const box=document.getElementById("box")
const add=document.getElementById("add")
const minus=document.getElementById("minus")
const reset=document.getElementById("reset")
const error=document.getElementById("error")

let result=0

add.addEventListener("click",
function(){
    result=result+1
    box.innerHTML=result
    error.innerHTML="😀"
})
minus.addEventListener("click",
function(){
    if(result>0){
        result=result-1
        box.innerHTML=result
        error.innerHTML="😀"
    }
    else{
        result=0
        box.innerHTML=result
        error.innerHTML="😓 SORRY!!! You can't go less than 0!!!"
    }
})
reset.addEventListener("click",
function(){
    box.innerHTML=0
    error.innerHTML="😀"
})