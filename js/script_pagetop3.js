;(function (d, $) {
  
  var $pagetop = isMobile()?$('.pagetop'):
  (function(){
   return $('.pagetop').removeClass('pagetop').addClass('pagetop3');
  })(); 
  
 
  $pagetop.on('click', function(e){
      e.preventDefault();
      var _dest = $($(this).find('a').attr('href')).offset().top;
      $('html, body').animate({
        scrollTop: _dest
      }, 1200, 'easeInOutQuart');
  });
  

  if( !isMobile() ) {
   $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
     $pagetop.css('visibility','visible').addClass('visible');
    } else {
        $pagetop.removeClass('visible');
    }
   });
  }
   
  function isMobile(){
   return typeof window.orientation != "undefined";
  }
 
})(document, jQuery);