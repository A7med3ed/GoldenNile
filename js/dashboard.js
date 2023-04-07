
$(document).ready(function () { 
  // count animation
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        // easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });



  

});