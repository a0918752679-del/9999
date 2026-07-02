# V86 Rich Menu 熱區座標表

座標系統：LINE Rich Menu 圖片尺寸 `2500 × 1686`。

## 頁面與 Alias

| 頁面 | Alias | 圖檔 |
|---|---|---|
| 外勤作業 | `ntpc-field` | `public/assets/line-richmenu-field.jpg` |
| 行政作業 | `ntpc-admin` | `public/assets/line-richmenu-admin.jpg` |
| 相關資訊 | `ntpc-info` | `public/assets/line-richmenu-info.jpg` |

## 功能熱區

| 頁面 | 功能 | x | y | width | height | action | target |
|---|---|---:|---:|---:|---:|---|---|
| 外勤作業 | 外勤回報 | 30 | 760 | 805 | 685 | uri | `{FIELD_REPORT_URL}` |
| 外勤作業 | 後校正回報 | 840 | 760 | 790 | 685 | uri | `{FIELD_REPORT_URL}?mode=post-calibration` |
| 外勤作業 | 即時機況 | 1635 | 760 | 835 | 685 | message | `即時機況` |
| 行政作業 | 回報彙整 | 25 | 760 | 805 | 685 | uri | `{FIELD_REPORT_URL}/summary` |
| 行政作業 | 設備管理 | 835 | 760 | 790 | 685 | message | `設備管理` |
| 行政作業 | 案件追蹤 | 1630 | 760 | 840 | 685 | uri | `{CASE_TRACKING_URL}` |
| 相關資訊 | Google Sheet | 25 | 810 | 1215 | 635 | message | `Google Sheet 連結` |
| 相關資訊 | 法規標準 | 1245 | 810 | 1230 | 635 | message | `法規中心` |

## 注意

- 這版依你最後指定的三張圖設定熱區。
- 第二頁沒有「資料安全」。
- 第三頁沒有「操作說明」。
- 此封包只保留最新 Rich Menu 需要的內容，舊版 patch notes 與歷史雜檔已移除。