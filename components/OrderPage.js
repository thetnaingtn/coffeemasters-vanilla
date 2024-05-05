export class OrderPage extends HTMLElement{
    constructor(){
        super()
        this.root = this.attachShadow({mode:"open"})

        const styles = document.createElement("style");
        this.root.appendChild(styles);

        (async function(){
            const response = await fetch("/components/OrderPage.css");
            styles.textContent =  await response.text();
        })();
    }

    connectedCallback(){
        const template = document.getElementById("order-form-template")
        const content = template.content.cloneNode(true)

        this.root.appendChild(content)
    }
}

customElements.define("order-page", OrderPage)