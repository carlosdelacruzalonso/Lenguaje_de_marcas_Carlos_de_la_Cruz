/*
Comentario en bloque
*/

// Comentario en linea

//Forma 1 usando alert()

// alert("¡Hola Mundo!");

//Forma 2 usando console.log()

// console.log("Hola mundo");

//Forma 3 document.write()

// document.write("Hola Mundo");

// Funciones en java
// Una funcion es un bloque de código que no se ejecuta hasta que no ha sido llamado



function sumar (){
    // 1º Obtener los valores
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    let suma = parseInt(n1) + parseInt(n2);

    document.getElementById("resultado").textContent = suma;
    document.getElementById("resultado").innerHTML = "La suma es: "+suma;


}


/*

Lo mismo pero con prompts

let num1 = prompt("Introduzca el número 1:");
let num2 = prompt("Introduzca el número 2:");

let suma = parseInt(num1) + parseInt(num2);

alert("La suma es : "+suma);

*/