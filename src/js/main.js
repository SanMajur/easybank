const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('#headerOverlay')
const overlay = document.querySelector('#overlay')
const mobileMenu = document.querySelector('#mobileMenu')

btnHamburger.addEventListener('click', () => {
    console.log("clicked hamburger menu")
     if (header.classList.contains('open')){
         body.classList.remove('overflow-hidden')
         header.classList.remove('open')
         mobileMenu.classList.add('invisible')
         overlay.classList.remove('opacity-100')
    //     fadeElements.forEach(function(element){
    //         element.classList.add('fade-out')
    //         element.classList.remove('fade-in')
    //     })
     } else {
         body.classList.add('overflow-hidden')
         header.classList.add('open')
         mobileMenu.classList.remove('invisible')
         overlay.classList.add('opacity-100')
    //     fadeElements.forEach(function(element){
    //         element.classList.add('fade-in')
    //         element.classList.remove('fade-out')
    //     })
        
     }
})


