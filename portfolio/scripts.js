import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");
  burger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});