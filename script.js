const texts = {
    ca: {
        siteTitle: "Petits Aventurers",
        navHome: "Inici",
        navAbout: "Nosaltres",
        navServices: "Serveis",
        navGallery: "Galeria",
        navContact: "Contacte",
        heroTitle: "Benvinguts a la Llar d'infants Petits Aventurers",
        heroDescription: "Un lloc segur i divertit per als teus fills.",
        heroBtn: "Contacta'ns",
        aboutTitle: "Qui Som?",
        aboutDescription: "A Petits Aventurers oferim un entorn acollidor i estimulant perquè els nens puguin explorar, aprendre i créixer.",
        servicesTitle: "Els Nostres Serveis",
        service1Title: "Cures Diürnes",
        service1Description: "Oferim una cura personalitzada per a cada infant amb activitats educatives i recreatives.",
        service2Title: "Educació Infantil",
        service2Description: "El nostre programa preescolar està dissenyat per desenvolupar habilitats cognitives i socials.",
        service3Title: "Activitats Recreatives",
        service3Description: "Organitzem jocs, manualitats i activitats que fomenten la creativitat i el treball en equip.",
        galleryTitle: "Galeria",
        contactTitle: "Contacte",
        contactNameLabel: "Nom:",
        contactEmailLabel: "Email:",
        contactMessageLabel: "Missatge:",
        contactSubmit: "Enviar",
        footerText: "&copy; 2024 Llar d'infants Petits Aventurers. Tots els drets reservats."
    },
    es: {
        siteTitle: "Pequeños Aventureros",
        navHome: "Inicio",
        navAbout: "Nosotros",
        navServices: "Servicios",
        navGallery: "Galería",
        navContact: "Contacto",
        heroTitle: "Bienvenidos a la Guardería Pequeños Aventureros",
        heroDescription: "Un lugar seguro y divertido para tus hijos.",
        heroBtn: "Contáctanos",
        aboutTitle: "¿Quiénes Somos?",
        aboutDescription: "En Pequeños Aventureros ofrecemos un ambiente acogedor y estimulante para que los niños puedan explorar, aprender y crecer.",
        servicesTitle: "Nuestros Servicios",
        service1Title: "Cuidados Diurnos",
        service1Description: "Ofrecemos cuidado personalizado para cada niño con actividades educativas y recreativas.",
        service2Title: "Educación Infantil",
        service2Description: "Nuestro programa preescolar está diseñado para desarrollar habilidades cognitivas y sociales.",
        service3Title: "Actividades Recreativas",
        service3Description: "Organizamos juegos, manualidades y actividades que fomentan la creatividad y el trabajo en equipo.",
        galleryTitle: "Galería",
        contactTitle: "Contacto",
        contactNameLabel: "Nombre:",
        contactEmailLabel: "Email:",
        contactMessageLabel: "Mensaje:",
        contactSubmit: "Enviar",
        footerText: "&copy; 2024 Guardería Pequeños Aventureros. Todos los derechos reservados."
    },
    en: {
        siteTitle: "Little Adventurers",
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Services",
        navGallery: "Gallery",
        navContact: "Contact",
        heroTitle: "Welcome to Little Adventurers Daycare",
        heroDescription: "A safe and fun place for your children.",
        heroBtn: "Contact Us",
        aboutTitle: "Who Are We?",
        aboutDescription: "At Little Adventurers, we offer a warm and stimulating environment where children can explore, learn, and grow.",
        servicesTitle: "Our Services",
        service1Title: "Daycare",
        service1Description: "We offer personalized care for each child with educational and recreational activities.",
        service2Title: "Preschool Education",
        service2Description: "Our preschool program is designed to develop cognitive and social skills.",
        service3Title: "Recreational Activities",
        service3Description: "We organize games, crafts, and activities that foster creativity and teamwork.",
        galleryTitle: "Gallery",
        contactTitle: "Contact",
        contactNameLabel: "Name:",
        contactEmailLabel: "Email:",
        contactMessageLabel: "Message:",
        contactSubmit: "Submit",
        footerText: "&copy; 2024 Little Adventurers Daycare. All rights reserved."
    }
};

function changeLanguage(lang) {
    document.getElementById("site-title").textContent = texts[lang].siteTitle;
    document.getElementById("nav-home").textContent = texts[lang].navHome;
    document.getElementById("nav-about").textContent = texts[lang].navAbout;
    document.getElementById("nav-services").textContent = texts[lang].navServices;
    document.getElementById("nav-gallery").textContent = texts[lang].navGallery;
    document.getElementById("nav-contact").textContent = texts[lang].navContact;
    document.getElementById("hero-title").textContent = texts[lang].heroTitle;
    document.getElementById("hero-description").textContent = texts[lang].heroDescription;
    document.getElementById("hero-btn").textContent = texts[lang].heroBtn;
    document.getElementById("about-title").textContent = texts[lang].aboutTitle;
    document.getElementById("about-description").textContent = texts[lang].aboutDescription;
    document.getElementById("services-title").textContent = texts[lang].servicesTitle;
    document.getElementById("service1-title").textContent = texts[lang].service1Title;
    document.getElementById("service1-description").textContent = texts[lang].service1Description;
    document.getElementById("service2-title").textContent = texts[lang].service2Title;
    document.getElementById("service2-description").textContent = texts[lang].service2Description;
    document.getElementById("service3-title").textContent = texts[lang].service3Title;
    document.getElementById("service3-description").textContent = texts[lang].service3Description;
    document.getElementById("gallery-title").textContent = texts[lang].galleryTitle;
    document.getElementById("contact-title").textContent = texts[lang].contactTitle;
    document.getElementById("contact-name-label").textContent = texts[lang].contactNameLabel;
    document.getElementById("contact-email-label").textContent = texts[lang].contactEmailLabel;
    document.getElementById("contact-message-label").textContent = texts[lang].contactMessageLabel;
    document.getElementById("contact-submit").textContent = texts[lang].contactSubmit;
    document.getElementById("footer-text").innerHTML = texts[lang].footerText;
}
