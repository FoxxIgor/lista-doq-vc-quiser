var lista = [];


function enviar(){
    

    var entradaUsuario = document.getElementById("entrada").value;
    lista.push(entradaUsuario);
    
    

    document.getElementById("divEntrada").innerHTML=lista;
};

function mostrar(){
    var mostra = lista.join("<br>")
    document.getElementById("divMostrar").innerHTML=mostra;
};

function sort(){
    var orga = lista.sort();
    document.getElementById("divOrga").innerHTML=orga;
};
function pesquisar(){
    var inp = document.getElementById("pesquisa").value;
    var tamanho = lista.length;
    var vezes = 0;
    for(var i=0;i<tamanho;i++){
        if(inp==lista[i]){
            vezes++
        }
        if(vezes==0){
            document.getElementById("divPesquisar").innerHTML="Não foi encontrado.";
        } else{
            document.getElementById("divPesquisar").innerHTML="Foi encontrado "+ vezes +" vezes na lista";
        };
    }
    console.log(vezes)
}