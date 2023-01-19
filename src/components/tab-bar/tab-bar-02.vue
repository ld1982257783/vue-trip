<template>
    <div class="tab-bar">

        <template v-for="(item, index) in tabbarData">
            <div class="tab-bar-item" @click="itemClick(index, item)" :class="{ active: currentIndex === index }">
                <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
                <img v-else :src="getAssetURL(item.imageActive)" alt="">
                <span class="text">{{ item.text }}</span>
            </div>
        </template>

    </div>
</template>

<script setup>
import { ref } from "vue"
import tabbarData from "@/assets/data/tabbar"
// img 的 src v-bind 绑定字符串会不生效  
import getAssetURL from "@/utils/load_assets_img"
import { useRouter } from "vue-router";
const router = useRouter()

const currentIndex = ref(0)

const itemClick = (index, item) => {
    currentIndex.value = index
    router.push(item.path)
}


</script>

<style lang="less" scoped>
.tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    border-top: 1px solid #f3f3f3;
    caret-color: transparent;
}

.tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    caret-color: transparent;

    &.active {
        color: var(--primary-color)
    }

    .text {
        font-size: 12px;
        margin-top: 2px;
        caret-color: transparent;
    }

    img {
        width: 36px;

    }
}
</style>