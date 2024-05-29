
const cursor = document.querySelector('.cursor');
const navLinks = document.querySelectorAll('.link');
const links = document.querySelectorAll('a');

document.addEventListener("DOMContentLoaded", () => {

    // set the scroll position to the top of the page
    window.scrollTo(0, 0);

    const currentYear = new Date().getFullYear();
    document.getElementById("footer").textContent = `© ${currentYear} Ahmet Ünsal`;

    gsap.registerPlugin(ScrollTrigger)

    const splitText = new SplitType(".hello")
    const splitText2 = new SplitType(".about-txt")
    const splitText3 = new SplitType(".me-txt");
    const skillSplit = new SplitType(".skills-txt");
    const frameworksSplit = new SplitType(".frames-txt");
    const projectsSplit = new SplitType(".projects-txt");
    const projectList = new SplitType(".projects-list ul");


    const projects = [
        {
            title: "AI Chatttig App (In Progress)",

            description: "Chat with artificial intelligence application I wrote out of boredom",
            url: "https://github.com/ahmetunsal/ai-chat-frontend",
        },
        {
            title: "E-Leaning Platform",
            description: "A platform where you can taking some courses. I wrote this project as a graduation project.",
            url: "https://github.com/ahmetunsal/uretken-akademi-bitirme-projesi",
        },
        {
            title: "Image To Text Recognizer",
            description: "A simple image to text recognizer application. I wrote this project to learn how to use Google ML Kit library.",
            url: "https://github.com/ahmetunsal/ImgToTextRecognizer",
        },
    ];

    const projectsList = [];


    projects.map((project, index) => {
        projectsList.push(`
        <li class="project">
            <h4>
                📕 ${project.title}
            </h4>
            <p>
                ${project.description}
            </p>
            <div class="project-button">
                <a href="${project.url}" target="_blank">
                    Visit
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
            </div>
        </li>
        `)
    });

    
    projectsList.push(`
    <li class="see-all">
        <h4>
            <a href="https://github.com/ahmetunsal?tab=repositories">
                See All Projecs
                <i class="fa fa-arrow-right" aria-hidden="true" style="font-size: 20px; margin-left: 10px;"></i>
            </a>
        </h4>
    </li>
`)

    document.querySelector(".projects-list ul").innerHTML = projectsList.join("");

    gsap.from(".hello .char", {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "power4.out",
        onComplate: () => {
            gsap.to(".hello", {
                duration: 5,
                y: 0,
                transform: "scale(70)",
                delay: 1,
                stagger: 0.1,
                ease: "power4.out",
                onComplate: () => {
                    gsap.to(".hello", {
                        duration: 0.5,
                        opacity: 0,
                        display: "none",
                        ease: "power4.out",
                        delay: 1,
                        onComplate: () => {
                            gsap.from(".circle", {
                                duration: 3,
                                opacity: 1,
                                ease: "power4.out",
                                delay: 0.1,
                                onComplate: () => {
                                    const splitText = new SplitType(".name");
                                    const splitTextt = new SplitType(".surname");
                                    const splitText2 = new SplitType(".job");

                                    gsap.to(".s-link", {
                                        duration: 5,
                                        x: -90,
                                        opacity: 1,
                                        delay: 2,
                                        stagger: 0.1,
                                        ease: "power4.out"
                                    });

                                    gsap.to(".link", {
                                        duration: 1,
                                        x: 200,
                                        opacity: 1,
                                        stagger: 0.1,
                                        delay: 2,
                                        ease: "power4.out"
                                    });

                                    gsap.from(".name .char", {
                                        duration: 1,
                                        y: 200,
                                        opacity: 0,
                                        stagger: 0.1,
                                        delay: 0.37,
                                        ease: "power4.out"
                                    });

                                    gsap.from(".surname .char", {
                                        duration: 1,
                                        y: 200,
                                        opacity: 0,
                                        stagger: 0.1,
                                        delay: 0.37,
                                        ease: "power4.out"
                                    })

                                    gsap.from(".job .char", {
                                        duration: 1,
                                        y: 200,
                                        opacity: 0,
                                        stagger: 0.1,
                                        delay: 0.37,
                                        ease: "power4.out",
                                        onComplate: () => {
                                            document.querySelector("body").style.overflow = "auto";
                                            document.querySelector(".left-content").style.zIndex = 1;
                                        }
                                    });
                                }
                            })
                        }
                    });

                }
            });
            gsap.to(".wave", {
                duration: 1,
                x: "-500%",
                rotation: -360,
                stagger: 0.1,
                ease: "power4.out",
                delay: 1
            });


        }
    });

    gsap.from(".about-txt", {
        scrollTrigger: ".about-txt",
        x: -500,
        stagger: 0.1,
        delay: 1
    })

    gsap.from(".about-me", {
        scrollTrigger: ".about-me",
        duration: 1,
        x: 500,
        opacity: 0,
        stagger: 0.1,
        delay: 1.2,
        ease: "power4.out"
    });

    gsap.from(".skills-txt .char", {
        scrollTrigger: ".skills-txt",
        duration: 1,
        x: -500,
        stagger: 0.1,
        delay: 1.3
    });

    gsap.from(".project", {
        scrollTrigger: ".project",
        duration: 1,
        opacity: 0,
        stagger: 0.5,
        delay: 2
    });

    gsap.from(".progress-bar", {
        scrollTrigger: ".progress-bar",
        duration: 1,
        width: 0,
        stagger: 0.1,
        delay: 2.5
    });

    gsap.from(".progress", {
        scrollTrigger: ".progress",
        duration: 1,
        width: 0,
        opacity: 0,
        stagger: 0.1,
        delay: 2.5
    });

    gsap.from(".projects-txt .char", {
        scrollTrigger: ".projects-txt .char",
        duration: 1,
        rotationY: -50,
        opacity: 0,
        stagger: 0.1,
        delay: 0.7
    });

    gsap.from(".frames-txt .line", {
        scrollTrigger: ".frames-txt .line",
        duration: 1,
        rotationY: 50,
        opacity: 0,
        stagger: 0.1,
        delay: 0.6
    });

    gsap.from(".see-all", {
        scrollTrigger: ".see-all",
        duration: 1,
        opacity: 0,
        stagger: 0.1,
        delay: 4
    });

    gsap.from(".me-txt", {
        scrollTrigger: ".me-txt",
        duration: 1,
        x: 500,
        opacity: 0,
        stagger: 0.1,
        delay: 1.2,
        ease: "power4.out"
    });

    gsap.from(".skill-name", {
        scrollTrigger: ".skill-name",
        duration: 1,
        rotationY: 50,
        opacity: 0,
        stagger: 0.1,
        delay: 0.6
    });

    gsap.from(".wave", {
        duration: 1,
        x: "500%",
        rotation: 360,
        stagger: 0.1,
        ease: "power4.out",
    });

});

window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
});

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('active');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });
});


document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px; display: block;`);
})

// when the page is reloaded
window.addEventListener('load', () => {
    // set the window scroll to top
    window.scrollTo(0, 0);
});


// when the space key is pressed
window.addEventListener('keydown', e => {
    if (e.key === " ") {
        // prevent the default action
        e.preventDefault();
        // scroll to the #about section but if the scroll is already at the #about section scroll to the #projects section and if the scroll is already at the #projects section scroll to the #contact section
        window.scrollTo({
            top: window.scrollY >= document.querySelector('#about').offsetTop ?
                window.scrollY >= document.querySelector('#projects').offsetTop ?
                    document.querySelector('#contact').offsetTop : document.querySelector('#projects').offsetTop :
                document.querySelector('#about').offsetTop,
            behavior: 'smooth'
        });

    }
});


