<template>
    <div class="flex-container">
        <div v-for='item in quotesArr' :key='item.id' class="col">
            <quote 
                :quote='item'
                :removeQuoteFromArrayFn='removeQuoteFromArrayFn'></quote>
        </div>
    </div>
</template>

<script>
    import Quote from './Quote.vue';
    export default {
        props: {
            quotesArr: Array,
            removeQuoteFromArrayFn: Function
        },
        components: {
            'quote': Quote
        }
    }
</script>

<style>
    .flex-container {
        display: 'flex';
    }
    .col{
        flex: 4 25%
    }
</style>
