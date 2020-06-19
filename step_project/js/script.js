let previousNav;
let previousServiceTab;
let previousWorkTab;
let previousNews;
const LOAD_IMG_CNT = 12;
let loadedImgCnt = 0;

const imgList = [
    {src: 'img/landing_page/landing-page3.jpg', category: 'landing'},
    {src: 'img/wordpress/wordpress5.jpg', category: 'wordpress'},
    {src: 'img/web_design/web-design3.jpg', category: 'web'},
    {src: 'img/graphic_design/graphic-design6.jpg', category: 'graphic'},
    {src: 'img/landing_page/landing-page5.jpg', category: 'landing'},
    {src: 'img/wordpress/wordpress4.jpg', category: 'wordpress'},
    {src: 'img/landing_page/landing-page6.jpg', category: 'landing'},
    {src: 'img/wordpress/wordpress7.jpg', category: 'wordpress'},
    {src: 'img/graphic_design/graphic-design7.jpg', category: 'graphic'},
    {src: 'img/web_design/web-design4.jpg', category: 'web'},
    {src: 'img/wordpress/wordpress6.jpg', category: 'wordpress'},
    {src: 'img/graphic_design/graphic-design8.jpg', category: 'graphic'},
    {src: 'img/landing_page/landing-page7.jpg', category: 'landing'},
    {src: 'img/web_design/web-design5.jpg', category: 'web'},
    {src: 'img/graphic_design/graphic-design11.jpg', category: 'graphic'},
    {src: 'img/web_design/web-design6.jpg', category: 'web'},
    {src: 'img/graphic_design/graphic-design12.jpg', category: 'graphic'},
    {src: 'img/web_design/web-design7.jpg', category: 'web'},
    {src: 'img/graphic_design/graphic-design9.jpg', category: 'graphic'},
    {src: 'img/wordpress/wordpress8.jpg', category: 'wordpress'},
    {src: 'img/landing_page/landing-page4.jpg', category: 'landing'},
    {src: 'img/wordpress/wordpress9.jpg', category: 'wordpress'},
    {src: 'img/graphic_design/graphic-design10.jpg', category: 'graphic'},
    {src: 'img/wordpress/wordpress10.jpg', category: 'wordpress'},
];

// method for navigation
const onNavBar = () => {
    previousNav = document.querySelector('.nav-link.active');


    console.log(previousNav);
    $('.nav-link').click(function(event) {
        const currEl = event.target;

        if (currEl !== previousNav) {
            previousNav.classList.remove('active');
            currEl.classList.add('active');
        }

        previousNav = currEl;
    });
};

// method for service tabs
const onServiceTabs = () => {
    previousServiceTab = $('.service-tabs-title.active').data('sectionTab');

    $('.service-tabs-title').click(function() {
        const clickTab = $(this).data('sectionTab');

        if (clickTab !== previousServiceTab) {
            $(`.service-tabs-tab[data-tab="${previousServiceTab}"]`).removeClass('active');
            $(`.service-tabs-title[data-section-tab="${previousServiceTab}"]`).removeClass('active');

            $(this).addClass('active');
            $(`.service-tabs-tab[data-tab="${clickTab}"]`).addClass('active');


            previousServiceTab = clickTab;
        }
    });
};

// method for work tabs and filtering
const onWorkTabs = () => {
    previousWorkTab = $('.work-tabs-title.active').data('workCategory');

    $('.work-tabs-title').click(function() {
        const clickTab = $(this).data('workCategory');

        if (clickTab !== previousWorkTab) {
            $(`.work-tabs-title[data-work-category="${previousWorkTab}"]`).removeClass('active');
            $(this).addClass('active');

            if (clickTab === 'all') {
                $('.work-img-block img').show();
            } else {
                $(`.work-img-block img[data-work-category="${clickTab}"]`).show();
                $(`.work-img-block img:not([data-work-category="${clickTab}"])`).hide();
            }

            previousWorkTab = clickTab;
        }
    });
};

// add loading images
const loadImg = () => {
    const fragment = new DocumentFragment();

    const startIndx = loadedImgCnt;

    for (let i = startIndx; i < (startIndx + LOAD_IMG_CNT); i++) {
        const category = imgList[i].category;
        const display = category === previousWorkTab || previousWorkTab === 'all' ? 'block' : 'none';

        $('<img>', {
            'src': imgList[i].src,
            'data-work-category': category,
            'style': `display: ${display}`,
        }).appendTo(fragment);

        loadedImgCnt++;
    }

    return fragment;
};

const showImg = (newImgEl) => {
    $('.work-img-block').append(newImgEl);
    $('.loading').hide();

    if (loadedImgCnt < imgList.length) {
        $('.load-img-btn').show();
    }
};

const onLoadImg = () => {
    $('.load-img-btn').click(function() {
        $(this).hide();
        $('.loading').css('display', 'flex');

        setTimeout(function() {
            const newImgEl = loadImg();

            showImg(newImgEl);
        }, 2000);
    });
};

// processing news click
const onNewsClick = () => {
    previousNews = document.querySelector('.news-link.active');

    $('.news-link').click(function(event) {
        const elem = event.currentTarget;

        if (elem !== previousNews) {
            previousNews.classList.remove('active');
            elem.classList.add('active');
            previousNews = elem;
        }

        event.preventDefault();
    });
};

// slider
const onSlider = () => {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
        arrows: false,
        fade: true,
    });

    $('.slider-nav').on('init.slick', function(event, slick) {
        $(slick.$slides[0]).addClass('active');
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        nextArrow: '.slider-arrow-next',
        prevArrow: '.slider-arrow-prev',
        variableWidth: true,
        dots: false,
        infinite: true,
        focusOnSelect: true,
    });

    $('.slider-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $(slick.$slides[currentSlide]).removeClass('active');
        $(slick.$slides[nextSlide]).addClass('active');
    });

    $('.slider-arrow-prev').click(function() {
        $(this).addClass('active');
        $('.slider-arrow-next').removeClass('active');
    });

    $('.slider-arrow-next').click(function() {
        $(this).addClass('active');
        $('.slider-arrow-prev').removeClass('active');
    });
};

// main method
const onReady = () => {
    onNavBar();
    onServiceTabs();
    onWorkTabs();
    onLoadImg();
    onNewsClick();
    onSlider();
};

$(function() {
    onReady();
});