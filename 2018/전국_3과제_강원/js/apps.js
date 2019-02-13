function siteLoad() {
    $('head').append(`
      <style>
        .social-icon li a:hover{background:rgb(40,167,233);transition:.5s;} 
        .navbar-default .navbar-nav li a:hover{color:rgb(40,167,233);transition:.3s;}
        #home .btn:hover{background:rgb(40,167,233)}
        #team .col-md-3.wowAfter:hover{transform:translateY(2px) !important;opacity:0.5 !important;}
        .navbar{position:sticky;top:-1px;z-index:99}
        .wow{opacity:0;transition:0}
        .wow.wowAfter.bounceIn{animation: bouncing 1s;}
        .wow.fadeInLeft{transform:translateX(-5px);}
        .wow.fadeInRight{transform:translateX(5px);}
        .wow.fadeInUp{transform:translateY(5px);}
        .bounce{animation: bounce 1s;}
        #contact .wow.fadeInRight{transform:inherit}
        .wow.wowAfter{opacity:1;transition:0.5s; transform:inherit}
        .spinner {width:100%; height:100%; background:#fff; position:fixed;left:0;right:0;top:0;bottom:0;text-align: center;font-size: 10px;display:flex;justify-content:center;align-items:center;z-index:100;}
        .spinner > div {background-color: #000;height: 50px;width: 6px;animation: sk-stretchdelay 1.2s infinite ease-in-out;margin:0 1px;}
        .spinner .rect1 { animation-delay: -1.2s; }
        .spinner .rect2 { animation-delay: -1.1s; }
        .spinner .rect3 { animation-delay: -1.0s; }
        .spinner .rect4 { animation-delay: -0.9s; }
        .spinner .rect5 { animation-delay: -0.8s; }
        @keyframes bouncing{
          0%{transform:scale(0);opacity:0; transition:.2s;}
          25%{transform:scale(1.12);transition:.2s;}
          75%{transform:scale(0.9);transition:.2s;}
          100%{transform:scale(1.0);transition:.2s;}
        }
        @keyframes bounce{
          0%,100%,20%,50%,80%{transform:translateY(0px);transition:.2s;}
          40%{transform:translateY(30px);transition:.2s;}
          60%{transform:translateY(15px);transition:.2s;}
        }
        @keyframes sk-stretchdelay {
          0% {  transform: scaleY(0.4); }
          20% {  transform: scaleY(1.0); }
          40% {  transform: scaleY(0.4); }
          100% {  transform: scaleY(0.4); }
        }
        .open{display:flex !important;}
        .hider{opacity:0;transition:1.0s;visibility:hidden}
      </style>
  `)
    $('body').append(`
      <div class="spinner">
       <div class="rect1"></div>
       <div class="rect2"></div>
       <div class="rect3"></div>
       <div class="rect4"></div>
       <div class="rect5"></div>
     </div>
    `)
}

function toggle() {
    $(this).toggleClass('active')
}

function animation() {
    var st = $(window).scrollTop();
    var sh = $(window).height();
    var sb = st + sh;
    $('.wow').each(function(index) {
        var _this = $(this)
        var ot = _this.offset().top
        if (sb >= ot) {
            var delay = (parseFloat(_this.data('wow-delay')) * 1000 || 0 * 1)
            setTimeout(function() {
                _this.addClass('wowAfter')
            }, delay)
        }
    })
}



$(window)
    .on("load scroll", animation)
    .on("load", function() {
        $('.spinner').addClass('hider')
    })


$(siteLoad)
    .on("mouseenter mouseleave", ".col-md-4:not(:nth-child(3))", toggle)
    .on("click", "#portfolio .col-md-3", function() { $('.gallery-area').addClass('open') })
    .on("click", ".close-btn", function() { $('.gallery-area').removeClass('open') })
    .on("mouseenter mouseleave", "#about .fa", function() {
        $(this).toggleClass('bounce')
    })