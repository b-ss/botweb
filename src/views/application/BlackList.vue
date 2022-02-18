<template>
  <div class="applicationBlackList">
    <van-nav-bar>
      <template #left>
        <van-icon name="arrow-left" size="24" @click="historyBack" />
        <van-cell title="黑名单" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { NavBar, Icon, Cell } from 'vant'

@Options({
  components: {
    [Icon.name]: Icon,
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
  },
})
export default class ApplicationBlackList extends Vue {
  public historyBack = (): void => history.back()
}
</script>
