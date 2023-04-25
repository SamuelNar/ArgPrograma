$(function(){
    $("#boton1").click(function(){
        $("#link").attr("href","https://www.youtube.com/");
        $("#link").text("Youtube");
    });

    $("#boton2").click(function(){
        $("#link").attr("href","https://www.twitch.tv/");
        $("#link").text("Twitch");
    });

    $("#boton3").click(function(){
        $("#link").attr("href","https://fontawesome.com/");
        $("#link").text("Font Awesome");
    });
});