// Mensagem de boas-vindas no console
console.log("Bem-vindo ao meu portfólio!");

// Função para destacar títulos ao passar o mouse
const titulos = document.querySelectorAll("h3");

titulos.forEach(titulo => {
  titulo.addEventListener("mouseenter", () => {
    titulo.style.color = "#e67e22";
  });

  titulo.addEventListener("mouseleave", () => {
    titulo.style.color = "#1abc9c";
  });
});


botaoTema.textContent = "Alternar Tema";
botaoTema.style.margin = "20px";
botaoTema.style.padding = "10px";
botaoTema.style.cursor = "pointer";
document.body.insertBefore(botaoTema, document.body.firstChild);

let modoEscuro = false;

;