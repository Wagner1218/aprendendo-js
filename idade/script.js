function verificar() {
    var data = new Date() //pega a data atual
    var ano = data.getFullYear() //Pega a data com os 4 digitos
    var formano = document.getElementById('txtano')
    var resp = document.querySelector('div#resp')

    if (formano.value.length == 0 || Number(formano.value) > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var formradsex = document.getElementsByName('radsex') //Verifica qual bolinha foi selecionada, masc = 0 e fem = 1
        var idade = ano - Number(formano.value)
        var genero = ''
        if (formradsex[0].checked) {
            genero = 'Homem'

        } else if (formradsex[1].checked) {
            genero = 'Mulher'
        }
        resp.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}