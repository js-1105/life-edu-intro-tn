/* ===== Firebase 設定（單元一·第二堂手機投稿）=====
 * 用法：在 Firebase 主控台開一個專案、啟用「Realtime Database」，
 *       把主控台給你的 firebaseConfig 物件「整段」貼到下面 FB_CONFIG。
 * 未設定時（仍是 PASTE_...），頁面自動以「單機 localStorage 代打模式」運作
 *       —— 同一台展示機可用、但學員手機投稿不會傳上來。
 * 詳細步驟見：課程規劃/單元一_第二堂_Firebase設定教學.md
 */
window.FB_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE.firebaseapp.com",
  databaseURL: "https://PASTE-default-rtdb.firebaseio.com",
  projectId: "PASTE_PROJECT_ID"
};

/* 每屆上課換一個房號即可「清空重來」（不同房號＝不同資料；
 * 也可在 Firebase 主控台直接刪掉該節點）。建議用日期。 */
window.FB_ROOM = "u1-2026-0713";
