function relogio() {
  let today = new Date();

  var hora = today.getHours();
  let minutos = today.getMinutes();
  let segundos = today.getSeconds();
  let periodo = "AM";

  document.querySelector(".hora").innerHTML = hora;
  document.querySelector(".minutos").innerHTML = minutos;
  document.querySelector(".segundos").innerHTML = segundos;
  document.querySelector(".periodo").innerHTML = periodo;
}
let atualizaRelogio = setInterval(relogio, 1000);