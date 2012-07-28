/**
 * @file baseline.js
 */
// Canopi object for shared scripts
var Canopi = {};

// configuration settings
Canopi.config = {
  accordion : {
    toggle : true
  },
  animspeed : 500,
  carousel : {
    interval : 5000
  },
  modal : {
    background : true,
    keyboard : true,
    show : false
  },
  popover : {
    animation : true,
    placement : 'top'
  },
  tooltip : {
    animation : true,
    placement : 'top'
  }
};

// reusable functions
Canopi.f = {};

// page initialization
Canopi.init = function() {
  // apply tabbed behaviors to .tabbed-component elements.
  $('.tabbed-component').each(function() {
    var $local;
    $local = $(this);
    $local.find('ul.nav-tabs a').click(function(e) {
      e.preventDefault();
      $(this).tab('show');
    });
  });
  // apply carousel behaviors to carousels.
  $('.carousel').carousel(Canopi.config.carousel);
  // apply modal overlay behaviors
  $('*[data-toggle="modal"]').modal(Canopi.config.modal);
  // apply tooltip behaviors
  $('a[rel="tooltip"]').tooltip(Canopi.config.tooltip);
  // apply popover behaviors
  $('a[rel="popover"]').popover(Canopi.config.popover);
  // apply accordion behaviors
  $('.accordion-body').collapse(Canopi.config.accordion);
  $('.accordion a.accordion-toggle').click(function(e) {
    e.preventDefault();
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