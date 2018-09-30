<template>
    <div class="gallary" @click="handelGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item, index) in imgs" :key="index">
                    <img class="image-wrapper" :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Gallary',
        data () {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction'
                    },
                    observer:true,
                    observeParents:true
                }
            }
        },
        props: {
            imgs: Array
        },
        methods:{
            handelGallaryClick() {
                this.$emit('closeGallary')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .gallary {
        display flex
        flex-direction column
        justify-content center
        position fixed
        top 0
        right 0
        bottom 0
        left 0
        background-color #000
        z-index 999
        .wrapper {
            overflow hidden
            height 0
            width 100%
            padding-bottom 100%
            .image-wrapper {
                width 100% 
            }
            .swiper-pagination {
                position fixed
                bottom 1rem
                color #fff
            }

        }
    }
</style>

