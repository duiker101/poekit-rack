import Vue from 'Vue'
import App from './app'
import {RackItem, RackItemIcon, RackItemDetails} from '../src'

Vue.component('rack-item', RackItem)
Vue.component('rack-item-details', RackItemDetails)
Vue.component('rack-item-icon', RackItemIcon)

new Vue({
    el: '#app',
    render: h => h(App),
    components: {RackItem, RackItemDetails, RackItemIcon}
})