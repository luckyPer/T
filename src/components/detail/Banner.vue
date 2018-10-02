<template>
    <div>
        <div class="banner-warp">
            <div class="banner">
                <img class="banner-img" :src="bannerImg" alt="">
            </div>
            <div class="banner-info">
                <p class="banner-title">{{sightName}}</p>
                <p class="banner-number" @click="handelGallaryShow"><span class="iconfont icon-img">&#xe691;</span>{{gallaryImgs.length}}</p>
            </div>
        </div>
        <fade-animation>
            <gallary :imgs="gallaryImgs" v-show="showGallary" v-on:closeGallary="hanleGallaryClose"></gallary>
        </fade-animation>
    </div>
</template>

<script>
    import Gallary from '../gallary/Gallary.vue' 
    import FadeAnimation from '../fade/FadeAnimation.vue' 
    export default {
        name: 'DetailBanner',
        components: {
            Gallary,
            FadeAnimation
        },
        props: {
            sightName: String,
            gallaryImgs: Array,
            bannerImg: String
        },
        data() {
            return {
                showGallary: false
            }
        },
        computed: {
        },
        methods: {
            handelGallaryShow() {
                if(this.gallaryImgs.length > 0)
                    this.showGallary = true;
            },
            hanleGallaryClose() {
                this.showGallary = false;
            }
        }
    }
</script>

<style lang="stylus" scoped>
.banner-warp {
    position relative
    .banner {
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img {
            width 100%
        }
    }
    .banner-info {
        display flex
        position absolute
        right 0
        bottom 0
        left 0
        color #fff
        background-image linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
        .banner-title {
            flex 1
            padding .24rem
            font-size .32rem
        }
        .banner-number {
            height .4rem
            line-height .4rem
            padding 0 .28rem
            margin-top .18rem 
            margin-right .14rem
            background rgba(0, 0, 0, .4)
            border-radius .2rem
            font-size .24rem
            .icon-img {
                margin-right .1rem
                font-size .24rem
            }
        }
    }
}   
</style>

