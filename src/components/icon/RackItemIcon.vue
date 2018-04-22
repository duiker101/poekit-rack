<template lang="pug">
    .item-icon(:class="[item.elder?'elder':'',item.shaper?'shaper':'']")
        img(:src="item.icon")
        item-sockets(v-if="item.sockets" :sockets="item.sockets" :gems="item.socketedItems" :h="item.h" :w="item.w")
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
        background-repeat: no-repeat;
        &.elder{
            background-image: url("../../images/item_bg/elder22.png");
        }
        &.shaper{
            background-image: url("../../images/item_bg/shaper24.png");
        }
    }
</style>