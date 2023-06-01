alert("CREMHELADO");
alert("Elige entre nuestras variedades de toppings para tu helado.");
let entrace= prompt("¿Quieres helado sin topping para empezar con el pedido? \n Responde Si o No").toLowerCase();
let trueanswer= "si";
let icecreamNotTopping= 50;
let toppingOreo= 10;
let toppingKitKat= 15;
let toppingBrownie= 20;
let total= 0;

if(entrace===trueanswer){
    total=icecreamNotTopping+total;
    let question=prompt("¿Quieres añadir alguno de nuestros toppings? \n Responde Si o No").toLowerCase();
    if(question===trueanswer){

        let question2=prompt("¿Quieres añadir el topping de Oreo por 10 MXN mas? \n Responde Si o No").toLowerCase();
        if(question2===trueanswer){
            total= total + toppingOreo;
        }

        let question3= prompt("¿Quieres añadir el topping de Kit kat por 15 MXN mas?").toLowerCase();
        if(question3===trueanswer){
            total= total+toppingKitKat;
        }

        let question4= prompt("¿Quieres añadir el topping de Brownie por 20 MXN mas?").toLowerCase();
        if(question4===trueanswer){
            total=total+toppingBrownie;
        }

        alert("Debes pagar " + total + " MXN por tu pedido.")
    }
    else{
        alert("Debes pagar " + icecreamNotTopping + " MXN por tu pedido." )
    }
}

else{
    alert("gracias por visitarnos.")
}

