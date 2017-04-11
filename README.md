## 话费充值

基于Vue2.0开发的话费充值APP，数据接口主要调用 `聚合数据` 提供的话费充值API实现。很关键的一点因为我聚合账户没有钱，所以没办法来真正的提交钱来测试，不过丝毫不影响，因为这里我前端已经模拟了下单成功后返回的数据(和真实的API返回数据一样)来开发测试，确保了功能没有问题。

## 技术选型

- Vue.js
- WebPack
- Node.js
- Npm
- ES5
- MuseUI
- Material-Icons
- ...等

## 功能实现

主要实现以下两点功能：

- 1: 下单充值话费
- 2: 话费充值记录查询
- 3: 其他功能没有难度太懒不想再写..

**功能1：** 主要是前端提交充值用户的手机号和充值价格到后端，后端生成下单的订单号，签名`sign`参数，拼接`AppKey`等参数构成最终的URL，发送curl请求获取数据，然后后端返回给前端已经下单成功的订单id，状态等信息，前端将订单ID本地localStorage存储。然后弹窗提示用户下单成功，可查看充值订单进度状态

`这里就不要问为什么后端来做这些事了，其实我也想写成纯前端的应用(不用再去写后端php多好)，但是前端调接口存在跨域呀，再说正常逻辑本就应该放到后端来处理订单相关的操作`

**功能2：** 首先自然是读取存在本地的`orderid`，然后将`orderid`发送到后端，后端拼接`orderid`和`AppKey`发送`curl post`请求到第三方接口获取订单具体的状态，然后后端将数据给前端，前端拿到数据中的`game_state`字段，根据`game_state(充值状态:0充值中,1成功,9撤销，刚提交都返回0)`字段来v-if展示不同的页面给用户看告知用户订单的状态

**前后端代码都是我自己写的，需要后端代码来研究的朋友可以联系我，很乐意开源，更多的软件介绍请看 [这里](http://139.224.210.190/PhoneRecharge/#/introduce)**

## 安装部署

1：下载

```txt
git clone https://github.com/helpcode/PhoneRecharge.git
cd PhoneRecharge/
```

2：解决依赖并运行

```txt
//初始化
npm install

//dev 运行网站
npm run dev

//build 构建发布
npm run build
```

## demo

**扫一扫即可查看效果，这里不推荐微信打开，别问原因！**

<img src="http://okkzzhtds.bkt.clouddn.com/1491914183.png" width="280" height="360"/>

网址：[http://139.224.210.190/PhoneRecharge/](http://139.224.210.190/PhoneRecharge/)

## 运行截图

侧边菜单

![侧边菜单](http://okkzzhtds.bkt.clouddn.com/menu-phone.png)

首页：

![首页](http://okkzzhtds.bkt.clouddn.com/index-phone.png)

关于我：

![关于我](http://okkzzhtds.bkt.clouddn.com/about-phone.png)

软件介绍：

![软件介绍](http://okkzzhtds.bkt.clouddn.com/introduce-phone.png)

## 联系我

如果你对我感兴趣想和我一起交流学习可通过以下途径联系我，很欢迎骚扰哦！

- 1：博客：[geekhelp.cn](http://geekhelp.cn/)

- 2：QQ：2271608011

- 3：技术群：[540144097](http://shang.qq.com/wpa/qunwpa?idkey=1c684eb6c3d6b32ac50b0d179096ed64124b9db577add0319b7b1a96a0235656)

不介意的话能否打赏一元呢(微信)，赞助本人买个键盘呗：

<img src="http://obl1kak28.bkt.clouddn.com/weixin.png" width="280" height="280"/>

## 鸣谢

本软件的功能接口主要调用聚合数据实现，更多信息请参考：

> [https://www.juhe.cn/docs/api/id/85](https://www.juhe.cn/docs/api/id/85)

其他话费充值平台：

- 1: [话费多](https://www.huafeiduo.com/)
- 2: [APIX](https://www.apix.cn/)
- 3: [互亿无线](http://www.ihuyi.com/)
- 4: [欧飞](http://www.ofcard.com/newb2c)
- 5: [生活数据](http://data.qianmi.com/)
- 6: [易赛](http://www.yisaipay.com/)
- 7: [博管家](http://cz.7654322.com/user/login)
- 8: [一加一通讯](http://chongzhi.yijiayitongxun.com/)

有需要的朋友可以自行研究，同时再次感谢开源感谢技术分享！
