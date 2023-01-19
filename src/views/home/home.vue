<template>
    <div class="home" ref="homeRef">
        <home-nav-bar />
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <home-search-box />
        <home-categories />

        <div class="search-bar" v-if="isShowSearchBar">
            <search-bar />
        </div>

        <home-content />
    </div>
</template>

<script>
export default {
    name: "home"
}
</script>
<script setup>
import { ref, watch, computed, onActivated, onDeactivated } from 'vue'
import HomeNavBar from "./cpns/home-nav-bar.vue"
import HomeSearchBox from "./cpns/home-search-box.vue"
import HomeCategories from "./cpns/home-categoies.vue"
import HomeContent from "./cpns/home-content.vue"
import SearchBar from "@/components/search-bar/search-bar.vue"
import useHomeStore from "@/store/modules/home";
// 引入 hooks
import useScroll from "@/hooks/useScroll"

console.log("当前环境为",import.meta.env)

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouselistData()


// 使用 hooks 1 回调机制 
// useScroll(() => {
//     homeStore.fetchHouselistData()
// })


// 使用 hooks 2 标志位判断
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
    if (newValue) {
        // 加载更多
        homeStore.fetchHouselistData().then(() => {
            isReachBottom.value = false
        })
    }
})



// 搜索框显示的控制
// watch 监听 是否展示
const isShowSearchBar = ref(false)
watch(scrollTop, (newTop) => {
    isShowSearchBar.value = newTop > 360
})
// 计算属性 判断是否 展示
// 定义的可响应式数据 依赖另外一个可响应的数据 那么可以使用计算属性(computed)
// const isShowSearchBar = computed(() => {
//     return scrollTop.value >= 360
// })



// 激活的时候 保留原来的位置
onActivated(() => {
    homeRef.value.scrollTo({
        top: scrollTop.value
    })
})


// 当失活的时候
onDeactivated(() => {
    isShowSearchBar.value = false
})

</script>

<style lang="less" scoped>
.home {
    // caret-color: transparent;
    // padding-bottom: 50px;
    height: 100vh;
    box-sizing: border-box;
    overflow-y: auto;
}

.banner {
    img {
        width: 100%;
    }
}

.search-bar {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
}
</style>