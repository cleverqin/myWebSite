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
            $.getJSON("http://api.asilu.com/weather?city=北京&callback=?", function(data) {
                _this.weather=data
            });
        },
        renderQRcode:function (txt) {
            this.qrcode.makeCode(txt)
        }
    }
}
var nav={
    template:"#nav_tpl"
}
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
            }
        ]
    }
]
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