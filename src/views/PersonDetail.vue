<template>
  <div class="personDetail">
    <van-nav-bar left-arrow @click-left="historyBack"></van-nav-bar>
    联系人详情页面{{personId}}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { NavBar } from 'vant'

@Options({
  props: ['personId'],
  components: {
    [NavBar.name]: NavBar,
  },
})
export default class PersonDetail extends Vue {
  public historyBack = (): void => history.back()
}
</script>
