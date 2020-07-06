const product1Details = [
  ' - Quality: New, heavy-duty bench',
  ' - Size: 48, 72, 96, or 120 in. L. x 27 in. W x 37 in. H',
  ' - Materials: Solid wood yellow pine top',
  " - 4x4's on the corners and extra supports under the table top and on the corners",
  " - 4x4's are notched out for strength and stability",
  ' - Reinforced with #10 x 3.5" deck screws and 3/8" carriage bolts',
  " - 4x4's notched to fit 2x4s and 2x6s",
];
const navButton = document.querySelector('.nav-bar__btn');
const navLinkList = document.querySelector('.nav-bar__links');
const navLinksBackdrop = document.querySelector('.backdrop_for_nav-links');
const navLinks = Array.from(document.querySelectorAll('.nav-bar__link-text'));

export { product1Details, navButton, navLinkList, navLinksBackdrop, navLinks };
