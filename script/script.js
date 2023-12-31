    //Menu Hamburguer
    const toggleMenu=()=>
    document.body.classList.toggle("open")

    //Carrosel
    const swiper = new Swiper('.swiper', {
    cssMode: true,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    keyboard: true,
    });