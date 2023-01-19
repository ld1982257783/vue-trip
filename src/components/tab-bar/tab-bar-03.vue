<template>
    <div class="tab-bar">
        <!-- 使用 ui 组件库 写法  Vant -->
        <van-tabbar v-model="currentIndex" active-color="#ff9854">
            <template v-for="(item, index) in tabbarData">
                <van-tabbar-item :to="item.path">
                    <span>{{ item.text }}</span>
                    <template #icon>
                        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
                        <img v-else :src="getAssetURL(item.imageActive)" alt="">
                    </template>
                </van-tabbar-item>
            </template>
        </van-tabbar>
    </div>
</template>

<script setup>
import { ref } from "vue"
import tabbarData from "@/assets/data/tabbar"
// img 的 src v-bind 绑定字符串会不生效  
import getAssetURL from "@/utils/load_assets_img"

const currentIndex = ref(0)


</script>

<style lang="less" scoped>
.tab-bar {
    // 局部定义一个变量 只针对 .tab-bar 元素才生效
    // --van-tabbar-item-icon-size: 30px !important;

    // 找到类,对类中的css 属性重写 样式穿透
    :deep(.van-tabbar-item__icon) {
        font-size: 50px;
    }

    caret-color: transparent;
    img {
        height: 26px;
    }
}
</style>