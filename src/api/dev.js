import axios from '@/libs/api.request'

export default {
//反馈中心
    feedBack(data) {
        return axios.request({
            url: '/system/opinion',
            data: data,
            method: 'post'
        })
    },
//消息中心
    getMsg(data) {
        return axios.request({
            url: '/message/history',
            params: data,
            method: 'get'
        })
    },
//
    readMsg() {
        return axios.request({
            url: '/message/read',
            method: 'patch'
        })
    },
//还款记录
    repaymentRecord(data) {
        return axios.request({
            url: '/repayment/record',
            params: data,
            method: 'get'
        })
    },
//领券中心-展示领取类型为主动领取的优惠券
    getCouponCenter(data) {
        return axios.request({
            url: '/coupon/couponCenter',
            params: data,
            method: 'get'
        })
    },
//领券中心-用户点击领取优惠券
    activateCoupon(data) {
        return axios.request({
            url: '/coupon/activateCoupon',
            data: data,
            method: 'post'
        })
    },
//查询优惠券详情-根据优惠券Id查询
    getCoupon(data) {
        return axios.request({
            url: '/coupon/getCoupon',
            params: data,
            method: 'get'
        })
    },
//查询优惠券列表-根据优惠券状态展示用户优惠券
    getCoupons(data) {
        return axios.request({
            url: '/coupon/getCoupons',
            params: data,
            method: 'get'
        })
    },
//查询借款记录  历史订单
    orderRecord(data) {
        return axios.request({
            url: '/order/record',
            params: data,
            method: 'get'
        })
    },
//还款明细
    stagesRepayDetail(data) {
        return axios.request({
            url: '/repayment/currentRepay/stagesRepeyDetail' + '/' + data['orderId'],
            method: 'get'
        })
    },
//查询借款详情
    orderDetail(data) {
        return axios.request({
            url: '/order/detail' + '/' + data['orderId'],
            method: 'get'
        })
    },
//还款码页面 还款信息
//repaymentDetail(data) {
//     return axios.request({
//         // url: '/repayment/detail'+'/'+data['orderId'],
//         url: '/repayment/detail'+'/'+data['orderId'],
//         method: 'get'
//     })
// },
//还款证明
    addRepayProof(data) {
        return axios.request({
            url: '/repayment/addRepayProof',
            data: data,
            method: 'post'
        })
    },
//帮助中心
    helpCenter() {
        return axios.request({
            url: '/system/help/center',
            method: 'get'
        })
    },
//帮助中心点击有用无用
    helpCenterChose(data) {
        return axios.request({
            url: '/system/help/center/chose',
            data: data,
            method: 'patch'
        })
    },
//预注册
    preregister(data) {
        return axios.request({
            url: '/h5/preregister',
            data: data,
            method: 'post'
        })
    },
//查看用户是否注册
    preregisterPhone(data) {
        return axios.request({
            url: "/user/register/check",
            params: data,
            method: 'get'
        })
    },

    getCall(data) {
        return axios.request({
            url: '/apk',
            params: data,
            method: 'get'
        })
    },
//h5渠道
    channelH5s(data) {
        return axios.request({
            url: '/channel/h5s' + '/' + data['id'],
            method: 'get'
        })
    },
//还款码页面
    repaymentCode(data) {
        return axios.request({
            url: '/repayment/code',
            params: data,
            method: 'get'
        })
    },
//还款码页面 还款信息--非检验
    repaymentCodeNocheck(data) {
        return axios.request({
            url: '/repayment/code/nocheck',
            params: data,
            method: 'get'
        })
    },
//还款码 后台生成
    repaymentCodeShare(data) {
        return axios.request({
            url: '/repayment/code/repaymentCode/share' + '/' + data['signature'],
            method: 'get'
        })
    },
//提前还款详情
    repaymentAdvance() {
        return axios.request({
            url: '/repayment/advance',
            method: 'get'
        })
    },
//借款合同信息
    getContractParam2(data) {
        return axios.request({
            url: '/withdrawDeposit/v2/getContractParam2' + '/' + data['orderId'],
            method: 'get'
        })
    },
//埋点
    event(data) {
        return axios.request({
            url: '/event',
            data: data,
            method: 'post'
        })
    }
}