<template lang="pug">
    .popup(v-show="items.length > 0" :style="{'left':left+'px','top':top+'px'}")
        .item-wrapper(v-for='(item,k) in items' :key='k' )
            rack-item-details(:item="item")
</template>

<script>
import Events from '../events.js'

export default {
    name: 'rack-item-popup'
    , data: function () {
        return {items: [], left: 0, top: 0, source_elem: Object, needs_position: false}
    }
    , mounted: function () {
        Events.$on('display-popup', (show, item, elem) => {
            this.display(show, item, elem)
        })
    }
    , methods: {
        display: function (show, item, elem) {
            if (show) {
                this.items.push(item)
                this.source_elem = elem
            } else {
                let i = this.items.indexOf(item)
                this.items.splice(i, 1)
            }
            this.needs_position = true
        }
        , position: function (elem) {
            let w = this.$el.clientWidth
            let h = this.$el.clientHeight

            // position the popup to the top of the item
            let t = Math.max(window.scrollY, elem.offsetTop - h)
            // keep l = -1 as a default, if this doesn't change in the next if, we know we are either at the top or bottom
            let l = -1

            if (h > elem.offsetTop - window.scrollY) {
                // if the popup wont fit in the top, we shift it to the side or the bottom

                // we distances between the item and left/right window borders
                let dl = elem.offsetLeft - window.scrollX
                let dr = window.scrollX + window.innerWidth - (elem.offsetLeft + elem.offsetWidth)

                if (dl > w) {
                    // if we have space to the left
                    l = elem.offsetLeft - w
                } else if (dr > w) {
                    // if we have space to the right
                    l = elem.offsetLeft + elem.offsetWidth
                } else {
                    // if neither, the item goes to the bottom but we don't set the left yet
                    t = elem.offsetTop + elem.offsetHeight
                }
            }

            // if left is still -1 then we need to center it over/under the item
            if (l === -1) {
                // center it in the middle
                l = elem.offsetLeft + elem.offsetWidth / 2 - w / 2
                // make sure we don't overlap the left border
                l = Math.max(window.scrollX, l)
                // make sure we don't overlap the right border
                l = Math.min(window.scrollX + window.innerWidth - w, l)
            }

            this.left = l
            this.top = t

            this.needs_position = false
        }
    }
    ,
    updated: function () {
        if (this.needs_position)
            this.position(this.source_elem)
    }
}
</script>

<style lang="scss" scoped>
    .popup {
        top: 0;
        left: 0;
        z-index: 1500;
        position: absolute;
        display: inline-grid;
        grid-template-columns: auto auto;
    }

    .item-wrapper {
        margin: 5px;
    }
</style>