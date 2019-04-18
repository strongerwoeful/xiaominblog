<template>
<div class="home">         
                   <div class="item" v-for="(item,index) in dataList" :key="index">
                    <div class="media">
                           <img width="300px" height="200px" :src="item.url" alt="" />
                       </div>
                       <div class="content" @click="goPage(item)">
                           <div class="title" v-text="item.title"></div>
                           <div class="sub-title" v-text="item.subTitle"></div> 
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
                    url:"/img/1.jpg"
                 
                },
                 {
                    title:"关于可能全面停止视频录制的一则通告",
                    subTitle:"通知内容、关于第一条、关于第二条",
                    attr:" 2019-08-09",
                    url:"/img/2.jpg",
                    content:'开心的夏天.'
                },
                 {
                    title:"体验海底捞",
                    subTitle:"序、初次体验海底捞 服务意识体验 二三次之体验、最后尾结",
                    attr:"2019-04-07",
                    url:"/img/3.jpg",
                    content:'愿能再次相遇!'
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
                },
                 {
                    title:"做到“不欺骗”到底有多难？",
                    subTitle:"大学实习期、逐步成型、有意和无意的欺骗、想“不欺骗”，非常难、诚信不仅靠决心，更多靠能力",
                    attr:" 2019-03-09",
                    url:"/img/6.jpg",
                    content:'会是美好的夏天.'
                },
                 {
                    title:"火锅店热汤浇头事件研究感悟",
                    subTitle:"事件说明、要做一个好顾客，才能避免各种麻烦、要做一个能忍的服务员，才能立命安身、服务员行业的培训太重要了",
                    attr:"2019-02-07",
                    url:"/img/7.jpg",
                    content:'会越来越好'
                },
                 {
                    title:"一家有活力的照相馆",
                    subTitle:"经营模式、定位准确、价格风险、免费模式、返利模式、社交模式、真相大于一切",
                    attr:"2019-01-01",
                    url:"/img/8.jpg",
                    content:'加油'
                },
                {
                    title:"从《搜索》中探究什么是道德",
                    subTitle:"序、道德和犯罪、道德下的权力失控、什么是道德、教科书里的道德、道德标杆只是时代的产物、大逃杀下的道德崩溃、道德只是丛林法则的分支、道德的前提是公平公正",
                    attr:"2018-9-07",
                    url:"/img/9.jpg",
                    content:'会越来越好'
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
        width 80%
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
