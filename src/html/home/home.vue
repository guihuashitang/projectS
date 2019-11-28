<template>
  <div class="container">
    <a-row style="width: 100%" :gutter="16">
      <a-col :xs="24" :sm="24" :md="12" :lg="12">
        <a-card :bordered="false">
          <a-row style="width: 100%" :gutter="16">
            <a-col class="statistic" :xs="24" :sm="24" :md="24" :lg="12">
              <div class="statistictitle">账号</div>
              <div class="statisticcontent">436056164@qq.com</div>
              <!-- <a-tag color="blue" size="large">账号</a-tag>
              <p style="font-size: 16px;margin-top: 10px">436056164@qq.com</p> -->
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="12">
              <a-statistic title="余额" :precision="2" :value="1321" />
              <!-- <a-tag color="blue" size="large">余额</a-tag>
              <p style="font-size: 16px;margin-top: 10px">1321</p> -->
            </a-col>
          </a-row>
          <div style="margin-top:20px">
            <a-row style="width: 100%" :gutter="16">
              <a-col class="circleType" :xs="24" :sm="24" :md="24" :lg="12">
                <a-progress type="circle" status="exception"  :percent="75" >
                  <template v-slot:format="percent">
                    <span>{{percent}}</span>
                  </template>
                </a-progress>
                <div style="color: rgb(255, 85, 0);margin-top: 5px">已用流量</div>
              </a-col>
              <a-col class="circleType" :xs="24" :sm="24" :md="24" :lg="12">
                <a-progress type="circle" :percent="100" >
                  <template v-slot:format="percent">
                    <span>{{percent}}</span>
                  </template>
                </a-progress>
                <div style="color: rgb(135, 208, 104);margin-top: 5px" >剩余流量</div>
              </a-col>
            </a-row>
          </div>
        </a-card>

        <a-card class="cardClass" :bordered="false">
          <h3 style="margin-bottom: 20px">连接参数</h3>
            <p><span class="titleConnect">端口</span> <span class="contentInfo">8008</span></p>
            <a-divider />
            <p><span class="titleConnect">密码</span>  <span class="contentInfo">123456</span></p>
            <a-divider />
            <p><span class="titleConnect">协议</span> <span class="contentInfo">auth_aes128_sha1</span></p>
            <a-divider />
            <p><span class="titleConnect">加密</span> <span class="contentInfo">chacha20-ietf</span></p>
            <a-divider />
            <p><span class="titleConnect">混淆</span> <span class="contentInfo">http_simple</span></p>
            <a-divider />
            <p><span class="titleConnect">混淆参数</span> <span class="contentInfo">www.jd.hk</span></p>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12">
        <a-card :bordered="false">
          <h3 style="margin-bottom: 20px">公告</h3>
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
        <a-card class="cardClass" :bordered="false">
          <h3 style="margin-bottom: 20px">我的购买</h3>
          <p><span class="titleConnect">购买产品</span> <span class="contentInfo">季付（￥10）</span></p>
          <p><span class="titleConnect">到期时间</span> <span class="contentInfo">2019-12-24</span></p>
        </a-card>
      </a-col>
      
    </a-row>
  </div>
</template>

<script>
</script>


<style scoped>

.cardClass{
  /* height: 160px */
  margin-top: 20px
}
.cardClass p{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center
}
.cardClass p span{
  text-align: center;
  width: 50%;
  display: block
}

.signIn{
  width: 100%;
  height: 50px;
  position: absolute;
  left: 0;
  bottom: 0;
}
.statistic{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
}
.statistic .statistictitle{
  margin-bottom: 4px;
  font-size: 14px;
}
.statistic .statisticcontent{
  font-size: 24px;
  font-family: Tahoma, 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
.circleType{
  text-align: center
}
</style>
