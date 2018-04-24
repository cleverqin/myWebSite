(function () {
    var vueFace= {
        install:function (Vue, options) {
            var baseUrl="http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal";
            var faceJson = [
                {"phrase": "[坏笑]",
                    "url": baseUrl + "/50/pcmoren_huaixiao_org.png"}, {
                    "phrase": "[舔屏]",
                    "url": baseUrl + "/40/pcmoren_tian_org.png"
                }, {"phrase": "[污]", "url": baseUrl + "/3c/pcmoren_wu_org.png"}, {
                    "phrase": "[允悲]",
                    "url": baseUrl + "/2c/moren_yunbei_org.png"
                }, {"phrase": "[笑而不语]", "url": baseUrl + "/3a/moren_xiaoerbuyu_org.png"}, {
                    "phrase": "[费解]",
                    "url": baseUrl + "/3c/moren_feijie_org.png"
                }, {"phrase": "[憧憬]", "url": baseUrl + "/37/moren_chongjing_org.png"}, {
                    "phrase": "[并不简单]",
                    "url": baseUrl + "/fd/moren_bingbujiandan_org.png"
                }, {"phrase": "[微笑]", "url": baseUrl + "/5c/huanglianwx_org.gif"}, {
                    "phrase": "[嘻嘻]",
                    "url": baseUrl + "/0b/tootha_org.gif"
                }, {"phrase": "[哈哈]", "url": baseUrl + "/6a/laugh.gif"}, {
                    "phrase": "[可爱]",
                    "url": baseUrl + "/14/tza_org.gif"
                }, {"phrase": "[可怜]", "url": baseUrl + "/af/kl_org.gif"}, {
                    "phrase": "[挖鼻]",
                    "url": baseUrl + "/0b/wabi_org.gif"
                }, {"phrase": "[吃惊]", "url": baseUrl + "/f4/cj_org.gif"}, {
                    "phrase": "[害羞]",
                    "url": baseUrl + "/6e/shamea_org.gif"
                }, {"phrase": "[挤眼]", "url": baseUrl + "/c3/zy_org.gif"}, {
                    "phrase": "[闭嘴]",
                    "url": baseUrl + "/29/bz_org.gif"
                }, {"phrase": "[鄙视]", "url": baseUrl + "/71/bs2_org.gif"}, {
                    "phrase": "[爱你]",
                    "url": baseUrl + "/6d/lovea_org.gif"
                }, {"phrase": "[泪]", "url": baseUrl + "/9d/sada_org.gif"}, {
                    "phrase": "[偷笑]",
                    "url": baseUrl + "/19/heia_org.gif"
                }, {"phrase": "[亲亲]", "url": baseUrl + "/8f/qq_org.gif"}, {
                    "phrase": "[生病]",
                    "url": baseUrl + "/b6/sb_org.gif"
                }, {"phrase": "[太开心]", "url": baseUrl + "/58/mb_org.gif"}, {
                    "phrase": "[白眼]",
                    "url": baseUrl + "/d9/landeln_org.gif"
                }, {"phrase": "[右哼哼]", "url": baseUrl + "/98/yhh_org.gif"}, {
                    "phrase": "[左哼哼]",
                    "url": baseUrl + "/6d/zhh_org.gif"
                }, {"phrase": "[嘘]", "url": baseUrl + "/a6/x_org.gif"}, {
                    "phrase": "[衰]",
                    "url": baseUrl + "/af/cry.gif"
                }, {"phrase": "[委屈]", "url": baseUrl + "/73/wq_org.gif"}, {
                    "phrase": "[吐]",
                    "url": baseUrl + "/9e/t_org.gif"
                }, {"phrase": "[哈欠]", "url": baseUrl + "/cc/haqianv2_org.gif"}, {
                    "phrase": "[抱抱_旧]",
                    "url": baseUrl + "/27/bba_org.gif"
                }, {"phrase": "[怒]", "url": baseUrl + "/7c/angrya_org.gif"}, {
                    "phrase": "[疑问]",
                    "url": baseUrl + "/5c/yw_org.gif"
                }, {"phrase": "[馋嘴]", "url": baseUrl + "/a5/cza_org.gif"}, {
                    "phrase": "[拜拜]",
                    "url": baseUrl + "/70/88_org.gif"
                }, {"phrase": "[思考]", "url": baseUrl + "/e9/sk_org.gif"}, {
                    "phrase": "[汗]",
                    "url": baseUrl + "/24/sweata_org.gif"
                }, {"phrase": "[困]", "url": baseUrl + "/40/kunv2_org.gif"}, {
                    "phrase": "[睡]",
                    "url": baseUrl + "/96/huangliansj_org.gif"
                }, {"phrase": "[钱]", "url": baseUrl + "/90/money_org.gif"}, {
                    "phrase": "[失望]",
                    "url": baseUrl + "/0c/sw_org.gif"
                }, {"phrase": "[酷]", "url": baseUrl + "/40/cool_org.gif"}, {
                    "phrase": "[色]",
                    "url": baseUrl + "/20/huanglianse_org.gif"
                }, {"phrase": "[哼]", "url": baseUrl + "/49/hatea_org.gif"}, {
                    "phrase": "[鼓掌]",
                    "url": baseUrl + "/36/gza_org.gif"
                }, {"phrase": "[晕]", "url": baseUrl + "/d9/dizzya_org.gif"}, {
                    "phrase": "[悲伤]",
                    "url": baseUrl + "/1a/bs_org.gif"
                }, {"phrase": "[抓狂]", "url": baseUrl + "/62/crazya_org.gif"}, {
                    "phrase": "[黑线]",
                    "url": baseUrl + "/91/h_org.gif"
                }, {"phrase": "[阴险]", "url": baseUrl + "/6d/yx_org.gif"}, {
                    "phrase": "[怒骂]",
                    "url": baseUrl + "/60/numav2_org.gif"
                }, {"phrase": "[互粉]", "url": baseUrl + "/89/hufen_org.gif"}, {
                    "phrase": "[心]",
                    "url": baseUrl + "/40/hearta_org.gif"
                }, {"phrase": "[伤心]", "url": baseUrl + "/ea/unheart.gif"}, {
                    "phrase": "[猪头]",
                    "url": baseUrl + "/58/pig.gif"
                }, {"phrase": "[熊猫]", "url": baseUrl + "/6e/panda_org.gif"}, {
                    "phrase": "[兔子]",
                    "url": baseUrl + "/81/rabbit_org.gif"
                }, {"phrase": "[ok]", "url": baseUrl + "/d6/ok_org.gif"}, {
                    "phrase": "[耶]",
                    "url": baseUrl + "/d9/ye_org.gif"
                }, {"phrase": "[good]", "url": baseUrl + "/d8/good_org.gif"}, {
                    "phrase": "[NO]",
                    "url": baseUrl + "/ae/buyao_org.gif"
                }, {"phrase": "[赞]", "url": baseUrl + "/d0/z2_org.gif"}, {
                    "phrase": "[来]",
                    "url": baseUrl + "/40/come_org.gif"
                }, {"phrase": "[弱]", "url": baseUrl + "/d8/sad_org.gif"}, {
                    "phrase": "[草泥马]",
                    "url": baseUrl + "/7a/shenshou_org.gif"
                }, {"phrase": "[神马]", "url": baseUrl + "/60/horse2_org.gif"}, {
                    "phrase": "[囧]",
                    "url": baseUrl + "/15/j_org.gif"
                }, {"phrase": "[浮云]", "url": baseUrl + "/bc/fuyun_org.gif"}, {
                    "phrase": "[给力]",
                    "url": baseUrl + "/1e/geiliv2_org.gif"
                }, {"phrase": "[围观]", "url": baseUrl + "/f2/wg_org.gif"}, {
                    "phrase": "[威武]",
                    "url": baseUrl + "/70/vw_org.gif"
                }, {"phrase": "[话筒]", "url": baseUrl + "/9f/huatongv2_org.gif"}, {
                    "phrase": "[蛋糕]",
                    "url": baseUrl + "/3a/cakev2_thumb.gif"
                }, {"phrase": "[蜡烛]", "url": baseUrl + "/d9/lazhuv2_org.gif"}, {
                    "phrase": "[广告]",
                    "url": baseUrl + "/60/ad_new0902_org.gif"
                }, {"phrase": "[doge]", "url": baseUrl + "/b6/doge_org.gif"}, {
                    "phrase": "[喵喵]",
                    "url": baseUrl + "/4a/mm_org.gif"
                }, {"phrase": "[二哈]", "url": baseUrl + "/74/moren_hashiqi_org.png"}, {
                    "phrase": "[哆啦A梦无奈]",
                    "url": baseUrl + "/96/dora_wunai_org.png"
                }, {"phrase": "[哆啦A梦笑]", "url": baseUrl + "/54/dora_xiao_org.png"}, {
                    "phrase": "[哆啦A梦亲亲]",
                    "url": baseUrl + "/e0/dora_qinqin_org.png"
                }, {"phrase": "[哆啦A梦美味]", "url": baseUrl + "/21/dora_meiwei_org.png"}, {
                    "phrase": "[哆啦A梦开心]",
                    "url": baseUrl + "/df/dora_kaixin_org.png"
                }, {"phrase": "[笑cry]", "url": baseUrl + "/34/xiaoku_org.gif"}, {
                    "phrase": "[摊手]",
                    "url": baseUrl + "/09/pcmoren_tanshou_org.png"
                }, {"phrase": "[抱抱]", "url": baseUrl + "/70/pcmoren_baobao_org.png"}, {
                    "phrase": "[红包飞]",
                    "url": baseUrl + "/c8/../e0/hongbao1_org.gif"
                }, {"phrase": "[发红包]", "url": baseUrl + "/ca/fahongbao_org.gif"}, {
                    "phrase": "[冰川时代希德奶奶]",
                    "url": baseUrl + "/35/bhsj5_nainai_org.gif"
                }, {"phrase": "[快银]", "url": baseUrl + "/7e/xman_kuaiyin_org.gif"}, {
                    "phrase": "[暴风女]",
                    "url": baseUrl + "/7b/xman_baofengnv_org.gif"
                }, {"phrase": "[芒果流口水]", "url": baseUrl + "/64/mango_07_org.gif"}, {
                    "phrase": "[芒果点赞]",
                    "url": baseUrl + "/5c/mango_12_org.gif"
                }, {"phrase": "[芒果大笑]", "url": baseUrl + "/9f/mango_02_org.gif"}, {
                    "phrase": "[芒果得意]",
                    "url": baseUrl + "/ee/mango_03_org.gif"
                }, {"phrase": "[芒果萌萌哒]", "url": baseUrl + "/49/mango_11_org.gif"}, {
                    "phrase": "[羊年大吉]",
                    "url": baseUrl + "/cc/yangniandj_org.gif"
                }, {"phrase": "[西瓜]", "url": baseUrl + "/6b/watermelon.gif"}, {
                    "phrase": "[足球]",
                    "url": baseUrl + "/c0/football.gif"
                }, {"phrase": "[老妈我爱你]", "url": baseUrl + "/46/mothersday_org.gif"}, {
                    "phrase": "[母亲节]",
                    "url": baseUrl + "/36/carnation_org.gif"
                }, {"phrase": "[肥皂]", "url": baseUrl + "/e5/soap_org.gif"}, {
                    "phrase": "[有钱]",
                    "url": baseUrl + "/e6/youqian_org.gif"
                }, {"phrase": "[地球一小时]", "url": baseUrl + "/dc/earth1r_org.gif"}, {
                    "phrase": "[国旗]",
                    "url": baseUrl + "/dc/flag_org.gif"
                }, {"phrase": "[许愿]", "url": baseUrl + "/87/lxhxuyuan_org.gif"}, {
                    "phrase": "[风扇]",
                    "url": baseUrl + "/92/fan.gif"
                }, {"phrase": "[炸鸡和啤酒]", "url": baseUrl + "/f4/zhaji_org.gif"}, {
                    "phrase": "[雪]",
                    "url": baseUrl + "/00/snow_org.gif"
                }, {"phrase": "[马上有对象]", "url": baseUrl + "/ee/mashangyouduixiang_org.gif"}, {
                    "phrase": "[马到成功旧]",
                    "url": baseUrl + "/30/madaochenggong_org.gif"
                }, {"phrase": "[青啤鸿运当头]", "url": baseUrl + "/f8/hongyun_org.gif"}, {
                    "phrase": "[让红包飞]",
                    "url": baseUrl + "/0b/hongbaofei2014_org.gif"
                }, {"phrase": "[ali做鬼脸]", "url": baseUrl + "/20/alizuoguiliannew_org.gif"}, {
                    "phrase": "[ali哇]",
                    "url": baseUrl + "/de/aliwanew_org.gif"
                }, {"phrase": "[xkl转圈]", "url": baseUrl + "/f4/xklzhuanquan_org.gif"}, {
                    "phrase": "[酷库熊顽皮]",
                    "url": baseUrl + "/46/kxwanpi_org.gif"
                }, {"phrase": "[bm可爱]", "url": baseUrl + "/95/bmkeai_org.gif"}, {
                    "phrase": "[BOBO爱你]",
                    "url": baseUrl + "/74/boaini_org.gif"
                }, {"phrase": "[转发]", "url": baseUrl + "/02/lxhzhuanfa_org.gif"}, {
                    "phrase": "[得意地笑]",
                    "url": baseUrl + "/d4/lxhdeyidixiao_org.gif"
                }, {"phrase": "[ppb鼓掌]", "url": baseUrl + "/7e/ppbguzhang_org.gif"}, {
                    "phrase": "[din推撞]",
                    "url": baseUrl + "/dd/dintuizhuang_org.gif"
                }, {"phrase": "[moc转发]", "url": baseUrl + "/cb/moczhuanfa_org.gif"}, {
                    "phrase": "[lt切克闹]",
                    "url": baseUrl + "/73/ltqiekenao_org.gif"
                }, {"phrase": "[江南style]", "url": baseUrl + "/67/gangnamstyle_org.gif"}, {
                    "phrase": "[笑哈哈]",
                    "url": baseUrl + "/32/lxhwahaha_org.gif"
                }].splice(0,60);
            // 3. 注入组件
            Vue.component('ui-face',{
                template:'<a class="web_wechat_face" href="javascript:void (0)" title="表情" @click.stop="flag=!flag"> <transition name="custom-classes-transition" enter-active-class="animate scaleFadeIn" leave-active-class="animate scaleFadeOut"> <div class="warpBox" v-show="flag"> <div class="face-warp"> <template v-for="item in faceJson"> <a href="javascript:void(0)" v-bind:title="item.phrase" @click.stop="clickFace(item)"><img :src="item.url" width="22" height="22"></a> </template> </div></div></transition></a>',
                data:function () {
                    return {
                        faceJson:faceJson,
                        flag:false
                    }
                },
                created:function () {
                    var _this=this;
                    document.addEventListener('click',function (e) {
                        _this.flag=false;
                    })
                },
                methods:{
                    clickFace:function (face) {
                        this.$emit('select-face',face)
                    }
                }
            })
            Vue.component("vue-chart",{
                template:"<div class=\"ui-echarts\" ref=\"echarts\"></div>",
                props:["option"],
                created:function () {
                    var _this=this;
                    this.$nextTick(function () {
                        _this.chart=echarts.init(_this.$refs.echarts)
                        _this.chart.setOption(_this.option)
                        window.addEventListener("resize",function () {
                            _this.chart.resize()
                        })
                    })
                },
                watch:{
                    "option":{
                        handler:function(val,oldval){
                            this.chart.setOption(val)
                        },
                        deep:true
                    }
                }
            })
            function getIndex(str) {
                var index=-1;
                faceJson.forEach(function (item,i) {
                    if(item.phrase==str){
                        index=i;
                    }
                })
                return index
            }
            // 4. 添加事例方法
            Vue.prototype.$replaceFace = function (text) {
                if(typeof (text) != "undefined") {
                    var sArr = text.match(/\[.*?\]/g);
                    if(sArr&&sArr.length>0){
                        for(var i = 0; i < sArr.length; i++){
                            if(getIndex(sArr[i])!=-1) {
                                var reStr = "<img src=\"" +faceJson[getIndex(sArr[i])].url  + "\" height=\"20\" width=\"20\" />";
                                text = text.replace(sArr[i], reStr);
                            }
                        }
                    }
                }
                return text;
            }
        }
    }
    var Toast={};
    Toast.install=function (Vue,options) {
        var opt={
            type:"top",
            duration:2500
        }
        for (var key in options){
            opt[key]=options[key];
        }
        Vue.prototype.$message=function (tips,type) {
            if(type){
                opt.type=type
            }
            var toastTpl=Vue.extend({
                template:'<div class="animate fadeIn ui-toast ui-toast-'+opt.type+'">'+tips+'</div>'
            })
            var tpl=new toastTpl().$mount().$el;
            document.body.appendChild(tpl)
            setTimeout(function () {
                document.body.removeChild(tpl)
            },opt.duration)
        }
        var arr=['top','bottom','center'];
        arr.forEach(function (type) {
            Vue.prototype.$message[type]=function (tips) {
                return Vue.prototype.$message(tips,type)
            }
        })
    }
    if (window.Vue) {
        Vue.use(vueFace)
        Vue.use(Toast)
    }else {
        window.vueFace=vueFace;
    }
})(Vue)
var home={
    template:"#home_tpl"
}
var index={
    template:"#index_tpl",
    data:function () {
        return {
            weather:null,
            text:window.location.href
        }
    },
    created:function () {
        var _this=this;
        this.$nextTick(function (e) {
            _this.qrcode = new QRCode(_this.$refs.qrcode, {
                text: _this.text,
                width: 220,
                height: 220,
                colorDark : "#000000",
                colorLight : "#e5edff",
                correctLevel : QRCode.CorrectLevel.H
            });
        })
    },
    mounted:function () {
        $(".ss-slide").slide({
            animationType:"fade",
            beforeBack:function (index) {},
            afterBack:function (index) {}
        })
        this.getWeather();
    },
    methods:{
        getWeather:function () {
            var _this=this;
            $.ajax({
                url:"https://api.asilu.com/weather",
                data:{city:"北京"},
                type:"get",
                dataType:"jsonp",
                success:function (data) {
                    _this.weather=data;
                }
            })
        },
        renderQRcode:function (txt) {
            this.qrcode.makeCode(txt)
        }
    }
}
var nav={
    template:"#nav_tpl"
}
var about=Vue.component('about',function (resolve, reject) {
    $.get("./pages/about.html",function (data) {
        resolve({
            template: data,
            data:function () {
                return {my:""}
            },
            created:function () {
                var _this=this;
                $.get("./static/js/express.json",function (res) {
                    _this.my=res;
                })
            }
        })
    })
})
var apiList=[
    {
        title: '获取当前经纬度信息',
        url: 'https://api.asilu.com/geo/',
        key: 'geo',
        requestType:"jsonp",
        data: []
    }, {
        title: '天气查询',
        url: 'https://api.asilu.com/weather/',
        key: 'weather',
        requestType:"jsonp",
        data: [
            {
                title: '城市',
                name: 'city',
                value: '北京'
            }
        ]
    }, {
        title: '手机归属地查询',
        url: 'https://api.asilu.com/phone/',
        key: 'phone',
        requestType:"jsonp",
        data: [
            {
                title: '手机号码',
                name: 'phone',
                value: '13666666666'
            }
        ]
    }, {
        title: 'IP 归属地查询',
        url: 'https://api.asilu.com/ip/',
        key: 'ip',
        requestType:"jsonp",
        data: [
            {
                title: 'IP 或 域名',
                name: 'ip',
                value: 'www.baidu.com'
            }
        ]
    }, {
        title: '快递查询',
        url: 'https://api.asilu.com/express/',
        key: 'express',
        requestType:"jsonp",
        data: [
            {
                title: '快递单号',
                name: 'id',
                value: '12345678'
            }
            , {
                title: '快递公司 (code 或者 中文)',
                name: 'com',
                value: '圆通'
            }
        ]
    } , {
        title: '网易音乐信息',
        url: 'https://api.asilu.com/163music/',
        key: '163music',
        requestType:"jsonp",
        data: [
            {
                title: '类型',
                name: 'type',
                value:'playlist',
                list:{playlist: '播放列表', song: '歌曲', album: '专辑', userlist: '用户', songlrc: '歌词'},
                desc: "可查询类型 {playlist: '播放列表', song: '歌曲', album: '专辑', userlist: '用户', songlrc: '歌词'}"
            }
            , {
                title: '歌词格式',
                name: 'lrc',
                value: '0',
                list:{'0': '无', json: 'JSON 格式', url: 'LRC 网址'},
                desc:"{'0': '无', json: 'JSON 格式', url: 'LRC 网址'}"
            }
            , {
                title: 'ID',
                name: 'id',
                value: '47201542'
            }
        ]
    }
];
var api=Vue.component('api',function (resolve, reject) {
    $.get("./pages/api.html",function (data) {
        resolve({
            template: data,
            data:function() {
                return {
                    apiList:apiList,
                    apiIndex:0,
                    form:{},
                    res:""
                };
            },
            watch:{
                apiIndex:{
                    handler:function () {
                        var api=this.apiList[this.apiIndex];
                        var obj={};
                        for(var i=0;i<api.data.length;i++){
                            var item=api.data[i];
                            obj[item.name]=item.value
                        }
                        this.form=obj;
                    },
                    deep:true
                }
            },
            methods: {
                submitForm:function() {
                    var _this=this;
                    var api=this.apiList[this.apiIndex];
                    $.ajax({
                        type:"get",
                        url:api.url,
                        data:_this.form,
                        dataType:api.requestType,
                        success:function (body) {
                            $('.api-json').jsonViewer(body);
                        }
                    })
                }
            }
        })
    })
})
Vue.component("page-header",{
    template:"#header_tpl"
})
Vue.component("page-footer",{
    template:"#footer_tpl"
})
var routes  =[
    {
        path:"/",
        name:"home",
        component:home,
        children:[
            {
                path:"/",
                name:"index",
                component:index
            },
            {
                path:"/nav",
                name:"nav",
                component:nav
            },
            {
                path:"/about",
                name:"about",
                component:about
            },
            {
                path:"/api",
                name:"api",
                component:api
            }
        ]
    }
];
new Vue({
    template:"<router-view></router-view>",
    data:{
        loaded:false
    },
    router:new VueRouter({
        routes:routes
    }),
    mounted:function () {
        this.loaded=true;
    }
}).$mount('#app')

var message=Vue.extend({
    props: ['message'],
    template:"    <div class=\"ui-thread-item\" :class=\"{'ui-thread-right':message.type=='send'}\">\n" +
    "        <div class=\"ui-thread-avatar\">\n" +
    "            <img :src=\"message.user.avatarUrl\" alt=\"\">\n" +
    "        </div>\n" +
    "        <div class=\"ui-thread-content\">\n" +
    "            <div class=\"ui-thread-info\" v-if=\"message.type=='send'\"><span>{{message.time | time}}</span>{{message.user.name}}</div>\n" +
    "            <div class=\"ui-thread-info\" v-else>{{message.user.name}}<span>{{message.time | time}}</span></div>\n" +
    "            <div class=\"ui-thread-body\" v-html=\"filterText(message.text)\"></div>\n" +
    "        </div>\n" +
    "    </div>",
    filters:{
        time:function (value) {
            function two(str) {
                var s;
                s = "" + str;
                if (s.length === 1) {
                    s = "0" + s;
                }
                return s;
            };
            var time=new Date(value);
            var hour=time.getHours();
            var m=time.getMinutes();
            var s=time.getSeconds();
            return two(hour)+":"+two(m)+":"+two(s);
        }
    },
    methods:{
        filterText:function (text) {
            return this.$replaceFace(text)
        }
    }
})
var vm=new Vue({
    template:"<div style='z-index: 999'>\n" +
    "        <span class=\"ui-WeChat\" v-show=\"!isShow\" @click=\"isShow=!isShow\"></span>\n" +
    "        <audio src=\"./static/img/8400.mp3\" ref=\"audio\"></audio>\n" +
    "        <transition name='custom-classes-transition' enter-active-class=\"animate scaleFadeIn\"\n" +
    "                    leave-active-class=\"animate scaleFadeOut\">\n" +
    "            <div class=\"ui-chatBox\" v-show=\"isShow\">\n" +
    "                <div class=\"ui-channelInfo\">\n" +
    "                    <span class=\"ui-voiceBar\" :class=\"isVoice?'ui-notice':'ui-noticeClose'\" @click=\"isVoice=!isVoice\"></span>\n" +
    "                    <span class=\"ui-small\" @click=\"isShow=!isShow\"></span>\n" +
    "                    <div class=\"ui-channelAvatar\">\n" +
    "                        <img :src=\"channelUser.avatarUrl\" alt=\"\">\n" +
    "                    </div>\n" +
    "                    <div class=\"ui-infoBox\">\n" +
    "                        <h3>{{channelUser.name}}</h3>\n" +
    "                        <p>在线智能服务管家</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"ui-threadList ui-scroll\" ref=\"list\">\n" +
    "                    <ui-message :message=\"item\" v-for=\"item in messageList\"></ui-message>\n" +
    "                </div>\n" +
    "                <div class=\"ui-toolBarBox\">\n" +
    "                    <ui-face @select-face=\"selectFace\" class=\"ui-chatIcon-face\"></ui-face>\n" +
    "                </div>\n" +
    "                <div class=\"ui-chatInputBox\">\n" +
    "                    <textarea class=\"ui-chatInput ui-scroll\" v-model=\"text\" @keyup.enter=\"send\" placeholder=\"请输入消息\"></textarea>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </transition>\n" +
    "    </div>",
    components:{
        "ui-message":message
    },
    data:function () {
        return {
            user:{
                id:"705597001",
                name:"访问游客",
                avatarUrl:"./static/img/user.jpg"
            },
            users:[{
                id:"group",
                name:"在线客服",
                avatarUrl:"./static/img/group-icon.png",
                messages:[]
            }],
            channel:"group",
            text:"",
            isVoice:true,
            isShow:false,
        }
    },
    computed:{
        messageList:function () {
            var msgList=[];
            var _this=this;
            this.users.forEach(function (item) {
                if(item.id==_this.channel){
                    msgList=item.messages?item.messages:[]
                }
            })
            return msgList
        },
        channelUser:function (){
            var _this=this;
            var user={};
            this.users.forEach(function (item) {
                if(item.id==_this.channel){
                    user={
                        id:item.id,
                        name:item.name,
                        avatarUrl:item.avatarUrl
                    };
                }
            })
            return user;
        }
    },
    mounted:function () {
        this.audio=this.$refs.audio;
    },
    methods:{
        sendMessage:function (channel,text,user,type) {
            var _this=this;
            var message={
                channel:channel,
                user:user,
                type:type,
                text:text,
                time:new Date().getTime()
            };
            this.users.forEach(function (item,index) {
                if(item.id==channel){
                    if(!item.messages){
                        _this.$set(_this.users[index],"messages",[])
                    }
                    item.messages.push(message)
                }
            })
            if(type!="send"&_this.isVoice){
                _this.audio.play();
            }
            this.$nextTick(function () {
                _this.scrollFooter();
            })
        },
        send:function () {
            this.text=this.text.replace(/(^\s*)|(\s*$)/g, "");
            if(this.text!=''){
                this.sendMessage(this.channel,this.text,this.user,'send')
                this.getMessage(this.channel,this.text,this.channelUser)
                this.text="";
            }
        },
        scrollFooter:function () {
            var ul = this.$refs.list;
            ul.scrollTop = ul.scrollHeight;
        },
        changeChannel:function (id) {
            var _this=this;
            this.channel=id;
            this.$nextTick(function () {
                _this.scrollFooter();
            })
        },
        selectFace:function (text) {
            this.text+=text.phrase;
        },
        getMessage:function (channel,text,user) {
            var _this=this;
            $.ajax({
                type:"GET",
                url:"http://www.tuling123.com/openapi/api",
                data:{
                    key:'a36d98ad2dfa44a487c74fefff41080c',
                    info:text,
                    userid:"123456"
                },
                success:function (data) {
                    if(data.text){
                        _this.sendMessage(channel,_this.filterData(data),user,"user")
                    }
                }
            })
        },
        filterData:function (data) {
            switch(data.code) {
                case 100000://文本类
                    return data.text
                    break;
                case 200000://链接类
                    return data.text+"<a href='"+data.url+"' class='res-link' target='_blank'>打开页页面</a>"
                    break;
                case 302000://新闻类
                    var html=data.text+"<ul class='res-list'>";
                    var len=3;
                    if(data.list.length<3){
                        len=data.list.length
                    }
                    for(var i=0;i<len;i++){
                        var item=data.list[i];
                        html+="<li><a href='"+item.detailurl+"' target='_blank'>"+(i+1)+".&nbsp;"+item.article+"</a></li>"
                    }
                    html+='</li>';
                    return html;
                    break;
                case 308000://菜谱类
                    var html=data.text+"<ul class='res-list'>";
                    var len=3;
                    if(data.list.length<3){
                        len=data.list.length
                    }
                    for(var i=0;i<len;i++){
                        var item=data.list[i];
                        html+="<li><a href='"+item.detailurl+"' target='_blank'>"+item.name+"</a></li>"
                    }
                    html+='</li>';
                    return html;
                    break;
                default:
                    return data.text
            }
        },
    }
});
document.body.appendChild(vm.$mount().$el)