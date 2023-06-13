$(function () {

    //위로 올라가는 슬라이드
    $('.main_slide').slick({
        vertical: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
    });

    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        //3bar를 누르면 gnb 메뉴, h1(로고)가 나오거나 사라짐.
        $('.gnb').toggleClass('on');
        $('.h1').toggleClass('on');
    });
})