function menuToggle() {
    var menu = document.querySelector(".imgSvg");
    var menuDiv = document.querySelector(".menupagediv");
    menu.addEventListener("mouseenter", function () {
        menuDiv.style.left = 0;
        gsap.to(".top h1, .btm p ",{
            duration : .8,
            delay:0.6,
            opacity: 1,
            stagger :0.2
        })
    });

    menu.addEventListener("mouseleave", function () {
        menuDiv.style.left = "-100vh"; // Adjust the value as needed
        gsap.to(".top h1, .btm p ",{
            opacity: 0,
        })
    });
}



function scrollAnimation(){
    gsap.to('.page6-left', {
        scrollTrigger: {
            trigger: '.page6',
            start: 'top top',
            // markers: true,
            endTrigger: '.page7', // Change this to your end trigger if necessary
            end: 'top 70%',
            pin: ".page6-left",
            scrub: true
        }
    }); 
    gsap.to('.page7-left', {
        scrollTrigger: {
            trigger: '.page7',
            start: 'top top',
            // markers: true,
            endTrigger: '.page8', // Change this to your end trigger if necessary
            end: 'top 70%',
            pin: ".page7-left",
            scrub: true
        }
    }); 
    gsap.to('.page8-left', {
        scrollTrigger: {
            trigger: '.page8',
            start: 'top top',
            // markers: true,
            endTrigger: '.page9', // Change this to your end trigger if necessary
            end: 'top 70%',
            pin: ".page8-left",
            scrub: true
        }
    }); 
}

function mouseCur(){
    
const page6Container = document.querySelector(".page6");
const cursor = document.querySelector(".cursor");

page6Container.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX - page6Container.getBoundingClientRect().left;
  const mouseY = event.clientY - page6Container.getBoundingClientRect().top;

  gsap.to(cursor, {
    x: mouseX,
    y: mouseY,
  });
});

page6Container.addEventListener("mouseenter", () => {
  gsap.to(cursor, { scale: 1 });
});

page6Container.addEventListener("mouseleave", () => {
  gsap.to(cursor, { scale: 0 });
});

}


AOS.init();
menuToggle();
mouseCur()
scrollAnimation()
