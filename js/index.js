const hamburger = document.querySelector('.hamburger');
const aside = document.querySelector('.aside')
const cross = document.querySelector('.cross')

hamburger.addEventListener('click', function() {
    aside.style.display = 'block'
})
cross.addEventListener('click', function(){
    aside.style.display = 'none';
})