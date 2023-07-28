// Získáme všechny položky menu s třídou .navigation__item, které mají podpoložky
const menuItems = document.querySelectorAll('.navigation__item.has-submenu');

// Přidáme každé položce posluchače události pro najetí myší (mouseenter)
menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    // Získáme podpoložky aktuální položky menu
    const subMenu = item.querySelector('.navigation__submenu');
    
    // Přidáme třídu pro zobrazení podpoložek
    subMenu.classList.add('navigation__submenu--visible');
  });

  // Přidáme posluchač události pro opuštění oblasti položky (mouseleave)
  item.addEventListener('mouseleave', () => {
    // Získáme podpoložky aktuální položky menu
    const subMenu = item.querySelector('.navigation__submenu');

    // Odebereme třídu pro skrytí podpoložek
    subMenu.classList.remove('navigation__submenu--visible');
  });
});


