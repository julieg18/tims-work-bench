function checkIfBackdropOverlayWasClicked({ el, closeBackdrop }) {
  if (el.classList.contains('backdrop')) {
    closeBackdrop();
  }
}

export { checkIfBackdropOverlayWasClicked };
