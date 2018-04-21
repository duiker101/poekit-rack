<template lang="pug">
    #app
        rack-item(:item="i" v-for="i in test_data.items" v-bind:key="i.id")
</template>

<script>
    import test_data from './test_data.json'
    import test_item from './test_item.json'
    import ItemIcon from "../src/components/icon/ItemIcon";

    export default {
        name: 'app',
        components: {ItemIcon},
        data: function () {
            return {test_data: test_data, test_item:test_item}
        }
        , computed: {
            demo_item: function () {
                console.log(test_data);
                return test_data.items[0];
            }
        }
    }
</script>