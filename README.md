# HTML、CSS、JavaScript 入门项目知识点总结

本项目是一个包含多个独立页面的前端入门教程项目，旨在通过实践案例介绍 HTML、CSS 和 JavaScript 的基础知识。每个文件都侧重于一个或多个特定的知识点。

## 文件结构与知识点概览

### HTML 文件

-   **`1.html`**: **HTML基础标签**
    -   文档基本结构: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
    -   元数据: `<meta charset="UTF-8">`, `<meta name="viewport">`
    -   标题: `<title>`, `<h1>` - `<h6>`
    -   文本格式化: `<p>`, `<b>`, `<i>`, `<u>`, `<s>`, `<mark>`, `<small>`
    -   列表: 无序列表 `<ul><li>` 和有序列表 `<ol><li>`
    -   表格: `<table>`, `<tr>`, `<th>`, `<td>`

-   **`2.html`**: **链接与图片**
    -   超链接: `<a>` 及其 `href` 和 `target` 属性 (`_self`, `_blank`)
    -   图片: `<img>` 及其 `src`, `alt`, `width` 属性
    -   辅助标签: `<br>` (换行), `<hr>` (水平线)

-   **`3.html`**: **块级与内联元素**
    -   块级容器: `<div>`，用于页面布局和内容分组
    -   内联容器: `<span>`，用于局部文本样式设置

-   **`4.html`**: **表单基础**
    -   表单: `<form>`
    -   标签: `<label>`
    -   输入框: `<input>` 的不同 `type` 属性 (text, password, radio, checkbox, submit)
    -   `placeholder` 和 `value` 属性

-   **`5.html`**: **CSS 的三种引入方式**
    -   **内联样式**: 在 HTML 标签内部使用 `style` 属性
    -   **内部样式**: 在 `<head>` 中使用 `<style>` 标签
    -   **外部样式**: 通过 `<link>` 标签引入 `.css` 文件

-   **`6.html`**: **CSS 核心选择器**
    -   元素选择器 (如 `h2`)
    -   类选择器 (`.class`)
    -   ID 选择器 (`#id`)
    -   通用选择器 (`*`)
    -   后代选择器 (空格)
    -   子代选择器 (`>`)
    -   相邻兄弟选择器 (`+`)
    -   伪类选择器 (`:hover`)

-   **`7.html`**: **CSS 盒子模型**
    -   边框: `border` (复合属性)
    -   背景: `background-color`
    -   显示模式: `display: inline-block`

-   **`8.html`**: **CSS 浮动**
    -   浮动: `float: left` 和 `float: right`
    -   清除浮动: 使用 `overflow: hidden` 在父元素上清除浮动

-   **`9.html`**: **CSS 定位**
    -   相对定位: `position: relative`
    -   绝对定位: `position: absolute`
    -   固定定位: `position: fixed`
    -   使用 `top`, `left`, `right` 等属性进行位置调整

-   **`10.html`**: **JavaScript 的引入方式**
    -   **内部脚本**: 在 `<body>` 或 `<head>` 中使用 `<script>` 标签编写 JS 代码
    -   **外部脚本**: 通过 `<script>` 标签的 `src` 属性引入 `.js` 文件
    -   `console.log()` 和 `alert()`

-   **`11.html`**: **JavaScript 变量与数据类型**
    -   变量声明: `var`, `let`, `const` 的区别
    -   基本数据类型: `string`, `number`
    -   特殊值: `null` 和 `undefined` 的区别

-   **`12.html`**: **JavaScript 控制流**
    -   条件语句: `if...else`
    -   循环语句: `for` 循环, `while` 循环

-   **`13.html`**: **JavaScript 函数**
    -   函数声明: `function functionName() {}`
    -   函数调用
    -   使用 `return` 返回值

-   **`14.html`**: **JavaScript 事件绑定 (HTML属性)**
    -   `onclick`: 点击事件
    -   `onfocus`: 获得焦点事件
    -   `onblur`: 失去焦点事件

-   **`15.html`**: **DOM 操作**
    -   **获取元素**:
        -   `document.getElementById()`
        -   `document.getElementsByClassName()`
        -   `document.getElementsByTagName()`
    -   **修改内容**: `innerHTML`, `innerText`
    -   **修改样式**: `element.style.property`
    -   **事件监听**: `element.addEventListener('click', function() {})`

-   **`16.html`**: **DOM 综合案例：表格增删改**
    -   结合 HTML, CSS 和 JavaScript 实现动态表格操作
    -   关联 `js/table.js` 文件

### CSS 文件

-   **`css/style.css`**:
    -   演示了外部 CSS 文件的基本写法，包含一个简单的元素选择器 (`h3`)。

### JavaScript 文件

-   **`js/myscript.js`**:
    -   演示了外部 JS 文件的基本用法，包含一个 `console.log` 语句。

-   **`js/table.js`**:
    -   **DOM 动态操作**:
        -   `document.getElementById()`
        -   `table.insertRow()`: 添加行
        -   `element.parentNode`: 访问父节点
        -   `parentNode.removeChild()`: 删除节点
    -   **用户交互**:
        -   `prompt()`: 弹出输入框以获取用户输入
    -   **函数封装**: 将添加、删除、编辑功能封装在独立的函数中。

---

希望这份总结能帮助您更好地回顾和理解所学知识！
