<template>
  <div class="commonDetailSetting">
    <van-nav-bar>
      <template #left>
        <van-icon name="arrow-left" size="24" @click="historyBack" />
        <van-cell title="设置" />
      </template>
    </van-nav-bar>
    <van-cell title="举报" is-link to=""></van-cell>
    <van-cell center title="加入黑名单" label="黑名单号码及商户消息电话都会被拦截">
      <template #right-icon>
        <van-switch v-model="infoForm.isAddBlackList" size="20" />
      </template>
    </van-cell>
    <van-cell center title="消息免打扰" label="收到该应用号的消息时,不进行通知提示">
      <template #right-icon>
        <van-switch v-model="infoForm.isMdr" size="20" />
      </template>
    </van-cell>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { NavBar, Icon, Cell, Switch } from 'vant'

interface InfoForm {
  isAddBlackList: boolean
  isMdr: boolean
}

@Options({
  props: ['personId'],
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [Switch.name]: Switch,
  },
})
export default class CommonDetailSetting extends Vue {
  private showPopover = false
  public historyBack = (): void => history.back()
  private infoForm = {
    isAddBlackList: false,
    isMdr: false,
  }
}
</script>
