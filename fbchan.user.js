// ==UserScript==
// @name        testicles
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


var $modules = $('.postContainer, .summary, .pagelist');
oldCount = 0;
$(window).scroll(function(event) {
  $modules.each(function(i, el) {
    var $el = $modules.eq(i);
    if ($el.visible(true)) {
      $modules
        .splice(i, 1);
      $el
        .addClass("come-in")

    } 
  });
});

var win = $(window);

document.addEventListener("ThreadUpdate", function(e){
    $modules = $('.postContainer');
    newcount = e.detail.postCount - oldCount;
//    alert ("new post count: "+newcount);
    $modules = $modules.slice(-1*newcount);
    oldCount = e.detail.postCount;
    }, false);


var allMods = $(".postContainer, .summary, .pagelist");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("come-in"); 
  } 
});
/*var num = 90; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('#header-bar, #shortcuts').addClass('fixed');
    } else {
        $('#header-bar, #shortcuts').removeClass('fixed');
    }
});
*/


    /* time of day classes 

$(document).ready(function() {
    var h = new Date().getHours();
    var divs = $('#header-bar, .boardTitle');
    if (h >= 6 && h < 12) {
        divs.addClass('morning-bg');
    } else if (h >= 12 && h < 18) {
        divs.addClass('daylight-bg');
    } else if (h >= 18 && h < 24) {
        divs.addClass('evening-bg');
    } else if (h >= 0 && h < 6) {
        divs.addClass('twilight-bg');
    }
}); */

