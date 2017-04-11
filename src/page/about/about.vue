<template>
    <div id="content-component" class="demo-vsteper-container">
        <mu-stepper :activeStep="activeStep" orientation="vertical">
            <mu-step>
                <mu-step-label>
                    花点时间了解我？
                </mu-step-label>
                <mu-step-content>
                    <p>
                        创业中的WEB程序员，热衷于不断学习新技术破除心中迷雾般不好的感觉，喜欢从最初一脸懵逼到若有所悟再到最终骂自己傻逼的过程。
                    </p>
                    <p>
                        熟练掌握WEB前后端开发，Linux服务器部署优化，MySQL数据库等，没办法被现实逼得！然而我真的只想写前端写JavaScript而已，仅此！
                    </p>
                    <p>
                        我热爱这个行业，并且我付出了很多的努力！
                    </p>
                    <mu-raised-button label="下一步" class="demo-step-button" @click="handleNext" primary/>
                </mu-step-content>
            </mu-step>

            <mu-step>
                <mu-step-label>
                    兴趣？
                </mu-step-label>
                <mu-step-content>
                    <p>
                        <del>1：喜欢泡妹(我知道你也是这么想的)，太多了大概十几个吧...这话题比较敏感不能让女票看到</del>
                    </p>
                    <p>
                        2：更热衷骑单车旅行，已独自骑车走过2万公里，路上的风景路上的人和那些点滴间的感动让我真的无法忘记
                    </p>
                    <p>
                        3：喜欢夜夜飙歌撸代码，一般四点后睡觉，熬夜已成家常便饭，你呢？</p>
                    <p>
                        除此之外没有其他兴趣爱好了，不喜欢逛街购物(陪女票除外)更不喜欢打牌玩游戏
                    </p>
                    <mu-raised-button label="下一步" class="demo-step-button" @click="handleNext" primary/>
                    <mu-flat-button label="上一步" class="demo-step-button" @click="handlePrev"/>
                </mu-step-content>
            </mu-step>

            <mu-step>
                <mu-step-label>
                    性格？
                </mu-step-label>
                <mu-step-content>
                    <p>
                        <del>纯屌丝一枚</del>，喜欢结交朋友喜欢听别人说自己的故事和经历，进入从中不断的汲取弥补自己的不足
                    </p>
                    <p>
                        <b>没有架构师的梦想，只想写两年代码就转型上管理层</b>
                    </p>
                    <p>
                        唯一的理想就是等公司稳定后带出一批新人，自己好放年假能带上单车和女票自驾去西藏在那居住一段时间，放下所有事情，纯粹的走走停停看山看水，倾听其他骑行者说的那些故事，那些感人的旅途！
                    </p>
                    <mu-raised-button label="下一步" class="demo-step-button" @click="handleNext" primary/>
                    <mu-flat-button label="上一步" class="demo-step-button" @click="handlePrev"/>
                </mu-step-content>
            </mu-step>


            <mu-step>
                <mu-step-label>
                    联系我！
                </mu-step-label>
                <mu-step-content>
                    <p>
                        博客：<a href="http://geekhelp.cn/" target="_blank">geekhelp.cn</a>
                    </p>
                    <p>
                        QQ: <a href="">2271608011</a>
                    </p>
                    <p>
                        群: <a href="http://shang.qq.com/wpa/qunwpa?idkey=1c684eb6c3d6b32ac50b0d179096ed64124b9db577add0319b7b1a96a0235656" target="_blank">540144097</a>
                    </p>
                    <p>
                        邮箱: <a href="">2271608011@qq.com</a>
                    </p>
                    <mu-raised-button label="完成" class="demo-step-button" @click="handleNext" primary/>
                    <mu-flat-button label="上一步" class="demo-step-button" @click="handlePrev"/>
                </mu-step-content>
            </mu-step>
        </mu-stepper>
        <p v-if="finished" class="end-no">
            嗯..！看完了？<a href="javascript:;" @click="reset"> 再看 </a>一次吧！
            <br>
            爱看不看
        </p>
    </div>
</template>

<script>
    export default {
        mounted(){
            this.utils.SetBarTitle(this,this.con.GlobalPrompt().Text.AboutTitle)
        },
        data () {
            return {
                activeStep: 0
            }
        },
        computed: {
            finished () {
                return this.activeStep > 3
            }
        },
        methods: {
            handleNext () {
                this.activeStep++
            },
            handlePrev () {
                this.activeStep--
            },
            reset () {
                this.activeStep = 0
            }
        }
    }
</script>

<style lang="css">
    .demo-vsteper-container{
        max-width: 100%;
        height: 100%;
        margin: auto;
    }

    .demo-step-button {
        margin-top: 12px;
        margin-right: 12px;
    }
    .end-no{
        padding-left: 20px;
    }
</style>