<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'agentLayout',
    computed: {

    }
  }
</script>
<style >
/* .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s ease;
} */
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}

</style>
