# Personal Portfolio Website
## Project Report — CloudExify Summer Internship 2026

**Submitted By:** Muhammad Awais
**Registrtion Number:** CX-INT-2026-GEN-0154
**Technology Stack:** HTML5, CSS3, JavaScript (Vanilla JS)
**Project Type:** Frontend Responsive Portfolio Website
**Development Environment:** Visual Studio Code, Google Chrome, Git & GitHub
**Submitted To:** CloudExify Summer Internship 2026


## Table of Contents

1. Introduction
2. Objectives
3. Scope & Limitations
4. Technologies Used
5. Folder Structure
6. Website Modules
7. JavaScript Functionalities
8. Responsive Design
9. Testing
10. Future Enhancements
11. Learning Outcomes
12. Conclusion
13. References


## 1. Introduction

A personal portfolio website gives a developer a professional platform to showcase skills, projects, and contact information beyond what a resume can convey. This project is a responsive personal portfolio built entirely with **HTML5, CSS3, and Vanilla JavaScript** — no frontend framework — developed as part of the CloudExify Summer Internship 2026.

The site uses a dark gradient theme with glassmorphism styling, and includes several interactive features: a typing animation in the hero section, a responsive hamburger navigation menu, animated skill bars, category-based project filtering, and client-side contact form validation.


## 2. Objectives

- Design a clean, professional, responsive interface for desktop, tablet, and mobile.
- Introduce the developer through an engaging hero section with a typing effect.
- Display technical skills using animated progress bars.
- Showcase projects in organized, filterable cards.
- Provide a validated contact form.
- Follow semantic HTML and a maintainable folder structure.


## 3. Scope & Limitations

The project is entirely frontend — there is no backend, database, or authentication. All content (skills, projects, text) is static and hardcoded into the HTML. The contact form performs only client-side validation; it does not send emails or store messages. Social media links in the footer are currently placeholders.

This scope is intentional for the current stage of the project and leaves room for the backend/database work outlined in Section 10 (Future Enhancements).


## 4. Technologies Used

**HTML5** — Provides semantic structure (`<header>`, `<nav>`, `<section>`, `<footer>`, `<form>`) for the navigation bar, hero, about, skills, projects, contact, and footer sections.

**CSS3** — Handles all visual styling: Flexbox layouts, responsive media query breakpoints, gradient backgrounds, glassmorphism (blurred, semi-transparent panels), rounded corners, box shadows, hover transitions, and two Google Fonts (Poppins for body text, Space Grotesk for headings).

**JavaScript (Vanilla)** — Implements all interactivity: the hamburger menu toggle, the typing animation, skill-bar animation via the Intersection Observer API, project filtering, and contact form validation. No external libraries are used.

**Development tools** — VS Code (editor, Live Server), Google Chrome DevTools (debugging, responsive testing), Git/GitHub (version control, hosting) and Vercel(Deployment).


## 5. Folder Structure

Portfolio Website
│
├── index.html
│
├── css
│   └── style.css
│
├── js
│   └── script.js
│
├── assets
│   ├── profile.jpg
│   ├── logo.avif                    (favicon)
│   ├── play.webp                 (Spotify clone thumbnail)
│   ├── task management.webp      (Task manager thumbnail)
│   ├── e-commerce.webp           (E-commerce thumbnail)
│   └── Awais-CV.pdf
│
└── README.md

Separating HTML, CSS, JavaScript, and assets into dedicated folders keeps the project organized and easy to maintain as it grows.


## 6. Website Modules

### 6.1 Navigation
A fixed, blurred navigation bar with links to About, Skills, Projects, and Contact. On mobile, links collapse behind a hamburger icon; selecting a link auto-closes the menu.

### 6.2 Hero Section
Displays a profile photo, name, an animated typing effect cycling through "Web Developer," "CloudExify Intern," and "Problem Solver," a short intro, and two buttons: **View Projects** (scrolls to the projects section) and **Download Resume** (downloads `Awais-CV.pdf`).

### 6.3 About
A short bio covering Computer Science background, interest in web development, and career goals.

### 6.4 Skills
Five skills — HTML, CSS, JavaScript, React, and AI — each shown as an animated progress bar that fills to its percentage value when scrolled into view.

### 6.5 Projects
Three projects are currently listed, each in a card with an image, description, and technology tags:

The portfolio currently features three projects.
The Spotify Music Player Clone was built using HTML, CSS, JavaScript, and Git. 
The Task Management System uses React, TypeScript, HTML, and CSS. 
The E-Commerce Shopping Website is built with React, Node.js, Express.js, and Tailwind CSS.

A filter bar (All / HTML-CSS / JavaScript / TypeScript / React) lets visitors narrow the list by technology.

### 6.6 Contact
A form with name, email, and message fields. JavaScript blocks submission if any field is empty and shows a success message on valid submission.

### 6.7 Footer
Repeats the navigation links, lists social links (GitHub, LinkedIn, Instagram — Instagram is currently a placeholder), and shows the copyright line.


## 7. JavaScript Functionalities


**Hamburger menu**:  Click listener toggles an `active` class on the nav list, showing/hiding it on small screens.
**Typing animation**:  An array of phrases is typed out character by character using recursive `setTimeout` calls, separated by `\|` between phrases. 
**Skill bar animation**: An `IntersectionObserver` watches each `.skill` element; when it enters the viewport, its bar fills to the stored `data-percent` value and then stops observing (runs once).
**Project filtering**: Each project card has a `data-tags` attribute; clicking a filter button compares the selected category against each card's tags and toggles `display: flex` / `display: none`.
**Form validation**: On submit, the form checks that name, email, and message are non-empty before showing a success message and resetting the fields.


## 8. Responsive Design

Media queries adjust the layout at four breakpoints (≤480px, ≤768px, ≤992px, ≥1400px). Flexbox is used throughout for the nav bar, hero, project cards, skills, and footer so elements reflow naturally. Below 768px, the horizontal nav is replaced by the hamburger menu; below 992px, project cards stack vertically instead of side-by-side.


## 9. Testing

### Functional Testing
All core interactive features were tested manually and passed. 
Clicking each navigation link correctly scrolls to its corresponding section. 
The hamburger menu opens and closes properly on mobile screen widths. 
The typing animation in the hero section runs through all three phrases without errors. 
Skill bars animate to their correct percentage once when scrolled into view, and don't re-trigger on subsequent scrolls. 
The project filter correctly shows and hides project cards based on the selected technology tag. 
The contact form blocks submission when any field is left empty, and displays a success message and resets the fields when all fields are filled in correctly.

### Responsive Testing
The website was tested across four common screen sizes and passed at each: 
desktop (1920×1080) 
laptop (1366×768)
tablet (768×1024)
mobile (375×667)
At every resolution, the layout adjusted correctly — the navigation, hero section, skill bars, project cards, and footer all reflowed as expected without overlapping or breaking.

### Browser Testing

Tested on Chrome, Edge, and Firefox — all passed.


## 10. Future Enhancements

- **Backend & database** (Node.js/Express + MongoDB) to store contact messages and manage projects dynamically.
- **Real email delivery** for the contact form via EmailJS or Nodemailer.
- **Live deployment** of each project (GitHub Pages / Vercel), replacing static "coming soon" states with working demos or, at minimum, links to source code.
- **GitHub API integration** to auto-display repositories and contribution stats.
- **Dark/light theme toggle** for accessibility.
- **Real social links** to replace the current placeholders.


## 11. Learning Outcomes

Building this project strengthened practical skills in semantic HTML, CSS Flexbox and responsive media queries, and core JavaScript concepts including DOM manipulation, event handling, the Intersection Observer API, and form validation. It also reinforced the value of a clean, modular folder structure and consistent use of Git for version control.


## 12. Conclusion

The Personal Portfolio Website meets its core objective: a responsive, interactive frontend built with HTML5, CSS3, and Vanilla JavaScript that presents the developer's skills and projects in a modern interface. It has no backend yet and its listed projects aren't deployed live, but the architecture is straightforward to extend with the backend, database, and deployment work outlined above.


## References

1. MDN Web Docs — [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
2. W3Schools — [HTML](https://www.w3schools.com/html/), [CSS](https://www.w3schools.com/css/), [JavaScript](https://www.w3schools.com/js/)
3. [Google Fonts](https://fonts.google.com/)
4. [Visual Studio Code Docs](https://code.visualstudio.com/docs)
5. [Git Docs](https://git-scm.com/docs) / [GitHub Docs](https://docs.github.com/)


## Project Information
**Project Title:** Personal Portfolio Website
**Developed By:** Muhammad Awais
**Registrtion Number:** CX-INT-2026-GEN-0154
**Technology Stack:** HTML5, CSS3, JavaScript
**Internship:** CloudExify Summer Internship 2026