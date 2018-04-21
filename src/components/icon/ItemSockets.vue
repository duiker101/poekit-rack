<template lang="pug">
    .sockets(:class="['w'+w,'h'+h,'s'+count]")
        .gems
            .gem.red(v-if="count > 0")
            .gem.green(v-if="count > 1")
            .gem.blue(v-if="count > 2")
            .gem.red(v-if="count > 3")
            .gem.green(v-if="count > 4")
            .gem.blue(v-if="count > 5")
        .links
</template>

<script>
    export default {
        name: "item-sockets"
        , props: {w: Number, h: Number, sockets: Array, gems: Array}
        , computed: {
            count: function () {
                return this.sockets.length;
            }
        }
    }
</script>

<style lang="scss" scoped>
    $s: 47px;
    $s2: $s/2;

    // if there's only one socket, it's always in the horizontal center
    .s1{
        left:$s2;
        // except for items with 1 of width
        &.w1{
            left:0;
        }
    }




    .h4 {
        &.s6 {
            top: 23px;
        }
    }

    .gems {
        display: inline-grid;
        grid-template-columns: 47px 47px;
    }

    .gem {
        width: 47px;
        height: 47px;


        // this 2 selectors take care of the align in the S of the sockets
        &:nth-of-type(3) {
            grid-column: 2;
            grid-row: 2;
        }
        &:nth-of-type(4) {
            grid-column: 1;
            grid-row: 2;
        }


        &.socketed:hover {
            background-position: 0px -50px;
            cursor: pointer;
        }
        &.red {
            background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjM6e3M6Mjoic3Qi/O3M6MDoiIjtzOjY6ImNv/bG91ciI7czoxOiJSIjtz/OjE6InMiO2Q6MC42MDg1/MTkyNjk3NzY4NzYzO31p/OjE7aToxNDt9/0cb83a2c50/Socket.png");
            &.support {
                background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJSIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IlMiO3M6/NjoiYWN0aXZlIjtiOjA7/fWk6MTtpOjE0O30,/9f30bbb879/Socket.png");
            }
            &.active {
                background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJSIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IlMiO3M6/NjoiYWN0aXZlIjtiOjE7/fWk6MTtpOjE0O30,/0b5178a2dc/Socket.png");
            }
        }
        &.green {
            background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjM6e3M6Mjoic3Qi/O3M6MDoiIjtzOjY6ImNv/bG91ciI7czoxOiJHIjtz/OjE6InMiO2Q6MC42MDg1/MTkyNjk3NzY4NzYzO31p/OjE7aToxNDt9/261a47a02c/Socket.png");
            &.support {
                background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJHIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IkQiO3M6/NjoiYWN0aXZlIjtiOjA7/fWk6MTtpOjE0O30,/906241230d/Socket.png");
            }
            &.active {
                background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJHIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IkQiO3M6/NjoiYWN0aXZlIjtiOjE7/fWk6MTtpOjE0O30,/5ff0116d1a/Socket.png");
            }
        }
        &.blue {
            background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjM6e3M6Mjoic3Qi/O3M6MDoiIjtzOjY6ImNv/bG91ciI7czoxOiJCIjtz/OjE6InMiO2Q6MC42MDg1/MTkyNjk3NzY4NzYzO31p/OjE7aToxNDt9/5b28808348/Socket.png");
            &.support {
                background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJCIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IkkiO3M6/NjoiYWN0aXZlIjtiOjA7/fWk6MTtpOjE0O30,/378725743d/Socket.png");
            }
            &.active {
                background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJCIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IkkiO3M6/NjoiYWN0aXZlIjtiOjE7/fWk6MTtpOjE0O30,/c6c6444909/Socket.png");
            }
        }
    }

    .sockets {
        position: absolute;
        left: 0;
        top: 0;
    }
</style>