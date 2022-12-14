const btnHamburger = document.getElementById('btnHamburger');
const body = document.querySelector('#body');
const headerOverlay = document.querySelector('#headerOverlay');
const overlay = document.querySelector('#overlay');
const mobileMenu = document.querySelector('#mobileMenu')

btnHamburger.addEventListener('click', () => {
    if (headerOverlay.classList.contains('open')) {
        body.classList.remove('overflow-hidden')
        headerOverlay.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        mobileMenu.classList.add('invisible')
        mobileMenu.classList.remove('visible')
        
    } else {
        body.classList.add('overflow-hidden')
        headerOverlay.classList.add('open');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out')
        mobileMenu.classList.add('visible')
        mobileMenu.classList.remove('invisible')
    }
})