window.addEventListener('DOMContentLoaded', function() {

  var btn = document.querySelector('.burger');
  var blockHidden = document.querySelector('.menu');
  var btnClose = document.querySelector('.close');

  function showBlock() {
      
      blockHidden.classList.add('menu--open');
      
  }
  btn.addEventListener('click', showBlock);

  function closeBlock() {
  
    setTimeout(() => {
      blockHidden.classList.remove('menu--open');
    }, 1550);
    
}
  btnClose.addEventListener('click', closeBlock);

  


  })
