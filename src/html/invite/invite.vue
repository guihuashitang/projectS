<template>
  <div class="container">
    <a-row style="width: 100%;margin: 0" :gutter="20">
      <a-col class="statistic" :xs="24" :sm="24" :md="12" :lg="12">
        <a-card :bordered="false">
          <a-statistic title="邀请人数" :precision="2" :value="12" />
        </a-card>
      </a-col>
      <a-col class="statistic" :xs="24" :sm="24" :md="12" :lg="12">
        <a-card :bordered="false">
          <a-statistic title="获得返利" :precision="2" :value="100" />
        </a-card>
      </a-col>
    </a-row>

    <a-card title="邀请链接" :bordered="false" style="margin-top: 20px">
       <a-row :gutter="8">
        <a-col :span="10">
          <a-input :defaultValue="url" size="large"/>
        </a-col>
        <a-col :span="4">
          <a-button v-clipboard:copy="url" v-clipboard:success="onCopy" size="large">复制</a-button>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        url: 'www.baidu.com'
      };
    },
    methods: {
      onCopy(){
         this.$message.success(
          '复制成功',
          10,
        );
      },
    }
  };
</script>
<style>

</style>