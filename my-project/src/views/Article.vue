<template>
  <div>
    <div class="detailbgc">
      <div class="detail">
        <h1>title</h1>
        <div class="info">
          <span><i class="iconfont">&#xe638;</i>发表时间</span>
          <span><i class="iconfont">&#xe633;</i>阅读</span>
          <span><i class="iconfont">&#xe6e2;</i>评论</span>
        </div>
      </div>
    </div>
    <div class="container">
      <p>
        文件传送协议 FTP 使用 TCP 进行连接，它需要两个连接来传送一个文件：
        控制连接：服务器打开端口号 21
        等待客户端的连接，客户端主动建立连接后，使用这个连接将客户端的命令传送给服务器，并传回服务器的应答。
        数据连接：用来传送一个文件数据。 根据数据连接是否是服务器端主动建立，FTP
        有主动和被动两种模式：
        主动模式：服务器端主动建立数据连接，其中服务器端的端口号为
        20，客户端的端口号随机，但是必须大于 1024，因为 0~1023 是熟知端口号。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyArticle",
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
.info span {
  margin-right: 20px;
  font-size: 16px;
  color: #dbd5d8;
}
.container p {
  padding: 40px 0;
}
</style>
