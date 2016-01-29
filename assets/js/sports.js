var tabsInterval = undefined;
var indexAfter = 1;
var indexBefore = 0;
var totalNumberOfBackgroundImages = 7;

$(document).ready(function () {

  var random = parseInt(Math.random() * 10 & 7);
  $('#hero').toggleClass('bg' + random);

  //tabsInterval = setInterval(function(){
  //  heroElem.toggleClass('bg' + indexAfter);
  //  heroElem.toggleClass('bg' + indexBefore);
  //  indexBefore = indexAfter;
  //  indexAfter++;
  //  indexAfter %= totalNumberOfBackgroundImages;
  //}, 10000);
});