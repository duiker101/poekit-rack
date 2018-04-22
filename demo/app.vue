<template lang="pug">
    #app
        rack-item-icon(:item="i" v-for="i in test_data.items" v-bind:key="i.id")
</template>

<script>
    import test_data from './test_data.json'

    export default {
        name: 'app',
        data: function () {
            return {test_data: test_data}
        }
        , computed: {
            demo_item: function () {
                console.log(test_data);
                return test_data.items[0];
            }
        }
    }
</script>