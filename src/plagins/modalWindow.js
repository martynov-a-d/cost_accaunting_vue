
export default {
    "install"(Vue) {

        if(this.installed) {
            return
        }
        this.installed = true
        Vue.prototype.$modal = {

            EventBus: new Vue(),

            edit(e) {
                this.EventBus.$emit('edit', e)
            },

            deleteHandler(e) {
                this.EventBus.$emit('delete', e)
            },

        }
    },
}