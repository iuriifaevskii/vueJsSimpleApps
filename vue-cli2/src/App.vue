<template>
  <div class="container">
    <progress-bar
      :progressSize='quotesArray.length'></progress-bar>
    <add-quote 
      :addQuoteToArrayFn='addQuoteToArray'
      ></add-quote>
    <quotes-list
      :quotesArr='quotesArray'
      :removeQuoteFromArrayFn='removeQuoteFromArray'
      ></quotes-list>
    <info></info>
  </div>
</template>

<script>
  import AddQuote from './components/Quotes/AddQuote.vue';
  import Info from './components/Quotes/Info.vue';
  import ProgressBar from './components/Quotes/ProgressBar.vue';
  import QuotesList from './components/Quotes/QuotesList.vue';

  export default {
    components: {
      'add-quote': AddQuote,
      'info': Info,
      'progress-bar': ProgressBar,
      'quotes-list': QuotesList
    },
    data() {
      return {
        quotesArray: []
      }
    },
    methods: {
      addQuoteToArray(newQuote) {
        if (this.quotesArray.length < 10) {
          this.quotesArray.push({
            id: Date.now(),
            quoteName: newQuote
          });
        } else {
          alert('You can not add new values!');
        }
      },
      removeQuoteFromArray(element) {
        this.quotesArray = this.quotesArray.filter(el => el.id !== element.id);
      }
    }
  }
</script>

<style lang="scss">
</style>
