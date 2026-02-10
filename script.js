function verificar() {
  let idade = Number(prompt("Digite sua idade:"))

  let resultado = document.querySelector("#resultado")

  if (idade >= 18) {
    resultado.innerText = "Voce é maior de idade"
  } else {
    resultado.innerText = "Voce é menor de idade"
  }
}
