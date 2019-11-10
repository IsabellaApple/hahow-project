This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


# Hahow Frontend Engineer 徵才小專案文件說明

## 我們該如何執行完成的 package?

第一步: 使用  command-line下指令 `git clone "我的專案"`
第二步: 使用  command-line下指令 `npm install` 
第三步: 使用  command-line j專案目錄下指令 `npm start` 


## 專案的架構，Web 的架構邏輯

 - 使用HOOK 、function component 
 - UI 使用 [MATERIAL-UI](https://material-ui.com/)
 
	 **專案架構**
	├── src/   
	│  ├── components/              # components 放置相關元件
	│  │  └── Common/              # 放置共用元件
	│  │  └── HeroList/               # HeroProfile 元件
	│  │  └── HeroProfile/          # HeroProfile 元件
	│  ├── hooks/                        # hooks 相關  
	│  │  └── GlobalHook/         # 全域 HOOK
	│  │  └── HeroHook/           # Hero HOOK
	│  ├── service/                     # API 相關  
	│  ├── APP.css                     # 根元件 CSS  
	│  ├── APP.js                       # 根元件 相關
	│  ├── APP.test.js               # 根元件 test
	│  ├── index.css                 # 程式入口  CSS
	│  ├── index.js                    # 程式入口
	│  ├── serviceWorker.js  
	├── package-lock.json  
	├── package.json  
	└── README. md

## 你對於所有使用到的第三方 library 的理解，以及他們的功能簡介

**Material UI**: react UI 框架，可以快速建立漂亮的元件，也有提供常用icon 庫。可以使用GRID 達成 RWD。重點是! 裡面的組件直觀很好串資料進去。:P
**Create React App**: 可快速建立架構一個開發React用的基礎react檔案目錄結構不可或缺的好幫手。

## 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解

 - 每份component import 的是什麼來源 如:
 `// Material UI`
  `import  Paper  from  '@material-ui/core/Paper';`
  
 - 暫時保留的程式碼(未來會用到的)
 - function 功能為何
 - 解釋說明比較複雜的功能
 - 劃分共同元件在同一檔案功能為何 
 - ...

## 在這份專案中你遇到的困難、問題，以及解決的方法

**遭遇到的困難:** 初次使用React新功能 HOOK實作, useEffect, useReducer與useContext做初始資料引入以及狀態管理使用的資料傳遞界接上的困難。

**解決的方法:** 上網(官網, Stack Overflow, medium ... ... )依關鍵字搜尋，尋找相關的討論文，加上反覆思考，不斷嘗試再嘗試得解。
