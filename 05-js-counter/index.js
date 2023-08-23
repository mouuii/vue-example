let count = 0;

const countAddBtn = document.getElementById("add")
const countMinusBtn = document.getElementById("minus")
const countHeader = document.getElementById("count")


countAddBtn.addEventListener("click",()=>{
    count++;
    countHeader.innerText = count
})

countAddBtn.addEventListener("click",()=>{
    count++;
    countHeader.innerText = count
})

countMinusBtn.addEventListener("click",()=>{
    count--;
    countHeader.innerText = count
})