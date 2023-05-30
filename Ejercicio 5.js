let num1 =prompt ("Dame un numero.");
let num2 =prompt ("Dame otro numero.");


if(num1 < num2 ){
    alert( num1 + " es el numero menor.")
}

else if (num2 < num1){
    alert(num2 + " es el numero menor.")
}

else if(num2 == null || num1 == null){
    alert("Introduce un numero, campos vacios")
}

else{
    alert(num1 +  num2 +" Introduce valores validos")
}