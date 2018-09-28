<template>
  <div id="app">
    <router-view/>
    <!-- <keep-alive>
      <router-view/>
    <keep-alive/>
    使用 keep-alive 会把第一次被创建的view缓存到内存中,相应的,在生命周期中会多出activated钩子函数, 在activated中可以去改变缓存
     -->
  </div>
</template>
<style lang="stylus">
#app {
  background-color #f5f5f5
}
</style>
