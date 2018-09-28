<template>
    <div class="list" ref="wrapper">
        <div class="content">
            <div class="area">
                <h2 class="title">当前城市</h2>
                <ul class="button-list clearfix">
                    <li class="button-wrapper">
                        <div class="button">{{city}}</div>
                    </li>
                </ul>
            </div>
            <div class="area">
                <h2 class="title">热门城市</h2>
                <ul class="button-list clearfix">
                    <li class="button-wrapper" v-for="item in hotCitiesList" :key="item.id">
                        <div class="button" @click="handelCityClick(item.name)">{{item.name}}</div>
                    </li>
                </ul>
            </div>
            <div class="area" v-for="(item, key) in citiesList" :key="key" :ref="key">
                <h2 class="title">{{key}}</h2>
                <ul class="item-list">
                    <li class="item-wrapper border-bottom" v-for="city in item" :key="city.id">
                        <div class="item" @click="handelCityClick(city.name)">{{city.name}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import { mapState } from 'vuex'
    export default {
        name: 'CityList',
        props: {
            hotCitiesList: Array,
            citiesList: Object,
            cityCode: String
        },
        methods: {
            handelCityClick(city) {
                this.$store.commit('changeCityEvent', city);
                this.$router.push('/');
            }
        },
        mounted () {
            const wrapper = document.querySelector('.list');
            //this.$refs.wrapper
            this.scroll = new BScroll(wrapper);           
        },
        watch: {
            cityCode() {
                //console.log(this.$refs)
                if(this.cityCode)
                    this.scroll.scrollToElement(this.$refs[this.cityCode][0],300)
            }
        },      
        computed: {
            ...mapState(['city'])
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/common';
.border-bottom::before
    border-color : #a1a1a1
        
.list {
    background-color #f5f5f5
    position absolute
    top 1.58rem
    right 0
    bottom 0
    left 0
    overflow hidden
    .title {
        font-size .24rem
        padding .24rem .28rem
    }
    .button-list {
        padding .3rem .3rem .3rem .28rem
        background-color #fff
        .button-wrapper {
            float left
            width 33.3%
        }
        .button {
            margin-top .1rem 
            margin-bottom  .1rem 
            margin-right .35rem
            padding .18rem .1rem
            background-color #eee
            text-align center
            border-radius .06rem
        }
    }
    .item-list {       
        background-color #fff
        padding-left .28rem

        .item-wrapper {
            padding .3rem 0
        }
        .item-wrapper:last-child::before{
            border-color : transparent
        }
    }
}    
</style>

