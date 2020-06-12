<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('repaymentCertificate.title')"
                left-arrow
                @click-left="onClickLeft"
        ></van-nav-bar>
        <van-row class="main main-repayment-certificate">
            <van-row class="repayment-main">
                <van-col span="24" class="repayment-text">
                    {{$t('repaymentCertificate.orderNo')}}<span class="must">*</span>
                </van-col>
                <van-col span="24">
                    <van-field class="input" v-model="formData.orderNo" :placeholder="$t('repaymentCertificate.prompt.orderNo')" readonly border></van-field>
                </van-col>
                <van-col span="24" class="repayment-text">
                    {{$t('repaymentCertificate.type')}}<span class="must">*</span>
                </van-col>
                <van-col span="24">
                    <van-field
                            readonly
                            clickable
                            class="input"
                            :value="value"
                            :placeholder="$t('repaymentCertificate.prompt.repayType')"
                            @click="showPicker = true"
                            border
                    ></van-field>
                    <van-popup v-model="showPicker" position="bottom">
                        <van-picker
                                show-toolbar
                                :columns="$t('repaymentCertificate.repayType')"
                                @cancel="showPicker = false"
                                @confirm="onConfirm"
                        ></van-picker>
                    </van-popup>
                </van-col>
                <van-col span="24" class="repayment-text">
                    {{$t('repaymentCertificate.repayMoney')}}<span class="must">*</span>
                </van-col>
                <van-col span="24">
                    <van-field
                            class="input"
                            type="number"
                            v-model="formData.repayMoney"
                            :placeholder="$t('repaymentCertificate.prompt.repayMoney')"
                            border
                    ></van-field>
                </van-col>
                <van-col span="24" class="repayment-text">
                    {{$t('repaymentCertificate.title')}}<span class="must">*</span>
                </van-col>
                <van-col span="24" class="repayment-img" v-if="!fileList">
                    <div @click="add">
                        <div class="repayment-icon">
                            <van-icon class="iconfont" class-prefix="my-icon" name="paizhao"></van-icon>
                        </div>
                    </div>
                </van-col>
                <van-col span="24" v-if="fileList" class="repayment-certificate-img">
                    <div class="certificate_img">
                        <van-icon name="delete" class="certificate_close" @click="fileList=null"></van-icon>
                        <van-image class="img" :src="fileList ? fileList : ''" @click="add"></van-image>
                    </div>
                </van-col>
                <van-col span="24" class="tip">
                    {{$t('repaymentCertificate.tip1')}}<br/>
                    {{$t('repaymentCertificate.tip2')}}
                </van-col>
                <van-col span="24">
                    <van-button plain round class="back" :loading="loading" @click="submit">{{$t('repaymentCertificate.submit')}}</van-button>
                </van-col>
            </van-row>
<!--            <van-popup v-model="show" round :style="{width:'200px',height:'200px',fontSize:'30px',textAlign:'center',lineHeight:'100px'}">-->
<!--                <div class="popDiv">-->
<!--                    <van-icon :name="iconName" class="icon"></van-icon>-->
<!--                    <p>{{popText}}</p>-->
<!--                </div>-->
<!--            </van-popup>-->
        </van-row>
    </div>
</template>

<script>
import api from '@/api/index'
    export default {
        name: "repayment-certificate",
        data(){
            return{
                formData:{
                    orderId:null,
                    orderNo:null,
                    userId:null,
                    repayType:null,
                    repayMoney:null,
                    repayProof:null
                },
                iconName:null,
                popText:null,
                show:true,
                loading:false,
                fileList: null,


                value: '',
                showPicker: false,
            }
        },
        mounted(){
          this.formData.orderId=this.$route.query.orderId;
          this.formData.orderNo=this.$route.query.orderNo;
            window.callBackGallery=(data)=>{
                if(data){
                    const base64 = "data:image/jpeg;base64," + data['imageBase64'];
                    console.log(base64);
                    this.fileList=base64;
                }
            };
        },
        methods:{
            onClickLeft(){
                goBack.postMessage("goBack");
                // this.$bridge.goBack();
            },
            onConfirm(value,index) {
                this.value = value;
                this.showPicker = false;
                this.formData.repayType=index+1;
            },
            submit(){
                this.loading=true;
                let _this=this;
                if(this.formData.repayType==null){
                    this.$notify({
                        type: 'warning',
                        message: _this.$t('repaymentCertificate.prompt.repayType')
                    });
                    this.loading=false;
                    return;
                }
                if(this.formData.repayMoney==null){
                    this.$notify({
                        type: 'warning',
                        message: _this.$t('repaymentCertificate.prompt.repayMoney')
                    });
                    this.loading=false;
                    return;
                }
                if(!this.fileList){
                    this.$notify({
                        type: 'warning',
                        message: _this.$t('repaymentCertificate.prompt.title')
                    });
                    this.loading=false;
                    return;
                }
                let fromData=new FormData();
                let loginInfo=JSON.parse(window.sessionStorage["loginInfo"]);
                fromData.append("orderId",this.formData.orderId);
                fromData.append("orderNo",this.formData.orderNo);
                fromData.append("userId",loginInfo['id']);
                fromData.append("repayType",this.formData.repayType);
                fromData.append("repayMoney",this.formData.repayMoney);
                fromData.append("repayProof",this.convertBase64UrlToBlob(this.fileList));
                api.addRepayProof(fromData).then(res => {
                    this.loading=false;
                    if (res.data.success) {
                        // this.iconName='checked';
                        // this.show=true;
                        // this.popText=this.$t('repaymentCertificate.success');
                        this.$toast.success({
                            message: this.$t('repaymentCertificate.success'),
                            icon: 'checked',
                            mask: 'true',
                            duration: '2000'
                        });
                        let time=setTimeout(()=>{
                            goBack.postMessage("goBack");
                            // this.$bridge.goBack();
                        },1000)
                    } else {
                        // this.iconName='clear';
                        // this.show=true;
                        // this.popText=this.$t('repaymentCertificate.failure');
                        this.$toast.success({
                            message: this.$t('repaymentCertificate.failure'),
                            icon: 'clear',
                            mask: 'true',
                            duration: '2000'
                        });
                        let time=setTimeout(()=>{
                            goBack.postMessage("goBack");
                            // this.$bridge.goBack();
                        },1000)
                    }
                }).catch(err=>{
                    this.loading=false;
                });
            },
            add(){
                getGallery.postMessage("callBackGallery");
                // this.take().then(data => {
                //     console.log("照片回调----imgchange---", data);
                //     if(data && data['img']){
                //         const base64 = "data:image/jpeg;base64," + data['img'];
                //         console.log(base64);
                //         this.fileList=base64;
                //     }
                // });
            },
            // take(){
            //     return new Promise((resolve,reject)=>{
            //         this.$bridge["openCamera"](null, res => {
            //             resolve(JSON.parse(res));
            //         });
            //     });
            // },
            convertBase64UrlToBlob(urlData){
                let bytes=window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte
                //处理异常,将ascii码小于0的转换为大于0
                let ab = new ArrayBuffer(bytes.length);
                let ia = new Uint8Array(ab);
                for (let i = 0; i < bytes.length; i++) {
                    ia[i] = bytes.charCodeAt(i);
                }
                return new Blob( [ab] , {type : 'image/png'});
            }
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
        .repayment-main{
            padding: 0 16px 30px 16px;
            font-size: 15px;
            color: #494949;
            .repayment-text{
               line-height: 43px;
            }
            .must{
                color: #FF0000;
            }
            .input{
                border: 1px #999999 solid;
                border-radius: 5px;
            }
            .repayment-img{
                width: 100%;
                height: 160px;
                padding-top: 35px;
                background-color: #95FFEF;
                border-radius: 5px;
                .repayment-icon{
                    width: 91px;
                    height: 91px;
                    margin: 0 auto;
                    background-color: #00FFDF;
                    text-align: center;
                    border-radius: 91px;
                    .iconfont{
                        font-size: 50px;
                        color: #ffffff;
                        line-height: 91px;
                    }
                }
            }
            .repayment-certificate-img{
                width: 100%;
                height: 160px;
                background-color: #CBDCF3;
                border-radius: 5px;
                .certificate_img{
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    .img{
                        width: 100%;
                        height: 100%;
                        object-fit:cover;
                    }
                    .certificate_close{
                        color: #4F8AD9;
                        font-size: 20px;
                        position: absolute;
                        margin-right: 0;
                        z-index: 1000;
                        background-color: #ffffff;
                        border-radius: 20px;
                    }
                }
            }
            .tip{
                margin-top: 5px;
                color: #999999;
                font-size: 13px;
                line-height: 18px;
            }
            .back{
                font-size: 15px;
                width: 100%;
                background-color: #4F8AD9;
                color: #ffffff;
                margin-top: 28px;
            }
        }

    }
    .van-uploader__input-wrapper{
        width: 100%;
    }
    .van-uploader__preview,.van-uploader__preview-image,.van-image__img{
        margin: 0 auto;
        width: 100%;
        height: 160px;
    }
</style>