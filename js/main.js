function scrolltoDiv(id, animate, offset) {

	var target = id;

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - offset
        }, animate);
    }

}



$('a[href^="#"]').on('click', function(event) {

	var url = $( $(this).attr('href') );

	scrolltoDiv(url,1000,50)

});

$( document ).ready (function() {
  if($(window).width() <= 415) {
    $("img").each(function() {
      $(this).attr("src", $(this).attr("src").replace("img/wsilogo.png", "img/wsilogo_small.fw.png"));
    });
  }
});