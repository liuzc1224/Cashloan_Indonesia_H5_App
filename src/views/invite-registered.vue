<template>
    <van-row class="main-invite-registered">
        <van-image :src="icon" class="icon-img-invite"></van-image>
        <div class="logo-text-invite">AyoPinjam</div>
<!--        <van-image :src="logo" class="logo-img"></van-image>-->
<!--        <van-row class="div-second">-->
<!--            <van-image :src="txt" class="text-img"></van-image>-->
<!--        </van-row>-->
        <van-row class="div-second-invite">
            <van-image :src="text" class="text-img-invite"></van-image>
            <van-image :src="pic" class="pic-img-invite"></van-image>
        </van-row>
        <van-row class="main-first-invite">
            <van-row span="24" class="title-first-invite">
                {{$t("firstEdition.registered")}}
            </van-row>
            <van-field
                    class="input-first-invite"
                    v-model="phone"
                    type="number"
                    label="+62"
                    label-width="55"
                    maxlength="15"
                    :placeholder="$t('firstEdition.phone')"
            ></van-field>
            <van-button plain round size="large" :loading="loading" class="back-first-invite" @click="registered">{{$t('firstEdition.btn')}}</van-button>
            <div class="tip-text-first-invite" v-html="$t('firstEdition.text')"></div>
        </van-row>
    </van-row>
</template>

<script>
    import icon from "@/assets/imgs/invite-registered/icon.png"
    import pic from "@/assets/imgs/invite-registered/pic.png"
    import text from "@/assets/imgs/invite-registered/text.png"
    import api from "@/api/index"
    export default {
        name: "invite-registered",
        data(){
            return{
                loading:false,
                icon:icon,
                pic:pic,
                text:text,
                phone:null,
                callData:null
            }
        },
        mounted(){
          this.getData();
        },
        methods:{
            getData(){
                api.getCall().then(res => {
                    if (res.data.success) {
                        this.callData=res.data.data;
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            registered(){
                if(this.phone===null){
                    this.loading=false;
                    this.$notify(this.$t("firstEdition.prompt"));
                    return;
                }
                this.phone=this.phone.replace(/\s*/g,"");
                this.loading=true;
                if(this.phone.length<9){
                    this.loading=false;
                    this.$notify(this.$t("firstEdition.prompt"));
                    return;
                }
                let r = /^\+?[0-9][0-9]*$/;　
                if(!r.test(this.phone.replace(/\s*/g,""))){
                    this.loading=false;
                    this.$notify(this.$t("firstEdition.tip"));
                    return;
                }
                let data={
                    phoneNumber : this.phone,
                    areaCode : "62"
                };
                api.preregisterPhone(data).then(res => {
                    if (res.data.success) {
                        this.sub();
                    } else {
                        this.phone=null;
                        this.loading=false;
                        this.$notify(res.data.message);
                    }
                });

            },
            sub(){
                this.loading=true;
                let data={
                    referrerId:this.$route.params.referrerId,
                    source:this.$route.params.source,
                    phoneNumber:this.phone,
                    countryPrefix:'62'
                };
                api.preregister(data).then(res => {
                    this.loading=false;
                    if (res.data.success) {
                        window.location.href=this.callData['apkUrl'];
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
        }
    }
</script>

<style lang="less">
    @import "../assets/css/main";
    #app{
        background-image: none;
        background-color: #D8FFF9;
    }
    .main-invite-registered{
        background-color: #D8FFF9;
        margin: 0;
        padding: 36px 15px 15px 15px;
        .icon-img-invite{
            margin-left: 93px;
            width: 50px;
            height: 50px;
        }
        .logo-text-invite{
            color: #4F8AD9;
            width: 200px;
            position: absolute;
            margin-left: 155px;
            margin-top: -40px;
            font-size: 18px;
            font-weight: bold;
        }
        .div-second-invite{
            margin-top: 27.5px;
            width: 100%;
            text-align: center;
            .text-img-invite{
                width: 209.5px;
            }
            .pic-img-invite{
                width: 209.5px;
            }
        }
        .main-first-invite{
            margin-top: 30px;
            .title-first-invite{
                font-size: 15px;
                color: #4F8AD9;
            }
            .input-first-invite{
                margin-top: 16px;
                font-size: 15px;
                border-radius: 40px;
                color: #4F8AD9;
                background: none;
                border: 2px #4F8AD9 solid;
                .van-field__control{
                    color: #4F8AD9;
                }
            }
            .van-field__control::-webkit-input-placeholder{
                color:#4F8AD9;
            }
            .van-field__control::-moz-placeholder{   /* Mozilla Firefox 19+ */
                color:#4F8AD9;
            }
            .van-field__control:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
                color:#4F8AD9;
            }
            .van-field__control:-ms-input-placeholder{  /* Internet Explorer 10-11 */
                color:#4F8AD9;
            }
            .back-first-invite{
                border: none;
                background-color: #4F8AD9;
                margin-top: 15px;
                font-size: 15px;
                color: #ffffff;
            }
            .tip-text-first-invite{
                margin-top: 15px;
                color: #4F8AD9;
                font-size: 12px;
                line-height: 20px;
            }
        }
    }
</style>