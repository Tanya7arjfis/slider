$(document).ready(function() {
    $("#lightSlider").lightSlider({
        item: 4,
        autoWidth: true,
        slideMove: 2, 
        slideMargin: 5,
        
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', 
        easing: 'linear', 
 
        speed: 500, //ms'
        auto: true,
        loop: false,
        slideEndAnimation: true,
        pause: 5000,
 
        keyPress: false,
        controls: true,

        responsive : [
            {
                breakpoint:1400,
                settings: {
                    item:3,
                    slideMove:2,
                }
            },
           
            {
                breakpoint:1200,
                settings: {
                    item:2,
                    slideMove:1,
                }
            },
            
            {
                breakpoint:800,
                settings: {
                    item:1,
                }
            }
        ],
    }); 
});
