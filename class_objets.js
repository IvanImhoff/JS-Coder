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
const producto75 = new Productos (38, `Disco de corte p/hormigón`, `mamposteria`, "115", 1555, `Norton`,`discoSegNorton.jpg`, 1)
const producto76 = new Productos (39, `Disco de corte p/hormigón`, `mamposteria`, "180", 2000, `Norton`,`discoSegNorton.jpg`, 1)
const producto77 = new Productos (40, `Disco de corte p/hormigón`, `mamposteria`, "230", 2450, `Norton`,`discoSegNorton.jpg`, 1)
const producto78 = new Productos (41, `Disco de corte p/cerámica`, `mamposteria`, "115", 1700, `Norton`,`discoContNorton.webp`, 1)
const producto79 = new Productos (42, `Disco de corte p/cerámica`, `mamposteria`, "180", 2200, `Norton`,`discoContNorton.webp`, 1)
const producto80 = new Productos (43, `Disco de corte p/cerámica`, `mamposteria`, "230", 2950, `Norton`,`discoContNorton.webp`, 1)
const producto81 = new Productos (44, `Disco de corte`, `metal`, "115", 500, `tyrolit`,`discoCorteTy.jpg`, 1)
const producto82 = new Productos (45, `Disco de corte`, `metal`, "180", 650, `tyrolit`,`discoCorteTy.jpg`, 1)
const producto83 = new Productos (46, `Disco de corte`, `metal`, "230", 950, `tyrolit`,`discoCorteTy.jpg`, 1)
const producto84 = new Productos (47, `Disco de corte`, `metal`, "115", 550, `tyrolit`,`discoCorteTy.jpg`, 1)
const producto85 = new Productos (48, `Disco de corte`, `metal`, "180", 750, `tyrolit`,`discoCorteTy.jpg`, 1)
const producto86 = new Productos (49, `Disco de corte`, `metal`, "230", 1150, `tyrolit`,`discoCorteTy.jpg`, 1)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21, producto22, producto23, producto24, producto25, producto26, producto27, producto28, producto29, producto30, producto31, producto32, producto33, producto34, producto35, producto36, producto37, producto38, producto39, producto40, producto41, producto42, producto43, producto44, producto45, producto46, producto47, producto48, producto49, producto50, producto51, producto52, producto53, producto54, producto55, producto56, producto57, producto58, producto59, producto60, producto61, producto62, producto63, producto64, producto65, producto66, producto67, producto68, producto69, producto70, producto71, producto72, producto73, producto74, producto75, producto76, producto77, producto78, producto79, producto80, producto81, producto82, producto83, producto84, producto85, producto86]

let carro = []