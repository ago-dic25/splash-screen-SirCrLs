var x = 0;
var arreglo = [1,2,3,4,5];
var entero = 1

//Constantes
const PI = 3.1416; 

//Funciones
function suma(a, b){
    var resultado = a + b
    console.log("El resultado de la suma es "+ resultado)
    return resultado;
}

function imprimirMensaje(mensaje){
    console.log("Este es mi mensaje" + mensaje);
}

imprimirMensaje("Hola");
imprimirMensaje(true); //Lo convierte en cadena

suma(1, 2);
suma(10, 20);


//Elementos de la pagina omo variables
var botonBuscar = document.getElementById("buscar");
console.log(botonBuscar)

//Eventos
botonBuscar.addEventListener("click", function(){
    alert("Hiciste click al boton")
    botonBuscar.classList.add("rojo")
})
//para poner en el doc de html al final <script src = ""> </script> 

//css
.rojo{
    background-color: red;
}


//agregar un boton 



mas.addEventListener("click", function(){
    alert("Seccion en progreso...");
});

verTodos.addEventListener("click", function)