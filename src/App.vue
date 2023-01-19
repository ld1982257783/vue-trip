
<template>
  <div class="app">
    <!-- name 组件 -->
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <!-- <router-view /> -->
    <tab-bar v-show="!route.meta.hideTabBar"></tab-bar>
    <loading />
  </div>
</template>

<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue"
import Loading from "@/components/loading/loading.vue"
// useRoute 总是获取当前活跃的路由对象
import { useRoute } from "vue-router";

const route = useRoute()


</script>


<style scoped>

</style>
