<template>
  <div>
    <Login v-if="!user" />
    <div v-else>
      <h3 class="center">Welcome {{ user.username }}!</h3>
      <div class="center">
        <h2 >Welcome to weddings by laura, let us make your day yours!</h2>
        <img src="/images/IMG_1329.jpg" width="300px" height="500px">
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Login,
  },
  data() {
    return {
      comments: [],
    };
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
};
</script>

<style scoped>
.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
  justify-content: center;
  align-content: center;
}
.leftcol {
  width: 170px;
  height: auto;
  float: left;
  text-align: center;
  justify-content: center;
}
.center {
  justify-content: center;
  text-align: center;
  align-content: center;
}
</style>