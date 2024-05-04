import { loadData } from './menu.js'
import store from './store.js'

window.app = {}
app.store = store
window.addEventListener('DOMContentLoaded', () => {
    loadData()
})