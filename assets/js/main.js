
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
    $(".cta__primary--big, .cta__primary--sm").attr("href", "https://www.vibby.com/explore/");
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
});

//mobile side menu
function addShowRightMenu(elem) {
  elem.classList.toggle('menu-icon--active');
  var mainNav = document.querySelector('.navs');
  mainNav.classList.toggle('mobile-menu');
}
