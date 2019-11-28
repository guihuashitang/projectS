<template>
  <div>
    <a-menu
      :defaultSelectedKeys="[activeMenu]"
      :defaultOpenKeys="[activeSubMenu]"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
    >
      <template v-for="item in menuData">
        <a-menu-item v-if="!item.children" :key="item.name">
          <!-- <a-icon type="pie-chart" /> -->
          <router-link :to="item.path" :key="item.name">
            <span>{{item.title}}</span>
          </router-link>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.name" />
      </template>
    </a-menu>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SubMenu from './SubMenu';
  export default {
    components: {
      'sub-menu': SubMenu,
    },
    data() {
      return {
        collapsed: false,
        menuData: [],
      };
    },
    computed: {
      ...mapGetters([
        'activeMenu',
        'activeSubMenu'
      ]),
    },
    watch: {
      $route(to,form){
        console.log(to)
        this.$store.dispatch('setActiveMenu',to.name)
        this.$store.dispatch('setActiveSubMenu',to.meta.subName)
      }
    },
    methods: {
      toggleCollapsed() {
        this.collapsed = !this.collapsed;
      },
    },
    mounted(){
    },
    beforeCreate () {
      this.$nextTick(()=>{
      this.menuData = this.$router.options.routes.find(item => item.path === "/").children;
      })

    }
  };
</script>