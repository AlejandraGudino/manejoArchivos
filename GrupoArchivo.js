const fs = require('fs')
const Producto = require('./producto.js')

class GrupoArchivo {
    constructor(ruta) {
        this.ruta = ruta
        this.productos = []
    }

    guardar() {
        const productoComoJson = JSON.stringify(this.productos, null, 2)
        return fs.promises.writeFile(this.ruta, productoComoJson)
    }

    leer() {
        return fs.promises.readFile(this.ruta, 'utf-8')
            .then(texto => {
                const productoComoArray = JSON.parse(texto)
                this.productos = productoComoArray
            })
    }

    async agregar(datos) {
        const productos = new Producto(datos.title, datos.price, datos.thumbnail, datos.id)
        await this.leer()
        this.productos.push(productos)
        await this.guardar()

    }

    async obtenerTodas() {
        await this.leer()
        return [...this.productos]
    }

    async borrarPersona(title) {
        await this.leer()
        const indice = this.productos.findIndex(productos => productos.title === title)
        if (indice !== -1) {
            this.productos.splice(indice, 1)
            await this.guardar()
        }
    }
}

module.exports = GrupoArchivo