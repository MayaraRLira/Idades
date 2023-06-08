function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let genero = ' '
        let img = document.getElementById('foto')
        
        if (fsex[0].checked){
            genero = 'homem'
                if ( idade >= 0 && idade <= 10){
                  img.src = './menino.jpg'
                }
                else if ( idade < 25){
                    img.src = './jovemH.jpg'
                }
                else if ( idade < 50){
                    img.src = './homem.jpg'
                }
                else {
                    img.src = './idoso.jpg'
                }
        }
        else if (fsex[1].checked){
            genero = 'mulher'
            if ( idade >= 0 && idade <= 10){
                img.src = './menina.jpg'
            }
            else if ( idade < 25){
                img.src = './jovemM.jpg'
            }
            else if ( idade < 50){
                img.src = './mulher.jpg'
            }
            else {
                img.src = './idosa.jpg'
            }
        }
      
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)
    }
}