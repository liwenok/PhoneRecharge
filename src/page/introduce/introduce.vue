<template>
    <div id="content-component">
        <div class="content-info">
            <mu-sub-header>写在前面</mu-sub-header>
            <mu-content-block>
                首先需要明确，这个APP应用不是企业项目，功能也很简单，写出来其实就是为了练手！巩固熟练一下相关知识点而已，所以请原谅我一些不合理不对的地方！
                <br><br>
                还有个之前写的应用 地址：<a href="http://geekhelp.cn/2017/04/06/webtool/" target="_blank">生活助手 - Vue开源项目</a>

                <br><br>
                还有个是我负责开发的Vue.js电商项目，已上线两个多月，不过这是公司项目恕我真的不能开源，我公司就靠这个电商平台活着在，所以嘛...
                <br><br>
                说说也没什么，电商网站都这个样，功能也就是工厂发布商品，批发商入住开店，消费者浏览下单结算购买评价退换货等，类似京东。

            </mu-content-block>

            <mu-sub-header>技术实现 - 前端</mu-sub-header>
            <mu-content-block>
                前端主要采用：Vue.js , muse-ui , material , webpack , Vuex(没必要所以中途弃用), axios(这货用不习惯) 等相关技术点，更多请看 webpack.json。

                <br><br>
                充值话费的接口主要是 聚合数据 提供，充值的功能已经实现，不过还是充不了因为我聚合账户里面没有钱！
            </mu-content-block>
            <mu-sub-header>技术实现 - 后端</mu-sub-header>
            <mu-content-block>
                后端用到的技术点有：PHP，ThinkPhp，MySQL，Apache，Linux。
                <br><br>
                主要作用就是代理前端调第三方接口时存在的跨域问题，并且将一些重要的AppKey，字段签名加密，拼接接口URL地址，生成订单号，保存话费充值记录，充值成功回调等任务放到了后端进行。
                <br><br>
                这里不要问后端谁写的，太苦逼了除了我没别人！
            </mu-content-block>

            <mu-sub-header>写在后言</mu-sub-header>
            <mu-content-block>
                好了，没什么可说的了。前端代码基本上没什么难度，因为主要任务都在后端。如果你需要的话拿过去改改页面，换个话费充值平台，协调好后端即可轻松愉快的实现话费充值！
                <br><br>
                对了，感兴趣的可以直接联系我 很乐意开源后端代码
            </mu-content-block>
        </div>
    </div>
</template>

<script>
    export default{
        mounted(){
            this.utils.SetBarTitle(this,this.con.GlobalPrompt().Text.IntroduceTitle)
        },
        data(){
            return{
                msg:'this is template introduce'
            }
        },
        methods:{
            test(){
               alert("this is test")
            }
        }
    }
</script>

<style scoped>
    .content-info{
        padding-bottom: 55px;
    }
</style>
