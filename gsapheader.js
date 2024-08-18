let tl3 = gsap.timeline()
gsap.from(".inner-bord h2",{
    opacity:0,
    x:-500,
    stagger:1,
    duration:1.5,
})
gsap.from(".inner-bord p",{
    opacity:0,
    x:500,
    stagger:1,
    duration:1.5,
})
gsap.from("#menu",{
    y:200,
    opacity:0,
    duration:1.5
})
gsap.from("#img-logo",{
    opacity:0,
    y:-200,
    duration:2,
    delay:1.5
})