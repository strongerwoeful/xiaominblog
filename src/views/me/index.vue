<template>
<div id="me">       
                   <div class="item" v-for="(item,index) in dataList" :key="index">
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
</div>
</template>
<script type="text/babel">
export default {
    data(){
        return {
            name:'homedetail',
            dataList:[
                {
                    id:'2',
                    title:"关于可能全面停止视频录制的一则通告",
                    subTitle:"通知内容、关于第一条、关于第二条",
                    attr:" 2019-08-09",
                    url:"/img/2.jpg",
                    sub:"关于第一条",
                    content:"首先是放弃免费视频，早期免费视频是为了吸引用户。模式也较为简单，主站提供下载，然后分发到各大视频平台提供免费观看。而对于收益来说，根本无法考虑。因为这个时候连优酷土豆都还没有做付费视频和会员，外加盗版横行，只能先做名气，而名气的积累需要高质量的视频，否则做的越多，用户也丢的越多。",
                    con:"这本《爱情心理学》是好多年前，在京东购书的赠品，一直不太感兴趣。由于最近在最近围棋下输了，暴露出自己的一些情感盲区，无法很好的处理，甚至犯错。那么，就把这本书捡起来读一读，看看是否能解决心中的那些疑惑。书是老美写的，理论颇高，和国内的鸡汤书籍比起来科学性更强一些，但不接地气。所以，读书笔记就需要理解后，用更通俗的语言表达出来。",
                    sub1:"依恋类型",
                    content1:"60%的人的情感类型是“安全型”，这样的人更容易信任对方，而情感付出的成本最小，从而获取幸福的概率也就越大；第二种是“回避型”，占25%，他们缺乏对情感的信任度，付出的成本较高，直接导致避免付出或避免优先付出；第三种是“焦虑矛盾型”，占15%，这种人群往往患得患失，担心情感不够持久。一般来说吧，大部分人在初次恋爱时，都是“安全型”的。而一部分人群在情感失败后，会转型到后面两种。久而久之，就会变得敏感、多疑、甚至神经质。受过伤害的人在面对下一份情感来临时，总是在确认对方是否合适、是否真诚、是否互补。确认完毕之后，该用哪种依恋类型面对这份情感，取决于这个人的态度和悟性了。智者会采用“安全型”全身心的投入情感，只不过比那些初次恋爱的小白们更加懂得分寸拿捏，不再会犯那些影响关系的低级错误。那些回避的、焦虑矛盾的、自我保护的，总是无法推进双方关系进一步实质性发展，最终很有可能变成一场相互折磨的消耗战。",
                    con1:"实际上，现实情况可能更加复杂。各种类型混搭，那种感觉真的很酸爽。“安全型”安全指数不高的人，容易被后面两种类型感染。而指数高的，又需要不断的给后面两种类型的人提供安全感，渐渐拉回“安全型”，如果不是特别爱，那真的很累很难坚持。如果都是“焦虑矛盾型”，那就上演一出凄惨狗血的情感大剧。",
                    sub2:"吸引力",
                    content2:"不是流传着这样一句话么？始于颜值、陷于才华、忠于人品。本身，这个段子是不成立的。高颜值自带诅咒效应，机会那么多，还要才华何用？才华横溢的人，总是恃才傲物，人品可见一斑。当然，会有那么极少数人突破了这些障碍入驻精英层，但跟你也就没任何关系了。日久才能见人品，相处才能见才华，而第一眼就知道你是不是面容姣好。我们总是肤浅的认为漂亮的人各方面都是比较优秀的，因为它真的比较讨人喜欢。即使是经验丰富的老司机，心里会说：这样的人可能不太靠谱，但身体语言会告诉自己万一自己是错的呢？不试一试怎么会知道呢？所以，美貌所带来的资源效应就非常的强，带来的机会也很多。否则，每年怎么会有那么多人忍心在脸上动刀子呢。俗话说：成也资源、败也资源，美丽本身就是一种诅咒。身边的奉承者何其多，你会疏远那些讲真话的人，让你活在一种幻觉中。他们会掩盖自己的兴趣、性格、收入和癖好等，将自己包装的更好去面对你，包括那颗不知真假的心。那些讨好的话，让你根本不清楚到底是恭维，还是尊重你的能力。你的选择成本、鉴别成本会不断增大，导致选对的几率微乎其微，从而有意识的不信任他人。而颜值相当的两个人，就不会刻意的去使用这些心机，反而更加容易获得一段情感。而一个普通人，总是迷恋高颜值的少数人群，将会丧失你现实身边人群的吸引力，这样危险在于，你可能永远找不到你想要的另一半。",
                    con2:"虽说高颜值很迷人，但机会总不会眷顾你，那样高颜值的吸引力也会逐步降到最低。大多数人，还是觉得那些和自己比较搭的更具吸引力。包括背景、兴趣和品味等。这样的彼此也会更容易喜欢对方，更加容易获得一份情感。两个人越相似就越喜欢对方，这是普遍情况。而相异也可能相吸，收入颇高但长相平平的男士，可以和长相甜美但经济欠佳的女性进行优势互补；脾气暴躁的女孩，可以找到性格温顺的男孩作为依靠。最后一种吸引力，就是犯贱式：得不到的永远是最具吸引力的。要么是迎难而上的冲动，要么是失去后的珍惜。嗯！犯贱。",
                    sub3:"印象管理",
                    content3:"我们总是在进行着印象管理，试图影响着别人对自己的看法。尤其是第一印象，这是他人对你整体信息判断的最大权重。虽然，这种印象可能存在偏差，以至于判断出现片面性。一个女孩和一群女孩打成一片、嘻嘻哈哈，给你的第一印象可能就是活泼开朗、善于社交；而同样一个女孩和一群男孩子这样行径时，可能给你的第一印象就是暧昧撩骚、到处留情。事实上，这都是偏见。",
                    con3:"在印象管理中，有四种常见的管理策略：起始，我们喜欢使用迎合策略，极力的赞美，只要不是带有操纵性或献媚性，它能更好的激发自身的魅力，达成共识；而使用自我推广策略，展现出某方面的成就或是技能，可以得到更多的认可和尊重。虽然它时常冒着风险，伴有吹嘘的嫌疑，但对于相互认同的双方来看，总是利大于弊的；于此相对于的另外两种策略就是：威胁策略和恳求策略，往往是一种无能和懦弱的表现。在可以使用前两种时，避免使用后两种。",
                    con0:"恋人们，往往会将对方理想化，时间流逝会暴露双方更多的缺陷。所以，我们应该积极的修正印象，自我暗示对方已经是最好的了。包容和仁爱，促进着关系长久融洽；而不满和指责，将会影响关系的稳定性。不同的观念也会造成一定的后果，比如爱就不会争吵（有方法的争吵可以更好的稳定关系）、爱就应该心有灵犀（不沟通鬼跟你心有灵犀）、爱就是顺其自然（一般都会死在顺其自然，长久需要套路）、爱包括一见钟情（那是好色）等等。如果你有着幼稚的浪漫主义，你守护不了你的爱人。",
                    sub4:"分享两个小案例",
                    content:"大一时，社交资源匮乏，参加社团第一个认识的女孩是外语系的。她给我的第一印象就是：在梳妆台前不折腾个把小时，绝不出来见人。她穿衣时尚，活泼开朗，在社团和兄弟姐妹打成一片，很好说话也容易接近，对男生的吸引力还是比较大的。交换了手机号码后，宿舍晚间10点熄灯后会有短信交流，也不是每天。白天没有交流，我主动发送短信，偶有回复。晚上也是如此，除非她主动联系。即便是畅聊，也只是她自由发挥谈她自己，不会去关注你。有时聊了一半，十几分钟才回复，有时直接不回复了，让你干等，第二天也不会为此事做个说明。在社团和每个人感觉都很亲切甚至暧昧，私底下也是，只不过敏感问题就直接回避。这样的感觉，就像深陷在泥潭中，进也不是退也不是。有一次，我想更进一步试试，邀约一起吃个饭吧。她欣然答应，而我却瞬间后悔了。她是那种不会拒绝的人，总会让你遐想，但关键时候掉链子的那种。她缺乏安全感，白天总在社团，晚上熄灯后就会找人聊天，而且应该是很多人。她养了一群备胎，但从来不和谁走更进一步。她是典型的“焦躁矛盾型”加“回避型”。而对我来说，好感度在慢慢降低，除了一些活动提醒，私下的闲聊已经不太愿意回复了。当然，她还是谈了一场恋爱，只不过很短暂罢了，纠结。宿舍隔壁的那位就陷得比较深了，当艺术系一个女孩备胎整整一年。投入回报完全不成正比，对方又不愿公开关系。我就问他：你知不知道她有几个男朋友，他回答说肯定不止我一个。当时我就无语了，我为你骄傲~。",
                    con4:"来，第二个，正能量一点。我比较喜欢阅读，图书馆在对面的校区，要走20分钟才能到。大多数人是不会去的，而它又离中文系宿舍最近，所以这里就是他们的私人领地。每周二周四下午没课，会去阅读。时间久了，很多常去的同学都开始面熟。我特别关注一个中文系的女孩，那时正好是夏转秋的季节，有时纯色连衣裙、有时格子装或者背带裤。大多数情况下戴着细边眼镜，偶尔博士伦，满满的文艺范。几次的眼缘和擦肩而过，使我根本读不下去啦。决定开始用不可告人的手段挖坑做陷阱，而一切又那么的顺利，让我总怀疑是她先我一步在挖坑。她性格内敛，不怎么容易接近，如果不是相互认可在关键点上开了绿灯，起初的接近就更加困难。只不过越过这层障碍后，那就变得无话不谈，亲切无比。不在图书馆时，短信交流也是全天式的，并不是只会熄灯后。一般在线都是瞬回，偶尔有所耽搁也会补上。如果出现睡着了，第二天还会道歉，再补上。而交流也随着一对一的相互关注而升级话题，不会只停留在初级阶段而看不到关系进度条的增长。对于备胎问题，性格导致不可能到处撩骚，她会拎得清关系底线，给人十足的安全感。即便是有追求者，她不会像“矛盾焦躁型”那样不拒绝且不接受的养着。有时，她会给我读别人写给她的情书，咨询我怎么回复。如果说不想恋爱，万一有一天恋爱了就打脸；如果说不喜欢你，又怕伤害到别人。那我就提议直接回复：“不好意思！”四个字自行脑补去。所以，她的依恋类型是个十足的“安全型”，不矛盾、不焦躁、不回避。有所认定，就一对一全身心投入，不会出现选择困难，更不会内心折磨。大大方方的去结伴去餐厅，悠闲自然的邀约去爬山。有时，我想扩充一下兴趣范畴，询问了她一些问题。而这个领域，她并不在行，没答得上来。虽说略有遗憾，但加分的是，她回去查询了资料再补上了这些问题。这种被关注度，会让人从内心深处的喜欢，而不是仅靠颜值让生理上迸发的肤浅喜欢，那种喜欢持久且保鲜。由于家庭或环境的影响，不同的人会有一些礼仪的缺失和恶习的不自知。相处久了，她会提醒你这方面的问题，第一次时，还会小心翼翼的提醒，生怕冒犯。",
                    con5:"哎哟，写多了，止住~差不多行了。完毕，收工！"
                },
                 {
                    id:'3',
                    title:"体验海底捞",
                    subTitle:"序、初次体验海底捞 服务意识体验 二三次之体验、最后尾结",
                    attr:"2019-04-07",
                    url:"/img/3.jpg",
                    sub:"序",
                    content:"第一次听说“海底捞”还是在之前的学校，年轻的校长出差培训归来，手上捧着一本《海底捞你学不会》。其实，我本身不屑看这种类型的书，感觉层次有点低。或者说，当时的我太过于年轻。没多久，去书店时，看到畅销书架上摆着这本书，我下意识的翻了翻，“哼”了一声，放回书架，给出了一个可能与事实严重不符的评价：“一本适合放在机场书架上，披着管理外衣的励志成功洗脑书”。至今为止都没有阅读过。",
                    con:"这本《爱情心理学》是好多年前，在京东购书的赠品，一直不太感兴趣。由于最近在最近围棋下输了，暴露出自己的一些情感盲区，无法很好的处理，甚至犯错。那么，就把这本书捡起来读一读，看看是否能解决心中的那些疑惑。书是老美写的，理论颇高，和国内的鸡汤书籍比起来科学性更强一些，但不接地气。所以，读书笔记就需要理解后，用更通俗的语言表达出来。",
                    sub1:"依恋类型",
                    content1:"60%的人的情感类型是“安全型”，这样的人更容易信任对方，而情感付出的成本最小，从而获取幸福的概率也就越大；第二种是“回避型”，占25%，他们缺乏对情感的信任度，付出的成本较高，直接导致避免付出或避免优先付出；第三种是“焦虑矛盾型”，占15%，这种人群往往患得患失，担心情感不够持久。一般来说吧，大部分人在初次恋爱时，都是“安全型”的。而一部分人群在情感失败后，会转型到后面两种。久而久之，就会变得敏感、多疑、甚至神经质。受过伤害的人在面对下一份情感来临时，总是在确认对方是否合适、是否真诚、是否互补。确认完毕之后，该用哪种依恋类型面对这份情感，取决于这个人的态度和悟性了。智者会采用“安全型”全身心的投入情感，只不过比那些初次恋爱的小白们更加懂得分寸拿捏，不再会犯那些影响关系的低级错误。那些回避的、焦虑矛盾的、自我保护的，总是无法推进双方关系进一步实质性发展，最终很有可能变成一场相互折磨的消耗战。",
                    con1:"实际上，现实情况可能更加复杂。各种类型混搭，那种感觉真的很酸爽。“安全型”安全指数不高的人，容易被后面两种类型感染。而指数高的，又需要不断的给后面两种类型的人提供安全感，渐渐拉回“安全型”，如果不是特别爱，那真的很累很难坚持。如果都是“焦虑矛盾型”，那就上演一出凄惨狗血的情感大剧。",
                    sub2:"吸引力",
                    content2:"不是流传着这样一句话么？始于颜值、陷于才华、忠于人品。本身，这个段子是不成立的。高颜值自带诅咒效应，机会那么多，还要才华何用？才华横溢的人，总是恃才傲物，人品可见一斑。当然，会有那么极少数人突破了这些障碍入驻精英层，但跟你也就没任何关系了。日久才能见人品，相处才能见才华，而第一眼就知道你是不是面容姣好。我们总是肤浅的认为漂亮的人各方面都是比较优秀的，因为它真的比较讨人喜欢。即使是经验丰富的老司机，心里会说：这样的人可能不太靠谱，但身体语言会告诉自己万一自己是错的呢？不试一试怎么会知道呢？所以，美貌所带来的资源效应就非常的强，带来的机会也很多。否则，每年怎么会有那么多人忍心在脸上动刀子呢。俗话说：成也资源、败也资源，美丽本身就是一种诅咒。身边的奉承者何其多，你会疏远那些讲真话的人，让你活在一种幻觉中。他们会掩盖自己的兴趣、性格、收入和癖好等，将自己包装的更好去面对你，包括那颗不知真假的心。那些讨好的话，让你根本不清楚到底是恭维，还是尊重你的能力。你的选择成本、鉴别成本会不断增大，导致选对的几率微乎其微，从而有意识的不信任他人。而颜值相当的两个人，就不会刻意的去使用这些心机，反而更加容易获得一段情感。而一个普通人，总是迷恋高颜值的少数人群，将会丧失你现实身边人群的吸引力，这样危险在于，你可能永远找不到你想要的另一半。",
                    con2:"虽说高颜值很迷人，但机会总不会眷顾你，那样高颜值的吸引力也会逐步降到最低。大多数人，还是觉得那些和自己比较搭的更具吸引力。包括背景、兴趣和品味等。这样的彼此也会更容易喜欢对方，更加容易获得一份情感。两个人越相似就越喜欢对方，这是普遍情况。而相异也可能相吸，收入颇高但长相平平的男士，可以和长相甜美但经济欠佳的女性进行优势互补；脾气暴躁的女孩，可以找到性格温顺的男孩作为依靠。最后一种吸引力，就是犯贱式：得不到的永远是最具吸引力的。要么是迎难而上的冲动，要么是失去后的珍惜。嗯！犯贱。",
                    sub3:"印象管理",
                    content3:"我们总是在进行着印象管理，试图影响着别人对自己的看法。尤其是第一印象，这是他人对你整体信息判断的最大权重。虽然，这种印象可能存在偏差，以至于判断出现片面性。一个女孩和一群女孩打成一片、嘻嘻哈哈，给你的第一印象可能就是活泼开朗、善于社交；而同样一个女孩和一群男孩子这样行径时，可能给你的第一印象就是暧昧撩骚、到处留情。事实上，这都是偏见。",
                    con3:"在印象管理中，有四种常见的管理策略：起始，我们喜欢使用迎合策略，极力的赞美，只要不是带有操纵性或献媚性，它能更好的激发自身的魅力，达成共识；而使用自我推广策略，展现出某方面的成就或是技能，可以得到更多的认可和尊重。虽然它时常冒着风险，伴有吹嘘的嫌疑，但对于相互认同的双方来看，总是利大于弊的；于此相对于的另外两种策略就是：威胁策略和恳求策略，往往是一种无能和懦弱的表现。在可以使用前两种时，避免使用后两种。",
                    con0:"恋人们，往往会将对方理想化，时间流逝会暴露双方更多的缺陷。所以，我们应该积极的修正印象，自我暗示对方已经是最好的了。包容和仁爱，促进着关系长久融洽；而不满和指责，将会影响关系的稳定性。不同的观念也会造成一定的后果，比如爱就不会争吵（有方法的争吵可以更好的稳定关系）、爱就应该心有灵犀（不沟通鬼跟你心有灵犀）、爱就是顺其自然（一般都会死在顺其自然，长久需要套路）、爱包括一见钟情（那是好色）等等。如果你有着幼稚的浪漫主义，你守护不了你的爱人。",
                    sub4:"分享两个小案例",
                    content:"大一时，社交资源匮乏，参加社团第一个认识的女孩是外语系的。她给我的第一印象就是：在梳妆台前不折腾个把小时，绝不出来见人。她穿衣时尚，活泼开朗，在社团和兄弟姐妹打成一片，很好说话也容易接近，对男生的吸引力还是比较大的。交换了手机号码后，宿舍晚间10点熄灯后会有短信交流，也不是每天。白天没有交流，我主动发送短信，偶有回复。晚上也是如此，除非她主动联系。即便是畅聊，也只是她自由发挥谈她自己，不会去关注你。有时聊了一半，十几分钟才回复，有时直接不回复了，让你干等，第二天也不会为此事做个说明。在社团和每个人感觉都很亲切甚至暧昧，私底下也是，只不过敏感问题就直接回避。这样的感觉，就像深陷在泥潭中，进也不是退也不是。有一次，我想更进一步试试，邀约一起吃个饭吧。她欣然答应，而我却瞬间后悔了。她是那种不会拒绝的人，总会让你遐想，但关键时候掉链子的那种。她缺乏安全感，白天总在社团，晚上熄灯后就会找人聊天，而且应该是很多人。她养了一群备胎，但从来不和谁走更进一步。她是典型的“焦躁矛盾型”加“回避型”。而对我来说，好感度在慢慢降低，除了一些活动提醒，私下的闲聊已经不太愿意回复了。当然，她还是谈了一场恋爱，只不过很短暂罢了，纠结。宿舍隔壁的那位就陷得比较深了，当艺术系一个女孩备胎整整一年。投入回报完全不成正比，对方又不愿公开关系。我就问他：你知不知道她有几个男朋友，他回答说肯定不止我一个。当时我就无语了，我为你骄傲~。",
                    con4:"来，第二个，正能量一点。我比较喜欢阅读，图书馆在对面的校区，要走20分钟才能到。大多数人是不会去的，而它又离中文系宿舍最近，所以这里就是他们的私人领地。每周二周四下午没课，会去阅读。时间久了，很多常去的同学都开始面熟。我特别关注一个中文系的女孩，那时正好是夏转秋的季节，有时纯色连衣裙、有时格子装或者背带裤。大多数情况下戴着细边眼镜，偶尔博士伦，满满的文艺范。几次的眼缘和擦肩而过，使我根本读不下去啦。决定开始用不可告人的手段挖坑做陷阱，而一切又那么的顺利，让我总怀疑是她先我一步在挖坑。她性格内敛，不怎么容易接近，如果不是相互认可在关键点上开了绿灯，起初的接近就更加困难。只不过越过这层障碍后，那就变得无话不谈，亲切无比。不在图书馆时，短信交流也是全天式的，并不是只会熄灯后。一般在线都是瞬回，偶尔有所耽搁也会补上。如果出现睡着了，第二天还会道歉，再补上。而交流也随着一对一的相互关注而升级话题，不会只停留在初级阶段而看不到关系进度条的增长。对于备胎问题，性格导致不可能到处撩骚，她会拎得清关系底线，给人十足的安全感。即便是有追求者，她不会像“矛盾焦躁型”那样不拒绝且不接受的养着。有时，她会给我读别人写给她的情书，咨询我怎么回复。如果说不想恋爱，万一有一天恋爱了就打脸；如果说不喜欢你，又怕伤害到别人。那我就提议直接回复：“不好意思！”四个字自行脑补去。所以，她的依恋类型是个十足的“安全型”，不矛盾、不焦躁、不回避。有所认定，就一对一全身心投入，不会出现选择困难，更不会内心折磨。大大方方的去结伴去餐厅，悠闲自然的邀约去爬山。有时，我想扩充一下兴趣范畴，询问了她一些问题。而这个领域，她并不在行，没答得上来。虽说略有遗憾，但加分的是，她回去查询了资料再补上了这些问题。这种被关注度，会让人从内心深处的喜欢，而不是仅靠颜值让生理上迸发的肤浅喜欢，那种喜欢持久且保鲜。由于家庭或环境的影响，不同的人会有一些礼仪的缺失和恶习的不自知。相处久了，她会提醒你这方面的问题，第一次时，还会小心翼翼的提醒，生怕冒犯。",
                    con5:"哎哟，写多了，止住~差不多行了。完毕，收工！"
                },
                 {
                    id:'7',
                    title:"火锅店热汤浇头事件研究感悟",
                    subTitle:"事件说明、要做一个好顾客，才能避免各种麻烦、要做一个能忍的服务员，才能立命安身、服务员行业的培训太重要了",
                    attr:"2019-02-07",
                    url:"/img/7.jpg",
                    sub:"序",
                    content:"相识相知相恋就好像情感围棋中的不同时期。单纯的前期，我们理性的投掷着自身优势，让对方了解或吸引；而代入情感的中期，一步步暴露着自己的短板和缺陷；最终还是要面对现实的后期，往往是推掉整个棋盘，更换棋手，重新来过。每段情感都是一堂成长的课，避免在不同的任期上重复触犯。真正能修成正果的，要么是积攒了天时地利人和；要么是互相不断的忍受和妥协；要么就是彼此成长克服各种困难携手并进。这本《爱情心理学》是好多年前，在京东购书的赠品，一直不太感兴趣。由于最近在最近围棋下输了，暴露出自己的一些情感盲区，无法很好的处理，甚至犯错。那么，就把这本书捡起来读一读，看看是否能解决心中的那些疑惑。书是老美写的，理论颇高，和国内的鸡汤书籍比起来科学性更强一些，但不接地气。所以，读书笔记就需要理解后，用更通俗的语言表达出来。",
                    con:"这本《爱情心理学》是好多年前，在京东购书的赠品，一直不太感兴趣。由于最近在最近围棋下输了，暴露出自己的一些情感盲区，无法很好的处理，甚至犯错。那么，就把这本书捡起来读一读，看看是否能解决心中的那些疑惑。书是老美写的，理论颇高，和国内的鸡汤书籍比起来科学性更强一些，但不接地气。所以，读书笔记就需要理解后，用更通俗的语言表达出来。",
                    sub1:"依恋类型",
                    content1:"60%的人的情感类型是“安全型”，这样的人更容易信任对方，而情感付出的成本最小，从而获取幸福的概率也就越大；第二种是“回避型”，占25%，他们缺乏对情感的信任度，付出的成本较高，直接导致避免付出或避免优先付出；第三种是“焦虑矛盾型”，占15%，这种人群往往患得患失，担心情感不够持久。一般来说吧，大部分人在初次恋爱时，都是“安全型”的。而一部分人群在情感失败后，会转型到后面两种。久而久之，就会变得敏感、多疑、甚至神经质。受过伤害的人在面对下一份情感来临时，总是在确认对方是否合适、是否真诚、是否互补。确认完毕之后，该用哪种依恋类型面对这份情感，取决于这个人的态度和悟性了。智者会采用“安全型”全身心的投入情感，只不过比那些初次恋爱的小白们更加懂得分寸拿捏，不再会犯那些影响关系的低级错误。那些回避的、焦虑矛盾的、自我保护的，总是无法推进双方关系进一步实质性发展，最终很有可能变成一场相互折磨的消耗战。",
                    con1:"实际上，现实情况可能更加复杂。各种类型混搭，那种感觉真的很酸爽。“安全型”安全指数不高的人，容易被后面两种类型感染。而指数高的，又需要不断的给后面两种类型的人提供安全感，渐渐拉回“安全型”，如果不是特别爱，那真的很累很难坚持。如果都是“焦虑矛盾型”，那就上演一出凄惨狗血的情感大剧。",
                    sub2:"吸引力",
                    content2:"不是流传着这样一句话么？始于颜值、陷于才华、忠于人品。本身，这个段子是不成立的。高颜值自带诅咒效应，机会那么多，还要才华何用？才华横溢的人，总是恃才傲物，人品可见一斑。当然，会有那么极少数人突破了这些障碍入驻精英层，但跟你也就没任何关系了。日久才能见人品，相处才能见才华，而第一眼就知道你是不是面容姣好。我们总是肤浅的认为漂亮的人各方面都是比较优秀的，因为它真的比较讨人喜欢。即使是经验丰富的老司机，心里会说：这样的人可能不太靠谱，但身体语言会告诉自己万一自己是错的呢？不试一试怎么会知道呢？所以，美貌所带来的资源效应就非常的强，带来的机会也很多。否则，每年怎么会有那么多人忍心在脸上动刀子呢。俗话说：成也资源、败也资源，美丽本身就是一种诅咒。身边的奉承者何其多，你会疏远那些讲真话的人，让你活在一种幻觉中。他们会掩盖自己的兴趣、性格、收入和癖好等，将自己包装的更好去面对你，包括那颗不知真假的心。那些讨好的话，让你根本不清楚到底是恭维，还是尊重你的能力。你的选择成本、鉴别成本会不断增大，导致选对的几率微乎其微，从而有意识的不信任他人。而颜值相当的两个人，就不会刻意的去使用这些心机，反而更加容易获得一段情感。而一个普通人，总是迷恋高颜值的少数人群，将会丧失你现实身边人群的吸引力，这样危险在于，你可能永远找不到你想要的另一半。",
                    con2:"虽说高颜值很迷人，但机会总不会眷顾你，那样高颜值的吸引力也会逐步降到最低。大多数人，还是觉得那些和自己比较搭的更具吸引力。包括背景、兴趣和品味等。这样的彼此也会更容易喜欢对方，更加容易获得一份情感。两个人越相似就越喜欢对方，这是普遍情况。而相异也可能相吸，收入颇高但长相平平的男士，可以和长相甜美但经济欠佳的女性进行优势互补；脾气暴躁的女孩，可以找到性格温顺的男孩作为依靠。最后一种吸引力，就是犯贱式：得不到的永远是最具吸引力的。要么是迎难而上的冲动，要么是失去后的珍惜。嗯！犯贱。",
                    sub3:"印象管理",
                    content3:"我们总是在进行着印象管理，试图影响着别人对自己的看法。尤其是第一印象，这是他人对你整体信息判断的最大权重。虽然，这种印象可能存在偏差，以至于判断出现片面性。一个女孩和一群女孩打成一片、嘻嘻哈哈，给你的第一印象可能就是活泼开朗、善于社交；而同样一个女孩和一群男孩子这样行径时，可能给你的第一印象就是暧昧撩骚、到处留情。事实上，这都是偏见。",
                    con3:"在印象管理中，有四种常见的管理策略：起始，我们喜欢使用迎合策略，极力的赞美，只要不是带有操纵性或献媚性，它能更好的激发自身的魅力，达成共识；而使用自我推广策略，展现出某方面的成就或是技能，可以得到更多的认可和尊重。虽然它时常冒着风险，伴有吹嘘的嫌疑，但对于相互认同的双方来看，总是利大于弊的；于此相对于的另外两种策略就是：威胁策略和恳求策略，往往是一种无能和懦弱的表现。在可以使用前两种时，避免使用后两种。",
                    con0:"恋人们，往往会将对方理想化，时间流逝会暴露双方更多的缺陷。所以，我们应该积极的修正印象，自我暗示对方已经是最好的了。包容和仁爱，促进着关系长久融洽；而不满和指责，将会影响关系的稳定性。不同的观念也会造成一定的后果，比如爱就不会争吵（有方法的争吵可以更好的稳定关系）、爱就应该心有灵犀（不沟通鬼跟你心有灵犀）、爱就是顺其自然（一般都会死在顺其自然，长久需要套路）、爱包括一见钟情（那是好色）等等。如果你有着幼稚的浪漫主义，你守护不了你的爱人。",
                    sub4:"分享两个小案例",
                    content:"大一时，社交资源匮乏，参加社团第一个认识的女孩是外语系的。她给我的第一印象就是：在梳妆台前不折腾个把小时，绝不出来见人。她穿衣时尚，活泼开朗，在社团和兄弟姐妹打成一片，很好说话也容易接近，对男生的吸引力还是比较大的。交换了手机号码后，宿舍晚间10点熄灯后会有短信交流，也不是每天。白天没有交流，我主动发送短信，偶有回复。晚上也是如此，除非她主动联系。即便是畅聊，也只是她自由发挥谈她自己，不会去关注你。有时聊了一半，十几分钟才回复，有时直接不回复了，让你干等，第二天也不会为此事做个说明。在社团和每个人感觉都很亲切甚至暧昧，私底下也是，只不过敏感问题就直接回避。这样的感觉，就像深陷在泥潭中，进也不是退也不是。有一次，我想更进一步试试，邀约一起吃个饭吧。她欣然答应，而我却瞬间后悔了。她是那种不会拒绝的人，总会让你遐想，但关键时候掉链子的那种。她缺乏安全感，白天总在社团，晚上熄灯后就会找人聊天，而且应该是很多人。她养了一群备胎，但从来不和谁走更进一步。她是典型的“焦躁矛盾型”加“回避型”。而对我来说，好感度在慢慢降低，除了一些活动提醒，私下的闲聊已经不太愿意回复了。当然，她还是谈了一场恋爱，只不过很短暂罢了，纠结。宿舍隔壁的那位就陷得比较深了，当艺术系一个女孩备胎整整一年。投入回报完全不成正比，对方又不愿公开关系。我就问他：你知不知道她有几个男朋友，他回答说肯定不止我一个。当时我就无语了，我为你骄傲~。",
                    con4:"来，第二个，正能量一点。我比较喜欢阅读，图书馆在对面的校区，要走20分钟才能到。大多数人是不会去的，而它又离中文系宿舍最近，所以这里就是他们的私人领地。每周二周四下午没课，会去阅读。时间久了，很多常去的同学都开始面熟。我特别关注一个中文系的女孩，那时正好是夏转秋的季节，有时纯色连衣裙、有时格子装或者背带裤。大多数情况下戴着细边眼镜，偶尔博士伦，满满的文艺范。几次的眼缘和擦肩而过，使我根本读不下去啦。决定开始用不可告人的手段挖坑做陷阱，而一切又那么的顺利，让我总怀疑是她先我一步在挖坑。她性格内敛，不怎么容易接近，如果不是相互认可在关键点上开了绿灯，起初的接近就更加困难。只不过越过这层障碍后，那就变得无话不谈，亲切无比。不在图书馆时，短信交流也是全天式的，并不是只会熄灯后。一般在线都是瞬回，偶尔有所耽搁也会补上。如果出现睡着了，第二天还会道歉，再补上。而交流也随着一对一的相互关注而升级话题，不会只停留在初级阶段而看不到关系进度条的增长。对于备胎问题，性格导致不可能到处撩骚，她会拎得清关系底线，给人十足的安全感。即便是有追求者，她不会像“矛盾焦躁型”那样不拒绝且不接受的养着。有时，她会给我读别人写给她的情书，咨询我怎么回复。如果说不想恋爱，万一有一天恋爱了就打脸；如果说不喜欢你，又怕伤害到别人。那我就提议直接回复：“不好意思！”四个字自行脑补去。所以，她的依恋类型是个十足的“安全型”，不矛盾、不焦躁、不回避。有所认定，就一对一全身心投入，不会出现选择困难，更不会内心折磨。大大方方的去结伴去餐厅，悠闲自然的邀约去爬山。有时，我想扩充一下兴趣范畴，询问了她一些问题。而这个领域，她并不在行，没答得上来。虽说略有遗憾，但加分的是，她回去查询了资料再补上了这些问题。这种被关注度，会让人从内心深处的喜欢，而不是仅靠颜值让生理上迸发的肤浅喜欢，那种喜欢持久且保鲜。由于家庭或环境的影响，不同的人会有一些礼仪的缺失和恶习的不自知。相处久了，她会提醒你这方面的问题，第一次时，还会小心翼翼的提醒，生怕冒犯。",
                    con5:"哎哟，写多了，止住~差不多行了。完毕，收工！"
                }
            ]
        }
    },
     methods:{
        goPage(item){
           this.$router.push({
              name: 'homedetail',
              params: {
                  item: item,
              }
           });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
#me
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
