const GrupoArchivo = require('./GrupoArchivo.js')

async function main() {
    const grupo = new GrupoArchivo('./productos.js')

    const articulo1 = {
        title: 'Funko Pop',
        price: 36,
        thumbnail: 'imagen14'
    }

    await grupo.agregar(articulo1)

    const articulo2 = {
        title: 'Comic',
        price: 60,
        thumbnail: 'imagen15'
    }


    await grupo.agregar(articulo2)

    console.log(await grupo.obtenerTodas())

    await grupo.borrarPersona('Calculadora')

    console.log(await grupo.obtenerTodas())

}

main()