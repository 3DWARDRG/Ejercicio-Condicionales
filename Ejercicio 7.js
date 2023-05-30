alert("Ejercicio dia de la semana.");
let hi=prompt("Dime un dia de la semana.").toLowerCase();
let dayoftheweek= ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

if(dayoftheweek.includes(hi)){
    if(hi===dayoftheweek[0]){
        alert("Los lunes son el inicio de una semana de oportunidades.");
    }
    else if(hi===dayoftheweek[4]){
        alert("Los viernes son en su mayoria el inicio de un descanso.");
    }
    else if(hi===dayoftheweek[5] || hi===dayoftheweek[6]){
        alert("Bienvenido a un fin de semana grandioso.")
    }
    else if(hi===dayoftheweek[1] || hi===dayoftheweek[2] || hi===dayoftheweek[3]){
        alert("No hay dias especiales, el especial tienes que ser tu en cualquier dia.")
    }
}

else {
    alert("Escribe la informacion correcta.")
}

