<template>
  <div class="viewMsg">
    <van-nav-bar>
      <template #left>
        <van-icon name="arrow-left" size="24" @click="historyBack" />
        <van-cell :title="userId" label="17701844623 上海 电信" />
      </template>
      <template #right>
        <van-icon name="phone" size="24" />
        <van-popover v-model:show="showPopover" placement="bottom-end">
          <div class="van-popover__action">
            <router-link class="van-popover__action-text" :to="{ name: 'personDetail', params: { personId: userId } }">联系人详情</router-link>
          </div>
          <div class="van-popover__action">
            <div class="van-popover__action-text">复制号码</div>
          </div>
          <div class="van-popover__action">
            <div class="van-popover__action-text">加入黑名单</div>
          </div>
          <div class="van-popover__action">
            <div class="van-popover__action-text">批量操作</div>
          </div>
          <template #reference>
            <van-icon class="icon-ellipsis-transform" name="ellipsis" size="18" />
          </template>
        </van-popover>
      </template>
    </van-nav-bar>
    个人会话详情
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
export default class ViewMsg extends Vue {
  private showPopover = false
  public historyBack = (): void => history.back()
}
</script>
