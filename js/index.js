const juego = document.querySelector("#juego");
const miMano = document.querySelector(".result1");
const PC = document.querySelector(".result2");
const resultado = document.querySelector(".ganaste");
let resultPc, resultMano;

let results3 = [1,2,3,4];

function opcionMano() {

    resultMano = Math.floor(Math.random() * results3.length) ;
    /*if (number === 0) {
        return number++;
    }*/

    //Si lo de la izquierda es posivito, se hara lo que esta despues del &&//And.
    //console.log("Antes de ponerle ++ 1",number);
    resultMano === 0 && resultMano++
    //console.log("Numero actualizado 1:");
    //return number;
    return resultMano;
}
function opcionPc() {
    resultPc =  Math.floor(Math.random() * results3.length);
    /*if (number === 0) {
        return number++;
    }*/
    //Si lo de la izquierda es posivito, se hara lo que esta despues del &&//And.
    //console.log("Antes de ponerle ++ 2",number);
    resultPc === 0 && resultPc++;
    //console.log("Numero actualizado 2:");
    //return number;
    return resultPc;
}
/*
1: piedra
2: papel
3: tijera

1 si hand1 == 1 && hand2 == 2
Perdiste

2 si hand1 == 2 && hand2 == 1
Ganaste

3 si hand1 == 2 && hand2 == 3
perdiste

4 si hand1 == 3 && hand2 == 2
ganaste

5 si hand1 == 3 && hand2 == 1
perdiste

6 si hand1 == 1 && hand2 == 3
ganaste

7 si hand1 == 1 && hand2 == 1
empate
8 si hand1 == 2 && hand2 == 2
empate
9 si hand1 == 3 && hand2 == 3
empate



*/

function resultado1(dato1,dato2){
    //console.log("Opcion mano: ", dato1, "Opcion PC:", dato2);
    //console.log("Entrando a resultado");
    
    if (dato1 === 1 && dato2 === 2) {
        resultado.innerText = "Perdiste"
        //console.log(opcionMano() === 1 && opcionPc() === 2);
    } else
    if (dato1 === 2 && dato2 === 1) {
        resultado.innerText = "Ganaste"
        //console.log(opcionMano() === 2 && opcionPc() === 1);
    } else
    if (dato1 === 2 && dato2 === 3) {
        resultado.innerText = "Perdiste";
        //console.log(opcionMano() === 2 && opcionPc() === 3)
    } else
    if (dato1 === 3 && dato2 === 2 ) {
        resultado.innerText = "Ganaste";
        //console.log(opcionMano() === 3 && opcionPc() === 2);
    } else
    if (dato1 === 3 && dato2 === 1) {
        resultado.innerText = "Perdiste";
        //console.log(opcionMano() === 3 && opcionPc() === 1)
    } else
    if (dato1 === 1 && dato2 === 3) {
        resultado.innerText = "Ganaste";
        //console.log(opcionMano() === 1 && opcionPc() === 3);
    } else
    if (dato1 === 1 && dato2 === 1) {
        resultado.innerText = "Empate";
        //console.log(opcionMano() === 1 && opcionPc() === 1);
    } else
    if (dato1 === 2 && dato2=== 2) {
        resultado.innerText = "Empate";
        //console.log(opcionMano() === 2 && opcionPc()=== 2);
    } else
    if (dato1 === 3 && dato2 === 3) {
        resultado.innerText = "Empate";
        //console.log(opcionMano() === 3 && opcionPc() === 3);
    }
    
}

function play() {
    opcionMano();
    opcionPc();
    console.log(resultMano,resultPc);
    mostrar(resultMano, resultPc);
    //console.log("Llamando a resultado")
    resultado1(resultMano,resultPc);
}

function mostrar(resultado, resultado2) {
    /*miMano.innerText = `Kevin: ${resultado === 1 ? "Piedra" : resultado === 2 ? "Papel" : "Tijera"}`;
    PC.innerText  = ` Pc: ${resultado2 === 1 ? "Piedra" : resultado === 2 ? "Papel" : "Tijera"} `;
*/
    if (resultado === 1) {
        miMano.innerText = "Kevin: Piedra";
    }else if(resultado === 2){
        miMano.innerText = "Kevin: Papel";
    }else if(resultado === 3){
        miMano.innerText = "Kevin: Tijera";
    }

    if (resultado2 === 1) {
        PC.innerText = "PC: Piedra";
    }else if(resultado2 === 2){
        PC.innerText = "PC: Papel";
    }else if(resultado2 === 3) {
        PC.innerText = "PC: Tijera";
    }


}