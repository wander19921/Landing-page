$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    var typed = new Typed(".typing", {
        strings: ["Apaixonado por tecnologia", "Desenvolvedor", "UX Designer", "Freelancer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Apaixonado por tecnologia", "Desenvolvedor", " UX Designer", "Freelancer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin: 70,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPauser: true,
        responsive: {
            0: {
                items: 5,
                nav: false
            }
            
        }
    });
});
