<template>
  <div class="itcpIdx">
    <van-nav-bar left-arrow @click-left="historyBack">
      <template #title>
        <van-row justify="center" gutter="20">
          <van-col span="12">拦截来电</van-col>
          <van-col span="12">拦截信息</van-col>
        </van-row>
      </template>
      <template #right>
        <router-link :to="{ name: 'itcpSetting' }"><van-icon name="setting-o" size="18" /></router-link>
      </template>
    </van-nav-bar>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Col, Row, Icon, NavBar, Tab, Tabs } from "vant";

@Options({
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Icon.name]: Icon,
    [NavBar.name]: NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
})
export default class ItcpIdx extends Vue {
  private activeTab = 0;
  public historyBack = () : void => history.back();
}
</script>
