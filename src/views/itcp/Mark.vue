<template>
  <div class="itcpSettingMark">
    <van-nav-bar
      title="标记号码管理"
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
export default class ItcpSettingMark extends Vue {
  public historyBack = (): void => history.back();
}
</script>
