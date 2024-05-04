const API = {
    fetchMenu: async () => {
        const  resp = await fetch("./data/menu.json");
        return resp.json();
    }
}

export default API