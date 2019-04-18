
<template>
<div class="main">
    <div class="header">
        <mm-header></mm-header>  
    </div>
    <div class="body">
        <router-view></router-view>
    </div>
    <div class="footer">
       <mm-footer></mm-footer>
    </div>
</div>
</template>

<script type="text/babel">
import Footer from './common/Footer.vue'
export default {
    components:{
        'mm-footer':Footer,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
.main
    margin 0 auto
    width 100%
</style>
