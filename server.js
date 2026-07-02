const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "public");

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicDir));
app.use("/assets", express.static(path.join(publicDir, "assets")));

app.get("/", (req, res) => {
  const adminHtml = path.join(publicDir, "admin.html");
  const indexHtml = path.join(publicDir, "index.html");
  if (fs.existsSync(adminHtml)) return res.sendFile(adminHtml);
  if (fs.existsSync(indexHtml)) return res.sendFile(indexHtml);
  res.type("html").send(`<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><title>Rich Menu V86</title></head><body><h1>Rich Menu V86 Clean Package</h1><p>Use <code>/health</code> and <code>/api/admin/line/rich-menu-diagnostics</code> to verify deployment.</p></body></html>`);
});

app.get("/health", (req, res) => {
  res.json({ ok: true, version: "86.0.0", service: "linebot-live-equipment-richmenu" });
});

app.get("/api/admin/line/rich-menu-diagnostics", (req, res) => {
  const assetsDir = path.join(publicDir, "assets");
  const files = ["line-richmenu-field.jpg","line-richmenu-admin.jpg","line-richmenu-info.jpg","line-richmenu-3tabs-overview.jpg"].map(file => {
    const p = path.join(assetsDir, file);
    return { file, exists: fs.existsSync(p), sizeBytes: fs.existsSync(p) ? fs.statSync(p).size : null };
  });

  res.json({
    ok: true,
    version: "86.0.0",
    architecture: "3 independent rich menus; final user-provided images; mapped function card areas only",
    aliases: {
      field: process.env.LINE_RICHMENU_ALIAS_FIELD || "ntpc-field",
      admin: process.env.LINE_RICHMENU_ALIAS_ADMIN || "ntpc-admin",
      info: process.env.LINE_RICHMENU_ALIAS_INFO || "ntpc-info"
    },
    files
  });
});

app.post("/api/admin/line/update-rich-menu", (req, res) => {
  res.json({
    ok: true,
    version: "86.0.0",
    message: "Clean package is ready. Use the included payload JSON and image assets with your existing LINE update implementation.",
    payloads: [
      "docs/richmenu-field-payload.json",
      "docs/richmenu-admin-payload.json",
      "docs/richmenu-info-payload.json"
    ]
  });
});

app.listen(PORT, () => console.log(`Rich Menu V86 running on ${PORT}`));
