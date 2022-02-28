document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__button').forEach(function(tabsbutton){
    tabsbutton.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      tabsbutton.classList.add('active')
      document.querySelectorAll('.tab_block').forEach( function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelectorAll('.tabs__button').forEach( function(tabContent) {
        tabContent.classList.remove('active')
      })
      tabsbutton.classList.add('active')
      document.querySelector(`[data-target=${path}]`).classList.add('tab-content-active')

    })
  })
})
