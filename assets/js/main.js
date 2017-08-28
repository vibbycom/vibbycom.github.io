
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
  // if ($(window).width() < 730) {
  //   $(".cta-create").attr("href", "/explore/");
  //   $(".cta-create span").text("Explore now");
  // }

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
    }, 200);

  }

  if ($('#video-player-ce').length){

  var videoCe = document.getElementById('video-player-ce');
    videoCe.addEventListener('click',function(){
        videoCe.play();
    },false);
  }

  if ($('#gaming-tabs').length){
    $('.accordion-gaming-tabs').each(function() {
      $(this).children('li').first().children('a').addClass('is-active');
    });
    $('.accordion-gaming-tabs').on('click', 'li > a.tab-link', function(event) {
      if (!$(this).hasClass('is-active')) {
        event.preventDefault();
        var accordionTabs = $(this).closest('.accordion-gaming-tabs');
        accordionTabs.find('.is-active').removeClass('is-active');
        $(this).addClass('is-active');
      } else {
        event.preventDefault();
      }
    });
  } 

  $("#lol-btn").click(function() {
    $("#iframe").attr("src", "https://www.vibby.com/embed/collection/Q1Yshc2If?cover=false");  
  });

  $("#dota2-btn").click(function() {
    $("#iframe").attr("src", "https://www.vibby.com/embed/collection/XyvpR5h8z?cover=false");  
  });

  $("#vainglory-btn").click(function() {
    $("#iframe").attr("src", "https://www.vibby.com/embed/collection/XkTmn52UG?cover=false");
  });

  $("#cod-btn").click(function() {
    $("#iframe").attr("src", "https://www.vibby.com/embed/collection/m1YjgCbDG?cover=false");
  });

  $("#csgo-btn").click(function() {
    $("#iframe").attr("src", "https://www.vibby.com/embed/collection/m1nN0c2LM?cover=false");
  });

  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // Get media - with autoplay disabled (audio or video)
  var media = $('video');
  var tolerancePixel = 80;

  function checkMedia(){
      // Get current browser top and bottom
      var scrollTop = $(window).scrollTop() + tolerancePixel;
      var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

      media.each(function(index, el) {
          var yTopMedia = $(this).offset().top;
          var yBottomMedia = $(this).height() + yTopMedia;

          if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ //view explaination in `In brief` section above
              $(this).get(0).play();
          } else {
              $(this).get(0).pause();
          }
      });

      //}
  }
  $(document).on('scroll', checkMedia);
  
});

//mobile side menu
function addShowRightMenu(elem) {
  elem.classList.toggle('menu-icon--active');
  var mainNav = document.querySelector('.navs');
  mainNav.classList.toggle('mobile-menu');
}

