<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('orderDetails.title')"
                left-arrow
                @click-left="onClickLeft"
        >
<!--            <div class="right_text" slot="right">-->
<!--                {{$t('orderDetails.repaymentRecord')}}-->
<!--            </div>-->
        </van-nav-bar>
        <van-row class="main">
            <van-overlay :show="loading"></van-overlay>
            <van-loading v-if="loading" type="spinner" class="loading"  vertical></van-loading>
            <div v-else>
                <div class="title">
                    <van-row class="repayment">
                        <van-col span="24" class="one">
                            {{orderData['realRepayMoney'] ? replaceStr((orderData['realRepayMoney']).toFixed(2)) : "Rp.0.00"}}
                        </van-col>
                        <van-col span="24" class="one">
                            <span v-if="orderData['status']===1 || orderData['status']===3" class="one_span">
                                {{setStatus(orderData['status'])}}
                            </span>
                            <span v-else-if="orderData['status']===5 || orderData['status']==18 || orderData['status']===26" class="two_span">
                                {{setStatus(orderData['status'])}}
                            </span>
                            <span v-else class="three_span">
                                {{setStatus(orderData['status'])}}
                            </span>
                        </van-col>
                        <van-col span="24" class="three">
                            {{$t('orderDetails.repaymentAmount')}}
                        </van-col>
                    </van-row>
                </div>
                <div class="info">
                    <van-row class="details">
                        <van-row class="item">
                            <van-col span="24" class="one">
                                {{$t('orderDetails.orderNo')}}
                            </van-col>
                            <van-col span="24" class="two">
                                {{orderData['orderNo']}}
                            </van-col>
                        </van-row>
                        <van-row class="item">
                            <van-col span="24" class="one">
                                {{$t('orderDetails.createTime')}}
                            </van-col>
                            <van-col span="24" class="two">
                                {{orderData['borrowTime'] ? toStr(orderData['borrowTime']) : ""}}
                            </van-col>
                        </van-row>
                        <van-row class="item">
                            <van-col span="24" class="one">
                                {{$t('orderDetails.loanAmount')}}
                            </van-col>
                            <van-col span="24" class="two">
                                {{orderData['auditMoney'] ? replaceStr((orderData['auditMoney']).toFixed(2)) : "Rp.0.00"}}
                            </van-col>
                        </van-row>
                        <van-row class="item">
                            <van-col span="24" class="one">
                                {{$t('orderDetails.loanLimit')}}
                            </van-col>
                            <van-col span="24" class="two">
                                {{orderData['loanMonths'] ? orderData['loanDays']*orderData['loanMonths'] : orderData['loanDays']}}
                            </van-col>
                        </van-row>
                        <van-row class="item">
                            <van-col span="24" class="one">
                                {{$t('orderDetails.dayRate')}}
                            </van-col>
                            <van-col span="24" class="two">
                                {{orderData['lendRate'] ? replaceStr((orderData['lendRate']*100).toFixed(2))+"%" : 0}}
                            </van-col>
                        </van-row>
                        <van-row class="item">
                            <van-col span="24" class="one">
                                {{$t('orderDetails.reviewRate')}}
                            </van-col>
                            <van-col span="24" class="two">
                                {{orderData['auditRate'] ? replaceStr((orderData['auditRate']*100).toFixed(2))+"%" : 0}}
                            </van-col>
                        </van-row>
                        <van-row class="item">
                            <van-col span="24" class="one">
                                {{$t('orderDetails.technologyRate')}}
                            </van-col>
                            <van-col span="24" class="two">
                                {{orderData['technologyRate'] ? replaceStr((orderData['technologyRate']*100).toFixed(2))+"%" : 0}}
                            </van-col>
                        </van-row>
                        <van-row class="item">
                            <van-col span="24" class="one">
                                {{$t('orderDetails.amount')}}
                            </van-col>
                            <van-col span="24" class="two">
                                {{orderData['paymentMoney'] ? replaceStr((orderData['paymentMoney']).toFixed(2)) : "Rp.0.00"}}
                            </van-col>
                        </van-row>
                        <van-row class="item">
                            <van-col span="24" class="one">
                                {{$t('orderDetails.amountDue')}}
                            </van-col>
                            <van-col span="24" class="two">
                                {{orderData['currentRepay'] ? replaceStr((orderData['currentRepay']).toFixed(2)) : "Rp.0.00"}}
                            </van-col>
                        </van-row>
                        <van-row class="item">
                            <van-col span="24" class="one">
                                {{$t('orderDetails.coupon')}}
                            </van-col>
                            <van-col span="24" class="two">
                                {{orderData['couponAmount'] ? orderData['couponAmount'] : "Rp.0.00"}}
                            </van-col>
                        </van-row>
                        <van-row class="item">
                            <van-col span="24" class="one">
                                {{$t('orderDetails.loanDate')}}
                            </van-col>
                            <van-col span="24" class="two">
                                {{orderData['paymentDateStr'] ? toStr(orderData['paymentDateStr']) : ""}}
                            </van-col>
                        </van-row>
<!--                        <van-row class="item">-->
<!--                            <van-col span="24" class="one">-->
<!--                                {{$t('orderDetails.dateDue')}}-->
<!--                            </van-col>-->
<!--                            <van-col span="24" class="two">-->
<!--                                {{orderData['repayTime'] ? toDate(orderData['repayTime']) : ""}}-->
<!--                            </van-col>-->
<!--                        </van-row>-->
                        <van-row class="item">
                            <van-col span="24" class="one">
                                {{$t('orderDetails.overdueFee')}}
                            </van-col>
                            <van-col span="24" class="two">
                                {{orderData['overDueRateMoney'] ? orderData['overDueRateMoney'] : "Rp.0.00"}}
                            </van-col>
                        </van-row>
                        <van-row class="item">
                            <van-col span="24" class="one">
                                {{$t('orderDetails.actualAmountDue')}}
                            </van-col>
                            <van-col span="24" class="two">
                                {{orderData['realCurrentRepay'] ? replaceStr((orderData['realCurrentRepay']).toFixed(2)) : "Rp.0.00"}}
                            </van-col>
                        </van-row>
                        <van-row class="item">
                            <van-col span="24" class="one">
                                {{$t('orderDetails.actualRepaymentAmount')}}
                            </van-col>
                            <van-col span="24" class="two">
                                {{orderData['realRepayMoney'] ? replaceStr((orderData['realRepayMoney']).toFixed(2)) : "Rp.0.00"}}
                            </van-col>
                        </van-row>
                        <van-row class="item">
                            <van-col span="24" class="one">
                                {{$t('orderDetails.closingDate')}}
                            </van-col>
                            <van-col span="24" class="two">
                                {{orderData['finishDateStr'] ? toStr(orderData['finishDateStr']) : ""}}
                            </van-col>
                        </van-row>
                        <van-row class="aa" @click="loanContract">
                            *{{$t('orderDetails.view')}}<span>{{$t('orderDetails.contract')}}</span>
                        </van-row>
                    </van-row>
                </div>
                <div class="btnGroup">
                    <van-button plain round class="border" @click="onClickRight" >{{$t('orderDetails.viewRecord')}}</van-button>
                    <van-button plain round class="back" v-if="orderData['status']===4 || orderData['status']===5 || orderData['status']===26 || orderData['status']===18" @click="repaymentDetail">{{$t('orderDetails.go')}}</van-button>

<!--                    <van-button plain round class="border">{{$t('orderDetails.offline')}}</van-button>-->
<!--                    <van-button plain round class="back">{{$t('orderDetails.failure')}}</van-button>-->
<!--                    <van-button plain round class="back">{{$t('orderDetails.caveat')}}</van-button>-->
                </div>
                <van-row class="bottomText" v-if="orderData['status']===4 || orderData['status']===5 || orderData['status']===26 || orderData['status']===18" @click="certificate">
                    {{$t('orderDetails.remind')}}
                </van-row>
            </div>

        </van-row>
    </div>
</template>

<script>
    import api from '@/api/index'
    import {formatDate} from '../libs/date'
    export default {
        name: "order-details",
        data(){
            return{
                loading:true,
                orderData:{}
            }
        },
        mounted(){
          this.getData();
        },
        methods:{
            onClickLeft(){
                goBack.postMessage("goBack");
                // this.$bridge.goBack();
            },
            replaceStr(data){
                if(data){
                    return "Rp."+(Number(data).toFixed(2)+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                }
            },
            onClickRight(){
                let loginInfo=JSON.parse(window.sessionStorage["loginInfo"]);
                let data={
                    eventName:"view_repay_record",
                    deviceId:loginInfo['deviceId'],
                    userId:loginInfo['id']
                };
                api.event(data).then(res => {
                    this.loading=false;
                    if (res.data.success) {
                        this.$router.push({
                            name:"repayment-record",
                            query:{
                                orderId:this.$route.query.orderId,
                                orderNo:this.orderData['orderNo']
                            }
                        })
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            getData(){
                let data={
                    orderId:this.$route.query.orderId
                };
                api.orderDetail(data).then(res => {
                    this.loading=false;
                    if (res.data.success) {
                        this.orderData=res.data.data;
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            certificate(){
                this.$router.push({
                    name:"repayment-certificate",
                    query:{
                        orderId:this.$route.query.orderId,
                        orderNo:this.orderData['orderNo']
                    }
                })
            },
            repaymentDetail(){
                let loginInfo=JSON.parse(window.sessionStorage["loginInfo"]);
                let data={
                    eventName:"view_repay_detail",
                    deviceId:loginInfo['deviceId'],
                    userId:loginInfo['id']
                };
                api.event(data).then(res => {
                    this.loading=false;
                    if (res.data.success) {
                        this.$router.push({
                            name:"repayment-detail",
                            query:{
                                orderId:this.$route.query.orderId
                            }
                        })
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            setStatus(data){
                let status=this.$t('orderState');
                if(data!=null){
                    let name=status.filter(v=>{
                        return data===v['value']
                    });
                    return name && name[0]['desc'] ? name[0]['desc'] : ""
                }
            },
            toDate(data){
                if(data){
                    return formatDate(new Date(data),"dd-MM-yyyy");
                }
            },
            loanContract(){
                this.$router.push({
                    name:"loan-contract",
                    query:{
                        orderId : this.$route.query.orderId
                    }
                })
            },
            toStr(data) {
                return formatDate(new Date(data), 'dd-MM-yyyy');
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/css/main";
    .right_text{
        font-size: 15px;
        color: #ffffff;
    }
    .main{
        background-color: #EEEEEE;
        .title{
            padding: 11px 15px;
            .repayment{
                padding: 24px 18px 15px 18px;
                background: url("../assets/imgs/order1.png") no-repeat;
                -moz-background-size:100% 100%;
                background-size: 100% 100%;
                .one{
                   color: #494951;
                    font-size: 24px;
                    span{
                        color: #ffffff;
                        line-height: 24px;
                        font-size: 12px;
                        padding: 3px 20px;
                        border-radius: 19px;
                    }
                    .one_span{
                        background-color: #4F8AD9;
                    }
                    .two_span{
                        background-color: #F56868;
                    }
                    .three_span{
                        background-color: #CCCCCC;
                    }
                }
                .two{
                    text-align: left;

                }
                .three{
                    font-size: 15px;
                    color: #999999;
                    padding-top: 10px;
                }
            }
        }
        .info{
            padding: 0 15px 15px 15px;
            .details{
                background: url("../assets/imgs/order2.png") no-repeat;
                -moz-background-size:100% 100%;
                background-size: 100% 100%;
                padding-right: 15px;
                padding-left: 15px;
                padding-bottom: 15px;
                .item{
                    border-bottom: 1PX #EEEEEE solid;
                    line-height: 30px;
                    .one{
                        color: #494951;
                        font-size: 14px;
                    }
                    .two{
                        color: #999999;
                        font-size: 15px;
                        text-align: left;
                    }
                }
                .item:last-child{
                    border: none;
                }
                .aa{
                    height: 42px;
                    line-height: 42px;
                    color: #999999;
                    font-size: 13px;
                    span{
                        color: #149FF7;
                        text-decoration: underline;
                    }
                }
            }
        }
        .btnGroup{
            padding: 18px 15px 15px 15px;
            button{
                width: 100%;
                margin-bottom: 10px;
                font-size: 15px;
                height: 40px;
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
        .bottomText{
            color: #599AF8;
            text-decoration: underline;
            font-size: 14px;
            text-align: center;
            padding-bottom: 25px;
        }
    }
    .loading{
        z-index: 1000;
        position: absolute;
        margin-top: 60%;
        margin-left: 45%;
    }
</style>