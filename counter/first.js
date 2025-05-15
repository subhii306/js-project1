const counter = document.querySelector(".counter")
const lessBtn= document.querySelector(".lessBtn")
const plusBtn= document.querySelector(".plusBtn")
const changeby=document.querySelector(".changeby")
const resetbtn= document.querySelector(".resetbtn")

plusBtn.addEventListener('click',() =>{
    let countValue= parseInt(counter.innerText)
    let changebyVal= parseInt(changeby.value)
    counter.innerText= countValue+changebyVal
})
lessBtn.addEventListener('click',() =>{
    let countValue= parseInt(counter.innerText)
    let changebyVal= parseInt(changeby.value)
    counter.innerText= countValue-changebyVal
    
})    
resetbtn.addEventListener("click",()=>{
    counter.innerText=0
})  