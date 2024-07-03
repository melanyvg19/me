const images = document.querySelectorAll('.image-container img');

function showImages() {
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('visible');
        }, index * 500);
    });
}
images.forEach(img => {
    img.addEventListener('mouseover', showImages);
});

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("contactButton");
    const span = document.getElementsByClassName("close-button")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});