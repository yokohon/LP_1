// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');


$('.hamburger-button').on('click', function () {
    hamburger.toggleClass('hamburger-menu-active');
});

$(window).on('resize', function () {
    hamburger.removeClass('hamburger-menu-active');
});

// タブ
$('#smarttab').smartTab({
    enableUrlHash: false,
    autoAdjustHeight: false
});


