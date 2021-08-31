`use strict`;

const tabBtns = document.querySelector('.tabs-btns');
const btns = document.querySelectorAll('.tab-btn');
const tabImage = document.querySelector('.tab-img');
const tabTitle = document.querySelector('.tab-title');
const tabText = document.querySelector('.tab-description');

const tabInfo = [
  {
    image: 'images/illustration-features-tab-1.svg',
    title: 'Bookmark in one click',
    text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
  },
  {
    image: 'images/illustration-features-tab-2.svg',
    title: 'Intelligent search',
    text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  {
    image: 'images/illustration-features-tab-3.svg',
    title: 'Share your bookmarks',
    text: 'Easility share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button',
  },
];

tabBtns.addEventListener('click', function (e) {
  tabImage.setAttribute('src', tabInfo[e.target.dataset.tab - 1].image);
  tabTitle.textContent = `${tabInfo[e.target.dataset.tab - 1].title}`;
  tabText.textContent = `${tabInfo[e.target.dataset.tab - 1].text}`;

  btns.forEach((btn) => {
    btn.classList.remove('active');
    btn.removeAttribute('aria-live');
  });

  e.target.classList.add('active');
  e.target.setAttribute('aria-live', 'assertive');
});

function validateEmail(email) {
  const re =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return re.test(String(email).toLowerCase());
}

const formInput = document.querySelector('.email-input');
const submitBtn = document.querySelector('.btn--form');
const alertIcon = document.querySelector('.alert-icon');
const errorMessage = document.querySelector('.error-text');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const check = validateEmail(formInput.value);
  if (!check) {
    formInput.classList.add('error');
    alertIcon.style.opacity = '100';
    setTimeout(function () {
      errorMessage.style.opacity = '100';
    }, 150);
    formInput.setAttribute('aria-invalid', 'true');
    formInput.setAttribute('aria-describedBy', 'error');
  } else {
    //Submit the form
    formInput.setAttribute('aria-live', 'assertive');
  }
});

formInput.addEventListener('keydown', function () {
  errorMessage.style.opacity = '0';
  alertIcon.style.opacity = '0';
  setTimeout(function () {
    formInput.classList.remove('error');
  }, 150);
  formInput.removeAttribute('aria-invalid');
  formInput.removeAttribute('aria-describedBy');
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

const accordItemsBox = document.querySelector('.faq-box');

// accordItemsBox.addEventListener('click', function (e) {
//   console.log(e.target.closest('.faq-question'));
//   const itemIcon = e.target.closest('.faq-question').children[0].children[0];
//   itemIcon.style.transform = 'rotate(180deg)';
// });
