<template>
  <div class="itcpSettingRule">
    <van-nav-bar title="拦截规则" left-arrow @click-left="historyBack"></van-nav-bar>
    <van-cell title="电话拦截设置" is-link to="" />
    <van-cell title="信息拦截设置" is-link to="" />
    <van-cell title="黑名单管理" is-link to="" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Cell, NavBar} from "vant";

@Options({
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
  },
})
export default class ItcpSettingRule extends Vue {
  public historyBack = () : void => history.back();
}
</script>
