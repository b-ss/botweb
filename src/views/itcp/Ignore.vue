<template>
  <div class="itcpSettingIgnore">
    <van-nav-bar
      title="来电忽略名单"
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
export default class ItcpSettingIgnore extends Vue {
  public historyBack = (): void => history.back();
}
</script>
