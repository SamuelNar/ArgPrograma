$(function(){
    var widthoriginal=$("#div").width();
    var heighthoriginal=$("#div").height();

    $("#div").dblclick(function(){
        if($(this).width() == widthoriginal){
            $(this).animate({
                width:"250px",
                height:"250px"
            },500);
        }else{
            $(this).animate({
                width:widthoriginal,
                height:heighthoriginal
            },500);
        }
    });
});