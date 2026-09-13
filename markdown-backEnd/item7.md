# Web-02 MySQL、JDBC 与 MyBatis

- **分类：** Web 题
- **难度：** 进阶

## 本节知识点

- MySQL 数据模型、表、主键和唯一约束
- SQL 新增、删除、修改和查询
- JDBC 连接、`PreparedStatement` 和 `ResultSet`
- 数据库连接池
- MyBatis 映射和 CRUD
- 配置文件与敏感信息管理

## 数据库要求

创建数据库和 `student` 表：

```sql
CREATE TABLE student (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_no VARCHAR(32) NOT NULL UNIQUE,
    name VARCHAR(64) NOT NULL,
    score DECIMAL(5, 2) NOT NULL
);
```

## 题目要求

题目分为两个阶段，需要按顺序完成。

### 阶段一：原生 JDBC

不使用框架，完成一次 JDBC 查询：

- 建立数据库连接。
- 使用 `PreparedStatement` 根据学号查询学生。
- 使用 `ResultSet` 读取字段。
- 将查询结果输出到控制台。
- 正确关闭连接、语句和结果集。

### 阶段二：MyBatis CRUD

将同一张 `student` 表接入 MyBatis，实现：

- 新增学生。
- 根据 id 删除学生。
- 根据 id 修改姓名和成绩。
- 根据 id 查询学生。
- 查询全部学生。

## 实现要求

- 学号必须保持唯一，重复数据不能写入数据库。
- SQL 参数必须使用预编译参数，不允许拼接用户输入。
- 数据库用户名、密码和地址不能写死在提交的代码或文档中。
- 可以为连接池选择课程中使用的一种实现，并说明它的作用。
- 记录本题学习笔记，笔记内容不作其他限制，但开头需要回答本题的全部“必答问题”。

## 必答问题

1. 一次 JDBC 查询包含哪些主要步骤？
2. 为什么应该优先使用 `PreparedStatement`？
3. JDBC 和 MyBatis 分别负责什么？
4. 数据库连接池解决了什么问题？

## 完成清单

- [ ] `student` 表创建成功
- [ ] 原生 JDBC 查询可以正常运行
- [ ] MyBatis 五种基本操作都已实现
- [ ] 学号唯一约束能够生效
- [ ] 代码中没有真实数据库密码
- [ ] 学习笔记已先回答本题全部必答问题
