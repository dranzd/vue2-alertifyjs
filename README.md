Vue2 Alertifyjs
================

## Installation
```bash
npm install alertifyjs vue2-alertifyjs
```


## Usage
```js
import 'alertifyjs/build/alertify.min.js'
import 'alertifyjs/build/css/alertify.min.css'
import 'alertifyjs/build/css/themes/default.min.css'
import Alertifyjs from 'vue2-alertifyjs'

const opts = {
  notifier:{
      delay:5,
      position:'top-right',
      closeButton: false
  }
}

Vue.use(Alertifyjs,opts)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted() {
  	let vm = this

  	vm.$notify('TEST','success')

  }
})


------------------


// Some other component in the app

<script>
export default {
	name:'test'
	mounted() {
		this.$confirm()
	}
}
</script>
```


## Test
```bash
cd test
npm i
npm run dev
```
Open up the browser and you will see a sample notify


## Options
```js
opts = {
        // dialogs defaults
        autoReset:true,
        basic:false,
        closable:true,
        closableByDimmer:true,
        frameless:false,
        maintainFocus:true, // <== global default not per instance, applies to all dialogs
        maximizable:true,
        modal:true,
        movable:true,
        moveBounded:false,
        overflow:true,
        padding: true,
        pinnable:true,
        pinned:true,
        preventBodyShift:false, // <== global default not per instance, applies to all dialogs
        resizable:true,
        startMaximized:false,
        transition:'pulse',

        // notifier defaults
        notifier:{
            // auto-dismiss wait time (in seconds)  
            delay:5,
            // default position
            position:'bottom-right',
            // adds a close button to notifier messages
            closeButton: false
        },

        // language resources 
        glossary:{
            // dialogs default title
            title:'AlertifyJS',
            // ok button text
            ok: 'OK',
            // cancel button text
            cancel: 'Cancel'            
        },

        // theme settings
        theme:{
            // class name attached to prompt dialog input textbox.
            input:'ajs-input',
            // class name attached to ok button
            ok:'ajs-ok',
            // class name attached to cancel button 
            cancel:'ajs-cancel'
        }
    };
```