let contagem = new Date('oct 12 2022 23:45:00');
let 
let contRefressiva = setInterval(() => ContRegressiva(), sec);

const sec = 1000;
const min = 60*60;
const hours = 60*60;
const days = 60 * 24;



function ContRegressiva() {
  let agora = new Date(Date.now()).getTime();
  let diff = contagem - agora;

  document.getElementById('days').innerText = Math.floor(diff / days);
  document.getElementById('hours').innerText = Math.floor(diff % days / hours);
  document.getElementById('min').innerText = Math.floor(diff % hours / min);
  document.getElementById('sec').innerText = Math.floor(diff % min / sec);
}