var fitSlider = function(){
    var $slides = $(".slideBloc"),
        $slider_container = $(".sliderContainer");

    $slider_container.css({"width":100*$slides.length+'%'});
    $slides.css({"width":100/$slides.length+'%'});
    $slideCount = $slides.length;

       if($slideCount != 1) {
            $('.sliderContainer').css({marginLeft: - 100 +"%" });
       };
    
    $('.slideBloc:last-child').prependTo('.sliderContainer');

    $('.sliderBtn--prev').click(function () {
     $('.sliderContainer').animate({
        "left": "+100%"
    }, 600, function () {
        $('.slideBloc:last-child').prependTo('.sliderContainer');
        $('.sliderContainer').css('left', '');
    });    });

    $('.sliderBtn--next').click(function () {
        $('.sliderContainer').animate({
            "left":  "-100%"
        }, 600, function () {
            $('.sliderContainer>.slideBloc:first-child').appendTo('.sliderContainer');
            $('.sliderContainer').css('left', '');
        });
    });
}