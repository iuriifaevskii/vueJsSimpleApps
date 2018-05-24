<template>
  <div class='flex-container'>
    <div class='col'>
      <p style='font-size:20'>{{name}}</p>
      <user-details 
        :myName="name" 
        @nameWasReset='name = $event'
        :resetFn = 'resetName'
        :userAge='age'
      ></user-details>
      <button @click="changeName()">Change name</button>
    </div>
    <div class='col'>
      <user-edit 
        :userAge='age'
        @ageWasEdited='age = $event'></user-edit>
    </div>
   age is {{age}}
  </div>
</template>

<script>
  import UserDetails from './UserDetailsComponent.vue';
  import UserEdit from './UserEditComponent.vue'
  export default {
    data() {
      return {
        name: 'Yurii',
        age: 22
      }
    },
    methods: {
      changeName() {
        this.name = 'Anna'
      },
      resetName(param) {
        this.name = 'Stas' + param
      }
    },
    components: {
      'user-details': UserDetails,
      'user-edit': UserEdit
    }
  }
</script>

<style lang="scss">
  .flex-container {
    display: flex;
    flex-direction: row;
    background-color: DodgerBlue;
    align-items: 'center';
    align-content: 'center';
    padding: 5px
  }
  .col {
    flex: 1 50%;
    background-color: #f1f1f1;
    align-items: 'center';
    align-content: 'center';
  }
</style>
