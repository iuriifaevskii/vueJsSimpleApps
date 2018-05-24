<template>
    <div class="card cart-bg">
        <div @click="removeQuoteFromArrayFn(quote)" class="card-body">
            {{quote.quoteName}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            quote: Object,
            removeQuoteFromArrayFn: Function
        }
    }
</script>

<style>
    .cart-bg:hover  {
        background: #ff8c8c8f;
    }
</style>
