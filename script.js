const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show')
        }
    })
})

const lenis = new Lenis() 


lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

phonefunction=()=>{
const email = document.getElementById('input_mail');
 email.type = 'number'
 email.placeholder = 'Phone'
}

emailfunction=()=>{
    const email = document.getElementById('input_mail');
 email.type = 'email'
 email.placeholder = 'Email'
}

var tl = gsap.timeline();
tl.from(".logo_img",{
    x:60,
    opacity:0,
    duration:1,
    // delay:-0.5,
    stagger:0.2
})

tl.from(".loader h3 ",{
    x:60,
    opacity:0,
    duration:1,
    delay:-0.8,
    stagger:0.2
})

tl.to(".logo_img, .loader h3",{
    x:-40,
    opacity:0,
    duration:1,
    stagger:0.2
})






tl.to(".loader ",{
    opacity:0,
})
tl.to(".loader ",{
    display:"none",
})

tl.from(".left",{
    y:-20,
    opacity:0,
    duration:1,
    delay:-1
})
tl.from(".right ul li",{
    y:-20,
    opacity:0,
    duration:0.5,
    stagger:0.3
})

gsap.from(".img1",{
    x:-1400,
    duration:0.5,
    delay:0.2,
    stagger:0.4,
    scrollTrigger:{
        trigger:".img1",
        scroller:"body",
        start:"top 80%",
    }
})
gsap.from(".right_txt",{
    x:200,
    duration:1.3,
    stagger:1,
    scrollTrigger:{
        trigger:".right_txt",
        scroller:"body",
        start:"top 90%",
    }
})

gsap.from(".faq",{
    y:-120,
    opacity:0,
    duration:0.3,
    delay:0.3,
    stagger:1,
    scrollTrigger:{
        trigger:".faq",
        scroller:"body",
        start:"top 80%",
    }
})

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq=> {
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active")
    })
})




