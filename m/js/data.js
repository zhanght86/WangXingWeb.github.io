/**
 * Created by Administrator on 2017/4/19.
 */
var item=["movieNum","bookNum","sportNum","travelNum","frontEndNum"];
var url=["https://api.douban.com/v2/movie/subject/","https://api.douban.com/v2/book/isbn/"];
var data=[
    /*电影数据*/
    [
        {id:24875534,name:"十二公民"},
        {id:6872244,name:"飞跃老人院"},
        {id:1297630,name:"灵异第六感"},
        {id:25986180,name:"釜山行"},
        {id:1790577,name:"放逐"}
     ],
    /*读书数据*/
    [
        {
            id:9787221058041,
            name:"平凡的世界",
            article:'<img alt="image" src="http://www.iwangxing.cn/m/img/pfdsj.jpg"/> <p>Posted on Apirl 22,2017</p><p>永远的置顶推荐，这是影深的一部小说，也可能是因为这部小说我喜欢读长篇，特别是动辄几十万字长则上百万字的巨著，因为读长篇呈现给我的是一个完整的世界，拿路遥这部《平凡的世界》来说吧，作者高度概括了西北农村近三十年的发展历程，形形色色的人物涉及各行各业，一切如画卷呈现在我眼前(也许是因为我和路遥一样都是陕北人吧），我们跟随少安、少平两兄弟一起经历磨难，追求理想，向往爱情，实现价值。第一次翻开《平凡的世界》已经是十几年前的事了，但现在每每想起来主人公那种与命运抗争，与苦难搏斗的精神对我现在还是一种激励！当然很多人批评说这是长篇流水账，我不能同意这种观点，文学作品有多种风格，现实主义就是这个样子，难道列夫托尔斯坦的伟大作品都是长篇流水账吗？</p>'
        },
        {
            id:9787536692930,
            name:"三体",
            article:'<img alt="image" src="http://www.iwangxing.cn/m/img/st.jpg"/> <p>Posted on Apirl 22,2017</p><p>以前很少看科幻，在朋友的强烈推荐下看的《三体》，非常不错，个人更喜欢第二部《暗黑森林》，感觉第三部结尾有点过于匆忙，主角的形象也不够突出。也有可能是我在天体物理方面知识实在太差，理解不了吧！</p>'
        },
        {
            id:9787200030136,
            name:"四世同堂",
            article:'<img alt="image" src="http://www.iwangxing.cn/m/img/shtt.jpg"/> <p>Posted on Apirl 22,2017</p><p>最近在读老舍的《四世同堂》，四世同堂，是中国作家老舍创作的一部百万字的小说。这是一部表现抗战北平沦陷区普通民众生活与抗战的长篇小说，全书共三部。该书以北平小羊圈胡同为背景，通过复杂的矛盾纠葛，以胡同内的祁家为主，钱家、冠家以及其他居民为辅，刻画了当时社会各阶层众多普通人的形象；反抗与顺从的选择，国家与个人的选择种种艰难的选择纷繁地交织在一起，深刻地展示了普通人在大时代历史进程中所走过的艰难曲折的道路。</p>'
        },
        {id:9787801871527,name:"天蓝色的彼岸"},
        {id:9787544711098,name:"老人与海"},
        {id:9787530118979,name:"鲁宾逊漂流记"},
    ],
    /*sport数据*/
    [
        {
            title:"八年罗斯铁粉",
            image:"../img/rose3.jpg",
            summary:"公牛还是交易了罗斯，不能说公牛管理层无情，只是现实太残酷，他们给了罗斯两年的时间，然而伤病还是最大的敌人，(有人说是锡伯杜用废了罗斯，可是若不是锡伯杜罗斯也不会有那样的高度，也可能没有史上最年轻MVP的荣誉），理性的考虑去纽约是很不错的结果，诺阿，波尔津吉斯，甜瓜，考特尼-李，罗斯，这个阵容下赛季季后赛还是可以好好期待一下的！希望罗斯能重新找回MVP的感觉！让我们在听到too fast too big too strong too good！",
            article:'<img alt="image" src="../img/rose3.jpg"/> <p>Posted on May 6,2017</p><p>公牛还是交易了罗斯，不能说公牛管理层无情，只是现实太残酷，他们给了罗斯两年的时间，然而伤病还是最大的敌人，(有人说是锡伯杜用废了罗斯，可是若不是锡伯杜罗斯也不会有那样的高度，也可能没有史上最年轻MVP的荣誉），理性的考虑去纽约是很不错的结果，诺阿，波尔津吉斯，甜瓜，考特尼-李，罗斯，这个阵容下赛季季后赛还是可以好好期待一下的！希望罗斯能重新找回MVP的感觉！让我们在听到too fast too big too strong too good！</p>'
        },
        {
            title:"看好明尼苏达青年军崛起",
            image:"../img/Timberwolves.jpg",
            summary:"年年乐透的森林狼终于靠选秀获得了崛起的资本，年轻球员个个都是魔鬼肌肉人，经常拔地而起隔扣对方中锋的维金斯，已经打出内线神兽才有的新秀赛季数据的唐斯，拉文的运动能力以及全明星后的进步，即将加入有小韦德之称的邓恩，但我认为这些都不是最关键的，更重要的是新教练汤姆锡伯杜的加盟，当年他给公牛带来的进步大家有目共睹，相信他会给森林狼的防守带来质的变化，同时也会给这只青年军注入铁血顽强的血液！下赛季季后赛见（我已经记不清森林狼上次打季后赛是什么时候了）！",
            article:'<img alt="image" src="../img/Timberwolves.jpg"/> <p>Posted on May 6,2017</p><p>年年乐透的森林狼终于靠选秀获得了崛起的资本，年轻球员个个都是魔鬼肌肉人，经常拔地而起隔扣对方中锋的维金斯，已经打出内线神兽才有的新秀赛季数据的唐斯，拉文的运动能力以及全明星后的进步，即将加入有小韦德之称的邓恩，但我认为这些都不是最关键的，更重要的是新教练汤姆锡伯杜的加盟，当年他给公牛带来的进步大家有目共睹，相信他会给森林狼的防守带来质的变化，同时也会给这只青年军注入铁血顽强的血液！下赛季季后赛见（我已经记不清森林狼上次打季后赛是什么时候了）！</p>'
        }
    ],
    /*travel数据*/
    [
        {
            title:"华山行",
            image:"../images/richu5b.jpg",
            summary:"去过两次华山，为了看日出都选择了夜爬华山，第一次的日出效果不理想，天边有一层薄云，第二次效果很满意，非常漂亮！",
            article:'<img src="../images/richu5b.jpg" data-preview-src="" data-preview-group="1" />  <p>去过两次华山，为了看日出都选择了夜爬华山，第一次的日出效果不理想，天边有一层薄云，第二次效果很满意，非常漂亮！</p><img src="../images/richu4b.jpg" data-preview-src="" data-preview-group="1" /><p>从西安去华山非常方便，火车、大巴、动车随意选择，现在貌似有直接坐到景区的大巴了，我爬华山时，去程在西安火车站坐大巴车返程大巴没有票了，坐火车回的西安。(第二次往返都乘坐火车，现在高铁站有直接到华山的大巴了)</p><img src="../images/top1b.jpg" data-preview-src="" data-preview-group="1" /><p>不乘坐索道的话爬山的起点在玉泉院，时间早的话可以在玉泉院先玩一会再上山，（时间紧就不要在这里多逗留了，和一般的寺庙没太大区别，有一棵挺大古树已经枯死了影响比较深）</p><img src="img/yqy.jpg" data-preview-src="" data-preview-group="1" /><p>这里有两点需要特别强调，第一：千万多带衣服，山顶比你想象的冷（第一次宿舍几个愣头青，清明节去，只穿薄外套，差点冻成狗，有人受不了高价租了军大衣，嘿嘿）</p><img src="img/jdy.jpg" data-preview-src="" data-preview-group="1"/><p>第二：多带水和水果（黄瓜就是极好的，山顶的价格是山下的好几倍）</p><img src="img/xyqb.jpg" data-preview-src="" data-preview-group="1"/><p>第三：注意控制好时间，到达山顶的时间不能太早也不能太迟，太早意味着要在山顶等待很久，山上是很冷的，太迟的话，到达东峰人会特别多（在节假日最为明显)不容易抢占有利位置，每个人的体力不一样所用时间也不一样，那我们一行六人来说，都是年轻小伙子，速度很快，七八个小时不到就上东峰了，第二次带了几个女生明显就吃力很多，估计超过十个小时了，还有人体力不支，只爬到北峰。</p><img src="img/js.jpg" data-preview-src="" data-preview-group="1"/><p>看着游客许愿留下的铜锁，就能感到华山的客流量之大，我担心有一天铁链上的铜锁会把铁链压断（有点杞人忧天啊）。景区里有很多卖各种小玩意的，其实和别的地方区别不大，没啥特色。华山的爬山道上没隔不远处会有路灯，山路曲曲折折延绵盘转，有时候路灯会绕来绕去出现在你头顶，让你有一种分不清是路灯还是星星的错觉。</p><img src="../images/richu1b.jpg" data-preview-src="" data-preview-group="1"/><p>一晚上的攀爬就为这一刻，请原谅我的渣渣像素，</p><img src="img/richu.jpg" data-preview-src="" data-preview-group="1"/><img src="img/richu2.jpg" data-preview-src="" data-preview-group="1"/><p>看完日出，开玩了！从东峰下来如果你还对自己的体力有信心的话，接着西峰，南峰、中锋都去一下吧！</p><img src="img/xifeng.jpg" data-preview-src="" data-preview-group="1"/><img src="img/xifeng2.jpg" data-preview-src="" data-preview-group="1"/><img src="img/xifeng3.jpg" data-preview-src="" data-preview-group="1"/><img src="img/xifeng4.jpg" data-preview-src="" data-preview-group="1"/><img src="img/qunshan.jpg" data-preview-src="" data-preview-group="1"/><img src="img/beifeng.jpg" data-preview-src="" data-preview-group="1"/><p>个人认为西峰的风景最佳，最好去看一下，还有宝莲灯的传说，华山最惊奇之处就在与险，是五岳之中最为陡峭的，如果经过千尺幢、百尺峡、鹞子翻身你还觉得不过瘾的话，去长空栈道吧，对，就是那个被称为世界十大险景之一的长空栈道，本人自认为胆子大准备上去，结果去了不巧那天风很大，呼呼的刮啊，再看看下面万丈深渊，只有十几公分的木条栈道，顿时吓尿了，没敢上去，各位壮士可以前去一试。最后上个华山迎客松的图吧，谢谢您的观看！</p><img src="img/yks.jpg" data-preview-src="" data-preview-group="1"/>'
        }
    ],
    /*前端数据*/
    [
        {
            title:"使用jsonp解决跨域问题",
            image:"img/timg.jpg",
            summary:"调用web接口，get请求，发现提示：No 'Access-Control-Allow-Origin' header is present on the requested resource.这个和安全机制有关，默认不允许跨域调用处理手段：使用jsonp格式， ajax请求参数dataType:'JSONP'。解决了跨域请求豆瓣数据的问题",
            article:'<img src="img/timg.jpg"/><p>1.调用web接口，get请求，发现提示：No "Access-Control-Allow-Origin" header is present on the requested resource.</p><p>2.这个和安全机制有关，默认不允许跨域调用</p><p>3.处理手段：使用jsonp格式， ajax请求参数dataType:"JSONP"。</p><p>4.解决了跨域请求豆瓣数据的问题</p><img src="img/jsonp.png"/>'
        }
    ]
];
