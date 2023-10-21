let currentInput = "";
let display = document.getElementById("display");

const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener("click", () => {
  body.classList.toggle("day-mode");
  body.classList.toggle("night-mode");
});


function appendToDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  display.value = "";
}
// Funcion  para calcular el resultado de la exprecion ingresada por el usuario
function calculateResult() {
  try {
    const result = eval(currentInput); // Evalua el resultado de la expresion y guarda el resultado
    display.value = result; // Muestra el resultado en el display
    currentInput = result.toString(); // Convierte el resultado en una CADENA  y lo almacena
  } catch (error) {
    display.value = " ERROR"; // En caso del que el usuario haga alguna operacion erronea muestra un error en el display
  }
}