<template lang="pug">
    .rack-item
        item-header(:name="name" :subtitle="subtitle" :type="type")
        .content aa
</template>

<script>
    import ItemHeader from './ItemHeader'

    export default {
        name: 'rack-item',
        props: {item: Object}
        , components: {ItemHeader}
        , computed: {
            name: function () {
                let name = this.item.name;
                if (name.length === 0 && this.item.typeLine.length > 0)
                    name = this.item.typeLine;

                return name.replace(/(<<[A-Za-z:]+>>)/g, '')
            }
            ,subtitle:function(){
                if (this.item.name.length > 0)
                    return this.item.typeLine;
                return "";
            }
            , type: function () {
                let types = ['white', 'magic', 'rare', 'unique', 'gem','currency'];
                return types[this.item.frameType];
            }
        }
    }
</script>

<style lang="scss" scoped>
    @font-face {
        font-family: 'FontinSmallCaps';
        src: local("☺"), url('../fonts/fontin-smallcaps-webfont.woff') format("woff");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'FontinRegular';
        src: local("☺"), url('../fonts/fontin-regular-webfont.woff') format("woff");
        font-weight: normal;
        font-style: normal;
    }

    .rack-item {
        font-family: 'FontinSmallCaps', Verdana, Arial, Helvetica, sans-serif;
        background: rgba(0, 0, 0, 0.8);
        width: fit-content;
        font-size: 19px;
    }

    .content {
        padding: 0.4em 0em 0.5em 0em;
    }
</style>