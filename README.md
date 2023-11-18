<div align="center">

# 立委競選官網

![立委競選官網封面](public/cover.png)

</div>

[Demo](https://jhouhank.github.io/legislator-2023-f2e/)

## 作品說明

針對一位即將競選立法委員的候選人所設計的官方網站，致力於為候選人塑造出良好的形象，同時提供重要的政見主張資訊以及捐款指引。

## 系統說明

**版本**

本專案在 Node.js `v18.16.0` 環境下進行開發。

**專案運行**

您可以按照以下步驟運行專案：

```shell
npm install
npm run dev
```

或

```shell
yarn
yarn dev
```

這些命令將安裝所有必要的相依套件，並啟動開發伺服器，讓您能夠開始開發和預覽您的專案。

如果您需要更多詳細資訊，請參考專案的 `package.json`。

## 資料夾說明

```shell
├── src               # 專案的主要原始碼資料夾，包含了應用程式的原始程式碼。
│   ├── assets/       # 包含應用程式的靜態資源，如圖像、字體等。
│   ├── components/   # 包含應用程式中的可重複使用元件。
│   ├── layout/       # 包含應用程式的佈局元件。
│   ├── pages/        # 包含應用程式的頁面元件，用於建立不同的頁面。
│   ├── model/        # 包含應用程式的資料。
│   ├── App.vue       # 應用程式的主應用程式元件。
│   └── main.js       # 應用程式的主入口檔案。
├── index.html        # 應用程式的主HTML文件，用於載入JavaScript檔案和渲染應用程式。
├── vite.config.js    # Vite的設定文件，用於配置建置工具Vite的行為。
├── package.json      # 專案的npm套件設定文件，包含了專案依賴和腳本。
└── README.md         # 包含項目的簡要描述和使用說明的自述文件。
```

## 使用技術

**前端框架與函式庫**

- Vue.js：前端開發框架，用於建立使用者介面和應用程式的元件。
- bootstrap：開源的前端框架，提供了一套用於快速開發響應式和現代化網頁的 CSS 和 JavaScript 元件。
- Sass：CSS 預處理器，擴展了 CSS 語法，提供變數、巢狀規則等功能，使風格表更具模組化和可維護性。

**建置工具**

- Vite：用於加速前端開發和建置最佳化的建置工具。

**動畫效果**

- AOS（Animation of Scroll）：用於實現頁面滾動時的動畫效果的函式庫。
- Lottie：開源動畫庫，使用 JSON 格式，讓設計師和開發者輕鬆分享和整合複雜矢量動畫。

**部署和託管**

- gh-pages：用於將應用程式部署到 GitHub Pages，以便在線上示範和分享專案。

## 相關連結

- [關卡資訊 | 第一關 - 立委競選官網](https://chalk-freedom-ec6.notion.site/b09625633b8d46dcb7908c033d01dbce)
- [設計稿（Designed by jhen）](https://www.figma.com/file/DCnuTZQ00D5VHiDkBLhxQ3/2023-The-F2E-%E7%AB%8B%E5%A7%94%E7%AB%B6%E9%81%B8%E5%AE%98%E7%B6%B2?type=design&node-id=139-170&mode=design&t=UsLYBWxOc2z0cFG2-0)
