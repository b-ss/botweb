<template>
  <div class="settingInfo5G">
    <van-nav-bar
      title="5G消息设置"
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
export default class SettingInfo5G extends Vue {
  public historyBack = (): void => history.back();
}
</script>
