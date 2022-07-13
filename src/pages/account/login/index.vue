<template>
  <div class="login">
    <!-- 邮箱 && 手机号码 && 二维码 -->
    <qr-code
      :code="qrCode.image"
      @toLoginPhone="loginType = 1"
      v-if="loginType == 3"
    />
    <input-from
      :type="loginType"
      :title="
        loginType == 0 ? `邮箱登录` : loginType == 1 ? `手机号登录` : `短信登录`
      "
      :isSendCaptcha="isSendCaptcha"
      @submitForm="
        (v) => (loginType == 0 ? postLoginEmail(v) : postLoginPhone(v))
      "
      @toLoginEmail="loginType = 0"
      @toLoginPhone="loginType = 1"
      @toLoginCaptcha="loginType = 2"
      @sendCaptcha="postCaptchaSend"
      @verifyCaptcha="postCaptchaVerify"
      v-else
    />
    <!-- 二维码入口 -->
    <el-image
      class="code-enter point"
      :src="codeEnter"
      @click="loginType = 3"
    ></el-image>

    <!-- <div @click="loginType =3">微信登录</div>
      <div @click="loginType =4">QQ登录</div>
      <div @click="loginType =5">微博登录</div> -->
  </div>
</template>

<script>
import { ref, reactive, inject, watch, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
import InputFrom from "./inputFrom";
import QrCode from "./qrCode";
import codeEnter from "@/assets/images/code-enter.png";

export default {
  name: "Login",
  components: { InputFrom, QrCode },
  setup() {
    const {
      http,
      POST_LOGIN,
      POST_LOGIN_CELLPHONE,
      POST_LOGIN_QR_KEY,
      POST_LOGIN_QR_CREATE,
      POST_LOGIN_QR_CHECK,
      POST_LOGIN_STATEUS,
      POST_CAPTCHA_SEND,
      POST_CAPTCHA_VERIFY,
    } = inject("apis");
    const loginType = ref(1); // 0邮箱 1手机 2短信 3二维码 4微信 5扣扣 6微博
    const qrCode = reactive({
      image: "",
      key: "",
    }); // 二维码
    const checkTimer = ref(null);
    const isSendCaptcha = ref(false); // 是否发送验证码

    // vue-router
    const router = useRouter();
    // vuex
    const { commit } = useStore();
    const setUserInfo = (userInfo) => commit("SET_USERINFO", userInfo);

    watch(loginType, (val) => {
      clearInterval(checkTimer.value);
      !qrCode.key && val === 3 && postLoginQr();
    });

    onUnmounted(() => {
      clearInterval(checkTimer.value);
    });

    // 邮箱登录
    async function postLoginEmail({ email, password }) {
      const { cookie } = await http(
        POST_LOGIN,
        { email, md5_password: encodeURIComponent(password) },
        {},
        "POST"
      );
      loginSuccess(cookie);
    }

    // 手机号登录
    async function postLoginPhone({ phone, password, captcha }) {
      const { cookie } = await http(
        POST_LOGIN_CELLPHONE,
        password
          ? { phone, md5_password: encodeURIComponent(password) }
          : { phone, captcha },
        {},
        "POST"
      );
      loginSuccess(cookie);
    }

    // 二维码登录
    async function postLoginQr() {
      const {
        data: { unikey },
      } = await http(POST_LOGIN_QR_KEY, {}, {}, "POST");
      const {
        data: { qrimg },
      } = await http(
        POST_LOGIN_QR_CREATE,
        { key: unikey, qrimg: 1 },
        {},
        "POST"
      );
      qrCode.key = unikey;
      qrCode.image = qrimg;

      checkTimer.value = setInterval(() => {
        postLoginQrCheck();
      }, 1000);
    }

    // 二维码检测 800为二维码过期,801为等待扫码,802为待确认,803为授权登录成功(803状态码下会返回cookies)
    async function postLoginQrCheck() {
      const { code, cookie, message } = await http(
        POST_LOGIN_QR_CHECK,
        { key: qrCode.key },
        {},
        "POST"
      );
      ElMessage({
        message,
        type:
          code == 803
            ? "success"
            : code == 801 || code == 802
            ? "warning"
            : "error",
      });
      if (code == 803) {
        clearInterval(checkTimer.value);
        loginSuccess(cookie);
      }
    }

    // 登录成功回调
    function loginSuccess(cookie) {
      localStorage.setItem("__wwPlayer__cookie", cookie);
      document.cookie = cookie;
      postLoginStatus();
      setTimeout(() => {
        router.replace({ name: "Recommend" });
      }, 500);
    }

    // 登录状态
    async function postLoginStatus() {
      const {
        data: { code, profile },
      } = await http(POST_LOGIN_STATEUS);
      localStorage.setItem("__wwPlayer__userInfo", JSON.stringify(profile));
      setUserInfo(profile);
      code == 200 && ElMessage.success("登录成功");
    }

    // 发送验证码
    async function postCaptchaSend({ phone }) {
      const { data, message } = await http(POST_CAPTCHA_SEND, { phone });
      if (data) {
        ElMessage.success("发送成功");
        isSendCaptcha.value = true;
      } else {
        ElMessage.error(message);
      }
    }

    // 验证验证码
    async function postCaptchaVerify({ phone, captcha }) {
      const data = await http(POST_CAPTCHA_VERIFY, { phone, captcha });
      data && postLoginPhone({ phone, captcha });
    }

    return {
      loginType,
      codeEnter,
      qrCode,
      isSendCaptcha,
      postLoginEmail,
      postLoginPhone,
      postCaptchaSend,
      postCaptchaVerify,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  padding-top: 100px;
  box-sizing: border-box;
  overflow: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .code-enter {
    width: 100px;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
