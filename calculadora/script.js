let operacao = document.querySelectorAll(".operacao");
let numeros = document.querySelectorAll(".numero");
let limpar = document.getElementById("limpar");
let visor = document.getElementById("visor");
let ponto = document.getElementById("ponto");
let igual = document.getElementById("igual");

numeros.forEach((btn)=>{
    btn.addEventListener("click", () => {
        if(visor.value === "Erro"){
            visor.value = btn.textContent;
        }
        else{
            visor.value += btn.textContent;
        }
    })
})

operacao.forEach((opr) => {
    opr.addEventListener("click", () => {
        if (visor.value === "" || visor.value === "Erro") {
            return;
        }
        let simbolo = opr.textContent.replace("x", "*").replace("÷", "/");
        let ultimoChar = visor.value.slice(-1);

        if (["+", "-", "*", "/"].includes(ultimoChar)) {
            visor.value = visor.value.slice(0, -1) + simbolo;
        } else {
            visor.value += simbolo;
        }
    });
});

ponto.addEventListener("click", () => {

    if (visor.value === "Erro"){ 
        visor.value = ""; 
    }

    if(visor.value === ""){
        visor.value = "0.";
    }
    else if(!visor.value.endsWith(".")){
        visor.value += ".";
    }
})

limpar.addEventListener("click", () => {
    visor.value = "";
})

igual.addEventListener("click", () => {
    let expressao = visor.value.replace(/x/g, "*").replace(/÷/g, "/");

    let soMatematica = /^[0-9+\-*/.\s]+$/;

    if (!soMatematica.test(expressao) || /[+\-*/.\s]$/.test(expressao)) {
        visor.value = "Erro";
        return;
    }

    try {
        let resultado = eval(expressao);

        if (!Number.isFinite(resultado)) {
            visor.value = "Erro";
        } else {
            visor.value = resultado;
        }
    } catch {
        visor.value = "Erro";
    }
});