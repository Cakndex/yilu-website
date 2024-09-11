# 🌐 简单的HTML页面示例

## 📝 内容说明

相信经过了一些学习你已经对HTML有一个初步的了解啦，那么，尝试一下下面这个简简单单的小题吧

请使用HTML完成一个简简单单的页面，要求至少包含：（内容不限）

- 一级标题
- 二级副标题
- 一段文字
- 一处代码块
- 一张图片
- 一张表格
- 一个超链接
- 一些单选框，复选框，按钮，文本域等等
- 尝试练练 预留格式，行内组合，水平线等等，总之把你学过的html知识都动手练练吧

### 📖 一段文字

HTML标签语义化是指使用具有明确意义的HTML标签来组织内容，这样做不仅有助于提高网页的可读性，还能让搜索引擎更好地理解网页内容。语义化的标签例如`<article>`, `<section>`, `<header>`, `<footer>`等，它们传达了页面结构和内容的意图。

例如，使用`<article>`标签可以告诉浏览器，包裹在其中的是独立的内容区块，这有助于搜索引擎优化（SEO）和无障碍访问。
> 以下是一段html代码的展示,可以作为参考,但最终呈现作品需有一定的主题性,如一段新闻,一段介绍,一个文档等

```html
<article>
  <h1>一级标题</h1>
  <h2>二级副标题</h2>
  <p>这是一段介绍HTML标签语义化的文字。使用合适的标签可以提高网页的可访问性和搜索引擎优化。</p>
  <code>&lt;p&gt;这是一个段落&lt;/p&gt;</code>
  <img src="image-url.jpg" alt="描述性文字">
  <table>
    <tr>
      <th>标题1</th>
      <th>标题2</th>
    </tr>
    <tr>
      <td>数据1</td>
      <td>数据2</td>
    </tr>
  </table>
  <a href="https://example.com">这是一个超链接</a>
  <form action="/submit-form" method="post">
    <input type="radio" id="option1" name="option" value="option1">
    <label for="option1">单选框1</label><br>
    <input type="checkbox" id="check1" name="check" value="check1">
    <label for="check1">复选框1</label><br>
    <button type="submit">提交按钮</button>
    <input type="text" placeholder="输入文本">
  </form>
  <hr>
</article>
```

> 提交方式   0010.html的代码文件
