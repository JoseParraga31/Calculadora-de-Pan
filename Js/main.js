let recetas = document.querySelector("#row-recetas")
let btnReceta = document.querySelector("#btn1")
let count = 0


btnReceta.addEventListener('click',()=>{
    count++
    let div = document.createElement('div')
    div.className = 'col-md-12 col-sm-12 recetas'
    div.innerHTML= `
                    <div>
                        <a href="/Pages/formula.html" id="Titulo-receta${count}">Untitle</a>
                    </div>
                    `
                    recetas.appendChild(div)
})