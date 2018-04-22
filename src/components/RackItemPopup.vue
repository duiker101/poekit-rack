<template lang="pug">
    .popup(v-show="items.length > 0" :style="{'left':left+'px','top':top+'px'}")
        .item-wrapper
            rack-item-details(v-for='(item,k) in items' :key='k' :item="item")
</template>

<script>
    import Events from '../events.js'

    export default {
        name: "rack-item-popup"
        , data: function () {
            return {items: [], left: 0, top: 0}
        }
        , mounted: function () {
            Events.$on('display-popup', (show, item, elem) => {
                this.display(show, item, elem);
            });
        }
        , methods: {
            display: function (show, item, elem) {
                if (show) {
                    this.items.push(item);
                    this.position(elem);
                } else {
                    let i = this.items.indexOf(item);
                    this.items.splice(i, 1);
                }
            }
            , position: function (elem) {
                this.left = elem.offsetLeft + elem.offsetWidth;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .popup {
        top: 0;
        left: 0;
        z-index: 1000;
        position: absolute;
        /*display: inline-grid;*/
        /*grid-template-columns: auto auto;*/
    }

    .item-wrapper {
        margin: 10px;
        padding:10px;
    }
</style>