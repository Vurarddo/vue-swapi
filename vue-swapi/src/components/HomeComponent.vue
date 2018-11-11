<template>
    <header>
        <div class="home-link-wrapper">
            <router-link :to="'/'">
                <a :href="'/'" class="home-link links-wrapper">Home</a>
            </router-link>
        </div>
        <img class="logo-img" alt="Vue logo" src="../assets/logo.png">
        <div class="links-block">
            <router-link :to="'/people'">
                <a :href="'/people'" class="people-link links-wrapper">People</a>
            </router-link>
            <router-link :to="'/films'">
                <a :href="'/films'" class="films-link links-wrapper">Films</a>
            </router-link>
        </div>
    </header>
</template>

<script>

  export default {
    name: 'HomeComponent',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 50px;
        background: #7ca58f;
        height: 60px;
        box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19) !important;
    }

    .logo-img {
        height: 55px;
        width: 55px;
    }

    .links-wrapper {
        background-color: #354a5d;
        border: none;
        border-radius: 5px;
        color: #22b684;
        padding: 10px 32px;
        text-align: center;
        -webkit-transition-duration: 0.4s;
        transition-duration: 0.4s;
        margin: 4px;
        text-decoration: none;
        font-size: 16px;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
</style>
