//funcion construtora
function capturar(){
    class Ingrediente {
        constructor(ingrediente, peso, categoria){
            this.categoria = categoria;
            this.ingrediente = ingrediente;
            this.peso = peso;
        }   
    }
    let categoriaCapturada = prompt("Indique el tipo de ingrediente: \n 1-Harina \n 2-Liquidos \n 3-Secos \n 4-Grasas \n 5-Fermento \n 6-Otros");
    switch (categoriaCapturada) {
        case "1":
            alert("Selecionaste el tipo de ingrediente Harina")
            break;
        case "2":
            alert("Selecionaste el tipo de ingrediente Liquido")
            break;
        case "3":
            alert("Selecionaste el tipo de ingrediente Secos")
            break;
        case "4":
            alert("Selecionaste el tipo de ingrediente  Grasas")
            break;
        case "5":
            alert("Selecionaste el tipo de ingrediente  Fermento")
            break;
        case "6":
            alert("Selecionaste el tipo de ingrediente  Otro")
            break;
        
        default:
            alert("Opcion no valida, tipo de intente nuevamente")
            break;
    }
    
    let ingredientecapturado = prompt("Indique el nombre del ingrediente de la formula");
    //console.log(ingredientecapturado);
    let pesocapturado = parseInt(prompt("Indique el Peso total de" + " " + ingredientecapturado + " " + "en gr"));
    //console.log(pesocapturado);

    nuevoIngrediente = new Ingrediente(ingredientecapturado,pesocapturado,categoriaCapturada);
    //console.log(nuevoIngrediente);
    agregar();
};
function mostrar(mensaje){
    console.log(mensaje);
};
function Hidratacion(n1,n2,n3){
    hidratacionfinal = n1 * n2 / n3;
};

const receta = [];
function agregar(){
    receta.push(nuevoIngrediente)
    

};

//interador para agregar mas ingredientes
let volverApreguntar = 0;
while(volverApreguntar != "N"){
    capturar()
    
    volverApreguntar = prompt("Si desea agregar otro ingrediente, escriba S \n Si desea salir ingrese N")

}
//filtro para encontrar los objetos que tengan categoria 1, en este caso las harinas 
let harinas = receta.filter ((elemento) => elemento.categoria === "1");
let liquidos = receta.filter ((elemento) => elemento.categoria === "2");
let harinaTotal = 0;
let LiquidosTotal = 0;
let pesoTotal = 0;

for (let item of receta){
    pesoTotal += item.peso
}

console.log(pesoTotal);
//forOf para recorrer el array y sumar las propiedades.peso
for(let item of harinas){
    harinaTotal += item.peso
};
for(let item of liquidos){
    LiquidosTotal +=item.peso
};
console.log(LiquidosTotal);
Hidratacion(LiquidosTotal,100,harinaTotal)


console.log("La receta es: \n");
for (let item of receta){
    console.log(item.ingrediente +" = "+ item.peso);
}
mostrar("El Peso total es de " + pesoTotal + "gr")
mostrar("La hidratcion total es de: "+ hidratacionfinal+"%")
