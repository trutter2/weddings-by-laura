<template>
  <div class="about">
    <br />
    <div class="masonry">
      <div class="item">
        <img src="images/IMG_1329.jpg" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1860.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1861.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1862.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1863.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1864.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1865.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1866.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1867.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1868.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1869.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1870.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1871.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1872.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1873.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1874.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1876.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1859.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1877.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1878.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1879.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1880.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1881.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1883.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1884.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1885.JPG" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_6012.jpg" width="100%" height="auto" />
      </div>
    </div>
    <br />
    <br />
    <div v-if="$root.$data.user.username == 'a'">this is user a</div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {};
  },
};
</script>

<style scoped>
.masonry {
  /* Masonry container */
  column-count: 3;
  column-gap: 1em;
}

.item {
  /* Masonry bricks or child elements */
  background-color: #eee;
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
}
</style>
