<template>
<div class="header">
    <div class="wrapper">
      <div class="title-wrapper">
          <div class="title">小敏's Blog</div>
          <div class="text">关注生活、影视、图书、创业的心情随笔！</div>
      </div>
     <div class="title-right">
            <div class="media">
                <img src="./home.png" width="120" height="120" alt="" />
          </div>
          <div class="dec">手机等移动端扫描二维码</div>
      </div>
    </div>
<div class="nav-wrapper">
    <div class="nav">
        <li class="item" v-for="(item,index) in menuList" :key="index" @click="_link(item)">{{item}}</li>
    </div>
    </div>
  </div>      
</template>
<script type="text/babel">
export default {
    data(){
        return{
            menuList:['我的首页','生活札记','图书阅读','创业漫谈','影视分享']
        }
    },
    props:{

    },
    methods:{
         _link(item){
             if(item==='我的首页'){
                 this.$router.push('/Home');
             }
             else if(item==='生活札记'){
                 this.$router.push('/Me');
             }
             else if(item==='图书阅读'){
                 this.$router.push('/Read');
             }
             else if(item==='创业漫谈'){
                 this.$router.push('/Work');
             }
             else if(item==='影视分享'){
                 this.$router.push('/Share')
             }
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
 .header
    position: relative
    overflow: hidden
    border-color: 5px
    background #f0f0f0
    .wrapper
        flex: 1
        height 220px 
        width 100%
        background-color #0077c2
        display: flex
        align-items: center
        border-color: #a0a0a0 
        .title-wrapper
          padding: 70px
          line-height: 24px
          margin-left: 6%
          .title
            display: flex
            line-height: 60px
            font-weight: bold
            font-size: 32px
            color: #fff
          .text
            display: flex
            line-height: 16px
            font-weight: 100
            font-size: 16px
            color: rgba(255,255,255,0.6)
        .title-right
           padding: 70px
           margin-left: 40%
           width: 60px
           media
            position: absolute
            border-radius: 2px
          .dec
            position: absolute
            line-height: 24px
            font-weight: 100
            font-size: 12px
            color rgba(255,255,255,0.6)
            margin-right :120px
    .nav-wrapper  
        height 60px 
        width 100%
        margin-left 210px
       
        .item
           padding 0px
           display flex
           flex-direction row
           overflow hidden
           height 50px
           background #f0f0f0
        .nav
           width 100%
           display inline
           margin auto
           z-index 2
           background-color #fff
        .item
            width 15.2%
            display inline-block
            cursor pointer
         li
            text-align left
            margin 20px auto 0
            font-size 18px
            color: rgba(7,17,27,0.4)
            border: 3px;
            border-color #EFF0F6   
</style>