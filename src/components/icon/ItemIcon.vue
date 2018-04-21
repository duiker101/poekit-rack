<template lang="pug">
    .item-icon
        img(:src="item.icon")
        item-sockets
</template>

<script>
    import ItemSockets from "./ItemSockets";
    export default {
        name: "item-icon"
        , props: {item: Object}
        , components: {ItemSockets}
    }
</script>

<style lang="scss" scoped>
    .item-icon{
        position: relative;
    }
</style>