
const getAssetURL = (image) => {
    // 参数一 相对路径
    // 参数二 获取当前文件的路径
    return new URL(`../assets/img/${image}`, import.meta.url).href
}

export default getAssetURL