function nav(){
let body=document.querySelector('main')
let toggle=document.querySelector('#menu i')
let navbar = document.querySelector('nav')
let txt=document.querySelector('main')
let txt2=document.querySelector('text-cont')

toggle.addEventListener('click',()=>{
    navbar.classList.toggle('drop')
    body.classList.toggle('blur')
})
let lis=document.querySelectorAll('li')
lis.forEach((i)=>{
    i.addEventListener('click',()=>{
        navbar.classList.toggle('drop')
         body.classList.toggle('blur')
    })
})
}
nav();

