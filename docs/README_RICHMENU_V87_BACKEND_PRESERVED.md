# V87 原後台保留・Rich Menu Only Patch

## 重點

這版不再覆蓋你的後台首頁，也不再建立 V86 Clean Package 頁面。

- 基底來源：`linebot_live_equipment_v73_3(1).zip`
- 原後台檔案：保留
- 更新範圍：只替換 Rich Menu 三張圖與 payload JSON
- 第二頁：「資料安全」已移除
- 第三頁：「操作說明」已移除

## 圖檔

```text
public/assets/line-richmenu-field.jpg
public/assets/line-richmenu-admin.jpg
public/assets/line-richmenu-info.jpg
```

## Payload

```text
docs/richmenu-field-payload.json
docs/richmenu-admin-payload.json
docs/richmenu-info-payload.json
docs/RICHMENU_HOTSPOT_COORDINATES_V87.md
```

## 功能對應

### 外勤作業
- 外勤回報 → `FIELD_REPORT_URL`
- 後校正回報 → `FIELD_REPORT_URL?mode=post-calibration`
- 即時機況 → message `即時機況`

### 行政作業
- 回報彙整 → `FIELD_REPORT_URL/summary`
- 設備管理 → message `設備管理`
- 案件追蹤 → `CASE_TRACKING_URL`

### 相關資訊
- Google Sheet → message `Google Sheet 連結`
- 法規標準 → message `法規中心`

## 部署後

請走你的原後台，不要看 V86 那種 Clean Package 頁：

```text
https://newtaipeinoise.zeabur.app/admin.html
```

套用 Rich Menu：

```text
POST /api/admin/line/update-rich-menu
```


## V87.1 最終檢查

- all_checks_passed：`True`
- 後台保留判定：以原 `server.js` / `package.json` 為準
- 不再要求 `admin.html`，因 v73 原封包不是用此檔作為後台入口
- 不含 V86 Clean Package 首頁文字
- 只更新 Rich Menu 圖片與 payload JSON
