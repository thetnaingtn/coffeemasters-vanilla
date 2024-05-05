import { loadData } from './menu.js'
import store from './store.js'
import router from './router.js'

window.app = {}
app.store = store
app.router = router
window.addEventListener('DOMContentLoaded', () => {
    app.router.init()
    loadData()
})