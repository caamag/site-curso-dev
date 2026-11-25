// =====================================================================
// SCRIPT.JS · o COMPORTAMENTO do site
// =====================================================================
// Este arquivo faz 4 coisas:
//   1. Abre e fecha o menu do celular
//   2. Marca no menu a seção em que o visitante está
//   3. Faz o formulário abrir o WhatsApp com a mensagem pronta
//   4. Coloca o ano atual no rodapé
//
// Lembrete: o JavaScript só COLOCA e TIRA classes (aberto, ativo).
// Quem cuida do visual dessas classes é o CSS.
//
// Tudo que começa com // é um comentário: o navegador ignora.
// =====================================================================


// ===== 1. MENU DO CELULAR =====

// document.querySelector("#...") procura no HTML o elemento com aquele id
// e guarda ele numa constante (const), para usarmos depois.
const botaoMenu = document.querySelector("#botao-menu");
const menu = document.querySelector("#menu");

// addEventListener("click", ...) = "quando clicarem no botão, faça isto:"
botaoMenu.addEventListener("click", function () {
  // toggle funciona como um interruptor:
  // se o menu NÃO tem a classe "aberto", coloca; se tem, tira.
  menu.classList.toggle("aberto");
});

// Fecha o menu quando o visitante escolhe um link.
// querySelectorAll("a") pega TODOS os links de dentro do menu, numa lista.
// forEach repete o que está entre chaves para cada link da lista.
menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aberto"); // tira a classe: o menu fecha
  });
});


// ===== 2. MENU MOSTRA A SEÇÃO ATUAL =====
// O IntersectionObserver funciona como o painel do elevador que acende
// o número do andar: ele vigia as seções e avisa quando uma delas
// passa pelo meio da tela.

const linksMenu = document.querySelectorAll(".menu a");

const observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    // isIntersecting = "esta seção está na faixa vigiada agora?"
    if (entrada.isIntersecting) {
      // Apaga todos os links...
      linksMenu.forEach(function (link) {
        link.classList.remove("ativo");
      });

      // ...e acende só o link da seção atual.
      // Se a seção tem id="projetos", o seletor fica: .menu a[href="#projetos"]
      // Por isso os ids das seções precisam ser IGUAIS aos links do menu.
      const linkAtual = document.querySelector('.menu a[href="#' + entrada.target.id + '"]');
      linkAtual.classList.add("ativo");
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
// O rootMargin encolhe a área vigiada para uma faixa estreita no meio da tela,
// para que só uma seção seja "o andar atual" de cada vez.

// Manda o observador vigiar cada <section> que está dentro do <main>
document.querySelectorAll("main section").forEach(function (secao) {
  observador.observe(secao);
});


// ===== 3. FORMULÁRIO ABRE O WHATSAPP =====
// O link do WhatsApp tem este formato:
//   https://wa.me/5511999999999?text=Olá!
// Depois de wa.me/ vem 55 (Brasil) + DDD + número, tudo junto,
// sem espaços, parênteses ou traços. Depois de ?text= vem a mensagem.

const formulario = document.querySelector("#formulario");
const meuWhatsApp = "5511999999999"; // TROQUE pelo seu número: 55 + DDD + número

// "submit" = o evento de envio do formulário
// (acontece ao clicar no botão ou apertar Enter)
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // impede a página de recarregar (o comportamento normal do formulário)

  // .value pega o que o visitante digitou ou escolheu em cada campo
  const nome = document.querySelector("#nome").value;
  const tipo = document.querySelector("#tipo").value;
  const mensagem = document.querySelector("#mensagem").value;

  // Monta a mensagem juntando textos com o sinal de +
  // "\n" é uma quebra de linha: cada informação chega numa linha
  const texto = "Olá, Marina! Sou " + nome + ".\n" +
    "Tipo de projeto: " + tipo + "\n" +
    "Sobre o projeto: " + mensagem;

  // encodeURIComponent "embala" o texto para viajar dentro de um link:
  // espaços, acentos e quebras de linha viram códigos que o WhatsApp entende.
  const link = "https://wa.me/" + meuWhatsApp + "?text=" + encodeURIComponent(texto);

  // Abre o link numa nova aba ("_blank"). No celular, abre direto o aplicativo.
  window.open(link, "_blank");
});


// ===== 4. ANO DO RODAPÉ SEMPRE ATUALIZADO =====
// new Date() pega a data de hoje e getFullYear() devolve só o ano.
// textContent troca o texto de dentro do span#ano.
// No ano que vem, o rodapé muda sozinho!
document.querySelector("#ano").textContent = new Date().getFullYear();
