
export default {
    "install"(Vue) {

        if(this.installed) {
            return
        }
        this.installed = true
        Vue.prototype.$modal = {

            EventBus: new Vue(),

            edit() {
                this.EventBus.$emit('edit')
            },

            deleteHandler(e) {
                this.EventBus.$emit('delete', e)
            },

        }
    },
}