
// projects ka data
const projects = [
    {
        id: 1,
        title: "CampusMart",
        description: "A responsive campus marketplace website where students can buy and sell items.",
        tech: ["HTML", "CSS", "JavaScript"],
        year: 2026,
        link: "https://beingnayab576.github.io/CampusMart-static/",
        image: "images/campusmart.jpg"
    },
    {
        id: 2,
        title: "Calculator App",
        description: "A sample calculator interface for performing basic mathematical operations.",
        tech: ["HTML", "CSS", "JavaScript"],
        year: 2026,
        link: "https://example.com",
        image: "images/calculator.jpg"
    },
    {
        id: 3,
        title: "Landing Page",
        description: "A sample responsive landing page design.",
        tech: ["HTML", "CSS"],
        year: 2026,
        link: "https://example.com",
        image: "images/landingpage.jpg"
    },
    {
        id: 4,
        title: "To Do List",
        description: "A sample task management application interface.",
        tech: ["HTML", "CSS", "JavaScript"],
        year: 2026,
        link: "https://example.com",
        image: "images/todolist.jpg"
    },
    {
        id: 5,
        title: "Login Page",
        description: "A sample login page with a simple and clean design.",
        tech: ["HTML", "CSS"],
        year: 2026,
        link: "https://example.com",
        image: "images/login.jpg"
    },
    {
        id: 6,
        title: "Weather App",
        description: "A sample weather application interface.",
        tech: ["HTML", "CSS", "JavaScript"],
        year: 2026,
        link: "https://example.com",
        image: "images/weather.jpg"
    }
];


// project page ke elements
const projectContainer = document.getElementById("project-container");
const searchInput = document.getElementById("project-search");
const technologyFilter = document.getElementById("technology-filter");
const projectCount = document.getElementById("project-count");


// project cards show karne ka function
function displayProjects(projectList) {

    if (!projectContainer) return;

    projectContainer.replaceChildren();

    if (projectCount) {
        projectCount.textContent = `${projectList.length} projects found`;
    }

    // agar koi project match nahi karta
    if (projectList.length === 0) {

        const message = document.createElement("p");
        message.textContent = "No projects found.";

        projectContainer.appendChild(message);
        return;
    }

    // har project ka card banana
    projectList.forEach(function(project) {

        const card = document.createElement("article");
        card.className = "project-card";

        // project ki image show karna
        if (project.image) {

            const image = document.createElement("img");

            image.src = project.image;
            image.alt = project.title + " project screenshot";
            image.width = 400;
            image.height = 250;

            card.appendChild(image);

        }

        // project ka title
        const title = document.createElement("h2");
        title.textContent = project.title;

        // project ki description
        const description = document.createElement("p");
        description.textContent = project.description;

        // project ki technologies
        const technologies = document.createElement("p");
        technologies.textContent = "Technologies: " + project.tech.join(", ");

        // project ka year
        const year = document.createElement("p");
        year.textContent = "Year: " + project.year;

        // project ka link
        if (project.link) {

            const link = document.createElement("a");

            link.textContent = "View Project";
            link.href = project.link;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            card.appendChild(link);

        } else {

            const sampleText = document.createElement("p");
            sampleText.textContent = project.id === 1
                ? "Add your CampusMart live link"
                : "Sample project";

            card.appendChild(sampleText);

        }

        // tamam elements card mein add karna
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(technologies);
        card.appendChild(year);

        projectContainer.appendChild(card);

    });

}


// search aur filter function
function filterProjects() {

    if (!searchInput || !technologyFilter) return;

    const searchText = searchInput.value.toLowerCase().trim();
    const selectedTechnology = technologyFilter.value;

    const filteredProjects = projects.filter(function(project) {

        // title aur technologies mein search karna
        const titleMatch = project.title.toLowerCase().includes(searchText);

        const techMatch = project.tech.some(function(technology) {
            return technology.toLowerCase().includes(searchText);
        });

        const searchMatch = titleMatch || techMatch;

        // selected technology ke according filter karna
        const filterMatch =
            selectedTechnology === "all" ||
            project.tech.includes(selectedTechnology);

        return searchMatch && filterMatch;

    });

    displayProjects(filteredProjects);

}


// search input ka event
if (searchInput) {
    searchInput.addEventListener("input", filterProjects);
}


// technology filter ka event
if (technologyFilter) {
    technologyFilter.addEventListener("change", filterProjects);
}


// starting mein tamam projects show karna
if (projectContainer) {
    displayProjects(projects);
}


// dark mode ka button
const themeButton = document.getElementById("theme-toggle");


// pehle se saved theme check karna
let savedTheme = localStorage.getItem("portfolio-theme") || "system";


// theme apply karne ka function
function applyTheme(theme) {

    document.documentElement.setAttribute("data-theme", theme);

    if (themeButton) {

        const darkModeActive = theme === "dark";

        themeButton.textContent = darkModeActive ? "Light Mode" : "Dark Mode";

        themeButton.setAttribute(
            "aria-pressed",
            String(darkModeActive)
        );

    }

}


// saved theme apply karna
applyTheme(savedTheme);


// dark mode button ka event
if (themeButton) {

    themeButton.addEventListener("click", function() {

        savedTheme = savedTheme === "dark" ? "light" : "dark";

        localStorage.setItem("portfolio-theme", savedTheme);

        applyTheme(savedTheme);

    });

}


// contact form ka element
const contactForm = document.getElementById("contact-form");


// contact form validation
if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // form ke inputs lena
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");
        const consent = document.getElementById("consent");

        // error messages ke elements
        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const subjectError = document.getElementById("subject-error");
        const messageError = document.getElementById("message-error");
        const sourceError = document.getElementById("source-error");
        const consentError = document.getElementById("consent-error");
        const successMessage = document.getElementById("form-success");

        let isValid = true;

        // purane errors clear karna
        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";
        sourceError.textContent = "";
        consentError.textContent = "";
        successMessage.textContent = "";

        // purani invalid settings remove karna
        name.removeAttribute("aria-invalid");
        email.removeAttribute("aria-invalid");
        subject.removeAttribute("aria-invalid");
        message.removeAttribute("aria-invalid");
        consent.removeAttribute("aria-invalid");

        // name check karna
        if (name.value.trim().length < 3) {

            nameError.textContent = "Name must contain at least 3 characters.";

            name.setAttribute("aria-invalid", "true");

            isValid = false;

        }

        // email check karna
        if (email.value.trim() === "" || !email.validity.valid) {

            emailError.textContent = "Please enter a valid email address.";

            email.setAttribute("aria-invalid", "true");

            isValid = false;

        }

        // subject check karna
        if (subject.value === "") {

            subjectError.textContent = "Please select a subject.";

            subject.setAttribute("aria-invalid", "true");

            isValid = false;

        }

        // message check karna
        if (message.value.trim().length < 20) {

            messageError.textContent = "Message must contain at least 20 characters.";

            message.setAttribute("aria-invalid", "true");

            isValid = false;

        }

        // radio button check karna
        const selectedSource = document.querySelector(
            'input[name="source"]:checked'
        );

        const sourceFieldset = contactForm.querySelector("fieldset");

        if (!selectedSource) {

            sourceError.textContent = "Please select an option.";

            sourceFieldset.setAttribute("aria-invalid", "true");

            isValid = false;

        } else {

            sourceFieldset.removeAttribute("aria-invalid");

        }

        // consent checkbox check karna
        if (!consent.checked) {

            consentError.textContent = "Please accept the agreement.";

            consent.setAttribute("aria-invalid", "true");

            isValid = false;

        }

        // agar tamam information sahi hai
        if (isValid) {

            successMessage.textContent =
                "Your message has been submitted successfully!";

            contactForm.reset();

        }

    });

}

// show current year in footer
const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
