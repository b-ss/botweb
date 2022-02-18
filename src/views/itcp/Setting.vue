<template>
  <div class="itcpSetting">
    <van-nav-bar title="骚扰拦截设置" left-arrow @click-left="historyBack"></van-nav-bar>
    <van-cell title="拦截规则" is-link :to="{ name: 'itcpSettingRule' }" />
    <van-cell title="白名单管理" is-link :to="{ name: 'itcpSettingWhiteList' }" />
    <van-cell title="来电忽略名单" is-link :to="{ name: 'itcpSettingIgnore' }" />
    <van-cell title="标记号码管理" is-link :to="{ name: 'itcpSettingMark' }" />
    <van-cell title="电话拦截记录" is-link :to="{ name: 'itcpSettingTel' }" />
    <van-cell title="信息拦截记录" is-link :to="{ name: 'itcpSettingMsg' }" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Cell, NavBar } from "vant";

@Options({
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
  },
})
export default class ItcpSetting extends Vue {
  public historyBack = () : void => history.back();
}
</script>
