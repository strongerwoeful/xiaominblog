<template>
<div class="wrapper">
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
     methods: {
        getUrl(url){
            return '@/assets/'+url;
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
.wrapper
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
            margin-left 120px
            margin-right 120px
            .sub
                line-height 40px
                font-weight 700
                font-size 20px
                color #444444
                margin-left 40px
            .sub-title
                line-height 40px
                font-weight 200
                font-size 20px
                color #444444
                margin-left 40px
            .sub1
                line-height 40px
                font-weight 700
                font-size 20px
                color #444444
                margin-left 40px
            .sub-title1
                line-height 40px
                font-weight 200
                font-size 20px
                color #444444
                margin-left 40px
            .sub2
                line-height 40px
                font-weight 700
                font-size 20px
                color #444444
                margin-left 40px
            .sub-title2
                line-height 40px
                font-weight 200
                font-size 20px
                color #444444
                margin-left 40px
            .sub3
                line-height 40px
                font-weight 700
                font-size 20px
                color #444444
                margin-left 40px
            .sub-title3
                line-height 40px
                font-weight 200
                font-size 20px
                color #444444
                margin-left 40px
            .sub4
                line-height 40px
                font-weight 700
                font-size 20px
                color #444444
                margin-left 40px
            .sub-title4
                line-height 40px
                font-weight 200
                font-size 20px
                color #444444
                margin-left 40px
            img
                border-radius 4px
</style>