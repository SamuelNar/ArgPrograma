$(function() {
    let sele = $("#select");
    sele.change(function(){
        let valorsele=sele.val();
        console.log("valor seleccionado: "+valorsele);
    });
});