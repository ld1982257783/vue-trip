<template>
    <div class="city top-page">
        <div class="top">
            <!-- 1 搜索框 -->
            <van-search shape="round" show-action v-model="searchValue" placeholder="城市/区域/位置" @cancel="cancelClick" />

            <!-- 2 tab 切换 tabActive 默认绑定索引 可以通过 van-tab 的name属性进行修改-->
            <van-tabs v-model:active="tabActive" color="#ff9854" line-height="2">
                <template v-for="(value, key, index) in allCities" :key="key">
                    <van-tab :title="value.title" :name="key"></van-tab>
                </template>
            </van-tabs>
        </div>
        <div class="content">
            <!-- 数据太大 效率较低 -->
            <!-- <city-group :group-data="currentGroup"></city-group> -->
            <template v-for="(value, key, index) in allCities" :key="key">
                <city-group v-show="key === tabActive" :group-data="value" />
            </template>
        </div>

    </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useRouter } from "vue-router";
import useCityStore from "@/store/modules/city";
import { storeToRefs } from "pinia";

import CityGroup from "./cpns/city-group.vue";

const router = useRouter()
const searchValue = ref("")

// 搜索框功能
const cancelClick = () => {
    router.back()    // 返回上一级
}

// tab 的切换
const tabActive = ref()

/*
    这个位置发送网络请求 有两个缺点
        1 如果网络请求太多 那么页面组件中就包含大量的对于网络请求和数据的处理逻辑
        2 如果页面封装了很多的子组件 子组件需要这些数据 我们必须一步步将数据传递过去(props)

*/
// const allCity = ref({})
// getCityAll().then(res => {
//     allCity.value = res.data
//     console.log(res)
// })

// 从store中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

// 目的: 获取选中标签后的数据
// 1 获取正确的key 将tabs中绑定的 tabAction 正确绑定
// 2 根据key 从 allCities 获取数据 默认直接获取的数据不是响应式的,所以必须包裹 computed
const currentGroup = computed(() => allCities.value[tabActive.value])

</script>

<style lang="less" scoped>
.city {

    // --van-tab-line-height: 30px

    // 第一种方式 固定 搜索栏
    // .top {
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    // }

    // 布局滚动
    .content {
        height: calc(100vh - 98px);
        overflow-y: auto;
    }

}


// 也可以采用第二种方式 隐藏 下拉 tabBar
// .city {
//     position: relative;
//     z-index: 999;
//     height: 100vh;
//     overflow-y: auto;
//     background-color: #fff;
// }
</style>