const WHATSAPP_NUMBER = "2348147233645";
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");
const backTop = document.getElementById("backTop");
const year = document.getElementById("year");
const quoteForm = document.getElementById("quoteForm");
const serviceButtons = document.querySelectorAll(".service-btn");

year.textContent = newDate().getFullYear();

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("open");

    menuBtn.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        
        navbar.classList.remove("open");

        menuBtn.classList.remove("active");
    });
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 40){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 600){
        backTop.classList.add("show");
    } else {
        backTop.classList.remove("show");
    }
});

backTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

serviceButtons.forEach(function (button) {
    button.addEventListener("click", function (){
        const service = 
        button.getAttribute("data-service");
        const serviceSelect =
        document.getElementById("service");
        serviceSelect.value = service;
        document.getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });
    });
});

quoteForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = 
    document.getElementById("name").value.trim();
    const company = 
    document.getElementById("company").value.trim();
    const phone = 
    document.getElementById("phone").value.trim();
    const service = 
    document.getElementById("service").value.trim();
    const message =
    document.getElementById("message").value.trim();

    if (
        name === "" ||
        phone === "" ||
        service === "" ||
        message === ""
    ){
        alert("Please fill in all the required fields.");
        return;
    }

    if
    (WHATSAPP_NUMBER.includes("X")) {
        alert("Please add your whatsapp number inside script.js first.");
        return;
    }

    const whatsappMessage = 
    `Hello BlueArc Marine Intelligence,
    I would like to make a service request.
    Name: ${name}
    Company: ${company || "Not provided"}
    Phone: ${phone}
    Service: ${service}
    Request Details: ${message}
    Thank you.`;

    const encodedMessage = 
    encodeURIComponent(whatsappMessage);

    const whatsappURL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodedMessage;

    window.open(
        whatsappURL,
        "_blank"
    );
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        navbar.classList.remove("open");
        menuBtn.classList.remove("active");
    }
});