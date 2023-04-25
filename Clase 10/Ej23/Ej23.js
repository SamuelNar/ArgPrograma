$(function(){
    var enlace=$("#enlace");
    enlace.click(function(evento){
        evento.preventDefault();
        var link=enlace.attr("href");
        console.log("URL = "+link);
    });
});