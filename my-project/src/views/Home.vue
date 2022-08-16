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
    <div class="echart2" ref="echart2"></div>
  </div>
</template>

<script>
import province from "@/json/data.json";
export default {
  name: "MyHome",
  data() {
    return {
      show1: true,
      show2: false,
      option1: {},
      datas1: [],
      option2: {},
      datas2: [],
    };
  },
  methods: {
    async getEchart1() {
      let result = await this.$API.reqGetEchart1();
      if (result.code == 1) {
        this.option1 = result.data.option;
        this.datas1 = result.data.dt;
      }
      this.initChart1();
    },
    initChart1() {
      this.$echarts.registerMap("china", province);
      let MyChart = this.$echarts.init(this.$refs.echart);
      let localOptions1 = {
        title: "123",
        geo: {
          type: "map",
          map: "china", //chinaMap需要和registerMap中的第一个参数保持一致
          emphasis: {
            label: {
              show: true, //展示标签
              formatter: function (params) {
                // console.log(params)
                return params.name;
              },
            },
          },
          zoom: 1.2, //设置初始化的缩放比例
        },
        series: [
          {
            data: this.datas1,
            geoIndex: 0,
            type: "map",
          },
        ],
        tooltip: {
          formatter: function (params) {
            return params.data.name + ":" + params.data.value;
          },
        },
        visualMap: {
          pieces: [
            { min: 9001 }, // 不指定 max，表示 max 为无限大（Infinity）。
            { min: 7001, max: 9000 },
            { min: 5001, max: 7000 },
            { min: 3001, max: 5000 },
            { min: 1001, max: 3000 },
            { max: 1000 }, // 不指定 min，表示 min 为无限大（-Infinity）。
          ],
          textStyle: {
            color: "#fff",
          },
        },
      };
      let finalOption1 = { ...localOptions1, ...this.option1 };
      MyChart.setOption(finalOption1);
    },
    async getEchart2() {
      let result = await this.$API.reqGetEchart2();
      console.log(result);
      if (result.code == 1) {
        this.option2 = result.data.option;
        this.datas2 = result.data.dt;
      }
      this.initChart2();
    },
    initChart2() {
      this.$echarts.registerMap("china2", province);
      let MyChart2 = this.$echarts.init(this.$refs.echart2);
      let localOptions2 = {
        title: {
          show: true,
          text: "全国飞信信息",
          subtext: "2022",
          textStyle: {
            color: "#fff",
          },
          left: "center",
        },
        geo: {
          type: "map",
          map: "china2",
          zoom: 1.2,
          emphasis: {
            label: {
              show: true,
              formatter: function (params) {
                return params.name;
              },
            },
          },
        },
        tooltip: {
          show: true,
          formatter: function (params) {
            return params.data.name + ":" + params.data.value;
          },
        },
        visualMap: {
          type: "continuous",
          min: 4000000,
          max: 10000000,
          hoverlink: true,
          inRange: {
            color: ["white", "red"],
          },
          textStyle: {
            color: "#fff",
          },
        },
        series: [
          {
            type: "map",
            geoIndex: 0,
            data: this.datas2,
          },
        ],
      };
      let finalOption2 = { ...localOptions2, ...this.option2 };
      MyChart2.setOption(finalOption2);
    },
  },
  mounted() {
    this.getEchart1();
    this.getEchart2();
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
.echart2 {
  width: 100%;
  height: 500px;
  background-color: pink;
}
</style>
