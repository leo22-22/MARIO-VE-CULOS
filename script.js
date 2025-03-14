let index = 0;
function showNextImage() {
    let images = document.querySelectorAll(".carousel-container img");
    images[index].classList.remove("active");

    index = (index + 1) % images.length;

    images[index].classList.add("active");
}

setInterval(showNextImage, 3000);
