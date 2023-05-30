alert("Verificacion de Numero Mayor".toUpperCase())
let num1 =prompt ("Dame un numero.");
let num2 =prompt ("Dame otro numero.");
let num3 =prompt ("Dame un ultimo numero");

if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
    alert("Introduce Numeros pendejo!.");
} else {

    if(num1 == num2 && num1 > num3){
        alert(num1 + " es el numero mayor");
    }

    else if(num2 == num1 &&  num2 > num3){
        alert(num2 + " es el numero mayor");
    }

    else if(num3 == num2 && num3 > num1){
        alert(num3 + " es el numero mayor");
    }

 else if(num1 > num2 && num1 > num3){
    alert(num1 + " es el numero mayor");
}

else if(num2 > num1 && num2 > num3){
    alert(num2 + " es el numero mayor");
}

else if(num3 > num1 && num3 > num2){
    alert(num3 + " es el numero mayor");
}

else{
    alert("Los 3 caracteres son iguales");
}

}
