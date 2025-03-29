
// for menu toggle

const menuToggler = document.querySelectorAll('.menu-toggler')
const menuBar = document.querySelector('.menu-bar')

menuToggler.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        menuBar.classList.toggle('md:right-0')
        
    })
})

