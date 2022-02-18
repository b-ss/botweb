<template>
  <div class="application">
    <van-nav-bar>
      <template #left>
        <van-icon name="arrow-left" size="24" @click="historyBack" />
        <van-cell title="应用号" />
      </template>
      <template #right>
        <van-popover v-model:show="showPopover" placement="bottom-end">
          <div class="van-popover__action">
            <router-link class="van-popover__action-text" :to="{ name: 'applicationLocal' }">本地应用号</router-link>
          </div>
          <div class="van-popover__action">
            <div class="van-popover__action-text">扫一扫</div>
          </div>
          <div class="van-popover__action">
            <router-link class="van-popover__action-text" :to="{ name: 'applicationNearby' }">附近应用号</router-link>
          </div>
          <div class="van-popover__action">
            <router-link class="van-popover__action-text" :to="{ name: 'applicationBlackList' }">黑名单</router-link>
          </div>
          <template #reference>
            <van-icon class="icon-ellipsis-transform" name="ellipsis" size="18" />
          </template>
        </van-popover>
      </template>
    </van-nav-bar>
    <van-search v-model="searchVal" placeholder="请输入搜索关键词" />
    <van-list>
      <van-cell v-for="item in list" :key="item" :title="item.name" :value="item.time" :label="item.desc" is-link :to="{ name: 'viewSession', params: { userId: item.name } }" />
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
export default class Application extends Vue {
  private showPopover = false
  private searchVal = ''
  public historyBack = (): void => history.back()
  private list = [
    { name: 'Ue4', time: '上午10:20', desc: '滚滚滚' },
    { name: 'Ue5', time: '上午10:21', desc: '滚滚滚' },
    { name: 'Ue6', time: '上午10:22', desc: '滚滚滚' },
  ]
}
</script>
