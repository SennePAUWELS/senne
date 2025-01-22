const navmenu = function () {
  const navmenu = document.querySelector(".js-navmenu");
  navmenu.addEventListener("change", function (e) {
    if (navmenu.checked) {
      console.log("open");
    }
  });
};
document.addEventListener("DOMContentLoaded", navmenu);
