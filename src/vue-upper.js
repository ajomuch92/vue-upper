const VueUpperDirective = {
  bind: (el) => {
    el.style.textTransform = 'uppercase'
    el.addEventListener('keyup', () => {
      el.value = el.value.toUpperCase();
      el.dispatchEvent(new Event('input'));
    });
  },
  unbind: (el) => {
    el.onkeyup = null;
  }
};

export default VueUpperDirective