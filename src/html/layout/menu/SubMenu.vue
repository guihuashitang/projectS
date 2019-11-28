<template functional>
  <a-sub-menu :key="props.menuInfo.name">
    <span slot="title">
      <!-- <a-icon type="mail"/><span>{{ props.menuInfo.title }}</span> -->
      <span>{{ props.menuInfo.title }}</span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.name">
        <!-- <a-icon type="pie-chart" /> -->
        <router-link :to="item.path" :key="item.name">
          <span>{{ item.title }}</span>
        </router-link>
      </a-menu-item>
      <sub-menu v-else :key="item.name" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  props: ['menuInfo'],
};
</script>