<template lang="pug">
    .item-icon
        img(:src="item.icon")
        item-sockets(v-if="item.sockets" :sockets="ts" :gems="item.socketedItems" :h="item.h" :w="item.w")
</template>

<script>
    import ItemSockets from "./ItemSockets";
    export default {
        name: "item-icon"
        , props: {item: Object, ts:Array}
        , components: {ItemSockets}
    }
</script>

<style lang="scss" scoped>
    .item-icon{
        position: relative;
    }
</style>