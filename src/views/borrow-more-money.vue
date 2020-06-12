<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('borrowMoreMoney.title')"
                left-arrow
                @click-left="onClickLeft"
        ></van-nav-bar>
        <van-row class="main">
            <van-row class="center">
                <div class="icon">
                    <van-icon name="info-o" />
                </div>
                <div class="text">
                    {{$t('borrowMoreMoney.one')}}
                </div>
            </van-row>
            <van-row class="center">
                <div class="icon">
                    <van-icon name="info-o" />
                </div>
                <div class="text">
                    {{$t('borrowMoreMoney.two')}}
                </div>
            </van-row>
        </van-row>
    </div>

</template>

<script>
    export default {
        name: "borrow-more-money",
        methods:{
            onClickLeft() {
                goBack.postMessage("goBack");
                // this.$bridge.goBack();
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/css/main";
    .center{
        padding: 15px 17px 0 46px;
        .icon{
            position: relative;
            float: left;
            width: 46px;
            left: -46px;
            margin-right: -100%;
            text-align: center;
            font-size: 18px;
            color: #4F8AD9;
            line-height: 25px;
        }
        .text{
            position: relative;
            width: 100%;
            float: left;
            color: #494951;
            font-size: 14px;
            line-height: 21px;
            word-break: break-all;
            word-wrap: break-word;
        }
    }
</style>