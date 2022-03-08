


let boton = document.querySelector('#bt');
    boton.addEventListener('click',function(){
        let edad  = parseInt(document.getElementById("edad").value);
        let peso = document.getElementById("peso").value;
        let altura = document.getElementById("altura").value;
        let sexo = document.getElementById("hombre").value;
        let m = document.getElementById("rimc");
        
        let imc = peso/(altura*altura);
        document.getElementById("resultado").innerHTML=imc.toFixed(2); 
        if(imc<18.5){
            document.getElementById("rimc").innerHTML=`Por debajo del peso`;
            m.style.backgroundColor='blue';
        } 
        if(imc>=18.5 && imc<=24.9){
            document.getElementById("rimc").innerHTML=`Saludable`;
            m.style.backgroundColor='green';
        } 
        if(imc>=25.0 && imc<=29.9){
            document.getElementById("rimc").innerHTML=`Con sobrepeso`;
            m.style.backgroundColor='pink';
        }
        if(imc>=30.0 && imc<=39.9){
           document.getElementById("rimc").innerHTML=`obeso`;
            m.style.backgroundColor='gray';
        }
        if(imc>40.0){
            document.getElementById("rimc").innerHTML=`Obesidad extrema o del alto riesgo`;
            m.style.backgroundColor='red';   
        }
        
})