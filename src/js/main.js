const btnHamburger = document.getElementById('btnHamburger');
const headerOverlay = document.querySelector('#headerOverlay');
const overlay = document.querySelector('#overlay');

btnHamburger.addEventListener('click', () => {
    if (headerOverlay.classList.contains('open')) {
        headerOverlay.classList.remove('open');
        overlay.classList.remove('fade-in')
        overlay.classList.add('fade-out')
    } else {
        headerOverlay.classList.add('open');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out')
    }
})