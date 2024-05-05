import { loadData } from './menu.js'
import store from './store.js'
import router from './router.js'

import {MenuPage} from '../components/MenuPage.js'
import {DetailsPage} from '../components/DetailsPage.js'
import {OrderPage} from '../components/OrderPage.js'

window.app = {}
app.store = store
app.router = router
window.addEventListener('DOMContentLoaded', () => {
    app.router.init()
    loadData()
})