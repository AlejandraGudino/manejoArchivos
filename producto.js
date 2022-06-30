class Producto {
    constructor(title, price, thumbnail, id) {

        if (!title) throw new Error('falta el title')
        if (!price) throw new Error('falta la price')
        if (!thumbnail) throw new Error('falta la thumbnail')

        this.title = title
        this.price = price
        this.thumbnail = thumbnail
        this.id = id
    }
}

module.exports = Producto