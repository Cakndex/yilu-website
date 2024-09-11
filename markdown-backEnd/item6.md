# 后端-0101（Web基础）

## 本节任务

### 一、前后端交互

- 了解前后端不分离时的开发流程
- 前后端分离后如何交互
- Http 的请求和响应
- JSON 在 JavaWeb 中的使用
- 了解 XML
- 了解并能使用 Tomcat
- 学习使用 Servlet

### 二、JDBC

JDBC 是一个独立于特定数据库管理系统、通用的 SQL 数据库存取和操作的公共接口（一组API），定义了用来访问数据库的标准 Java 类库 (`java.sql`, `javax.sql`)。使用这些类库可以以一种标准的方法、方便地访问数据库资源。

连接数据库示例：

```java
public void Connection() throws Exception { 
    // 1. 加载配置文件
    InputStream is = ConnectionTest.class.getClassLoader().getResourceAsStream("jdbc.properties");
    Properties pros = new Properties(); 
    pros.load(is);

    // 2. 读取配置信息
    String user = pros.getProperty("user");
    String password = pros.getProperty("password"); 
    String url = pros.getProperty("url"); 
    String driverClass = pros.getProperty("driverClass");

    // 3. 加载驱动
    Class.forName(driverClass); 

    // 4. 获取连接
    Connection conn = DriverManager.getConnection(url, user, password); 
    System.out.println(conn); 
}
```

配置文件声明在工程的 src目录下：【jdbc.properties】

```Java
user=root
password=yilu401
url=jdbc:mysql://localhost:3306/test
driverClass=com.mysql.jdbc.Driver 
```

请自行了解使用PreparedStatement实现CRUD操作

### 三、MVC模型

搞清楚controller--service--dao三层在项目中具体表意，体会解耦思想

### 四、Maven

在没有依赖管理框架的web项目中，第三方的依赖一般是以jar包的形式存在web/lib下，每次都需要去网上下载jar包然后手动导入，maven功能之一就是帮助解决依赖导入问题

- 你应该了解什么是Maven,Maven的用处等知识

- 要求掌握使用Maven引入jar包依赖 （下面题目二会用到Maven）

### 题目描述

使用原生的 Javaweb（Servlet） 完成前后端交互，模拟⼀次简单的网页登录，使用mysql 数据库存储信息。

- 如果你愿意，也可以使用Spring系列框架，不过框架都是基于注解+反射+设计模式和原生的 Javaweb写成的，推荐从底层掌握

- 如果实在不会JDBC等知识，使用IO流把数据存储到txt文件读写也行
（⼀）基础

1. 创建mysql数据库 yiludb ,建立表 User，User 表有三个字段 uid 和 username 和 password ，其中 uid 为主键自增

**提示：**需要有Javabean的实体类映射，即User类

2. 将项目按照MVC架构进行管理，体会服务分层的思想
3. 前端访问接口 `<http://localhost:8080/login>` 时登录

- 优先选择使用表单提交信息，实在不行选择用在url后拼接地址的形式完成
  
- 如`<http://localhost:8080/login?username=yilu&password=401>`

4. 只需要验证数据库存在对应 username 和 password 即算登录成功
  
- 不要求考虑注册和维护登录态（如果愿意可以做）
  
- 如果是第⼀次登录就看作注册，返回`{"code":200,"meg":“注册成功”}`
  
- 登录成功，返回`{"code":200,"meg":“登录成功”}`
  
- 登录失败，返回`{"code":404,"meg":“注册成功”}`

> 这里的` {"code":状态码,"meg":“信息”} `其实应该是JSON形式，前后端交互绝大多数都采用 JSON形式，但在题目（⼀）中暂时不做要求
直接使用如` (HttpServletResponse) resp.write() `打印返回信息的列表即可

附：前端简单登录表单

```html
<html>
<title>Login</title>
</head>
<body>
<form action="http:/ /localhost:8080/login" method="post" name="login">
    <input type="text" name="name" placeholder="用户名">
    <input type="password" name="password" placeholder="登录密码">
    <input type="submit" name="submit" value="登录">
</form>
</body>
</html>
```

（二）进阶

1. 使用 maven 来管理你的依赖jar包

- 将你的项目之前依赖的jar包如`servlet-api.jar`、`mysql-connector-java8.0.27.jar`、`druid-1.2.9.jar`等使用maven引入

2. 以JSON与前端交互

- 使用 Maven 引入处理JSON的依赖 （`fastjson,Gson`或者`Jackson`）

- 学习如何JavaBean与Json转换 Java list集合、map和 json转换

- 使用引入的JSON依赖包转换你的登录返回信息，将题目（⼀）中的返回值使用JSON形式返回 如`{"code":200,"meg":“登录成功”}`
