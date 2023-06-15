tooltips = document.querySelectorAll('.has-tooltip')
for (let tooltip of tooltips) {
        const {bottom, left} = tooltip.getBoundingClientRect()

        tip = document.createElement('div')
        tip.className = 'tooltip'
        tip.textContent = tooltip.getAttribute('title')
        tip.style = `left: ${left}px; top: ${bottom}px`

        tooltip.insertAdjacentHTML('afterend', tip.outerHTML)
        tooltip.addEventListener('click', (event) => {
            event.preventDefault()
            event.target.nextElementSibling.classList.toggle('tooltip_active');
        }, false)
}
