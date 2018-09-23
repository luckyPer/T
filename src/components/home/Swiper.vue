<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
           <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="image-wrapper" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
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
        props: {
            swiperList: Array
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

