const botoes= document.querySelectorAll(".glow-on-hover");
const texto= document.querySelectorAll(".abra-Conteudo");
const contadores= document.querySelectorAll(".contador");
const TempoObjetivo1= new Date("2024-12-13T00:00:00");
const tempoAtual= new Date;
const TempoObjetivo2= new Date("2026-12-13T00:00:00")
const TempoObjetivo3= new Date("2028-12-13T00:00:00")
//Declara quais elementos vao ser lidos. O script vai ler todos que tiverem a classe "botao".

for(let i=0;i <botoes.length;i++){
    //Variavel "i"e igual a 0, mas enquanto essa varivel for menor que a quantidade de elementos nessa lista, aumentamos o valor de "i", ou seja, i sera a quantidade de botoes.
    botoes[i].onclick = function() {
        for(let j=0;j<botoes.length;j++) {
        botoes[j].classList.remove("ativo");
        texto[j].classList.remove("ativo")
    
        //Remove a classe "ativo" de todos os botoes.
        botoes[i].classList.add("ativo");
        texto[i].classList.add("ativo");
        //Adiciona a classe ativo so no botao clicado.
        }
    }
}

contadores[0].textContent=CalculaTempo(TempoObjetivo1);
contadores[1].textContent=CalculaTempo(TempoObjetivo2);
contadores[2].textContent=CalculaTempo(TempoObjetivo3);

function CalculaTempo(TempoObjetivo){
    let tempoAtual=new Date();
    let tempoFinal=TempoObjetivo-tempoAtual;
    let segundos=Math.floor(tempoFinal/1000);       
    let minutos=Math.floor(segundos/60);
    let horas=Math.floor(minutos/60);
    let dias=Math.floor(horas/24);
    let mes=Math.floor(dias/30);
    let anos=Math.floor(mes/12);

    segundos%=60;
    minutos%=60;
    horas%=24;
    dias%=30;
    mes%=12;
    return anos + " anos " + mes + " mes " + dias + " dias " + horas + " horas " + minutos + " minutos "  + segundos + " segundos " ;


}
comecaCronometros();

function comecaCronometros(){
atualizaCronometro();
setInterval(atualizaCronometro,1000);

}

function atualizaCronometro(){

contadores[0].textContent = CalculaTempo(TempoObjetivo1);
contadores[1].textContent = CalculaTempo(TempoObjetivo2);
contadores[2].textContent = CalculaTempo(TempoObjetivo2);
}