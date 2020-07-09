import {
  galleryImages,
  backdropForImage,
  backdropImage,
  backdropForImageButton,
} from '../utils/constants';
import { checkIfBackdropOverlayWasClicked } from '../utils/utils';

function closeImageBackdrop(checkIfEscapeWasPressed) {
  backdropForImage.classList.remove('backdrop_show');
  document.removeEventListener('keyup', checkIfEscapeWasPressed);
}

function checkIfEscWasPressed(e) {
  if (e.key === 'Escape') {
    closeImageBackdrop(checkIfEscWasPressed);
  }
}

function showImageBackdrop(e) {
  backdropImage.src = e.target.src;
  backdropImage.alt = e.target.alt;

  backdropForImage.classList.add('backdrop_show');
  document.addEventListener('keyup', checkIfEscWasPressed);
}

galleryImages.forEach((galleryImage) => {
  galleryImage.addEventListener('click', showImageBackdrop);
});
backdropForImageButton.addEventListener('click', closeImageBackdrop);
backdropForImage.addEventListener('click', (e) =>
  checkIfBackdropOverlayWasClicked({
    el: e.target,
    closeBackdrop: closeImageBackdrop,
  }),
);
