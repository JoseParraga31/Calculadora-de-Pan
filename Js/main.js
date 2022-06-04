//recetario interactivo

let Harina = parseInt(prompt("introdusca el peso total del Harina en Gr"));
let Agua = parseInt(prompt("introdusca el peso total del Agua en Gr"));
let Levadura = parseInt(prompt("introdusca el peso total de Levadura en Gr"));
let Sal = parseInt(prompt("introdusca el peso total de Sal en Gr"));
let PesoTotal = 0;
let HidratacionFinal = 0;

function Hidratcion(n1,n2,n3){
    HidratacionFinal = n1 * n2 / n3;
}
function sumar(n1,n2,n3,n4){
    PesoTotal = n1 + n2 + n3 + n4;
}
function mostrar(mensaje){
    console.log(mensaje);
}
    console.log("tu lista de ingredientes es:");
    console.log("harina"+"=" + Harina + "gr");
    console.log("Agua"+"=" + Agua + "gr");
    console.log("levadura"+"=" + Levadura + "gr");
    console.log("sal"+"=" + Sal + "gr");

sumar(Harina,Agua,Levadura,Sal);
mostrar("El Peso total es de " + PesoTotal + "gr")
Hidratcion(Agua,100,Harina)
mostrar("La hidratacion total es de "+ HidratacionFinal+"%")