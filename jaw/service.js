$(document).ready(function(){
    $('a[href^="#"]').click(function() {
        var target = $(this.hash);
        //if (target.length) {
        if (target) {
            var targetOffset = target.offset().top-50;
            $('html,body').animate({scrollTop: targetOffset}, 400, "swing");
            return false;
        }
    });
});



/*$(function(){
  $("a#service_button[href^=#]").click(function(){
    var speed = 1200;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == ""?"html" : href);
    var position = target.offset().top;

    $("body, html").animate({scrollTop : position}, speed, "swing");
    return false;
  });
});
*/
