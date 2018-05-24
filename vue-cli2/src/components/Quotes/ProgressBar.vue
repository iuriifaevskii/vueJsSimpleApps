<template>
    <div>
        <h4>Quotes Added</h4>
        <div class="progress">
            <div class="progress-bar"
                role="progressbar"
                v-bind:style="{ width: progressSize * 10 + '%' }"
                aria-valuemin="0"
                aria-valuemax="10">{{progressSize}} / 10</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            progressSize: Number
        }
    }
</script>

<style>

</style>
