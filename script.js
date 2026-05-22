// Smooth Animation

const hiddenElements = document.querySelectorAll(
".skill-card,.project-card,.cert-card,.timeline-item,.about-card"
);

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach((el) => {

el.classList.add("hidden");

observer.observe(el);

});

// Active Navbar

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach((section) => {

const sectionTop = section.offsetTop;

if(window.scrollY >= sectionTop - 200){

current = section.getAttribute("id");

}

});

navLinks.forEach((link) => {

link.classList.remove("active");

if(link.getAttribute("href") === `#${current}`){

link.classList.add("active");

}

});

});

// EMAILJS

emailjs.init("75MyGekb7Y6ON0fOn");

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"service_yobi6ku",
"template_nq2dsn1",
this
)
.then(() => {

alert("Thank you! Your message has been sent to Shrinjal Soni.");

this.reset();

})
.catch((error) => {

alert("Failed to send message!");

console.log(error);

});

});