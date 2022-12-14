<template>

    <div>
        <!--  Drop menu Category  -->
        <select v-show="fetchCategory.length" name="choiseCategory" id="choiseCategory">
            <option v-for="elem in fetchCategory" v-bind:key="elem.id">{{ elem.name }}</option>
        </select>
        <!--  Add new category component  -->
        <div v-show="!getSetups.isHiddenAdderCategory">
            <input type="text" placeholder="category name" v-model="newCategory.name">
            <button v-on:click="this.createCategory">ADD CATEGORY</button>
        </div>
    </div>

</template>

<script>

export default {
    name: "DisplayCategoryVue",
    props: {
        fetchCategory: {
            type: Array
        },
        getSetups: {
            type: Object
        },
    },
    data() {
        return {
            newCategory: {
                id: "",
                name: ""
            },
        }
    },
    methods: {
        /**
         *  Category adder
         */
        createCategory() {
            if (this.newCategory.name !== "") {
                this.$emit("errorHandler", false)
                this.newCategory.id = this.fetchCategory.length + 1
                this.$emit("addNewCategory", this.newCategory)
                this.newCategory = { id: "", name: "" }
            } else {
                this.$emit("errorHandler", true)
            }
        },
    }
}

</script>