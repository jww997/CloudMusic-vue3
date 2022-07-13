<template>
  <div class="title">扫码登录</div>
  <div class="qr-code">
    <el-image class="left" :src="sweep" fit="contain"></el-image>
    <div class="right">
      <el-image class="code" :src="code"></el-image>
      <span class="text">
        使用
        <a class="app" target="_blank" href="https://music.163.com/#/download">
          网易云APP
        </a>
        扫码登录
      </span>
    </div>
  </div>
  <div class="more-login point" @click="$emit('toLoginPhone')">选择其他登录方式 &gt;</div>
</template>

<script>
import sweep from "@/assets/images/sweep.png";

export default {
  name: "QrCode",
  props: {
    code: { type: String, require: true },
  },
  setup() {
    return { sweep };
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 30px;
  margin-bottom: 50px;
}
.qr-code,
.left,
.right,
.right > .code {
  height: inherit;
}
.qr-code,
.right,
.right > .code {
  transition: 0.4s;
}
.qr-code {
  height: 400px;
  padding-left: 200px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  .left,
  .right {
    width: 200px;
  }
  .left {
    transition: $--transition-duration;
    position: absolute;
    left: 0;
  }
  .right {
    position: relative;
    padding-top: 280px;
    padding-left: 35px;
    box-sizing: border-box;
    text-align: left;
    .code {
      width: 150px;
      height: 150px;
      margin: auto;
      position: absolute;
      bottom: 150px;
      right: 0;
      left: 0;
    }
    .text > .app {
      color: $--color-primary;
    }
  }
  &:hover {
    padding: 0 100px;
    .left {
      left: 100px;
      opacity: 0;
    }
    .right {
      padding-left: 0;
      text-align: center;
      .code {
        transform: scale(1.8);
        transform-origin: 50% 80%;
      }
    }
  }
}
.more-login {
  margin-top: 20px;
  font-size: 20px;
}
</style>
