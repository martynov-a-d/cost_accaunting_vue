<template>

    <div>
        <!-- Data output component -->
        <DataOutput v-bind:costList="this.costList" />
        <button v-for="elem in costPagination" v-bind:key="elem.id">{{ elem.name }}</button>
        <p>"Длинна ={{ number }}"</p>
    </div>

</template>

<script>

export default {
    name: "PaginationBlock",
    props: {
        costList: {
            type: Array,
        }
    },
    data() {
        return {
            number: this.costList.length,
            costPagination: [],
            pagesPagination: 5,
        }
    },
    created() {
        this.pageHandler()
    },
    beforeUpdate() {
        this.pageHandler()
        this.paginationHandler()
    },
    methods: {
        pageHandler() {
            let remainderDivision = this.costList.length / this.pagesPagination;
            if (this.costList.length % this.pagesPagination == 0) {
                for (let i = 1; i < remainderDivision; i++) {
                    this.costPagination.push({ id: i, name: i })
                }
            } else {
                for (let i = 1; i < remainderDivision + 1; i++) {
                    this.costPagination.push({ id: i, name: i })
                }
            }
        },
        paginationHandler() {
            this.number = this.costList.length
        }
    }
}

</script>