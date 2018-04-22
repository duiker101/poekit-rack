<template lang="pug">
    .item-icon(:class="[item.elder?'elder':'',item.shaper?'shaper':'','w'+item.w,'h'+item.h]")
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
    .item-icon {
        position: relative;
        background-repeat: no-repeat;

        @mixin pic($type,$w,$h) {
            background-image: url("../../images/item_bg/#{$type}#{$w}#{$h}.png");
        }
        @mixin type($type) {
            &.w1 {
                &.h1 {
                    @include pic($type, 1, 1);
                }
                &.h3 {
                    @include pic($type, 1, 3);
                }
                &.h4 {
                    @include pic($type, 1, 4);
                }
            }
            &.w2 {
                &.h1 {
                    @include pic($type, 2, 1);
                }
                &.h2 {
                    @include pic($type, 2, 2);
                }
                &.h3 {
                    @include pic($type, 2, 3);
                }
                &.h4 {
                    @include pic($type, 2, 4);
                }
            }
        }

        &.elder {
            @include type('elder');
        }
        &.shaper {
            @include type('shaper');
        }
    }
</style>