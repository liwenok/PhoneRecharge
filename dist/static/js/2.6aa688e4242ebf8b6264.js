webpackJsonp([2],{33:function(t,e,n){n(46);var a=n(1)(n(36),n(49),null,null);t.exports=a.exports},36:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){this.utils.SetBarTitle(this,this.con.GlobalPrompt().Text.AboutTitle)},data:function(){return{activeStep:0}},computed:{finished:function(){return this.activeStep>3}},methods:{handleNext:function(){this.activeStep++},handlePrev:function(){this.activeStep--},reset:function(){this.activeStep=0}}}},42:function(t,e,n){e=t.exports=n(31)(),e.push([t.i,".demo-vsteper-container{max-width:100%;height:100%;margin:auto}.demo-step-button{margin-top:12px;margin-right:12px}.end-no{padding-left:20px}",""])},46:function(t,e,n){var a=n(42);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(32)("79e11b72",a,!0)},49:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-vsteper-container",attrs:{id:"content-component"}},[n("mu-stepper",{attrs:{activeStep:t.activeStep,orientation:"vertical"}},[n("mu-step",[n("mu-step-label",[t._v("\n                花点时间了解我？\n            ")]),t._v(" "),n("mu-step-content",[n("p",[t._v("\n                    创业中的WEB程序员，热衷于不断学习新技术破除心中迷雾般不好的感觉，喜欢从最初一脸懵逼到若有所悟再到最终骂自己傻逼的过程。\n                ")]),t._v(" "),n("p",[t._v("\n                    熟练掌握WEB前后端开发，Linux服务器部署优化，MySQL数据库等，没办法被现实逼得！然而我真的只想写前端写JavaScript而已，仅此！\n                ")]),t._v(" "),n("p",[t._v("\n                    我热爱这个行业，并且我付出了很多的努力！\n                ")]),t._v(" "),n("mu-raised-button",{staticClass:"demo-step-button",attrs:{label:"下一步",primary:""},on:{click:t.handleNext}})],1)],1),t._v(" "),n("mu-step",[n("mu-step-label",[t._v("\n                兴趣？\n            ")]),t._v(" "),n("mu-step-content",[n("p",[n("del",[t._v("1：喜欢泡妹(我知道你也是这么想的)，太多了大概十几个吧...这话题比较敏感不能让女票看到")])]),t._v(" "),n("p",[t._v("\n                    2：更热衷骑单车旅行，已独自骑车走过2万公里，路上的风景路上的人和那些点滴间的感动让我真的无法忘记\n                ")]),t._v(" "),n("p",[t._v("\n                    3：喜欢夜夜飙歌撸代码，一般四点后睡觉，熬夜已成家常便饭，你呢？")]),t._v(" "),n("p",[t._v("\n                    除此之外没有其他兴趣爱好了，不喜欢逛街购物(陪女票除外)更不喜欢打牌玩游戏\n                ")]),t._v(" "),n("mu-raised-button",{staticClass:"demo-step-button",attrs:{label:"下一步",primary:""},on:{click:t.handleNext}}),t._v(" "),n("mu-flat-button",{staticClass:"demo-step-button",attrs:{label:"上一步"},on:{click:t.handlePrev}})],1)],1),t._v(" "),n("mu-step",[n("mu-step-label",[t._v("\n                性格？\n            ")]),t._v(" "),n("mu-step-content",[n("p",[n("del",[t._v("纯屌丝一枚")]),t._v("，喜欢结交朋友喜欢听别人说自己的故事和经历，进入从中不断的汲取弥补自己的不足\n                ")]),t._v(" "),n("p",[n("b",[t._v("没有架构师的梦想，只想写两年代码就转型上管理层")])]),t._v(" "),n("p",[t._v("\n                    唯一的理想就是等公司稳定后带出一批新人，自己好放年假能带上单车和女票自驾去西藏在那居住一段时间，放下所有事情，纯粹的走走停停看山看水，倾听其他骑行者说的那些故事，那些感人的旅途！\n                ")]),t._v(" "),n("mu-raised-button",{staticClass:"demo-step-button",attrs:{label:"下一步",primary:""},on:{click:t.handleNext}}),t._v(" "),n("mu-flat-button",{staticClass:"demo-step-button",attrs:{label:"上一步"},on:{click:t.handlePrev}})],1)],1),t._v(" "),n("mu-step",[n("mu-step-label",[t._v("\n                联系我！\n            ")]),t._v(" "),n("mu-step-content",[n("p",[t._v("\n                    博客："),n("a",{attrs:{href:"http://geekhelp.cn/",target:"_blank"}},[t._v("geekhelp.cn")])]),t._v(" "),n("p",[t._v("\n                    QQ: "),n("a",{attrs:{href:""}},[t._v("2271608011")])]),t._v(" "),n("p",[t._v("\n                    群: "),n("a",{attrs:{href:"http://shang.qq.com/wpa/qunwpa?idkey=1c684eb6c3d6b32ac50b0d179096ed64124b9db577add0319b7b1a96a0235656",target:"_blank"}},[t._v("540144097")])]),t._v(" "),n("p",[t._v("\n                    邮箱: "),n("a",{attrs:{href:""}},[t._v("2271608011@qq.com")])]),t._v(" "),n("mu-raised-button",{staticClass:"demo-step-button",attrs:{label:"完成",primary:""},on:{click:t.handleNext}}),t._v(" "),n("mu-flat-button",{staticClass:"demo-step-button",attrs:{label:"上一步"},on:{click:t.handlePrev}})],1)],1)],1),t._v(" "),t.finished?n("p",{staticClass:"end-no"},[t._v("\n        嗯..！看完了？"),n("a",{attrs:{href:"javascript:;"},on:{click:t.reset}},[t._v(" 再看 ")]),t._v("一次吧！\n        "),n("br"),t._v("\n        爱看不看\n    ")]):t._e()],1)},staticRenderFns:[]}}});