
$(function(){
  $('#menu_link').click(function(){
    $('.icon_link_tab').addClass('open');
  });
  $('.close_btn').click(function(){
    $('.icon_link_tab').removeClass('open');
  });
});





/*$(function(){

	$(".humberger-wrap").on("click",function(){
		$(".humberger-wrap").toggleClass("opened");
		$("header").toggleClass("opened");
	});

	$(".header-navigation > a").on("click",function(){
		$(".humberger-wrap").removeClass("opened");
		$("header").removeClass("opened");
	})

});*/
