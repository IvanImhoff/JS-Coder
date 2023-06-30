class Productos {
    constructor (id, titulo, subRubro, grosor, precio, marca, imagen, cantidad){
        this.id = id,
        this.name = titulo,
        this.subR = subRubro,
        this.medida = grosor,
        this.costo = precio,
        this.marc = marca,
        this.img = imagen,
        this.cant = cantidad
    } 
    mostrarTorni(){
        console.log(`${this.id} ${this.name} ${this.subR} su medida es ${this.medida}, su precio es $${this.costo} y su marca es ${this.marc}`)
    }
}


const producto1 = new Productos(50, `Hoja de lija`, `madera`, "40", 180, `norton`, `massa.png`,1)
const producto2 = new Productos(51, `Hoja de lija`, `madera`, "60", 180, `norton`, `massa.png`,1)
const producto3 = new Productos(52, `Hoja de lija`, `madera`, "80", 180, `norton`, `massa.png`,1)
const producto4 = new Productos(53, `Hoja de lija`, `madera`, "100", 180, `norton`, `massa.png`,1)
const producto5 = new Productos(54, `Hoja de lija`, `madera`, "120", 180, `norton`, `massa.png`,1)
const producto6 = new Productos(55, `Hoja de lija`, `madera`, "150", 180, `norton`, `massa.png`,1)
const producto7 = new Productos(56, `Hoja de lija`, `madera`, "180", 180, `norton`, `massa.png`,1)

const producto8 = new Productos(57, `Hoja de lija`, `metal`, "40", 290, `norton`, `lijaAgua.png`,1)
const producto9 = new Productos(58, `Hoja de lija`, `metal`, "60", 290, `norton`, `lijaAgua.png`,1)
const producto10 = new Productos(59, `Hoja de lija`, `metal`, "80", 290, `norton`, `lijaAgua.png`,1)
const producto11 = new Productos(60, `Hoja de lija`, `metal`, "100", 290, `norton`, `lijaAgua.png`,1)
const producto12 = new Productos(61, `Hoja de lija`, `metal`, "120", 290, `norton`, `lijaAgua.png`,1)
const producto13 = new Productos(62, `Hoja de lija`, `metal`, "150", 290, `norton`, `lijaAgua.png`,1)
const producto14 = new Productos(63, `Hoja de lija`, `metal`, "180", 290, `norton`, `lijaAgua.png`,1)

const producto15 = new Productos(64, `Hoja de lija`, `tela esmeril`, "40", 450, `norton`, `esmeril.png`,1)
const producto16 = new Productos(65, `Hoja de lija`, `tela esmeril`, "60", 450, `norton`, `esmeril.png`,1)
const producto17 = new Productos(66, `Hoja de lija`, `tela esmeril`, "80", 450, `norton`, `esmeril.png`,1)
const producto18 = new Productos(67, `Hoja de lija`, `tela esmeril`, "100", 450, `norton`, `esmeril.png`,1)
const producto19 = new Productos(68, `Hoja de lija`, `tela esmeril`, "120", 450, `norton`, `esmeril.png`,1)
const producto20 = new Productos(69, `Hoja de lija`, `tela esmeril`, "150", 450, `norton`, `esmeril.png`,1)
const producto21 = new Productos(70, `Hoja de lija`, `tela esmeril`, "180", 450, `norton`, `esmeril.png`,1)

const producto22 = new Productos(64, `Hoja de lija`, `antiempaste`, "40", 450, `norton`, `antie.png`,1)
const producto23 = new Productos(65, `Hoja de lija`, `antiempaste`, "60", 450, `norton`, `antie.png`,1)
const producto24 = new Productos(66, `Hoja de lija`, `antiempaste`, "80", 450, `norton`, `antie.png`,1)
const producto25 = new Productos(67, `Hoja de lija`, `antiempaste`, "100", 450, `norton`, `antie.png`,1)
const producto26 = new Productos(68, `Hoja de lija`, `antiempaste`, "120", 450, `norton`, `antie.png`,1)
const producto27 = new Productos(69, `Hoja de lija`, `antiempaste`, "150", 450, `norton`, `antie.png`,1)
const producto28 = new Productos(70, `Hoja de lija`, `antiempaste`, "180", 450, `norton`, `antie.png`,1)

const producto29 = new Productos(1, "Tornillo tirafondos", "tirafondo", `3/16 x 1"`, 5.3, `telfix`, `tornilloTiraf.jpg`,1)
const producto30 = new Productos(2, "Tornillo tirafondos", "tirafondo", `3/16 x 1 1/4"`, 6, `telfix`, `tornilloTiraf.jpg`,1)
const producto31 = new Productos(3,"Tornillo tirafondos", "tirafondo", `3/16 x 1 1/2"`, 6.5, `telfix`, `tornilloTiraf.jpg`,1)
const producto32 = new Productos(4,"Tornillo tirafondos", "tirafondo", `3/16 x 1 3/4"`, 7, `telfix`, `tornilloTiraf.jpg`,1)
const producto33 = new Productos(5,"Tornillo tirafondos", "tirafondo", `3/16 x 2"`, 7.5, `telfix`, `tornilloTiraf.jpg`,1)
const producto34 = new Productos(6,"Tornillo tirafondos", "tirafondo", `3/16 x 2 1/4"`, 8, `telfix`, `tornilloTiraf.jpg`,1)
const producto35 = new Productos(7,"Tornillo tirafondos", "tirafondo", `3/16 x 2 1/2"`, 8.5, `telfix`, `tornilloTiraf.jpg`,1)
const producto36 = new Productos(8,"Tornillo tirafondos", "tirafondo", `3/16 x 3"`, 9, `telfix`, `tornilloTiraf.jpg`,1)
const producto37 = new Productos(9,"Tornillo tirafondos", "tirafondo", `1/4 x 1"`, 10, `telfix`, `tornilloTiraf.jpg`,1)
const producto38 = new Productos(10,"Tornillo tirafondos", "tirafondo", `1/4 x 1 1/4"`, 10.5, `telfix`, `tornilloTiraf.jpg`,1)
const producto39 = new Productos(11,"Tornillo tirafondos", "tirafondo", `1/4 x 1 1/2"`, 11, `telfix`, `tornilloTiraf.jpg`,1)
const producto40 = new Productos(12,"Tornillo tirafondos", "tirafondo", `1/4 x 1 3/4"`, 11.5, `telfix`, `tornilloTiraf.jpg`,1)
const producto41 = new Productos(13,"Tornillo tirafondos", "tirafondo", `1/4 x 2"`, 12, `telfix`, `tornilloTiraf.jpg`,1)
const producto42 = new Productos(14,"Tornillo tirafondos", "tirafondo", `1/4 x 2 1/2"`, 12.5, `telfix`, `tornilloTiraf.jpg`,1)
const producto43 = new Productos(15,"Tornillo tirafondos", "tirafondo", `1/4 x 3"`, 13, `telfix`, `tornilloTiraf.jpg`,1)

const producto44 = new Productos(16,`Tornillo autoperforante p/madera`, `madera`, `6 x 5/8"`, 3, `mitofix`, `drywall.jpg`,1)
const producto45 = new Productos(17,`Tornillo autoperforante p/madera`, `madera`, `6 x 3/4"`, 3, `mitofix`, `drywall.jpg`,1)
const producto46 = new Productos(18,`Tornillo autoperforante p/madera`, `madera`, `6 x 1"`, 3, `mitofix`, `drywall.jpg`,1)
const producto47 = new Productos(19,`Tornillo autoperforante p/madera`, `madera`, `6 x 1 1/4"`, 3, `mitofix`, `drywall.jpg`,1)
const producto48 = new Productos(20,`Tornillo autoperforante p/madera`, `madera`, `6 x 1 1/2"`, 3, `mitofix`, `drywall.jpg`,1)
const producto49 = new Productos(21,`Tornillo autoperforante p/madera`, `madera`, `6 x 1 3/4"`, 3, `mitofix`, `drywall.jpg`,1)
const producto50 = new Productos(22,`Tornillo autoperforante p/madera`, `madera`, `6 x 2"`, 3, `mitofix`, `drywall.jpg`,1)
const producto51 = new Productos(23,`Tornillo autoperforante p/madera`, `madera`, `8 x 3/4"`, 3, `mitofix`, `drywall.jpg`,1)
const producto52 = new Productos(24,`Tornillo autoperforante p/madera`, `madera`, `8 x 1"`, 3, `mitofix`, `drywall.jpg`,1)
const producto53 = new Productos(25,`Tornillo autoperforante p/madera`, `madera`, `8 x 1 1/4"`, 3, `mitofix`, `drywall.jpg`,1)
const producto54 = new Productos(26,`Tornillo autoperforante p/madera`, `madera`, `8 x 1 1/2"`, 3, `mitofix`, `drywall.jpg`)
const producto55 = new Productos(27,`Tornillo autoperforante p/madera`, `madera`, `8 x 1 3/4"`, 3, `mitofix`, `drywall.jpg`,1)
const producto56 = new Productos(28,`Tornillo autoperforante p/madera`, `madera`, `8 x 2"`, 3, `mitofix`, `drywall.jpg`,1)

const producto57 = new Productos(29,`Tornillo cabeza tanque`, `tanque`, `3/16 x 1/2 `, 3, `telfix`, `tornilloTanque.jpg`,1)
const producto58 = new Productos(30,`Tornillo cabeza tanque`, `tanque`, `3/16 x 3/4`, 3, `telfix`, `tornilloTanque.jpg`,1)
const producto59 = new Productos(31,`Tornillo cabeza tanque`, `tanque`, `3/16 x 1`, 3, `telfix`, `tornilloTanque.jpg`, 1)
const producto60 = new Productos(32,`Tornillo cabeza tanque`, `tanque`, `3/16 x 1 1/4`, 3, `telfix`, `tornilloTanque.jpg`, 1)
const producto61 = new Productos(33,`Tornillo cabeza tanque`, `tanque`, `3/16 x 1 1/2`, 3, `telfix`, `tornilloTanque.jpg`, 1)
const producto62 = new Productos(34,`Tornillo cabeza tanque`, `tanque`, `3/16 x 1 3/4`, 3, `telfix`, `tornilloTanque.jpg`, 1)
const producto63 = new Productos(35,`Tornillo cabeza tanque`, `tanque`, `3/16 x 2`, 3, `telfix`, `tornilloTanque.jpg`, 1)
const producto64 = new Productos(36,`Tornillo cabeza tanque`, `tanque`, `3/16 x 2 1/2`, 3, `telfix`, `tornilloTanque.jpg`, 1)
const producto65 = new Productos(37,`Tornillo cabeza tanque`, `tanque`, `3/16 x 3`, 3, `telfix`, `tornilloTanque.jpg`, 1)

const producto66 = new Productos (29, `Disco de corte p/madera`, `madera`, "115", 350, `Rhein`, `discoCorteRhein.webp`, 1)
const producto67 = new Productos (30, `Disco de corte p/madera`, `madera`, "180", 600, `Rhein`, `discoCorteRhein.webp`, 1)
const producto68 = new Productos (31, `Disco de corte p/madera`, `madera`, "230", 900, `Rhein`, `discoCorteRhein.webp`, 1)
const producto69 = new Productos (32, `Disco de corte p/hierro`, `metal`, "115", 400, `norton`, `discoCorteNorton.jpg`, 1)
const producto70 = new Productos (33, `Disco de corte p/hierro`, `metal`, "180", 550, `norton`, `discoCorteNorton.jpg`, 1)
const producto71 = new Productos (34, `Disco de corte p/hierro`, `metal`, "230", 850, `norton`, `discoCorteNorton.jpg`, 1)
const producto72 = new Productos (35, `Disco de corte p/chapa`, `metal`, "115", 450, `norton`, `discoCorteNorton.jpg`, 1)
const producto73 = new Productos (36, `Disco de corte p/chapa`, `metal`, "180", 650, `norton`, `discoCorteNorton.jpg`, 1)
const producto74 = new Productos (37, `Disco de corte p/chapa`, `metal`, "230", 1050, `norton`, `discoCorteNorton.jpg`, 1)
const producto75 = new Productos (38, `Disco de corte p/hormigón`, `mamposteria`, "115", 1555, `norton`,`discoSegNorton.jpg`, 1)
const producto76 = new Productos (39, `Disco de corte p/hormigón`, `mamposteria`, "180", 2000, `norton`,`discoSegNorton.jpg`, 1)
const producto77 = new Productos (40, `Disco de corte p/hormigón`, `mamposteria`, "230", 2450, `norton`,`discoSegNorton.jpg`, 1)
const producto78 = new Productos (41, `Disco de corte p/cerámica`, `mamposteria`, "115", 1700, `norton`,`discoContNorton.webp`, 1)
const producto79 = new Productos (42, `Disco de corte p/cerámica`, `mamposteria`, "180", 2200, `norton`,`discoContNorton.webp`, 1)
const producto80 = new Productos (43, `Disco de corte p/cerámica`, `mamposteria`, "230", 2950, `norton`,`discoContNorton.webp`, 1)
const producto81 = new Productos (44, `Disco de corte`, `metal`, "115", 500, `tyrolit`,`discoCorteTy.jpg`, 1)
const producto82 = new Productos (45, `Disco de corte`, `metal`, "180", 650, `tyrolit`,`discoCorteTy.jpg`, 1)
const producto83 = new Productos (46, `Disco de corte`, `metal`, "230", 950, `tyrolit`,`discoCorteTy.jpg`, 1)
const producto84 = new Productos (47, `Disco de corte`, `metal`, "115", 550, `tyrolit`,`discoCorteTy.jpg`, 1)
const producto85 = new Productos (48, `Disco de corte`, `metal`, "180", 750, `tyrolit`,`discoCorteTy.jpg`, 1)
const producto86 = new Productos (49, `Disco de corte`, `metal`, "230", 1150, `tyrolit`,`discoCorteTy.jpg`, 1)

const productos = []
productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21, producto22, producto23, producto24, producto25, producto26, producto27, producto28, producto29, producto30, producto31, producto32, producto33, producto34, producto35, producto36, producto37, producto38, producto39, producto40, producto41, producto42, producto43, producto44, producto45, producto46, producto47, producto48, producto49, producto50, producto51, producto52, producto53, producto54, producto55, producto56, producto57, producto58, producto59, producto60, producto61, producto62, producto63, producto64, producto65, producto66, producto67, producto68, producto69, producto70, producto71, producto72, producto73, producto74, producto75, producto76, producto77, producto78, producto79, producto80, producto81, producto82, producto83, producto84, producto85, producto86)

let carro = []

function encontrarId(array){
    option = parseInt(prompt(`Ingrese el ID del producto deseado, los mismos se muestran en consola.`))
    let busqueda = array.find(
        (ids) => ids.id === option
    )
    if(busqueda == undefined){
        alert(`Vuelve a ingresar una opción válida.`)
    } else{
        carro.push(busqueda)
        alert(`${busqueda.name} ${busqueda.subR} ${busqueda.medida} agregado al carrito!`)
    }
}

// let totalCarro


function filtrarDesc(array){
    let datoBusqueda = prompt("Ingrese el valor por el cual quiere filtrar, ya sea material, medida o marca del producto.")
    let busqueda = array.filter(
        (dato) => dato.name.toLowerCase().includes(datoBusqueda.toLowerCase()) || dato.subR.toLowerCase().includes(datoBusqueda.toLowerCase()) || dato.medida.toLowerCase().includes(datoBusqueda.toLowerCase()) || dato.marc.toLowerCase().includes(datoBusqueda.toLowerCase())
    )
    if(busqueda.length == 0){
        console.log(`El dato ${datoBusqueda} no está en nuestro catalogo.`)
    }else{
        console.log(`Artículos encontrados:`)
        busqueda.forEach(console.log)
    }
}

function sumarCostos (array){
    let totalCarro = 0
    for (let precio of array){
        totalCarro += precio.costo
    }
    return totalCarro
} 

// Capt
let divCart = document.querySelector(`#carro`)
let mostrarCarro = document.querySelector(`#crearCart`)
let vaciarCarro = document.querySelector(`#vaciarCarro`)
let articulosDiv = document.querySelector("#articulos")
let buscador = document.querySelector(`#buscador`)
let menuAutop = document.querySelector(`#bot-autop`)
let menuDiscos = document.querySelector(`#accordionDicos`)
let menuDiscoMadera = document.querySelector(`#bot-discoMad`)
let menuDiscoMetal = document.querySelector(`#bot-discoMetal`)
let menuDiscosMampos = document.querySelector(`#bot-discoMampos`)

// let totalCarro = document.querySelector(`#totalCarro`)
// totalCarro
function buscarInfo(buscado, array){
    let busqueda = array.filter(
        (dato) => dato.name.toLowerCase().includes(buscado.toLowerCase())  || dato.subR.toLowerCase().includes(buscado.toLowerCase()) || dato.medida.toLowerCase().includes(buscado.toLowerCase()) || dato.marc.toLowerCase().includes(buscado.toLowerCase())
    )
    busqueda.length == 0 ? (articulosDiv.innerHTML = `<h2>No se han encontrado coincidencias con ${buscado}`) : (articulosDiv.innerHTML = ``, showArray(busqueda))
}

buscador.addEventListener(`input`, () => {
    buscarInfo(buscador.value, productos)
})
console.log(buscador.value)

vaciarCarro.addEventListener(`click`, ()=>{
    localStorage.removeItem(`carro`)
    divCart.innerHTML = ``
    carro = []
})

// Crear div carro

function showCart(array){
    divCart.innerHTML = ``
    for(let prod of array){
        let nuevoCarroDiv = document.createElement(`div`)
        nuevoCarroDiv.innerHTML = `
                                    <div class="objetos_carro">
                                        <img src="./../asset/${prod.img}" alt="">
                                        <p>${prod.id} - ${prod.name} ${prod.subR} ${prod.medida}  - Precio $${prod.costo} - Cantidad: ${prod.cant}</p>
                                        <button class="borrarItem" id="svgCarro"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                        </svg></button>
                                    </div>
                                    `
    divCart.appendChild(nuevoCarroDiv)
    
    }
    // let totalCarro = document.createElement(`div`)
    // totalCarro.innerHTML = `<h2 id="totalCarros">Total:</h2>
    // `
}

mostrarCarro.addEventListener(`click`,()=>{
    showCart(carro)
})

// ver si la KEY existe en storage
if(localStorage.getItem(`carro`)){
carro = JSON.parse(localStorage.getItem(`carro`))
}else{
    localStorage.setItem(`carro`, JSON.stringify(carro))
}

// Crear seccion articulos


function showArray(array){
    articulosDiv.innerHTML = ``
    for (let art of array) {
        let nuevoArtDiv = document.createElement(`div`)
        nuevoArtDiv.className = "container-ferre col"
        nuevoArtDiv.innerHTML = `<div id=${art.id} class="cardo" style="width: 18rem;">
                                    <img src="./../asset/${art.img}" alt="">
                                    <div>
                                        <h2>${art.name}</h2>
                                        <p>Medida: ${art.medida}</p>
                                        <p>Precio: $${art.costo}.- </p>
                                        <p>Marca ${art.marc} </p>
                                        <button id="btn-agregar${art.id}">Comprar</button>
                                    </div>
                                </div>`
                                
    articulosDiv.appendChild(nuevoArtDiv)
    let agregarBtn = document.querySelector(`#btn-agregar${art.id}`)
    agregarBtn.addEventListener(`click`,()=>{
        let busqueda = array.find(
            (ids) => ids.id === art.id)
        carro.push(busqueda)
        // setear en storage
        localStorage.setItem(`carro`,JSON.stringify(carro))
    })
    }
    1
}



// Menues tornillos
let menuProductoss = document.querySelector(`#accordionTorni`)
menuProductoss.addEventListener("click",(e)=>{
    let busqueda = productos.filter(
        (dato) => dato.name.includes("Tornillo")
    )
    e.preventDefault()
    showArray(busqueda)
})

// filtrados tornillos
let menuTiraf = document.querySelector(`#bot-tiraf`)
menuTiraf.addEventListener(`click`,(e)=>{
    let busqueda = productos.filter(
        (dato) => dato.subR === "tirafondo"
    )
    e.preventDefault()
    showArray(busqueda)
})


menuAutop.addEventListener(`click`,(e)=>{
    let busqueda = productos.filter(
        (dato) => dato.name === "Tornillo autoperforante p/madera"
    )
    e.preventDefault()
    showArray(busqueda)
})

let menuTorniTanque = document.querySelector(`#bot-tanque`)
menuTorniTanque.addEventListener(`click`,(e)=>{
    let busqueda = productos.filter(
        (dato) => dato.subR === "tanque"
    )
    e.preventDefault()
    showArray(busqueda)
})

console.log("asdasd")

// Menues lijas
let menuLijas = document.querySelector(`#accordionLija`)
menuLijas.addEventListener(`click`,(e)=>{
    let busqueda = productos.filter(
        (dato) => dato.name.includes("lija")
    )
    e.preventDefault()
    showArray(busqueda)
})
// filtrados lijas
let menuLijaMad = document.querySelector(`#bot-lijaMad`)
menuLijaMad.addEventListener(`click`,(e)=>{
    let busqueda = productos.filter(
        (dato) => dato.name.includes("oja de lija") && dato.subR.includes("madera")
    )
    e.preventDefault()
    showArray(busqueda)
})

let menuLijaAgua = document.querySelector(`#bot-lijaAgua`)
menuLijaAgua.addEventListener(`click`,(e)=>{
    let busqueda = productos.filter(
        (dato) => dato.subR === "metal"
    )
    e.preventDefault()
    showArray(busqueda)
})

let menuLijaAnti = document.querySelector(`#bot-lijaANti`)
menuLijaAnti.addEventListener(`click`,(e)=>{
    let busqueda = productos.filter(
        (dato) => dato.subR === "antiempaste"
    )
    e.preventDefault()
    showArray(busqueda)
})

let menuLijaEsme = document.querySelector(`#bot-lijaEsme`)
menuLijaEsme.addEventListener(`click`,(e)=>{
    let busqueda = productos.filter(
        (dato) => dato.subR === "tela esmeril"
    )
    e.preventDefault()
    showArray(busqueda)
})

// Menu discos

menuDiscos.addEventListener("click", (e) => {
    let busqueda = productos.filter(
        (dato) => dato.name.includes("Disco")
        )
        e.preventDefault()
        showArray(busqueda)
})

menuDiscoMadera.addEventListener("click", (e) => {
    let busqueda = productos.filter(
            (dato) => dato.name.includes("Disco de corte") && dato.subR.includes("madera")
    )
    e.preventDefault()
    showArray(busqueda)
})

menuDiscoMetal.addEventListener("click", (e) => {
    let busqueda = productos.filter(
            (dato) => dato.name.includes("Disco de corte") && dato.subR.includes("metal")
    )
    e.preventDefault()
    showArray(busqueda)
})

menuDiscosMampos.addEventListener("click", (e) => {
    let busqueda = productos.filter(
            (dato) => dato.name.includes("Disco de corte") && dato.subR.includes("mamposteria")
    )
    e.preventDefault()
    showArray(busqueda)
})
