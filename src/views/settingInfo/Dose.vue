<template>
  <div class="settingInfoDose">
    <van-nav-bar
      title="用量统计"
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
export default class SettingInfoDose extends Vue {
  public historyBack = (): void => history.back();
}
</script>
