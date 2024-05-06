import API from './api.js'

export async function loadData(){
    app.store.menu = await API.fetchMenu()
}

export async function getProductById(id){
    if(!app.store.menu){
        await loadData()
    }

    for(let category of app.store.menu){
        for(let product of category.products){
            if(product.id == id) return product
        }
    }

    return null
}