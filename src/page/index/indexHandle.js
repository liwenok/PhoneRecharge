export default {

    handleInputOverflow (vm,param) {
        let self = vm
        if(self.utils.VerifyPhone(param.Phone)){
            self.$http.post(self.con.ApiUrl().PhoneRecharge,param).then(success => {
                switch (0){
                    // errorCode = 208517，账户余额不足
                    case self.con.GlobalPrompt().errorCode.NoMoney:
                        self.dialogText = self.utils.ErrorHelp(self.utils.SubstrOrderId(success.data.orderid),success.data.status.reason)
                        self.dialog = true
                        break
                    // errorCode = 0，下单成功
                    case self.con.GlobalPrompt().errorCode.Success:
                        //模拟下单成功后的数据返回
                        var data = {
                            "reason": "订单提交成功，等待充值",
                            "result": {
                                "cardid": "1900212", /*充值的卡类ID*/
                                "cardnum": "1", /*数量*/
                                "ordercash": 49.25, /*进货价格*/
                                "cardname": "江苏电信话费50元直充", /*充值名称*/
                                "sporder_id": "20141120174602882", /*聚合订单号*/
                                "uorderid":"2014123115121",/*商户自定的订单号*/
                                "game_userid": "18913515122", /*充值的手机号码*/
                                "game_state": "0" /*充值状态:0充值中 1成功 9撤销，刚提交都返回0*/
                            },
                            "error_code": 0
                        }

                        self.utils.SetlocalStorage("orderid",data.result.uorderid)
                        self.dialogText = self.utils.ErrorHelp("充值成功","单击右上角充值记录查看进度")
                        self.dialog = true
                        break
                    default:
                        break
                }
            }).catch(response => {
                self.dialogText = self.utils.ErrorHelp(self.con.GlobalPrompt().Text.ajaxErrorTitle, self.con.GlobalPrompt().Text.ajaxErrorBody,)
                self.dialog = true
            })
        }else {
            self.dialogText = self.utils.ErrorHelp(self.con.GlobalPrompt().Text.title,self.con.GlobalPrompt().Text.body)
            self.dialog = true
        }
    }

}