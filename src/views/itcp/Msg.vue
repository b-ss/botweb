<template>
  <div class="itcpSettingMsg">
    <van-nav-bar
      title="信息拦截记录"
      left-arrow
      @click-left="historyBack"
    ></van-nav-bar>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NavBar } from "vant";

@Options({
  components: {
    [NavBar.name]: NavBar,
  },
})
export default class ItcpSettingMsg extends Vue {
  public historyBack = (): void => history.back();
}
</script>
