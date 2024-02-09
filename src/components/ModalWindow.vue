<template>
  <transition name="modalWindowShownerFade">
    <div>
      <p v-on:click="modalWindowShowner = !modalWindowShowner" v-if="!modalWindowShowner">show</p>
      <p v-on:click="modalWindowShowner = !modalWindowShowner" v-if="modalWindowShowner">hide</p>
      <div v-show="modalWindowShowner">
        <p v-on:click="$modal.edit()">Edit</p>
        <p v-on:click="$modal.deleteHandler(modalwindow)">Delete</p>
      </div>
    </div>
  </transition>
</template>

<script>
import modalWindow from "@/plagins/modalWindow";

export default {
  name: 'ModalWindow',
  props: {
    modalwindow: {
        type: Object,
        default: function () {
          return {}

        },
      }
  },
  computed: {
    modalWindow() {
      return modalWindow
    }
  },
  data() {
      return {
        modalWindowShowner: false
      }
  },
}
</script>

<style scoped lang="scss">
  .modalWindowShownerFade-enter-active, .modalWindowShownerFade-leave-active {
    transition: opacity .5s;
  }
  .modalWindowShownerFade-enter, .modalWindowShownerFade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>