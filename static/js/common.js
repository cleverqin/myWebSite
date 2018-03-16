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