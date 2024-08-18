var tl = gsap.timeline()
tl.from("#sec1 .text-cont h2",{
    x:200,
    opacity:0,
    duration:1.2
})
tl.from("#sec1 .text-cont h1,#sec1 .text-cont h5",{
    x:200,
    opacity:0,
    duration:1.2
})
tl.from("#sec1 .text-cont h4,#sec1 .text-cont h6",{
    x:200,
    opacity:0,
    duration:1.2
})

tl.from("#sec1 .text-cont h3",{
    scale:3,
    opacity:0,
    duration:0.05
})
var tl2=gsap.timeline()
tl2.from("#card1",{ 
    opacity:0,
    y:80,
    duration:1.2,
    scrollTrigger:{
        trigger:"#card1",
        scroller:'body',
        marker:'true',
        start:"top 60%",
        
    }

})
tl2.from("#card2",{ 
    opacity:0,
    y:80,
    duration:1.2,
    scrollTrigger:{
        trigger:"#card2",
        scroller:'body',
        marker:'true',
        start:"top 60%",
        
    }

})
tl2.from("#card3",{ 
    opacity:0,
    y:80,
    duration:1.2,
    scrollTrigger:{
        trigger:"#card3",
        scroller:'body',
        marker:'true',
        start:"top 60%",
        
    }

})
gsap.from("#about",{
    y:20,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:"#about",
        scroller:'body',
        start:"top 50%"
    }
})
gsap.from(".sec3-sub-container1 p",{
    y:200,
    opacity:0,
    duration:0.2,
    stagger:1,
    scrollTrigger:{
        trigger:".sec3-sub-container1 p",
        scroller:'body',
        start:"top 70%"
    }
})
gsap.from(".sec3-sub-container2 img",{
    y:100,  
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:".sec3-sub-container2",
        scroller:'body',
        start:"top 70%"
    }
})
gsap.from(".btn-container-3 a",{
    opacity:0,
    rotate:70,  
    scale:0,
    duration:0.7,
    stagger:1,
    scrollTrigger:{
        trigger:".btn-container-3",
        scroller:'body',
        start:"top 80%"
    }
})

// gsap.from("#sec2 .princ-cont .sub-princ .img-con-princ",{
//     opacity:0,
//     y:-80,
//     stagger:1,
//     duration:1,

//     scrollTrigger:{
//         trigger:"#sec2 .img-con-princ",
//         scroller:'body',
//         marker:'true',
//         start:"top 50%",
//     }
// })
// gsap.from("#sec2 .princ-cont .sub-princ h2,#sec2 .princ-cont .sub-princ h4,#sec2 .princ-cont .sub-princ h6,#sec2 .princ-cont .sub-princ p",{
//     opacity:0,
//     y:-20,
//     stagger:1,
//     duration:0.5,
//     delay:1.5,

//     scrollTrigger:{
//         trigger:"#sec2",
//         scroller:'body',
//         marker:'true',
//         start:"top 50%",
//     }
// })
