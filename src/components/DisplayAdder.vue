<template>
    <div>
        <div v-show="!isHidden">
            <input class="cost_new_param" type="text" v-model="newCost.price" placeholder="payment amount">
            <input class="cost_new_param" type="text" v-model="newCost.name" placeholder="payment description">
            <button v-on:click="costAdder(test)">{{ adderHandler ? "ADD COST" : "EDIT COST" }}</button>
        </div>
        <p v-show="isError" v-bind:class="{ 'text-danger': isError }">{{ isDescription }}</p>
        <p v-show="isStatus">WELL</p>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'


export default {
    name: "DisplayAdder",
    data() {
        return {
            newCost: {
                id: "",
                name: "",
                price: "",
                date: "",
            },
            isError: false,
            isDescription: "",
            isHidden: false,
            isAdder: true,
            isStatus: false,
            test: this.actionHandler
        }
    },
    props: [ 'actionHandler' ],
    mounted() {
        this.getDataURL()
        this.adderHandler()
        this.$modal.EventBus.$on('edit', (e) => {this.modalEditHandler(e)})
    },
    methods: {
        adderHandler: function () {
          this.isAdder = this.test === "addNewCost";
        },
        costAdder: function (param) {
            this.errorHandler(false, "")
            if (this.newCost.price === "" || !isFinite(this.newCost.price)) {
                this.errorHandler(true, "Enter the figure")
            } else if (this.newCost.name === "") {
                this.errorHandler(true, "Enter the name")
            } else if (param === "addNewCost") {
                this.newCost = { id: this.idHandler(), name: this.newCost.name, price: this.newCost.price };
                this.addNewCost(this.newCost)
                this.costCleaner();
                this.isHidden = !this.isHidden
            }
            else if (param === "editCost") {
              this.editCost(this.newCost)
              this.costCleaner()
              this.isHidden = !this.isHidden
            }
        },
        idHandler: function () {
          let massive = this.fetchData
          let startElem = 0
          let elem = ""
          for(let i = 0; i < massive.length; i++) {
            if (startElem < massive[i].id) {
              elem = massive[i].id + 1
            } else {
              console.log("error - idHandler()")
            }
          }
          return elem

        },
        costCleaner: function () {
            this.newCost = { id: "", name: "", price: "" };
        },
        getDataURL: function () {
          if (this.$route.params.category === "addNewCost") {
            this.test = "addNewCost"
          } else {
              this.newCost.name = this.$route.params.category
              this.newCost.price = this.$route.query.value
              if (this.newCost.name !== undefined) {
                  this.costAdder("addNewCost")
                  this.isStatus = !this.isError
                  this.isHidden = !this.isError
              }
          }
        },
        modalEditHandler(e) {
          this.test = "editCost"
          this.newCost.price = e.price
          this.newCost.name = e.name
          this.newCost.id = e.id
        },
        errorHandler(error, param) {
            this.isError = error
            this.isDescription = param
        },
        ...mapMutations([
            'addNewCost',
            'editCost'
        ])
    },
    computed: {
        ...mapGetters([
            'fetchData'
        ])
    }
}

</script>

<style lang="scss" scoped>
@import "../assets/DisplayCost.scss";
</style>