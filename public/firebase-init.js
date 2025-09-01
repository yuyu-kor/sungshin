// /public/firebase-init.js
import {
  initializeApp,
  getApps,
  getApp,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getAnalytics,
  isSupported,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeeHo7QgI189Wxs83PZhH4HRmd3CfsJ9E",
  authDomain: "homepage-f0027.firebaseapp.com",
  projectId: "homepage-f0027",
  storageBucket: "homepage-f0027.firebasestorage.app",
  messagingSenderId: "625077057688",
  appId: "1:625077057688:web:eb921d4223890084d2b8ed",
  measurementId: "G-3VFGLV1T71",
};

// HMR/중복 초기화 방지
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// 브라우저 지원 시에만 Analytics
isSupported()
  .then((ok) => {
    if (ok) getAnalytics(app);
  })
  .catch(() => {});
