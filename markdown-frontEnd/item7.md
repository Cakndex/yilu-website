# <strong><font color=Green> vue初体验？</font></strong>

相信各位小伙伴们经过前面的学习，已经逐渐掌握了html，css，JavaScript的基本用法，也做了不少小demo。但是在写代码的过程中，你们是否会有这种感觉：“修改数据好麻烦”。要先queryselector绑定元素获取value，再对value进行修改，最后把value赋值给元素。那么有没有什么办法，实现数据响应式一步到位呢？

那就要请出我们的**Vue框架** 啦，相信你经过一学期的学习，也或多或少有听过这个名字，让我们来看看Vue的一些特点：

1. **声明式渲染**：Vue通过模板语法扩展了标准的HTML，允许我们基于JavaScript状态声明式地描述HTML输出。这意味着你可以更直观地定义界面的外观。
2. **响应式**：Vue会自动跟踪JavaScript状态的变化，并在发生更改时高效地更新DOM。这使得你不必手动操作DOM，而是专注于数据和业务逻辑。
3. **组件化**：Vue鼓励将界面拆分成可复用的组件。每个组件都有自己的状态、模板和逻辑，使得代码更易于维护和扩展。
4. **灵活性**：Vue被设计为灵活且可渐进采用的框架。无论你是增强静态HTML、嵌入Web组件、构建单页应用、进行服务器端渲染，还是使用静态站点生成，Vue都能满足你的需求。
5. **文档丰富**：Vue拥有世界级的文档，对于初学者和有经验的开发者都非常友好。你可以从[Vue官方文档](https://vuejs.org/guide/introduction.html)开始学习。

<strong><font color=Red>！！！家人们，谁懂啊！！！</font></strong>

接下来我们来利用vue实现一个小demo——小红书页面
![alt text](小红书.png)
要求如下（紫色部分为选做）：

1. UI和排版尽量一致，视频可以找在线视频代替（可以每个分类一个视频铺满页面）
2. 分类不用这么多，但是视频需要分类（点击不同分类显示不同视频）
3. <font color=Purple>实现虚拟滚动效果（倘若该分类视频特别多，在页面渲染时全部加载会造成卡顿，所以我们采用懒加载/虚拟滚动的形式）</font>
4. <font color=Purple>独立设计一个播放视频组件</font>
![alt text](小红书视频.png)
🥵下面的链接或许对你有帮助：

- [iconfont-阿里巴巴矢量图标库](https://www.iconfont.cn/)
- [Vue.js官网文档](https://cn.vuejs.org/)
- [vue学习教程尚硅谷](https://www.bilibili.com/video/BV1Zy4y1K7SH/?share_source=copy_web&vd_source=1d686eb343e4a300dd94ebe248e58e65)
- [虚拟滚动原理](https://www.bilibili.com/video/BV148411D7Z7/?share_source=copy_web&vd_source=1d686eb343e4a300dd94ebe248e58e65)
