import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from "vue"
import { throttle } from "underscore"


// 方法二 标志位 记录
export default function useScroll(elRef) {
    let el = window
    const isReachBottom = ref(false)
    const scrollTop = ref(0)
    const scrollHeight = ref(0)
    const clientHeight = ref(0)

    // 防抖 / 节流  // 每 100 毫秒 执行一次 即可
    // 监听 window 窗口的滚动
    const scrollListenerHandler = throttle(() => {
        // console.log("监听到了屏幕的滚动~")
        if (el === window) {
            // 已滚动的距离
            scrollTop.value = document.documentElement.scrollTop
            // 一共可滚动的距离
            scrollHeight.value = document.documentElement.scrollHeight
            // 获取当前 clinet 的高度
            clientHeight.value = document.documentElement.clientHeight
        } else {
            // 已滚动的距离
            scrollTop.value = el.scrollTop
            // 一共可滚动的距离
            scrollHeight.value = el.scrollHeight
            // 获取当前 clinet 的高度
            clientHeight.value = el.clientHeight
            // console.log(scrollTop.value, scrollHeight.value, clientHeight.value)
        }

        // console.log(scrollTop, clientHeight, scrollHeight)
        if ((Math.ceil(scrollTop.value) + Math.ceil(clientHeight.value)) >= scrollHeight.value) {
            isReachBottom.value = true
        }
    }, 100)

    onMounted(() => {
        if (elRef) {
            el = elRef.value
        }
        el.addEventListener('scroll', scrollListenerHandler)
    })
    onActivated(() => {
        el.addEventListener('scroll', scrollListenerHandler)
    })

    onUnmounted(() => {
        el.removeEventListener('scroll', scrollListenerHandler)
    })
    onDeactivated(() => {
        el.removeEventListener('scroll', scrollListenerHandler)
    })

    return { isReachBottom, scrollTop, clientHeight, scrollHeight }
}



// 方法1 回调机制 加载更多
// export default function useScroll(callback) {
//     // 监听 window 窗口的滚动
//     // 1 当我们离开页面时 我们移除监听
//     // 2 如果别的页面也进行了类似的监听 会编写重复的代码
//     const scrollListenerHandler = () => {
//         // 已滚动的距离
//         const scrollTop = document.documentElement.scrollTop
//         // 一共可滚动的距离
//         const scrollHeight = document.documentElement.scrollHeight
//         // 获取当前 clinet 的高度
//         const clientHeight = document.documentElement.clientHeight
//         // console.log(scrollTop, clientHeight, scrollHeight)
//         if ((Math.ceil(scrollTop) + clientHeight) >= scrollHeight) {
//             // 回调机制
//             if (callback) callback()
//         }
//     }



//     onMounted(() => {
//         window.addEventListener('scroll', scrollListenerHandler)
//     })
//     onActivated(() => {
//         window.addEventListener('scroll', scrollListenerHandler)
//     })

//     onUnmounted(() => {
//         window.removeEventListener('scroll', scrollListenerHandler)
//     })
//     onDeactivated(() => {
//         window.removeEventListener('scroll', scrollListenerHandler)
//     })
// }
