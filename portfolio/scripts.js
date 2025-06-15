document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");
  burger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});


// Function to check if we've reached the bottom of the page
function isBottom() {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;  // Small offset to ensure it’s at the bottom
}


function revealImage() {
    const imgContainer = document.getElementById("img-container");
    imgContainer.style.bottom = "20px";
    imgContainer.style.opacity = "1";
}

function checkScrollPosition() {
    if (isBottom()) {
        revealImage();
    }
}


window.addEventListener('load', function() {

    requestAnimationFrame(checkScrollPosition);
});


window.addEventListener('scroll', function() {
    requestAnimationFrame(checkScrollPosition);
});
