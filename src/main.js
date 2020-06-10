import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import * as firebase from "firebase";


Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyCVPd6BRrnw97yznL-uGOOviqiMhbtd8R8",
  authDomain: "testsite2-f646c.firebaseapp.com",
  databaseURL: "https://testsite2-f646c.firebaseio.com",
  projectId: "testsite2-f646c",
  storageBucket: "testsite2-f646c.appspot.com",
  messagingSenderId: "289741563885",
  appId: "1:289741563885:web:8186c602ae858ce090e9e"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
