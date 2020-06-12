<template>
    <van-row  class="main-first main-first-edition">
        <van-image :src="icon" class="icon-img"></van-image>
        <div class="logo-text">AyoPinjam</div>
        <van-row class="div-first">
            <van-image :src="text" class="text-img"></van-image>
            <van-image :src="pic" class="pic-img"></van-image>
        </van-row>
        <van-row class="main-first">
          <van-row span="24" class="title-first">
              {{$t("firstEdition.registered")}}
          </van-row>
            <van-field
                class="input-first"
                v-model="phone"
                type="text"
                label="+62"
                label-width="55"
                maxlength="15"
                :placeholder="$t('firstEdition.phone')"
                @input="Mobile(this,$event)"
            ></van-field>
            <van-button plain round size="large" :loading="loading" class="back-first" @click="registered">{{$t('firstEdition.btn')}}</van-button>
            <div class="tip-text-first" v-html="$t('firstEdition.text')"></div>
        </van-row>
    </van-row>
</template>

<script>
    import icon from "@/assets/imgs/first-edition/icon.png"
    import pic from "@/assets/imgs/first-edition/pic.png"
    import text from "@/assets/imgs/first-edition/text.png"
    import api from "@/api/index"
    export default {
        name: "first-edition",
        data(){
            return{
                loading:false,
                icon:icon,
                pic:pic,
                text:text,
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
                        // console.log(this.apkUrl)
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
    #app {
        background-image: none;
        background-color: #F0F6FF;
    }
    .main-first{
        margin: 0;
        padding: 15px 15px 15px 15px;
        .icon-img{
            width: 52px;
            height: 52px;
        }
        .logo-text{
            color: #ffffff;
            width: 200px;
            position: absolute;
            margin-left: 69.5px;
            margin-top: -40px;
            font-size: 18px;
            font-weight: bold;
        }
        .div-first{
            margin-top: 21px;
            width: 100%;
            text-align: center;
            .text-img{
                width: 210px;
            }
            .pic-img{
                width: 287px;
                margin-top: 18px;
            }
        }
        .main-first{
            margin-top: 30px;
            .title-first{
                font-size: 15px;
                color: #4F8AD9;
            }
            .input-first{
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
            .back-first{
                border: none;
                background-color: #4F8AD9;
                margin-top: 15px;
                font-size: 15px;
                color: #ffffff;
            }
            .tip-text-first{
                margin-top: 15px;
                color: #E6F8FF;
                font-size: 12px;
                line-height: 18px;
            }
        }
    }
</style>