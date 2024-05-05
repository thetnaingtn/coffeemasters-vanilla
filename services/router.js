const router = {
    init(){
        document.querySelectorAll("a").forEach(anchor => {
            anchor.addEventListener("click", (event)=>{
                event.preventDefault();
                const path = event.target.getAttribute("href")
                router.go(path)
            })
        })

        router.go(location.pathname)
        
        window.addEventListener('popstate',(event)=>{
            console.log(event.state)
            router.go(event.state.path, false)
        })
    },
    go(path, addToHistory = true){
        if(addToHistory){
            window.history.pushState({path}, null, path)
        }

        let pageElement = null;
        console.log(path)
        switch(path){
            case "/":
                pageElement = document.createElement("menu-page")
                break;
            case "/order":
                pageElement = document.createElement("h1")
                pageElement.textContent = "Order"
                break;
            default:
                if (path.startsWith("/product-")) {                
                    pageElement = document.createElement("h1");
                    pageElement.textContent = "Details";
                    pageElement.dataset.productId = path.substring(path.lastIndexOf("-")+1);
                }
                break;
        }

        if(pageElement){
            const main = document.querySelector("main")
            main.innerHTML = ""
            main.appendChild(pageElement)
        }

        window.scrollX = 0  
        window.scrollY = 0
    }
}


export default router