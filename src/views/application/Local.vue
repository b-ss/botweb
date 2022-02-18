<template>
  <div class="applicationLocal">
    <van-nav-bar>
      <template #left>
        <van-icon name="arrow-left" size="24" @click="historyBack" />
        <van-cell title="本地应用号" />
      </template>
    </van-nav-bar>
    <van-list>
      <van-card v-for="item in list" :key="item" :title="item.name" :desc="item.desc" :thumb="item.img" @click="gotoDetail(item)" />
    </van-list>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { NavBar, Icon, Search, Popover, List, Card, Cell } from 'vant'

@Options({
  components: {
    [Icon.name]: Icon,
    [NavBar.name]: NavBar,
    [Search.name]: Search,
    [Popover.name]: Popover,
    [List.name]: List,
    [Card.name]: Card,
    [Cell.name]: Cell,
  },
})
export default class ApplicationLocal extends Vue {
  public historyBack = (): void => history.back()
  private list = [
    { name: 'Ue4', desc: '滚滚滚', img: '../../../assets/logo.png' },
    { name: 'Ue5', desc: '滚滚滚', img: '../../../assets/logo.png' },
    { name: 'Ue6', desc: '滚滚滚', img: '../../../assets/logo.png' },
  ]
  private gotoDetail(item: any): void {
    this.$router.push({ name: 'viewSession', params: { userId: item.name } })
  }
}
</script>
