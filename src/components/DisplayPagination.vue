<template>
    <div>
        <!-- Data output component -->
        <DataOutput v-bind:costList="this.pageList" />
        <button v-for="elem in costPagination" v-bind:key="elem.id" v-on:click="choisePagination(elem.id)">{{ elem.name
        }}</button>
        <p>{{ this.costList.length }}</p>
    </div>
</template>

<script>

export default {
    name: "PaginationBlock",
    props: {
        costList: {
            type: Array,
            default: function () { [] },
        }
    },
    data() {
        return {
            costPagination: [],
            pagesPagination: 5,
            pageList: [],
            padList: [],
            pageSelect: this.$route.params.page,
        }
    },
    beforeMount() {
    },
    mounted() {
        this.pageHandler()
        this.choisePagination(this.$route.params.page)
    },
    beforeUpdate() {
        this.paginationClean()
        this.pageListUpdater()
        this.updatePaginstion()
    },
    methods: {
        pageListUpdater() {
            this.padList = this.costList
        },
        paginationClean() {
            this.costPagination = []
            this.pageHandler()
        },
        pageHandler() {
            let remainderDivision = this.costList.length / this.pagesPagination;
            if (this.costList.length % this.pagesPagination == 0) {
                for (let i = 1; i <= remainderDivision; i++) {
                    this.costPagination.push({ id: i, name: i })
                }
            } else {
                for (let i = 1; i < remainderDivision + 1; i++) {
                    this.costPagination.push({ id: i, name: i })
                }
            }
        },
        choisePagination(elem) {
            if (isNaN(elem)) {
                elem = "1"
            }
            this.pageSelect = elem
            this.updatePageParams(elem)
            this.updatePaginstion()
        },
        updatePaginstion() {
            let page = this.pageSelect * this.pagesPagination
            this.pageList = this.padList
            this.pageList = this.pageList.slice([page - 5], [page])
        },
        updatePageParams(elem) {
            this.$route.params.page = `${elem}`
            this.$router.push({ name: "dashboard" })
        }
    },
    computed: {

    }
}

</script>