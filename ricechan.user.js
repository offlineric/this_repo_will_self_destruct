// ==UserScript==
// @name        ricechan
// @namespace   eric
// @description insert parent selectors jscript
// @include     https://boards.4chan.org/*
// @include     http://boards.4chan.org/*
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_deleteValue
// @grant          GM_openInTab
// @grant          GM_xmlhttpRequest
// @grant          GM_addStyle
// @version     1
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==


(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  
  $(".postContainer").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});

var win = $(window);
var allMods = $(".postConatiner");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});




 var num = 90; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('#header-bar, #updater, #thread-stats').addClass('fixed');
    } else {
        $('#header-bar, #updater, #thread-stats').removeClass('fixed');
    }
});

window.scrollBy(0,1);
window.scrollBy(0,-1);


