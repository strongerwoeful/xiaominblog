
<template>
<div class="main">
    <mm-header></mm-header>  
    <div class="body">
        <router-view></router-view>
    </div>
    <div class="footer">
     <mm-footer></mm-footer>
     </div>
</div>
</template>

<script type="text/babel">
import  Header from './common/Header.vue'
import  Footer from './common/Footer.vue'
export default {
    components:{
        'mm-header':Header,
        'mm-footer':Footer,
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
.main
    margin 0 auto
    width 100%
    .body
        margin 0 auto
        width 100%
    .footer
        margin 0 auto
        width 100%
</style>
