var lista = [];
var lista2 = [];

function enviar(){
    

    var entradaUsuario = document.getElementById("entrada").value;
    lista.push(entradaUsuario);
    console.log(lista);
    var tamanho= lista.length;
    for(var a=0;a<tamanho; a++){
        lista2.push("<br>",lista[a]);
    };

    console.log(lista2);
    document.getElementById("divEntrada").innerHTML=lista2;
};

function mostrar(){
    document.getElementById("divMostrar").innerHTML=lista2;
};

function sort(){
    var orga = lista2.sort();
    document.getElementById("divOrga").innerHTML=orga;
}