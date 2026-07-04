# PATCH NOTES｜Rich Menu Alias 分頁切換 V73.4

## 更新重點

- 將原本單頁 Rich Menu 更新為 4 頁分頁式 Rich Menu。
- 採用 LINE 官方支援的 Rich Menu Alias + Switch Action。
- 每頁圖片尺寸一致：2500 x 1686 px。
- 新增 4 張明亮科技藍 Rich Menu 圖片：
  - public/assets/line-rich-menu-main.jpg
  - public/assets/line-rich-menu-field.jpg
  - public/assets/line-rich-menu-equipment.jpg
  - public/assets/line-rich-menu-results.jpg

## 分頁結構

1. 主選單：外勤回報、成果查詢、即時機況、百大熱點、設備管理、案件追蹤、月報統計、最新消息。
2. 外勤回報：新增回報、照片上傳、座標定位、回報彙整、草稿暫存、回到主選單。
3. 設備管理：設備列表、即時機況、後校正記錄、校正管理、維護記錄、設定管理、設備日誌、回到主選單。
4. 成果查詢：成果統計、行政區查詢、趨勢分析、案件查詢、匯出報表、圖表視覺化、設定篩選、回到主選單。

## 環境變數

通常不需修改；同一個 LINE Channel 若有多套選單才需調整：

```env
LINE_RICHMENU_ALIAS_MAIN=ntpc-main
LINE_RICHMENU_ALIAS_FIELD=ntpc-field
LINE_RICHMENU_ALIAS_EQUIPMENT=ntpc-equipment
LINE_RICHMENU_ALIAS_RESULTS=ntpc-results
```

## 套用方式

部署後進入後台，執行「一鍵更新」。系統會自動：

1. 建立 4 個 Rich Menu。
2. 上傳 4 張 Rich Menu 圖。
3. 建立或更新 4 個 Alias。
4. 將主選單設為 Default Rich Menu。
5. 清除舊版 NTPC Noise Rich Menu，避免 LINE Channel 掛到舊選單。
