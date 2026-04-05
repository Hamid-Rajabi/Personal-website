let theme = localStorage.getItem("theme") || ("dark")
const themeSwitch = document.getElementById("themeSwitch");
const aboutimg = document.getElementById("aboutimg");
const aboutimge = document.getElementById("aboutimge");

// ===============Loading=============

window.addEventListener("load", ()=>{
  document.getElementById('loader').style.display='none';
})

// ===========mousglow============

const glow = document.getElementById("mouse-glow")

document.addEventListener("mousemove" , (e)=>{
  glow.style.left = e.clientX + "px"
  glow.style.top = e.clientY + "px"
})


// ================link scroll==================
document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
  
      const navbarCollapse = document.querySelector('.navbar-collapse');
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      
      if (window.innerWidth < 992) {
  
        e.preventDefault(); // جلوگیری از اسکرول پیش فرض
  
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        bsCollapse.hide(); // اول ببند
  
        // صبر کن تا انیمیشن بسته شدن تموم شه
        navbarCollapse.addEventListener('hidden.bs.collapse', function () {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }, { once: true });
  
      }
  
    });
  });


// =================typed=============
const typed = new Typed ("#typed-text" , {
  strings:["Full-Stack Web Developer" , "Learning. Building. Improving." , "Focused on Clean and Modern Web Apps"],
  typeSpeed : 70,
  backSpeed : 50,
  backDelay : 1200,
  startDelay: 500,
  smartBackspace:true,
  loop: true
});





// ================modal==============

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    const formData = new FormData(form); 

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    }).then(response => {

      if (response.ok) {
        form.reset();
        form.classList.remove("was-validated");

        const successModal = new bootstrap.Modal(
          document.getElementById("successModal")
        );
        successModal.show("✔");
      } else {
        alert("Something went wrong ❌. Please try again.");
      }

    }).catch(() => {
      alert("Network error ❌. Please try again.");
    });
  });
});




// ================= THEME =================

function applyTheme(){

if(theme === "light"){
  document.body.classList.remove("bg-dark","text-light")
  document.body.classList.add("bg-light","text-dark")

  themeSwitch.checked = true
  aboutimg.src = "IMG/02.jpg"
  aboutimge.src = "IMG/02.jpg"

}else{
  document.body.classList.add("bg-dark","text-light")
  document.body.classList.remove("bg-light","text-dark")

  themeSwitch.checked = false
  aboutimg.src = "IMG/01.jpg"
  aboutimge.src = "IMG/01.jpg"
}}

applyTheme()

themeSwitch.addEventListener("change", ()=>{
    theme = themeSwitch.checked ? "light" : "dark"
    localStorage.setItem("theme", theme)
    applyTheme()

})





// ================= EmptyForm ================

(()=>{
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form =>{
    form.addEventListener('submit', event =>{
      if (!form.checkValidity()){
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    },false)
  })
});