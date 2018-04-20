import Vue from 'Vue'
import App from './app'
import RackItem from '../src/'

Vue.component('rack-item', RackItem);

new Vue({
  el: '#app',
  render: h => h(App),
});