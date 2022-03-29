const Imc = document.querySelector('#btnIMC');
const imagenPeso = document.querySelector('#img')

Imc.addEventListener('click', function(){
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const totalImc = parseFloat(peso)/parseFloat(altura*altura);
    const resultado = document.querySelector('#resultadoImc');

    if(totalImc<18.5){
        resultado.textContent='Usted esta bajo de peso'+totalImc.toFixed ;
        imagenPeso.src='img/bajoPeso.jpg ', 'u-full-width';
    }else{
        if(totalImc>= 18.5 && totalImc<=24.9){
            
            resultado.textContent='Usted esta saludable';
        }else{
            if(totalImc>=25 && totalImc<=29.9){
                resultado.textContent='Usted esta en sobrepeso';
            }else{
                if(totalImc>=30 && totalImc<=34.9){
                    resultado.textContent='Usted esta obeso en nivel 1';
                }else{
                    if(totalImc>=35 && totalImc<=39.9){
                        resultado.textConten='Usted esta obeso en nivel 2';
                    }else{
                        resultado.textContent='Usted esta obeso en nivel 4';
                    }
                }
            }
        }
    }
});