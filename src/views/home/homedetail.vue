<template>
<div id="wrapper">
      <div class="item">
        <div class="content">
                          <div class="title" v-text="item.title"></div>
                          <div class="attr" v-text="item.attr"> 2018-08-16</div>
                          <div class="media">
                             <img width="880" height="480" :src="item.url" alt="" />
                          </div>
             </div>     
                 <div class="sub-name">     
                        <div class="sub" v-text="item.sub"></div> 
                            <div class="sub-title" v-text="item.content">
                            </div> 
                             <div class="sub-con" v-text="item.con"></div>
                        <div class="sub1" v-text="item.sub1"></div> 
                            <div class="sub-title1" v-text="item.content1"></div> 
                            <div class="sub-con1" v-text="item.con1"></div>
                        <div class="sub2" v-text="item.sub2"></div> 
                            <div class="sub-title2" v-text="item.content2"></div>
                            <div class="sub-con2" v-text="item.con2"></div>
                        <div class="sub3" v-text="item.sub3"></div> 
                            <div class="sub-title3" v-text="item.content3"></div>
                             <div class="sub-con3" v-text="item.con3"></div>
                              <div class="sub-con0" v-text="item.con0"></div>
                        <div class="sub4" v-text="item.sub4"></div> 
                            <div class="sub-title4" v-text="item.content4"></div>
                             <div class="sub-con4" v-text="item.con4"></div>
                              <div class="sub-con5" v-text="item.con5"></div>
              </div> 
             
     </div> 
</div>      
</template>
<script type="text/babel">
export default {
    data(){
        return{
        item:[],
         }
},
 created() {
        this.item = this.$route.params.item;
        console.log(this.$route.params.item);
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
#wrapper
    width 100%
    height auto 
    padding 20px 12px
    background #f0f0f0
    .item
        padding 2px
        flex-direction row
        overflow hidden
        height auto
        width 100%
        .content 
            line-height 0px
            cursor pointer
            text-align center
            .title
                line-height 40px
                font-size 26px
                font-weight 700
                text-align center
                color #666666
            .attr
                line-height 40px
                font-weight 200
                font-size 12px
                text-align center
                color #666666
        .sub-name
            line-height 0px
            cursor pointer
            margin-left 160px
            margin-right 160px
            .sub
                text-indent 2em
                line-height 30px
                font-weight 700
                font-size 16px
                color #444444
                margin-left 40px
            .sub-title
                text-indent 2em
                line-height 30px
                font-weight 200
                font-size 16px
                color #444444
                margin-left 40px
            .sub-con
                text-indent 2em
                line-height 30px
                font-weight 200
                font-size 16px
                color #444444
                margin-left 40px
            .sub-con1
                text-indent 2em
                line-height 30px
                font-weight 200
                font-size 16px
                color #444444
                margin-left 40px
            .sub-con2
                text-indent 2em
                line-height 30px
                font-weight 200
                font-size 16px
                color #444444
                margin-left 40px
            .sub-con3
                text-indent 2em
                line-height 30px
                font-weight 200
                font-size 16px
                color #444444
                margin-left 40px
            .sub-con4
                text-indent 2em
                line-height 30px
                font-weight 200
                font-size 16px
                color #444444
                margin-left 40px
            .sub-con5
                text-indent 2em
                line-height 30px
                font-weight 200
                font-size 16px
                color #444444
                margin-left 40px
            .sub-con0
                text-indent 2em
                line-height 30px
                font-weight 200
                font-size 16px
                color #444444
                margin-left 40px
            .sub1
                text-indent 2em
                line-height 30px
                font-weight 700
                font-size 16px
                color #444444
                margin-left 40px
            .sub-title1
                text-indent 2em
                line-height 30px
                font-weight 200
                font-size 16px
                color #444444
                margin-left 40px
            .sub2
                text-indent 2em
                line-height 30px
                font-weight 700
                font-size 16px
                color #444444
                margin-left 40px
            .sub-title2
                text-indent 2em
                line-height 30px
                font-weight 200
                font-size 16px
                color #444444
                margin-left 40px
            .sub3
                text-indent 2em
                line-height 30px
                font-weight 700
                font-size 16px
                color #444444
                margin-left 40px
            .sub-title3
                text-indent 2em
                line-height 30px
                font-weight 200
                font-size 16px
                color #444444
                margin-left 40px
            .sub4
                text-indent 2em
                line-height 30px
                font-weight 700
                font-size 16px
                color #444444
                margin-left 40px
            .sub-title4
                text-indent 2em
                line-height 30px
                font-weight 200
                font-size 16px
                color #444444
                margin-left 40px
            img
                border-radius 4px
</style>