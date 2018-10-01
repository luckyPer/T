<template>
    <div>
        <router-link to="/" tag="div" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe62e;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/home">           
                <div class="header-left"><div class="iconfont icon-back">&#xe62e;</div></div>
            </router-link>
            <div class="header-title">景点选择</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailHeader',
        data() {
            return {
                showAbs: true,
                opacityStyle: {
                    opacity: 0
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                let top = document.documentElement.scrollTop;
                if(top > 60) {
                    let opacity = top / 140;
                    opacity = opacity > 1 ? 1 : opacity;
                    this.opacityStyle = {
                        opacity
                    };
                    this.showAbs = false;
                } else {
                    this.showAbs = true;
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles';
.header-abs {
    position absolute
    left .2rem
    top .2rem
    width .7rem
    height .7rem
    line-height .7rem
    border-radius .4rem
    background-color rgba(0, 0, 0, .8)
    text-align center
    .header-abs-back {
        color #fff
        font-size .4rem
    }
}
.header-fixed {
    position fixed
    top 0
    right 0
    left 0
    height .86rem
    line-height .86rem
    background  $bgColor
    color #fff
    .header-left {
        width .8rem
        height .8rem
        position absolute
        left .2rem
        .icon-back {
           text-align center
           font-size .4rem 
           color #fff
        }
    }
    .header-title {
        text-align center
        font-size: .4rem;
    }
}
</style>

