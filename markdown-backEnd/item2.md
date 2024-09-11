# 后端-0001（语言基础）

## 本节任务

- **什么是面向对象？**
- **静态方法和构造方法有什么区别？**
- **在Java中修饰符有哪些？什么情况下使用？使用对象是什么？**
- **掌握以下三种类型的异常：**
  - **检查性异常：** 最具代表的检查性异常是用户错误或问题引起的异常，这是程序员无法预见的。例如要打开一个不存在文件时，一个异常就发生了，这些异常在编译时不能被简单地忽略。
  - **运行时异常：** 运行时异常是可能被程序员避免的异常。与检查性异常相反，运行时异常可以在编译时被忽略。
  - **错误：** 错误不是异常，而是脱离程序员控制的问题。错误在代码中通常被忽略。例如，当栈溢出时，一个错误就发生了，它们在编译也检查不到的。

## 异常的捕获和自定义异常

### 题目描述

1. **设计一个类Triangle代表三角形：**
   - 属性包括三个边长。
   - 实现求面积的方法 `area()`。`area` 方法要求在计算面积前需要判断该三角形是否成立（即每条边长大于0，且满足任意两条边之和大于第三边）。
   - 如果不成立，则抛出自定义的 `NotTriangle` 异常类的实例。
   - 如果成立则返回该三角形的面积。

   要求：
   - （1）编程实现 `Triangle` 类和 `NotTriangle` 类。
   - （2）在 `Triangle` 类的 `main` 方法中，分别用三边长3.0, 4.0, 5.0 和1.0, 1.0, 2.0的两组值构造两个实例，计算各自面积。
   - （3）针对上述数据，给出你的程序运行的输出。

   补充知识：海伦公式求面积，计算平方根的方法为 `Math.sqrt(double)`。

   尝试使用 try-catch 来捕获异常。

2. **设计一个 Java 自定义异常类：**
   - 用于处理银行账户余额不足的情况。
   - 当用户尝试提取超过其账户余额的金额时，抛出该异常，并在异常中提供错误信息。

   要求：
   - （1）自定义异常类名为 `InsufficientBalanceException`。
   - （2）该异常类应继承自 `Exception` 类。
   - （3）异常类中需要包含一个带有错误信息参数的构造函数。
   - （4）在抛出异常时，错误信息应包含账户号码和尝试提取的金额。

## 提交方式

- 首先将你的代码上传到 GitHub 或者 Gitee 等托管平台，给出你的仓库链接。
- 使用 Markdown 格式记录你做题的过程，包括：
  - **必要操作截图：** 请将截图保存并上传到可访问的图床服务，然后在 Markdown 文件中引用图片链接。
  - **遇到的问题与解决方法：**
  - **部分必要代码：**
  - **项目代码仓库链接：** 请提供可以直接访问的链接。