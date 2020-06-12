import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './config'
import i18n from './locale'
import Bridge from './libs/bridge'
import 'lib-flexible'
import './assets/css/iconfont/iconfont.css'
import FastClick from 'fastclick'
FastClick.attach(document.body);

import { NavBar,Toast,Row, Col , Divider , Field , Uploader , Button , Notify,Popup,Icon
  ,Lazyload ,Image, Tab, Tabs , Panel ,Collapse, CollapseItem,PullRefresh ,List ,RadioGroup ,Radio
  ,Checkbox, CheckboxGroup,ImagePreview,Dialog,Loading,Overlay,Picker,Cell, CellGroup} from 'vant';
Vue.use(Row).use(Col).use(NavBar).use(Toast).use(Divider).use(Field).use(Uploader)
    .use(Button).use(Notify).use(Popup).use(Icon).use(Lazyload).use(Image ).use(Tab )
    .use(Tabs ).use(Panel ).use(Collapse ).use(CollapseItem).use(PullRefresh).use(List).use(ImagePreview)
    .use(RadioGroup).use(Radio).use(Checkbox).use(CheckboxGroup).use(Dialog).use(Loading).use(Overlay).use(Picker)
    .use(Cell).use(CellGroup);
Vue.prototype.$bridge = Bridge;
Vue.config.productionTip = false;
Vue.prototype.$config = config;
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
