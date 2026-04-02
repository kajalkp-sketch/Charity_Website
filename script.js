// Smooth scroll to donate
function scrollToDonate() {
    document.getElementById("donate").scrollIntoView({
        behavior: "smooth"
    });
}

// Donation form submit
document.getElementById("donationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("msg").innerText = "❤️ Thank you for your donation!";
});

// Scroll animation
let elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if (position < screen - 100) {
            el.classList.add("show");
        }
    });
});