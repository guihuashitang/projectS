<template>
  <div class="container">
    <div class="content">
      <div class="top">
        <div class="header">
          <img alt="logo" class="logo" src="static/img/vue-antd-logo.png" />
          <span class="title">SSR</span>
        </div>
      </div>
      <div class="login">
        <a-form @submit="onSubmit" :form="form">
          <a-tabs v-model="activeKey" size="large" :tabBarStyle="{textAlign: 'center'}" style="padding: 0 2px;">
            <a-tab-pane tab="账户密码登录" key="1">
              <a-alert type="error" :closable="true" v-show="error" :message="error" showIcon style="margin-bottom: 24px;" />
              <a-form-item>
                <a-input v-decorator="['userName',{ rules: [{ required: true, message: '请输入账户名' }] }]" size="large" placeholder="请输入账户名" >
                  <a-icon slot="prefix" type="user" />
                </a-input>
              </a-form-item>
              <a-form-item style="margin-bottom: 5px">
                <a-input v-decorator="['password',{ rules: [{ required: true, message: '请输入密码' , whitespace: true}] },]" size="large" placeholder="请输入密码" type="password">
                  <a-icon slot="prefix" type="lock" />
                </a-input>
              </a-form-item>
              <div>
                <a>忘记密码</a>
              </div>
              <a-form-item>
                <a-button v-if="activeKey==1" :loading="logging" style="width: 100%;margin-top: 24px" size="large" htmlType="submit" type="primary">登录</a-button>
              </a-form-item>
            </a-tab-pane>
            <a-tab-pane tab="注册账户" key="2">
              <a-form-item>
                <a-input v-if="activeKey==2" v-decorator="eMail" size="large" placeholder="请输入邮箱" >
                  <a-icon slot="prefix" type="mail" />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input v-if="activeKey==2" v-decorator="['registerPassword',{ rules: [{ required: true, message: '请输入密码' , whitespace: true}] },]" size="large" placeholder="请输入密码" autocomplete="new-password" type="password">
                  <a-icon slot="prefix" type="lock" />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-row v-if="activeKey==2" :gutter="8" style="margin: 0 -4px">
                  <a-col :span="16">
                    <a-input   v-decorator="['code',{ rules: [{ required: false, message: '验证码' }] },]" size="large" placeholder="验证码">
                    <a-icon slot="prefix" type="safety-certificate" />
                  </a-input>
                  </a-col>
                  <a-col :span="8" style="padding-left: 4px">
                    <a-button style="width: 100%" class="captcha-button" @click="getCode" size="large">获取验证码</a-button>
                  </a-col>
                </a-row>
              </a-form-item>
              <a-form-item>
                 <a-button v-if="activeKey==2" :loading="logging" style="width: 100%;margin-top: 24px" size="large" htmlType="submit" type="primary">注册</a-button>
              </a-form-item>
            </a-tab-pane>
          </a-tabs>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  components: {},
  data () {
    return {
      logging: false,
      form: this.$form.createForm(this, { name: 'coordinated' }),
      error: '',
      activeKey: '1',
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
      ]
    }
  },
  computed: {

  },
  methods: {
    getCode(){

    },
    onSubmit (e) {
      e.preventDefault()
      console.log(this.form.getFieldsValue())
      this.form.validateFields((err, values) => {
        if (!err) {
          this.logging = true
          this.$store.dispatch('LoginByUsername',this.form.getFieldsValue()).then(res=>{
            this.$router.push('/home')
            console.log('成功')
            this.$store.dispatch('setActiveMenu','home')
            this.$store.dispatch('setActiveSubMenu','home')
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
          // this.$axios.post('/login', {
          //   name: this.form.getFieldValue('name'),
          //   password: this.form.getFieldValue('password')
          // }).then((res) => {
          //   this.logging = false
          //   const result = res.data
          //   if (result.code >= 0) {
          //     const user = result.data.user
          //     this.$router.push('/dashboard/workplace')
          //     this.$store.commit('account/setuser', user)
          //     this.$message.success(result.message, 3)
          //   } else {
          //     this.error = result.message
          //   }
          // })
        }
      })
    },
 
  },

  mounted () {


  }
}
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
    // background: #f0f2f5 url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg') no-repeat center 110px;
    // background: #f0f2f5 url('../../assets/eo71kl.jpg') no-repeat center 110px;
    background: #f1f1f1;
    background-size: 100%;
    .content {
      padding: 32px 0;
      flex: 1;
      @media (min-width: 768px){
        padding: 112px 0 24px;
      }
      .top {
        text-align: center;
        .header {
          height: 44px;
          line-height: 44px;
          a {
            text-decoration: none;
          }
          .logo {
            height: 44px;
            vertical-align: top;
            margin-right: 16px;
          }
          .title {
            font-size: 33px;
            color: rgba(0,0,0,.85);
            font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
            font-weight: 600;
            position: relative;
            top: 2px;
          }
        }
        .desc {
          font-size: 14px;
          color: rgba(0,0,0,.45);
          margin-top: 12px;
          margin-bottom: 40px;
        }
      }
      .login{
        width: 368px;
        margin: 0 auto;
        margin-top: 30px;
        @media screen and (max-width: 576px) {
          width: 95%;
        }
        @media screen and (max-width: 320px) {
          .captcha-button{
            font-size: 14px;
          }
        }
        .icon {
          font-size: 24px;
          color: rgba(0, 0, 0, 0.2);
          margin-left: 16px;
          vertical-align: middle;
          cursor: pointer;
          transition: color 0.3s;

          &:hover {
            color: #1890ff;
          }
        }
      }
    }
  }
</style>
