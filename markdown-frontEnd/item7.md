# 🎯 Vue 初体验 - 日历

## 📝 题目说明

相信经过前面的学习，你已经掌握了 HTML、CSS 和 JavaScript 的基本用法。在写代码的过程中，你是否感觉"修改数据好麻烦"？要先 querySelector 绑定元素获取 value，再对 value 进行修改，最后把 value 赋值给元素。

那么有没有什么办法，实现数据响应式一步到位呢？

这就需要用到 **Vue 框架**了！Vue 是一个渐进式的 JavaScript 框架架，可以帮助我们更高效地构建用户界面。

## 🌟 Vue 的特点

1. **声明式渲染**：基于 JavaScript 状态声明式地描述 HTML 输出
2. **响应式**：自动跟踪状态变化，高效更新 DOM
3. **组件化**：将界面拆分成可复用的组件
4. **易于学习**：对初学者友好，文档丰富

## 🎯 题目要求

使用 Vue 创建一个**日历**，实现以下功能：

### 基础要求

1. **显示当前日期**
   - 显示当前年份和月份
   - 使用 Vue 的数据绑定（`{{ }}`）

2. **显示日历网格**
   - 显示当前月份的所有日期
   - 使用 `v-for` 指令渲染日期列表
   - 正确处理每月的第一天是星期几

3. **切换月份**
   - 添加"上个月"和"下个月"按钮
   - 点击后切换到上个月或下个月
   - 使用事件处理

4. **标记今天**
   - 高亮显示今天的日期
   - 使用条件渲染（`v-if` 或 `v-class`）

### 进阶选做（挑战自己）

1. **跳转到今天**
   - 添加"今天"按钮
   - 点击后跳转回当前月份

2. **添加事件**
   - 点击某个日期，可以添加事件
   - 使用数组存储事件

    ![日历示例](/日历.png)


## 📚 学习资源

### Vue 官方文档
- [Vue 3 官方文档](https://cn.vuejs.org/)
- [Vue 快速上手](https://cn.vuejs.org/guide/quick-start.html)
- [Vue 教程 - 菜鸟教程](https://www.runoob.com/vue2/vue-tutorial.html)

### 视频教程
- [Vue3 快速入门 - 尚硅谷](https://www.bilibili.com/video/BV1Zy4y1K7SH/)
- [Vue3 教程 - 黑马程序员](https://www.bilibili.com/video/BV1uq4y1k7Th/)

### JavaScript 日期处理
- [MDN Date 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)

## 📝 提交方式

提交 `007-calendar.html` 文件

## ⚠️ 注意事项

- **日期计算**：需要了解 JavaScript 的 Date 对象
- **从简单开始**：先实现当前月份的显示，再添加切换功能
- **样式美化**：使用 CSS 让日历看起来美观


---

**💡 提示**：这是你的第一次 Vue 实践，享受响应式数据带来的便利！可以参考网上的日历设计，但要有自己的创意。