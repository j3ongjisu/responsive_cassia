$(function () {

    //모바일 탭 버튼 활성화
    $('.mopen').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });

    $('.gnb').on('wheel touchmove', function (e) {
        e.preventDafault();
    })




    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }
    });


    $('.mainSlide').slick({
        arrows: false,
        fade: true,
        dots: true,
    });


    $('.mainVisual .arrows .left').on('click', function () {
        $('.mainSlide').slick('slickPrev');
    });
    $('.mainVisual .arrows .right').on('click', function () {
        $('.mainSlide').slick('slickNext');
    });





})