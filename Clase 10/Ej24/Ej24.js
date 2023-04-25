$(function(){
    let form=$("#formulario");
    form.submit(function(evento){
        evento.preventDefault();
        form.hide();
        $("#mensaje").show();
    })
})