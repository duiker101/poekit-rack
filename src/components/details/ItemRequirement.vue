<template lang="pug">
    .requirement
        span Requires
        span(v-for="(r,i) in requirements" :key="r.name")
            span.what(v-if="r.displayMode == 0")
             |  {{r.name}}
            span.value
             |  {{r.values[0][0]}}
            span.what(v-if="r.displayMode == 1")
             |  {{r.name}}
            span.comma(v-if="i<requirements.length-1") ,
</template>

<script>
export default {
    name: 'item-requirement'
    , props: {requirements: Array}
    // , methods: {
    //     makeText(req) {
    //         if (req.displayMode === 0)
    //             return `${req.name} ${req.values[0][0]}`;
    //         return req.name;
    //     }
    // }
}
</script>

<style lang="scss" scoped>
    .requirement{
        width: max-content;
        margin:auto;
    }
    .value {
        color: white;
    }
</style>