<template>
  <div class="detailbgc" v-show="$route.meta.showDetailbgc">
    <div class="detail">
      <h1>{{ $route.meta.name }}</h1>
      <p>名人名言</p>
      <p>mingrenmingyan</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
};
</script>

<style scoped>
.detailbgc {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 520px;
  background-color: green;
  text-align: center;
  color: #fff;
}
.detail h1 {
  padding: 10px;
}
.detail p:nth-child(2) {
  font-size: 20px;
}
.detail p:nth-child(3) {
  font-size: 14px;
}
</style>
