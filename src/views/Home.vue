<template>
  <div class="home">
    <div><van-button type="primary">主要按钮</van-button></div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { Button } from 'vant';

@Options({
  components: {
    HelloWorld,
    [Button.name]: Button
  },
})
export default class Home extends Vue {}
</script>
