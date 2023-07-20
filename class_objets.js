class Productos {
    constructor (id, titulo, subRubro, grosor, precio, marca, imagen){
        this.id = id,
        this.name = titulo,
        this.subR = subRubro,
        this.medida = grosor,
        this.costo = precio,
        this.marc = marca,
        this.img = imagen,
        this.cantidad = 1
    } 
    sumarCantidad(){
        this.cantidad += 1
        return this.cantidad
    }
    restarCantidad(){
        this.cantidad -= 1
        return this.cantidad
    }
}

class Usuarios {
    constructor(id, nombre, email, contraseña, direcc, city, prov, postal){
        this.id = id
        this.nombre = nombre,
        this.email = email,
        this.pass = contraseña,
        this.direcc = direcc,
        this.ciudad = city,
        this.prov = prov,
        this.postal = postal
    }
}

let usuarios = []
let carro = []

const cargarPorductos = async () =>{
    const res = await fetch("./../productos.json")
    const data = await res.json()
    
    for(let prod of data){
        let productosData = new Productos (prod.id, prod.name, prod.subR, prod.medida, prod.costo, prod.marc, prod.img, prod.cantidad)
        productos.push(productosData)
    }
    
}

let productos = []
