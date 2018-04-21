<template lang="pug">
    .sockets(:class="['w'+w,'h'+h,'s'+count]")
        .gems
            .gem(v-for="(s,i) in sockets" :key="i" :class="getClasses(s,i)")
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
        ,methods:{
            getClasses:function(s,i){
                let colour=s.sColour;
                let attr='';
                let socketed='';
                let gemType='';

                let colors={'I':'B','S':'R','D':'G'};
                for(let g in this.gems){
                    let gem = this.gems[g];
                    if(gem.socket === i){
                        attr= colors[gem.colour];
                        socketed='socketed';
                        gemType=gem.support?'supportgem':'activegem';
                        break;
                    }
                }
                return [colour,attr,socketed,gemType];
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
        &.W{
            background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjM6e3M6Mjoic3Qi/O3M6MDoiIjtzOjY6ImNv/bG91ciI7czoxOiJXIjtz/OjE6InMiO2Q6MC42MDg1/MTkyNjk3NzY4NzYzO31p/OjE7aToxNDt9/55a80d740a/Socket.png");
            &.R{
                &.supportgem {
                    background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJXIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IlMiO3M6/NjoiYWN0aXZlIjtiOjA7/fWk6MTtpOjE0O30,/eb21d38d1e/Socket.png");
                }
                &.activegem {
                    background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJXIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IlMiO3M6/NjoiYWN0aXZlIjtiOjE7/fWk6MTtpOjE0O30,/8d583b9132/Socket.png");
                }
            }
            &.G{
                &.supportgem {
                    background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJXIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IkQiO3M6/NjoiYWN0aXZlIjtiOjA7/fWk6MTtpOjE0O30,/edfcd5b5cd/Socket.png");
                }
                &.activegem {
                    background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJXIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IkQiO3M6/NjoiYWN0aXZlIjtiOjE7/fWk6MTtpOjE0O30,/e1d16291b3/Socket.png");
                }
            }
            &.B{
                &.supportgem {
                    background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJXIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IkkiO3M6/NjoiYWN0aXZlIjtiOjA7/fWk6MTtpOjE0O30,/336ee48e86/Socket.png");
                }
                &.activegem {
                    background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJXIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IkkiO3M6/NjoiYWN0aXZlIjtiOjE7/fWk6MTtpOjE0O30,/c23b98fb28/Socket.png");
                }
            }
        }
        &.R {
            background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjM6e3M6Mjoic3Qi/O3M6MDoiIjtzOjY6ImNv/bG91ciI7czoxOiJSIjtz/OjE6InMiO2Q6MC42MDg1/MTkyNjk3NzY4NzYzO31p/OjE7aToxNDt9/0cb83a2c50/Socket.png");
            &.supportgem {
                background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJSIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IlMiO3M6/NjoiYWN0aXZlIjtiOjA7/fWk6MTtpOjE0O30,/9f30bbb879/Socket.png");
            }
            &.activegem {
                background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJSIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IlMiO3M6/NjoiYWN0aXZlIjtiOjE7/fWk6MTtpOjE0O30,/0b5178a2dc/Socket.png");
            }
        }
        &.G {
            background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjM6e3M6Mjoic3Qi/O3M6MDoiIjtzOjY6ImNv/bG91ciI7czoxOiJHIjtz/OjE6InMiO2Q6MC42MDg1/MTkyNjk3NzY4NzYzO31p/OjE7aToxNDt9/261a47a02c/Socket.png");
            &.supportgem {
                background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJHIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IkQiO3M6/NjoiYWN0aXZlIjtiOjA7/fWk6MTtpOjE0O30,/906241230d/Socket.png");
            }
            &.activegem {
                background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJHIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IkQiO3M6/NjoiYWN0aXZlIjtiOjE7/fWk6MTtpOjE0O30,/5ff0116d1a/Socket.png");
            }
        }
        &.B {
            background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjM6e3M6Mjoic3Qi/O3M6MDoiIjtzOjY6ImNv/bG91ciI7czoxOiJCIjtz/OjE6InMiO2Q6MC42MDg1/MTkyNjk3NzY4NzYzO31p/OjE7aToxNDt9/5b28808348/Socket.png");
            &.supportgem {
                background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJCIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IkkiO3M6/NjoiYWN0aXZlIjtiOjA7/fWk6MTtpOjE0O30,/378725743d/Socket.png");
            }
            &.activegem {
                background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJCIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IkkiO3M6/NjoiYWN0aXZlIjtiOjE7/fWk6MTtpOjE0O30,/c6c6444909/Socket.png");
            }
        }
        &.A {
            background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjM6e3M6Mjoic3Qi/O3M6MDoiIjtzOjY6ImNv/bG91ciI7czoxOiJBIjtz/OjE6InMiO2Q6MC42MDg1/MTkyNjk3NzY4NzYzO31p/OjE7aToxNDt9/f636423ef0/Socket.png");
            &.socketed {
                background-image: url("//web.poecdn.com/gen/image/YTozOntpOjA7aTo1O2k6/MjthOjU6e3M6Mjoic3Qi/O3M6Njoic3ByaXRlIjtz/OjY6ImNvbG91ciI7czox/OiJBIjtzOjE6InMiO2Q6/MC42MDg1MTkyNjk3NzY4/NzYzO3M6OToiZ2VtQ29s/b3VyIjtzOjE6IkEiO3M6/NjoiYWN0aXZlIjtiOjE7/fWk6MTtpOjE0O30,/142b734bcd/Socket.png");
            }
        }
    }

    .sockets {
        position: absolute;
        /*left: 0;*/
        top: 0;
    }
</style>