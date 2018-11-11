<template>
    <h1>HELLO WORLD</h1>
</template>

<script>
  export default {
    name: 'PeopleComponent',
    data() {
      return {
        results: {},
      };
    },
    created() {
      this.fetchPeoples();
    },
    methods: {
      fetchPeoples() {
        fetch('https://swapi.co/api/people/').then((response) => {
          return response.json();
        }).then((j) => {
          this.results = j.results;
        });
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
