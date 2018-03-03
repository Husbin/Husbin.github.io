$(document).ready(function(){
    $(".month h3").siblings("div").css({"display":"none"});
});
$(document).ready(function(){
    $(".month h3").click(function(){
        $(this).next("div").slideToggle("slow").siblings("div:visible").slideUp("slow");
    });
});