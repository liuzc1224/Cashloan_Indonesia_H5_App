<template>
    <van-row  class="main-second main-second-edition">
        <van-image :src="icon" class="icon-img"></van-image>
        <div class="logo-text">AyoPinjam</div>
        <van-row class="div-second">
            <van-image :src="txt" class="text-img"></van-image>
        </van-row>
        <van-row class="main-second">
            <div class="title-second">
                {{$t("firstEdition.registered")}}
            </div>
            <div class="main-second-bg">
                <van-field
                    class="input-second"
                    v-model="phone"
                    type="number"
                    label="+62"
                    label-width="49"
                    maxlength="15"
                    :placeholder="$t('firstEdition.phone')"
                    @input="Mobile(this,$event)"
                ></van-field>
                <van-button plain round size="large" :loading="loading" class="back-second" @click="registered">{{$t('firstEdition.btn')}}</van-button>
            </div>
            <div class="tip-text-second" v-html="$t('firstEdition.text')"></div>
            <div class="bottom-img">
                <van-image :src="pic" class="pic-img"></van-image>
            </div>

        </van-row>
    </van-row>
</template>

<script>
    import bg2 from "@/assets/imgs/second-edition/bg2.png"
    import pic from "@/assets/imgs/second-edition/pic.png"
    import icon from "@/assets/imgs/second-edition/icon.png"
    import txt from "@/assets/imgs/second-edition/txt.png"
    import api from "@/api/index"
    export default {
        name: "second-edition",
        data(){
            return{
                loading:false,
                bg2:bg2,
                pic:pic,
                txt:txt,
                icon:icon,
                phone:null,
                apkUrl:null
            }
        },
        mounted(){
            this.getUrl();
        },
        methods:{
            getUrl(){
                let data={
                    id:this.$route.params.id
                };
                api.channelH5s(data).then(res => {
                    if (res.data.success) {
                        this.apkUrl=res.data.data && res.data.data[0] ? res.data.data[0]['apkUrl'] : null;
                        // console.log(this.callData);
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            registered(){
                this.phone=this.phone.replace(/\s*/g,"");
                this.loading=true;
                if(this.phone===null){
                    this.loading=false;
                    this.$notify(this.$t("firstEdition.prompt"));
                    return;
                }
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
                    referrerId:this.$route.params.id,
                    source:'6',
                    phoneNumber:this.phone,
                    countryPrefix:'62'
                };
                api.preregister(data).then(res => {
                    this.loading=false;
                    if (res.data.success) {
                        window.location.href=this.apkUrl;
                    } else {
                        this.$notify(res.data.message);
                    }
                })
            },
            Mobile(obj,e){
                if(e.keyCode == 8) return;
                let value = this.phone;
                value = value.replace(/[^0-9]/g,'');
                let result = [];
                for(let i = 0; i < value.length; i++){
                    if (i==3||i==7 || i==11){
                        result.push(" " + value.charAt(i));
                    }
                    else{
                        result.push(value.charAt(i));
                    }
                }
                this.phone = result.join("");
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/css/main";
    #app{
        background:url('../assets/imgs/second-edition/bg.png') no-repeat;
        -moz-background-size:100% 100%;
        background-size: 100% 100%;
    }
    .main-second{
        margin: 0;
        padding: 36px 15px 0 15px;
        .icon-img{
            margin-left: 93px;
            width: 50px;
            height: 50px;
        }
        .logo-text{
            color: #ffffff;
            width: 200px;
            position: absolute;
            margin-left: 160px;
            margin-top: -40px;
            font-size: 18px;
            font-weight: bold;
        }
        .div-second{
            margin-top: 39px;
            width: 100%;
            text-align: center;
            .text-img{
                width: 210px;
            }
        }
        .main-second{
            .title-second{
                background:url('../assets/imgs/second-edition/bg2.png') no-repeat;
                -moz-background-size:100% 100%;
                background-size: 100% 100%;
                text-align: center;
                width: 222px;
                height: 36px;
                line-height: 36px;
                position: relative;
                margin: 0 auto;
                font-size: 13px;
                color: #ffffff;
            }
            .main-second-bg{
                padding: 47px 32px 30px 32px;
                background-color: #ffffff;
                border-radius: 5px;
                margin-top: -18px;
                .input-second{
                    font-size: 13px;
                    border-radius: 40px;
                    padding: 6px 17px;
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
                .back-second{
                    margin-top: 14px;
                    border: none;
                    height: 39px;
                    line-height: 39px;
                    background-color: #4F8AD9;
                    font-size: 13px;
                    color: #ffffff;
                }
            }

            .tip-text-second{
                margin-top: 15px;
                color:#E6F8FF;
                font-size: 12px;
                line-height: 18px;
            }
        }
        .bottom-img{
            text-align: center;
            .pic-img{
                width: 191px;
                margin-top: 19px;
            }
        }
    }
</style>