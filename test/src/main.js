// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import 'alertifyjs/build/alertify.min.js'
import 'alertifyjs/build/css/alertify.min.css'
import 'alertifyjs/build/css/themes/default.min.css'
import Alertifyjs from '../../src/index.js'

Vue.config.productionTip = false

Vue.use(Alertifyjs,{
  notifier:{
    delay:5,
    position:'top-right',
    closeButton: false
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted() {
  	let vm = this

    vm.$notify('TEST','success')
    vm.$alert('Alert Title', 'Alert Message!')
    vm.$confirm('Confirm Title', 'Confirm Message')
    vm.$prompt( 'Prompt Title', 'Prompt Message', 'Prompt Value')

  }
})
