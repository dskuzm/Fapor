


$(document).ready(function(){
    $('.burger-icon').click(function () {
        $('.nav').toggleClass('nav-open');
    });

  $('.owl-carousel').owlCarousel({
      autoplay: true,
      navText:false,
      autoplaySpeed: 800,
      autoplayHoverPause: true,
      items: 1,
      responsive:{
			1000:{
                nav : true,
                dots: false
			}
		}
  });


    $('#email').on('input', function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).css('box-shadow', '0px 0px 1px green');
                $(this).siblings('input').prop( "disabled", false);
            } else {
                $(this).css('box-shadow', '0px 0px 1px red');
                $(this).siblings('input').prop( "disabled", true);
            }
        } else {
            $(this).css('box-shadow', 'inherit');
            $(this).siblings('input').prop( "disabled", true);
        }
    });

    $('#email').on('input', function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).css('box-shadow', '0px 0px 2px green');
                $(this).siblings('input').prop( "disabled", false);
            } else {
                $(this).css('box-shadow', '0px 0px 2px red');
                $(this).siblings('input').prop( "disabled", true);
            }
        } else {
            $(this).css('box-shadow', 'inherit');
            $(this).siblings('input').prop( "disabled", true);
        }
    });

    $('#submit').on('click', function(e) {
        e.preventDefault();
        $('#email').val("");
    });
});
