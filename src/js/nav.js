const navmenu = function () {
  const navmenu = document.querySelector('.js-navmenu');
  const overlay = document.querySelector('.o-overlay');

  navmenu.addEventListener('change', function (e) {
    if (navmenu.checked) {
      overlay.style.display = 'block';
    } else {
      overlay.style.display = 'none';
    }
  });
  const arrnavlinks = document.querySelectorAll('.js-navlink');
 for(navlink of arrnavlinks){
    navlink.addEventListener('click', function (e){
        navmenu.checked = 0;
        if (navmenu.checked) {
            overlay.style.display = 'block';
          } else {
            overlay.style.display = 'none';
          }
    })
 }
};

document.addEventListener('DOMContentLoaded', navmenu);
