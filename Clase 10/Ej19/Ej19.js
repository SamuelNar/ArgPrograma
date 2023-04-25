$(function(){
    $("#celda1,#celda2,#celda3,#celda4").hover(function(){
        $(this).css("background-color","pink");
    }, function(){
        $(this).css("background-color","");
    });
});