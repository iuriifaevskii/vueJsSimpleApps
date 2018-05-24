<template>
  <div>
    <!-- <app-header></app-header>
    <app-server></app-server>
    <app-server-details></app-server-details>
    <hr>
    <app-footer></app-footer> -->
    
    <!-- <div v-highlight="'red'">Test</div> -->
    <!-- <div v-highlight:background="'red'">Test</div> -->
    <div v-highlight:background.delayed="'red'">Test</div>
    <div v-local-highlight:background.delayed.blink="{
      mainColor: 'red',
      secondColor: 'green',
      delay: 500
    }">Test</div>
  </div>
</template>

<script>
  // import Header from './components/Header.vue';
  // import Server from './components/Server.vue';
  // import ServerDetails from './components/ServerDetails.vue';
  // import Footer from './components/Footer.vue';

  export default {
    components: {
      // 'app-header': Header,
      // 'app-server': Server,
      // 'app-server-details': ServerDetails,
      // 'app-footer': Footer,
    },
    directives: {
      'local-highlight': {
        bind(el, binding, vnode) {
          let delay = 0;
          if (binding.modifiers['delayed']) {
            delay = 3000;
          }
          if (binding.modifiers['blink']) {
            let mainColor = binding.value.mainColor;
            let secondColor = binding.value.secondColor;
            let currentColor = mainColor;
            setTimeout(() => {
              setInterval(() => {
                currentColor === secondColor 
                  ? currentColor = mainColor 
                  : currentColor = secondColor;
                  if (binding.arg === 'background') {
                  el.style.backgroundColor = currentColor;
                } else {
                  el.style.color = currentColor;
                }
              }, binding.value.delay);
            }, delay);
          } else {
            setTimeout(() => {
              if (binding.arg === 'background') {
                el.style.backgroundColor = binding.value.mainColor;
              } else {
                el.style.color = binding.value.mainColor;
              }
            }, delay);
          }
        }
      }
    }
  }

</script>

<style lang="scss">
</style>
