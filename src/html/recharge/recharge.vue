<template>
  <div class="container">
    <a-card title="充值套餐" :bordered="false">
      <a-table :columns="columns" :dataSource="data" size="small" :pagination="{pageSize:3}">
        <template slot="action" slot-scope="text">
          <a-button type="link" @click="buyTime">购买</a-button>
        </template>
      </a-table>
    </a-card>

    <a-modal
      title="购买套餐"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      okText="支付完成"
      cancelText="取消"
      :destroyOnClose="true"
      :maskClosable="false"
    >
      <div class="buyModal">
        <p class="buyTitle">月付(30天)</p>
        <p class="much">$3.55</p>
        <a-select v-model="defaultValue" style="width: 120px" >
          <a-select-option value="weChat">微信支付</a-select-option>
          <a-select-option value="aliPay">支付宝支付</a-select-option>
        </a-select>
        <img v-if="defaultValue=='weChat'" style="width: 200px;margin-top20px" src="../../assets/wechat.png" alt="">
        <img v-else style="width: 200px;margin-top20px" src="../../assets/alipay.png" alt="">
      </div>
    </a-modal>

  </div>
</template>
<script>
  const columns = [
    {
      title: '套餐名',
      dataIndex: 'name',
    },
    {
      title: '价格',
      dataIndex: 'pay',
    },
    {
      title: '有效期',
      dataIndex: 'address',
    },
    { title: '操作', dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' } },
  ];
  const data = [
    {
      key: '1',
      name: '月付',
      pay: 32,
      address: '30天',
    },
    {
      key: '2',
      name: '季付',
      pay: 42,
      address: '120天',
    },
    {
      key: '3',
      name: '年付',
      pay: 32,
      address: '365天',
    },
     {
      key: '2',
      name: '年付',
      pay: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      pay: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  export default {
    data() {
      return {
        columns,
        data,
        visible: false,
        confirmLoading: false,
        defaultValue: 'weChat'
      };
    },
    methods: {
      buyTime(){
        this.visible = true;
      },
      handleOk(){
        this.visible = false;
      },
      handleCancel(){
        this.visible = false;
        this.confirmLoading = false;
      },
    },
  };
</script>
<style lang="scss">
.buyModal{
  color: #303133;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .buyTitle{
    
  }
  .much{
    color: #606266;
    font-size: 14px
  }
}
</style>


