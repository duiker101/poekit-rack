<template lang="pug">
    .item-icon(:class="classes" @mouseover="show(true)" @mouseleave="show(false)")
        img(:src="item.icon")
        item-sockets(v-show="hovered" v-if="item.sockets" :sockets="item.sockets" :gems="item.socketedItems" :h="item.h" :w="item.w")
</template>

<script>
import ItemSockets from './ItemSockets'
import Events from '../../events.js'

export default {
    name: 'rack-item-icon'
    , props: {item: Object}
    , data: function () {
        return {hovered: false}
    }
    , components: {ItemSockets}
    , methods: {
        show: function (on) {
            if (on !== this.hovered)
                Events.$emit('display-popup', on, this.item, this.$el)
            this.hovered = on
        }
    }
    , computed: {
        classes: function () {
            return [
                this.item.elder ? 'elder' : ''
                , this.item.shaper ? 'shaper' : ''
                , 'w' + this.item.w
                , 'h' + this.item.h
                , this.item.identified ? '' : 'unidentified'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .item-icon {
        position: relative;
        width: min-content;
        width: -moz-min-content;

        background: rgba(25, 26, 150, 0.25) no-repeat;
        &.unidentified {
            background-color: rgba(210, 0, 0, 0.18);
        }

        @mixin pic($type,$w,$h) {
            background-image: url("https://www.pathofexile.com/image/inventory/#{$type}Background.png?w=#{$w}&h=#{$h}&x=0&y=0");
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
            @include type('Elder');
        }
        &.shaper {
            @include type('Shaper');
        }
    }
</style>