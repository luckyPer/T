<template>
    <div class="header">
        <div class="header-left"><div class="iconfont icon-back">&#xe62e;</div></div>
        <div class="header-input"><span class="iconfont">&#xe638;</span>输入城市/景点/游玩主题</div>
        <div class="header-right">{{city}}
            <span class="iconfont icon-arrow">&#xe62b;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeHeader',
        props: {          
            city: String
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles';
.header {
    display flex
    height .86rem
    line-height .86rem
    background  $bgColor
    color #fff
    .header-left {
        width .64rem
        float left
        .icon-back {
           text-align center
           font-size .4rem 
        }
    }
    .header-input {
        flex 1
        height .62rem
        line-height .62rem
        margin-top .12rem
        margin-left  .2rem
        padding-left .2rem
        background #fff
        color #ccc
        border-radius .1rem
    }
    .header-right {
        width 1.24rem
        float right
        text-align center
        .icon-arrow {
            font-size .24rem
        }
    }
}


        
</style>

