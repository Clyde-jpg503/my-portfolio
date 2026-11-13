// SELECT NAVIGATION LINKS
const navLinks = document.querySelectorAll("nav ul li a");

// SELECT WEBSITE SECTIONS
const sections = document.querySelectorAll(
    "#home, #about, #skills, #achievements, #contacts"
);

// SCROLL OBSERVER
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `nav ul li a[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

}, {
    threshold: 0,
    rootMargin: "-20% 0px -60% 0px"
});

// OBSERVE EACH SECTION
sections.forEach(section => {
    observer.observe(section);
});
