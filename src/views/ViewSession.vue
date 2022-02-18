<template>
  <div class="viewSession">
    <van-nav-bar>
      <template #left>
        <van-icon name="arrow-left" size="24" @click="historyBack" />
        <van-cell :title="userId" />
      </template>
      <template #right>
        <van-popover v-model:show="showPopover" placement="bottom-end">
          <div class="van-popover__action">
            <router-link class="van-popover__action-text" :to="{ name: 'commonDetail', params: { personId: userId } }">详情</router-link>
          </div>
          <div class="van-popover__action">
            <div class="van-popover__action-text">加入黑名单</div>
          </div>
          <template #reference>
            <van-icon class="icon-ellipsis-transform" name="ellipsis" size="18" />
          </template>
        </van-popover>
      </template>
    </van-nav-bar>
    应用、通知会话详情
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { NavBar, Icon, Popover, Cell } from 'vant'

@Options({
  props: ['userId'],
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Popover.name]: Popover,
    [Cell.name]: Cell,
  },
})
export default class ViewSession extends Vue {
  private showPopover = false
  public historyBack = (): void => history.back()
}
</script>
