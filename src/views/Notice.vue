<template>
  <div class="notice">
    <van-nav-bar>
      <template #left>
        <van-icon name="arrow-left" size="24" @click="historyBack" />
        <van-cell title="通知类消息" />
      </template>
      <template #right>
        <van-popover v-model:show="showPopover" placement="bottom-end">
          <div class="van-popover__action">
            <div class="van-popover__action-text">批量操作</div>
          </div>
          <template #reference>
            <van-icon class="icon-ellipsis-transform" name="ellipsis" size="18" />
          </template>
        </van-popover>
      </template>
    </van-nav-bar>
    <van-list>
      <van-cell v-for="item in list" :key="item" :title="item.name" :value="item.time" :label="item.desc" is-link :to="{ name: 'viewMsg', params: { userId: item.name } }" />
    </van-list>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { NavBar, Icon, Search, Popover, List, Cell } from 'vant'

@Options({
  components: {
    [Icon.name]: Icon,
    [NavBar.name]: NavBar,
    [Search.name]: Search,
    [Popover.name]: Popover,
    [List.name]: List,
    [Cell.name]: Cell,
  },
})
export default class Notice extends Vue {
  private showPopover = false
  public historyBack = (): void => history.back()
  private list = [
    { name: 'Ue4', time: '上午10:20', desc: '滚滚滚' },
    { name: 'Ue5', time: '上午10:21', desc: '滚滚滚' },
    { name: 'Ue6', time: '上午10:22', desc: '滚滚滚' },
  ]
}
</script>
