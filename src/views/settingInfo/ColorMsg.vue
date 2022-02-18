<template>
  <div class="settingInfoColorMsg">
    <van-nav-bar
      title="彩信设置"
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
export default class SettingInfoColorMsg extends Vue {
  public historyBack = (): void => history.back();
}
</script>
