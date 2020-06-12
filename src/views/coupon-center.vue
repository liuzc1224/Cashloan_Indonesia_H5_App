<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('couponCenter.title')"
                left-arrow
                @click-left="onClickLeft"
        >
        </van-nav-bar>
        <van-row  class="main coupon-main-center">
            <van-overlay :show="loadingState"></van-overlay>
            <van-loading v-if="loadingState" type="spinner" class="loading"  vertical></van-loading>
            <van-row v-else-if="couponCenterData.length===0" class="noCoupon">
                <van-image :src="img"></van-image>
                <p>{{$t('coupon.noCoupons')}}</p>
            </van-row>
            <van-row  v-else>
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
                            :finished-text="couponCenterData.length>=10 ? $t('msgCenter.finished') : ''"
                            :loading-text="$t('msgCenter.loading')"
                            @load="onLoad"
                    >
                        <van-row class="couponItem" v-for="(item,index) in couponCenterData" :key="`itemList-${index}`">
                    <van-row v-bind:class="[item['receiveOrNot']!=null && item['receiveOrNot']===1 ? 'receive' : 'not','couponTitle']">
                        <van-row class="one">
                            <van-col span="12" class="oneTitle">
                                {{setTypeValue(item)}}
                            </van-col>
                            <van-col span="12" class="oneText">
                                <div :class="[item['receiveOrNot']!=null && item['receiveOrNot']===1 ? 'background-css' : 'background-not','css']">
                                   {{setTypeValue(item)}}
                                </div>
                            </van-col>
                        </van-row>

                        <van-row class="two">
                            <van-col span="14" class="twoTitle">
                                {{setText(item)}}
                            </van-col>
                            <van-col span="10">
                                <div v-if="item['receiveOrNot']!=null && item['receiveOrNot']===1" class="twoBtn" @click="activeCoupon(item)">
                                    {{$t('couponCenter.receive')}}
                                </div>
                                <van-image v-else :src="imgUrl" class="img"></van-image>

                            </van-col>
                        </van-row>
                    </van-row>
                    <van-row class="description" @click="active(index)">
                        <van-row>
                            <van-col span="14" :class="[item['receiveOrNot']!=null && item['receiveOrNot']===1 ? 'descriptionOne-receive' : 'descriptionOne-not','descriptionOne']">
                                <span v-if="item['expDays']!=null && item['dateType']!=null">
                                    {{$t('couponCenter.receiveRear')}}{{item['expDays']}}{{setDay(item['dateType'])}}{{$t('couponCenter.effective')}}
                                </span>
                                <span v-else>
                                    {{item['beginDate']}}~{{item['endDate']}}{{$t('couponCenter.effective')}}
                                </span>
                            </van-col>
                            <van-col span="10" class="descriptionTwo">
                                <span v-if="!activeName.includes(index)">{{$t("couponCenter.description")}}</span>
                                <van-icon name="arrow-down" v-if="activeName.includes(index)"></van-icon>
                                <van-icon name="arrow-up" v-if="!activeName.includes(index)"></van-icon>
                            </van-col>
                        </van-row>
                        <van-row class="descriptionText" v-if="activeName.includes(index)">
                            <p>
                                {{$t("couponCenter.description")}}: {{item['couponDescription']}}
                            </p>

                        </van-row>
                    </van-row>
                </van-row>
                    </van-list>
                </van-pull-refresh>
            </van-row>

        </van-row>
    </div>
</template>

<script>
    import img from "@/assets/imgs/coupon.png"
    import imgUrl from "@/assets/imgs/finished.png"
    import api from "@/api/index"
    export default {
        name: "coupon-center",
        data(){
            return{
                img:img,
                imgUrl:imgUrl,
                activeName: [],
                couponCenterData: [],
                loadingState:true,
                isLoading:false,
                loading: false,
                finished: false,
            }
        },
        mounted(){
            this.getData();
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1);
            },
            active(data){
                let str=this.activeName.indexOf(data);
                if(str===-1){
                    this.activeName.push(data);
                }else{
                    this.activeName.splice(str,1)
                }
            },
            getData(){
                let data={
                    nextId:null
                };
                api.getCouponCenter(data).then(res => {
                    this.loadingState=false;
                    if (res.data.success) {
                        if(res.data.data){
                            this.nextId=res.data.data['nextId'];
                            this.couponCenterData=res.data.data['couponOutputVO'];
                        }
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            onRefresh(){
                this.finished=false;
                let data={
                    nextId:null
                };
                api.getCouponCenter(data).then(res => {
                    this.isLoading=false;
                    if (res.data.success) {
                        if(res.data.data){
                            this.nextId=res.data.data['nextId'];
                            this.couponCenterData=res.data.data['couponOutputVO'];
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
                    api.getCouponCenter(data).then(res => {
                        this.loading=false;
                        if (res.data.success) {
                            if(res.data.data){
                                this.nextId=res.data.data['nextId'];
                                this.couponCenterData=this.couponCenterData.concat(res.data.data['couponOutputVO']);
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
            activeCoupon(data){
                let postData={
                    id: data['id']
                };
                api.activateCoupon(postData).then(res => {
                    this.loadingState=false;
                    if (res.data.success) {
                        this.$toast.success(this.$t('couponCenter.success'));
                        this.loadingState=true;
                        this.getData();
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            setDay(data){
                let unit=this.$t('couponCenter.unit');
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
                const status = item['couponCondition'];
                const type = item['couponType'];
                if (status) {
                    switch (type) {
                        case 1: {
                            name = this.$t('coupon.loan') + status + '，' + this.$t('coupon.interestReduction') + item['couponValue'];
                            break;
                        }
                        case 2: {
                            name =  this.$t('coupon.loan') + status + '，' + this.$t('coupon.interestReduction') + item['couponValue'].toFixed(2)+ '%';
                            break;
                        }
                        case 3: {
                            name =  this.$t('coupon.loan') + status + '，' + this.$t('coupon.offer.dayFree1') + item['couponDays'] + this.$t('coupon.offer.dayFree2');
                            break;
                        }
                    }
                } else {
                    switch (type) {
                        case 1: {
                            name = this.$t('coupon.noThreshold') + '，' + this.$t('coupon.offer.interestReduction')+ item['couponValue'];
                            break;
                        }
                        case 2: {
                            name = this.$t('coupon.noThreshold') + '，' +this.$t('coupon.offer.interestReduction')+ item['couponValue'].toFixed(2) + '%';
                            break;
                        }
                        case 3: {
                            name = this.$t('coupon.noThreshold') + '，' +this.$t('coupon.offer.dayFree1') + item['couponDays'] + this.$t('coupon.offer.dayFree2');
                            break;
                        }
                    }
                }
                return (name) ? name : '';
            },
            setTypeValue(item){
                let name;
                const type = item['couponType'];
                if (type!=null) {
                    switch (type) {
                        case 1: {
                            name = this.$t('coupon.interest');
                            break;
                        }
                        case 2: {
                            name =  this.$t('coupon.interestRate');
                            break;
                        }
                        case 3: {
                            name =  this.$t('coupon.interestFree');
                            break;
                        }
                    }
                }
                return (name) ? name : '';
            },
            onLoad() {
                this.getNextData();
            },
        }
    }
</script>

<style lang="less">
    @import "../assets/css/main";
    #app {
        background-image: none;
        background-color: #ffffff;
    }
    .coupon-main-center{
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
    .receive{
        background: url("../assets/imgs/coupon2.png") no-repeat;
        -moz-background-size:100% 100%;
        background-size: 100% 100%;
    }
    .not{
        background: url("../assets/imgs/coupon3.png") no-repeat;
        -moz-background-size:100% 100%;
        background-size: 100% 100%;
    }
    .couponItem{
        padding: 15px 15px 0 15px;
        .couponTitle{
            height: 109px;
            color: #ffffff;
            .one{
                height: 20px;
                padding: 10px 0 0 21px;
                line-height: 20px;
                .oneTitle{
                    font-size: 13px;
                }
                .oneText{
                    text-align: center;
                    .background-css{
                        color: #4F8AD9;
                        background: -webkit-linear-gradient(left, #ffffff , #4F8AD9); /* Safari 5.1 - 6.0 */
                        background: -o-linear-gradient(right, #ffffff, #4F8AD9); /* Opera 11.1 - 12.0 */
                        background: -moz-linear-gradient(right, #ffffff, #4F8AD9); /* Firefox 3.6 - 15 */
                        background: linear-gradient(to right, #ffffff , #4F8AD9); /* 标准的语法 */
                    }
                    .background-not{
                        color: #999999;
                        background: -webkit-linear-gradient(left, #ffffff , #D8D8D8); /* Safari 5.1 - 6.0 */
                        background: -o-linear-gradient(right, #ffffff, #D8D8D8); /* Opera 11.1 - 12.0 */
                        background: -moz-linear-gradient(right, #ffffff, #D8D8D8); /* Firefox 3.6 - 15 */
                        background: linear-gradient(to right, #ffffff ,#D8D8D8); /* 标准的语法 */
                    }
                    .css{
                        font-size: 12px;
                        height: 20px;
                        width: 99%;
                        -webkit-clip-path: polygon(0 0, 99% 0, 99% 20px, 0 99%, 10% 10px);
                        clip-path: polygon(0 0, 99% 0, 99% 20px, 0 99%, 10% 10px);
                    }
                }
            }
            .two{
                padding: 20px 0 0 21px;
                .twoTitle{
                    font-size: 14px;
                    padding-bottom: 10px;
                }
                .twoBtn{
                    width: 80%;
                    float: left;
                    padding: 5px 0;
                    border-radius: 22px;
                    color: #4F8AD9;
                    font-size: 13px;
                    text-align: center;
                    background-color: #ffffff;
                }
                .img{
                    margin-top: -1px;
                    margin-right: 0;
                    width: 60px;
                    height: 60px;
                    float: right;
                }
            }
        }
        .description{
            background: url("../assets/imgs/coupon1.png") no-repeat;
            -moz-background-size:100% 100%;
            background-size: 100% 100%;
            padding-left: 18px;
            padding-bottom: 15px;
            .descriptionOne-receive{
                color: #4F8AD9;
            }
            .descriptionOne-not{
                color: #999999;
            }
            .descriptionOne{
                font-size: 13px;
                line-height: 42px;
            }
            .descriptionTwo{
                font-size: 12px;
                color: #999999;
                line-height: 42px;
                text-align: right;
                padding-right: 13px;
            }
            .descriptionText{
                line-height: 17px;
                color: #999999;
                font-size: 12px;
                padding-right: 40px;
                p{
                    margin-top: 0;
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