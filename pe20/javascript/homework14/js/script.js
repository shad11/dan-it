const onReady = () => {
    $('.navbar .nav a').click(function () {
        let elemGo = $(this).attr('href');
        let elemOffset = $(elemGo).offset().top;
        let destOffset = $(window).height() > elemOffset ? 0 : elemOffset;

        $('html').animate({scrollTop: destOffset}, 'slow');

        return false;
    });
};

$(function () {
    onReady();
});