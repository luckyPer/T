<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in pages" :key="index">
                <div class="icon" v-for="(icon) in item" :key="icon.id">
                    <div class="icon-img-wrapper">
                        <img :src="icon.imgUrl" :alt="icon.imgDesc">
                    </div>
                    <p>{{icon.imgDesc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeIcons',
        data () {
            return {
                 swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    autoplay: false
                }
            }
        },
        props: {
            iconList: Array
        },
        computed: {
            pages () {
                const pages = [];
                this.iconList.forEach((item, index) => {
                    const page = Math.floor(index / 8);
                    if(!pages[page]) pages[page] = [];
                    pages[page].push(item);
                });
                return pages;
            }
        },
        mounted () {
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles';
@import '~styles/mixins';
.icons {
    background-color #fff
    >>> .swiper-container {        
        height 0
        padding-bottom 55%
    }
    .icon {
        position relative
        overflow hidden
        float left
        width 25%
        padding-bottom 24% 
        .icon-img-wrapper {
            position absolute;
            top 0
            left 0
            right 0
            bottom .22rem
            padding .25rem
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
            ellipsis()
        }
    }
}
</style>

