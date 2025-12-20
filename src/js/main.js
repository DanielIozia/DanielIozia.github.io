// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  htmlElement.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenuBtn.classList.toggle('active');
  
  // Animate hamburger to X
  const bars = mobileMenuBtn.querySelectorAll('.bar');
  if (navLinks.classList.contains('active')) {
    bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
    bars[1].style.opacity = '0';
    bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
  } else {
    bars[0].style.transform = 'none';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'none';
  }
});

// Close mobile menu when clicking a link
links.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      const bars = mobileMenuBtn.querySelectorAll('.bar');
      bars[0].style.transform = 'none';
      bars[1].style.opacity = '1';
      bars[2].style.transform = 'none';
    }
  });
});

// Smooth Scroll for anchor links (polyfill for older browsers if needed, but CSS scroll-behavior usually handles it)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Account for fixed header
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});

// Reveal animations on scroll
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
  section.classList.add('fade-in-section');
  observer.observe(section);
});

// Contact Modal Logic
const modal = document.getElementById('contact-modal');
const openModalBtn = document.getElementById('open-contact-modal');
const closeModalBtn = document.getElementById('close-modal');
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

// Form Inputs
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const emailInput = document.getElementById('email');
const objectInput = document.getElementById('object');
const messageInput = document.getElementById('message');

// Open Modal
if (openModalBtn) {
  openModalBtn.addEventListener('click', () => {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  });
}

// Close Modal
function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  
  // Reset Form and Validation
  if (contactForm) {
    contactForm.reset();
    
    // Clear error states
    const errorGroups = contactForm.querySelectorAll('.form-group.error');
    errorGroups.forEach(group => group.classList.remove('error'));
    
    // Disable submit button
    if (submitBtn) {
      submitBtn.setAttribute('disabled', 'true');
    }
  }
}

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', closeModal);
}

// Close on outside click
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

// Validation Logic
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateForm() {
  if (!nameInput || !surnameInput || !emailInput || !objectInput || !messageInput) return;

  const isNameValid = nameInput.value.trim().length > 0;
  const isSurnameValid = surnameInput.value.trim().length > 0;
  const isEmailValid = validateEmail(emailInput.value);
  const isObjectValid = objectInput.value.trim().length > 0;
  const isMessageValid = messageInput.value.trim().length >= 10;

  // Update UI for errors
  toggleError(nameInput, isNameValid);
  toggleError(surnameInput, isSurnameValid);
  toggleError(emailInput, isEmailValid);
  toggleError(objectInput, isObjectValid);
  toggleError(messageInput, isMessageValid);

  // Enable/Disable Submit Button
  if (isNameValid && isSurnameValid && isEmailValid && isObjectValid && isMessageValid) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', 'true');
  }
}

function toggleError(input, isValid) {
  const formGroup = input.parentElement;
  if (!isValid && input.value.trim() !== '') {
    formGroup.classList.add('error');
  } else {
    formGroup.classList.remove('error');
  }
}

// Add event listeners for real-time validation
if (nameInput && surnameInput && emailInput && objectInput && messageInput) {
  [nameInput, surnameInput, emailInput, objectInput, messageInput].forEach(input => {
    input.addEventListener('input', validateForm);
    input.addEventListener('blur', validateForm); // Validate on blur too
  });
}

// Handle Submit - Logic moved to email.js
