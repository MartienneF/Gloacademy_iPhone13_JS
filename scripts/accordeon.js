const accordeon = () => {
  const chItems = document.querySelectorAll('.characteristics__item')

  chItems.forEach(item => {
    const chButton = item.querySelector('.characteristics__title')
    const chContent = item.querySelector('.characteristics__description')

    chButton.addEventListener('click', () => {
      if(chContent.classList.contains('open')) {
        chContent.style.height = ''
      } else {
        chContent.style.height = chContent.scrollHeight + 'px'
      }

      chButton.classList.toggle('active')
      chContent.classList.toggle('open')
    })
  })
}

accordeon()