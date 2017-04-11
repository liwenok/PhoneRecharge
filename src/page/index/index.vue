<template>
    <div id="content-component">
        <mu-row gutter>
            <mu-col width="100" tablet="100" desktop="100">
                <mu-text-field
                        label="手机号"
                        hintText="请输入手机号"
                        type="number"
                        icon="phone"
                        fullWidth
                        :maxLength="11"
                        :errorText="inputErrorText"
                        @textOverflow="handleInputOverflow"
                        @input="InputValue"
                        labelFloat/>
            </mu-col>

            <mu-sub-header>充话费</mu-sub-header>
            <br><br><br>
            <mu-col width="100" tablet="100" desktop="100">
                <mu-row gutter class="text-cen-index">
                    <mu-col v-for="n in this.con.VueConfig().CallDataList" width="33" tablet="33" desktop="33" >

                        <mu-flat-button :label="n.OriginalPrice + ' 元'"
                                        @click="ConfirmRecharge(n.OriginalPrice)"
                                        class="demo-flat-button item-list-index"
                                        primary/>

                    </mu-col>
                </mu-row>
            </mu-col>

        </mu-row>

        <p class="prompt-info-index">
            该功能提供的话费充值服务主要依赖于第三方
            <a href="https://www.juhe.cn/docs/api/id/85/aid/586"
            title="聚合数据" target="_blank">
                聚合数据
            </a>
             ，因为我聚合账户没钱，所以你压根充值不上！这里提供的是demo，你可更换平台改改代码快速的集成到自己的项目中！
        </p>

        <mu-dialog :open="dialog" :title="dialogText.title" @close="dialog = false">
            {{dialogText.body}}
            <mu-flat-button slot="actions" @click="dialog = false" primary label="取消"/>
            <mu-flat-button slot="actions" primary @click="dialog = false" label="确定"/>
        </mu-dialog>

    </div>
</template>

<script>
    import index from './indexHandle'
    export default{
        name: 'index',
        mounted(){
            this.utils.SetBarTitle(this,this.con.GlobalPrompt().Text.IndexTitle,'1')
        },
        data(){
            return{
                phoneValue: null,
                inputErrorText: null,
                dialog: false,
                dialogText: {}
            }
        },
        methods:{
            InputValue (value){
                this.phoneValue = value
            },
            handleInputOverflow (isOverflow) {
                this.inputErrorText = isOverflow ? '别以为我不知道手机号是11位' : ''
            },
            //验证手机号，并像服务器提交订单信息
            ConfirmRecharge (n){
                index.handleInputOverflow(this,{
                    Phone: this.phoneValue,
                    Price: n
                })
            }
        }
    }
</script>

<style scoped>
@import "./../../assets/css/index.css";
</style>
