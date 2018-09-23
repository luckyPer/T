<template>
    <div class="weekend-group">
        <h2>周末去哪儿</h2>
        <ul class="weekend-list">
            <li class="weekend-item" v-for="item in weekendList" :key="item.id">
                <a href="">
                    <div class="weekend-img">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="weekend-info">
                        <div class="weekend-name">
                            {{item.name}}
                        </div>              
                        <div class="weekend-desc">
                            {{item.desc}}
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HomeWeekend',
        props: {
            weekendList: Array
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles';
.weekend-group {
    h2 {
        height .8rem
        line-height .8rem
        padding-left .2rem
    }
    .weekend-item {
        overflow hidden 
        margin-bottom .12rem
        .weekend-img {
            overflow hidden
            height 0
            padding-bottom 37.333%
            img {
                width 100%
            }
        }
        .weekend-info {
            overflow hidden
            padding-left .2rem
            padding-bottom .2rem
            background-color #fff
            .weekend-name {
                height .44rem
                margin-top .2rem
                color #212121
                font-size .32rem
            }
            .weekend-desc {
                height .34rem
                margin-top: .14rem;
                color #616161
                font-size .24rem
            }
        }
    }

}
</style>

