function botao(){
    document.getElementById("agradecimento"). innerHTML = "<b>Obrigado por clicar</b>";

    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.ibge.gov.br/"); //abertura em aba diferente
    //window.location.href = "https://www.ibge.gov.br/"; //abertura na mesma aba
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove"). innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");

}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove"). innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaochange(elemento){
    console.log(elemento.value)
}

/*
function soma (n1, n2){
    return n1+n2
}


function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar=true
    }else{
        validar=false
    }
    return validar;
}

var idade = prompt("Qual é a sua idade?");
console.log(validaIdade(idade));
*/

//alert(soma(5,10));

/*
function setReplace (frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
*/
//alert(setReplace("Vai Japão", "Japão", "Brasil"));


/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());
*/

/*
var count;
for (count=0; count<=5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <=5){
    console.log(count);
    count = count + 1;//count++
};
*/

/*
var idade = prompt("Qual sua idade?")
if (idade >=18)
{
    alert ("maior de idade");
}else
{
    alert ("menor de idade");
};
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert (frutas[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert (fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");//incluir
//lista.pop()//retirar
//console.log(lista.reverse());//.lenght tamanho da lista, quantidade //.reverse() altera na lista, reverte
//console.log(lista.toString())//traz para string no console
//console.log(lista.join(" - "))//no console você separa com outro elemento diferente de vírgula

//var nome = "Fábio Sartori";
//var idade = 37;
//var idade1 = 10;
//var frase = "Japão é o melhor time do mundo"; 
//alert (nome + " tem " + idade + " anos");
//alert (idade + idade1)
//console.log (nome);
//console.log(idade + idade1);
//console.log(frase.replace("Japão","Brasil"));
//console.log(frase.toUpperCase); //todas as letras maiúsculas
//console.log(frase.toLowerCase); //todas as letras minúsculas
//alert (frase.replace("Japão", "Brasil")) //.replace trocar
 