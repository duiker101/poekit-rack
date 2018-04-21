<template lang="pug">
    .sockets
        .gems
            .gem.red
            .gem.red.socketed.support
            .gem.red.socketed.active
            .gem.green
            .gem.green.socketed.support
            .gem.green.socketed.active
            .gem.blue
            .gem.blue.socketed.support
            .gem.blue.socketed.active
        .links
</template>

<script>
    export default {
        name: "item-sockets"
        , props: {sockets: Array, gems: Array}
    }
</script>

<style lang="scss" scoped>
    .gems {
        display: inline-grid;
        grid-template-columns: 47px 47px;
    }

    .gem {
        width: 47px;
        height: 47px;
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
        top: 10px;
    }
</style>