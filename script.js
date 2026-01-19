const form = document.getElementById("dadosSalvos");
const mensagem = document.getElementById("mensagemSucesso");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 


  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const servico = document.getElementById("servico").value;
  const msg = document.getElementById("msg").value;

 
  if (!nome || !telefone || !email || !servico || !msg) {
    alert("Por favor, preencha todos os campos.");
    return;
  }


  const dadosFormulario = {
    nome,
    telefone,
    email,
    servico,
    msg
  };

  localStorage.setItem("dadosSalvos", JSON.stringify(dadosFormulario));

  mensagem.classList.remove("d-none");

 
  form.reset();
});
