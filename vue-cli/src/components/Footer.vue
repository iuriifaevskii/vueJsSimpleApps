<template>
    <div>
        <h1>Footer</h1>
        <app-panel></app-panel>
    </div>
</template>

<script>
    import Panel from './common/Panel'
    export default {
        components: {
            'app-panel': Panel
        }
    }
</script>

<style lang="scss" scoped>
    h1 {
        color: blue;
    }
</style>

