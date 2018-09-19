<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide><img class="image-wrapper" src="https://img1.qunarzz.com/qs/1808/e2/e2747a568a40c102.jpg" alt=""></swiper-slide>
            <swiper-slide><img class="image-wrapper"  src="https://img1.qunarzz.com/qs/1808/64/7b13d22df73df002.jpg" alt=""></swiper-slide>
            <swiper-slide><img class="image-wrapper"  src="https://img1.qunarzz.com/qs/1809/cb/25012195ae916f02.jpg" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSiper',
        data () {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop: true
                }
            }
        },
        computed: {
        },
        mounted () {
            console.log('this is current swiper instance object', this.swiper)
        }
    }
</script>

<style lang="stylus" scoped>
.wrapper {
    overflow hidden
    height 0
    width 100%
    padding-bottom 25.6%
    .image-wrapper {
        width 100%
    }
}
.wrapper >>> .swiper-pagination-bullet-active {
    background #fff!important
}  
</style>

