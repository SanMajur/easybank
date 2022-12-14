const btnHamburger = document.getElementById('btnHamburger');
const headerOverlay = document.querySelector('#headerOverlay');
const overlay = document.querySelector('#overlay');
const mobileMenu = document.querySelector('#mobileMenu')

btnHamburger.addEventListener('click', () => {
    if (headerOverlay.classList.contains('open')) {
        headerOverlay.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        mobileMenu.classList.add('invisible')
        mobileMenu.classList.remove('visible')
        
    } else {
        headerOverlay.classList.add('open');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out')
        mobileMenu.classList.add('visible')
        mobileMenu.classList.remove('invisible')
    }
})