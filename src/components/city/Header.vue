<template>
    <div class="header">
        <router-link to="/home">           
            <div class="header-left"><div class="iconfont icon-back">&#xe62e;</div></div>
        </router-link>
        <div class="header-title">选择城市</div>
    </div>
</template>

<script>
    export default {
        name: 'CityHeader'
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles';
.header {
    position relative
    height .86rem
    line-height .86rem
    background  $bgColor
    color #fff
    .header-left {
        width .64rem
        position absolute
        left 0
        .icon-back {
           text-align center
           font-size .4rem 
           color #fff
        }
    }
    .header-title {
        text-align center
        font-size .32rem
    }
}       
</style>

