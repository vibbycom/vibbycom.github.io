
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var query = (/producthunt/).test(window.location.href);
  var query1 = (/roughdrafts/).test(window.location.href);
  if (query){
    if (scroll < 220) {
    $(".main-nav").removeClass("scroll");
    }
    if (scroll >= 220) {
      $(".main-nav").addClass("scroll");
    }
  }
  else if (query1){
    if (scroll < 150) {
    $(".main-nav").removeClass("scroll");
    }
    if (scroll >= 150) {
      $(".main-nav").addClass("scroll");
    }
  }
  else{
    if (scroll < 100) {
    $(".main-nav").removeClass("scroll");
    }
    if (scroll >= 100) {
      $(".main-nav").addClass("scroll");
    }
  }
  if (scroll >= 400) {
    $(".main-nav").removeClass("translate-right");
  }
  if (scroll < 400) {
    $(".main-nav").addClass("translate-right");
  }
});

//Tabs on landing
$(document).ready(function () {
  //change call to action link on small screens
  if ($(window).width() < 730) {
    $(".cta-create").attr("href", "https://www.vibby.com/explore/");
    $(".cta-create span").text("Explore now");
  }

  var $container  = $('.cards-col'),
  $articles = $container.children('.card'),
  timeout;

  $articles.on( 'mouseenter', function( event ) {
      
    var $article  = $(this);
    clearTimeout( timeout );
    timeout = setTimeout( function() {
      
      if( $article.hasClass('active') ) return false;
      
      $articles.not($article).removeClass('active').addClass('blur');
      
      $article.removeClass('blur').addClass('active');
      
    }, 75 );
    
  });

  $container.on( 'mouseleave', function( event ) {
    
    clearTimeout( timeout );
    $articles.removeClass('active blur');
    
  });

  if ($('#video-player').length){
    var video = document.getElementById('video-player');
    video.addEventListener('click',function(){
        video.play();
    },false);

    $(window).scroll(function() {
    var scroll = $(window).scrollTop();
      if (scroll >= 200) {
        video.play();
      }
    });
    setTimeout(function (){
      video.play();
    }, 5000);

  }

  if ($('#video-player-ce').length){

  var videoCe = document.getElementById('video-player-ce');
    videoCe.addEventListener('click',function(){
        videoCe.play();
    },false);
  }

  if ($('#gaming-tabs').length){
    $('.accordion-gaming-tabs').each(function() {
      $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
    });
    $('.accordion-gaming-tabs').on('click', 'li > a.tab-link', function(event) {
      if (!$(this).hasClass('is-active')) {
        event.preventDefault();
        var accordionTabs = $(this).closest('.accordion-gaming-tabs');
        accordionTabs.find('.is-open').removeClass('is-open').hide();

        $(this).next().toggleClass('is-open').toggle();
        accordionTabs.find('.is-active').removeClass('is-active');
        $(this).addClass('is-active');
      } else {
        event.preventDefault();
      }
    });
  } 

  $("#dota2-btn").click(function() {
    $("#dota2").attr("src", "https://www.vibby.com/embed/collection/XyvpR5h8z?cover=false");  
  });

  $("#vainglory-btn").click(function() {
    $("#vainglory").attr("src", "https://www.vibby.com/embed/collection/XkTmn52UG?cover=false");
  });

  $("#cod-btn").click(function() {
    $("#cod").attr("src", "https://www.vibby.com/embed/collection/m1YjgCbDG?cover=false");
  });

  $("#csgo-btn").click(function() {
    $("#csgo").attr("src", "https://www.vibby.com/embed/collection/m1nN0c2LM?cover=false");
  });
  
});

//mobile side menu
function addShowRightMenu(elem) {
  elem.classList.toggle('menu-icon--active');
  var mainNav = document.querySelector('.navs');
  mainNav.classList.toggle('mobile-menu');
}

