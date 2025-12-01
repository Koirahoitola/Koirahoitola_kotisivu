document.addEventListener('DOMContentLoaded', function(){
  var y = new Date().getFullYear();
  var el = document.getElementById('footer-year');
  if(el) el.textContent = y;
});
