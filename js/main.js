// toggle background active
const slideNavigator = name => {
  let slides = document.querySelectorAll('.bg-slide');
  slides.forEach(slide => {
    slide.classList.remove('active');
    if (slide.classList.contains(name)) {
      slide.classList.add('active');
    }
  });
};

// switch background
window.addEventListener('load', () => {
  const slideBtnList = document.querySelectorAll('.slide-btn');
  slideBtnList.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      slideBtnList.forEach(el => {
        el.classList.remove('active');
      });
      this.classList.add('active');
      slideNavigator(this.getAttribute('data-target'));
    });
  });
});

// activate sections
const sectionNavigator = name => {
  let sections = document.querySelectorAll('section');
  let header = document.querySelector('header');
  sections.forEach(section => {
    section.classList.remove('section-show');
    if (section.classList.contains(name)) {
      section.classList.add('section-show');
      header.classList.add('active');
    }
  });
};

// navigation to sections
window.addEventListener('load', () => {
  const navList = document.querySelectorAll('.nav-btn');
  navList.forEach(nav => {
    nav.addEventListener('click', function (e) {
      e.preventDefault();
      navList.forEach(el => {
        el.classList.remove('active');
      });
      this.classList.add('active');
      sectionNavigator(this.getAttribute('data-target'));
      screen.width < 768 && toggleMenu();
    });
  });
});

//initial navigation
const initNavigation = () => {
  const navList = document.querySelectorAll('.nav-btn');
  navList.forEach(el => {
    el.classList.remove('active');
    if (el.getAttribute('data-target') === 'about') {
      el.classList.add('active');
    }
  });
  sectionNavigator('about');
};

// reset header to initial state
const resetHeader = () => {
  let header = document.querySelector('header');
  header.classList.remove('active');
};

// toggle menu
const toggleMenu = () => {
  const menu = document.querySelector('.menu');
  const navMobile = document.querySelector('.nav-mobile');
  menu.classList.toggle('active');
  navMobile.classList.toggle('active');
};

function toggleMenu2() {
  var menu = document.getElementById('shareMenu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function searchPages() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.querySelector('.nav');
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}



//timer
const targetDate = new Date("2024-04-20T12:00:00"); // Set the target date and time (Saturday, April 20, 2024, at 12:00 PM)

const countdown = document.querySelector('.countdown-timer');
const daysSpan = countdown.querySelector('.days');
const hoursSpan = countdown.querySelector('.hours');
const minutesSpan = countdown.querySelector('.minutes');
const secondsSpan = countdown.querySelector('.seconds');

const updateTimer = () => {
  const now = new Date();
  const diff = targetDate - now;

  // Calculate remaining time in milliseconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Update displayed values with leading zeros for formatting
  daysSpan.textContent = days.toString().padStart(2, "0");
  hoursSpan.textContent = hours.toString().padStart(2, "0");
  minutesSpan.textContent = minutes.toString().padStart(2, "0");
  secondsSpan.textContent = seconds.toString().padStart(2, "0");

  // Check if countdown has finished
  if (diff <= 0) {
    clearInterval(timerInterval);
    countdown.textContent = "Wedding Day!"; // Change the message to "Wedding Day!"
  }
};

const timerInterval = setInterval(updateTimer, 1000); // Update timer every second

updateTimer(); // Call initially to display current values



