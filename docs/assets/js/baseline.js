/**
 * @file baseline.js
 */
// Canopi object for shared scripts
var Canopi = {};

// configuration settings
Canopi.config = {
  animspeed : 500
};

// reusable functions
Canopi.f = {};

// page initialization
Canopi.init = function() {
  // apply tabbed behaviors to .tabbed-component elements.
  $('.tabbed-component').each(function() {
    var $local;
    $local = $(this);
    // $local.find('ul.nav-tabs a').tab();
    $local.find('ul.nav-tabs  a').click(function(e) {
      e.preventDefault();
      $(this).tab('show');
    });
  });
  
  // trigger IE initialization behaviors if necessary
  if ($.browser.msie) {
    Canopi.initIE(parseInt($.browser.version));
  }
}

// page initialization for IE
Canopi.initIE = function(version) {
  // checks can be made against (int) version for version specific adjustments
}

// trigger page initialization
$(function() { Canopi.init(); });