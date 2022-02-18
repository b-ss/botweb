<template>
  <div class="settingInfoMsg">
    <van-nav-bar
      title="短信设置"
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
export default class SettingInfoMsg extends Vue {
  public historyBack = (): void => history.back();
}
</script>
