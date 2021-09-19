function carregar() {
    var msg = window.document.getElementById('msg') //Cria um obj | msg é o ID da msg
    var img = window.document.getElementById('imagem') //Cria um obj imagem | Imagem é o ID da Imagem
    var data = new Date() // pega da data
    var hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        //Bom dia    
        document.body.style.background = '#43614e' //Troca a cor do site
        msg.innerHTML = `Bom dia, <br> Agora são ${hora} horas` //Escreve no site
        img.src = 'img/fotomanha.png' //Coloca uma img no site
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = '#845567'
        msg.innerHTML = `Boa tarde, <br> Agora são ${hora} horas`
        img.src = 'img/fototarde.png'
        //Boa tarde
    } else {
        //Boa noite 
        document.body.style.background = '#3f3456'
        msg.innerHTML = `Boa noite, <br> Agora são ${hora} horas`
        img.src = 'img/fotonoite.png'
    }
}