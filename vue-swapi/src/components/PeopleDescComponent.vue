<template>
    <div>
        <HomeComponent/>
        <div class="desc-people" v-for="result in results" :key="result.id">
            <span>{{ result.name }}</span>
        </div>
    </div>
</template>

<script>
  import HomeComponent from './HomeComponent';

  export default {
    name: 'PeopleDescComponent',
    date() {
      return {
        results: {}
      }
    },
    created() {
      this.peopleDescription();
    },
    components: {
      HomeComponent
    },
    methods: {
      peopleDescription() {
        fetch('https://swapi.co/api/people/:id/').then((response) => {
          console.log('response =>', response)
          return response.json();
        }).then((j) => {
          this.results = j.results
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
