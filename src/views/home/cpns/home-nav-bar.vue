<template>
    <div class="nav-bar">
        <div class="title">弘源旅途</div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.home {
    .nav-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 46px;
        border-bottom: 1px solid #f2f2f2;
        caret-color: transparent;

        .title {
            color: var(--primary-color);
            font-size: 16px;
            font-weight: 700;
        }
    }
}
</style>