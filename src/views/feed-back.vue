<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('feedback.title')"
                left-arrow
                @click-left="onClickLeft"
        ></van-nav-bar>
        <van-row class="main main-feed-back">

            <van-row>
                <div class="tip">{{$t('feedback.tip')}}</div>
            </van-row>

            <van-row class="gap"></van-row>
            <van-row class="text">
                <div class="title">
                    {{$t('feedback.theme')}}
                    <span>{{inputTitle && inputTitle.length ? inputTitle.length+"/100" : "0/100"}}</span>
                </div>
            </van-row>
            <van-row>
                <van-field
                        v-model="inputTitle"
                        type="textarea"
                        :placeholder="$t('feedback.enterTheme')"
                        rows="2"
                        maxlength="100"
                        autosize
                ></van-field>
            </van-row>
            <van-row class="gap"></van-row>
            <van-row class="text">
                <div class="title">
                    {{$t('feedback.content')}}
                    <span>{{inputValue && inputValue.length ? inputValue.length+"/500" : "0/500"}}</span>
                </div>
            </van-row>
            <van-row>
                <van-field
                        v-model="inputValue"
                        type="textarea"
                        :placeholder="$t('feedback.enterContent')"
                        rows="4"
                        maxlength="500"
                        autosize
                ></van-field>
            </van-row>
            <van-row class="gap"></van-row>
            <van-row class="text">
                <div class="title">
                    {{$t('feedback.image')}}
                    <span>{{imgData.length ? imgData.length+"/6" : "0/6"}}</span>
                </div>
            </van-row>
            <van-row class="feedback_img">
                <div class="feedback_item" v-for="(img,index) of imgData" :key="index">
                    <div class="img">
                        <van-icon name="close" class="feedback_item_close" @click="imgRemove(img)"></van-icon>
                        <van-image class="feedback_item_img" :src="img ? img : ''" @click="imgClick(index)"></van-image>
                    </div>
                </div>
                <div class="feedback_item" v-if="imgData.length < 6" @click="add()">
                    <div class="add">
                        <van-icon name="plus" class="feedback_icon"></van-icon><br />
                        {{$t('feedback.add')}}
                    </div>
                </div>
            </van-row>
            <van-row class="btn">
                <van-button round type="primary" size="large" color="#4F8AD9" @click="sub" :loading ="loading">{{$t('feedback.submit')}}</van-button>
            </van-row>
            <!--            <van-popup v-model="show" round>-->
            <!--                <div class="popDiv">-->
            <!--                    <van-icon :name="iconName" class="delete"></van-icon>-->
            <!--                    <p>{{popText}}</p>-->
            <!--                </div>-->
            <!--            </van-popup>-->
            <van-image-preview
                    v-model="show"
                    :images="imgData ? imgData : ''"
                    :showIndex="false"
                    :startPosition="imgIndex"
            ></van-image-preview>
        </van-row>
    </div>

</template>

<script>
    import api from '@/api/index'
    export default {
        name: "feed-back",
        data(){
            return{
                iconName:null,
                show:false,
                popText:null,
                loading:false,
                inputTitle:null,
                inputValue:null,
                stateBtn:false,
                imgData:[],
                imgIndex:null
            }
        },
        mounted(){
            this.getInfo();
            window.callBackGallery=(data)=>{
                if(data){
                    const base64 = "data:image/jpeg;base64," + data['imageBase64'];
                    console.log(this.imgData.indexOf(base64));
                    if(this.imgData.indexOf(base64)===-1){
                        this.imgData.push(base64);
                        console.log(this.imgData)
                    }
                }
            };
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
            onClickLeft() {
                goBack.postMessage("goBack");
                // this.$bridge.goBack();
                // this.$router.go(-1);
            },
            getInfo(){
                getUserLoginInfo.postMessage("callBackFlutter");
            },
            sub(){
                let _this=this;
                this.loading=true;
                if(!this.inputTitle){
                    this.$notify({
                        type: 'warning',
                        message: _this.$t('feedback.themeTip')
                    });
                    this.loading=false;
                    return;
                }
                if(!this.inputValue){
                    this.$notify({
                        type: 'warning',
                        message: _this.$t('feedback.contentTip')
                    });
                    this.loading=false;
                    return;
                }
                let fromData=new FormData();
                if(this.imgData.length>0){
                    this.imgData.forEach((item)=>{
                        fromData.append('images',this.convertBase64UrlToBlob(item));
                    });
                }
                let usrInfo = JSON.parse(window.sessionStorage.getItem("loginInfo"));
                console.log(usrInfo);
                // let id=usrInfo['data']["id"]+"";
                fromData.append("title",this.inputTitle);
                // fromData.append("userId",id);
                fromData.append("content",this.inputValue);
                fromData.append("phoneNumber",usrInfo['phoneNumber']);
                api.feedBack(fromData).then(res => {
                    this.loading=false;
                    if (res.data.success) {
                        // this.iconName='checked';
                        // this.show=true;
                        // this.popText=this.$t('feedback.success');
                        this.$toast.success({
                            message: this.$t('feedback.success'),
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
                        // this.popText=this.$t('feedback.failure');
                        this.$toast.success({
                            message: this.$t('feedback.failure'),
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
            imgRemove(data){
                this.imgData = this.imgData.filter(function(val){
                    return val!==data;
                });
            },
            imgClick(data){
                this.show=true;
                this.imgIndex=data;
            },
            add(){
                getGallery.postMessage("callBackGallery");
                // this.take().then(data => {
                //     console.log("照片回调----imgchange---", data);
                //     if(data && data['img']){
                //         const base64 = "data:image/jpeg;base64," + data['img'];
                //         if(this.imgData.indexOf(base64)===-1){
                //             this['imgData'].push(base64);
                //         }
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
        background-color: #EEEEEE;
    }
    .main-feed-back{
        background-color: #EEEEEE;
    }
    .tip{
        background-color: #FFEED6;
        color: #999999;
        font-size: 13px;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
    .gap{
        height: 10px;
    }
    .text{
        background-color: #ffffff;
        padding: 0 15px;
        color: #494951;
        .title{
            padding: 11.5px;
            font-size: 15px;
            line-height: 20px;
            border-bottom: 1px solid #C7C7C7;
            span{
                color: #999999;
                float: right;
            }
        }
    }
    .btn{
        padding: 31px 15px 41px 15px;
        background: #EEEEEE;
    }
    .van-popup .popDiv{
        padding-top: 30px;
        width: 195px;
        background-color: #ffffff;
        text-align: center;
        .van-icon{
            font-size: 80px;
            color: #4F8AD9;
        }
        p{
            font-size: 20px;
        }
    }
    .feedback_img{
        padding: 5px 14px;
        position: relative;
        background-color: #ffffff;
        .feedback_item{
            padding: 5px;
            text-align: center;
            width: 100px;
            height: 120px;
            float: left;
            overflow: hidden;
            .img{
                color: #4F8AD9;
                width: 100%;
                height: 100%;
                text-align: right;
                .feedback_item_img{
                    width: 100%;
                    height: 100%;
                    object-fit:cover;
                }
                .feedback_item_close{
                    font-size: 20px;
                    position: absolute;
                    margin-right: 0;
                    z-index: 1000;
                    background-color: #ffffff;
                    border-radius: 20px;
                }
            }
            .add{
                float: left;
                width: 100%;
                height: 100%;
                color: #4F8AD9;
                border: 1px #4F8AD9 solid;
                .feedback_icon{
                    font-size: 50px;
                    line-height: 80px;
                }
            }
        }
    }
</style>