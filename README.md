# DeepSeek Scriptable Widget

一个为 iOS [Scriptable](https://scriptable.app/) 设计的 DeepSeek 桌面小组件，提供两种视觉风格，点击即可唤起 DeepSeek。

## 功能

- 深海暗夜渐变背景，与 DeepSeek 品牌蓝一致
- 两种风格可切换：
  - **card（默认）**：精致卡片风，含图标底座、状态标签、标题、副标题与胶囊按钮，风格接近 iOS 原生播客/图书组件
  - **minimal**：极简居中风，修复了小号组件文字折行问题
- 点击组件通过 URL Scheme 拉起 DeepSeek

## 使用方法

1. 在 iPhone / iPad 上安装 [Scriptable](https://scriptable.app/)
2. 打开 Scriptable，新建脚本，将 `DeepSeek-Widget.js` 的全部内容粘贴进去并保存
3. 回到主屏幕，长按进入「编辑/抖动」模式 → 添加小组件 → 选择 Scriptable → 指定为该脚本
4. 在手机上点一下组件即可运行并预览

## 自定义

打开 `DeepSeek-Widget.js`，修改文件顶部的两个常量：

```js
const STYLE_MODE = "card"   // "card" 或 "minimal"
const TARGET_URL = "deepseek://"  // 点击组件后打开的目标
```

- 风格切换：把 `STYLE_MODE` 改为 `"minimal"` 即可换到极简居中版
- 打开目标：若你的设备没有注册 `deepseek://` 这个 Scheme（例如只装了网页版），把 `TARGET_URL` 改为 `https://chat.deepseek.com/`

## 说明 / 免责声明

本小组件**不调用 DeepSeek 的任何 API**。它只是通过 URL Scheme（或网页链接）把用户引导到 DeepSeek 的官方 App / 网页，组件本身与 DeepSeek 后台没有数据交互。

由于 DeepSeek 目前**没有开放的公开接口**可供小组件独立调用，因此组件 UI 上出现的元素（例如卡片风里的图标、按钮样式等）**仅用于视觉美观，并不代表组件具备对应的实际功能**——点击组件只会拉起 DeepSeek，而不会在组件内直接发起对话、拍照或语音输入。

## 许可证

[MIT](LICENSE) © Yuxuanshi0129
