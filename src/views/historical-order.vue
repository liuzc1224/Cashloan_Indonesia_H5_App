<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('historicalOrder.title')"
                left-arrow
                @click-left="onClickLeft"
        ></van-nav-bar>
        <van-row class="main main-historical-order">
            <van-overlay :show="loadingState"></van-overlay>
            <van-loading v-if="loadingState" type="spinner" class="loading"  vertical></van-loading>
            <van-row class="noMsg" v-if="orderData.length===0 && !loadingState">
                <van-image :src="url" class="img"></van-image>
                <p>{{$t('historicalOrder.no')}}</p>
            </van-row>
            <van-row  v-if="orderData.length>0 && !loadingState">
                <van-pull-refresh
                        v-model="isLoading"
                        @refresh="onRefresh"
                        :pulling-text="$t('msgCenter.pulling')"
                        :loosing-text="$t('msgCenter.loosing')"
                        :loading-text="$t('msgCenter.loading')"
                >
                    <van-list
                            class="item"
                            v-model="loading"
                            :finished="finished"
                            :finished-text="orderData.length>=10 ? $t('msgCenter.finished') : ''"
                            :loading-text="$t('msgCenter.loading')"
                            @load="onLoad"
                    >
                        <van-row  class="panel" v-for="(item,index) in orderData" :key="`item${index}`" @click="orderDetail(item)">
                            <van-row>
                                <van-col span="24">
                                    <div v-if="item['status']===4 || item['status']===5" style="color: #D10202;text-align: left">{{setStatus(item['status'])}}</div>
                                    <div v-else style="color: #494951;text-align: left">{{setStatus(item['status'])}}</div>
                                </van-col>
                            </van-row>
                            <van-divider class="ho-divider" :style="{ color: '#C7C7C7'}"></van-divider>
                            <van-row>
                                <van-col span="24" class="leftText">
                                    <div>
                                        {{$t('historicalOrder.loanType')}} :
                                    </div>
                                </van-col>
                                <van-col span="24" class="leftText" style="color: #666666">
                                    <div>{{setType(item['orderType'])}}</div>
                                </van-col>
                            </van-row>
                            <van-row>
                                <van-col span="24" class="leftText">
                                    <div>
                                        {{$t('historicalOrder.loanMoney')}} :
                                    </div>
                                </van-col>
                                <van-col span="24" class="leftText" style="color: #666666">
                                    <div>{{item['applyMoney']+'RP'}}</div>
                                </van-col>
                            </van-row>
                            <van-row>
                                <van-col span="24" class="leftText">
                                    <div>
                                        {{$t('historicalOrder.loanLimit')}} :
                                    </div>
                                </van-col>
                                <van-col span="24" class="leftText" style="color: #666666">
                                    <div>{{item['loanMonths'] ? item['loanDays']*item['loanMonths'] : item['loanDays']}}{{$t('historicalOrder.unit')}}</div>
                                </van-col>
                            </van-row>
                            <van-divider class="ho-divider" :style="{ color: '#C7C7C7'}"></van-divider>
                            <van-row>
                                <van-col span="24">
                                    <div style="color: #666666">
                                        {{$t('historicalOrder.createTime')}}
                                        {{toStr(item['orderCreateTime'])}}
                                    </div>
                                </van-col>
                            </van-row>
                        </van-row>
                    </van-list>
                </van-pull-refresh>
            </van-row>
        </van-row>
    </div>
</template>

<script>
    import url from "@/assets/imgs/no_record.png"
    import api from '@/api/index'
    import {formatDate} from '../libs/date'
    export default {
        name: "historical-order",
        data(){
            return{
                isLoading:false,
                loading: false,
                finished: false,
                loadingState:true,
                url:url,
                nextId:null,
                orderData:[]
            }
        },
        mounted(){
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
            onClickLeft() {
                goBack.postMessage("goBack");
                // this.$bridge.goBack();
            },
            onRefresh(){
                this.finished=false;
                let data={
                    nextId: null
                };
                api.orderRecord(data).then(res => {
                    this.isLoading=false;
                    if (res.data.success) {
                        if(res.data.data){
                            this.nextId=res.data.data['nextId'];
                            this.orderData=res.data.data['orderRecordVO'] ? res.data.data['orderRecordVO'] : [];
                        }
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            getData(){
                let data={
                    nextId: null
                };
                api.orderRecord(data).then(res => {
                    this.loadingState=false;
                    if (res.data.success) {
                        if(res.data.data){
                            this.nextId=res.data.data['nextId'];
                            this.orderData=res.data.data['orderRecordVO'] ? res.data.data['orderRecordVO'] : [];
                        }
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            getNextData(){
                if(this.nextId){
                    let data={
                        nextId:this.nextId
                    };
                    api.orderRecord(data).then(res => {
                        this.loading=false;
                        if (res.data.success) {
                            if(res.data.data){
                                this.nextId=res.data.data['nextId'];
                                this.orderData=this.orderData.concat(res.data.data['orderRecordVO']);
                            }
                        } else {
                            this.$notify(res.data.message);
                        }
                    })
                }else{
                    this.loading=false;
                    this.finished=true;
                }
            },
            setType(data){
                let productTypes=this.$t('productTypes');
                if(data!=null){
                    let name=productTypes.filter(v=>{
                        return data===v['value']
                    });
                    return name && name[0] && name[0]['desc'] ? name[0]['desc'] : ""
                }
            },
            setStatus(data){
                let status=this.$t('orderState');
                if(data!=null){
                    let name=status.filter(v=>{
                        return data===v['value']
                    });
                    return name && name[0] && name[0]['desc'] ? name[0]['desc'] : ""
                }
            },
            onLoad() {
                this.getNextData();
            },
            toStr(data) {
                return formatDate(new Date(data), 'dd-MM-yyyy');
            },
            orderDetail(data){
                this.$router.push({
                    name:"order-details",
                    query:{
                        orderId:data['orderId']
                    }
                })
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
        }
    }
</script>

<style lang="less">
    @import "../assets/css/main";
    #app{
        background-image: none;
        background-color: #ffffff;
    }
    .main{
        background-color: #ffffff;
        padding-bottom: 40px;
    }
    .panel{
        margin: 15px 15px 0 15px;
        border: #999999 1PX solid;
        background-color: #f5f5f5;
        color: #666666;
        font-size: 14px;
        padding: 10px;
    }
    .ho-divider{
        margin: 10px 0;
        background-color: #C7C7C7;
    }
    .leftText{
        text-align: left;
        line-height: 25px;
        color: #999999;
    }
    .rightText{
        line-height: 25px;
        text-align: right;
        color: #494951
    }
    .noMsg{
        padding-top: 122px;
        color: #999999;
        font-size: 14px;
        letter-spacing: 1px;
        text-align: center;
        .img{
            width: 140px;
            height: 116px;
        }
    }
    .loading{
        z-index: 1000;
        position: absolute;
        margin-top: 60%;
        margin-left: 45%;
    }
</style>