


/*intentando capturar datos de los input y guardandolo en vriables para operar*/ 
// let categoriaCapturada = document.querySelector("#categorias")
// console.log(categoriaCapturada.LinnerHTM);

// let piezasfinal = document.querySelector("#pieza")
// console.log(piezasfinal.innerHTML);

// let porcentajeMultipica = document.querySelector("#porcentaje")
// console.log(porcentajeMultipica.innerHTML);

// let ingredienteCapturado = document.querySelector("#nombreIngrediente")
// console.log(ingredienteCapturado.innerHTML);

// let Peso = document.querySelector("#pesoIngrediente")
// console.log(peso.innerHTML);
let categoriaCapturada = 0,
nombreCapturado = 0,
pesoCapturado = 0,
multiplicadorCapturado = 0,
piezaCapturado = 0;

let harinaTotal = 0;
let LiquidosTotal = 0;
let pesoTotal = 0;
const Receta = []
let contenedor = document.getElementById('contenedor')
let btnAgregar = document.getElementById('btn1')
let count = 0
btnAgregar.addEventListener('click',()=>{
    count++
    let div = document.createElement('div')
    div.className = 'container container-ingrediente-categoria'
    div.innerHTML= `
                    <div class="Categoria">
                    <select name="categorias" id="categorias${count}">
                        <option value="o">Categorias</option>
                        <option value="1">Harina</option>
                        <option value="2">Liquido</option>
                        <option value="3">Seco</option>
                        <option value="4">Fermento</option>
                        <option value="5">Otro</option>
                    </select>
                </div>  
                <div class="ingrediente">
                    <input type="Nombreingrediente" id="nombreIngrediente${count}" name="nombreIngrediente" placeholder="Ingredinte">

                    <input type="pesoIngrediente" id="pesoIngrediente${count}" name="pesoIngrediente" placeholder="  Gr" class="ingrediente">
                    <p class="peso-final" id="PesoMultiplicado${count}">
                    
                    </p> 
                </div>
                    `
    contenedor.appendChild(div)

    if(document.getElementById(`categorias${count}`)){
        let selectCate = document.getElementById(`categorias${count}`)
        selectCate.addEventListener('change',()=>{
        categoriaCapturada = parseInt(selectCate.value); 
        console.log("CATEGORIA"+ categoriaCapturada); 
        })
        let inputNom = document.getElementById(`nombreIngrediente${count}`)
        inputNom.addEventListener('change',()=>{
        nombreCapturado = inputNom.value;
        console.log("NOMBRE" + "" +nombreCapturado );  
        })
        let inputGR = document.getElementById(`pesoIngrediente${count}`)
        inputGR.addEventListener('change',()=>{
        pesoCapturado = parseInt(inputGR.value)  ; 
        console.log("PESO"+ pesoCapturado); 
        })
    }
    class Ingrediente {
        constructor(ingrediente, peso, categoria){
            this.categoria = categoria;
            this.ingrediente = ingrediente;
            this.peso = peso;
        }} 
    
    const nuevoIngrediente = new Ingrediente(nombreCapturado,pesoCapturado,categoriaCapturada);
    
    let harinas = Receta.filter ((elemento) => elemento.categoria === "1");
    
    console.log(harinas);

    function agregar(){
        Receta.push(nuevoIngrediente)
        };
        agregar()

        console.log(Receta);

}) 


