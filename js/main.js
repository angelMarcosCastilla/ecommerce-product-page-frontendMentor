const menuToggle = (idToggleMenu, idNavbar) => {
  const $menuIcon=document.getElementById(idToggleMenu);
  const $menu=document.getElementById(idNavbar);
  console.log($menu )
  console.log($menuIcon )

    if($menuIcon && $menu){
      $menuIcon.addEventListener("click",()=>{
        console.log("click")
        $menu.classList.toggle("menu--active")
        $menuIcon.classList.toggle("menu__icon--active")
        
      })
  }
}


menuToggle("icon-menu", "container-menu")