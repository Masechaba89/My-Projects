
const menuElement = document.querySelector('.menu');
const menuSelectedElement = document.querySelector('.menu-selected');

const socialListsElement = document.querySelector('.social-lists');
const liElements = document.querySelectorAll('.social-lists li');

menuElement.addEventListener('click', () => {
    socialListsElement.classList.toggle('hide');
    menuElement.classList.toggle('rotate');
});

liElements.forEach(liElement => {
    liElement.addEventListener('click', () => {
        menuSelectedElement.innerHTML = liElement.innerHTML;
        socialListsElement.classList.add('hide');
         menuElement.classList.remove('rotate');
    });
});