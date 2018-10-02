<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
        <div class="container"></div>
    </div>
</template>

<script>
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
                detailId: this.$route.params.id,
                list: [
                    {
                        title: '成人票',
                        children: [
                            {
                                title: '三联票',
                                children: [
                                    {
                                        title: '12154'
                                    }
                                ]
                            },
                            {
                                title: '三联票2'
                            }
                        ]
                    },
                    {title: '学生票'},
                    {title: '儿童票'},
                    {title: '特价票'}
                ]
            }
        }
        
    }
</script>

<style lang="stylus" scoped>
@import '~styles/common';
.container {
    height 50rem
}
</style>

