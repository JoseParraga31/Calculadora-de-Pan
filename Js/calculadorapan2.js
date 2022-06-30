
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
let btnAgregar = document.getElementById('btn2')
let count = 0

let btnCalcular = document.getElementById('calcular')
btnCalcular.style.display='none'
btnAgregar.addEventListener('click',()=>{
    count++
    let div = document.createElement('div')
    div.className = 'container container-ingrediente-categoria'
    div.innerHTML= `
                    <div class="Categoria">
                    <select name="categorias" id="categorias${count}">
                        <option value="0">Categorias</option>
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
                    <p class="peso-final" id="PesoMultiplicado${count}"></p>
                    <button id="cargar${count}">cargar</button>
                </div>
                    `
    contenedor.appendChild(div)
    
    let inputTituloPrinciapal = document.getElementById(`titulo`)
    TituloPrinciapalCapturado = inputTituloPrinciapal.value;

    if(document.getElementById(`categorias${count}`)){
        btnCalcular.style.display='block'
        btnAgregar.style.display = 'none'
    
    let btnCarga = document.getElementById(`cargar${count}`)
    btnCarga.addEventListener('click',()=>{
        
        let selectCate = document.getElementById(`categorias${count}`)
        categoriaCapturada = parseInt(selectCate.value);
        

        let inputNom = document.getElementById(`nombreIngrediente${count}`)
        nombreCapturado = inputNom.value;
        
        let inputGR = document.getElementById(`pesoIngrediente${count}`)
        pesoCapturado = parseInt(inputGR.value); 

        let inputPieza = document.getElementById(`pieza`)
        piezaCapturado = parseInt(inputPieza.value);
        

        let inputPesoXpiesa = document.getElementById(`pesoXpiesa`)
        pesoXpiesaCapturado = parseInt(inputPesoXpiesa.value);
        
        if(isNaN(pesoCapturado)|| selectCate.value == 0 || nombreCapturado == ""){
            alert('no deben estar los campos vacios o no seleccionados')
        }else{
            class Ingrediente {
                constructor(ingrediente, peso, categoria){
                    this.categoria = categoria;
                    this.ingrediente = ingrediente;
                    this.peso = peso;
                }} 
            
            const nuevoIngrediente = new Ingrediente(nombreCapturado,pesoCapturado,categoriaCapturada);
            agregar(nuevoIngrediente)
            btnCarga.style.display = 'none'
            btnAgregar.style.display = 'block'
        }
        
    }) 

    function agregar(nuevoIngrediente){
        Receta.push(nuevoIngrediente)
        console.log(Receta);
        };
    }
}) 

btnCalcular.addEventListener('click',()=>{
    let harinas = Receta.filter ((elemento) => elemento.categoria === 1);
    let liquidos = Receta.filter ((elemento) => elemento.categoria === 2);

    function Piesasfinal(n1,n2){
        piesasTotal=n1/n2
    }
    function Hidratacion(n1,n2,n3){
        hidratacionfinal = n1 * n2 / n3;
    };
    for (let item of Receta){
        pesoTotal += item.peso
    }
    for(let item of harinas){
        harinaTotal += item.peso
    };
    for(let item of liquidos){
        LiquidosTotal +=item.peso
    };
    Piesasfinal(pesoTotal,pesoXpiesaCapturado);
    Hidratacion(LiquidosTotal,100,harinaTotal);
    
    hidratcionFinal.style.display='inline';
    hidratcionFinal.innerHTML= hidratacionfinal + "%";
    
    MasaFinal.style.display='inline';
    MasaFinal.innerHTML = pesoTotal+"gr";
    
    totalPiesas.style.display='inline';
    totalPiesas.innerHTML =  piesasTotal+"Uni";

    let RecetaJson =  JSON.stringify(Receta)
    localStorage.setItem(TituloPrinciapalCapturado, RecetaJson)
    let TituloPrinciapalCapturadoJson = JSON.stringify(TituloPrinciapalCapturado)
    localStorage.setItem("titulo",TituloPrinciapalCapturadoJson)
})

function recuperarReceta(datos) {
    if(datos){
        categoriaCapturada.value = datos.categoria;
        nombreCapturado.value = datos.ingrediente;
        pesoCapturado.value = datos.peso;
        
    }  
}
recuperarReceta(JSON.parse(localStorage.getItem("Pan de campo")))