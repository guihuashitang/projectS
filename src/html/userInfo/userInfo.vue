<template>
  <div class="userInfo">
   <a-tabs
      defaultActiveKey="1"
      :tabPosition="mode"
      :style="{ height: '100%'}"
    >
      <a-tab-pane tab="基本信息" key="1">
        <a-form @submit="onSubmit" :form="form" style="width: 250px">
          <a-form-item label="邮箱">
            <a-input v-decorator="eMail"  placeholder="请输入邮箱" >
            </a-input>
          </a-form-item>
          <a-form-item label="用户名">
            <a-input placeholder="请输用户名" >
            </a-input>
          </a-form-item>
          <a-form-item label="联系方式">
            <a-input placeholder="请输联系方式" >
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button :loading="logging" style="width: 100%;margin-top: 24px" size="large" htmlType="submit" type="primary">保存</a-button>
          </a-form-item>
        </a-form>
      </a-tab-pane>
      <a-tab-pane tab="密码修改" key="2">
        <a-form @submit="passwordSubmit" :form="passwordForm" style="width: 250px">
          <a-form-item label="原密码">
            <a-input type="password" v-decorator="['password',{ rules: [{ required: true, message: '请输入原密码' , whitespace: true}] },]"  placeholder="原密码" >
            </a-input>
          </a-form-item>
          <a-form-item label="新密码">
            <a-input type="password" v-decorator="['password',{ rules: [{ required: true, message: '请输入新密码' , whitespace: true}] },]" placeholder="新密码" >
            </a-input>
          </a-form-item>
          <a-form-item label="确认新密码">
            <a-input type="password" v-decorator="['password',{ rules: [{ required: true, message: '请确认新密码' , whitespace: true}] },]" placeholder="确认新密码" >
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button :loading="logging" style="width: 100%;margin-top: 24px" size="large" htmlType="submit" type="primary">保存</a-button>
          </a-form-item>
        </a-form>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      mode: 'left',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      eMail: [
        'email',
        {
          rules: [
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
            },
            {
              required: true,
              message: '请输入邮箱地址',
            },
          ],
        },
      ],

    };
  },
}
</script>



<style>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.userInfo{
  background-color: #fff;
  padding: 10px 0;
  height: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, .1)
}
</style>