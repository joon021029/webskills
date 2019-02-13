$(function() {
    $('head').append(`
            <style>
              .social-icon li a:hover{background:rgb(40,167,233);transition:.5s;} 
              .navbar-default .navbar-nav li a:hover{color:rgb(40,167,233);transition:.2s;}
              .templatemo-nav{position:sticky;top:-1px;}
              .bouncing{animation: bouncing 1s; opacity:1;}
              #home .btn:hover{background:rgb(40,167,233)}
              .col-md-3{transition:.5s;}
              #team .col-md-3:hover{transform:translateY(2px) !important;opacity:0.5 !important;}
              .wow.fadeInLeft{transform:translateX(-50px);opacity:0; transition:.5s;}
              .wow.fadeInUp{transform:translateY(50px);opacity:0; transition:.5s;}
              .wow.fadeInRight{transform:translateX(50px);opacity:0; transition:.5s;}
              .wow.fadeIn{opacity:0; transition:.5s;}
              .col-md-6.col-sm-6.col-xs-12.wow.fadeInRight{transform:inherit}
              .run{transform:inherit !important;opacity:1 !important;}
              @keyframes bouncing{
                0%{transform:scale(0);opacity:0; transition:.2s;}
                25%{transform:scale(1.12);transition:.2s;}
                75%{transform:scale(0.9);transition:.2s;}
                100%{transform:scale(1.0);transition:.2s;}
              }
            </style>
        `)
})

function toggle() {
    $(this).toggleClass('active')
}

function fade() {
    var st = $(window).scrollTop();
    var sh = $(window).height();
    var sb = st + sh - 100;
    $('.wow').each(function(index) {
        var ot = $(this).offset().top
        if (sb > ot) {
            if (!$(this).hasClass('run')) $(this).addClass('run')
        }
    })
}

function bouncing() {
    var st = $(window).scrollTop();
    var sh = $(window).height();
    var sb = st + sh;
    $('.col-md-12').each(function(index) {
        var ot = $(this).offset().top
        if (sb >= ot) {
            if (!$(this).hasClass('bouncing')) {
                let delay = 0
                if ($(this).data('wow-delay')) delay += $(this).data('wow-delay')*1
                setTimeout(() => {
                    $(this).addClass('bouncing')
                }, delay)
            }
        }
    })
    setTimeout(function() { fade() }, 500)
}




$(window)

    .on("load", bouncing)
    .on("scroll", bouncing)


$(document)
    .on("mouseenter mouseleave", ".col-md-4:not(:nth-child(3))", toggle)
