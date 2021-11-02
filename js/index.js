let btn = document.querySelector(".toggler");
let list_items = document.querySelectorAll(".list-item")
let checked_input = document.querySelector("input.theme")
let mywork = document.querySelector(".my-work")
let desc = document.querySelector(".description")

btn.addEventListener("click",()=>{
    document.body.classList.toggle("nav-open");
})

list_items.forEach(item=>{
    item.addEventListener("click",()=>{
        document.body.classList.remove("nav-open");
    })
})

checked_input.addEventListener("change",()=>{
    if(checked_input.checked){
        document.body.style.background = 'black';
        document.body.style.color= 'white';
        desc.style.background = '#303030'
    }
    else{
        document.body.style.background = 'white';
        document.body.style.color= 'black';
        desc.style.background = 'white'
    }
})