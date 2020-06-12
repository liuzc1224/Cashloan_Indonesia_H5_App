<template>
    <div>
        <van-row>
            <van-overlay :show="loading"></van-overlay>
            <van-loading v-if="loading" type="spinner" class="loading"  vertical></van-loading>
            <div v-else>
                <van-row class="repayment-code-title">
                    <van-col span="24" class="one">
                        {{$t('prepayment.total')}}
                    </van-col>
                    <van-col span="24" class="two">
                        {{repaymentData['amount'] ? replaceStr((repaymentData['amount']).toFixed(2)) : "Rp.0.00"}}{{`&nbsp&nbsp&nbsp&nbsp;RP`}}
                    </van-col>
                    <van-col span="24" class="one">
                        {{$t('prepayment.dateDue')}}
<!--                        <span>-->
<!--                            <van-image class="repayment-code_img" :src="copyImg" @click="copy"></van-image>-->
<!--                            <van-image class="repayment-code_img" :src="emailImg" @click="send"></van-image>-->
<!--                        </span>-->
                    </van-col>
                    <van-col span="24" class="two">
                        {{repaymentData['repayDateStr'] ? repaymentData['repayDateStr'] : toStr(new Date)}}
                    </van-col>
                </van-row>
                <van-row class="repayment-code-info">
                    <van-cell-group>
                        <van-cell>
                            <template slot="title">
                                <span class="custom-title">
                                    {{$t('prepayment.account')}}
                                </span>
                            </template>
                            <template slot="default">
                                <span class="custom-value">
                                    {{repaymentData['phoneNumber'] ? repaymentData['phoneNumber'].substring(0,3)+"****"+repaymentData['phoneNumber'].substring(repaymentData['phoneNumber'].length-3,repaymentData['phoneNumber'].length) : "****"}}
                                </span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template slot="title">
                                <span class="custom-title">
                                    {{$t('prepayment.name')}}
                                </span>
                            </template>
                            <template slot="default">
                                <span class="custom-value">
                                    {{repaymentData['userName']}}
                                </span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template slot="title">
                                <span class="custom-title">
                                    {{$t('prepayment.total')}}
                                </span>
                            </template>
                            <template slot="default">
                                <span class="custom-value">
                                    {{repaymentData['amount'] ? replaceStr((repaymentData['amount']).toFixed(2)) : "Rp.0.00"}}
                                </span>
                            </template>
                        </van-cell>
                    </van-cell-group>
                </van-row>
                <div class="btnGroup">
                    <van-button plain round class="back" :loading="VALoading" @click="repayment('VA')">{{$t('repaymentDetail.va')}}</van-button>
                    <van-button plain round class="back" :loading="FTLoading" @click="repayment('FT')">{{$t('repaymentDetail.ft')}}</van-button>
                </div>
            </div>

        </van-row>
    </div>
</template>

<script>
    import api from '@/api/index'
    import bg_top from "@/assets/imgs/code/bg_top.png"
    import img from "@/assets/imgs/cnaidc.png"
    import {formatDate} from '../libs/date'
    export default {
        name: "prepayment-web",
        data(){
            return{
                Email: '',
                bgURl:bg_top,
                img:img,
                VALoading:false,
                FTLoading:false,
                isShow:false,
                loading:false,
                repaymentData:{},
                images:[img]
            }
        },
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
                let data={
                    signature:this.$route.query.signature,
                };
                api.repaymentCodeShare(data).then(res => {
                    this.loading=false;
                    if (res.data.success) {
                        this.repaymentData=res.data.data;
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            replaceStr(data){
                if(data){
                    return "Rp."+(Number(data).toFixed(2)+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                }
            },
            repayment(data){
                let getData={
                    signature:this.$route.query.signature,
                    paymentMethod:data
                };
                this[data+'Loading']=true;
                // let loginInfo=JSON.parse(window.sessionStorage["loginInfo"]);
                // let params={
                //     eventName:"view_repay_code",
                //     deviceId:loginInfo['deviceId'],
                //     userId:loginInfo['id']
                // };
                // api.event(params).then(request => {
                //     if (request.data.success) {
                        api.repaymentCodeNocheck(getData).then(res => {
                            this[data+'Loading']=false;
                            if (res.data.success) {
                                console.log(res.data.data.paymentUrl);
                                window.location.href=res.data.data.paymentUrl;
                                // this.$bridge.paymentUrl(res.data.data.paymentUrl);
                            } else {
                                this.$notify(res.data.message);
                            }
                        })
                //     } else {
                //         this[data+'Loading']=false;
                //         this.$notify(request.data.message);
                //     }
                // });
            },
            toStr(data) {
                return formatDate(new Date(data), 'dd-MM-yyyy');
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/css/main";
    .repayment-code-title{
        background: url("../assets/imgs/bg_top.png") no-repeat;
        -moz-background-size:100% 100%;
        background-size: 100% 100%;
        padding: 0 14px 20px 14px;
        color: #ffffff;
        .one{
            padding-top: 10px;
            font-size: 15.61px;
            padding-bottom: 10px;
            span{
                font-size: 21px;
                float: right;
                text-align: right;
                .repayment-code_img{
                    width: 21px;
                }
                .repayment-code_img:last-child{
                    padding-left: 13px;
                }
            }
        }
        .two{
            background-color: #ffffff;
            text-align: center;
            font-size: 18px;
            color: #4F8AD9;
            font-weight: bold;
            height: 44px;
            line-height: 44px;
            border-radius: 5px;
        }
        .three{
            text-align: center;
            font-size: 24px;
        }
        .back{
            padding-left: 5px;
            padding-right: 5px;
            position: absolute;
            margin-left: 10px;
            margin-top: 6px;
            font-size: 13px;
            height: 19px;
            line-height: 19px;
        }
    }
    .repayment-code-info{
        margin-top: 16.5px;
        background-color: #ffffff;
        color: #BFD6F5;
        .custom-title{
            color: #999999;
            font-size: 14px;
        }
        .custom-value{
            color: #494951;
            font-size: 14px;
        }
    }
    .content{
        padding: 12px 15px;
        .code{
            padding: 14px;
            background-color: #ffffff;
            color: #494951;
            font-size: 16px;
        }
        .codeImage{
            margin-top: 10px;
            border: 1PX #EEEEEE solid;
            padding: 17px 10px 0 10px;
            .image{
                width: 100%;
            }
            p{
                font-size: 12px;
                color: #999999;
                text-align: center;
            }
        }
        .item{
            background-color: #ffffff;
            margin-top: 10px;
            font-size: 13px;
            color: #B2B2B2;
            padding: 15px 10px;
            .icon{
                font-size: 18px;
                color: #348BDF;
                text-align: right;
            }
        }
    }
    .btnGroup{
        padding: 44px 15px 15px 15px;
        button{
            width: 100%;
            margin-bottom: 10px;
            font-size: 15px;
            height: 40px;
            line-height: 40px;
        }
        .border{
            color: #4F8AD9;
            border-color: #4F8AD9;
        }
        .back{
            background-color: #4F8AD9;
            color: #ffffff;
        }
    }
    .loading{
        z-index: 1000;
        position: absolute;
        margin-top: 60%;
        margin-left: 45%;
    }
    .btn{
        margin-left: 20px;
    }
</style>