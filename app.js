`use strict`;

const tabBox = document.querySelector('.tab-btns');
const tabBtns = document.querySelectorAll('.tab--btn');
const items = document.querySelectorAll('.item');
const faqBox = document.querySelector('.faq-flex');

tabBox.addEventListener('click', function (e) {
  let pressedButton = e.target;
  const tabs = document.querySelector('.tabs').children;
  const transforms = [];

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].children[0].style.transform = 'translateX(-200%)';
    tabs[i].children[1].style.transform = 'translateX(200%)';
    transforms.push(tabs[i].children[2].style.transform);

    tabs[i].children[2].style.transform = 'translateX(-200%)';
  }
  setTimeout(function () {
    for (let i = 0; i < tabs.length; i++) {
      if (pressedButton.dataset.tab === tabs[i].dataset.tab) {
        tabs[i].classList.remove('hidden');
        tabBtns.forEach((btn) => {
          btn.classList.remove('active');
        });
        pressedButton.classList.add('active');
      } else {
        tabs[i].classList.add('hidden');
      }
    }
  }, 700);

  setTimeout(function () {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].children[0].style.transform = 'translateX(0%)';
      tabs[i].children[1].style.transform = 'translateX(0%)';
      tabs[i].children[2].style.transform = `${transforms[i]}`;
    }
  }, 1000);
});

const accordion = document.querySelectorAll('.item');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('open');
  });
}

function validateEmail(email) {
  const re =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return re.test(String(email).toLowerCase());
}

const submitBtn = document.querySelector('.btn-form');
const emailInput = document.querySelector('.input');
const alertIcon = document.querySelector('.alert-icon');
const errorMessage = document.querySelector('.error-text');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const check = validateEmail(emailInput.value);
  if (!check) {
    emailInput.classList.add('error-border');
    alertIcon.style.opacity = '100';
    errorMessage.style.opacity = '100';
  } else {
    //Submit the form
  }
  console.log(validateEmail(emailInput.value));
});

emailInput.addEventListener('keydown', function () {
  emailInput.classList.remove('error-border');
  alertIcon.style.opacity = '0';
  errorMessage.style.opacity = '0';
});

const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNav.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});
