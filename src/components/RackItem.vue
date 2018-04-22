<template lang="pug">
    .rack-item
        item-icon(:item="item")
</template>
<!--rack-item-popup(:item="item")-->

<script>
    import RackItemPopup from "./details/RackItemDetails";
    import ItemIcon from "./icon/RackItemIcon";

    export default {
        name: 'rack-item'
        , props: {item: Object}
        , components: {ItemIcon, RackItemPopup}

    }
</script>

<style lang="scss" scoped>
</style>
