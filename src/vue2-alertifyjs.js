import Alerifyjs from 'alertifyjs'

export function install (_Vue,opts = {}) {
    Object.assign(Alerifyjs.defaults,opts) 

    function alertInit() {
        var options = this.$options

        if (options.alert) {
            this.$alert = options.alert
        } else if (options.parent && options.parent.$alert) {
            this.$alert = options.parent.$alert
        } else {
            this.$alert = Alerifyjs.alert
        }

        if (options.confirm) {
            this.$confirm = options.confirm
        } else if (options.parent && options.parent.$confirm) {
            this.$confirm = options.parent.$confirm
        } else {
            this.$confirm = Alerifyjs.confirm
        }

        if (options.prompt) {
            this.$prompt = options.prompt
        } else if (options.parent && options.parent.$prompt) {
            this.$prompt = options.parent.$prompt
        } else {
            this.$prompt = Alerifyjs.prompt
        }

        if (options.notify) {
            this.$notify = options.notify
        } else if (options.parent && options.parent.$notify) {
            this.$notify = options.parent.$notify
        } else {
            this.$notify = Alerifyjs.notify
        }

    }

    var usesInit = _Vue.config._lifecycleHooks.indexOf('init') > -1
    _Vue.mixin(usesInit ? { init: alertInit } : { beforeCreate: alertInit })
}