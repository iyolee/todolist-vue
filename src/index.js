import Vue from 'vue';

import App from './app.vue';

import './asserts/styles/test.styl'

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  render: h => h(App)
})