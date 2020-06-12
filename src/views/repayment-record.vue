<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('repaymentRecord.title')"
                left-arrow
                @click-left="onClickLeft"
        ></van-nav-bar>
        <van-row class="main main-repayment-record">
            <van-overlay :show="loadingState"></van-overlay>
            <van-loading v-if="loadingState" type="spinner" class="loading"  vertical></van-loading>
            <van-row v-if="tableData.length===0 && !loadingState" class="np_record">
                <van-image :src="npRecord"></van-image>
                <p>{{$t('repaymentRecord.noRecord')}}</p>
            </van-row>
            <van-row v-if="tableData.length>0 && !loadingState">
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
                            :finished-text="tableData.length>=10 ? $t('msgCenter.finished') : ''"
                            :loading-text="$t('msgCenter.loading')"
                            @load="onLoad"
                    >
                        <van-row class="item" v-for="(item,index) in tableData" :key="index">
                            <van-col span="5" class="left">
                                <van-image v-if="item['repayType']===1" :src="ft" style="width: 50px"></van-image>
                                <van-image v-else :src="va" style="width: 50px"></van-image>
                            </van-col>
                            <van-col span="19" class="right">
                                <van-row>
                                    <van-col span="24" class="one">
                                        {{$t('repaymentRecord.orderNo')}} : {{item['orderNo'] ? item['orderNo'] : ''}}
                                    </van-col>
                                    <van-col span="18" class="two">
                                        {{$t('repaymentRecord.repayment')}}  {{item['repaymentDate'] ? toStr(item['repaymentDate']) : ''}}
                                    </van-col>
                                    <van-col span="6" class="three">
                                        {{ item['repayMoney'] ? replaceStr((item['repayMoney']).toFixed(2)) : ''}}
                                    </van-col>
                                </van-row>
                            </van-col>
                        </van-row>
                    </van-list>
                </van-pull-refresh>
            </van-row>


        </van-row>
    </div>
</template>

<script>
    import npRecord from "@/assets/imgs/no_record.png"
    import ft from "@/assets/imgs/convenience_store.png"
    import va from "@/assets/imgs/atm.png"
    import api from '@/api/index'
    import {formatDate} from '@/libs/date'
    export default {
        name: "repayment-record",
        data(){
            return{
                isLoading:false,
                finished: false,
                loadingState:true,
                ft,
                va,
                npRecord,
                tableData:[],
                nextId: null,
                loading: false
            }
        },
        mounted(){
            this.getData();
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1);
            },
            toStr(data) {
               return formatDate(new Date(data), 'dd-MM-yyyy');
            },
            replaceStr(data){
                if(data){
                    return "Rp."+(Number(data).toFixed(2)+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                }
            },
            onRefresh(){
                this.finished=false;
                let orderId = this.$route.query.orderId;
                let usrInfo = JSON.parse(window.sessionStorage["loginInfo"]);
                let data={
                    orderId: orderId,
                    useId: usrInfo['id'],
                    nextId: null
                };
                api.repaymentRecord(data).then(res => {
                    this.isLoading=false;
                    if (res.data.success) {
                        if(res.data.data){
                            this.nextId = res.data.data["nextId"];
                            this.tableData = res.data.data["manualRepaymentVO"] ? res.data.data["manualRepaymentVO"] : [];
                        }
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            getData(){
                let orderId = this.$route.query.orderId;
                let usrInfo = JSON.parse(window.sessionStorage["loginInfo"]);
                let data={
                    orderId: orderId,
                    useId: usrInfo['id'],
                    nextId: null
                };
                api.repaymentRecord(data).then(res => {
                    this.loadingState=false;
                    if (res.data.success) {
                        if(res.data.data){
                            this.nextId = res.data.data["nextId"];
                            this.tableData = res.data.data["manualRepaymentVO"] ? res.data.data["manualRepaymentVO"] : [];
                        }
                    } else {
                        this.$notify(res.data.message)
                    }
                })
            },
            getNextData(){
                if(this.nextId){
                    let usrInfo = JSON.parse(window.sessionStorage["loginInfo"]);
                    let data={
                        orderId: orderId,
                        useId: usrInfo['id'],
                        nextId:this.nextId
                    };
                    api.repaymentRecord(data).then(res => {
                        this.loading=false;
                        if (res.data.success) {
                            if(res.data.data){
                                this.nextId = res.data.data["nextId"];
                                this.tableData = res.data.data["manualRepaymentVO"] ? this.tableData.concat(res.data.data["manualRepaymentVO"]) : this.tableData;
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
            onLoad() {
                this.getNextData();
            },
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
        .np_record{
            padding: 167px 110px;
            text-align: center;
            color: #999999;
            font-size: 14px;
            line-height: 30px;
            letter-spacing: 2px;
            p{
                margin-top: 0;
            }
        }
        .item{
            padding-right: 16px;
            background-color: #ffffff;
            .left{
                text-align: center;
                padding-top: 16px;
            }
            .right{
                padding: 16px 0;
                border-bottom: 1PX #C7C7C7 solid;
                .one{
                    color: #494951;
                    font-size: 15px;
                    line-height: 25px;
                }
                .two{
                    color: #999999;
                    font-size: 12px;
                    line-height: 20px;
                }
                .three{
                    color: #494951;
                    font-size: 16px;
                    line-height: 20px;
                    text-align: right;
                }
            }

        }
    }
    .loading{
        z-index: 1000;
        position: absolute;
        margin-top: 60%;
        margin-left: 45%;
    }
</style>