<template>
  <div class="settingInfo">
    <van-nav-bar title="信息设置" left-arrow @click-left="historyBack"></van-nav-bar>
    <van-cell center title="智能卡片短信">
      <template #right-icon>
        <van-switch v-model="infoForm.isClever" size="20" />
      </template>
    </van-cell>
    <van-cell center title="通知类信息归类" label="通知类信息合并为一个会话条目">
      <template #right-icon>
        <van-switch v-model="infoForm.isNotice" size="20" />
      </template>
    </van-cell>
    <van-cell center title="短信转自提示" label="转发短信时在短信开头添加转自提示">
      <template #right-icon>
        <van-switch v-model="infoForm.isShortTips" size="20" />
      </template>
    </van-cell>
    <van-cell center title="长短信提示" label="长短信发送前拆分提示">
      <template #right-icon>
        <van-switch v-model="infoForm.isLongTips" size="20" />
      </template>
    </van-cell>
    <van-cell center title="自动签名">
      <template #right-icon>
        <van-switch v-model="infoForm.isAutoSign" size="20" />
      </template>
    </van-cell>
    <van-cell title="短信设置" is-link :to="{name: 'settingInfoMsg'}" />
    <van-cell title="彩信设置" is-link :to="{name: 'settingInfoColorMsg'}" />
    <van-cell title="5G消息设置" is-link :to="{name: 'settingInfo5G'}" />
    <van-cell title="卡短信管理" is-link :to="{name: 'settingInfoCardMsg'}" />
    <van-cell title="用量统计" is-link :to="{name: 'settingInfoDose'}" />

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { NavBar, Cell, Switch } from 'vant'

interface InfoForm {
  isClever: boolean
  isNotice: boolean
  isShortTips: boolean
  isLongTips: boolean
  isAutoSign: boolean
}

@Options({
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    [Switch.name]: Switch,
  },
})
export default class SettingInfo extends Vue {
  public historyBack = (): void => history.back()
  private infoForm = {
    isClever: true,
    isNotice: true,
    isShortTips: true,
    isLongTips: true,
    isAutoSign: false,
  }
}
</script>
