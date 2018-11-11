<template>
    <div>
        <HomeComponent/>
        <div class="list-container">
            <div class="people-list-block" v-for="result in results" :key="result.id">
                <span class="name-wrapper">{{ result.name }}</span>
                <div class="people-description">
                    <span>Gender:  <span class="desc-value">{{ result.gender }}</span></span>
                    <span>Height:  <span class="desc-value">{{ result.height }}</span></span>
                    <span>Mass:  <span class="desc-value">{{ result.mass }}</span></span>
                    <span>Eye Color:  <span class="desc-value">{{ result.eye_color }}</span></span>
                    <span>Hair Color:  <span class="desc-value">{{ result.hair_color }}</span></span>
                    <router-link :to="'/people/:id'">
                        <a href="'/people/:id'">WHHAAAAT?</a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import HomeComponent from './HomeComponent';

  export default {
    name: 'PeopleComponent',
    components: {
      HomeComponent
    },
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
    .list-container {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .people-list-block {
        margin: 20px;
        padding: 15px;
        width: 250px;
        background: aliceblue;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19) !important;
    }

    .name-wrapper {
        font-weight: bold;
        font-size: 1.5em;
    }

    .people-description {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    span {
        font-weight: bold;
    }

    .desc-value {
        font-weight: normal;
    }
</style>
