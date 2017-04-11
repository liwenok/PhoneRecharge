export default {

    //设置header头部显示的文字
    SetBarTitle(vm,title,history = ''){
        if(history == ''){
            vm.$parent.$refs.head.$data.showTitle = title
            vm.$parent.$refs.head.$data.showHistory = false
        }else {
            vm.$parent.$refs.head.$data.showTitle = title
            vm.$parent.$refs.head.$data.showHistory = true
        }
    },

    //验证手机号的正则
    VerifyPhone(value){
        return value && /^1[34578]\d{9}$/.test(value) ? true : false
    },

    //隐藏订单ID
    SubstrOrderId(value){
        return "订单: " + value.substr(0, 9) + "****"
    },

    GetlocalStorage(name){
        return localStorage.getItem(name) ? true : false
    },

    SetlocalStorage(name,value){
        localStorage.setItem(name,value)
    },

    //返回提示信息
    ErrorHelp(title,body){
        return {
            title: title,
            body: body
        }
    }
}