<template>
<div class="me">         
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
                    title:"火锅店热汤浇头事件研究感悟",
                    subTitle:"事件说明、要做一个好顾客，才能避免各种麻烦、要做一个能忍的服务员，才能立命安身、服务员行业的培训太重要了",
                    attr:"2019-02-07",
                    url:"/img/7.jpg",
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
.me
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
