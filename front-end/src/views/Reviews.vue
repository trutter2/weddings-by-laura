<template>
  <div>
    <h1>Enter A Review</h1>
    <form @submit.prevent="upload">
      <textarea style="width: 350px" v-model="review"></textarea>
      <br />
      <button type="submit">Submit</button>
    </form>
    <hr />
    <div v-for="r in reviews" :key="r.id">
      <h3>{{ r.review }}</h3>
      <p class="text" v-if="r.user">
        -{{ r.user.firstName }} {{ r.user.lastName }}
      </p>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Review",
  data() {
    return {
      review: "",
      reviews: [],
    };
  },
  created() {
    if (!this.$root.$data.user) {
      this.$router.push("/");
    }
    this.getReviews();
  },
  methods: {
    async upload() {
      try {
        await axios.post("/api/reviews", {
          review: this.review,
        });
        this.getReviews();
        this.review = "";
      } catch (error) {
        console.log(error);
      }
    },
    async getReviews() {
      try {
        let reviews = await axios.get("/api/reviews");
        console.log(reviews);
        this.reviews = reviews.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.text {
  color: "gray";
}
</style>
