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
        <img src="images/IMG_1868.jpg" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1869.jpg" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1870.jpg" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1871.jpg" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1872.jpg" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1873.jpg" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1874.jpg" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1876.jpg" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1859.jpg" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1877.jpg" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1878.jpg" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1879.jpg" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1880.jpg" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1881.jpg" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1883.jpg" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1884.jpg" width="100%" height="auto" />
      </div>
      <div class="item">
        <img src="images/IMG_1885.jpg" width="100%" height="auto" />
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
