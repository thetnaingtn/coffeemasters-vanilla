export class MenuPage extends HTMLElement{
    constructor(){
        super();
        this.root = this.attachShadow({mode:"open"});

        // load menu template to this custom element
        const template = document.getElementById("menu-page-template")
        const content = template.content.cloneNode(true)
        this.root.appendChild(content)

        const styles = document.createElement("style");
        this.root.appendChild(styles);

        (async function(){
            const response = await fetch("/components/MenuPage.css")
            styles.textContent =  await response.text();
        })();
    }
    connectedCallback(){
        window.addEventListener("appmenuchange", () => {
            this.render()
        })
        this.render()
    }

    render(){
        const menu = this.root.querySelector("#menu")
        if(app.store.menu){
            menu.innerHTML = ""
            app.store.menu.forEach(category => {
                const li = document.createElement("li")
                li.innerHTML = `
                    <h1>${category.name}</h1>
                    <ul class="category"></ul>
                `
                menu.appendChild(li)
                category.products.forEach(product => {
                    const productItem = document.createElement("product-item")
                    productItem.dataset.product = JSON.stringify(product)
                    li.querySelector(".category").appendChild(productItem)
                })
            })
        }else{
            menu.innerHTML = "Loading..."
        }
        
    }
}

customElements.define("menu-page", MenuPage)