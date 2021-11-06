const menuToggle = (idToggleMenu, idNavbar) => {
  const $menuIcon = document.getElementById(idToggleMenu);
  const $menu = document.getElementById(idNavbar);
  if ($menuIcon && $menu) {
    $menuIcon.addEventListener("click", () => {
      $menu.classList.toggle("menu--active");
      const icon = $menu.matches(".menu--active") ? "icon-close" : "icon-menu";
      $menuIcon.children[0].src = `./images/${icon}.svg`;
    });
  }
};

menuToggle("icon-menu", "container-menu");
