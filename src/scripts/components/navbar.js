import {
  navButton,
  navLinkList,
  navLinksBackdrop,
  navLinks,
} from '../utils/constants';

let lastKnownScrollPos = 0;
let ticking = false;
const sectionPositions = {};

function setSectionPositions() {
  const gallery = document.querySelector('.gallery');
  const products = document.querySelector('.products');
  sectionPositions.info = 0;
  sectionPositions.products = products.offsetTop;
  sectionPositions.gallery = gallery.offsetTop;
  sectionPositions.contact =
    document.body.scrollHeight - window.innerHeight - 5;
}

function hasActiveNavLinkChanged(newSectionName) {
  const activeNavLink = navLinks.find((navLink) =>
    navLink.classList.contains('nav-bar__link-text_active'),
  );
  return !activeNavLink.href.includes(newSectionName);
}

function activateNavLink(sectionName) {
  if (!hasActiveNavLinkChanged(sectionName)) return;
  navLinks.forEach((navLink) => {
    navLink.classList.remove('nav-bar__link-text_active');
  });
  const activeNavLink = navLinks.find((navLink) =>
    navLink.href.includes(sectionName),
  );
  activeNavLink.classList.add('nav-bar__link-text_active');
}

function activateNavLinks(scrollPos) {
  const { info, gallery, products, contact } = sectionPositions;
  const roundedScrollPos = Math.round(scrollPos);
  let section = '';
  if (roundedScrollPos >= info && roundedScrollPos < products) {
    section = 'info';
  } else if (roundedScrollPos >= products && roundedScrollPos < gallery) {
    section = 'products';
  } else if (roundedScrollPos >= gallery && roundedScrollPos < contact) {
    section = 'gallery';
  } else {
    section = 'contact';
  }
  activateNavLink(section);
}

function handleScroll() {
  lastKnownScrollPos = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      activateNavLinks(lastKnownScrollPos);
      ticking = false;
    });

    ticking = true;
  }
}

function removeNavList() {
  navButton.classList.remove('nav-bar__btn_exit');
  navLinkList.classList.remove('nav-bar__links_show');
  navLinksBackdrop.classList.remove('backdrop_show');
}

function toggleNavList() {
  navButton.classList.toggle('nav-bar__btn_exit');
  navLinkList.classList.toggle('nav-bar__links_show');
  navLinksBackdrop.classList.toggle('backdrop_show');
}

function checkIfBackdropOverlayWasClicked(e) {
  if (e.target.classList.contains('backdrop')) {
    removeNavList();
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', setSectionPositions);
window.addEventListener('load', setSectionPositions);
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', (e) => {
    e.preventDefault();
    const section = e.target.href.split('#')[1];
    window.location.hash = section;
    window.scroll(0, sectionPositions[section]);
    removeNavList();
  });
});
navButton.addEventListener('click', toggleNavList);
navLinksBackdrop.addEventListener('click', checkIfBackdropOverlayWasClicked);
