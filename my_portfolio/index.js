
    // Toggle mobile menu
    const toggleBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    // Scroll animations
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add("show");
        }
      });
    });

    // Scroll-to-top button
    const topBtn = document.getElementById("topBtn");
    window.onscroll = function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    };

    function topFunction() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }