<template>
  <div id="app">
    <HomeHeader></HomeHeader>
    <DetailHeader></DetailHeader>
    <router-view></router-view>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader";
import DetailHeader from "@/components/DetailHeader";
import MyFooter from "@/components/Footer";

export default {
  name: "App",
  components: {
    HomeHeader,
    DetailHeader,
    MyFooter,
  },
};
</script>

<style></style>
