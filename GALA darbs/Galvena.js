function isOverflown({ clientWidth, clientHeight, scrollWidth, scrollHeight }) {
    return scrollHeight > clientHeight || scrollWidth > clientWidth;
  }
  
  function isVisible(parent, child) {
    return !(
      (child.offsetLeft - parent.offsetLeft >= parent.offsetWidth)
      || (child.offsetTop - parent.offsetTop >= parent.offsetHeight)
    );
  }
  
  function init() {
    const page = document.querySelector('[data-main-page]');
    const header = document.querySelector('[data-header]');
    const topbar = document.querySelector('[data-topbar]');
    const nav = header.querySelector('[data-nav]');
    const navItems = nav.querySelectorAll('[data-nav-item]');
 
 
      resizeObserver.observe(nav);
    };
   
  init();