<template>
    <div>
        <div class="search">
            <input v-model="keyword" @focus="inputFocus()" @blur="inputBlur()" type="text" placeholder="输入城市名或拼音" class="search-input">
        </div>
        <div class="search-content" :class="{'search-cover': showCover}" v-show="showSearchContent">
            <ul class="item-list">
                <li class="item-wrapper border-bottom" v-for="item in list" :key="item.id">
                    <div class="item">{{item.name}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: 'CitySearch',
        data(){
            return {
                keyword: '',
                list:[],
                timeClear: null,
                showCover: false,
                showSearchContent: false
            }
        },
        props: {
            citiesList: Object
        },
        methods: {
            inputFocus() {
                if(this.keyword.length ==  0) {
                    this.showCover = true;
                    this.showSearchContent = true;
                }
                // else {
                //     this.showCover = false;
                // }
            },
            inputBlur() {
                this.showCover = false;
                if(this.keyword.length ==  0) {
                    this.showSearchContent = false;
                }
            }
        },        
        mounted () {
            const wrapper = document.querySelector('.search-content');
            this.scroll = new BScroll(wrapper);            
        },
        watch: {
            keyword() {
                if(this.keyword.length > 0) {
                    this.showCover = false;
                    if(this.timeClear) clearTimeout(this.timeClear);
                    this.timeClear = setTimeout(() => {
                        const result = [];
                        for( let i in this.citiesList) {
                            this.citiesList[i].forEach(element => {
                                if(element.spell.indexOf(this.keyword.toLowerCase()) > -1 ||element.name.indexOf(this.keyword) > -1) {
                                    result.push(element);
                                }
                            });
                        }
                        if(result.length == 0) {
                            result.push({
                                'id': 0,
                                'name': '无结果'
                            });
                        }
                        this.list = result;
                    });
                } else {
                    this.list = [];
                    this.showCover = true;
                }
            }
        }
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
.search-cover
    background-color rgba(7, 17, 27, .65) !important 
.search-content {
    position absolute
    top 1.58rem
    right 0
    bottom 0
    left 0
    overflow hidden
    z-index 1000
    background-color #fff
    .item-list {       
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

