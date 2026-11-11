/* =========================
   1. MENU DO SITE
========================= */

const menuMobile = document.getElementById("menu-mobile");
const menu = document.getElementById("menu");

menuMobile.addEventListener("click", function () {
    const aberto = menu.classList.toggle("aberto");

    menuMobile.setAttribute("aria-expanded", aberto);
    menuMobile.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");
        menuMobile.setAttribute("aria-expanded", "false");
    });
});


/* =========================
   2. JANELAS DOS CARTÕES
========================= */

const dadosModais = {
    mensagens: {
        icone: "💬",
        titulo: "Mensagens suspeitas",
        texto:
            "Golpistas podem fingir ser familiares, amigos ou empresas. " +
            "Eles costumam criar urgência para fazer você agir sem pensar.",
        dica:
            "DICA DO DETETIVE: se alguém pedir dinheiro por um número novo, " +
            "confirme a identidade por uma ligação ou outro contato conhecido."
    },

    desafios: {
        icone: "🛡️",
        titulo: "Desafios digitais",
        texto:
            "Aprender a reconhecer golpes também exige prática. " +
            "Nas missões, você encontrará situações fictícias inspiradas " +
            "em situações comuns nas redes sociais.",
        dica:
            "DICA DO DETETIVE: leia com atenção antes de escolher uma resposta."
    },

    redes: {
        icone: "📱",
        titulo: "Golpes nas redes",
        texto:
            "Perfis falsos, lojas inexistentes, promoções milagrosas e " +
            "links suspeitos podem aparecer no Instagram e no TikTok.",
        dica:
            "DICA DO DETETIVE: confira o perfil, pesquise a reputação da loja " +
            "e não confie apenas em comentários ou seguidores."
    },

    detetive: {
        icone: "🏆",
        titulo: "Seja um detetive",
        texto:
            "Um bom detetive digital observa os detalhes, verifica as " +
            "informações e não toma decisões por impulso.",
        dica:
            "DICA DO DETETIVE: complete as seis missões e tente conquistar " +
            "a medalha de ouro!"
    }
};

const modalFundo = document.getElementById("modal-fundo");
const modalIcone = document.getElementById("modal-icone");
const modalTitulo = document.getElementById("modal-titulo");
const modalTexto = document.getElementById("modal-texto");
const modalDica = document.getElementById("modal-dica");
const modalFechar = document.getElementById("modal-fechar");
const modalOk = document.getElementById("modal-ok");

const cartoes = document.querySelectorAll(".cartao");

let elementoAnterior = null;

function abrirModal(tipo) {
    const conteudo = dadosModais[tipo];

    if (!conteudo) {
        return;
    }

    elementoAnterior = document.activeElement;

    modalIcone.textContent = conteudo.icone;
    modalTitulo.textContent = conteudo.titulo;
    modalTexto.textContent = conteudo.texto;
    modalDica.textContent = conteudo.dica;

    modalFundo.hidden = false;
    modalFechar.focus();
}

function fecharModal() {
    modalFundo.hidden = true;

    if (elementoAnterior) {
        elementoAnterior.focus();
    }
}

cartoes.forEach(function (cartao) {
    cartao.addEventListener("click", function () {
        abrirModal(cartao.dataset.modal);
    });
});

modalFechar.addEventListener("click", fecharModal);
modalOk.addEventListener("click", fecharModal);

modalFundo.addEventListener("click", function (evento) {
    if (evento.target === modalFundo) {
        fecharModal();
    }
});

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && !modalFundo.hidden) {
        fecharModal();
    }
});


/* =========================
   3. PERGUNTAS DAS MISSÕES
========================= */

const missoes = [
    {
        categoria: "MENSAGENS SUSPEITAS",
        pergunta:
            "Uma pessoa conhecida manda mensagem de um número novo " +
            "e pede dinheiro emprestado com urgência. O que você faz?",

        opcoes: [
            "Envio o dinheiro imediatamente.",
            "Confirmo a identidade por uma ligação ou outro contato conhecido.",
            "Envio meus dados pessoais para confirmar."
        ],

        correta: 1,

        explicacao:
            "Isso mesmo! Confirmar por outro canal ajuda a evitar " +
            "golpes em que criminosos fingem ser familiares ou amigos."
    },

    {
        categoria: "COMPRAS ONLINE",
        pergunta:
            "Você encontra uma loja nas redes sociais com um celular " +
            "muito barato e ela só aceita Pix antecipado. Qual é a atitude mais segura?",

        opcoes: [
            "Pago logo para não perder a oferta.",
            "Confiro a reputação da loja e seus canais oficiais antes de comprar.",
            "Envio meus documentos para conseguir desconto."
        ],

        correta: 1,

        explicacao:
            "Muito bem! Pesquisar a loja, conferir seus dados e desconfiar " +
            "de ofertas boas demais ajuda a evitar prejuízos."
    },

    {
        categoria: "PRÊMIOS FALSOS",
        pergunta:
            "Uma publicação diz que você ganhou um prêmio, mas pede " +
            "um código recebido por SMS para liberar o presente. O que fazer?",

        opcoes: [
            "Envio o código para receber o prêmio.",
            "Compartilho minha senha para confirmar.",
            "Não compartilho o código e verifico a promoção nos canais oficiais."
        ],

        correta: 2,

        explicacao:
            "Correto! Códigos de verificação são pessoais. Nunca os " +
            "compartilhe para receber prêmios ou promoções."
    },

    {
        categoria: "PERFIS FALSOS",
        pergunta:
            "Você recebe uma solicitação de amizade de um perfil " +
            "que usa a foto e o nome de uma pessoa conhecida. O que fazer?",

        opcoes: [
            "Aceito imediatamente.",
            "Confirmo com a pessoa por outro meio antes de interagir.",
            "Envio meus dados para descobrir quem é."
        ],

        correta: 1,

        explicacao:
            "Boa investigação! Fotos e nomes podem ser copiados. " +
            "Confirme a identidade antes de aceitar pedidos ou conversar."
    },

    {
        categoria: "LINKS SUSPEITOS",
        pergunta:
            "Você recebe um link dizendo que sua conta será bloqueada " +
            "se não atualizar seus dados imediatamente. O que fazer?",

        opcoes: [
            "Não clico e acesso a plataforma diretamente pelo aplicativo ou site oficial.",
            "Clico para resolver rapidamente.",
            "Informo minha senha no link."
        ],

        correta: 0,

        explicacao:
            "Perfeito! Mensagens que criam medo ou urgência podem ser " +
            "tentativas de roubar dados. Acesse sempre os canais oficiais."
    },

    {
        categoria: "PIX E PAGAMENTOS",
        pergunta:
            "Uma pessoa desconhecida envia um comprovante de Pix " +
            "e pede que você devolva um valor que supostamente recebeu por engano. O que fazer?",

        opcoes: [
            "Devolvo para a chave Pix que a pessoa enviar.",
            "Confiro o extrato bancário e procuro meu banco pelos canais oficiais.",
            "Envio meus dados bancários para resolver."
        ],

        correta: 1,

        explicacao:
            "Excelente! Não confie apenas em comprovantes. Confira o " +
            "extrato e, se houver uma transação real, fale com seu banco " +
            "para fazer a devolução pelo procedimento correto."
    }
];


/* =========================
   4. ELEMENTOS DO JOGO
========================= */

const jogoInicio = document.getElementById("jogo-inicio");
const jogoPergunta = document.getElementById("jogo-pergunta");
const resultadoFinal = document.getElementById("resultado-final");

const iniciarJogoBotao = document.getElementById("iniciar-jogo");
const numeroPergunta = document.getElementById("numero-pergunta");
const pontosTexto = document.getElementById("pontos");
const barraProgresso = document.getElementById("barra-progresso");
const categoria = document.getElementById("categoria");
const pergunta = document.getElementById("pergunta");
const opcoes = document.getElementById("opcoes");
const feedback = document.getElementById("feedback");
const proxima = document.getElementById("proxima");

const medalha = document.getElementById("medalha");
const tituloFinal = document.getElementById("titulo-final");
const textoFinal = document.getElementById("texto-final");
const pontuacaoFinal = document.getElementById("pontuacao-final");
const jogarNovamente = document.getElementById("jogar-novamente");

let indiceAtual = 0;
let pontuacao = 0;
let respondeu = false;


/* =========================
   5. INICIAR OU REINICIAR
========================= */

function iniciarJogo() {
    indiceAtual = 0;
    pontuacao = 0;
    respondeu = false;

    jogoInicio.hidden = true;
    resultadoFinal.hidden = true;
    jogoPergunta.hidden = false;

    mostrarPergunta();

    document.getElementById("painel-jogo").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* =========================
   6. MOSTRAR PERGUNTA
========================= */

function mostrarPergunta() {
    const missao = missoes[indiceAtual];

    respondeu = false;

    numeroPergunta.textContent =
        "MISSÃO " + (indiceAtual + 1) + " DE " + missoes.length;

    pontosTexto.textContent = "⭐ " + pontuacao + " pontos";

    barraProgresso.style.width =
        (indiceAtual / missoes.length * 100) + "%";

    categoria.textContent = missao.categoria;
    pergunta.textContent = missao.pergunta;

    feedback.hidden = true;
    feedback.textContent = "";

    proxima.hidden = true;

    opcoes.replaceChildren();

    missao.opcoes.forEach(function (textoOpcao, indice) {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.className = "opcao";
        botao.textContent = textoOpcao;

        botao.addEventListener("click", function () {
            verificarResposta(indice);
        });

        opcoes.appendChild(botao);
    });
}


/* =========================
   7. VERIFICAR RESPOSTA
========================= */

function verificarResposta(escolha) {
    if (respondeu) {
        return;
    }

    respondeu = true;

    const missao = missoes[indiceAtual];
    const botoes = opcoes.querySelectorAll(".opcao");

    botoes.forEach(function (botao, indice) {
        botao.disabled = true;

        if (indice === missao.correta) {
            botao.classList.add("correta");
        }

        if (indice === escolha && escolha !== missao.correta) {
            botao.classList.add("errada");
        }
    });

    if (escolha === missao.correta) {
        pontuacao += 10;
        feedback.textContent = "✅ Resposta correta! " + missao.explicacao;
    } else {
        feedback.textContent = "💡 Vamos aprender! " + missao.explicacao;
    }

    feedback.hidden = false;
    pontosTexto.textContent = "⭐ " + pontuacao + " pontos";

    barraProgresso.style.width =
        ((indiceAtual + 1) / missoes.length * 100) + "%";

    proxima.textContent =
        indiceAtual === missoes.length - 1
            ? "Ver meu resultado 🏆"
            : "Próxima missão →";

    proxima.hidden = false;
}


/* =========================
   8. AVANÇAR NO JOGO
========================= */

function avancarMissao() {
    if (!respondeu) {
        return;
    }

    if (indiceAtual < missoes.length - 1) {
        indiceAtual++;
        mostrarPergunta();
    } else {
        finalizarJogo();
    }
}


/* =========================
   9. MOSTRAR RESULTADO
========================= */

function finalizarJogo() {
    jogoPergunta.hidden = true;
    resultadoFinal.hidden = false;

    pontuacaoFinal.textContent =
        pontuacao + " de 60 pontos";

    if (pontuacao === 60) {
        medalha.textContent = "🥇";
        tituloFinal.textContent = "Detetive de elite!";
        textoFinal.textContent =
            "Incrível! Você identificou todos os sinais de alerta. " +
            "Continue usando esse cuidado nas redes sociais.";
    } else if (pontuacao >= 40) {
        medalha.textContent = "🥈";
        tituloFinal.textContent = "Excelente investigação!";
        textoFinal.textContent =
            "Você está no caminho certo! Já reconhece muitos golpes. " +
            "Continue praticando para melhorar ainda mais.";
    } else if (pontuacao >= 20) {
        medalha.textContent = "🥉";
        tituloFinal.textContent = "Detetive em treinamento!";
        textoFinal.textContent =
            "Você já aprendeu algumas dicas importantes. " +
            "Revise as orientações e tente novamente.";
    } else {
        medalha.textContent = "🔎";
        tituloFinal.textContent = "Sua investigação continua!";
        textoFinal.textContent =
            "Não desanime! Aprender leva tempo. " +
            "Releia as dicas e tente mais uma vez.";
    }

    resultadoFinal.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* =========================
   10. EVENTOS DOS BOTÕES
========================= */

iniciarJogoBotao.addEventListener("click", iniciarJogo);

proxima.addEventListener("click", avancarMissao);

jogarNovamente.addEventListener("click", iniciarJogo);