const store = {
    menu: null,
    cart: []
}

const proxiedStore = new Proxy(store, {
    set(target, property, value){
        if(property === 'menu'){
            target[property] = value;
            const event = new Event("appmenuchange")
            window.dispatchEvent(event)
        }
        if(property === 'cart'){
            const event = new Event("appcartchange")
            window.dispatchEvent(event)
        }
        return true;
    },
})

export default proxiedStore