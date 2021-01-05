let burgerBtn = document.querySelector('.burger');
let menu = document.querySelector('.menu');

burgerBtn.addEventListener('click', function(){
    if(menu.style.visibility == 'visible'){
        menu.style.visibility = 'hidden'
        burgerBtn.classList.remove('burger-active')
    } else{
        menu.style.visibility = 'visible'
        burgerBtn.classList.add('burger-active')
    } 
    
})