
jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 100) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});


$(document).ready(function() {
    $(".zoom").click(function() {
      $(this).toggleClass("clicked");
    });
    
    $(".close-btn").click(function() {
      $(".zoom").removeClass("clicked");
    });
  });


  window.onload = function() {
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 10);
  
    function frame() {
      if (width >= elem.getAttribute("aria-valuenow")) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
  };
  
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  


