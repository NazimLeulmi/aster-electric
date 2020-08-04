document.addEventListener('DOMContentLoaded', function () {
  const options = {
    preventScrolling: false
  }
  const sideNav = document.querySelectorAll('.sidenav');
  const parallax = document.querySelectorAll('.parallax');
  const carousel = document.querySelectorAll('.carousel');
  const scrollspy = document.querySelectorAll('.scrollspy');
  const parallaxInstance = M.Sidenav.init(sideNav, options);
  const sideNavInstance = M.Parallax.init(parallax, options);
  const carouselInstance = M.Carousel.init(carousel, options);
  const scrollspyInstance = M.ScrollSpy.init(scrollspy, {
    scrollOffset: 0,
    throttle: 50,
    activeClass: "active"
  });
});