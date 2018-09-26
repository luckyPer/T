<template>
    <div>      
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
    </div>
</template>

<script>
    import CityHeader from '@/components/city/Header'
    import CitySearch from '@/components/city/Search'
    import CityList from '@/components/city/List'
    export default {
        name: 'city',
        components: {
            CityHeader,
            CitySearch,
            CityList
        },
        data() {
            return {
                
            }
        },
        methods: {
        },
        mounted: function () {
        }
    }
</script>

<style lang="stylus">
@import '~styles/common';
</style>

