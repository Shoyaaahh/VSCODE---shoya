// =========================================
// Personal Information Page — script.js
// =========================================

// ---------- Boot screen ----------
const bootScreen = document.getElementById("bootScreen");
const bootButton = document.getElementById("bootButton");

document.body.classList.add("boot-locked");

function enterPage() {
  bootScreen.classList.add("is-closing");
  document.body.classList.remove("boot-locked");
  bootButton.disabled = true;

  window.setTimeout(function () {
    bootScreen.remove();
  }, 650);
}

bootButton.addEventListener("click", enterPage);

// ---------- Introduce Me / Show Greeting feature ----------
const greetBtn = document.getElementById("greetBtn");
const visitorNameInput = document.getElementById("visitorName");
const greetResult = document.getElementById("greetResult");

function showGreeting() {
  // Read a value from a page input
  const visitorName = visitorNameInput.value.trim();

  let message;

  // if-else condition
  if (visitorName === "") {
    message = `Hey there, stranger! I'm Dimax — type your name so I can greet you properly.`;
  } else {
    message = `Hey ${visitorName}! Thanks for stopping by my page — I'm Dimax, nice to meet you.`;
  }

  // Visible DOM change
  greetResult.textContent = message;
  greetResult.classList.add("show");
}

greetBtn.addEventListener("click", showGreeting);

// Allow pressing Enter inside the input to trigger the greeting too
visitorNameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    showGreeting();
  }
});

// ---------- Contact form feedback ----------
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("emailAddress").value.trim();
  const message = document.getElementById("messageBox").value.trim();

  if (fullName === "" || email === "" || message === "") {
    formNote.textContent = "Please fill out every field before submitting.";
  } else {
    formNote.textContent = `Thanks, ${fullName}! Your message has been noted — I'll get back to you soon.`;
    contactForm.reset();
  }
});

// ---------- Active nav link highlight on scroll ----------
const navLinks = document.querySelectorAll("#navMenu .nav-link");
const sections = document.querySelectorAll("section[id], header[id]");

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY + 120;

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(function (link) {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active-link");
        }
      });
    }
  });
});