// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import navbar from './components/navbar'
import Footer from './components/footer'
import router from './router'


/* eslint-disable no-new */
new Vue({
    template: `
  <section class="hero is-primary is-fullheight">
    <navbar />
        <App/>
    <Footer/>
  </section>
  `,
    router,
    components: { App, navbar, Footer }
}).$mount('#app');