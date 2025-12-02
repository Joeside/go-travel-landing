// Année
(function () {
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
})();

// Email & mailto + formulaires + bouton nav
(function () {
    const user = "domain";
    const host = "go-travel.ca";
    const email = `${user}@${host}`;

    const subjectFR = "Offre pour le domaine Go-Travel.ca";
    const subjectEN = "Offer for the domain Go-Travel.ca";

    const mailtoFR = `mailto:${email}?subject=${encodeURIComponent(subjectFR)}`;
    const mailtoEN = `mailto:${email}?subject=${encodeURIComponent(subjectEN)}`;

    // Boutons dans le hero
    const offerFR = document.getElementById("offer-link-fr");
    if (offerFR) offerFR.setAttribute("href", mailtoFR);

    const offerEN = document.getElementById("offer-link-en");
    if (offerEN) offerEN.setAttribute("href", mailtoEN);

    // Bouton dans le header
    const navOffer = document.getElementById("nav-offer");
    if (navOffer) {
        navOffer.addEventListener("click", function () {
            window.location.href = mailtoFR;
        });
    }

    // Liens email texte
    const emailLinks = document.querySelectorAll(".js-email");
    emailLinks.forEach((link) => {
        link.textContent = email;
        link.setAttribute("href", mailtoFR);
    });

    // Formulaires
    function attachForm(form, isFR) {
        if (!form) return;
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = (form.querySelector("input[name='name']")?.value || "").trim();
            const from = (form.querySelector("input[name='from']")?.value || "").trim();
            const message = (form.querySelector("textarea[name='message']")?.value || "").trim();

            const subject = isFR ? subjectFR : subjectEN;
            let body = "";

            if (isFR) {
                body += "Nom: " + name + "\n";
                body += "Courriel: " + from + "\n\n";
                body += "Message:\n" + message;
            } else {
                body += "Name: " + name + "\n";
                body += "Email: " + from + "\n\n";
                body += "Message:\n" + message;
            }

            const href =
                "mailto:" +
                email +
                "?subject=" +
                encodeURIComponent(subject) +
                "&body=" +
                encodeURIComponent(body);

            window.location.href = href;
        });
    }

    attachForm(document.getElementById("contact-form-fr"), true);
    attachForm(document.getElementById("contact-form-en"), false);
})();

// Toggle FR / EN
(function () {
    const btnFr = document.getElementById("btn-fr");
    const btnEn = document.getElementById("btn-en");
    const heroFr = document.getElementById("hero-fr");
    const heroEn = document.getElementById("hero-en");
    const contactFr = document.getElementById("contact-fr");
    const contactEn = document.getElementById("contact-en");

    if (!btnFr || !btnEn || !heroFr || !heroEn || !contactFr || !contactEn) return;

    btnFr.addEventListener("click", function () {
        btnFr.classList.add("active");
        btnEn.classList.remove("active");
        heroFr.style.display = "block";
        heroEn.style.display = "none";
        contactFr.style.display = "block";
        contactEn.style.display = "none";
    });

    btnEn.addEventListener("click", function () {
        btnEn.classList.add("active");
        btnFr.classList.remove("active");
        heroEn.style.display = "block";
        heroFr.style.display = "none";
        contactEn.style.display = "block";
        contactFr.style.display = "none";
    });
})();
