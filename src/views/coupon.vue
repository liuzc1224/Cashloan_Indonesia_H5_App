<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('coupon.title')"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        >
            <van-icon name="coupon-o" slot="right"></van-icon>
        </van-nav-bar>
        <van-row  class="main coupon-main">
            <van-overlay :show="loadingState"></van-overlay>
            <van-loading v-if="loadingState" type="spinner" class="loading"  vertical></van-loading>
            <van-tabs
                    v-else
                    v-model="activeName"
                    sticky
                    color="#599AF8"
                    title-active-color="#599AF8"
                    title-inactive-color="#494951"
                    line-width="40"
                    line-height="4"
                    :swipeable="true"
                    :animated="true"
                    @click="onClick"
            >
                <van-tab :title="$t('coupon.toBeUsed')" name="1">
                    <van-row class="noCoupon" v-if="couponData.length===0">
                        <van-image :src="img"></van-image>
                        <p>{{$t('coupon.noCoupons')}}</p>
                    </van-row>
                    <van-pull-refresh
                            v-else
                            v-model="isLoadingFirst"
                            @refresh="onRefreshFirst"
                            :pulling-text="$t('msgCenter.pulling')"
                            :loosing-text="$t('msgCenter.loosing')"
                            :loading-text="$t('msgCenter.loading')"
                    >
                        <van-list
                                class="item"
                                v-model="loadingFirst"
                                :finished="finishedFirst"
                                :finished-text="couponData.length>=10 ? $t('msgCenter.finished') : ''"
                                :loading-text="$t('msgCenter.loading')"
                                @load="onLoadFirst"
                        >
                            <van-row class="couponItem" v-for="(item,index) in couponData" :key="`itemList-${index}`" @click="jumpDescription(item)">
                                <van-row class="couponItemTitle">
                                    <van-col span="8" class="one">
                                        {{setValue(item)}}
                                    </van-col>
                                    <van-col span="16" class="two">
                                        <van-row>
                                            {{setText(item)}}
                                        </van-row>
                                        <van-row style="color: #FF8400">
                                            {{setStatus(item['status'])}}
                                        </van-row>
                                    </van-col>
                                </van-row>
                                <van-row class="couponItemTime">
                                    {{$t('coupon.time')}} {{item['beginDate']}}~{{item['endDate']}}
                                </van-row>
                            </van-row>
                        </van-list>
                    </van-pull-refresh>
                </van-tab>
                <van-tab :title="$t('coupon.used')" name="2">
                    <van-row class="noCoupon" v-if="couponDataTwo.length===0">
                        <van-image :src="img"></van-image>
                        <p>{{$t('coupon.noCoupons')}}</p>
                    </van-row>
                    <van-pull-refresh
                            v-else
                            v-model="isLoadingTwo"
                            @refresh="onRefreshTwo"
                            :pulling-text="$t('msgCenter.pulling')"
                            :loosing-text="$t('msgCenter.loosing')"
                            :loading-text="$t('msgCenter.loading')"
                    >
                        <van-list
                                class="item"
                                v-model="loadingTwo"
                                :finished="finishedTwo"
                                :finished-text="couponDataTwo.length>=10 ? $t('msgCenter.finished') : ''"
                                :loading-text="$t('msgCenter.loading')"
                                @load="onLoadTwo"
                        >
                            <van-row class="couponItem" v-for="(item,index) in couponDataTwo" :key="`used-${index}`">
                                <van-row class="couponItemTitle">
                                    <van-col span="8" class="one">
                                        {{setValue(item)}}
                                    </van-col>
                                    <van-col span="16" class="two">
                                        <van-row>
                                            {{setText(item)}}
                                        </van-row>
                                        <van-row style="color: #FF8400">
                                            {{setStatus(item['status'])}}
                                        </van-row>
                                    </van-col>
                                </van-row>
                                <van-row class="couponItemTime">
                                    {{$t('coupon.time')}} {{item['beginDate']}}~{{item['endDate']}}
                                </van-row>
                            </van-row>

                        </van-list>
                    </van-pull-refresh>
                </van-tab>
                <van-tab :title="$t('coupon.expired')" name="3">
                    <van-row class="noCoupon" v-if="couponDataThree.length===0">
                        <van-image :src="img"></van-image>
                        <p>{{$t('coupon.noCoupons')}}</p>
                    </van-row>
                    <van-pull-refresh
                            v-else
                            v-model="isLoadingThree"
                            @refresh="onRefreshThree"
                            :pulling-text="$t('msgCenter.pulling')"
                            :loosing-text="$t('msgCenter.loosing')"
                            :loading-text="$t('msgCenter.loading')"
                    >
                        <van-list
                                class="item"
                                v-model="loadingThree"
                                :finished="finishedThree"
                                :finished-text="couponDataThree.length>=10 ? $t('msgCenter.finished') : ''"
                                :loading-text="$t('msgCenter.loading')"
                                @load="onLoadThree"
                        >
                            <van-row class="couponItem" v-for="(item,index) in couponDataThree" :key="`expired-${index}`">
                                <van-row class="couponItemTitle">
                                    <van-col span="8" class="one">
                                        {{item['value']===0 ? 0 :setValue(item)}}
                                    </van-col>
                                    <van-col span="16" class="two">
                                        <van-row>
                                            {{setText(item)}}
                                        </van-row>
                                        <van-row v-if="item['isEffective']===1 && item['status']===1" style="color: #FF8400">
                                            <span>{{$t("coupon.notActive")}}</span>
                                        </van-row>
                                        <van-row  v-else>
                                            <span>{{setStatus(item['status'])}}</span>
                                        </van-row>
                                    </van-col>
                                </van-row>
                                <van-row class="couponItemTime">
                                    {{$t('coupon.time')}} {{item['beginDate']}}~{{item['endDate']}}
                                </van-row>
                            </van-row>

                        </van-list>
                    </van-pull-refresh>
                </van-tab>
            </van-tabs>
        </van-row>
    </div>
</template>

<script>
    import Bridge from '@/libs/bridge'
    import api from "@/api/index"
    import img from "@/assets/imgs/coupon.png"
    export default {
        name: "coupon",
        data(){
            return{
                img:img,
                activeName: '1',
                couponData: [],
                couponDataTwo: [],
                couponDataThree: [],
                loadingState:true,



                nextIdFirst:null,
                isLoadingFirst:false,
                loadingFirst: false,
                finishedFirst: false,

                nextIdTwo:null,
                isLoadingTwo:false,
                loadingTwo: false,
                finishedTwo: false,

                nextIdThree:null,
                isLoadingThree:false,
                loadingThree: false,
                finishedThree: false,
            }
        },
        mounted(){
            this.getInfo();
            window.callBackFlutter=(data)=>{
                if(data){
                    window.sessionStorage.setItem("loginInfo", JSON.stringify(data));
                    this.getData(this.activeName);
                }else{
                    goLogin.postMessage("goLogin");
                    // this.$bridge.goLogin()
                }

            };
        },
        methods:{
            onClickLeft(){
                goBack.postMessage("goBack");
                // Bridge.goBack();
            },
            onClickRight(){
                this.$router.push({
                    name:"coupon-center"
                })
            },
            getData(status){
                let data={
                    status:status,
                    nextId: null
                };
                api.getCoupons(data).then(res => {
                    this.loadingState=false;
                    if (res.data.success) {
                        if(status==1){
                            this.nextIdFirst = res.data.data ? res.data.data["nextId"] : null;
                            this.couponData=res.data.data ? res.data.data['personalCouponOutputVO'] : [];
                        }else if(status==2){
                            this.nextIdTwo = res.data.data ? res.data.data["nextId"] : null;
                            this.couponDataTwo=res.data.data ? res.data.data['personalCouponOutputVO'] : [];
                        }else{
                            this.nextIdThree = res.data.data ? res.data.data["nextId"] : null;
                            this.couponDataThree=res.data.data ? res.data.data['personalCouponOutputVO'] : [];
                        }

                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            onClick(name, title) {
                this.getData(name);
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
                            name =  this.$t('coupon.loan') + status + '，' + this.$t('coupon.interestReduction') + item['value'].toFixed(2) + '%';
                            break;
                        }
                        case 3: {
                            name =  this.$t('coupon.loan') + status + '，'+this.$t('coupon.offer.dayFree1') + item['days'] + this.$t('coupon.offer.dayFree2');
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
                            name = this.$t('coupon.noThreshold') + '，' +this.$t('coupon.offer.interestReduction')+ item['value'].toFixed(2) + '%';
                            break;
                        }
                        case 3: {
                            name = this.$t('coupon.noThreshold') + '，'+this.$t('coupon.offer.dayFree1') + item['days'] + this.$t('coupon.offer.dayFree2');
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
            jumpDescription(data){
                this.$router.push({
                    name: "coupon-description",
                    params:{
                        id:data['id']
                    }
                })
            },
            onRefreshFirst(){
                this.finishedFirst=false;
                let data={
                    status:this.activeName,
                    nextId: null
                };
                api.getCoupons(data).then(res => {
                    this.isLoadingFirst=false;
                    if (res.data.success) {
                        if(res.data.data) {
                            this.nextIdFirst = res.data.data["nextId"];
                            this.couponData=res.data.data['personalCouponOutputVO']
                        }else{
                            this.nextIdFirst = null;
                            this.couponData = [];
                        }
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            onLoadFirst(){
                if(this.nextIdFirst){
                    let data={
                        status:this.activeName,
                        nextId:this.nextId
                    };
                    api.getCoupons(data).then(res => {
                        this.isLoadingFirst=false;
                        if (res.data.success) {
                            if(res.data.data) {
                                this.nextIdFirst = res.data.data["nextId"];
                                this.couponData=this.couponData.concat(res.data.data['personalCouponOutputVO'])
                            }
                        } else {
                            this.$notify(res.data.message);
                        }
                    })
                }else{
                    this.loadingFirst=false;
                    this.finishedFirst=true;
                }
            },
            onRefreshTwo(){
                this.finishedTwo=false;
                let data={
                    status:this.activeName,
                    nextId: null
                };
                api.getCoupons(data).then(res => {
                    this.isLoadingTwo=false;
                    if (res.data.success) {
                        if(res.data.data) {
                            this.nextIdTwo = res.data.data["nextId"];
                            this.couponDataTwo = res.data.data['personalCouponOutputVO'];
                        }else{
                            this.nextIdTwo = null;
                            this.couponDataTwo = [];
                        }
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            onLoadTwo(){
                if(this.nextIdTwo){
                    let data={
                        status:this.activeName,
                        nextId:this.nextId
                    };
                    api.getCoupons(data).then(res => {
                        this.isLoadingTwo=false;
                        if (res.data.success) {
                            if(res.data.data) {
                                this.nextIdTwo = res.data.data["nextId"];
                                this.couponDataTwo=this.couponData.concat(res.data.data['personalCouponOutputVO'])
                            }
                        } else {
                            this.$notify(res.data.message);
                        }
                    })
                }else{
                    this.loadingTwo=false;
                    this.finishedTwo=true;
                }
            },
            onRefreshThree(){
                this.finishedThree=false;
                let data={
                    status:this.activeName,
                    nextId: null
                };
                api.getCoupons(data).then(res => {
                    this.isLoadingThree=false;
                    if (res.data.success) {
                        if(res.data.data){
                            this.nextIdThree = res.data.data["nextId"];
                            this.couponDataThree=res.data.data['personalCouponOutputVO'];
                        }else{
                            this.nextIdThree = null;
                            this.couponDataThree = [];
                        }
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            onLoadThree(){
                if(this.nextIdThree){
                    let data={
                        status:this.activeName,
                        nextId:this.nextId
                    };
                    api.getCoupons(data).then(res => {
                        this.isLoadingThree=false;
                        if (res.data.success) {
                            if(res.data.data){
                                this.nextIdThree =res.data.data["nextId"];
                                this.couponData=this.couponData.concat(res.data.data['personalCouponOutputVO'])
                            }

                        } else {
                            this.$notify(res.data.message);
                        }
                    })
                }else{
                    this.loadingThree=false;
                    this.finishedThree=true;
                }
            },
            getInfo(){
                getUserLoginInfo.postMessage("callBackFlutter");
                // this.take().then(data => {
                //     console.log("回调", data);
                //     if(data){
                //         window.sessionStorage.setItem("loginInfo", JSON.stringify(data));
                //         this.getData(this.activeName);
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
        background-color: #ffffff;
    }
    .van-ellipsis{
        font-size: 14px;
    }
    .coupon-main{
        background-color: #ffffff;
    }
    .noCoupon{
        padding: 110px 110px;
        text-align: center;
        color: #999999;
        font-size: 14px;
        line-height: 30px;
        letter-spacing: 2px;
        p{
            margin-top: 0;
        }
    }
    .van-nav-bar{
        background-color: #4F8AD9;
        font-size: 18px;
        height: 48px;
    }
    .van-nav-bar__title,.van-nav-bar__text,.van-nav-bar .van-icon{
        color: white;
        font-size: 25px;
    }
    .van-nav-bar__right .van-icon-coupon-o{
        font-size: 23px;
    }
    .couponItem{
        padding: 15px 15px 0 15px;
        .couponItemTitle{
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
                word-break: break-all;
                font-size: 15px;
                line-height: 23px;
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
    .loading{
        z-index: 1000;
        position: absolute;
        margin-top: 60%;
        margin-left: 45%;
    }
</style>