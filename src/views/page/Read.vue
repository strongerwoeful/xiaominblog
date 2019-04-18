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
                    title:"读《爱情心理学》第1篇：吸引力和印象管理",
                    subTitle:"序、依恋类型、吸引力、印象管理、分享两个小案例",
                    attr:"2019.10.26",
                    url:"/img/1.jpg",
                    content:'至今最开心.'
                },
                 {
                    title:"读《上帝的跳蚤》[下]",
                    subTitle:"故意遗忘的历史、女郎的微笑、找到露西、爱之病、疫苗之殇、重回医学基础理论",
                    attr:"2019-04-01",
                    url:"/img/4.jpg",
                    content:'加油'
                },
                        {
                    title:"读《上帝的跳蚤》[上]",
                    subTitle:"图书概况、欧洲黑死病、败死九宫山、揭秘鼠疫杆菌、被斑点恶魔毁灭的文明、天女散花、漆黑中的摸索、免疫学之父",
                    attr:"2019-03-16",
                    url:"/img/5.jpg",
                    content:'开心.'
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
