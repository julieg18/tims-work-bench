import { productObjs } from '../utils/constants';

function changeMainImage({ mainImage, newImage, selectableImages }) {
  mainImage.src = newImage.src;
  mainImage.alt = newImage.alt;

  const previouslySelectedImg = selectableImages.find((img) =>
    img.classList.contains('product__image_selected'),
  );
  previouslySelectedImg.classList.remove('product__image_selected');
  newImage.classList.add('product__image_selected');
}

function changeSelectedProductNavBarItem({ navItems, clickedNavItem }) {
  navItems.forEach((navItem) => {
    navItem.classList.remove('product__nav-item_selected');
  });
  clickedNavItem.classList.add('product__nav-item_selected');
}

function changeProductInfoList({ newTexts, infoList }) {
  const textEl = infoList.querySelector('.product__text');
  infoList.innerHTML = '';

  newTexts.forEach((newText) => {
    const newTextEl = textEl.cloneNode(true);
    newTextEl.textContent = newText;
    infoList.prepend(newTextEl);
  });
}

function changeProductInfo({ navItems, clickedNavItem, text, infoList }) {
  const lastClickedItem = navItems.find((el) =>
    el.className.includes('selected'),
  );
  if (lastClickedItem.className === clickedNavItem.className) return;

  const itemName = clickedNavItem.className
    .split(' ')
    .find((className) => className.includes('name'))
    .split('_')[4];

  changeSelectedProductNavBarItem({ navItems, clickedNavItem });
  changeProductInfoList({ newTexts: text[itemName], infoList });
}

function setUpProductEventListeners({
  selectableImages,
  mainImage,
  navItems,
  text,
  infoList,
}) {
  selectableImages.forEach((selectableImage) => {
    selectableImage.addEventListener('click', (e) =>
      changeMainImage({ mainImage, newImage: e.target, selectableImages }),
    );
  });

  navItems.forEach((navItem) => {
    navItem.addEventListener('click', (e) =>
      changeProductInfo({ clickedNavItem: e.target, navItems, text, infoList }),
    );
  });
}

productObjs.forEach((productObj) => {
  setUpProductEventListeners(productObj);
});
