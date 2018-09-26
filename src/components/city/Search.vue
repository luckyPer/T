<template>
    <div class="search">
        <input type="text" placeholder="输入城市名或拼音" class="search-input">
    </div>
</template>

<script>
    export default {
        name: 'CitySearch'
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles';
.search {
    height .72rem
    padding 0 .1rem
    background-color $bgColor
    .search-input {
        box-sizing border-box
        width 100%
        height .62rem
        line-height .62rem
        padding 0 .1rem
        text-align center
        border-radius .06rem
        color #666
    }
}    
</style>

