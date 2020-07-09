const productsText = [
  {
    details: [
      ' - Quality: New, heavy-duty bench',
      ' - Size: 48, 72, 96, or 120 in. L. x 27 in. W x 37 in. H',
      ' - Materials: Solid wood yellow pine top',
      " - 4x4's on the corners and extra supports under the table top and on the corners",
      " - 4x4's are notched out for strength and stability",
      ' - Reinforced with #10 x 3.5" deck screws and 3/8" carriage bolts',
      " - 4x4's notched to fit 2x4s and 2x6s",
    ],
    options: [
      ' - Staining (aproximately an additional $50)',
      ' - A different top (birch plywood tops, one piece solid tops, etc.)',
      ' - Casters (80$)',
    ],
  },
];

const navButton = document.querySelector('.nav-bar__btn');
const navLinkList = document.querySelector('.nav-bar__links');
const navLinksBackdrop = document.querySelector('.backdrop_for_nav-links');
const navLinks = Array.from(document.querySelectorAll('.nav-bar__link-text'));

const productObjs = Array.from(document.querySelectorAll('.product')).map(
  (product, index) => {
    const productObj = {
      product,
      index,
      selectableImages: Array.from(
        product.querySelectorAll('.product__image_secondary'),
      ),
      navItems: Array.from(product.querySelectorAll('.product__nav-item')),
      mainImage: product.querySelector('.product__image_main'),
      infoList: product.querySelector('.product__texts'),
      text: {
        details: productsText[index].details,
        options: productsText[index].options,
      },
    };
    return productObj;
  },
);

const galleryImages = Array.from(document.querySelectorAll('.gallery__image'));
const backdropForImage = document.querySelector('.backdrop_for_image');
const backdropImage = backdropForImage.querySelector('.backdrop__image');
const backdropForImageButton = backdropForImage.querySelector(
  '.backdrop__exit-btn',
);

export {
  navButton,
  navLinkList,
  navLinksBackdrop,
  navLinks,
  productObjs,
  galleryImages,
  backdropForImage,
  backdropImage,
  backdropForImageButton,
};
