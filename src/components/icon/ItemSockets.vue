<template lang="pug">
    .sockets(:class="['w'+w,'h'+h,'s'+count]")
        .gems
            .gem(v-for="(s,i) in sockets" :key="i" :class="getClasses(s,i)" @mouseover="show(true,i)" @mouseleave="show(false,i)")
        .links
            .link(v-show="links[0]")
            .link(v-show="links[1]")
            .link(v-show="links[2]")
            .link(v-show="links[3]")
            .link(v-show="links[4]")

</template>

<script>
    import Events from '../../events.js'
    export default {
        name: "item-sockets"
        , props: {w: Number, h: Number, sockets: Array, gems: Array}
        , computed: {
            count: function () {
                return this.sockets.length;
            }
            , links: function () {
                let links = {};
                let lastGroup = 0;
                for (let [i, s] of this.sockets.entries()) {
                    if (i === 0)
                        continue;
                    links[i - 1] = lastGroup === s.group;
                    lastGroup = s.group;
                }
                return links;
            }
        }
        , methods: {
            getClasses: function (s, i) {
                let colour = s.sColour;
                let attr = '';
                let socketed = '';
                let gemType = '';

                let colors = {'I': 'B', 'S': 'R', 'D': 'G'};
                for (let g in this.gems) {
                    let gem = this.gems[g];
                    if (gem.socket === i) {
                        attr = colors[gem.colour];
                        socketed = 'socketed';
                        gemType = gem.support ? 'supportgem' : 'activegem';
                        break;
                    }
                }
                return [colour, attr, socketed, gemType];
            }
            , show: function (on, i) {
                let gem = null;
                for (let s of this.gems) {
                    if (s.socket === i)
                        gem = s;
                }

                if (gem === null)
                    return;

                Events.$emit('display-popup', on, gem, this.$parent.$el);
            }
        }
    }
</script>

<style lang="scss" scoped>
    $s: 47px; // socket size
    $s2: $s/2; // half socket size
    $s3: $s+$s2; // socket size and a half

    // when width is 1, all the positions
    .w1 {
        left: 0;
        &.h2 {
            &.s1 {
                top: $s2;
            }
            &.s2 {
                top: 0;
            }
        }
        &.h3 {
            &.s1 {
                top: $s;
            }
            &.s2 {
                top: $s2;
            }
            &.s3 {
                top: 0;
            }
        }
    }

    // when width is 2, all the positions
    .w2 {
        &.s1 {
            left: $s2;
        }
        // h1 is 0

        &.h2 {
            &.s1, &.s2 {
                top: $s2;
            }
        }
        &.h3 {
            &.s1, &.s2 {
                top: $s;
            }
            &.s3, &.s4 {
                top: $s2;
            }
        }
        &.h4 {
            &.s1, &.s2 {
                top: $s3;
            }
            &.s3, &.s4 {
                top: $s;
            }
            &.s5, &.s6 {
                top: $s2;
            }
        }
    }

    .gems {
        display: inline-grid;
    }

    .w2 .gems {
        grid-template-columns: 47px 47px;
        // this 2 selectors take care of the align in the S of the sockets when the width is 2. if it's one they stack
        .gem:nth-of-type(3) {
            grid-column: 2;
            grid-row: 2;
        }
        .gem:nth-of-type(4) {
            grid-column: 1;
            grid-row: 2;
        }
    }

    // if width is only one, all the sockets are on one column
    .w1 .gems {
        grid-template-columns: 47px;
    }

    .gem {
        width: 47px;
        height: 47px;

        &.socketed:hover {
            background-position: 0px -50px;
            cursor: pointer;
        }

        @mixin gem($type) {
            background-image: url("../../images/sockets/#{$type}.png");
            &.supportgem {
                background-image: url("../../images/sockets/#{$type}_support.png");
            }
            &.activegem {
                background-image: url("../../images/sockets/#{$type}_active.png");
            }
        }
        @mixin white($type) {
            &.supportgem {
                background-image: url("../../images/sockets/#{$type}_support.png");
            }
            &.activegem {
                background-image: url("../../images/sockets/#{$type}_active.png");
            }
        }
        &.W {
            background-image: url("../../images/sockets/w.png");
            &.R {
                @include white('w_str')
            }
            &.G {
                @include white('w_dex')
            }
            &.B {
                @include white('w_int')
            }
        }
        &.R {
            @include gem('str');
        }
        &.G {
            @include gem('dex');
        }
        &.B {
            @include gem('int');
        }
        &.A {
            background-image: url("../../images/sockets/abyss.png");
            &.socketed {
                background-image: url("../../images/sockets/abyss_socketed.png");
            }
        }
    }

    .links {
        position: absolute;
        top: 0;

        // this would stops the link from preventing the hover on the sockets
        /*pointer-events:none;*/
    }

    @mixin horizontal() {
        background-image: url("../../images/sockets/link_horizontal.png");
        width: 37.72819px;
        height: 15.21298px;
        left: 28.60041px;
    }

    @mixin vertical() {
        background-image: url("../../images/sockets/link_vertical.png");
        width: 15.21298px;
        height: 37.72819px;
    }

    .w1 {
        .link {
            position: absolute;
            &:nth-of-type(1) {
                @include vertical();
                left: 16.12576px;
                top: 28.60041px;
            }
            &:nth-of-type(2) {
                @include vertical();
                left: 16.12576px;
                top: 76.06491px;
            }
        }
    }

    .w2 {
        .link {
            position: absolute;
            &:nth-of-type(1) {
                @include horizontal();
                top: 16.12576px;
            }
            &:nth-of-type(2) {
                @include vertical();
                left: 63.59026px;
                top: 28.60041px;
            }
            &:nth-of-type(3) {
                @include horizontal();
                top: 63.59026px;
            }
            &:nth-of-type(4) {
                @include vertical();
                left: 16.12576px;
                top: 76.06491px;
            }
            &:nth-of-type(5) {
                @include horizontal();
                top: 111.05477px;
            }
        }
    }

    .sockets {
        position: absolute;
        top: 0;
    }
</style>