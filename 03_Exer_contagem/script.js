function contar() {
  var numinicio = document.querySelector("input#numinicio");
  var numfim = document.getElementById("numfim");
  var numpasso = document.querySelector("input#numpasso");
  var resp = document.getElementById("resp");

  if ( numinicio.value.length == 0 || numfim.value.length == 0 || numpasso.value.length == 0 ) { // Verifica se foi digitado alguma coisa 
    alert("[ERRO] faltam dados");
    resp.innerHTML = `Impossivel contar!`
  } else {
    resp.innerHTML = "Contando: <br>";

    var i = Number(numinicio.value);
    var f = Number(numfim.value);
    var p = Number(numpasso.value);

    if (p <= 0){ // Verifiica se a quantidade de passos é = 0
        alert('Passo inválido! Considerando Passo como 1')
        p = 1
    }
    if (i < f) {
      for (var c = i; c <= f; c += p) {
        resp.innerHTML += `${c} \u{1F449}`; //+= Está concatenado o Contando com os número
      }
    } else {
      for (var c = i; c >= f; c -= p) {
        resp.innerHTML += ` ${c} \u{1F449}`;
      }      
    }
  }
  resp.innerHTML += `\u{1F3C1}`;
}
