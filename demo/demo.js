import Vue from 'Vue'
import App from './app'
import {RackItem,RackItemDetails} from '../src'

Vue.component('rack-item', RackItem);
Vue.component('rack-item-details', RackItemDetails);

new Vue({
  el: '#app',
  render: h => h(App),
});