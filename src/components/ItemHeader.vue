<template lang="pug">
    .header(:class="[type,subtitle.length > 0 ? '' : 'single']")
        .l
        .m {{name}}
            br(v-if="subtitle.length > 0")
            | {{subtitle}}
        .r
</template>

<script>
    export default {
        name: "item-header"
        , props: {name: String, subtitle: String, type: String}
    }
</script>

<style lang="scss" scoped>

    $asset_base_url: "https://web.poecdn.com/image/Art/2DArt/UIImages/InGame";
    @mixin asset($type,$position) {
        background-image: url(#{$asset_base_url}/ItemsHeader#{$type}#{$position}.png?scale=1);
    }

    @mixin header_bg($type) {
        .l {
            @include asset($type, 'Left');
        }
        .m {
            text-align: center;
            @include asset($type, 'Middle');
        }
        .r {
            @include asset($type, 'Right');
        }
    }

    @mixin double_line() {
        grid-template-columns: 43px auto 43px;
        height: 53px;
        line-height: 26.75px;
    }

    @mixin single_line() {
        grid-template-columns: 28px auto 28px;
        height: 33px;
        line-height: 33px;
    }

    .header {
        display: grid;

        @include single_line;
        @include header_bg("White");
        color: #c8c8c8;

        &.magic {
            @include header_bg("Magic");
            color: #8888ff;
        }
        &.rare {
            @include header_bg("Rare");
            @include double_line();
            &.single {
                @include header_bg("RareSingleLine");
                @include single_line();
            }
            color: #ffff77;
        }
        &.unique {
            @include header_bg("Unique");
            @include double_line();
            &.single {
                @include header_bg("UniqueSingleLine");
                @include single_line();
            }
            color: #af6025;
        }
        &.gem {
            @include header_bg("Gem");
            color: #1ba29b;
        }
        &.currency {
            @include header_bg("Currency");
            color: #aa9e82;
        }
    }
</style>