// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import navbar from './components/navbar'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  template: `
  <section class="hero is-info is-medium">
    <navbar />
        <App/>
</section>
  `,
  router,
  components: { App,  navbar,}
}).$mount('#app');
