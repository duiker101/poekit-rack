<template lang="pug">
    .rack-item
        rack-item-icon(:item="item")
        rack-item-popup
</template>
<!--rack-item-details(:item="item")-->

<script>
    import RackItemDetails from "./details/RackItemDetails";
    import ItemIcon from "./icon/RackItemIcon";
    import RackItemPopup from "./RackItemPopup";

    export default {
        name: 'rack-item'
        , props: {item: Object}
        , components: {RackItemPopup, ItemIcon, RackItemDetails}

    }
</script>

<style lang="scss" scoped>
</style>
