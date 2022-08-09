<template>
  <div class="container">
    <section class="menu">
      <ul>
        <li><a href="#info">基本信息</a></li>
        <li><a href="#study">教育经历</a></li>
        <li><a href="#work">工作经历</a></li>
        <li><a href="#hobby">兴趣爱好</a></li>
      </ul>
    </section>
    <div class="detail">
      <div class="info clearfix">
        <a name="info"></a>
        <h3>基本信息</h3>
        <ul>
          <li>姓名</li>
          <li>性别</li>
          <li>国籍</li>
          <li>民族</li>
          <li>血型</li>
          <li>身高</li>
          <li>体重</li>
          <li>职业</li>
          <li>主要成就</li>
        </ul>
      </div>
      <div class="study clearfix">
        <a name="study"></a>
        <h3>教育经历</h3>
        <ul>
          <li>
            <span>毕业院校</span>
            <span>专业</span>
            <span>时间</span>
          </li>
          <li>
            <span>毕业院校</span>
            <span>专业</span>
            <span>时间</span>
          </li>
        </ul>
      </div>
      <div class="work">
        <a name="work"></a>
        <h3>工作经历</h3>
        <ul>
          <li>
            <span>名称</span>
            <span>职位</span>
            <span>时间</span>
            <p>简介</p>
          </li>
          <li>
            <span>名称</span>
            <span>职位</span>
            <span>时间</span>
            <p>简介</p>
          </li>
          <li>
            <span>名称</span>
            <span>职位</span>
            <span>时间</span>
            <p>简介</p>
          </li>
        </ul>
      </div>
      <div class="hobby">
        <a name="hobby"></a>
        <h3>兴趣爱好</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyInformation",
};
</script>

<style scoped>
.menu {
  position: fixed;
  left: 610px;
  width: 150px;
  background-color: pink;
  text-align: center;
}
.menu ul li {
  padding: 5px 0;
}
.menu a {
  display: block;
  width: 100%;
  color: #3a4145;
}
.detail {
  width: 100%;
  padding: 30px 0;
}
.detail .info ul {
  padding-top: 10px;
}
.detail .info ul li {
  width: 50%;
  float: left;
  padding: 5px;
}
.study,
.work {
  padding: 20px 0;
}
.study ul,
.work ul {
  padding-top: 10px;
}
.study ul li span,
.work ul li span {
  display: block;
  float: left;
  width: 33.3%;
  padding: 5px 5px;
}
.work p {
  padding: 10px 5px;
}
</style>
