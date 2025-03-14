const plusBtn=document.getElementById("plus")
const minusBtn=document.getElementById("minus")
const resetBtn=document.getElementById("reset")
const counterTitle=document.getElementById("counter")

let counter=0
counterTitle.innerHTML=`Counter: ${counter}`
const addToCounter=()=>{
    counter=counter+1
    counterTitle.innerHTML=`Counter: ${counter}`
}
const minusToCounter=()=>{
    counter=counter-1
    counterTitle.innerHTML=`Counter: ${counter}`
}
const resetCounter=()=>{
    counter=0
    counterTitle.innerHTML=`Counter: ${counter}`
}
plusBtn.addEventListener("click", addToCounter)
minusBtn.addEventListener("click",minusToCounter)
resetBtn.addEventListener("click",resetCounter)
// git add --all
// git commit -m "Describe the update"
// git push