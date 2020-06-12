<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('helpCenter.title')"
                left-arrow
                @click-left="onClickLeft"
        >
        </van-nav-bar>
        <van-row  class="main">
            <van-overlay :show="loading"></van-overlay>
            <van-loading v-if="loading" type="spinner" class="loading"  vertical></van-loading>
            <van-row v-else>
                <van-row class="btnGroup">
                    <van-col span="12">
                        <div class="btn" @click="phone">{{$t('helpCenter.phone')}}</div>
                    </van-col>
                    <van-col span="12">
                        <div class="btn" @click="feedBack">{{$t('helpCenter.feedback')}}</div>
                    </van-col>
                </van-row>
                <van-panel v-for="(item,index) of helpData" :key="index">
                    <div slot="header" class="header-text">
                        <van-row>
                            <van-col span="1">
                                <div class="blue"></div>
                            </van-col>
                            <van-col span="17" class="textCenter">
                                {{item['title']}}
                            </van-col>
                            <van-col span="6" class="rightIcon">
                                <van-col span="12" @click="good(item)">
                                    <van-icon class="iconfont" :class="item['usefulEnum']==='USEFUL' ? 'active' : ''" class-prefix="my-icon" name="haoping"></van-icon>
                                    <div class="rightIconText">{{$t('helpCenter.itWorks')}}</div>
                                </van-col>
                                <van-col span="12" @click="bad(item)">
                                    <van-icon class="iconfont" :class="item['usefulEnum']==='USELESS' ? 'active' : ''"  class-prefix="my-icon" name="cai"></van-icon>
                                    <div class="rightIconText">{{$t('helpCenter.useless')}}</div>
                                </van-col>
                            </van-col>
                        </van-row>
                        <van-divider class="divider"></van-divider>
                    </div>
                    <div class="text">{{item['contents']}}</div>
                </van-panel>
            </van-row>

        </van-row>
    </div>
</template>

<script>
import api from '@/api/index'
    export default {
        name: "help-center",
        data(){
            return{
                helpData:[],
                loading:true
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
                    // this.$bridge.goLogin()
                }
            };
        },
        methods:{
            onClickLeft(){
                goBack.postMessage("goBack");
                // this.$bridge.goBack();
            },
            getData(){
                api.helpCenter().then(res => {
                    this.loading=false;
                    if (res.data.success) {
                        this.helpData = res.data.data;
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            phone(){
                Call.postMessage("Call");
                // this.$bridge.getCall();
            },
            feedBack(){
                toFeedBack.postMessage("toFeedBack");
                // this.$router.push({
                //     name:"feed-back"
                // })
            },
            good(data){
                this.loading=true;
                let str=data['usefulEnum']==='USEFUL' ? 'NOT_SELECT' : 'USEFUL';
                let params={
                    helpId:data['id'],
                    usefulEnum:str
                };
                api.helpCenterChose(params).then(res => {
                    if (res.data.success) {
                        this.getData();
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            bad(data){
                this.loading=true;
                let str=data['usefulEnum']==='USELESS' ? 'NOT_SELECT' : 'USELESS';
                let params={
                    helpId:data['id'],
                    usefulEnum:str
                };
                api.helpCenterChose(params).then(res => {
                    if (res.data.success) {
                        this.getData();
                    } else {
                        this.$notify(res.data.message);
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
            // },
        }
    }
</script>

<style lang="less">
    @import "../assets/css/main";
    .item{
        background: #EEEEEE;
        padding: 15px 15px 0 15px;
        .van-image{
            width: 140px;
        }
        .text{
            position: absolute;
            padding-right: 15px;
            color: #494951;
            font-size: 14px;
            line-height: 21px;
            padding-top: 95px;
        }
    }
    .btn{
        width: 90%;
        color: #4F8AD9;
        height: 28px;
        line-height: 28px;
        font-size: 15px;
        border:2PX solid #4F8AD9;
        border-radius: 28px;
        margin: 15px auto;
    }
    .btnGroup{
        text-align: center;
    }
    .item{
        background-color: #ffffff;
    }
    .text{
        padding: 11px 16px 16px 16px;
        color: #999999;
        font-size: 15px;
        line-height: 17px;
    }
    .blue{
        background-color: #4F8AD9;
        width: 8px;
        height: 14px;
        float: left;
    }
    .header-text{
        padding-top: 10px;
        .textCenter{
            color: #494951;
            font-size: 16px;
            line-height: 18px;
            padding-left: 5px;
        }
    }
    .rightIcon{
        text-align: center;
        .iconfont{
            font-size: 15px;
            color: #494951;
        }
        .active{
            color: #4F8AD9;
        }
        .rightIconText{
            width: 100%;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size: 12px;
            color: #999999;
        }
    }
    .divider{
        margin: 0;
    }
    .loading{
        z-index: 1000;
        position: absolute;
        margin-top: 60%;
        margin-left: 45%;
    }
</style>