<template>
    <div>
        <van-nav-bar
                :fixed="true"
                :title="$t('repaymentNotice.title')"
                left-arrow
                @click-left="onClickLeft"
        ></van-nav-bar>
        <van-row class="main">
            <van-row v-for="(item,index) in imageList" class="item" :key="index">
                <van-col span="10">
                    <van-image
                            lazy-load
                            :src="item['src']"
                    ></van-image>
                </van-col>
                <van-col span="13" offset="1">
                    <div class="text">
                        {{$t('repaymentNotice')[item['name']]}}
                    </div>
                </van-col>
            </van-row>
        </van-row>
    </div>
</template>

<script>
    import rn1 from '@/assets/imgs/rn1.png'
    import rn2 from '@/assets/imgs/rn2.png'
    import rn3 from '@/assets/imgs/rn3.png'
    export default {
        name: "repayment-notice",
        data(){
          return{
              imageList:[
                  {
                      name:"one",
                      src:rn1
                  },
                  {
                      name:"two",
                      src:rn2
                  },
                  {
                      name:"three",
                      src:rn3
                  }
              ]
          }
        },
        methods:{
            onClickLeft() {
                goBack.postMessage("goBack");
                // this.$bridge.goBack();
            },
        }
    }
</script>

<style lang="less">
    @import "../assets/css/main";
    .item{
        background: #EEEEEE;
        padding: 15px 15px 0 15px;
        .van-image{
            width: 140px;
        }
        .text{
            position: absolute;
            padding-right: 15px;
            color: #494951;
            font-size: 14px;
            line-height: 21px;
            padding-top: 95px;
        }
    }
    .main{
        background: #EEEEEE;
        padding-bottom: 78px;
    }
</style>