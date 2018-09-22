<template>
    <div class="module-group recommend-group">
        <p><span class="iconfont icon-like"></span>猜你喜欢</p>
        <ul class="recommend-list">
            <li class="recommend-item">
                <a href="">
                    <div class="recommend-img">
                        <img src="http://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_200x200_46052773.jpg" alt="">
                    </div>
                    <div class="recommend-info">
                        <div class="recommend-title">上海杜莎夫人蜡像馆</div>
                        <div class="recommend-comment">
                            <span class="star"></span>
                            <span class="comment">1212 评论</span>
                        </div>              
                        <div class="recommend-price">
                            <span class="price">78</span>起
                            <span class="area">黄浦区</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HomeRecommend'
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles';
.recommend-group {
    padding-top .2rem
    padding-left .2rem
    .icon-like {
        color red
    }
    .recommend-item {
        overflow hidden
        padding .2rem 0
        border-bottom 1px solid #e0e0e0
        .recommend-img {
            float left
            width 2rem
            height 2rem
            img {
                width 100%
            }
        }
        .recommend-info {
            overflow hidden
            padding-left .2rem
            .recommend-title {
                height .44rem
                margin-top .2rem
                color #212121
                font-size .32rem
            }
            .recommend-comment {
                height .34rem
                margin-top: .14rem;
                .comment {
                    color #616161
                    font-size .24rem
                }
            }
            .recommend-price {
                position relative
                margin-top .3rem
                color #616161
                font-size .24rem
                .price {
                    color #ff8300
                    font-size .4rem
                }
                .area {
                    position absolute
                    right .24rem
                    bottom 0
                    margin-right .24rem
                }
            }
        }
    }

}
</style>

