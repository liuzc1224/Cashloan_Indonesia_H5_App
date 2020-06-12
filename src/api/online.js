import axios from '@/libs/api.request'

export default {
    //反馈中心
    feedBack(data) {
        return axios.request({
            // url: '/system/opinion',
            url: '/iavkl0h7/6hp1bfg3/93bw052x',
            data: data,
            method: 'post'
        })
    },
//消息中心
    getMsg(data) {
        return axios.request({
            // url: '/message/history',
            url: '/c3gumaro/kobre8t2/7pfv6v0k',
            params: data,
            method: 'get'
        })
    },
//
    readMsg() {
        return axios.request({
            // url: '/message/read',
            url: '/d7io4483/h3jt639x/4vmk2p2w',
            method: 'patch'
        })
    },
//还款记录
    repaymentRecord(data) {
        return axios.request({
            // url: '/repayment/record',
            url: '/rwebjavv/optop72j/48t1g5bc',
            params: data,
            method: 'get'
        })
    },
//领券中心-展示领取类型为主动领取的优惠券
    getCouponCenter(data) {
        return axios.request({
            // url: '/coupon/couponCenter',
            url: '/sr1ap32p/0vdz16r1/yujqx8ia',
            params: data,
            method: 'get'
        })
    },
//领券中心-用户点击领取优惠券
    activateCoupon(data) {
        return axios.request({
            // url: '/coupon/activateCoupon',
            url: '/vzykgwyj/56twjtcv/ajjnfhfz',
            data: data,
            method: 'post'
        })
    },
//查询优惠券详情-根据优惠券Id查询
    getCoupon(data) {
        return axios.request({
            // url: '/coupon/getCoupon',
            url: '/aqer2wxm/fsy8l40q/6qeauvfh',
            params: data,
            method: 'get'
        })
    },
//查询优惠券列表-根据优惠券状态展示用户优惠券
    getCoupons(data) {
        return axios.request({
            // url: '/coupon/getCoupons',
            url: '/tyyq5cwi/02fm75re/0lhl0b59',
            params: data,
            method: 'get'
        })
    },
//查询借款记录  历史订单
    orderRecord(data) {
        return axios.request({
            // url: '/order/record',
            url: '/05ew7cdz/1ef8nwnm/j069bnbw',
            params: data,
            method: 'get'
        })
    },
//还款明细
    stagesRepayDetail(data) {
        return axios.request({
            // url: '/repayment/currentRepay/stagesRepeyDetail'+'/'+data['orderId'],
            url: '/8beurpef/iw6dv8fv/ey310cnn' + '/' + data['orderId'],
            method: 'get'
        })
    }
    ,
//查询借款详情
    orderDetail(data) {
        return axios.request({
            // url: '/order/detail'+'/'+data['orderId'],
            url: '/s3zd1t3w/xz8jlur2/0gjg86n3' + '/' + data['orderId'],
            method: 'get'
        })
    }
    ,
//还款码页面 还款信息
// repaymentDetail=(data){
//     return axios.request({
//         // url: '/repayment/detail'+'/'+data['orderId'],
//         url: '/repayment/detail'+'/'+data['orderId'],
//         method: 'get'
//     })
// },
//还款证明
    addRepayProof(data) {
        return axios.request({
            // url: '/repayment/addRepayProof',
            url: '/ydsg1x0l/ozgoyuyt/a80uwww6',
            data: data,
            method: 'post'
        })
    }
    ,
//帮助中心
    helpCenter() {
        return axios.request({
            // url: '/system/help/center',
            url: '/mccnq36i/e384jqtl/ht7j508t',
            method: 'get'
        })
    }
    ,
//帮助中心点击有用无用
    helpCenterChose(data) {
        return axios.request({
            // url: '/system/help/center/chose',
            url: '/40797a1e/pbw3ro14/gy3jwsz7',
            data: data,
            method: 'patch'
        })
    }
    ,
//预注册
    preregister(data) {
        return axios.request({
            // url: '/h5/preregister',
            url: '/09ge3jhh/bwt24bjv/pabpsmc0',
            data: data,
            method: 'post'
        })
    }
    ,
//查看用户是否注册
    preregisterPhone(data) {
        return axios.request({
            // url: "/user/register/check",
            url: "/apjbctkd/bag48w41/i745nekn",
            params: data,
            method: 'get'
        })
    }
    ,

    getCall(data) {
        return axios.request({
            // url: '/apk',
            url: '/xjbmp9rb/xetw3qme/dqgvazfb',
            params: data,
            method: 'get'
        })
    }
    ,
//h5渠道
    channelH5s(data) {
        return axios.request({
            // url: '/channel/h5s'+'/'+data['id'],
            url: '/0dtisskj/mn7aclt9/zyiq4din' + '/' + data['id'],
            method: 'get'
        })
    }
    ,
//还款码页面
    repaymentCode(data) {
        return axios.request({
            // url: '/repayment/code',
            url: '/mjy1gicd/8cdch253/g2nrw34r',
            params: data,
            method: 'get'
        })
    }
    ,
//还款码页面 还款信息--非检验
    repaymentCodeNocheck(data) {
        return axios.request({
            // url: '/repayment/code/nocheck',
            url: '/kmcqjjhn/3xs5csxu/qxhxsb6e',
            params: data,
            method: 'get'
        })
    }
    ,
//还款码 后台生成
    repaymentCodeShare(data) {
        return axios.request({
            // url: '/repayment/code/repaymentCode/share'+'/'+data['signature'],
            url: '/wv06i66s/6md6gq9w/6c694mgd' + '/' + data['signature'],
            method: 'get'
        })
    }
    ,
//提前还款详情
    repaymentAdvance() {
        return axios.request({
            // url: '/repayment/advance',
            url: '/kysijt8i/32erxpyn/6s8so1pa',
            method: 'get'
        })
    }
    ,
//借款合同信息
    getContractParam2(data) {
        return axios.request({
            // url: '/withdrawDeposit/v2/getContractParam2'+'/'+data['orderId'],
            url: '/54au1s1i/1m7x4udr/g1rs3gq2' + '/' + data['orderId'],
            method: 'get'
        })
    }
    ,
//埋点
    event(data) {
        return axios.request({
            // url: '/event',
            url: '/ye19sd95/csxx09i5/bryn2g62',
            data: data,
            method: 'post'
        })
    }
}
