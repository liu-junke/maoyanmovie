<template>
    <div class="layout-box">
        <Tab></Tab>
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
        <TabBar></TabBar>
    </div>
</template>

<script>
import Tab from '../components/common/Tab'
import TabBar from '../components/common/TabBar'
import Home from '../views/home/index'
export default {
    components:{
        Tab,TabBar,Home
    }
}
</script>

<style lang="stylus" scoped>
.layout-box
  height 100%
  display flex
  flex-direction column
</style>