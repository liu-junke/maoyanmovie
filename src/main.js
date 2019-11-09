import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.styl'
import './utils/rem'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import { Indicator } from 'mint-ui'
import 'mint-ui/lib/style.css'
import { homeFilter, futureFilter } from './filters/index';
import Fw from './freamwork'
import 'swiper/css/swiper.css'

Vue.use(Fw)
Vue.use(MintUI)
Vue.use(Indicator)

for (var key in homeFilter) {
    Vue.filter(key, homeFilter[key])
}
for (var key in futureFilter) {
    Vue.filter(key, futureFilter[key])
}

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')