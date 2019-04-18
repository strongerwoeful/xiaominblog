<template>
<div class="home">         
                   <div class="item"  v-for="(item,index) in dataList" :key="index">
                    <div class="media">
                           <img width="300px" height="200px" :src="item.url" alt="" />
                       </div>
                       <div class="content" @click="goPage(item)">
                           <div class="title" v-text="item.title"></div>
                           <div class="sub-title" v-text="item.subTitle"> 至今最开心的夏天，愿能再次相遇</div> 
                          <div class="attr" v-text="item.attr"> 2018-08-16</div>
                       </div>    
                   </div>
</div>
</template>
<script type="text/babel">
export default {
    data(){
        return {
            dataList:[
                 {
                    title:"做到“不欺骗”到底有多难？",
                    subTitle:"大学实习期、逐步成型、有意和无意的欺骗、想“不欺骗”，非常难、诚信不仅靠决心，更多靠能力",
                    attr:" 2019-03-09",
                    url:"/img/6.jpg",
                    content:'会是美好的夏天.'
                 },
                  {
                    title:"一家有活力的照相馆",
                    subTitle:"经营模式、定位准确、价格风险、免费模式、返利模式、社交模式、真相大于一切",
                    attr:"2019-01-01",
                    url:"/img/8.jpg",
                    content:'加油'
                }
            ]
        }
    },
    methods:{
        getUrl(url){
            return '@/assets/'+url;
        },
        goPage(item){
            this.$router.push('/Medetail')
            localStorage.setItem('detail',JSON.stringify(item));
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
.home
    width 100%
    height auto 
    padding 20px 12px
    background #f0f0f0
    .item
        padding 5px
        display flex
        flex-direction row
        overflow hidden
        height 240px
        width 100%
        margin-left 200px
        .content 
            line-height 50px
            cursor pointer
            margin-left 20px
            .title
                line-height 70px
                font-size 32px
                font-weight 600
                color #0f0f0f
                font-family SimSun
            .sub-title
                line-height 40px
                font-weight 200
                font-size 20px
                color #444444
            .attr
                line-height 50px
                font-weight 100
                font-size 16px
                color #444444
        img
           border-radius 4px
</style>
