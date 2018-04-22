<template lang="pug">
    #app
        rack-item(:item="test_data.items[0]")
</template>
<!--rack-item(:item="i" v-for="i in test_data.items" v-bind:key="i.id")-->

<script>
    import test_data from './test_data.json'

    export default {
        name: 'app',
        data: function () {
            return {test_data: test_data}
        }
    }
</script>
<style lang="scss" scoped>
    #app{
        padding:1000px;
    }

</style>