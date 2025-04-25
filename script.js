var tl1= gsap.timeline()

tl1.from(".profile",{
    duration: 1,
    x: -100,
    opacity: 0,
    scale: 0.5,
},"same")

tl1.from(".about-section ",{
    duration: 1,
    x: 100,
    opacity: 0,
},"same")


tl1.from(".nav",{
    duration: 1,
    x: 100,
    opacity: 0,
},"same")

tl1.from(".about-section h2",{
    duration: 1,
    x: -200,
    opacity: 0,
},"same")



var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".skill-section",
        start: "top 80%",
        end: "top 0%",
        scrub: 1,
    }
});
tl2.from(".skill-section h2",{
    duration: 1,
    x: 200,
    opacity: 0,
})

tl2.from(".skills-list li", {
    duration: 1,
    x: -100,
    opacity: 0,
    stagger: 0.2, 
});


var tl3=gsap.timeline({
    scrollTrigger: {
        trigger: ".experience-section",
        start: "top 80%",
        end: "top 0%",
        scrub: 1,
    }
});


tl3.from(".experience-section h2",{
    duration: 1,
    x: 200,
    opacity: 0,
})


tl3.from(".experience-section .box", {
    duration: 1,
    y: 200,
    opacity: 0,
    stagger: 0.2, 
});


var tl4=gsap.timeline({
    scrollTrigger: {
        trigger: ".education-section",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
    }
});


tl4.from(".education-section h2",{      
    duration: 1,
    x: 200,
    opacity: 0,
})


tl4.from(".education-section table ",{
    duration: 1,
    y: 200,
    opacity: 0,
    stagger: 0.2,
}) 


var tl5=gsap.timeline({
    scrollTrigger: {
        trigger: ".achievements-section",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
    }
});

tl5.from(".achievements-section h2",{       
    duration: 1,
    x: 200,
    opacity: 0,
})

tl5.from(".achievements-section .box", {
    duration: 1,
    x: 200,
    opacity: 0,
    stagger: 0.2, 
});


var tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".projects-section",
        start: "top 80%",
        end: "top 0%",
        scrub: 1,
    }
});

tl6.from(".projects-section h2", {   
    duration: 1,
    x: 200,
    opacity: 0,
});


tl6.from(".projects-section .project-card", {    
    duration: 2,
    y: 200,
    opacity: 0,
    stagger: 0.3,
});


