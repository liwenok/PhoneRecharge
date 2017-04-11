export default {
    openBottomPopup(vm){
        let self = vm
        //如果本地有下单成功后的orderid数据
        if(self.utils.GetlocalStorage("orderid")){

            self.$http.post(self.con.ApiUrl().PhoneRecharge,
                {
                    orderid: localStorage.getItem("orderid")

                }).then(success => {
                // 0 模拟后端查询订单成功返回的数据，
                // 实际开发中 改为 success.data.error_code
                switch (0){
                    //错误的订单号
                    case 208509:
                        // 设置 错误提示的弹窗
                        self.$parent.$refs.content.dialogText= self.utils.ErrorHelp('提示',success.data.reason)
                        // 显示 弹窗
                        self.$parent.$refs.content.dialog = true
                        break;

                    case 0:
                        // 模拟下单成功后，后端获取到的查询订单数据，
                        // 正式开发后 从网络请求中获取 success.data.result
                        var data = {
                            "reason": "查询成功",
                            "result": {
                                "uordercash": "5.000", /*订单扣除金额*/
                                "sporder_id": "20150511163237508",/*聚合订单号*/
                                "game_state": "1" /*状态 1:成功 9:失败 0：充值中*/
                            },
                            "error_code": 0
                        }

                        //填充 充值记录弹窗组件的 订单数据
                        self.$children[2].$data.showHistoryData = data.result
                        //显示充值记录弹窗组件
                        self.$children[2].$data.bottomPopup = true
                }
            }).catch(error => {
                    self.$parent.$refs.content.dialogText = self.utils.ErrorHelp(self.con.GlobalPrompt().Text.ajaxErrorTitle, self.con.GlobalPrompt().Text.ajaxErrorBody,)
                    self.$parent.$refs.content.dialog = true
            })
        }

    }
}