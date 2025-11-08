 function checkUsernameAvailability(username) {
  const taken = ['admin', 'root', 'user'];
  return new Promise(resolve => {
    setTimeout(() => resolve(!taken.includes(username.toLowerCase())), 2000);
  });
}


const input = document.getElementById("username");
const msg = document.getElementById("msg");

input.addEventListener("input", () => {
  msg.textContent = "Verificando...";
  checkUsernameAvailability(input.value).then((available) => {
    msg.textContent = available
      ? "Username disponível"
      : "Nome já em uso";
  });
});