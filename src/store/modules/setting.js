import Cookies from 'js-cookie'

export default {
  // namespaced: true,
  state: {
    isMobile: false,
    theme: 'dark',
    layout: 'side',
    systemName: 'SSR OOOO',
    copyright: '2018 ICZER 工作室出品',
    footerLinks: [
      {link: 'https://pro.ant.design', name: 'Pro首页'},
      {link: 'https://github.com/iczer/vue-antd-admin', icon: 'github'},
      {link: 'https://ant.design', name: 'Ant Design'}
    ],
    multipage: false,
    activeMenu: Cookies.get('activemenu')||'home',
    activeSubMenu: Cookies.get('activeSubMenu')||'home',
  },
  mutations: {
    SET_ACTIVEMENU(state,menu){
      state.activeMenu = menu
      Cookies.set('activemenu', menu)
    },
    SET_ACTIVESUBMENU(state,menu){
      state.activeSubMenu = menu
      Cookies.set('activeSubMenu', menu)
    },
    setDevice (state, isMobile) {
      state.isMobile = isMobile
    },
    setTheme (state, theme) {
      state.theme = theme
    },
    setLayout (state, layout) {
      state.layout = layout
    },
    setMultipage (state, multipage) {
      state.multipage = multipage
    }
  },
  actions: {
    setActiveMenu({ commit }, menu) {
      commit('SET_ACTIVEMENU', menu)
    },
    setActiveSubMenu({ commit }, menu) {
      commit('SET_ACTIVESUBMENU', menu)
    },
  }
}
