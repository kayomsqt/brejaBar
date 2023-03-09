const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const desejoInput = document.querySelector("#desejo");
const massageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (nameInput.value === "") {
    alert("Por favor, preencha o seu nome");
    return;
  }
  form.submit();
});
