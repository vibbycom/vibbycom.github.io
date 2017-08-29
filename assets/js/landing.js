
var tabsInterval = undefined;
var tabs; //grab tabs
var contents; //grab contents

var currentIndex = 0;
var totalNumberOfFeatureTabs = 3;

//Tabs on landing
$(document).ready(function () {

  tabs = $('.tabs-titles li'); //grab tabs
  contents = $('.tabs-contents li'); //grab contents

  // Start producthunt check for ?ref=producthunt and show him special message
  $('.producthunts').hide();
  $('.roughdrafts').hide();
  var query = (/producthunt/).test(window.location.href);
  var query1 = (/roughdrafts/).test(window.location.href);
  if (query) {
    $(window).scroll(function() {
      if ($(document).scrollTop() >= 220) {
        $('.main-nav').css({'position':'fixed', 'top':'0px'}); //if 220px is scrolled and user is from producthunt site
      } else {
        $('.main-nav').css({'position':'absolute', 'top':'220px'});
      }
    });
    $('.producthunts').show();
    $('.main-nav').css({'top':'220px','position':'absolute','transition':'200ms background ease-in'});
  } else {
    $('.producthunts').hide();
  }
  if (query1) {
    $(window).scroll(function() {
      if ($(document).scrollTop() >= 155) {
        $('.main-nav').css({'position':'fixed', 'top':'0px'}); //if 155px is scrolled and user is from producthunt site
      } else {
        $('.main-nav').css({'position':'absolute', 'top':'155px'});
      }
    });
    $('.roughdrafts').show();
    $('.main-nav').css({'top':'155px','position':'absolute','transition':'200ms background ease-in'});
  } else {
    $('.roughdrafts').hide();
  }
  // End producthunt banner

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


  $('.value-prop-animation').click(function(event) {
    clearInterval(refreshInterval);
  });

  $('#Engage-Copy').click(function() {
    setClasses("Engage-Copy");
    setPositions("Engage-Copy");
    setTitleDescription("Engage-Copy");
    setCircles("Engage-Copy");
  });
  $('#Analyze').click(function() {
    setClasses("Analyze");
    setPositions("Analyze");
    setTitleDescription("Analyze");
    setCircles("Analyze");
  });
  $('#Monetize').click(function() {
    setClasses("Monetize");
    setPositions("Monetize");
    setTitleDescription("Monetize");
    setCircles("Monetize");
  });
  $('#Attribute').click(function() {
    setClasses("Attribute");
    setPositions("Attribute");
    setTitleDescription("Attribute");
    setCircles("Attribute");
  });
  $('#Amplify').click(function() {
    setClasses("Amplify");
    setPositions("Amplify");
    setTitleDescription("Amplify");
    setCircles("Amplify");
  });

  var positions = {
    "Engage-Copy" : {
      x : 215,
      y : 110
    },
    "Analyze" : {
      x : 105,
      y : 368
    },
    "Monetize" : {
      x : 36,
      y : 212
    },
    "Attribute" : {
      x : 314,
      y : 368
    },
    "Amplify" : {
      x : 372,
      y : 212
    }
  };
  var positionsHighlighted = {
    "Engage-Copy" : {
      x : 180,
      y : 97
    },
    "Analyze" : {
      x : 30,
      y : 380
    },
    "Monetize" : {
      x : -55,
      y : 220
    },
    "Attribute" : {
      x : 314,
      y : 380
    },
    "Amplify" : {
      x : 372,
      y : 220
    }
  };

  var circles = {
    "Engage-Copy" : {
      strokeWidth : 3,
      cx : 246,
      cy : 128,
      r : 6
    },
    "Analyze" : {
      strokeWidth : 3,
      cx : 179,
      cy : 337,
      r : 6
    },
    "Monetize" : {
      strokeWidth : 3,
      cx : 137,
      cy : 208,
      r : 6
    },
    "Attribute" : {
      strokeWidth : 3,
      cx : 314,
      cy : 337,
      r : 6
    },
    "Amplify" : {
      strokeWidth : 3,
      cx : 355,
      cy : 209,
      r : 6
    }
  };
  var circlesHighlighted = {
    "Engage-Copy" : {
      strokeWidth : 5,
      cx : 246,
      cy : 128,
      r : 10
    },
    "Analyze" : {
      strokeWidth : 5,
      cx : 179,
      cy : 337,
      r : 10
    },
    "Monetize" : {
      strokeWidth : 5,
      cx : 137,
      cy : 208,
      r : 10
    },
    "Attribute" : {
      strokeWidth : 5,
      cx : 314,
      cy : 337,
      r : 10
    },
    "Amplify" : {
      strokeWidth : 5,
      cx : 355,
      cy : 209,
      r : 10
    }
  };

  var setPositions = function (name) {
    classesList.forEach(function(key) {
      if (key === name) {
        $("#" + key).children()[0].setAttribute("x", positionsHighlighted[key]["x"]);
        $("#" + key).children()[0].setAttribute("y", positionsHighlighted[key]["y"]);
      } else {
        $("#" + key).children()[0].setAttribute("x", positions[key]["x"]);
        $("#" + key).children()[0].setAttribute("y", positions[key]["y"]);
      }
    });
  };

  var classesList = ["Engage-Copy", "Amplify", "Attribute", "Analyze", "Monetize"];
  var setClasses = function (name) {
    classesList.forEach(function(key) {
      if (key === name) {
        $("#" + key).attr("class", "active");
      } else {
        $("#" + key).attr("class", "non-active");
      }
    });
  };

  var currentHighlight = 0;
  var refreshInterval = window.setInterval(function() {
    setClasses(classesList[currentHighlight]);
    setPositions(classesList[currentHighlight]);
    setTitleDescription(classesList[currentHighlight]);
    setCircles(classesList[currentHighlight]);
    currentHighlight++;
    currentHighlight = currentHighlight % 5;
  }, 4200);

  var titleDescription = {
    "Engage-Copy" : {
      title : "Engage",
      description : "Tap into the friendships of your audience by letting them personalize and share the best moments from your video content."
    },
    "Analyze" : {
      title : "Analyze",
      description : "Understand your viewers at a whole new level by empowering them to show you their favorite parts of your content."
    },
    "Monetize" : {
      title : "Monetize",
      description : "Let your audience work for you by generating new ad inventory and new opportunities for conversions."
    },
    "Attribute" : {
      title : "Attribute",
      description : "You can finally be more open with your content, while having confidence your rights as IP owner are protected."
    },
    "Amplify" : {
      title : "Amplify",
      description : "Fans share highlight clips with friends and followers on social media, building organic buzz and increasing viewership of your content."
    }
  };

  var setTitleDescription = function(name) {
    $('#ourTitle').text(titleDescription[name]["title"]);
    $('#ourDescription').text(titleDescription[name]["description"]);
  };

  var setCircles = function(name) {
    classesList.forEach(function(key) {
      if (key === name) {
        $("#circle-" + key).attr("stroke-width", circlesHighlighted[key]["strokeWidth"]);
        $("#circle-" + key).attr("cx", circlesHighlighted[key]["cx"]);
        $("#circle-" + key).attr("cy", circlesHighlighted[key]["cy"]);
        $("#circle-" + key).attr("r", circlesHighlighted[key]["r"]);

      } else {
        $("#circle-" + key).attr("stroke-width", circles[key]["strokeWidth"]);
        $("#circle-" + key).attr("cx", circles[key]["cx"]);
        $("#circle-" + key).attr("cy", circles[key]["cy"]);
        $("#circle-" + key).attr("r", circles[key]["r"]);

      }
    });
  }

});

