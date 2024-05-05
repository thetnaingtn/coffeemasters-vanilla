export class DetailsPage extends HTMLElement{
    constructor(){
        super();
        this.root = this.attachShadow({mode:"open"});

        const styles = document.createElement("style");
        this.root.appendChild(styles);

        (async function(){
            const response = await fetch("/components/DetailsPage.css")
            styles.textContent =  await response.text();
        })();
        
    }
    connectedCallback(){
        const template = document.getElementById("details-page-template")
        const content = template.content.cloneNode(true)

        this.root.appendChild(content)
    }
}

customElements.define("details-page", DetailsPage)