<template lang="pug">
    .separator(:class="type")
</template>

<script>
    export default {
        name: "separator"
        , props: {type: String}
    }
</script>

<style lang="scss" scoped>
    @mixin separator($type) {
        background: url(https://web.poecdn.com/image/Art/2DArt/UIImages/InGame/ItemsSeparator#{$type}.png?scale=1&scaleIndex=0) no-repeat center;
    }

    .separator {
        height: 8px;
    }

    .magic {
        @include separator("Magic");
    }

    .rare {
        @include separator("Rare");
    }

    .unique {
        @include separator("Unique");
    }

    .gem {
        @include separator("Gem");
    }

    .currency {
        @include separator("Currency");
    }
</style>