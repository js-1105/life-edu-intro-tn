/* ===== Firebase 設定（單元一·第二堂手機投稿）=====
 * 用法：在 Firebase 主控台開一個專案、啟用「Realtime Database」，
 *       把主控台給你的 firebaseConfig 物件「整段」貼到下面 FB_CONFIG。
 * 未設定時（仍是 PASTE_...），頁面自動以「單機 localStorage 代打模式」運作
 *       —— 同一台展示機可用、但學員手機投稿不會傳上來。
 * 詳細步驟見：課程規劃/單元一_第二堂_Firebase設定教學.md
 */
window.FB_CONFIG = {
  apiKey: "AIzaSyCFuzUM6Xs7zcP71nT2O3E4XVexofGoz0w",
  authDomain: "life-edu-intro.firebaseapp.com",
  databaseURL: "https://life-edu-intro-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "life-edu-intro",
  storageBucket: "life-edu-intro.firebasestorage.app",
  messagingSenderId: "861046300947",
  appId: "1:861046300947:web:7b3466af9a3bc06cfb7ae6"
};

/* 每屆上課換一個房號即可「清空重來」（不同房號＝不同資料；
 * 也可在 Firebase 主控台直接刪掉該節點）。建議用日期。 */
window.FB_ROOM = "u1tn-2026-0727";
