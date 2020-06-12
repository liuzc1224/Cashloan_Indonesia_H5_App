import axios from '@/libs/api.request'
import online from "./online";
import dev from "./dev";

let api;
 if (process.env.VUE_APP_API === 'dev') {
     api = dev
} else if (process.env.VUE_APP_API === 'online') {
    api = online
} else {
     api = dev
}
// if (process.env.NODE_ENV === 'development') {
//     api = dev
// } else {
//     api = online
// }
// api = dev;
console.log(process.env.VUE_APP_API);
export default api;


// //反馈中心
// export const feedBack = (data) => {
//     return axios.request({
//         url: '/system/opinion',
//         // url: '/9g1y1vf8/epguvk7d/i8f5dwac',
//         data:data,
//         method: 'post'
//     })
// };
// //消息中心
// export const getMsg = (data) => {
//     return axios.request({
//         url: '/message/history',
//         // url: '/fn1vs8cr/rbyhpt19/bvutlp6x',
//         params:data,
//         method: 'get'
//     })
// };
// //
// export const readMsg = () => {
//     return axios.request({
//         url: '/message/read',
//         // url: '/kemfdfft/xr14qt3g/8htchw3u',
//         method: 'patch'
//     })
// };
// //还款记录
// export const repaymentRecord = (data) => {
//     return axios.request({
//         url: '/repayment/record',
//         // url: '/jxh27wxj/3adybjaw/h0fhx9im',
//         params:data,
//         method: 'get'
//     })
// };
// //领券中心-展示领取类型为主动领取的优惠券
// export const getCouponCenter = (data) => {
//     return axios.request({
//         url: '/coupon/couponCenter',
//         // url: '/dew60ngs/3qzh2w7i/vcnvtcqc',
//         params:data,
//         method: 'get'
//     })
// };
// //领券中心-用户点击领取优惠券
// export const activateCoupon = (data) => {
//     return axios.request({
//         url: '/coupon/activateCoupon',
//         // url: '/av5gj208/zwq3zggn/c971drn3',
//         data:data,
//         method: 'post'
//     })
// };
// //查询优惠券详情-根据优惠券Id查询
// export const getCoupon = (data) => {
//     return axios.request({
//         url: '/coupon/getCoupon',
//         // url: '/impaxrw8/po8kwvfq/pgvrp21j',
//         params:data,
//         method: 'get'
//     })
// };
// //查询优惠券列表-根据优惠券状态展示用户优惠券
// export const getCoupons = (data) => {
//     return axios.request({
//         url: '/coupon/getCoupons',
//         // url: '/6oupg6jp/6f53y6ng/axqff2gi',
//         params:data,
//         method: 'get'
//     })
// };
// //查询借款记录  历史订单
// export const orderRecord = (data) => {
//     return axios.request({
//         url: '/order/record',
//         // url: '/0e1s3i1x/g79d1cpi/djw46vyd',
//         params:data,
//         method: 'get'
//     })
// };
// //还款明细
// export const stagesRepayDetail=(data) => {
//     return axios.request({
//         url: '/repayment/currentRepay/stagesRepeyDetail'+'/'+data['orderId'],
//         // url: '/2vpv5wts/1mk9x1n1/grqesr6i'+'/'+data['orderId'],
//         method: 'get'
//     })
// };
// //查询借款详情
// export const orderDetail=(data) => {
//     return axios.request({
//         url: '/order/detail'+'/'+data['orderId'],
//         // url: '/wmn60pw2/kpu3x623/544xpv0o'+'/'+data['orderId'],
//         method: 'get'
//     })
// };
// //还款码页面 还款信息
// // export const repaymentDetail=(data) => {
// //     return axios.request({
// //         // url: '/repayment/detail'+'/'+data['orderId'],
// //         url: '/repayment/detail'+'/'+data['orderId'],
// //         method: 'get'
// //     })
// // };
// //还款证明
// export const addRepayProof=(data) => {
//     return axios.request({
//         url: '/repayment/addRepayProof',
//         // url: '/7igbou90/9yd6many/krnq71fh',
//         data:data,
//         method: 'post'
//     })
// };
// //帮助中心
// export const helpCenter=() => {
//     return axios.request({
//         url: '/system/help/center',
//         // url: '/76oqgav9/t84nhk58/xj4ql6ee',
//         method: 'get'
//     })
// };
// //帮助中心点击有用无用
// export const helpCenterChose=(data) => {
//     return axios.request({
//         url: '/system/help/center/chose',
//         // url: '/wkxp9eiy/fg9ga0t8/a14qx0w1',
//         data:data,
//         method: 'patch'
//     })
// };
// //预注册
// export const preregister=(data) => {
//     return axios.request({
//         url: '/h5/preregister',
//         // url: '/uq246srd/san0tfng/kplgrf3j',
//         data:data,
//         method: 'post'
//     })
// };
// //查看用户是否注册
// export const preregisterPhone = (data) => {
//     return axios.request({
//         url: "/user/register/check",
//         // url: "/doudn4li/ehzyp0xt/xyt8m8ay",
//         params:data,
//         method: 'get'
//     })
// };
//
// export const getCall=(data) => {
//     return axios.request({
//         url: '/apk',
//         // url: '/gnjwy90l/ax2go156/u6pk2uiu',
//         params:data,
//         method: 'get'
//     })
// };
// //h5渠道
// export const channelH5s=(data) => {
//     return axios.request({
//         url: '/channel/h5s'+'/'+data['id'],
//         // url: '/2i8jlfw6/o2h2exuo/97xkf9mq'+'/'+data['id'],
//         method: 'get'
//     })
// };
// //还款码页面
// export const repaymentCode=(data) => {
//     return axios.request({
//         url: '/duitku/repaymentCode',
//         // url: '/us929psz/04pkvii1/98eqfv4e',
//         params:data,
//         method: 'get'
//     })
// };
// //还款码页面 还款信息--非检验
// export const repaymentCodeNocheck=(data) => {
//     return axios.request({
//         url: '/duitku/repaymentCode/nocheck',
//         // url: '/xsno7vnj/lz04ktw8/f5hfo8nh',
//         params:data,
//         method: 'get'
//     })
// };
// //还款码 后台生成
// export const repaymentCodeShare=(data) => {
//     return axios.request({
//         url: '/duitku/repaymentCode/share'+'/'+data['signature'],
//         // url: '/orllvto9/bue4en9q/9onxnobw'+'/'+data['signature'],
//         method: 'get'
//     })
// };
// //提前还款详情
// export const repaymentAdvance=() => {
//     return axios.request({
//         url: '/repayment/advance',
//         // url: '/7979cz8h/u5tc0t4k/g9a08vsa',
//         method: 'get'
//     })
// };
// //借款合同信息
// export const getContractParam2=(data) => {
//     return axios.request({
//         url: '/withdrawDeposit/v2/getContractParam2'+'/'+data['orderId'],
//         // url: '/m4ciws95/yec7twti/q0cyqff3'+'/'+data['orderId'],
//         method: 'get'
//     })
// };
// //埋点
// export const event=(data) => {
//     return axios.request({
//         url: '/event',
//         // url: '/deyreafr/v1hhnus1/d7fynnsd',
//         data: data,
//         method: 'post'
//     })
// };