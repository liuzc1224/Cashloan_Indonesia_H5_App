<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('repaymentDetail.title')"
                left-arrow
                @click-left="onClickLeft"
        ></van-nav-bar>
        <van-row class="main">
            <van-overlay :show="loading"></van-overlay>
            <van-loading v-if="loading" type="spinner" class="loading"  vertical></van-loading>
            <div v-else class="repaymentDetail">
                <div class="repaymentDetail_main">
                    <van-row class="repaymentDetail_title">
                        <van-col span="24" class="col">
                            {{repaymentData['orderNo']}}   <span>{{repaymentData['totalPeriod']+$t('repaymentDetail.period')}}</span>
                        </van-col>
                        <van-col span="24" class="col" @click="orderDetail">
                            {{$t('repaymentDetail.view')}}
                        </van-col>
                    </van-row>

                    <van-row class="repaymentDetail_repayment" v-if="repaymentData['stagesRepayInfoVOList'] && repaymentData['stagesRepayInfoVOList'].length>1 && repaymentData['inAdvanceAmount']!=null">
                        <van-col span="24">
                            <van-row>
                                <van-col span="24" class="col">
<!--                                    {{repaymentData['inAdvanceAmount'] ? (repaymentData['inAdvanceAmount']).toFixed(2) : '0.00'}}-->
                                    {{repaymentData['stagesTotalAmount'] ? replaceStr((repaymentData['stagesTotalAmount']).toFixed(2)) : "Rp.0.00"}}
                                    <div @click="prepaymentDetail" class="advance_btn">{{$t('repaymentDetail.inAdvance')}}</div>
                                </van-col>
                                <van-col span="24" class="col">
                                    {{$t('repaymentDetail.shouldStill')}}
                                </van-col>
                            </van-row>
                        </van-col>
                    </van-row>
                    <van-row class="content" v-for="(item,index) in repaymentData['stagesRepayInfoVOList']" :key="`itemList-${index}`">
                        <van-col span="3" class="col">
                            <van-checkbox v-model="item['mayRepay']" checked-color="#4F8AD9" :disabled="item['mayRepay']==null" class="checkbox"></van-checkbox>
                        </van-col>
                        <van-col span="21">
                            <van-row class="row">
                                <van-col span="12" class="one">
                                    <span>{{item['currentPeriod']}}/{{item['totalPeriod']}}</span>
                                    <van-button v-if="item['status']===3 || item['status']===1" plain round class="back_btn blue">{{setStatus(item['status'])}}</van-button>
                                    <van-button v-else-if="item['status']===5 || item['status']===11" plain round class="back_btn red">{{setStatus(item['status'])}}</van-button>
                                    <van-button v-else plain round class="back_btn gray">{{setStatus(item['status'])}}</van-button>
                                </van-col>
                                <van-col span="12" class="two">
                                    {{item['currentRepay'] ? replaceStr((item['currentRepay']).toFixed(2)) : replaceStr((item['alreadyRepayMoney']).toFixed(2))}}
                                </van-col>
                            </van-row>
                            <van-row class="row three">
                                {{$t('repaymentDetail.dateDue')}} {{item['planRepaymentDateStr']}}
                            </van-row>
                            <van-row class="three">
                            <span>
                                {{$t('repaymentDetail.principal')}}
                                {{item['financingMoney'] ? replaceStr((item['financingMoney']).toFixed(2)) : "Rp.0.00"}}
                            </span>
                                <span>
                                +{{$t('repaymentDetail.interest')}}{{item['interest'] ? replaceStr((item['interest']).toFixed(2)) : "Rp.0.00"}}
                            </span>
                            <span>
                                +{{$t('repaymentDetail.serviceCharge')}}{{item['serviceFee'] ? replaceStr((item['serviceFee']).toFixed(2)) : "Rp.0.00"}}
                            </span>

                            <span>
                                +{{$t('repaymentDetail.overdueFee')}}{{item['overDueRateMoney'] ? replaceStr((item['overDueRateMoney']).toFixed(2)) : "Rp.0.00"}}
                            </span>
                            </van-row>
                        </van-col>
                    </van-row>
                </div>
                <div class="btnGroup" v-if="repaymentData && repaymentData['platform']!==1">
                    <!--                    <van-button plain round class="back">{{$t('repaymentDetail.getCode')}}</van-button>-->

                    <van-button plain round class="back" :loading="VALoading" @click="repayment('VA')">{{$t('repaymentDetail.va')}}</van-button>
                    <van-button plain round class="back" :loading="FTLoading" @click="repayment('FT')">{{$t('repaymentDetail.ft')}}</van-button>
                    <!--                    <van-button plain round class="back">{{$t('repaymentDetail.toRepay')}}</van-button>-->
                </div>
                <div class="btnGroup" v-if="repaymentData && repaymentData['platform']===1">
                    <van-button plain round class="back" :loading="dokuLoading" @click="repayment('doku')">{{$t('repaymentDetail.toRepay')}}</van-button>
                </div>
            </div>
        </van-row>
    </div>
</template>

<script>
    import api from '@/api/index'
    export default {
        name: "repayment-detail",
        data(){
            return{
                checked:true,
                loading:false,
                orderId:null,
                repaymentData:{},
                VALoading:false,
                FTLoading:false,
                dokuLoading:false
            }
        },
        mounted(){
            if(this.$route.query.orderId){
                this.orderId=this.$route.query.orderId;
                sessionStorage.setItem("orderId",this.orderId);
            }
            this.getInfo();
            window.callBackFlutter=(data)=>{
                if(data){
                    window.sessionStorage.setItem("loginInfo", JSON.stringify(data));
                    this.getData();
                }else{
                    goLogin.postMessage("goLogin");
                }

            };
        },
        methods:{
            onClickLeft(){
                goBack.postMessage("goBack");
                // this.$bridge.goBack();
            },
            getData(){
                let data={
                    orderId:this.$route.query.orderId ? this.$route.query.orderId : sessionStorage.getItem("orderId")
                };
                api.stagesRepayDetail(data).then(res => {
                    this.loading=false;
                    if (res.data.success) {
                        this.repaymentData=res.data.data;
                    } else {
                        this.$notify(res.data.message)
                    }
                })
            },
            replaceStr(data){
                if(data){
                    return "Rp."+(Number(data).toFixed(2)+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                }
            },
            orderDetail(){
                this.$router.push({
                    name:"order-details",
                    query:{
                        orderId:this.repaymentData['id']
                    }
                })
            },
            prepaymentDetail(){
                if(this.repaymentData['platform']===1){
                    this.$router.push({
                        name:"repayment-code",
                        query:{
                            orderId:this.$route.query.orderId,
                            inAdvance:true
                        }
                    })
                }else{
                    this.$router.push({
                        name:"prepayment",
                        query:{
                            orderId:this.repaymentData['id'],
                            platform:this.repaymentData['platform'] ? this.repaymentData['platform'] : 0
                        }
                    })
                }
            },
            repayment(method){
                let loginInfo=JSON.parse(window.sessionStorage["loginInfo"]);
                let params={
                    eventName:"view_repay_code",
                    deviceId:loginInfo['deviceId'],
                    userId:loginInfo['id']
                };
                let state=this.repaymentData['stagesRepayInfoVOList'].filter(v=>{
                    return v['mayRepay']===true
                });
                if(state.length>0){
                    let data={
                        orderId:this.repaymentData['id'],
                        paymentMethod:method,
                        inAdvance:false,
                        platform:this.repaymentData['platform'] ? this.repaymentData['platform'] : 0
                    };
                    this[method+'Loading']=true;
                    api.event(params).then(request => {
                        if (request.data.success) {
                            if(method==='doku'){
                                this.$router.push({
                                    name:"repayment-code",
                                    query:{
                                        orderId:this.$route.query.orderId,
                                        inAdvance:false
                                    }
                                })
                            }else{
                                api.repaymentCode(data).then(res => {
                                    this[method+'Loading']=false;
                                    if (res.data.success) {
                                        // this.$bridge.paymentUrl(res.data.data.paymentUrl);
                                        openUrl.postMessage(res.data.data.paymentUrl);
                                    } else {
                                        this.$notify(res.data.message)
                                    }
                                })
                            }
                        } else {
                            this[method+'Loading']=false;
                            this.$notify(request.data.message);
                        }
                    })

                }else{
                    this.$notify(this.$t('repaymentDetail.tip'));
                }
            },
            setStatus(data){
                let status=this.$t('repaymentDetail.status');
                if(data!=null){
                    let name=status.filter(v=>{
                        return data===v['value']
                    });
                    return name && name[0]['desc'] ? name[0]['desc'] : ""
                }
            },
            getInfo(){
                getUserLoginInfo.postMessage("callBackFlutter");
                // this.take().then(data => {
                //     console.log("回调", data);
                //     if(data){
                //         window.sessionStorage.setItem("loginInfo", JSON.stringify(data));
                //         this.getData();
                //     }else{
                //         goLogin.postMessage("goLogin");
                //         // this.$bridge.goLogin()
                //     }
                // });
            },
            // take(){
            //     return new Promise((resolve,reject)=>{
            //         this.$bridge["getLoginInfo"](null, res => {
            //             resolve(JSON.parse(res));
            //         });
            //     });
            // }
        },
        watch:{
            "$route":"getData"    //后面是methods中的一个方法
        }
    }
</script>

<style lang="less">
    @import "../assets/css/main";
    .main{
        min-height: calc(100vh - 48px);
        background-color: #EEEEEE;
        .repaymentDetail_title{
            background-color: #FFEED6;
            height: 63px;
            padding: 0 17px 0 17px;
            .col:first-child{
                color: #494951;
                font-size: 15px;
                padding-top: 10px;
                span{
                    padding-left: 20px;
                }
            }
            .col:last-child{
                padding-top: 8px;
                color: #999999;
                font-size: 13px;
            }
        }
        .repaymentDetail_repayment{
            background:linear-gradient(270deg,rgba(173,198,231,1) 0%,rgba(79,138,217,1) 100%);
            padding: 0 15px 10px 15px;
            height: 73.5px;
            .col:first-child{
                color: #ffffff;
                font-size: 24px;
                padding-top: 10px;
            }
            .col:last-child{
                padding-top: 8px;
                color: #ffffff;
                font-size: 15px;
            }
        }
        .content{
            position: relative;
            padding: 16px 16px 16px 0;
            background-color: #ffffff;
            margin-top: 15px;
            .col{
                text-align: center;
                .checkbox{
                    width: 21px;
                    height: 21px;
                    margin: 0 auto;
                }
            }
            .row{
                border-bottom: 1PX #EEEEEE solid;
                .one{
                    color: #494951;
                    font-size: 16px;
                    padding-bottom: 10px;
                    .back_btn{
                        margin-left: 15px;
                        color: #ffffff;
                        height: 21px;
                        font-size: 12px;
                        line-height: 19px;
                        padding-left: 6px;
                        padding-right: 6px;
                    }
                    .blue{
                        background-color: #4F8AD9
                    }
                    .gray{
                        background-color: #999999;
                    }
                    .red{
                        background-color: #F56868
                    }
                }
                .two{
                    color: #494951;
                    font-size: 15px;
                    line-height: 24px;
                    text-align: right;
                }
            }
            .three{
                font-size: 13px;
                color: #999999;
                line-height: 40px;
            }
            .three:last-child{
                line-height: 24px;
                padding: 10px 0 0 0;
            }
        }
        .btnGroup{
            margin-top: 15px;
            padding: 0 15px;
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
        .advance_btn{
            float: right;
            /*height: 33px;*/
            border-radius: 33px;
            line-height: 20px;
            background-color: #4F8AD9;
            color: #ffffff;
            font-size: 15px;
            padding: 5px 20px;
        }
        .repaymentDetail_main{
            height: calc(100vh - 170px);
            overflow-y: auto;
        }
    }
    .loading{
        z-index: 1000;
        position: absolute;
        margin-top: 60%;
        margin-left: 45%;
    }
</style>