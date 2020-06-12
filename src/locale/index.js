import Vue from 'vue'
import VueI18n from 'vue-i18n'
import customPtBr from './lang/id-ID'

Vue.use(VueI18n);

let lang = 'in-ID';
Vue.config.lang = lang;

Vue.locale = () => {};
const messages = {
  'in-ID': customPtBr,
  // 'en-US': Object.assign(enUsLocale, customEnUs)
};
const i18n = new VueI18n({
  locale: lang,
  messages
});

export default i18n

