<template>
    <div id="popup-component">
        <mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="bottomPopup = false">
            <mu-appbar title="充值记录">
                <mu-icon-button icon="close" slot="right"  @click="bottomPopup = false"/>
            </mu-appbar>
            <mu-content-block>
                <mu-card-title :subTitle="showHistoryData.uordercash + ' 元' "/>

                <mu-card-text v-if="showHistoryData.game_state == 0">
                    订单 <a>{{showHistoryData.uorderid}}</a>，运营商正在充值！
                </mu-card-text>

                <mu-card-text v-else-if="showHistoryData.game_state == 1">
                    订单{{showHistoryData.sporder_id}}，已充值成功了！
                </mu-card-text>

                <mu-card-text v-else-if="showHistoryData.game_state == 9">
                    订单{{showHistoryData.sporder_id}}，已被撤销！
                </mu-card-text>

                <mu-card-actions>
                    <mu-chip class="demo-chip">
                        {{showHistoryData.sporder_id}}
                    </mu-chip>
                    <mu-chip class="demo-chip">
                        数量：1
                    </mu-chip>
                </mu-card-actions>

            </mu-content-block>
        </mu-popup>
    </div>
</template>

<script>
    export default{
        mounted(){
        },
        data(){
            return{
                bottomPopup: false,
                showHistoryData:{},
                phoneValue: null
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
