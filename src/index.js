// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('example-com', require('./components/Example.vue').default)
Vue.component('nav-head', require('./components/Navbar.vue').default)

// Vue init
const app = new Vue({
  el: '#app'
})