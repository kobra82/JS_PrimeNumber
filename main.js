const mask = document.querySelector(".mask");
const inputs = document.querySelector("input");
inputs.focus();

function calcola() {
  let numero = Number(inputs.value);
  let primo = true;
  if (numero <= 3) primo = true;
  else if (numero % 2 == 0) primo = false;
  else {
      let incr = 3;
      do {
      if (numero % incr == 0) {
        primo = false;
        break;
      }
      incr++;
    } while (incr < Math.round(Math.sqrt(numero)));
  }

  output = document.createElement("p");
  let text = "Il numero e' primo";

  if (primo == true) {
    if (mask.children[1] == undefined) {
      output.append(text);
      mask.appendChild(output);
    } else {
      output.append(text);
      mask.children[1].replaceWith(output);
    }
  } else {
    if (mask.children[1] != undefined) {
      mask.removeChild(mask.children[1]);
    }
  }
}

inputs.addEventListener("change", calcola);
