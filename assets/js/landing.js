
var tabsInterval = undefined;
var tabs; //grab tabs
var contents; //grab contents

var currentIndex = 0;
var totalNumberOfFeatureTabs = 3;


//Tabs on landing
$(document).ready(function () {

  tabs = $('.tabs-titles li'); //grab tabs
  contents = $('.tabs-contents li'); //grab contents

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

  tabsInterval = setInterval(function(){
    currentIndex ++;
    currentIndex %= totalNumberOfFeatureTabs;
    switchTabContent(currentIndex);
  }, 5000);

  function switchTabContent(idx) {
    contents.hide(); //hide all contents
    tabs.removeClass('current'); //remove 'current' classes
    $(contents[idx]).show(); //show tab content that matches tab title index
    $(tabs[idx]).addClass('current'); //add current class on clicked tab title
  }

  tabs.bind('click',function(){
    clearInterval(tabsInterval);
    switchTabContent($(this).index());
  });

  var video = document.getElementById('video-player');
    video.addEventListener('click',function(){
        video.play();
    },false);
});
