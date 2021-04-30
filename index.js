/*Considere el siguiente problema:

    Escriba un programa corto que imprima un rango de números del 1 a N.

    Para cada múltiplo de 3, imprima "Geeks" en lugar del número.
    Para cada múltiplo de 5, imprima "Hubs" en lugar del número.
    Para los números que son múltiplos de 3 y 5, imprima "GeeksHubs" en lugar del número.
    Cada número debe de estar en una línea nueva.
    El resultado se debe de ser una string.
    
    Se atiende al siguiente ejemplo:

    Iterador 3
    1
    2
    Geeks

    Iterador 7
    1
    2
    Geeks
    4
    Hubs
    Geeks
    7

    Iterador 16
    1
    2
    Geeks
    4
    Hubs
    Geeks
    7
    8
    Geeks
    Hubs
    11
    Geeks
    13
    14
    GeeksHubs
    16
    
    
    */


let iterador = 50;

for (let i = 1; i <= iterador; i++){
    if((i % 3 == 0) && (i % 5 != 0)){
        console.log("Geeks");
    } else if ((i % 3 != 0) && (i % 5 == 0)) {
        console.log("Hubs");
    } else if ((i % 3 == 0) && (i % 5 == 0)){
        console.log("GeeksHubs");
    } else {
        console.log("Iterador ",i);
    };
};