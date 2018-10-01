<template>
    <div class="module-group recommend-group">
        <p><span class="iconfont icon-like"></span>猜你喜欢</p>
        <ul class="recommend-list">
            <li class="recommend-item" v-for="item in recommendList" :key="item.id">
                <router-link :to="{name: 'detail', params: {id: item.id}}">
                    <div class="recommend-img">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="recommend-info">
                        <div class="recommend-title">{{item.desc}}</div>
                        <div class="recommend-comment">
                            <star :size="24" :score="item.score"></star>
                            <span class="comment">{{item.comment}} 评论</span>
                        </div>              
                        <div class="recommend-price">
                            <span class="price">{{item.price}}</span>起
                            <span class="area">{{item.area}}</span>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import star from '../star/star.vue' 
    export default {
        name: 'HomeRecommend',
        props: {
            recommendList: Array
        },
        components: {
            star
        }
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
                    margin-left .3rem
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

