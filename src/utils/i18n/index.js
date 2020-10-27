import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "./local";
Vue.use(VueI18n); //执行install方法

// 语言映射表
const LANG_MAP = {
    'en': 'en-US',
    'zh': 'zh-CN',
    'tw': 'zh-TW',
    'ja': 'ja-JP',
    'ru': 'ru-RU',
}

function getLangFromBrowser() {
    const defaultLang = 'en';
    let lang = navigator.language || navigator.userLanguage || defaultLang;
    lang = lang.toLowerCase(); //zh-cn
    for (let [k, v] of Object.entries(LANG_MAP)) {
        k = k.toLowerCase();
        v = v.toLowerCase();
        if (lang === k || lang === v) {
            return k;
        }
    }
    return defaultLang;
}

const DEFAULT_LANG = getLangFromBrowser();
if (DEFAULT_LANG !== "zh" && DEFAULT_LANG !== "en" && DEFAULT_LANG !== "ru") {
    DEFAULT_LANG = "en";
}
const i18n = new VueI18n({
    locale: DEFAULT_LANG, // 设置初始语言
    fallbackLocale: DEFAULT_LANG, // 未找到对应语言时的默认语言
    messages
});

export function setBrowserLang(lang) {
    i18n.locale = lang;
}
export default i18n;