<template>
  <div class="container">
    <div class="liuyanban clearfix">
      <form>
        <span><input type="text" placeholder="昵称" /></span>
        <span><input type="text" placeholder="邮箱" /></span>
        <span><input type="text" placeholder="网址" /></span>
        <textarea name="liuyanban" autofocus></textarea>
        <button>提交</button>
      </form>
    </div>
    <div class="content">
      <div class="banner"><span>2</span>留言</div>
      <div class="liuyan">
        <div class="detailContent clearfix">
          <div><img src="@/assets/test.png" alt="" /></div>
          <span>
            <i>昵称</i>
            <i>2022-8-9</i>
          </span>
        </div>
        <div class="liuyanContent">啦啦啦啦啦啦啦~~</div>
        <a href="">回复</a>
      </div>
      <div class="liuyan">
        <div class="detailContent clearfix">
          <div><img src="@/assets/test.png" alt="" /></div>
          <span>
            <i>昵称</i>
            <i>2022-8-9</i>
          </span>
        </div>
        <div class="liuyanContent">我是卖报的小行家</div>
        <a href="">回复</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyMessage",
};
</script>

<style scoped>
.container {
  padding: 30px 20px;
}
.liuyanban {
  border: 1px solid #f0f0f0;
  padding: 10px 20px;
}
.liuyanban span {
  display: block;
  float: left;
  width: 33.3%;
  padding: 5px;
  border-bottom: 1px dashed #f0f0f0;
}
input[type="text"] {
  width: 80%;
  height: 100%;
}
textarea {
  width: 100%;
  height: 200px;
  padding: 10px 5px;
  font-size: 14px;
  color: #868686;
}
button {
  float: right;
  width: 60px;
  height: 30px;
  margin: 20px 0 0 0;
  font-size: 14px;
  line-height: 30px;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  color: #868686;
}
.content {
  padding: 30px 0;
  font-size: 14px;
  color: #868686;
}
.banner {
  font-size: 18px;
}
.banner span {
  font-weight: bold;
  margin-right: 5px;
}
.detailContent {
  padding: 20px 0;
}
.detailContent div {
  margin-right: 30px;
}
.detailContent span {
  display: block;
  float: left;
}
.detailContent span i {
  display: block;
  padding-left: 20px;
  height: 25px;
  line-height: 25px;
}
.detailContent img {
  width: 50px;
  height: 50px;
  float: left;
  border-radius: 50%;
}
.liuyanContent {
  padding-left: 70px;
}
.liuyan {
  position: relative;
}
.content a {
  position: absolute;
  right: 15px;
  top: 50px;
  color: red;
}
</style>
