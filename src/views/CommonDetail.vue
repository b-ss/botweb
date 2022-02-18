<template>
  <div class="commonDetail">
    <van-nav-bar>
      <template #left>
        <van-icon name="arrow-left" size="24" @click="historyBack" />
        <van-cell title="详情" />
      </template>
      <template #right>
        <router-link :to="{name: 'commonDetailSetting'}">
          <van-icon name="setting-o" size="24" />
        </router-link>
      </template>
    </van-nav-bar>
    <div style="height: 100px"></div>
    <van-sticky :offset-bottom="50" position="bottom">
      <van-button type="primary">进入聊天</van-button>
      <van-button type="primary">保存本地</van-button>
    </van-sticky>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { NavBar, Icon, Cell, Popover, Button, Sticky } from 'vant'

@Options({
  props: ['personId'],
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [Popover.name]: Popover,
    [Button.name]: Button,
    [Sticky.name]: Sticky,
  },
})
export default class CommonDetail extends Vue {
  private showPopover = false
  public historyBack = (): void => history.back()
}
</script>
