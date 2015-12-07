//

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll < 70) {
        $(".main-nav").removeClass("scroll");
    }
    if (scroll >= 70) {
        $(".main-nav").addClass("scroll");
    }
    // if (scroll >= 400) {
    //     $(".navbar-public").removeClass("navbar-transparent");
    // }
    // if (scroll < 400) {
    //     $(".navbar-public").addClass("navbar-transparent");
    // }
});

//Tabs on landing
$(document).ready(function () {
  $('.accordion-tabs').each(function() {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });

  var tabs = $('.tabs-titles li'); //grab tabs
  var contents = $('.tabs-contents li'); //grab contents

  tabs.bind('click',function(){
    contents.hide(); //hide all contents
    tabs.removeClass('current'); //remove 'current' classes
    $(contents[$(this).index()]).show(); //show tab content that matches tab title index
    $(this).addClass('current'); //add current class on clicked tab title
  });






});
