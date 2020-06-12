export default [
  {
    path: '/feed-back',
    name: 'feed-back',//用户反馈
    component: () => import('@/views/feed-back.vue')
  },{
    path: '/borrowing-strategy',
    name: 'borrowing-strategy',//借款攻略
    component: () => import('@/views/borrowing-strategy.vue')
  },{
    path: '/repayment-notice',
    name: 'repayment-notice',//还款须知
    component: () => import('@/views/repayment-notice.vue')
  },{
    path: '/borrow-more-money',
    name: 'borrow-more-money',//如何借更多钱
    component: () => import('@/views/borrow-more-money.vue')
  },{
    path: '/coupon',
    name: 'coupon',//我的优惠券
    component: () => import('@/views/coupon.vue')
  },{
    path: '/coupon-center',
    name: 'coupon-center',//领券中心
    component: () => import('@/views/coupon-center.vue')
  },{
    path: '/coupon-description',
    name: 'coupon-description',//优惠券说明
    component: () => import('@/views/coupon-description.vue')
  },{
    path: '/help-center',
    name: 'help-center',//帮助中心
    component: () => import('@/views/help-center.vue')
  },{
    path: '/historical-order',
    name: 'historical-order',//历史订单
    component: () => import('@/views/historical-order.vue')
  },{
    path: '/invite-friends',
    name: 'invite-friends',//邀请好友
    component: () => import('@/views/invite-friends.vue')
  },{
    path: '/message-center',
    name: 'message-center',//消息中心
    component: () => import('@/views/message-center.vue')
  },{
    path: '/order-details',
    name: 'order-details',//订单详情
    component: () => import('@/views/order-details.vue')
  },{
    path: '/repayment-detail',
    name: 'repayment-detail',//还款明细
    component: () => import('@/views/repayment-detail.vue')
  },{
    path: '/repayment-record',
    name: 'repayment-record',//还款记录
    component: () => import('@/views/repayment-record.vue')
  },{
    path: '/online-repayment',
    name: 'online-repayment',//在线还款
    component: () => import('@/views/online-repayment.vue')
  },
  {
    path: '/repayment-code',
    name: 'repayment-code',//还款码
    component: () => import('@/views/repayment-code.vue')
  },
  {
    path: '/repayment-code-web',
    name: 'repayment-code-web',//还款码
    component: () => import('@/views/repayment-code-web.vue')
  },
  {
    path: '/repayment-certificate',
    name: 'repayment-certificate',//还款证明
    component: () => import('@/views/repayment-certificate.vue')
  },{
    path: '/first-edition/:id',
    name: 'first-edition/:id',//H5分享第一版
    component: () => import('@/views/first-edition.vue')
  },{
    path: '/second-edition/:id',
    name: 'second-edition/:id',//H5分享第二版
    component: () => import('@/views/second-edition.vue')
  },{
    path: '/coupon-select',
    name: 'coupon-select',//选择优惠券
    component: () => import('@/views/coupon-select.vue')
  },{
    path: '/prepayment',
    name: 'prepayment',//提前还款
    component: () => import('@/views/prepayment.vue')
  },
  {
    path: '/prepayment-web',
    name: 'prepayment-web',//还款 网页
    component: () => import('@/views/prepayment-web.vue')
  },{
    path: '/invite-registered/:referrerId/:source',
    name: 'invite-registered',//邀请预注册
    component: () => import('@/views/invite-registered.vue')
  },{
    path: '/privacy-agreement',
    name: 'privacy-agreement',//隐私协议
    component: () => import('@/views/privacy-agreement.vue')
  },{
    path: '/privacy-protocol',
    name: 'privacy-protocol',//隐私协议弹窗  无导航头
    component: () => import('@/views/privacy-protocol.vue')
  },{
    path: '/loan-contract',
    name: 'loan-contract',//借款合同
    component: () => import('@/views/loan-contract.vue')
  },{
    path: '/membership-agreement',
    name: 'membership-agreement',//合作社会员协议
    component: () => import('@/views/membership-agreement.vue')
  },{
    path: '/jump',
    name: 'jump',//跳转
    component: () => import('@/views/jump.vue')
  }
]
