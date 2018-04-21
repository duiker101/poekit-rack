<template lang="pug">
    .property
        div(v-if="mode===0")
            span {{name}}
            span(v-if="hasValue") :
            span.value(v-if="hasValue" :class="values[0][1] === 1? 'augmented':''")
             |  {{values[0][0]}}
        div(v-if="mode===3")
            span(v-html="replaced")
</template>

<script>
    // TODO display modes:
    // 0 == X: Y
    // 1 == Y X, Y1 X1, Y2 X2
    // 2 == ???
    // 3 == replace %0 %1...
    export default {
        name: "item-property",
        props: {name: String, values: Array, mode: Number}
        , computed: {
            hasValue: function () {
                if (this.values == null)
                    return false;
                return this.values.length > 0;
            }
            ,replaced:function () {
                let htmls = [];
                for(let value in this.values){
                    let cls = this.values[value][1] === 1 ? 'augmented':'';
                    htmls.push(`<span class='value ${cls}'>${this.values[value][0]}</span>`)
                }
                let i = 0;
                let result = `<div>${this.name}</div>`;
                while(result.indexOf(`%${i}`) >= 0){
                    result = result.replace(`%${i}`,htmls[i]);
                    i++;
                }
                return result;
            }
        }
    }
</script>

<style lang="scss">
    .property {
        width:max-content;
        margin:auto;
    }

    .value {
        color: white;
    }

    .augmented {
        color: #8888FF;
    }
</style>