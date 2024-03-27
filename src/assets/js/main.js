function removeActiveClass(buttons) {
  buttons.forEach(button => button.classList.remove('active'));
}
const sizeButtons = document.querySelectorAll('.size-button');
sizeButtons.forEach(sizeButton => {
  sizeButton.addEventListener('click', () => {
      removeActiveClass(sizeButtons);
      sizeButton.classList.add('active');
  });
});
