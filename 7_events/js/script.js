(function initializeControls() {
    
    const getControl = (selector) => document.querySelector(selector);
    
    const button = getControl('button.request');
    const popup = getControl('div.popup');
    const closePopup = getControl('div.closePopup');
    const menu = getControl('div.menu');
    const openMenu = getControl('.openMenu');
    const closeMenu = getControl('.closeMenu');

    button.addEventListener('click', () => popup.style.display = "flex");
    closePopup.addEventListener('click', () => popup.style.display = "none");
    openMenu.addEventListener('click', () => menu.left = 0);
    closeMenu.addEventListener('click', () => menu.left = "-50vw");
}());