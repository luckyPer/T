<template>
    <div class="alphabet">
        <ul class="list">
            <li class="item" v-for="(item, key) in citiesList" :key="key">{{key}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'CityAlphabet',
        props: {
            citiesList: Object
        },
        data() {
            return {

            }
        },
        methods: {

        },
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles';
.alphabet {
    display flex
    flex-direction column
    justify-content center
    position fixed
    top 1.58rem
    right 0
    bottom 1rem
    .item {
        line-height .38rem
        text-align center
        color $bgColor
    }
}


        
</style>

