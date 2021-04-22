<template>
  <div id="app">
    <div class="header">
      <h1>Weddings By Laura</h1>
      <div id="nav" v-if="$root.$data.user">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/gallery">Gallery</router-link> |
        <router-link to="/reviews">Reviews</router-link> |
        <a href="#" @click="logout">Log Out</a>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
    <br /><br />
    <footer class="page-footer" style="background-color: #facac7 !important">
      <div class="container">
        © 2021 Rutter Industries
        <a class="grey-text text-lighten-4 right" href="#!"
          ><i class="fab fa-github"></i
        ></a>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async created() {
    try {
      let response = await axios.get("/api/users");
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
        this.$router.push("/");
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  },
};
</script>


<style>
body {
  margin: 0px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  display: flex;
  justify-content: space-between;
  background: #facac7;
  padding: 10px 100px;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #ffc300;
}

.content {
  padding: 10px 100px;
}
.footer {
  justify-content: "center";
  align-content: center;
  text-align: center;
  background-color: #facac7;
}
</style>
