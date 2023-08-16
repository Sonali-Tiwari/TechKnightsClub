
// Hamburger Icon 


const Hamburger=document.querySelector(".hamburger");
const Header=document.querySelector(".header")
const slider=document.querySelector('.things_do_box')
const slide=document.querySelector('.things_box')
const Main=document.querySelector('.main')

Hamburger.addEventListener("click",()=>{
    Hamburger.classList.toggle("active")
    Header.classList.toggle("active")
})

const boxes=document.querySelectorAll(".navlink")
boxes.forEach(e=>
e.addEventListener("click",()=>{ 
        Hamburger.classList.remove("active")
        Header.classList.remove("active")
    }))

// Things we do section



// const Box1=document.getElementsByClassName('1')
// const Box2=document.getElementsByClassName('2')
// const Box3=document.getElementsByClassName('3')
// const Box4=document.getElementsByClassName('4')
// const Box5=document.getElementsByClassName('5')
// const Box1=document.querySelector('.box1')




const num1=document.querySelector('.n-1')
const num2=document.querySelector('.n-2')
const num3=document.querySelector('.n-3')
const num4=document.querySelector('.n-4')
const num5=document.querySelector('.n-5')
num1.addEventListener("click",()=>{
})

num1.addEventListener('click',()=>{
    slider.scrollLeft =60
    // Box1.class.toggle("actives")
    // document.getElementsByClassName('1').style.tranform="scale(1.3)"

})
num2.addEventListener('click',()=>{
    slider.scrollLeft =500
    // slider.scrollLeft=slide.scrollWidth
})
num3.addEventListener('click',()=>{
    slider.scrollLeft =900
})
num4.addEventListener('click',()=>{
    slider.scrollLeft =1270
})
num5.addEventListener('click',()=>{
    slider.scrollLeft =2000
})



// Our Family



                                        // HERO IMAGE ANIMATION
