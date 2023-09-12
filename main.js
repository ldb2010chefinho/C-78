var images = ["capa.jpeg","lucca.jpeg","pai.jpeg","mae.jpeg","idalina.jpeg","lazaro.jpeg","ju.jpeg","tia.jpeg","nonna.jpeg"];

var names = ["Nossa Familia","Lucca Davi","Paulo Cesar","Andrea Davi","Idalina Davi","Lazaro Davi","Julia Davi","Fabiana Davi","Bernadina Julia"];

var i = 0;
function update(){
    i++;
    var numberOfFamilyMenberINArray = 8;
    if(i>numberOfFamilyMenberINArray){
        i=0
    }

    var updateImagem = images[i];
    var updateName = names[i];

    document.getElementById("MembroFamiliaImagem").src = updateImagem;
    document.getElementById("MembroFamiliaNome").innerHTML = updateName;
}