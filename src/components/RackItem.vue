<template lang="pug">
    .rack-item
        item-icon(:item="item")
        rack-item-popup(:item="item")
</template>

<script>
    import RackItemPopup from "./popup/ItemPopup";
    import ItemIcon from "./icon/ItemIcon";

    export default {
        name: 'rack-item'
        , props: {item: Object}
        , components: {ItemIcon, RackItemPopup}

    }
</script>

<style lang="scss" scoped>
</style>
