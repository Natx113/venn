var izq = false;
var der = false;
var cen = false;
var u = false;

function izqf() {
  izq = true;
  document.getElementById("path3966").style.fill = "#00FF00";
}
function derf() {
  der = true;
  document.getElementById("path3966-7").style.fill = "#00FF00";
}
function cenf() {
  cen = true;
  document.getElementById("path4013").style.fill = "#00FF00";
}
function uf() {
  u = true;
  document.getElementById("path4015").style.fill = "#00FF00";
}

function reset() {
  //funncion que reseta y reinicia los colores y valores
  izq = false;
  document.getElementById("path3966").style.fill = "";

  der = false;
  document.getElementById("path3966-7").style.fill = "";

  cen = false;
  document.getElementById("path4013").style.fill = "";

  u = false;
  document.getElementById("path4015").style.fill = "";

  document.getElementById("formula").textContent = "Resultado";
}

function calcular() {
  //algoritmo para calcular cada funcion

  if (izq && der && cen && u) {
    //universo completo
    document.getElementById("formula").textContent = "U";
  } else if (izq == false && der == false && cen == false && u == false) {
    //universo vacio
    document.getElementById("formula").textContent = "Φ";
  } else if (izq == false && der == false && cen == true && u == false) {
    //A∩B
    document.getElementById("formula").textContent = "A∩B";
  } else if (izq == true && der == true && cen == true && u == false) {
    //A∪B
    document.getElementById("formula").textContent = "A∪B";
  } else if (izq == true && der == false && cen == false && u == false) {
    //A-B
    document.getElementById("formula").textContent = "A-B";
  } else if (izq == false && der == true && cen == false && u == false) {
    //B-A
    document.getElementById("formula").textContent = "B-A";
  } else if (izq == true && der == true && cen == false && u == false) {
    //AΔB
    document.getElementById("formula").textContent = "AΔB";
  } else if (izq == true && der == false && cen == true && u == false) {
    //A
    document.getElementById("formula").textContent = "A";
  } else if (izq == false && der == true && cen == true && u == false) {
    //B
    document.getElementById("formula").textContent = "B";
  } else if (izq == true && der == true && cen == true && u == true) {
    //Universo completo
    document.getElementById("formula").textContent = "U";
  }
  //---------------------------------------------------------------------------------------------inican complementos
  else if (izq == false && der == false && cen == false && u == true) {
    //(A∪B) complemento
    document.getElementById("formula").textContent = "(A∪B)'";
  } else if (izq == true && der == true && cen == false && u == true) {
    //(A∩B) complemento
    document.getElementById("formula").textContent = "(A∩B)'";
  } else if (izq == false && der == true && cen == false && u == true) {
    //A complemento
    document.getElementById("formula").textContent = "(A)'";
  } else if (izq == true && der == false && cen == false && u == true) {
    //B complemento
    document.getElementById("formula").textContent = "(B)'";
  } else if (izq == false && der == true && cen == true && u == true) {
    //(A-B) complemento
    document.getElementById("formula").textContent = "(A-B)'";
  } else if (izq == false && der == true && cen == true && u == true) {
    //(A-B) complemento
    document.getElementById("formula").textContent = "(A-B)'";
  } else if (izq == true && der == false && cen == true && u == true) {
    //(B-A) complemento
    document.getElementById("formula").textContent = "(B-A)'";
  } else if (izq == false && der == false && cen == true && u == true) {
    //(AΔB) complemento
    document.getElementById("formula").textContent = "(AΔB)'";
  }
}
