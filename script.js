const contactForm = document.getElementById("contact-form");
document.getElementById("current-year").textContent = new Date().getFullYear();

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("client-name").value.trim();
    const email = document.getElementById("client-email").value.trim();
    const phone = document.getElementById("client-phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    contactForm.reset();
});
