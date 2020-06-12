<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('msgCenter.title')"
                left-arrow
                @click-left="onClickLeft"
        >
        </van-nav-bar>
        <van-row  class="main">
            <van-overlay :show="msgLoading"></van-overlay>
            <van-loading v-if="msgLoading" type="spinner" class="loading"  vertical></van-loading>
            <van-pull-refresh
                v-if="list.length>0 && !msgLoading"
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
                        :finished-text="list.length>=10 ? $t('msgCenter.finished') : ''"
                        :loading-text="$t('msgCenter.loading')"
                        @load="onLoad"
                >
                    <van-row
                            v-for="(item,index) in list"
                            :key="index"
                    >
                        <van-row class="time">
                            <span>{{toStr(item['createTime'])}}</span>
                        </van-row>
                        <van-row class="content">
                            <van-col span="24" class="title">
                                {{item['title']}}
                            </van-col>
                            <van-col span="24" class="text">
                                {{item['text']}}
                            </van-col>
                        </van-row>
                    </van-row>
                </van-list>
            </van-pull-refresh>
            <van-row class="noMsg" v-if="list.length===0 && !msgLoading">
                <van-image :src="url" class="img"></van-image>
                <p>{{$t('msgCenter.no')}}</p>
            </van-row>
        </van-row>
    </div>
</template>

<script>
    import api from '@/api/index'
    import url from "@/assets/imgs/no_record.png"
    import {formatDate} from '../libs/date'
    export default {
        name: "message-center",
        data(){
            return{
                url:url,
                isLoading:false,
                list: [],
                nextId: null,
                loading: false,
                msgLoading: true,
                finished: false
            }
        },
        mounted(){
           this.getInfo();
            window.callBackFlutter=(data)=>{
                if(data){
                    window.sessionStorage.setItem("loginInfo", JSON.stringify(data));
                    this.getData();
                    api.readMsg();
                }else{
                    goLogin.postMessage("goLogin");
                }

            };
        },
        methods:{
            getData(){
              let data={
                  nextId: this.nextId,
                  limit:10
              };
                api.getMsg(data).then(res => {
                    this.loading=false;
                    this.msgLoading=false;
                    if (res.data.success) {
                        this.nextId = res.data.data["nextId"] && res.data.data["nextId"]>0 ? res.data.data["nextId"] : null;
                        if(res.data.data["appPushHistoryOutputBOList"]){
                            this.list = res.data.data["appPushHistoryOutputBOList"];
                        }
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            onClickLeft(){
                goBack.postMessage("goBack");
                // this.$bridge.goBack();
            },
            onRefresh(){
                this.finished=false;
                let data={
                    nextId: null,
                    limit:10
                };
                api.getMsg(data).then(res => {
                    this.isLoading=false;
                    if (res.data.success) {
                        this.nextId = res.data.data["nextId"] && res.data.data["nextId"]>0 ? res.data.data["nextId"] : null;
                        if(res.data.data["appPushHistoryOutputBOList"]){
                            this.list = res.data.data["appPushHistoryOutputBOList"];
                        }
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            getNextData(){
                if(this.nextId){
                    let data={
                        nextId: this.nextId,
                        limit:10
                    };
                    api.getMsg(data).then(res => {
                        this.loading=false;
                        if (res.data.success) {
                            this.nextId = res.data.data["nextId"] && res.data.data["nextId"]>0 ? res.data.data["nextId"] : null;
                            if(res.data.data["appPushHistoryOutputBOList"]){
                                this.list = this.list.concat(
                                    res.data.data["appPushHistoryOutputBOList"]
                                );
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
            toStr(data) {
                return formatDate(new Date(data), 'dd-MM-yyyy hh:mm:ss');
            },
            getInfo(){
                getUserLoginInfo.postMessage("callBackFlutter");
                // this.take().then(data => {
                //     if(data){
                //         window.sessionStorage.setItem("loginInfo", JSON.stringify(data));
                //         this.getData();
                //         api.readMsg();
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
            // },
        }
    }
</script>

<style lang="less">
    @import "../assets/css/main";
    .main{
        background-color: #EEEEEE;
        padding-bottom: 20px;
    }
    .item{
       padding: 0 15px;
        .time{
            color: #ffffff;
            text-align: center;
            span{
                background-color: #CCCCCC;
                font-size: 12px;
                padding: 2px 20px;
                border-radius: 19px;
            }
            padding: 15px 0 11px 0px;
        }
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
    .content{
        background: #ffffff;
        padding: 16px 29px 16px 16px;
        .title{
            color: #494951;
            font-size: 16px;
            padding-bottom: 21px;
        }
        .text{
            font-size: 14px;
            color: #999999;
            line-height: 18px;
        }
    }
    .loading{
        z-index: 1000;
        position: absolute;
        margin-top: 60%;
        margin-left: 45%;
    }
</style>