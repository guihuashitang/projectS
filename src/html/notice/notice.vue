<template>
  <div class="container">
    <a-card title="公告" :bordered="false">
      <a-collapse  :bordered="false">
        <a-collapse-panel header="通知" key="1" >
          <p>由于北京开会，大量节点被封。请等待修复，我们会对此进行相应时间的补偿。</p>
        </a-collapse-panel>
        <a-collapse-panel header="注意事项" key="2" >
          <p>充值前请试用！充值后概不退款！！</p>
        </a-collapse-panel>
        <a-collapse-panel header="管理员联系方式" key="3" >
          <p>管理员联系方式</p>
        </a-collapse-panel>
      </a-collapse>
    </a-card>
  </div>
</template>
<script>

  export default {
    data() {
      return {
   
      };
    },
  };
</script>
<style>

</style>