# 漲停貓貓（CatLimitUp）

丟一張漲停截圖 → 輸出「截圖＋去綠幕跳舞貓」的 MP4，手機直接存相簿。純前端 PWA，截圖不上傳。

## 檔案
- `index.html`：整個 App（WebGL 去綠幕 + canvas.captureStream + MediaRecorder 即時錄 12 秒；Web Share 存相簿）
- `assets/cats.mp4`：綠幕貓素材（1080×1920、11.8 秒、綠色約 #00F500）
- `sw.js` / `manifest.webmanifest` / `assets/icon-*.png`：PWA（離線可用、可加入主畫面）
- `sample_ffmpeg.mp4`：用 ffmpeg 做的位置參考樣片

## 位置預設（來自 Threads 爆紅貼文實測）
貓咪影片寬＝截圖寬 85%、水平置中、貓群中心在截圖高度 60%（五檔報價區）。使用者可拖曳／兩指縮放／滑桿調整。

## 本機測試
`python -m http.server 8797` → http://localhost:8797 （Chrome 實測輸出 H.264 MP4 720×1566＋AAC）
注意：手機上「分享到相簿」需要 HTTPS，所以要部署才能完整使用。
