<template>
    <div class="categories">
        <template v-for="(item, index) in categories" :key="item.id">
            <div class="item">
                <img :src="item.pictureUrl" alt="">
                <span class="text"> {{ item.title }} </span>
            </div>
        </template>
    </div>
</template>

<script setup>
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';
const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
.categories {
    display: flex;
    height: 80px;
    overflow-x: auto;
    padding: 0 10px;
    margin-top: 8px;
    &::-webkit-scrollbar {
        display: none;
    }

    .item {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 70px;
        text-align: center;

        img {   
            width: 32px;
            height: 32px;
        }

        .text {
            font-size: 12px;
            margin-top: 8px;
        }


    }
}
</style>