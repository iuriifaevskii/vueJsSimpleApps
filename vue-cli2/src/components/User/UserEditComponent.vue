<template>
  <div>
    User Edit {{userAge}}
    <button @click='editAge'>Edit Age</button>
  </div>
</template>

<script>
  import { eventBus } from '../../main';
  export default {
    props: {
      userAge: Number
    },
    methods: {
      editAge() {
        this.userAge = 30;
//        this.$emit('ageWasEdited', this.userAge)
  //        eventBus.$emit('ageWasEdited', this.userAge)
        eventBus.changeAge(this.userAge)
      }
    }
  }
</script>

<style lang="scss">
</style>
