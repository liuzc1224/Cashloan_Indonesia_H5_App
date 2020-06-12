<template>
    <div>
<!--        <van-button plain round size="large" :loading="loading" class="jump" @click="click">点击</van-button>-->
        <van-overlay :show="loading"></van-overlay>
        <van-loading v-if="loading" type="spinner" class="loading"  vertical></van-loading>
    </div>
</template>

<script>
    export default {
        name: "jump",
        data(){
            return{
                loading:true
            }
        },
        mounted(){
            this.click();
        },
        methods:{
            click(){
                goHome.postMessage("goHome");
                // this.$bridge.goHome();
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/css/main";
    #app{
        background-color: #ffffff;
    }
    .loading{
        z-index: 1000;
        margin-top: 60%;
    }
    .jump{
        display: none;
    }
</style>