document.addEventListener('DOMContentLoaded', function () {
  var yearElement = document.getElementById('footer-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
