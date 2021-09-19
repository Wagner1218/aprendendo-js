function verificar() {
    var data = new Date() //Pega a data atual
    var ano = data.getFullYear() //Pega o ano com os 4 digitos
    var formano = document.getElementById('txtano')
    var resp = document.querySelector('div#resp')

    if (formano.value.length == 0 || Number(formano.value) > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var formradsex = document.getElementsByName('radsex') //Verifica qual bolinha foi selecionada, masc = 0 e fem = 1
        var idade = ano - Number(formano.value)
        var genero = ''
        var img = document.createElement('img') //cria uma tag <img>
        img.setAttribute('id', 'foto') //Adiciona um id <img id='foto'>
        if (formradsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/crianca_m.png') //Atribui o src a img
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem_m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adulto_m.png')
            } else {
                img.setAttribute('src', 'img/senhor_m.png')
            }
        } else if (formradsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/crianca_f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem_f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adulto_f.png')
            } else {
                img.setAttribute('src', 'img/senhora_f.png')
            }
        }
        resp.style.textAlign = 'center' //Coloca tudo no centro
        resp.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resp.appendChild(img) //mostra a img após o texto
    }
}