function showMessage() {
    alert("Thanks for visiting our website!");
}

document.getElementById("loginBtn").addEventListener("click", function() {
    alert("Login page coming soon!");
});
function showMessage() {
    alert("Viva Señor Santo Niño! Viva Dinagyang Festival!");
}
// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
