<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(item,index) in pages" :key="index">
                <div class="icon" v-for="(icon) in item" :key="icon.id">
                    <div class="icon-img-wrapper">
                        <img :src="icon.imgUrl" :alt="icon.imgDesc">
                    </div>
                    <p>{{icon.imgDesc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeIcons',
        data () {
            return {
                iconList: [
                    {
                        id: '0001',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        imgDesc: '景点门票'
                    },
                    {
                        id: '0002',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                        imgDesc: '一日游'
                    },
                    {
                        id: '0003',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                        imgDesc: '上海必游'
                    },
                    {
                        id: '0004',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                        imgDesc: '游乐场'
                    },
                    {
                        id: '0005',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ea/01d081dacb03cc02.png',
                        imgDesc: '赏秋色'
                    },
                    {
                        id: '0006',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png',
                        imgDesc: '普陀山'
                    },
                    {
                        id: '0007',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
                        imgDesc: '上海欢乐谷'
                    },
                    {
                        id: '0008',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
                        imgDesc: '动物园'
                    },
                    {
                        id: '0009',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
                        imgDesc: '上海迪士尼'
                    }
                ],
            }
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
            console.log(this.pages)
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
        padding-bottom 50%
    }
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

