const accordeon = () => {
  const closeContent = () => {
    const activeButton = document.querySelector('.characteristics__title.active');
    const openContent = document.querySelector('.characteristics__description.open');
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    if (openContent) {
      openContent.classList.remove('open');
      openContent.style.height = '';
    }
  };
  const charItem = document.querySelectorAll('.characteristics__item');
  charItem.forEach((item) => {
    const charButton = item.querySelector('.characteristics__title');
    const charContent = item.querySelector('.characteristics__description');
    charButton.addEventListener('click', () => {
      if (charContent.classList.contains('open')) {
        charContent.style.height = '';
      } else {
        closeContent();
        charContent.style.height = charContent.scrollHeight + 'px';
      }
      charButton.classList.toggle('active');
      charContent.classList.toggle('open');
    });
  });
};
accordeon();