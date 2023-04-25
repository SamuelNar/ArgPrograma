$(function(){
    $("div").click(function(){
        $(this).fadeOut(1000,function(){
            $(this).html("<p> nuevo parrafo </p>");
            $(this).fadeIn(1000);
        });
    });
});