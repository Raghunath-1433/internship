//it is for color trail
const colorTrail = document.getElementById('color-trail');

document.addEventListener('mousemove', (e) => {
    // it is for according to mouse movement
    colorTrail.style.left = `${e.clientX}px`;
    colorTrail.style.top = `${e.clientY}px`;

    colorTrail.style.opacity = 1;

    // Create a new circle for the trail
    const trailCircle = document.createElement('div');
    trailCircle.className = 'trail-circle';
    trailCircle.style.left = `${e.clientX}px`;
    trailCircle.style.top = `${e.clientY}px`;
    document.body.appendChild(trailCircle);

    setTimeout(() => {
        trailCircle.remove();
    }, 500);
});

function createFallingElements() {
    const fallingBackground = document.getElementById('falling-background');

    setInterval(() => {
        const fallingElement = document.createElement('div');
        fallingElement.className = 'falling-element';
        fallingElement.style.left = `${Math.random() * 100}vw`;
        fallingElement.style.width = `${Math.random() * 10 + 5}px`;
        fallingElement.style.height = fallingElement.style.width;
        const duration = Math.random() * 5 + 3; // Between 3s and 8s
        fallingElement.style.animationDuration = `${duration}s`;
        fallingBackground.appendChild(fallingElement);
        setTimeout(() => {
            fallingElement.remove();
        }, duration * 1000);
    }, 300); 
}

createFallingElements();

// here intial animation starts
function loadingAnimations() {
    document.addEventListener("DOMContentLoaded", () => {
        gsap.from("#loader h1", {
            duration: 2,
            strokeDasharray: 400,
            strokeDashoffset: 400,
            ease: "power4.out",
            onComplete: () => {
                gsap.to("#loader", {
                    duration: 1,
                    y: "-100vh",
                    ease: "power2.inOut",
                    onComplete: () => {
                        document.getElementById('loader').style.display = 'none';
                    }
                });
            }
        });

        gsap.to("#loader h1", {
            duration: 3,
            strokeDashoffset: 0,
            backgroundImage: "linear-gradient(to top, white 0%, transparent 100%)",
            ease: "power4.out"
        });

        gsap.to("#loader p", {
            opacity: 0,
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "power1.inOut"
        });

        gsap.from("header h1", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
            delay: 3
        });

        gsap.from("#image2", {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            delay: 3.5,
            ease: "back.out(1.7)"
        });
        gsap.from("#image3", {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            delay: 3.9,
            ease: "back.out(1.7)"
        });
        gsap.from("#image1", {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            delay: 4.4,
            ease: "back.out(1.7)"
        });
        gsap.from("#image4", {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            delay: 4.7,
            ease: "back.out(1.7)"
        });
    });
}

function h1Animations() {
    const imageContainers = document.getElementsByClassName('image-container');

    Array.from(imageContainers).forEach(container => {
        container.addEventListener('mouseenter', function() {
            const h1s = document.querySelectorAll("header h1");
            h1s.forEach(h1 => {
                h1.style.pointerEvents = "none";
                h1.style.color = "transparent";
                h1.style.webkitTextStroke = "1px #3C3C3C";
                h1.style.transition = "color 0.2s ease, webkitTextStroke 0.2s ease";
            });
        });

        container.addEventListener('mouseleave', function() {
            const h1s = document.querySelectorAll("header h1");
            h1s.forEach(h1 => {
                h1.style.pointerEvents = "auto";
                h1.style.color = "#fff";
            });
        });
    });
}

function movingImg() {
    document.querySelectorAll('.image-container').forEach(container => {
        container.addEventListener('mouseenter', () => {
            container.addEventListener('mousemove', moveImage);
        });
    
        container.addEventListener('mouseleave', () => {
            container.removeEventListener('mousemove', moveImage);
            container.style.transition = "transform 2s ease";
            container.style.transform = 'translate(0, 0)';
        });
    
        function moveImage(event) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const rect = container.getBoundingClientRect();
            const offsetX = mouseX - rect.left - rect.width / 2;
            const offsetY = mouseY - rect.top - rect.height / 2;
    
            const moveFactor = 1.5;
    
            container.style.transform = `translate(${offsetX * moveFactor}px, ${offsetY * moveFactor}px)`;
            container.style.transition = "transform 0.1s ease";
        }
    });
}

function imgVector() {
    document.querySelectorAll('.image-container').forEach(container => {
        container.addEventListener('mouseenter', () => {
            const allContainers = document.querySelectorAll('.image-container');
            
            allContainers.forEach(otherContainer => {
                const image = otherContainer.querySelector('img');
                
                if (otherContainer !== container) {
                    otherContainer.style.border = "2px solid #3C3C3C";
                    image.style.opacity = "0";
                } else {
                    image.style.opacity = "1";
                }
            });
        });
    
        container.addEventListener('mouseleave', () => {
            const allContainers = document.querySelectorAll('.image-container');
            
            allContainers.forEach(otherContainer => {
                const image = otherContainer.querySelector('img');
                
                otherContainer.style.border = "none";
                image.style.opacity = "1";
            });
        });
    });
}

loadingAnimations();
h1Animations();
movingImg();
imgVector();