

const tituloh1 = document.querySelector('h1')

tituloh1.addEventListener('click', () => {
    tituloh1.textContent = 'TITULO CLICKEADO!'
} )

tituloh1.addEventListener('mouseleave', () => {
    tituloh1.textContent = 'el mouse me toco!'
})
