<template>
  <div class="bgc" v-show="$route.meta.showbgc">
    <div class="title">
      <h3>My Blog</h3>
      <p>春风十里扬州路，卷上珠帘总不知</p>
      <p>《赠别二首》 - 唐代 - 杜牧</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style scoped>
.bgc {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1297px;
  background: url("@/assets/桌面.jpeg") no-repeat;
  text-align: center;
  color: #fff;
}
.title h3 {
  padding: 10px;
}
.title p:nth-child(2) {
  font-size: 20px;
}
.title p:nth-child(3) {
  font-size: 14px;
}
</style>
