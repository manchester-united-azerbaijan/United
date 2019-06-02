

$(document).ready(function()
{
    "use strict";

    //TOGGLE BARS SECTION start
    $("#s-toggle-bars ul").hide();
    $("#s-toggle-bars .s-up").hide();
    $(document).on("click","#s-toggle-bars .s-down",function()
    {
        $(this).prev().slideDown();
        $(this).hide();
        $(this).next().show();
    });

    $(document).on("click","#s-toggle-bars .s-up",function()
    {
        $(this).prev().prev().slideUp();
        $(this).hide();
        $(this).prev().show();
    });
    //TOGGLE BARS SECTION end

    //SLIDER SECTION start
    let number = 1;
    $(document).on("click","#s-slider .s-left",function()
    {
        number--;
        $("#s-slider .s-slider-photo-holder li.active").removeClass("active");       
        if(number > 0)
        {
            $(`#s-slider .s-slider-photo-holder li[data-number="${number}"]`).addClass("active");
        }
        else
        {
            number = $("#s-slider .s-slider-photo-holder li").length;
            $(`#s-slider .s-slider-photo-holder li[data-number="${number}"]`).addClass("active");
        }
    });
    $(document).on("click","#s-slider .s-right",function()
    {
        number++;
        $("#s-slider .s-slider-photo-holder li.active").removeClass("active");       
        if(number != $("#s-slider .s-slider-photo-holder li").length + 1)
        {
            $(`#s-slider .s-slider-photo-holder li[data-number="${number}"]`).addClass("active");
        }
        else
        {
            number = 1;
            $(`#s-slider .s-slider-photo-holder li[data-number="${number}"]`).addClass("active");
        }
    });

    setTimeout(function()
    {
        $("#s-slider .s-slider-heading").css({right: 0});
        $("#s-slider .s-slider-sub-heading").css({right: 0});
    },1000);
    setTimeout(function()
    {
        $("#s-slider .s-slider-text").css({opacity: 0});
    },4000);
    
    //SLIDER SECTION end
})