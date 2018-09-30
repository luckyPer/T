<template>
    <div>
        <div class="banner-warp">
            <div class="banner">
                <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_600x330_1be7ea5e.jpg" alt="">
            </div>
            <div class="banner-info">
                <p class="banner-title">上海杜莎夫人蜡像馆(AAAA景区)</p>
                <p class="banner-number"><span class="iconfont icon-img">&#xe691;</span>39</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailBanner'
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

