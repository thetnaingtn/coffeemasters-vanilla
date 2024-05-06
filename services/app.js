import { loadData } from './menu.js'
import store from './store.js'
import router from './router.js'

import {MenuPage} from '../components/MenuPage.js'
import {DetailsPage} from '../components/DetailsPage.js'
import {OrderPage} from '../components/OrderPage.js'
import {ProductItem} from '../components/ProductItem.js'
import CartItem from '../components/CartItem.js'

window.app = {}
app.store = store
app.router = router
window.addEventListener('DOMContentLoaded', () => {
    app.router.init()
    loadData()
})

window.addEventListener("appcartchange", event => {
    const badge = document.getElementById("badge");
    const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
    badge.textContent = qty;
    badge.hidden = qty == 0;
});