const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const phrases = ["Web Developer", "CloudExify Intern", "Problem Solver"];
let pIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedEl = document.getElementById("typedText");

function typeLoop() {
    const current = phrases[pIndex];
    if (!isDeleting) {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1500);
            return;
        }
        setTimeout(typeLoop, 100);
    } else {
        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            pIndex = (pIndex + 1) % phrases.length;
            setTimeout(typeLoop, 300);
            return;
        }
        setTimeout(typeLoop, 50);
    }
}

typeLoop();
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target.querySelector('.fill');
            const percentText = entry.target.querySelector('.percent');
            const percent = entry.target.dataset.percent;

            fill.style.width = percent + '%';
            percentText.textContent = percent + '%';

            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.4 });

document.querySelectorAll('.skill').forEach(el => {
    skillObserver.observe(el);
});

const buttons = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll(".project-card");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        projects.forEach(project => {
            const tags = project.dataset.tags.split(",");

            if (filter === "all" || tags.includes(filter)) {
                project.style.display = "flex"; // because your project-card uses display:flex
            } else {
                project.style.display = "none";
            }
        });
    });
});
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        successMessage.textContent = "Please fill in all fields.";
        return;
    }

    successMessage.textContent = "Your message has been received!";

    form.reset();

});