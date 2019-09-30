$(".left").mouseleave(function () { 
    if($("#dropdown").click()){
        $(".collapse").collapse();
    }
    else {
        $(".collapse").hide();
    }
    $(".collapse").toggle();
});



