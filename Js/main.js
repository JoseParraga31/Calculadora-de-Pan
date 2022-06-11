//recetario interactivo
function ingresedatos(mensaje){
    return parseInt(prompt(mensaje))
}
function sumar(n1,n2,n3,n4){
    pesoTotal = n1 + n2 + n3 + n4;
}
function mostrar(mensaje){
    console.log(mensaje);
}
function Hidratcion(n1,n2,n3){
    hidratacionFinal = n1 * n2 / n3;
}
//funcion constructora para crear las recetas y capturarla en objetos
class Receta {
    constructor(harina, agua, levadura, sal ){
        this.harina = harina;
        this.agua = agua;
        this.levadura = levadura;
        this.sal = sal;
    }
    
}
let harina1 = ingresedatos("introdusca el peso total del Harina en Gr");
let agua1 = ingresedatos("introdusca el peso total del Agua en Gr");
let levadura1 = ingresedatos("introdusca el peso total de Levadura en Gr");
let sal1 = ingresedatos("introdusca el peso total de Sal en Gr");

const receta1 = new Receta(harina1,agua1,levadura1,sal1)
mostrar(receta1)
sumar(harina1,agua1,levadura1,sal1);
mostrar("El Peso total es de " + pesoTotal + "gr")
Hidratcion(agua1,100,harina1)
mostrar("La hidratacion total es de "+ hidratacionFinal+"%")
for(const propiedad in receta1){
    console.log(propiedad + "="+ receta1[propiedad]+"Gr");
} 