document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#password");

  togglePassword.addEventListener("click", function () {
    // Alterna entre o tipo 'password' e 'text'
    const type = password.type === "password" ? "text" : "password";
    password.type = type;

    // Alterna os ícones
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
});
