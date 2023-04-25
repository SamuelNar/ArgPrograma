$(function(){
    $(".noticia").click(function(){
        let clase = $(this).data("clase");
        $("."+clase).css("font-size","+=2");
    })
})