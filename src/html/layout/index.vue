<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger='null' :width="isMobile?'100%':'250px'" collapsedWidth="0" collapsible v-model="collapsed" breakpoint="lg">
      <div class="logonInfo">
        <div class="logo" />
        <a-icon
          style="padding:0"
          v-if="isMobile"
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </div>
      <menus></menus>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2)">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <div class="loginOut" @click="loginOut"><a-icon type="poweroff" style="margin-right: 5px" />退出</div>  
      </a-layout-header>
      <a-layout-content class="layoutContent" :style="{ padding: '40px' }">
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import menus from './menu/menu'
export default {
  components: {menus},
  name: 'LayOut',
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    isMobile () {
      return this.$store.state.setting.isMobile
    },
    systemName () {
      return this.$store.state.setting.systemName
    }
  },
  methods: {
    loginOut(){
      this.$store.dispatch('FedLogOut').then(res=>{
        console.log('退出')
        this.$router.push('/login')
      })
    }
  }
}
  
</script>

<style scoped>
  .ant-layout-sider{
    width: 250px;
    min-width: 250px;
    max-width: 250px;
  }
  #components-layout-demo-custom-trigger{
    height: 100%;
  }

  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    padding: 0 16px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    width: calc(100% - 66px);
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
  }

  .logonInfo{
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
  }
  .loginOut{
    float: right;
    padding: 0 16px;
    cursor: pointer;
    
  }
  .loginOut:hover{
    color: #1890ff;
    
  }
  .layoutContent{
    position: relative;
  }
</style>