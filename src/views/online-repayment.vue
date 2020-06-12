<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('onlineRepayment.title')"
                left-arrow
                @click-left="onClickLeft"
        ></van-nav-bar>
        <van-row class="main">
            <van-row class="backDiv">
                <div class="content">
                    <van-row class="one">
                        {{$t('onlineRepayment.dateShould')}} 2018/12/20
                    </van-row>
                    <van-row class="two">
                        50Rp.0.00
                    </van-row>
                    <van-row class="three">
                        {{$t('onlineRepayment.amount')}} + {{$t('onlineRepayment.interest')}} 12,00
                    </van-row>
                </div>
            </van-row>
            <van-row class="Div">
                <van-col span="24" class="title">
                    {{$t('onlineRepayment.repaymentAmount')}}
                </van-col>
                <van-col span="24" class="input">
                    <van-field
                        v-model="username"
                        clearable
                        right-icon="edit"
                        :placeholder="$t('onlineRepayment.prompt.repaymentAmount')"
                    ></van-field>
                </van-col>
                <van-col span="24" class="title">
                    {{$t('onlineRepayment.repaymentAccount')}}
                </van-col>
                <van-col span="24">
                    <van-field
                            v-model="username"
                            clearable
                            right-icon="contact"
                            :placeholder="$t('onlineRepayment.prompt.repaymentAccount')"
                            @click-right-icon="$toast('question')"
                    ></van-field>
                </van-col>
            </van-row>
        </van-row>
    </div>
</template>

<script>
    export default {
        name: "online-repayment",
        data(){
            return{
                username:null
            }
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/css/main";
    .main{
        .backDiv{
            padding: 10px 15px;
            background-color: #ffffff;
            margin-bottom: 15px;
            .content{
                background: -webkit-linear-gradient(#797A8C, #434553); /* Safari 5.1 - 6.0 */
                background: -o-linear-gradient(#797A8C, #434553); /* Opera 11.1 - 12.0 */
                background: -moz-linear-gradient(#797A8C, #434553); /* Firefox 3.6 - 15 */
                background: linear-gradient(#797A8C, #434553); /* 标准的语法 */
                padding: 16px;
                border-radius: 5px;
                .one{
                    font-size: 13px;
                    color: #ffffff;
                    opacity: 0.5;
                }
                .two{
                    font-size: 21px;
                    color: #ffffff;
                    line-height: 63px;
                    text-align: center;
                }
                .three{
                    font-size: 13px;
                    color: #ffffff;
                    opacity: 0.5;
                    text-align: center;
                }
            }
        }
        .Div{
            background-color: #ffffff;
            .title{
                padding: 15px 15px 0 15px;
                color: #494951;
                font-size: 15px;
            }
            .input{
                border-bottom: 1PX #EEEEEE solid;
            }
        }
    }
</style>