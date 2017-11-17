/**
 * Scripts
 */
const panels = document.querySelectorAll('.panels .panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(event) {
  if (event.propertyName.includes('flex')) {
    this.classList.toggle('is-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));