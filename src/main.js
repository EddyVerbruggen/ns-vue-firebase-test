import Vue from 'nativescript-vue';
import App from './App';
import store from './store';
import firebase from 'nativescript-plugin-firebase'

firebase.init({
  onAuthStateChanged: data => { // optional
    console.log((data.loggedIn ? "Logged in to firebase" : "Logged out from firebase") + " (init's onAuthStateChanged callback)");
  },
  persist: false,
}).then(
  () => {
    console.log("Firebase is ready");
  },
  error => {
    console.log("firebase.init error: " + error);
  }
);

import './styles.scss';

new Vue({
  store,
  render: h => h(App),
}).$start();
