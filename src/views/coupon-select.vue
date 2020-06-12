<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('couponSelect.title')"
                left-arrow
                @click-left="onClickLeft"
        >
        </van-nav-bar>
        <van-row  class="main main-coupon-select">
            <van-overlay :show="loadingState"></van-overlay>
            <van-loading v-if="loadingState" type="spinner" class="loading"  vertical></van-loading>
            <div v-if="couponData.length===0 && !loadingState" class="coupon-select-main">
                <van-radio-group v-model="radio">
                    <van-cell-group>
                        <van-cell clickable @click="radio = '-1'">
                            <template slot="title">
                                <div>{{$t('couponSelect.noSelect')}}</div>
                            </template>
                            <van-radio slot="right-icon" name="-1" />
                        </van-cell>
                    </van-cell-group>
                </van-radio-group>
                <van-row class="coupon-select-on">
                    <van-image :src="img"></van-image>
                    <p>{{$t('coupon.noCoupons')}}</p>
                </van-row>
            </div>
            <van-pull-refresh
                    class="coupon-select-main"
                    v-if="couponData.length>0 && !loadingState"
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
                        :finished-text="couponData.length>=10 ? $t('msgCenter.finished') : ''"
                        :loading-text="$t('msgCenter.loading')"
                        @load="onLoad"
                >
                    <van-radio-group v-model="radio" class="coupon-select-radio">
                        <van-cell-group>
                            <van-cell :title="$t('couponSelect.noSelect')" clickable @click="radio = '-1'">
                                <van-radio slot="right-icon" name="-1" />
                            </van-cell>

                                <van-cell style="background-color: #eee" class="coupon-select-item" v-for="(item,index) in couponData" :key="`itemList-${index}`" clickable @click="this.radio=item['id']">
                                <template slot="title">
                                    <div class="coupon-select-item-list">
                                        <van-row class="couponItemTitle">
                                            <van-col span="8" class="one">
                                                {{setValue(item)}}
                                            </van-col>
                                            <van-col span="16" class="two">
                                                <van-row>
                                                    {{setText(item)}}
                                                </van-row>
                                                <van-row>
                                                    {{setStatus(item['status'])}}
                                                </van-row>
                                            </van-col>
                                        </van-row>
                                        <van-row class="couponItemTime">
                                            {{$t('coupon.time')}} {{item['beginDate']}}~{{item['endDate']}}
                                        </van-row>
                                    </div>

                                </template>
                                <van-radio slot="right-icon" :disabled="item['isEffective']===1" :name="item['id']"></van-radio>
                            </van-cell>
                        </van-cell-group>
                    </van-radio-group>
                </van-list>
            </van-pull-refresh>
            <van-row v-if="!loadingState" class="bottom_btn-group">
                <van-col span="12" class="btn-select">
                    <van-button plain round type="primary"  color="#4F8AD9" @click="onClickLeft">{{$t('couponSelect.cancel')}}</van-button>
                </van-col>
                <van-col span="12" class="btn-select">
                    <van-button round type="primary" :loading="btnLoading" color="#4F8AD9" loading-type="spinner" @click="submit">{{$t('couponSelect.ok')}}</van-button>
                </van-col>
            </van-row>
        </van-row>
    </div>
</template>

<script>
    import api from "@/api/index"
    import img from "@/assets/imgs/coupon.png"
    export default {
        name: "coupon-select",
        data(){
            return{
                img:img,
                couponData: [],
                loadingState:true,
                // radio:60,
                radio:this.$route.query.id!=null ? this.$route.query.id-0 : '-1',
                btnLoading:false,
                isLoading:false,
                loading: false,
                finished: false,
            }
        },
        mounted(){
            this.getInfo();
            window.callBackFlutter=(data)=>{
                if(data){
                    window.sessionStorage.setItem("loginInfo", JSON.stringify(data));
                    this.getData(1);
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
            getData(status){
                let data={
                    status:status
                };
                api.getCoupons(data).then(res => {
                    this.loadingState=false;
                    if (res.data.success) {
                        if(res.data.data){
                            this.nextId=res.data.data['nextId'];
                            this.couponData=res.data.data['personalCouponOutputVO'] ? res.data.data['personalCouponOutputVO'] :[];
                        }
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            setStatus(data){
                let unit=this.$t('coupon.state');
                if(data!=null){
                    let name=unit.filter(v=>{
                        return data===v['value']
                    });
                    return name && name[0]['desc'] ? name[0]['desc'] : ""
                }
            },
            replaceStr(data){
                if(data){
                    return "Rp."+(Number(data).toFixed(2)+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                }
            },
            setText(item){
                let name;
                const status = item['conditions'];
                const type = item['couponType'];
                if (status) {
                    switch (type) {
                        case 1: {
                            name = this.$t('coupon.loan') + status+ '，' + this.$t('coupon.interestReduction') + this.replaceStr(item['value']);
                            break;
                        }
                        case 2: {
                            name =  this.$t('coupon.loan') + status + '，' + this.$t('coupon.interestRateReduction') + item['value'].toFixed(2) + '%';
                            break;
                        }
                        case 3: {
                            name =  this.$t('coupon.loan') + status + '，' + this.$t('coupon.offer.dayFree1') + item['days'] + this.$t('coupon.offer.dayFree2');
                            break;
                        }
                    }
                } else {
                    switch (type) {
                        case 1: {
                            name = this.$t('coupon.noThreshold') + '，' + this.$t('coupon.offer.interestReduction')+ this.replaceStr(item['value']);
                            break;
                        }
                        case 2: {
                            name = this.$t('coupon.noThreshold') + '，' +this.$t('coupon.offer.interestRateReduction')+ item['value'].toFixed(2) + '%';
                            break;
                        }
                        case 3: {
                            name = this.$t('coupon.noThreshold') + '，' + this.$t('coupon.offer.dayFree1') + item['days'] + this.$t('coupon.offer.dayFree2');
                            break;
                        }
                    }
                }
                return (name) ? name : '';
            },
            setValue(item){
                let name;
                const status = item['conditions'];
                const type = item['couponType'];
                if (status) {
                    switch (type) {
                        case 1: {
                            name = this.replaceStr(item['value']);
                            break;
                        }
                        case 2: {
                            name = item['value'].toFixed(2) + '%';
                            break;
                        }
                        case 3: {
                            name = item['days'];
                            break;
                        }
                    }
                } else {
                    switch (type) {
                        case 1: {
                            name = this.replaceStr(item['value']);
                            break;
                        }
                        case 2: {
                            name = item['value'].toFixed(2) + '%';
                            break;
                        }
                        case 3: {
                            name = item['days'];
                            break;
                        }
                    }
                }
                return (name) ? name : '';
            },
            submit(){
                console.log(this.radio);
                if(this.radio===-1){
                    // this.$bridge.getCoupon(null);
                    getCoupon.postMessage(null);
                }else{
                    let json=this.couponData.filter(v=>{
                        return v['id']===this.radio
                    });
                    let str=json && json[0] ? json[0] : null;
                    console.log(JSON.stringify(str));
                    // this.$bridge.getCoupon(str);
                    getCoupon.postMessage(JSON.stringify(str));
                }
            },
            onRefresh(){
                this.finished=false;
                let data={
                    status:1,
                    nextId: null
                };
                api.getCoupons(data).then(res => {
                    this.isLoading=false;
                    if (res.data.success) {
                        if(res.data.data){
                            this.nextId=res.data.data['nextId'];
                            this.couponData=res.data.data['personalCouponOutputVO'] ? res.data.data['personalCouponOutputVO'] :[];
                        }
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            getNextData(){
                if(this.nextId){
                    let data={
                        status:1,
                        nextId:this.nextId
                    };
                    api.getCoupons(data).then(res => {
                        this.loading=false;
                        if (res.data.success) {
                            if(res.data.data){
                                this.nextId=res.data.data['nextId'];
                                this.couponData=this.couponData.concat(res.data.data['personalCouponOutputVO']);
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
            getInfo(){
                getUserLoginInfo.postMessage("callBackFlutter");
                // this.take().then(data => {
                //     console.log("回调", data);
                //     if(data){
                //         window.sessionStorage.setItem("loginInfo", JSON.stringify(data));
                //         this.getData(1);
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
    #app {
        background-image: none;
        background-color: #EEEEEE;
    }
    .main-coupon-select{
        color: #999999;
        background-color: #EEEEEE;
    }
    .van-ellipsis{
        font-size: 14px;
    }
    .coupon-select-on{
        padding: 80px 110px;
        text-align: center;
        color: #999999;
        font-size: 14px;
        line-height: 30px;
        letter-spacing: 2px;
        p{
            margin-top: 0;
        }
    }
    .van-nav-bar__right .van-icon-coupon-o{
        font-size: 23px;
    }
    .coupon-select-item{
        width: 100%;
        background-color: #EEEEEE;
        .coupon-select-item-list{
            width: 95%;
            .couponItemTitle{
                height: 75px;
                background: url("../assets/imgs/coupon2.png") no-repeat;
                -moz-background-size:100% 100%;
                background-size: 100% 100%;
                color: #ffffff;
                .one{
                    text-align: center;
                    font-size: 22px;
                    line-height: 75px;
                }
                .two{
                    font-size: 15px;
                    line-height: 20px;
                    padding-top: 18px;
                }
            }
            .couponItemTime{
                height: 42px;
                background: url("../assets/imgs/coupon1.png") no-repeat;
                -moz-background-size:100% 100%;
                background-size: 100% 100%;
                padding-left: 17px;
                color: #C8C8C8;
                font-size: 12px;
                line-height: 35px;
            }
        }

    }
    .loading{
        z-index: 1000;
        position: absolute;
        margin-top: 60%;
        margin-left: 45%;
    }
    .van-radio__icon .van-icon{
        border: 1PX solid #999999;
    }
    .btn-select{
        text-align: center;
        button{
            width: 80%;
            font-size: 15px;
            height: 40px;
            line-height: 40px;
        }
    }
    .coupon-select-main{
        height: calc(100vh - 100px);
        overflow-y: auto;
    }
</style>