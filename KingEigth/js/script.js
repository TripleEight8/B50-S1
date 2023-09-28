// toggle class aktive
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav//
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
const name = prompt("siapa nama anda?");
alert(`Hello ${name} kamu adalah penghuni neraka. jangan lupa ngopi dipagi hari jika mampu!!`);
