var adm=gsap.timeline()
adm.from("#heady",{
    y:-100,
    opacity:0,    
    duration:1,
})
gsap.from("#PSINFO input",{
    opacity:0.2,
    y:300,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#PSINFO",
        scroller:'body',
        start:"top 70%",
    }
})
gsap.from("#PSINFO select",{
    opacity:0.2,
    y:300,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#PSINFO",
        scroller:'body',
        start:"top 70%",
    }
})
gsap.from("#PSINFO label",{
    opacity:0,
    y:300,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#PSINFO",
        scroller:'body',
        start:"top 70%",
    }
})
gsap.from("#PGINFO input",{
    opacity:0.2,
    x:-300,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#PGINFO",
        scroller:'body',
        start:"top 70%",
    }
})
gsap.from("#PGINFO label",{
    opacity:0,
    x:300,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#PGINFO",
        scroller:'body',
        start:"top 70%",
    }
})
gsap.from("#ADINFO textarea",{
    opacity:0.2,
    x:-300,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#ADINFO",
        scroller:'body',
        start:"top 70%",
       
    }
})
gsap.from("#ADINFO label",{
    opacity:0,
    x:300,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#ADINFO",
        scroller:'body',
        start:"top 70%",
        
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