//funcion construtora
function capturar(){
    class Ingrediente {
        constructor(ingrediente, peso, categoria){
            this.categoria = categoria;
            this.ingrediente = ingrediente;
            this.peso = peso;
        }   
    }
    let categoriaCapturada = prompt("Indique el tipo de ingrediente(Liquido,Seco,Levadura,Grasa,otro)");
    console.log(categoriaCapturada);
    let ingredientecapturado = prompt("Indique el nombre del ingrediente de la formula");
    console.log(ingredientecapturado);
    let pesocapturado = prompt("Indique el Peso total de" + " " + ingredientecapturado + " " + "en gr");
    console.log(pesocapturado);

    nuevoIngrediente = new Ingrediente(ingredientecapturado,pesocapturado,categoriaCapturada);
    console.log(nuevoIngrediente);
    agregar();
}

let receta = [];
function agregar(){
    receta.push(nuevoIngrediente)
    console.log(receta);

};
while(capturar() != "ESC"){
    capturar()
    
    capturar()= prompt("Si desea salir ingrese ESC")

}
console.log(capturar());

