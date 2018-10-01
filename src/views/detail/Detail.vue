<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="container"></div>
    </div>
</template>

<script>
    import DetailBanner from '@/components/detail/Banner'
    import DetailHeader from '@/components/detail/Header'
    export default {
        name: 'Detail',
        components: {
            DetailBanner,
            DetailHeader
        },
        data() {
            return {
                detailId: this.$route.params.id
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

