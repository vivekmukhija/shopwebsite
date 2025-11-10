const homeBtn = document.querySelector(".homeBtn");
const sweetBtn = document.querySelector(".sweetBtn");
const dairyBtn = document.querySelector(".dairyBtn");
const contactUsBtn = document.querySelector(".contactusBtn");


homeBtn.addEventListener('click', function() {
  window.location.href= "/index"
});

sweetBtn.addEventListener('click', function() {
  window.location.href = "/sweets";
});

dairyBtn.addEventListener('click', function() {
  window.location.href = "/dairy";
});

contactUsBtn.addEventListener('click', function() {
  window.location.href = "/contactus";
});

function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropdown-btn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};