<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img-wrapper">
                <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p>景点门票</p>
        </div>
        <div class="icon">
            <div class="icon-img-wrapper">
                <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p>景点门票</p>
        </div>
        <div class="icon">
            <div class="icon-img-wrapper">
                <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p>景点门票</p>
        </div>
        <div class="icon">
            <div class="icon-img-wrapper">
                <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p>景点门票</p>
        </div>
        <div class="icon">
            <div class="icon-img-wrapper">
                <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p>景点门票</p>
        </div>
        <div class="icon">
            <div class="icon-img-wrapper">
                <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p>景点门票</p>
        </div>
        <div class="icon">
            <div class="icon-img-wrapper">
                <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p>景点门票</p>
        </div>
        <div class="icon">
            <div class="icon-img-wrapper">
                <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p>景点门票</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeIcons',
        data () {
            return {
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles';
.icons {
    overflow hidden
    height 0
    padding-bottom 50%
    .icon {
        position relative
        overflow hidden
        float left
        width 25%
        padding-bottom 25% 
        .icon-img-wrapper {
            position absolute;
            top 0
            left 0
            right 0
            bottom .22rem
            padding .2rem
            text-align center
            img {
                height 100%
            }
        }
        p {
            position absolute
            right 0
            bottom .1rem
            left 0
            color $darkTextColor
            text-align center
        }
    }
}
</style>

