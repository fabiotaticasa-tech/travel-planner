// ==============================
// Travel Planner v0.2
// ==============================

// Data da viagem
const dataViagem = new Date("2026-08-29T00:00:00");

// ------------------------------
// Contador regressivo
// ------------------------------

function atualizarContador() {

    const hoje = new Date();

    const diferenca = dataViagem - hoje;

    const dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

    const elemento = document.getElementById("contador");

    if (!elemento) return;

    if (dias > 0) {

        elemento.innerHTML = `⏳ Faltam <strong>${dias}</strong> dias`;

    } else {

        elemento.innerHTML = "🎉 Boa viagem!";

    }

}

// ------------------------------
// Relógio
// ------------------------------

function atualizarRelogio(){

    const agora = new Date();

    const hora = agora.toLocaleTimeString("pt-BR");

    const relogio = document.getElementById("relogio");

    if(relogio){

        relogio.innerHTML = hora;

    }

}

// ------------------------------
// Barra de progresso
// ------------------------------

function atualizarProgresso(){

    const barra = document.getElementById("barra");

    const texto = document.getElementById("textoProgresso");

    if(!barra || !texto) return;

    const percentual = 15;

    barra.style.width = percentual + "%";

    texto.innerHTML = percentual + "% concluído";

}

// ------------------------------
// Menu
// ------------------------------

const itens = document.querySelectorAll(".menu li");

itens.forEach(item=>{

    item.addEventListener("click",()=>{

        itens.forEach(i=>i.classList.remove("active"));

        item.classList.add("active");

        document.getElementById("tituloPagina").innerHTML=item.innerText;

    });

});

// ------------------------------

setInterval(atualizarRelogio,1000);

atualizarContador();

atualizarRelogio();

atualizarProgresso();
