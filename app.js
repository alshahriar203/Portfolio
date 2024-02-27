//Navigation Logic

const links =document.querySelectorAll('.link');
const section = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link,i)=>{
    link.addEventListener('click',()=>{
        if(activeLink!=i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            section[activeLink].classList.remove('active');

            setTimeout(()=>{
                activeLink = i;
                section[i].classList.add('active');
            },1000)
        }
    })
})



//Type writing animation
var text = document.getElementById('welcome-text');
var container = document.querySelector('.container');
var message = "Hey,\nI am Mahir, Welcome to my space.\nLet's explore my journey through\nmy accomplishments, projects and more.";
var index = 0;
        
function typeText() {
    if (index < message.length) {
        text.textContent += message.charAt(index);
        index++;

        if (container.scrollWidth > container.offsetWidth) {
            text.innerHTML += "<br>";
        }
            
        setTimeout(typeText, 100);   
    }
    else{
        setTimeout(deleteText, 1500);
    }
}

function deleteText() {
    if (index >= 0) {
        text.textContent = message.substr(0, index);
        index--;
        setTimeout(deleteText, 50);
    } else {
        setTimeout(typeText, 1000); 
    }
}

typeText();        






//Configuring particles animation

particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: !0,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },

        opacity: {
            value: .5,
            random: !1,
            anim: {
                enable: !1,
                speed: 1,
                opacity_min: .1,
                sync: !1
            }
        },

        size: {
            value: 3,
            random: !0,
            anim: {
                enable: !1,
                speed: 40,
                size_min: .1,
                sync: !1
            }
        },

        line_linked: {
            enable: !0,
            distance: 150,
            color: "#ffffff",
            opacity: .4,
            width: 1
        },

        move: {
            enable: !0,
            speed: 6,
            direction: "none",
            random: !1,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: {
                enable: !1,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !0,
                mode: "grab"
            },
            onclick: {
                enable: !0,
                mode: "push"
            },
            resize: !0
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: .4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    
    retina_detect: true
});
