<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('couponDescription.title')"
                left-arrow
                @click-left="onClickLeft"
        >
        </van-nav-bar>
        <van-row class="main coupon-main-description">
            <div class="item-description">
                <van-row>
                    <van-col span="24">
                        {{$t('couponDescription.account')}}{{loginInfo['phoneNumber']}}{{$t('couponDescription.use')}}
                    </van-col>
                    <van-col span="24">
                        <van-divider class="divider"></van-divider>
                    </van-col>
                    <van-col span="16">
                        {{couponData['couponName']}}
                    </van-col>
                    <van-col span="8" class="type">
                        {{setType(couponData['couponName'])}}
                    </van-col>
                    <van-col span="24" class="textCenter">
                        {{setText(couponData)}}
                    </van-col>
                    <van-col span="24">
                        <van-divider class="divider"></van-divider>
                    </van-col>
                    <van-col span="24">
                        {{$t('couponDescription.limit')}}{{couponData['beginDate']}}~{{couponData['endDate']}}
                    </van-col>
                </van-row>


            </div>
            <van-row class="tip">
                {{$t('couponDescription.tip')}}
            </van-row>
        </van-row>
    </div>
</template>

<script>
    import api from "@/api/index"
    export default {
        name: "coupon-description",
        data(){
            return{
                couponData:{},
                loginInfo:JSON.parse(sessionStorage["loginInfo"])
            }
        },
        mounted() {
            this.getData();
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1);
            },
            getData(){
                let data={
                    couponId:this.$route.params.id
                };
                api.getCoupon(data).then(res => {
                    this.loading=false;
                    if (res.data.success) {
                        this.couponData=res.data.data;
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            setType(data){
                let type=this.$t('couponDescription.type');
                if(data!=null){
                    let name=type.filter(v=>{
                        return data===v['value']
                    });
                    return name && name[0] && name[0]['desc'] ? name[0]['desc'] : ""
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
                            name = this.$t('coupon.loan') + status + '，' + this.$t('coupon.interestReduction') + this.replaceStr(item['value']);
                            break;
                        }
                        case 2: {
                            name =  this.$t('coupon.loan') + status + '，' + this.$t('coupon.interestReduction') + item['value'].toFixed(2) + '%';
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
                            name = this.$t('coupon.noThreshold') + '，' +this.$t('coupon.offer.interestReduction')+ item['value'].toFixed(2) + '%';
                            break;
                        }
                        case 3: {
                            name = this.$t('coupon.noThreshold') + '，' + this.$t('coupon.offer.dayFree1') + item['days'] + this.$t('coupon.offer.dayFree2');
                            break;
                        }
                    }
                }
                return (name) ? name : '';
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/css/main";
    .main{
        .item-description{
            background-color: #ffffff;
            margin: 0;
            padding: 0 0 0 15px;
            font-size: 15px;
            color: #494951;
            letter-spacing: 1px;
            line-height: 36px;
        }
        .tip{
            padding: 10px 15px;
            font-size: 14px;
            color: #999999;
        }
        .divider{
            margin: 0;
        }
        .type{
            text-align: right;
            padding-right: 15px;
            font-size: 14px;
            color: #999999;
        }
        .textCenter{
            padding-bottom: 10px;
        }
    }


</style>