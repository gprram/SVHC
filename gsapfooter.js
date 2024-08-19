gsap.from("#qlinks",{
    opacity:0,
    x:-200,
    duration:1,
    stagger:0.8,
    scrollTrigger:{
        trigger:".footer-container",
        scroller:'body',
        start:"top 70%"
    }
})
gsap.from(".container-map",{
    opacity:0,
    x:200,
    duration:1,
    stagger:0.8,
    scrollTrigger:{
        trigger:".footer-container",
        scroller:'body',
        start:"top 70%"
    }
})