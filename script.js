const toggle = document.querySelector('.toggle');
const card = document.querySelector('.card');

toggle.addEventListener('click', () => {
    card.classList.toggle('active');
})