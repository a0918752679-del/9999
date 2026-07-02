# V86 Clean Latest Rich Menu Package

此封包已整理為「只保留最新內容」版本。

## 保留內容

```text
public/assets/
├─ line-richmenu-field.jpg
├─ line-richmenu-admin.jpg
├─ line-richmenu-info.jpg
└─ line-richmenu-3tabs-overview.jpg

docs/
├─ richmenu-field-payload.json
├─ richmenu-admin-payload.json
├─ richmenu-info-payload.json
├─ RICHMENU_HOTSPOT_COORDINATES_V86.md
├─ richmenu-hotspot-coordinates-v86.csv
└─ verification-report-v86.json

server.js
package.json
Dockerfile
scripts/deploy-richmenu-v86.sh
```

## 已移除

- 舊版 patch notes
- 歷史版本 README
- 重複圖片
- 舊版 verification reports
- 舊版壓縮檔與暫存檔

## 功能對應

### 第 1 頁：外勤作業

| 功能 | action |
|---|---|
| 外勤回報 | `FIELD_REPORT_URL` |
| 後校正回報 | `FIELD_REPORT_URL?mode=post-calibration` |
| 即時機況 | message `即時機況` |

### 第 2 頁：行政作業

| 功能 | action |
|---|---|
| 回報彙整 | `FIELD_REPORT_URL/summary` |
| 設備管理 | message `設備管理` |
| 案件追蹤 | `CASE_TRACKING_URL` |

### 第 3 頁：相關資訊

| 功能 | action |
|---|---|
| Google Sheet | message `Google Sheet 連結` |
| 法規標準 | message `法規中心` |

## 檢查

- 三張 Rich Menu 圖皆為 `2500 × 1686`
- 三張 Rich Menu 圖皆小於 1MB
- 第二頁不含「資料安全」
- 第三頁不含「操作說明」
- Payload JSON 通過解析
- `server.js` 通過 `node --check`

