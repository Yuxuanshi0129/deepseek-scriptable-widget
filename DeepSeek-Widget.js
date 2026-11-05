// =====================================================
// DeepSeek Scriptable 桌面小组件 (美化升级版)
// 使用方法：复制全部代码到 Scriptable 中运行即可
// 可通过修改下方 STYLE_MODE 切换两种视觉风格：
//   "card"    -> 精致卡片风（推荐，与 iOS 原生播客/图书组件风格一致）
//   "minimal" -> 极简居中风（保留原版极简结构，修复文字折行并升级质感）
// =====================================================

const STYLE_MODE = "card" // 可选: "card" 或 "minimal"
const TARGET_URL = "deepseek://"

let widget = new ListWidget()
widget.url = TARGET_URL

// ================= 1. 深海暗夜渐变背景 =================
let gradient = new LinearGradient()
gradient.locations = [0.0, 0.65, 1.0]
gradient.colors = [
  new Color("#0D1322"), // 顶部深邃夜空蓝黑
  new Color("#131C31"), // 中部过渡色
  new Color("#1A2744")  // 底部微光深海蓝
]
widget.backgroundGradient = gradient

if (STYLE_MODE === "card") {
  // ================= 风格 A：精致卡片风 =================
  widget.setPadding(14, 15, 14, 15)

  // --- 顶部栏：圆角图标底座 + 状态标签 ---
  let headerStack = widget.addStack()
  headerStack.layoutHorizontally()
  headerStack.centerAlignContent()

  // 左侧图标容器（带半透明品牌蓝底座）
  let iconBox = headerStack.addStack()
  iconBox.size = new Size(34, 34)
  iconBox.cornerRadius = 9
  iconBox.backgroundColor = new Color("#4D6BFE", 0.22)
  iconBox.centerAlignContent()

  let sym = SFSymbol.named("sparkles")
  sym.applyFont(Font.boldSystemFont(18))
  let icon = iconBox.addImage(sym.image)
  icon.tintColor = new Color("#6B85FF")
  icon.imageSize = new Size(20, 20)

  headerStack.addSpacer()

  // 右上角轻量标签
  let badgeStack = headerStack.addStack()
  badgeStack.backgroundColor = new Color("#FFFFFF", 0.08)
  badgeStack.cornerRadius = 6
  badgeStack.setPadding(3, 7, 3, 7)
  let badgeText = badgeStack.addText("AI")
  badgeText.font = Font.boldMonospacedSystemFont(10)
  badgeText.textColor = new Color("#94A3B8")

  widget.addSpacer()

  // --- 中部：主标题（强制单行不折行）+ 副标题 ---
  let titleStack = widget.addStack()
  titleStack.layoutVertically()
  titleStack.spacing = 2

  let title = titleStack.addText("DeepSeek")
  title.font = Font.boldRoundedSystemFont(19)
  title.textColor = Color.white()
  title.lineLimit = 1
  title.minimumScaleFactor = 0.75 // 防止小号组件断行成 DeepS / eek

  let subtitle = titleStack.addText("探索未至之境")
  subtitle.font = Font.systemFont(11)
  subtitle.textColor = new Color("#8E9BAE")
  subtitle.lineLimit = 1

  widget.addSpacer(10)

  // --- 底部：仿 iOS 播客组件胶囊按钮 ---
  let pillStack = widget.addStack()
  pillStack.layoutHorizontally()
  pillStack.centerAlignContent()
  pillStack.spacing = 5
  pillStack.backgroundColor = new Color("#4D6BFE")
  pillStack.cornerRadius = 13
  pillStack.setPadding(6, 12, 6, 12)

  let chatSym = SFSymbol.named("bubble.left.and.bubble.right.fill")
  chatSym.applyFont(Font.mediumSystemFont(11))
  let chatIcon = pillStack.addImage(chatSym.image)
  chatIcon.tintColor = Color.white()
  chatIcon.imageSize = new Size(13, 13)

  let btnText = pillStack.addText("开始对话")
  btnText.font = Font.boldSystemFont(12)
  btnText.textColor = Color.white()
  btnText.lineLimit = 1

} else {
  // ================= 风格 B：极简居中风 =================
  widget.setPadding(16, 14, 16, 14)
  widget.addSpacer()

  // 垂直居中堆叠：解决小号组件横向空间不足导致的断行问题
  let centerStack = widget.addStack()
  centerStack.layoutVertically()
  centerStack.centerAlignContent()
  centerStack.spacing = 10

  // 居中发光感图标底座
  let iconRow = centerStack.addStack()
  iconRow.layoutHorizontally()
  iconRow.addSpacer()

  let iconCircle = iconRow.addStack()
  iconCircle.size = new Size(46, 46)
  iconCircle.cornerRadius = 23
  iconCircle.backgroundColor = new Color("#4D6BFE", 0.2)
  iconCircle.centerAlignContent()

  let sym = SFSymbol.named("sparkles")
  sym.applyFont(Font.boldSystemFont(22))
  let icon = iconCircle.addImage(sym.image)
  icon.tintColor = new Color("#5E7BFF")
  icon.imageSize = new Size(26, 26)

  iconRow.addSpacer()

  // 居中单行标题
  let textRow = centerStack.addStack()
  textRow.layoutHorizontally()
  textRow.addSpacer()

  let title = textRow.addText("DeepSeek")
  title.font = Font.boldRoundedSystemFont(19)
  title.textColor = Color.white()
  title.lineLimit = 1
  title.minimumScaleFactor = 0.8

  textRow.addSpacer()

  widget.addSpacer()
}

// 预览与运行
Script.setWidget(widget)
if (config.runsInApp) {
  widget.presentSmall()
}
Script.complete()
