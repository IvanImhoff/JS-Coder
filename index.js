// En el DOM se carga por defecto todo el catalogo de productos. En el buscador va filtrando por cada input del usuario (la busqueda se realiza en todos los atributos de los objetos, en el array PRODUCTOS). En los elementos del acordeon filtra y muestra en el DOM según indica el rubro. En el NAV, en la opción Registrarse, se guardan los datos del usuario ingresado por input, actualiza un fragmento del DOM con sus datos. (Aún no logré que funcione correctamente el evento en el botón desloguear). En el storage se guarda el carrito, los datos del usuario.

// Capt
let divCart = document.querySelector(`#carro`)
let mostrarCarro = document.querySelector(`#crearCart`)
let vaciarCarro = document.querySelector(`#vaciarCarro`)
let articulosDiv = document.querySelector("#articulos")
let buscador = document.querySelector(`#buscador`)
// Menues
let menuAutop = document.querySelector(`#bot-autop`)
let menuDiscos = document.querySelector(`#accordionDicos`)
let menuDiscoMadera = document.querySelector(`#bot-discoMad`)
let menuDiscoMetal = document.querySelector(`#bot-discoMetal`)
let menuDiscosMampos = document.querySelector(`#bot-discoMampos`)
let menuProductoss = document.querySelector(`#accordionTorni`)
let menuTiraf = document.querySelector(`#bot-tiraf`)
let menuTorniTanque = document.querySelector(`#bot-tanque`)
let menuLijas = document.querySelector(`#accordionLija`)
let menuLijaMad = document.querySelector(`#bot-lijaMad`)
let menuLijaAgua = document.querySelector(`#bot-lijaAgua`)
let menuLijaAnti = document.querySelector(`#bot-lijaANti`)
let menuLijaEsme = document.querySelector(`#bot-lijaEsme`)

let popUpAgregado = document.querySelector(`.popUpAgregado`)
let infoCLienteNav = document.querySelector(`#infoCliente`)
let totalCarro = document.querySelector(`#totalCarro`)
let menuCliente = document.querySelector(`#menuCliente`)
// form
let inputNombre = document.querySelector(`#inputNombre`)
let inputMail = document.querySelector(`#inputEmail4`)
let inputPass = document.querySelector(`#inputPassword4`)
let inputAddress = document.querySelector(`#inputAddress`)
let inputCity = document.querySelector(`#inputCity`)
let inputProv = document.querySelector(`#inputState`)
let inputZip = document.querySelector(`#inputZip`)
let submit = document.querySelector(`#submit`)
// let deslog = document.querySelector(`#deslog`)

// sweet alert
const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

// Cargar todos los productos al DOM
showArray(productos)

// Condicional para cargar el DOM - Usuario ingresa por primera vez, carga FORM - sino carga array productos
if(localStorage.getItem(`Usuario`)){
    nuevoUsuario = JSON.parse(localStorage.getItem(`Usuario`))
    infoCLienteNav.innerText =`${nuevoUsuario.nombre[0].toUpperCase()}${nuevoUsuario.nombre.substring(1)}`
    menuCliente.innerHTML = `
                                <li><p class="dropdown-item" >${nuevoUsuario.email}</p></li>
                                <li><p class="dropdown-item" >${nuevoUsuario.direcc} </p></li>
                                <li><p class="dropdown-item" >${nuevoUsuario.ciudad} </p></li>
                                <button class="btn btn-danger dropdown-item" id="deslog">Desloguear</button>
        `
}else {
    submit.addEventListener(`click`,(e) => {
        infoCLienteNav.innerText = `${inputNombre.value[0].toUpperCase()}${inputNombre.value.substring(1)}`
        menuCliente.innerHTML = `
                                <li><p class="dropdown-item" >${inputMail.value}</p></li>
                                <li><p class="dropdown-item" >${inputAddress.value} </p></li>
                                <li><p class="dropdown-item" >${inputCity.value} </p></li>
                                <button class="btn btn-danger dropdown-item" id="deslog">Desloguear</button>
        `
        Toast.fire({
            icon: `success`,
            title: `Usuario registrado`
        })
        e.preventDefault()
        const nuevoUsuario = new Usuarios (usuarios.length+1, inputNombre.value, inputMail.value, inputPass.value, inputAddress.value, inputCity.value, inputProv.value, inputZip.value)
        usuarios.push(nuevoUsuario)
        localStorage.setItem(`Usuario`,JSON.stringify(nuevoUsuario))
        
    })
}

// ver si la KEY existe en storage
if(localStorage.getItem(`carro`)){
    carro = JSON.parse(localStorage.getItem(`carro`))
    }else{
        localStorage.setItem(`carro`, JSON.stringify(carro))
}

// No funciona correctamente - borrar datos del usuario
let deslog = document.querySelector(`#deslog`)
    deslog.addEventListener(`click`, () => {
    
    localStorage.removeItem(`Usuario`)
    })


// Input buscador
function buscarInfo(buscado, array){
    let busqueda = array.filter(
        (dato) => dato.name.toLowerCase().includes(buscado.toLowerCase())  || dato.subR.toLowerCase().includes(buscado.toLowerCase()) || dato.medida.toLowerCase().includes(buscado.toLowerCase()) || dato.marc.toLowerCase().includes(buscado.toLowerCase())
    )
    busqueda.length == 0 ? (articulosDiv.innerHTML = `<h2>No se han encontrado coincidencias con ${buscado}`) : (articulosDiv.innerHTML = ``, showArray(busqueda))
}


// FUNCIONES

// Crear div carro
function showCart(array){
    // Crea las card en el modal
    divCart.innerHTML = ``
    array.forEach((prod) => {
        divCart.innerHTML += `
                            <div class="objetos_carro" id="productoCarrito${prod.id}">
                                <img src="./../asset/${prod.img}" alt="">
                                <p>${prod.id} - ${prod.name} ${prod.subR} ${prod.medida}  - Precio $${prod.costo} - Cantidad: ${prod.cant}</p>
                                <button class="btn btn-danger" id="borrarItem${prod.id}"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg></button>
                            </div>
                            `
    })
    // eliminar prod de carrito
    array.forEach((prod) => {
        document.querySelector(`#borrarItem${prod.id}`).addEventListener(`click`,() => {
            let cardProducto = document.getElementById(`productoCarrito${prod.id}`)
            cardProducto.remove()
            
            let productoEliminar = array.find((elem) => elem.id == prod.id)
            
            let posicion = array.indexOf(productoEliminar)
            
            array.splice(posicion, 1)
            
            localStorage.setItem("carro", JSON.stringify(array))

            Toast.fire({
                icon: 'warning',
                title: 'Has eliminado el producto del carrito.'
            })
            calcularTotal(array)
        } )
    })

    calcularTotal(carro)
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
                                        <p>Marca: ${art.marc} </p>
                                        <button class="btn-agregar${art.id}" id="liveToastBtn">Comprar</button>
                                    </div>
                                </div>`
                                
    articulosDiv.appendChild(nuevoArtDiv)
    let agregarBtn = document.querySelector(`.btn-agregar${art.id}`)
    agregarBtn.addEventListener(`click`,()=>{
        agregarAlCarrito(art)
    })
    }
    
}

function agregarAlCarrito(producto){
    let nuevoProd = carro.find((elem)=>elem.id==producto.id)

    if(nuevoProd == undefined){
        carro.push(producto)
        localStorage.setItem(`carro`, JSON.stringify(carro))
        console.log(carro)
        Toast.fire({
            icon: 'success',
            title: 'Agregado al carrito!'
        })
    }else{
        Toast.fire({
            icon: 'error',
            title: 'El producto ya está en el carrito'
        })
    }
}

function calcularTotal(array){
    let total = array.reduce((acc,productoCarrito) => acc + productoCarrito.costo, 0)
    total == 0 ? totalCarro.innerHTML = `<h2>Su carro esta vacio</h2>` : totalCarro.innerHTML = `<h2>Tolal: $${total}</h2>`
}

// Eventos
buscador.addEventListener(`input`, () => {
    buscarInfo(buscador.value, productos)
})

vaciarCarro.addEventListener(`click`, ()=>{
    localStorage.removeItem(`carro`)
    divCart.innerHTML = ``
    carro = []
    calcularTotal(carro)
})

mostrarCarro.addEventListener(`click`,()=>{
    showCart(carro)
})


// Menues tornillos

menuProductoss.addEventListener("click",(e)=>{
    let busqueda = productos.filter(
        (dato) => dato.name.includes("Tornillo")
    )
    e.preventDefault()
    showArray(busqueda)
})

// filtrados tornillos

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


menuTorniTanque.addEventListener(`click`,(e)=>{
    let busqueda = productos.filter(
        (dato) => dato.subR === "tanque"
    )
    e.preventDefault()
    showArray(busqueda)
})

// Eventos lijas

menuLijas.addEventListener(`click`,(e)=>{
    let busqueda = productos.filter(
        (dato) => dato.name.includes("lija")
    )
    e.preventDefault()
    showArray(busqueda)
})
// filtrados lijas

menuLijaMad.addEventListener(`click`,(e)=>{
    let busqueda = productos.filter(
        (dato) => dato.name.includes("oja de lija") && dato.subR.includes("madera")
    )
    e.preventDefault()
    showArray(busqueda)
})

menuLijaAgua.addEventListener(`click`,(e)=>{
    let busqueda = productos.filter(
        (dato) => dato.subR === "metal"
    )
    e.preventDefault()
    showArray(busqueda)
})

menuLijaAnti.addEventListener(`click`,(e)=>{
    let busqueda = productos.filter(
        (dato) => dato.subR === "antiempaste"
    )
    e.preventDefault()
    showArray(busqueda)
})

menuLijaEsme.addEventListener(`click`,(e)=>{
    let busqueda = productos.filter(
        (dato) => dato.subR === "tela esmeril"
    )
    e.preventDefault()
    showArray(busqueda)
})

// Eventos discos

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
