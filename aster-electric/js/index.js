document.addEventListener('DOMContentLoaded', function () {
  const options = {
    preventScrolling: false
  }
  const elems = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(elems, options);
});