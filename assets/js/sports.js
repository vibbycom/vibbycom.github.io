var tabsInterval = undefined;
var indexAfter = 1;
var indexBefore = 0;
var totalNumberOfBackgroundImages = 7;

$(document).ready(function () {
  var heroElem = $('#hero');
  tabsInterval = setInterval(function(){
    heroElem.toggleClass('bg' + indexAfter);
    heroElem.toggleClass('bg' + indexBefore);
    indexBefore = indexAfter;
    indexAfter++;
    indexAfter %= totalNumberOfBackgroundImages;
  }, 10000);
});