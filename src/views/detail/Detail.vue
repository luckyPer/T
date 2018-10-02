<template>
    <div>
        <detail-banner :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" :sightName="sightName"></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
        <div class="container"></div>
    </div>
</template>

<script>
    import axios from 'axios'
    import DetailBanner from '@/components/detail/Banner'
    import DetailHeader from '@/components/detail/Header'
    import DetailList from '@/components/detail/List'
    export default {
        name: 'Detail',
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        },
        data() {
            return {
                detailId: '',
                list: [],
                sightName: '',
                gallaryImgs: [],
                bannerImg: ''
            }
        },
        methods: {
            ajxGetDetailInfo() {
                axios.get('/api/detail.json', {
                    params: {
                        id: this.detailId
                    }
                }).then((response) => {
                    const res = response.data;
                    if(res.status) {
                        this.list = res.data.categoryList;
                        this.sightName = res.data.sightName;
                        this.gallaryImgs = res.data.gallaryImgs;
                        this.bannerImg = res.data.bannerImg;
                    }
                });
            }
        },
        mounted() {
            this.detailId = this.$route.params.id;
            this.ajxGetDetailInfo();
        }
        
    }
</script>

<style lang="stylus" scoped>
@import '~styles/common';
.container {
    height 50rem
}
</style>

