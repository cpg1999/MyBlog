<template>
  <div class="container">
    <button>上传图片</button>
    <button>创建相册</button>
    <div class="xiangce clearfix">
      <ul>
        <li>
          <a href=""><img src="@/assets/test.png" alt="" /></a>
          <span>相册</span>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPhoto",
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped>
.container {
  padding: 30px 20px;
}
button {
  margin-right: 10px;
  width: 100px;
  height: 40px;
}

.xiangce ul li {
  float: left;
  width: 23%;
  height: 300px;
  padding-top: 7px;
  margin: 20px 25px 0 0;
  border: 1px solid #f0f0f0;
  box-shadow: 0 5px 10px #ccc;
  text-align: center;
}
.xiangce ul li:nth-child(4n) {
  margin: 20px 0 0;
}
.xiangce ul li span {
  display: block;
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
  text-align: left;
}
.xiangce ul li img {
  width: 90%;
  height: 250px;
  text-align: center;
}
</style>
