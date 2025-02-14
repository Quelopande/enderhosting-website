function menu(action) {
    const menu = document.querySelector('.ullast');
    const nav = document.querySelector('nav');
    const faBars = document.querySelector('.fa-bars');
    const faX = document.querySelector('.fa-xmark');

    if (action === "open") {
        menu.setAttribute("style", "display: block !important;");
        nav.setAttribute("style", "border-radius: 30px !important; background-color: white !important;padding-bottom:10px;");
        faBars.setAttribute("style", "display: none !important;");
        faX.setAttribute("style", "display: block !important;");
    } else if (action === "close") {
        menu.setAttribute("style", "display: none !important;");
        nav.setAttribute("style", "border-radius: 100px; background-color: white;margin: 5px 20px;");
        faBars.setAttribute("style", "display: block !important;");
        faX.setAttribute("style", "display: none !important;");
    }
}
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    let nav = document.querySelector('nav');

    if (scrollPosition > 1) {
        nav.style.backgroundColor = 'white';
        nav.style.boxShadow = '0 0 10px -6px';
    } else{
        nav.style.backgroundColor = '#ffffff00';
        nav.style.boxShadow = '0 0 0 0';
    }
});