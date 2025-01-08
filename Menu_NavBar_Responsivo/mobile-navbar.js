class MobileNavbar {
    /*toda classe tem o metodo constructor
    e dentro referenciamos as propriedades */
    constructor(mobileMenu, navList, navLinks) {
      /*botao do menu*/  this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() { //forEach fala com cada link individualmente
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
      }

      handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
      }

     addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      } /*metodo q inicia a função se mobile menu existir no documento*/ 
        return this;
    }
}

const mobileNavbar = new MobileNavbar(//criar mobilenavbar em uma variavel
    ".mobile-menu",
    ".nav-list", //utilizar os seletores dela assim como no css
    ".nav-list li",
);
mobileNavbar.init();