let dataFuruta = new Date('2023-01-15T00:00:00.000').getTime();

let dias, horas, minutos, segundos;



setInterval(function(){
  let dataAtual = new Date().getTime();

  let segundosTotal = (dataFuruta-dataAtual)/1000
  
  dias = parseInt(segundosTotal/86400);
  segundosTotal = segundosTotal%86400;

  horas = parseInt(segundosTotal/3600);
  segundosTotal = segundosTotal%3600;

  minutos = parseInt(segundosTotal/60);
  segundos = parseInt(segundosTotal%60);
  
  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;

},1000);



