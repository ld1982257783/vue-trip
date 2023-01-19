<template>
    <div class="detail top-page" ref="detailRef">
        <tab-control v-if="showTabControl" class="tabs" :titles="names" @tabItemClick="tabClick" ref="tabControlRef" />
        <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft">
            <template #right>
                <van-icon />
            </template>
        </van-nav-bar>

        <!-- 轮播图 v-memo 当属性mainPart 发送变化的时候 如下组件才重新刷线 -->
        <div class="main" v-if="mainPart" v-memo="[mainPart]">
            <detail-swipe ref="detailSwipeVue" :swipe-data="mainPart.topModule.housePicture.housePics" />
            <detail-infos name="描述" :ref="getSectionRef" :top-infos="mainPart.topModule"></detail-infos>
            <detail-facility name="设施" :ref="getSectionRef"
                :house-facility="mainPart.dynamicModule.facilityModule.houseFacility" />
            <detail-landlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule" />
            <detail-comment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule" />
            <detail-notice name="须知" :ref="getSectionRef"
                :order-rules="mainPart.dynamicModule.rulesModule.orderRules" />
            <detail-map name="周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule" />
            <detail-intro :price-intro="mainPart.introductionModule" />
        </div>

        <div class="footer">
            <img src="@/assets/img/detail/icon_ensure.png" alt="">
            <div class="text">弘源旅途, 永无止境!</div>
        </div>

    </div>
</template>

<script setup>
// 引入组件
import DetailSwipe from './cpns/detail-01-swipe.vue';
import DetailInfos from './cpns/detail-02-infos.vue';
import DetailFacility from './cpns/detail-03-facility.vue';
import DetailLandlord from './cpns/detail-04-landlord.vue';
import DetailComment from './cpns/detail-05-comment.vue'
import DetailNotice from './cpns/detail-06-notice.vue';
import DetailMap from "./cpns/detail-07-map.vue"
import DetailIntro from './cpns/detail-08-intro.vue';
import TabControl from '@/components/tab-control/tab-control.vue';


import { ref, computed, getCurrentInstance, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import useDetailStore from "@/store/modules/detail"
import { storeToRefs } from 'pinia';

// 引入hooks
import useScroll from '@/hooks/useScroll';

const route = useRoute()
const router = useRouter()

const detailSwipeVue = ref('')
const { proxy } = getCurrentInstance()

// 监听返回按钮的点击
const onClickLeft = () => {
    router.back()
}

// 发送对应的网络请求 初始化数据 
const detailStore = useDetailStore()

const houseId = route.params.id
detailStore.fetchGetDetailInfos(houseId).then(() => {
    // 异步请求完毕后 重新渲染 swipeData
    proxy.$refs.detailSwipeVue.init()
})



const { detailInfos } = storeToRefs(detailStore)
const mainPart = computed(() => detailInfos.value.mainPart)



// 页面滚动 显示 tag 标签页
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
    return scrollTop.value >= 300
})


// 动态绑定ref
const sectionEls = ref({})
const names = computed(() => {
    return Object.keys(sectionEls.value)
})

const getSectionRef = (value) => {
    // value 就是传递来的组件
    // 组件 渲染 和 销毁 都会调用和这个方法 销毁是 value 为 null
    if (!value) return
    const name = value.$el.getAttribute("name")
    sectionEls.value[name] = value.$el
}


// 点击指定 标签页 跳转指定位置
let isClick = false
let currentDistance = -1
const tabClick = (index) => {
    const key = Object.keys(sectionEls.value)[index]
    const el = sectionEls.value[key]
    let distance = el.offsetTop
    console.log(distance)
    if (index !== 0) {
        distance = distance - 44
    }

    isClick = true
    currentDistance = distance

    detailRef.value.scrollTo({
        top: distance,
        behavior: "smooth"
    })
}



// 页面滚动, 滚动时匹配对应的tabControll的index
const tabControlRef = ref()
watch(scrollTop, (newValue) => {
    if (newValue === currentDistance) {
        isClick = false
    }
    if (isClick) return

    // 1.获取所有的区域的offsetTops
    const els = Object.values(sectionEls.value)
    const values = els.map(el => el.offsetTop)

    // 2.根据newValue去匹配想要索引
    let index = values.length - 1
    for (let i = 0; i < values.length; i++) {
        if (values[i] > newValue + 44) {
            index = i - 1
            break
        }
    }
    // console.log(index)
    tabControlRef.value?.setCurrentIndex(index)
})


</script>

<style lang="less" scoped>
.tabs {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
}

.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
        width: 123px;
    }

    .text {
        margin-top: 12px;
        font-size: 12px;
        color: #7688a7;
    }
}
</style> 