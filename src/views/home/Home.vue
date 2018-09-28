<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
    import axios from 'axios'
    import HomeHeader from '@/components/home/Header'
    import HomeSwiper from '@/components/home/Swiper'
    import HomeIcons from '@/components/home/Icons'
    import HomeRecommend from '@/components/home/Recommend'
    import HomeWeekend from '@/components/home/Weekend'
    export default {
        name: 'Home',
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        data() {
            return {
                swiperList: [],
                iconList: [],
                recommendList: [],
                weekendList: []
            }
        },
        methods: {
            ajxGetList: function(){
                axios.get('/api/index.json').then((response) => {
                    const res = response.data;
                    if(res.status) {
                        this.swiperList = res.data[0].swiperList;
                        this.iconList = res.data[0].iconList;
                        this.recommendList = res.data[0].recommendList;
                        this.weekendList = res.data[0].weekendList;
                    }
                });
            }
        },
        mounted: function () {
            this.ajxGetList();
        }
    }
</script>

<style lang="stylus">
@import '~styles/common';
</style>

