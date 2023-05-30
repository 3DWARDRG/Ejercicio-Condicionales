/* alert("Ejercicio de numeros del 1 al 10");
let answer=Number(prompt("Dame un numero del 1 al 10."));

if(isNaN(answer)){
    alert("Introduce numeros validos.");
}

else{
    if(answer >= 1 && answer <= 10){
        if(answer < 6){
            alert("Reprobado");
        }
        else if(answer >=6 && answer <=8){
            alert("Regular");
        }
        else if(answer === 9){
            alert("Bien");
        }
        else if(answer === 10){
            alert("Excelente");
        }
    }

    else{
        alert("Error")
    }
}
*/

alert("Ejercicio de numeros del 1 al 10");
let answer=Number(prompt("Dame un numero del 1 al 10."));

if(isNaN(answer)){
    alert("Introduce numeros validos.");
}

else{
    if(answer >= 1 && answer <= 10){
        switch(answer){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            alert("Reprobado");
            break;
            case 6:
            case 7:
            case 8:
            alert("Regular");
            break;
            case 9:
            alert("Bien");
            break;
            case 10:
            alert("Excelente");
            break;
    }
   
    }

    else{
        alert("Error.")
    }

}