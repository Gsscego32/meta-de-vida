const botoes = document.querySelectorAll(".botoes");
const texto= document.querySelectorAll(".abra-texto");
//Declara quais elementos vao ser lidos. O script vai ler todos que tiverem a classe "botao".

for(let i=0;i <botoes.length;i++){
    //Variavel "i"e igual a 0, mas enquanto essa varivel for menor que a quantidade de elementos nessa lista, aumentamos o valor de "i", ou seja, i sera a quantidade de botoes.
    botoes[i].onclick = function() {
        for(let j=0;j<botoes.length;j++) {
        botoes[j].classList.remove("ativo");
        texto[j].classList.remove("ativo");
        }
        //Remove a classe "ativo" de todos os botoes.
        botoes[i].classList.add("ativo");
        texto[i].classList.add("ativo");
        //Adiciona a classe ativo so no botao clicado.

    }
}
