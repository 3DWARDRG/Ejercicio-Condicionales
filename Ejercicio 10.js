alert("Cuanto debes pagar mensualmente y en total de acuerdo a la duracion de tu curso.")

let answertypecourse= prompt("El programa educativo contempla 3 diferentes niveles (Course, Carrera, Master)\n Escribe cual deseas para continuar.").toLowerCase();
let typecourse= {
    "course": 4999,
    "carrera": 3999,
    "master": 2999
};

let answertypebeca;


let typebeca= {
    "facebook": 20,
    "google": 15,
    "jesua": 50
}

let pricecoursemonthly;
let totalexpenses;

if(typecourse[answertypecourse]){
   pricecoursemonthly=typecourse[answertypecourse];

   answertypebeca= prompt("cuenta con alguna beca (Facebook, Google, Jesua)").toLowerCase();

   if(typebeca[answertypebeca]){
    let discount=calculatePorcentage(answertypecourse , answertypebeca);
    let total= pricecoursemonthly-discount;
    switch(answertypecourse){
        case "course":
        totalexpenses= total * 2;
        break;
        case "carrera":
        totalexpenses=total * 6;
        break;
        case "master":
        totalexpenses=total * 12;
        break;
    }

    alert("Tu programa te costara al mes un total de " + parseInt(total) + " MXN. \n Tu programa en total tendra un costo de " + parseInt(totalexpenses) + " MXN." )
   }

   else if(answertypebeca==="no"){
    switch(answertypecourse){
        case"course":
            totalexpenses= typecourse[answertypecourse] * 2;
            break;
        case"carrera":
            totalexpenses=typecourse[answertypecourse] * 6;
            break;
        case"master":
            totalexpenses=typecourse[answertypecourse] * 12;
            break;
    }

    alert("Tu programa te costara al mes un total de " + pricecoursemonthly + " MXN. \n Tu programa en total tendra un costo de " + totalexpenses + " MXN." )
   }

   else{
    "Introduce una respuesta correcta."
   }
}

else{
    alert("Digita un tipo de curso valido")
}




function calculatePorcentage(answertypecourse,answertypebeca){
    let porcentage=(typecourse[answertypecourse] * typebeca[answertypebeca]) / 100;
    return porcentage;
}

// No utilize metodos y me excuse en una sola funcion para aprovechar al maximo la logica en las condicionales