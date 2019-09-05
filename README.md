# DODUI
> 基于 css 和 js 的 UI 基础库，定位于为后续 vue 等框架提供组件库、样式库基础支持。  
> 另外一点，DOD 意义在于“面向数据设计”，旨在能够实现以“数据配置”驱动解析成符合不同组件库风格的用户界面。

## Setup
```npm
npm i dodui -S
```

# 说明书（Specification）
> 针对移动端优先设计的组件库，所有长度、大小、距离等单位以 `rem` 进行指定。

# 设计原理说明（Principle）
该 UI 库设计成包含3大核心部分：
```
core.css - [必须]核心部分，包括对 html、body 的基本设置
html.css - [可选]包含所有对 html 原生组件的覆盖样式
dodui.css - 包含所有 component 样式
```

# 使用方法（Usage）
> 以下操作皆在 `main.js` 中进行，也可以通过 "`@import`" 在 css 中引用。

## 全量引用
```js
// 请安装 "npm i @mudas/reset.css -S" 或引用自定义的 reset
import '@mudas/reset.css'; // based of "YUI 3.18.1 (build f7e7bcb)"
import 'dodui/css/core.css';
import 'dodui/css/html.css';
import 'dodui/css/dodui.css';
```

## 只引用自定义组件
```js
import '@mudas/reset.css';
import 'dodui/css/core.css';
import 'dodui/css/dodui.css';
```

## 引用单个组件
```js
import '@mudas/reset.css';
import 'dodui/css/core.css';

// components you need
import 'dodui/css/card.css';
```

# core.css 介绍（about core.css）
## 原理介绍
- 通过将 html 设置 `100px` 做为 Root FontSize，其它单位全部换算成 `x/100rem` 来适配移动端
- 而为了修正内容区域的字体大小，将 body 再次修正为 `0.14rem` 的默认字体大小。
- 如此，则可以在未改变字体大小环境的情况下，依然能够快速通过 `rem` 进行设置尺寸、大小、位置、距离等。

### core.css
```css
html {
  font-size: 100px; 
}

body {
  color: #303133;
  font-family: "Avenir", "Helvetica, Arial", "sans-serif";
  font-size: .14rem;
  background-color: #f5f7fa;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
}

*, *:before, *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: none; 
}
```

### 例如
```scss
div {
  font-size: .14rem; // .14rem=14px , because html-font-size=100px
}
```

### 注意事项
若覆盖了 html 的 font-size，请记得进行相应的换算设置最合适的 font-size，因为所有组件都是以 html-font-size=100px 进行相对设置的。
比如以下案例：
```css
html {
  font-size: 120px;
}

.dod-section__title {
  font-size: .14rem; // 最终大小不再是 14px，而是 16.8px
}
```

### 关于 core.css 的覆盖
若想自定义 `html-font-size` 来达到更好的适配各端视觉效果，可以通过引用自定义的 `"core.css"` 或者通过 js 来动态设置 html 的 `font-size`。但是别忘记 dodui 是以 `box-sizing: border-box` 为基础设计的，所以除了自定义 html 以外记得插入以下样式：
```css
*, *:before, *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: none; 
}
```



