<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
    </div>
</template>

<script>
    import HomeHeader from '@/components/home/Header'
    import HomeSwiper from '@/components/home/Swiper'
    import HomeIcons from '@/components/home/Icons'
    import HomeRecommend from '@/components/home/Recommend'
    export default {
        name: 'Home',
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend
        }
    }
</script>

<style lang="stylus">
@import '~styles/common';
</style>

