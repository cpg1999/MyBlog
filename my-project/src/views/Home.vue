<template>
  <div class="container">
    <ul>
      <li>
        <h2>title</h2>
        <div class="abstract">
          摘要：。。。
          <a href="">阅读全文</a>
        </div>
        <div class="info">
          <span><i class="iconfont">&#xe638;</i>发表时间</span>
          <span><i class="iconfont">&#xe633;</i>阅读</span>
          <span><i class="iconfont">&#xe6e2;</i>评论</span>
        </div>
      </li>
      <li>
        <h2>title</h2>
        <div class="abstract">
          摘要：。。。
          <a href="">阅读全文</a>
        </div>
        <div class="info">
          <span><i class="iconfont">&#xe638;</i>发表时间</span>
          <span><i class="iconfont">&#xe633;</i>阅读</span>
          <span><i class="iconfont">&#xe6e2;</i>评论</span>
        </div>
      </li>
    </ul>
    <div class="echart" ref="echart"></div>
  </div>
</template>

<script>
export default {
  name: "MyHome",
  data() {
    return {
      isshow: false,
      option: {},
      datas: [],
    };
  },
  methods: {
    async getData() {
      let result = await this.$API.reqGetData();
      if (result.code == 1) {
        this.option = result.data.option;
        this.datas = result.data.dt;
      }
      this.initChart();
    },
    initChart() {
      let MyChart = this.$echarts.init(this.$refs.echart);
      console.log(this.datas);
      MyChart.setOption({
        title: this.option.title,
        xAxis: {
          type: "category",
          axisLabel: {
            interval: 0,
            rotate: 45,
          },
        },
        yAxis: {},
        series: [
          {
            type: "bar",
          },
        ],
        dataset: {
          source: this.datas,
        },
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
@font-face {
  font-family: "iconfont";
  src: url("../../fonts/iconfont.ttf?t=1660029092881") format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  margin-right: 10px;
  font-size: 14px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container ul li {
  padding: 30px 0;
  border-bottom: 1px solid #ccc;
}
.abstract {
  padding: 20px 0;
  font-family: "楷体";
  font-size: 16px;
}
.abstract a {
  color: #9eabb3;
  font-family: "";
}
.info span {
  margin-right: 20px;
  font-size: 14px;
  color: #9eabb3;
}
.echart {
  width: 100%;
  height: 500px;
  background-color: pink;
}
</style>
