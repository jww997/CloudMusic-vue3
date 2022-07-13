<template>
  <div class="title">{{ title }}</div>
  <el-form
    class="form"
    ref="loginRef"
    :model="loginForm"
    :rules="rules"
    status-icon
  >
    <el-form-item prop="email" v-if="type == 0">
      <template v-slot:label>
        <i class="icon el-icon-message"></i>
      </template>
      <el-input
        v-model="loginForm.email"
        placeholder="请输入网易邮箱"
      ></el-input>
    </el-form-item>
    <el-form-item prop="phone" v-else-if="type == 1 || type == 2">
      <template v-slot:label>
        <i class="icon el-icon-mobile-phone"></i>
      </template>
      <el-input
        v-model="loginForm.phone"
        placeholder="请输入手机号码"
      ></el-input>
    </el-form-item>
    <el-form-item prop="captcha" v-if="type == 2">
      <template v-slot:label>
        <i class="icon el-icon-paperclip"></i>
      </template>
      <el-input
        v-model="loginForm.captcha"
        placeholder="请输入验证码"
      ></el-input>
    </el-form-item>
    <template v-else>
      <el-form-item prop="password">
        <template v-slot:label>
          <i class="icon el-icon-lock"></i>
        </template>
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="checkPassword">
        <template v-slot:label>
          <i class="icon el-icon-lock"></i>
        </template>
        <el-input
          type="password"
          v-model="loginForm.checkPassword"
          autocomplete="off"
          placeholder="请再次确认密码"
        ></el-input>
      </el-form-item>
    </template>
    <el-form-item>
      <el-button
        class="btn"
        type="primary"
        @click="$emit('sendCaptcha', { phone: loginForm.phone })"
        v-if="type == 2 && !isSendCaptcha"
      >
        发送验证码
      </el-button>
      <el-button class="btn" type="primary" @click="submitForm" v-else>
        登录
      </el-button>
    </el-form-item>
  </el-form>
  <div
    class="more-login point"
    @click="$emit('toLoginPhone')"
    v-if="type == 0 || type == 2"
  >
    返回其他登录方式 &gt;
  </div>
  <div class="other-login" v-else>
    <div class="more-login point" @click="$emit('toLoginEmail')">
      邮箱登录
    </div>
    <div class="more-login point" @click="$emit('toLoginCaptcha')">
      短信登录
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch, onMounted } from "vue";

export default {
  name: "LoginPhone",
  props: {
    title: { type: String, require: true },
    type: { type: Number || String, require: true }, // 0邮箱 1手机号
    isSendCaptcha: { type: Boolean, require: true }, // 是否发送验证码
  },
  setup(props, { emit }) {
    const loginRef = ref(null);
    const loginForm = reactive({
      phone: "",
      email: "",
      password: "",
      checkPassword: "",
      captcha: "",
    });
    const checkPhone = (rule, value, callback) => {
      if (!value) return callback(new Error("手机号码不能为空"));
      if (!/^1[34578]\d{9}$/.test(value))
        return callback(new Error("手机号码有误，请重新输入"));
      callback();
    };
    const checkEmail = (rule, value, callback) => {
      if (!value) return callback(new Error("邮箱不能为空"));
      if (!/^[A-Za-z]\w{5,17}@(163\.com|126\.com|yeach\.net)$/.test(value))
        return callback(new Error("邮箱有误，请重新输入"));
      callback();
    };
    const validatePassword = (rule, value, callback) => {
      if (!value) return callback(new Error("密码不能为空"));
      if (loginForm.checkPassword !== "")
        loginRef.value.validateField("checkPassword");
      callback();
    };
    const validatePassword2 = (rule, value, callback) => {
      if (!value) return callback(new Error("密码确认不能为空"));
      if (value !== loginForm.password)
        return callback(new Error("两次输入密码不一致!"));
      callback();
    };
    const validateCaptcha = (rule, value, callback) => {
      if (!value) return callback(new Error("验证码不能为空"));
      if (!/^\d{4}$/.test(value))
        return callback(new Error("验证码有误，请重新输入"));
      callback();
    };
    const rules = {
      phone: [
        {
          require: true,
          trigger: "blur",
          validator: checkPhone,
        },
      ],
      email: [
        {
          require: true,
          trigger: "blur",
          validator: checkEmail,
        },
      ],
      password: [
        {
          require: true,
          trigger: "blur",
          validator: validatePassword,
        },
      ],
      checkPassword: [
        {
          require: true,
          trigger: "blur",
          validator: validatePassword2,
        },
      ],
      captcha: [
        {
          require: true,
          trigger: "blur",
          validator: validateCaptcha,
        },
      ],
    };
    onMounted(() => {
      watch(props.type, () => {
        loginForm.phone = "";
        loginForm.email = "";
        loginForm.password = "";
        loginForm.checkPassword = "";
        loginForm.captcha = "";
      });
    });

    // 提交表单
    function submitForm() {
      loginRef.value.validateField(props.type == 2 ? "phone" : "email");
      if (props.type == 2) {
        loginRef.value.validateField("captcha");
        loginRef.value.validate((valid) => {
          if (valid) {
            const { phone, captcha } = loginForm;
            emit("verifyCaptcha", { phone, captcha });
          }
        });
      } else {
        loginRef.value.validateField("password");
        loginRef.value.validateField("checkPassword");
        loginRef.value.validate((valid) => {
          const { phone, email, password } = loginForm;
          if (valid) {
            emit(
              "submitForm",
              props.type == 0 ? { email, password } : { phone, password }
            );
          }
        });
      }
    }
    return { loginForm, loginRef, rules, submitForm };
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 30px;
  margin-bottom: 50px;
}
.form {
  width: 500px;
  .btn {
    width: 60%;
  }
}
.more-login {
  margin: 20px 20px 0;
  font-size: 20px;
}
.other-login {
  display: flex;
}
</style>
