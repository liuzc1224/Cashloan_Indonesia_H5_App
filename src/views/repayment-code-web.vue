<template>
    <div>
        <van-row>
            <van-overlay :show="loading"></van-overlay>
            <van-loading v-if="loading" type="spinner" class="loading"  vertical></van-loading>
            <div v-else>
                <van-row class="repayment-code-title">
                    <van-col span="24" class="repayment-code-title-one">
                        {{$t('repaymentCode.total')}}
                    </van-col>
                    <van-col span="24" class="repayment-code-title-two">
                        {{repaymentData['amount'] ? replaceStr((repaymentData['amount']).toFixed(2)) : "Rp.0.00"}}
                        {{`&nbsp&nbsp&nbsp&nbsp;RP`}}
                    </van-col>
                    <van-col span="24" class="repayment-code-title-one">
                        {{$t('repaymentCode.account')}}
                    </van-col>
                    <van-col span="24" class="repayment-code-title-two">
                        {{repaymentData['phoneNumber'] ? repaymentData['phoneNumber'].substring(0,3)+"****"+repaymentData['phoneNumber'].substring(repaymentData['phoneNumber'].length-3,repaymentData['phoneNumber'].length) : "****"}}
                    </van-col>
                    <van-col span="24" class="repayment-code-title-one">
                        {{$t('repaymentCode.name')}}
                    </van-col>
                    <van-col span="24" class="repayment-code-title-two">
                        {{repaymentData['username']}}
                    </van-col>
                </van-row>
                <van-row class="content" v-if="repaymentData">
                    <van-row v-for="(item,index) in repaymentData['payCode']" :key="`item-${index}`">
                        <van-col span="24" class="content_one">
                            {{item['name']}}
                            <span>
                            <van-image class="repayment-code_img" :src="copyImg" @click="copy(item['code'])"></van-image>
                                <!--                            <van-image class="repayment-code_img" :src="emailImg" @click="send"></van-image>-->
                        </span>
                        </van-col>
                        <van-col span="24" class="content_two" v-if="item['code']">
                            {{item['code']}}
                        </van-col>
                        <van-col span="24" class="content_three" v-if="item['code']">
                            {{item['effectiveTimeStr']}}
                        </van-col>
                        <van-col span="24" class="content_four" @click="refreshData" v-if="!item['code']">
                            {{$t('repaymentCode.click')}}
                        </van-col>
                        <van-col span="24" class="content_three" v-if="!item['code']">
                            {{$t('repaymentCode.tip')}}
                        </van-col>
                    </van-row>
                </van-row>
            </div>

        </van-row>
        <van-dialog
                v-model="isShow"
                :title="$t('repaymentCode.sendText')"
                show-cancel-button
                :lazy-render="false"
                :before-close="beforeClose"
        >
            <van-row>
                <van-col span="24">
                    <van-field v-model="Email" :placeholder="$t('repaymentCode.email')"></van-field>
                </van-col>
            </van-row>

        </van-dialog>
    </div>
</template>

<script>
    import api from '@/api/index'
    import bg_top from "@/assets/imgs/code/bg_top.png"
    import copy from "@/assets/imgs/code/niantie.png"
    import email from "@/assets/imgs/code/youjian.png"
    import img from "@/assets/imgs/cnaidc.png"
    export default {
        name: "repayment-code-web",
        data(){
            return{
                Email: '',
                bgURl:bg_top,
                img:img,
                copyImg:copy,
                emailImg:email,
                show:false,
                isShow:false,
                loading:true,
                repaymentData:{},
                images:[img]
            }
        },
        mounted(){
            this.getData();
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1);
            },
            refreshData(){
                location.reload();
            },
            getData(){
                let data={
                    signature:this.$route.query.signature,
                    paymentMethod:"40"
                };
                api.repaymentCodeNocheck(data).then(res => {
                    this.loading=false;
                    if (res.data.success) {
                        this.repaymentData=res.data.data;
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            replaceStr(data){
                if(data){
                    if((data+"").indexOf(",")!==-1){
                        return data
                    }else{
                        if((data+"").indexOf(".")!==-1){
                            return "Rp."+(Number(data).toFixed(2)+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                        }else{
                            return "Rp."+(Number(data).toFixed(2)+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                        }
                    }
                }else{
                    return "Rp.0.00"
                }
            },
            beforeClose(action, done){
                if (action === 'confirm') {
                    if(this.Email){

                    }else{
                        this.$notify(this.$t('repaymentCode.email'));
                        done(false);
                    }
                } else {
                    done();
                }
            },
            send(){
                this.isShow=true;
            },
            copy(data){
                const input = document.createElement('input');
                document.body.appendChild(input);
                input.setAttribute('value', data);
                input.select();
                if (document.execCommand('copy')) {
                    document.execCommand('copy');
                    this.$toast.success(this.$t('repaymentCode.copySuccess'));
                } else {
                    this.$toast.error(this.$t('repaymentCode.copyFail'));
                }
                document.body.removeChild(input);
                // document.execCommand("asdasfasfas");
                // this.$toast.success("asd")
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/css/main";
    #app{
        background-color: #ffffff;
    }
    .repayment-code-title{
        background: url("../assets/imgs/bg_top.png") no-repeat;
        -moz-background-size:100% 100%;
        background-size: 100% 100%;
        padding: 0 14px 20px 14px;
        color: #ffffff;
        .repayment-code-title-one{
            padding-top: 10px;
            font-size: 15.61px;
            padding-bottom: 10px;
            span{
                font-size: 21px;
                float: right;
                text-align: right;
                .repayment-code_img{
                    width: 21px;
                }
                .repayment-code_img:last-child{
                    padding-left: 13px;
                }
            }
        }
        .repayment-code-title-two{
            background-color: #ffffff;
            text-align: center;
            font-size: 18px;
            color: #4F8AD9;
            font-weight: bold;
            height: 44px;
            line-height: 44px;
            border-radius: 5px;
        }
        .repayment-code-title-three{
            text-align: center;
            font-size: 24px;
        }
        .back{
            padding-left: 5px;
            padding-right: 5px;
            position: absolute;
            margin-left: 10px;
            margin-top: 6px;
            font-size: 13px;
            height: 19px;
            line-height: 19px;
        }
    }
    .repayment-code-info{
        margin-top: 16.5px;
        background-color: #ffffff;
        color: #BFD6F5;
        .custom-title{
            color: #999999;
            font-size: 14px;
        }
        .custom-value{
            color: #494951;
            font-size: 14px;
        }
    }
    .content{
        padding: 12px 15px;
        .content_one{
            padding-top: 10px;
            font-size: 15.61px;
            padding-bottom: 10px;
            span{
                font-size: 21px;
                float: right;
                text-align: right;
                .repayment-code_img{
                    width: 21px;
                }
                .repayment-code_img:last-child{
                    padding-left: 13px;
                }
            }
        }
        .content_two{
            background-color: #EEEEEE;
            text-align: center;
            font-size: 15px;
            color: #494951;
            font-weight: bolder;
            height: 44px;
            line-height: 44px;
            border-radius: 5px;
            letter-spacing: 5px;
        }
        .content_three{
            font-size: 12px;
            color: #999999;
            text-align: center;
            line-height: 30px;
        }
        .content_four{
            background-color: #EEEEEE;
            text-align: center;
            font-size: 18px;
            color: #4F8AD9;
            font-weight: bold;
            height: 44px;
            line-height: 44px;
            border-radius: 5px;
        }
    }
    .loading{
        z-index: 1000;
        position: absolute;
        margin-top: 60%;
        margin-left: 45%;
    }
    .btn{
        margin-left: 20px;
    }
</style>