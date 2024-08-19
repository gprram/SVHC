gsap.from("h4",{
    opacity:0,
    y:-100,
    duration:1.2
})
gsap.from(".container1 .classroom-img-container",{
    x:-800,
    duration:1.2,
    scrollTrigger:{
        trigger:".container1",
        scroller:'body',
        start:"top 70%",
    }
})
gsap.from("#playground .classroom-img-container",{
    x:800,
    duration:1.2,
    scrollTrigger:{
        trigger:"#playground",
        scroller:'body',
        start:"top 70%",
        marker:'true'
    }
})
gsap.from(".container1 p",{
    opacity:0,
    y:20,
    duration:1.2,
    stagger:0.3,
    scrollTrigger:{
        trigger:".container1 p",
        scroller:'body',
        start:"top 85%",
    }
})
gsap.from("#playground p",{
    opacity:0,
    y:20,
    duration:1.2,
    stagger:0.3,
    scrollTrigger:{
        trigger:".container2 p",
        scroller:'body',
        start:"top 70%"
    }
})