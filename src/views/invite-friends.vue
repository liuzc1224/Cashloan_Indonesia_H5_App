<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('inviteFriends.title')"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        >
            <van-icon class="iconfont" class-prefix="my-icon" name="fenxiang" slot="right"></van-icon>
        </van-nav-bar>
        <van-row class="main main-invite-friends">
            <van-overlay :show="loadingState"></van-overlay>
            <van-loading v-if="loadingState" type="spinner" class="loading"  vertical></van-loading>
            <van-row v-else>
                <van-image :src="img"></van-image>
                <div class="btn" @click="onClickRight">
                    {{$t('inviteFriends.btn')}}
                </div>
            </van-row>
        </van-row>
    </div>
</template>

<script>
    import img from '@/assets/imgs/pic.png'
    export default {
        name: "invite-friends",
        data(){
            return{
                loadingState:true,
                img:img
            }
        },
        mounted(){
            this.getInfo();
            window.callBackFlutter=(data)=>{
                if(data){
                    this.loadingState=false;
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
            },
            onClickRight(){
                shareDialog.postMessage("3");
                // this.$bridge.shareFriend();
            },
            getInfo(){
                getUserLoginInfo.postMessage("callBackFlutter");
                // this.take().then(data => {
                //     console.log("回调", data);
                //     if(data){
                //         this.loadingState=false;
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
    #app{
        background-image: none;
        background-color: #00C49F;
    }
    .iconfont{
        color: #ffffff;
        font-size: 23px;
    }
    .main{
        text-align: center;
        .van-image__img{
            width: 335px;
            padding-top: 107px;
        }
        .btn{
           width: 330px;
            height: 40px;
            border-radius: 40px;
            margin: 106px auto 0 auto;
            background-color: #4F8AD9;
            /*background: -webkit-linear-gradient(#4F8AD9, #7AACEE); !* Safari 5.1 - 6.0 *!*/
            /*background: -o-linear-gradient(#4F8AD9, #7AACEE); !* Opera 11.1 - 12.0 *!*/
            /*background: -moz-linear-gradient(#4F8AD9, #7AACEE); !* Firefox 3.6 - 15 *!*/
            /*background: linear-gradient(#4F8AD9, #7AACEE); !* 标准的语法 *!*/
            color: #ffffff;
            font-size: 15px;
            line-height: 40px;
        }
    }
</style>