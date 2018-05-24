<template>
  <div>
    <p>User Details {{myName}}</p>
    <p>{{switchName()}}</p>
    <button @click='resetName'>reset name</button>
{{userAge}}
    <button @click='resetFn("AA")'>reset name2</button>
  </div>
</template>

<script>
  import { eventBus } from '../../main';
  export default {
    props: {
      myName: {
        type: String,
        // required: true,
        // default: 'Max',
      },
      userAge: Number,
      resetFn: Function
    },
    methods: {
      switchName() {
        return this.myName.split("").reverse().join("");
      },
      resetName() {
        this.myName = 'Maxx';
        this.$emit('nameWasReset', this.myName);
      }
    },
    created() {
      eventBus.$on('ageWasEdited', (age) => {
        this.userAge = age;
      });
    }
  }
</script>

<style lang="scss">
</style>
