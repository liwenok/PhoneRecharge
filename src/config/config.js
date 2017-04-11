import Vue from 'vue'

export default {
    VueConfig(){
        var ConfigData = {
            FooterItem: [
                {
                    value:'index',
                    url: '#/',
                    title:'首页',
                    icon:'apps'
                },
                {
                    value:'about',
                    url: '#/about',
                    title:'关于',
                    icon:'person'
                },
                {
                    value:'introduce',
                    url: '#/introduce',
                    title:'软件介绍',
                    icon:'code'
                }
            ],
            CallDataList: [
                {OriginalPrice: '10'},
                {OriginalPrice: '20'},
                {OriginalPrice: '30'},
                {OriginalPrice: '50'},
                {OriginalPrice: '100'},
                {OriginalPrice: '300'}

            ]
        }

        return ConfigData
    },

    ApiUrl(){
        return {
            PhoneRecharge: 'http://139.224.210.190/WebTools-php/index.php/Home/Index/PhoneRecharge',
            QueryCallOrder: 'http://139.224.210.190/WebTools-php/index.php/Home/Index/QueryCallOrder'
        }
    },

    GlobalPrompt(){
      return {
          Text: {
              title: '秀逗了',
              body: '你手机号难道不是11位？',
              ajaxErrorTitle: '很抱歉',
              ajaxErrorBody: '网络请求失败咯',
              IndexTitle: '首页',
              AboutTitle: '关于我',
              IntroduceTitle: '软件介绍',
          },
          errorCode: {
              NoMoney: 208517,
              Success: 0,
          }
      }
    }
}