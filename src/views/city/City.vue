<template>
    <div>      
        <city-header></city-header>
        <city-search :citiesList="citiesList"></city-search>
        <city-list :hotCitiesList="hotCitiesList" :citiesList="citiesList" :cityCode="letter"></city-list>
        <city-alphabet :citiesList="citiesList" v-on:changeCityList="change"></city-alphabet>
    </div>
</template>

<script>
    import axios from 'axios'
    import CityHeader from '@/components/city/Header'
    import CitySearch from '@/components/city/Search'
    import CityList from '@/components/city/List'
    import CityAlphabet from '@/components/city/Alphabet'
    export default {
        name: 'city',
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        data() {
            return {
                hotCitiesList: [],
                citiesList: {},
                letter: ""
            }
        },
        methods: {
            getCities() {
                axios.get('/api/city.json').then((response) => {
                    const res = response.data;
                    if(res.status) {
                        this.citiesList = res.data.cities;
                        this.hotCitiesList = res.data.hotCities;
                    }
                });
            },
            change(msg) {
                this.letter = msg
            }
        },
        mounted () {
            this.getCities();
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/common';
</style>

