<template>
    <form class="formStyle">
        <div class="form-group">
            <label for="area">Quote</label>
            <textarea v-model="addMessage" class="form-control" id="area" rows="3"></textarea>
        </div>
        <button 
            @click.prevent="addQuoteToArrayFn(addMessage)" type="submit" class="btn btn-primary mb-2">Add Quote</button>
    </form>
</template>

<script>
    export default {
        props: {
            addQuoteToArrayFn: Function
        },
        data() {
            return {
                addMessage: '',
            }
        }
    }
</script>

<style>
    .formStyle{
        width: 70%;
        text-align: center;
        margin: 0 auto;
    }
</style>
