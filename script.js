document.addEventListener("DOMContentLoaded", () => {


    /* ========================================
       MOBILE NAVIGATION
    ======================================== */

    const menuButton =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector(".nav");


    if (menuButton && nav) {

        menuButton.addEventListener(
            "click",
            () => {

                nav.classList.toggle("open");

            }
        );

    }



    /* ========================================
       FOOTER YEAR
    ======================================== */

    document
        .querySelectorAll(".year")
        .forEach(element => {

            element.textContent =
                new Date().getFullYear();

        });



    /* ========================================
       PROJECT DATABASE
    ======================================== */

    const projects = [

        {
            title: "Scientific Calculator",

            icon: "🧮",

            category: "web",

            technology:
                "HTML • CSS • JavaScript",

            description:
                "A scientific calculator with mathematical operations, functions, percentages and an interactive user interface."
        },


        {
            title: "Study Timer",

            icon: "⏱️",

            category: "web",

            technology:
                "HTML • CSS • JavaScript",

            description:
                "A study timer designed to help students manage focused study sessions and breaks."
        },


        {
            title: "Student Dashboard",

            icon: "📊",

            category: "web",

            technology:
                "HTML • CSS • JavaScript",

            description:
                "An interactive student dashboard showing subjects, progress indicators, goals and study information."
        },


        {
            title: "Weather Dashboard",

            icon: "🌦️",

            category: "web",

            technology:
                "HTML • CSS • JavaScript • API",

            description:
                "A weather application that can display weather information for different locations using a weather API."
        },


        {
            title: "Python Grade Analyzer",

            icon: "📈",

            category: "python",

            technology:
                "Python",

            description:
                "A Python program that calculates student totals, averages, grades and performance statistics."
        },


        {
            title: "Python File Organizer",

            icon: "📁",

            category: "python",

            technology:
                "Python",

            description:
                "A Python automation program that organizes files into folders according to their file types."
        },


        {
            title: "Python Quiz App",

            icon: "🧠",

            category: "python",

            technology:
                "Python",

            description:
                "An interactive quiz program that asks questions, calculates scores and provides feedback."
        },


        {
            title: "AI Assistant",

            icon: "🤖",

            category: "ai",

            technology:
                "HTML • CSS • JavaScript • AI",

            description:
                "A futuristic AI assistant interface that can later be connected to an AI API."
        },


        {
            title: "AI Study Assistant",

            icon: "🎓",

            category: "ai",

            technology:
                "Python • AI",

            description:
                "An experimental AI project designed to help students understand concepts and organize study information."
        },


        {
            title: "Password Generator",

            icon: "🔐",

            category: "tools",

            technology:
                "HTML • CSS • JavaScript",

            description:
                "A browser-based password generator that creates random passwords based on user-selected options."
        },


        {
            title: "Digital Notes App",

            icon: "📝",

            category: "tools",

            technology:
                "HTML • CSS • JavaScript",

            description:
                "A simple digital notes application for creating, editing and organizing notes."
        },


        {
            title: "Image Gallery",

            icon: "🖼️",

            category: "tools",

            technology:
                "HTML • CSS • JavaScript",

            description:
                "An interactive image gallery with categories, previews and a full-screen image viewer."
        }

    ];



    /* ========================================
       PROJECT GRID
    ======================================== */

    const projectGrid =
        document.getElementById(
            "projectGrid"
        );


    if (projectGrid) {

        function displayProjects(
            filter = "all"
        ) {

            projectGrid.innerHTML = "";


            const filteredProjects =
                projects.filter(project => {

                    return (
                        filter === "all" ||
                        project.category === filter
                    );

                });


            filteredProjects.forEach(
                (project, index) => {


                    const card =
                        document.createElement(
                            "article"
                        );


                    card.className =
                        "project-card reveal";


                    card.innerHTML = `

                        <div class="project-icon">

                            ${project.icon}

                        </div>


                        <div class="project-body">

                            <span class="tag">

                                ${project.category.toUpperCase()}

                            </span>


                            <h3>

                                ${project.title}

                            </h3>


                            <p>

                                ${project.description}

                            </p>


                            <div class="project-tech">

                                ${project.technology}

                            </div>


                            <button
                                class="view-btn"
                                data-index="${index}">

                                View Details

                            </button>

                        </div>

                    `;


                    projectGrid.appendChild(
                        card
                    );

                }
            );


            activateProjectButtons();

            activateRevealAnimations();

        }


        displayProjects();



        /* ====================================
           FILTER BUTTONS
        ==================================== */

        const filterButtons =
            document.querySelectorAll(
                ".filter-btn"
            );


        filterButtons.forEach(button => {

            button.addEventListener(
                "click",
                () => {


                    filterButtons
                        .forEach(btn => {

                            btn.classList
                                .remove("active");

                        });


                    button.classList
                        .add("active");


                    displayProjects(
                        button.dataset.filter
                    );

                }
            );

        });

    }



    /* ========================================
       PROJECT MODAL
    ======================================== */

    const modal =
        document.getElementById(
            "projectModal"
        );


    const modalTitle =
        document.getElementById(
            "modalTitle"
        );


    const modalDescription =
        document.getElementById(
            "modalDescription"
        );


    const modalIcon =
        document.getElementById(
            "modalIcon"
        );


    const modalTech =
        document.getElementById(
            "modalTech"
        );


    function activateProjectButtons() {

        document
            .querySelectorAll(".view-btn")
            .forEach(button => {


                button.addEventListener(
                    "click",
                    () => {


                        const index =
                            Number(
                                button.dataset.index
                            );


                        const project =
                            projects[index];


                        if (!project) {

                            return;

                        }


                        modalIcon.textContent =
                            project.icon;


                        modalTitle.textContent =
                            project.title;


                        modalDescription.textContent =
                            project.description;


                        modalTech.textContent =
                            project.technology;


                        modal.classList.add(
                            "show"
                        );


                        modal.setAttribute(
                            "aria-hidden",
                            "false"
                        );

                    }
                );

            });

    }



    /* ========================================
       CLOSE MODAL
    ======================================== */

    const closeModal =
        document.querySelector(
            ".close-modal"
        );


    if (closeModal && modal) {

        closeModal.addEventListener(
            "click",
            closeProjectModal
        );

    }


    function closeProjectModal() {

        if (!modal) {

            return;

        }


        modal.classList.remove(
            "show"
        );


        modal.setAttribute(
            "aria-hidden",
            "true"
        );

    }



    /* ========================================
       REVEAL ANIMATION
    ======================================== */

    function activateRevealAnimations() {

        const revealItems =
            document.querySelectorAll(
                ".reveal"
            );


        const observer =
            new IntersectionObserver(

                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add("visible");


                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },

                {
                    threshold: 0.1
                }

            );


        revealItems.forEach(item => {

            observer.observe(item);

        });

    }


    activateRevealAnimations();



    /* ========================================
       ESCAPE KEY
    ======================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeProjectModal();

            }

        }
    );


});