gsap.from("#heady",{
    y:-100,
    opacity:0,    
    duration:1,
})
gsap.from("legend",{
    x:-200,
    duration:1.3,
    scrollTrigger:{
        trigger:"legend",
        scroller:'body',
        
    }
})
gsap.from("#PSINFO input,#PSINFO select",{
    opacity:0,
    x:700,
    duration:1.3,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#PSINFO",
        scroller:'body',
    }
})
gsap.from("#PSINFO label",{
    opacity:0,
    x:-300,
    delay:0.5,
    duration:1.3,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#PSINFO",
        scroller:'body',
    }
})
gsap.from("#PGINFO input",{
    opacity:0,
    y:700,
    duration:2,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#PGINFO",
        scroller:'body',
        start:"top 85%",
        
    }
})
gsap.from("#PGINFO label",{
    opacity:0,
    x:-300,
    delay:0.5,
    duration:1.3,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#PGINFO",
        scroller:'body',
        start:"top 85%",
    }
})
gsap.from("#ADINFO textarea,#ADINFO label",{
    opacity:0,
    x:-300,
    duration:1,
    stagger:0.8,
    scrollTrigger:{
        trigger:"#ADINFO",
        scroller:'body',
        start:"top 80%",
    }
})

gsap.from("#bt",{
    opacity:0,
       y:200,
       duration:1.5,
       scrollTrigger:{
            trigger:"#declaration",
            scroller:'body', 
            start:"top 70%",
           
    
       }
       
    })