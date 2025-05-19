// Wait for DOM content
document.addEventListener('DOMContentLoaded', () => {
    // Animate skill bars when skills section is in view
    const skillLevels = document.querySelectorAll('.skill-level');
    const skillsSection = document.getElementById('skills');
  
    const animateSkills = () => {
      skillLevels.forEach(skill => {
        skill.style.width = skill.getAttribute('style'); // width set in inline style from HTML
      });
    };
  
    const options = {
      root: null,
      threshold: 0.3,
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkills();
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    observer.observe(skillsSection);
  
    // Smooth scrolling on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Active link switching on scroll
    window.addEventListener('scroll', () => {
      let current = '';
      const sections = document.querySelectorAll('section');
      const scrollY = window.pageYOffset;
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 70;
        if (scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
  
      // Back to top button
      const backToTopBtn = document.getElementById('backToTopBtn');
      if (scrollY > 300) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });
  
    // Back to top button click
    document.getElementById('backToTopBtn').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      once: true,
    });
  });
  
