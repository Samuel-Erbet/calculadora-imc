
const calcular = document.getElementById('calcular')

function imc(){

    let nome= document.getElementById('nome').value
    let altura= document.getElementById('altura').value
    let peso= document.getElementById('peso').value
    let resultado= document.getElementById('resultado')

    resultado.innerHTML= ''

    if(nome == '' && altura == '' && peso == ''){
        resultado.innerHTML ='preencha todos os campos'
    }else{
        let valorIMC = ((peso / (altura * altura)).toFixed(2))

        let classificacao = ''

        if(classificacao<18.5){
            classificacao = 'abaixo do peso'
        } else if(classificacao<25){
            classificacao ='com peso ideal. parabéns!!'
        } else if (classificacao<30){
            classificacao ='levemente acima do peso'
        } else if (classificacao<35){
            classificacao ='você está com obesidade grau 1°'
        } else if (classificacao<40){
            classificacao = 'você está com obesidade grau 2°'
        } else{
            classificacao = 'você está com obesidade mórbida'
        }
        resultado.innerHTML += `${nome} você está com ${valorIMC} de IMC e ${classificacao}.` 
            
    } 
}

calcular.addEventListener('click', imc)
