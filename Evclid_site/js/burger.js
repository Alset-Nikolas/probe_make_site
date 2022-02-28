document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.header__menu-btn').forEach(function(burger){
    burger.addEventListener('click', function() {
      document.querySelector('.header__burger').classList.toggle('burger-active')
    })
  })
})
