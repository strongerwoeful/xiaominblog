<template>
<div class="content">
    <div class="wrapper">
          <h1 class="title">读《爱情心理学》第1篇：吸引力和印象管理</h1>
          <div class="text">2019.10.26</div>
      </div>
            <div class="media">
                <img src="/aiqing1.png" width="400" height="300" alt="" />
          </div>
          <div class="dec">
            <p></p>
          </div>
      </div>
    </div>
  </div>      
</template>
<script type="text/babel">
export default {
    data(){
        return{
        }
    },
    props:{

    },
    methods:{
      
        }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
 .content
    position: relative
    overflow: hidden
    border-color : #a0a0a0 
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
</style>