const form = document.querySelector("#form-habits") /* foi usado o ide pra selecionar formulario */
const nlwSetup = new NLWSetup(form)/* foi utilizado o nome da variavel nlwSetup, criou novo objeto setup */
const button = document.querySelector("header button") /* criamos função e add função, que foi colocado na variavel button */
button.addEventListener("click", add)/* essa função adiciona evento, o evento é o click */
form.addEventListener("change", save) /* form ta no html */

function add() {
  const today = new Date()
    .toLocaleDateString("pt-br")
    .slice(
      0,
      -5
    ) /* funcionalidade slice corta objeto tipo string, -5 corta de tras pra frente */
  /* const today = "10/01" */ /* para addcionar dia manual */
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso 🔴")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem(
    "NLWSetup@habits",
    JSON.stringify(nlwSetup.data)/* JSON.stringfy tranformou objeto em string */
  ) /* NLWSetup@habits foi nome q eu escolhi de chave, ele guardou infformação no data */
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}/* json parse tranforma em objeto de novo */
nlwSetup.setData(data) /* foi adicionado o objeto data */
nlwSetup.load() /* vai carregar os dados e perceber os dias e adicionar */




