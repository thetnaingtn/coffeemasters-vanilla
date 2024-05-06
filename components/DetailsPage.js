import { getProductById } from "../services/menu.js";
import {addToCart} from '../services/order.js'

export class DetailsPage extends HTMLElement{
    constructor(){
        super();
        this.root = this.attachShadow({mode:"open"});

        const styles = document.createElement("style");
        
        const template = document.getElementById("details-page-template")
        const content = template.content.cloneNode(true)

        this.root.appendChild(content);
        this.root.appendChild(styles);

        (async function(){
            const response = await fetch("/components/DetailsPage.css")
            styles.textContent =  await response.text();
        })();
    }
    async render(){
        if(this.dataset.productId){
            const product = await  getProductById(this.dataset.productId)
            this.root.querySelector("header h2").textContent = product.name
            this.root.querySelector("p.description").textContent = product.description
            this.root.querySelector("p.price").textContent = product.price
            this.root.querySelector("img").src = `data/images/${product.image}`
            this.root.querySelector("button").addEventListener("click", ()=> {
                addToCart(product.id); 
                app.router.go('/order');
            })
        }else{
            alert("Invalid product id")
        }
        
    }
    connectedCallback(){
        this.render()    
    }
}

customElements.define("details-page", DetailsPage)