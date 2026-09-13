# Web-01 Maven、Spring Boot 与 HTTP

- **分类：** Web 题
- **难度：** 入门

## 本节知识点

- Maven 项目结构和依赖管理
- Spring Boot 入门程序
- HTTP 请求和响应
- Controller 与 Service 分层
- IOC 和依赖注入
- JSON 请求与响应

## 题目要求

使用 Maven 创建一个 Spring Boot Web 项目，实现两个接口：

### 1. 健康检查

```http
GET /api/health
```

返回 HTTP 200：

```json
{
  "status": "ok"
}
```

### 2. 消息回显

```http
POST /api/echo
Content-Type: application/json
```

请求体：

```json
{
  "message": "hello"
}
```

响应体：

```json
{
  "message": "hello",
  "length": 5
}
```

长度约定按 `String.length()` 计算。

## 参考项目结构

对 Maven 项目结构还不熟悉的话，可以先用下面的骨架起步（包名可自定）：

```text
web-01/
├── pom.xml
└── src
    └── main
        └── java
            └── com.example.web01
                ├── Web01Application.java
                ├── controller
                │   ├── HealthController.java
                │   └── EchoController.java
                ├── service
                │   └── EchoService.java
                └── pojo
                    ├── EchoRequest.java
                    └── EchoResponse.java
```

`pom.xml` 的最小配置：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>web-01</artifactId>
    <version>1.0.0</version>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.3.0</version>
    </parent>
    <properties>
        <java.version>17</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
</project>
```

版本以课程教学内容为准；如果使用 Spring Boot 3.x，需要 JDK 17 及以上。

## 实现要求

- 项目需要包含 Controller 和 Service 两层。
- `EchoRequest` 和 `EchoResponse` 分别表示请求与响应数据。
- Controller 只负责接收参数和返回结果，长度计算放在 Service 中。
- 使用 Postman、Apifox 或 cURL 分别测试两个接口。
- 记录本题学习笔记，笔记内容不作其他限制，但开头需要回答本题的全部“必答问题”。

## 必答问题

1. Maven 主要解决了什么问题？
2. HTTP 请求和响应分别由哪些主要部分组成？
3. IOC 和依赖注入的作用是什么？
4. Controller、Service 和持久层（Mapper/DAO）在完整项目中分别负责什么？

## 完成清单

- [ ] Maven 项目可以正常启动
- [ ] `GET /api/health` 返回正确结果
- [ ] `POST /api/echo` 可以解析 JSON 并返回消息长度
- [ ] Controller 与 Service 职责清晰
- [ ] 学习笔记已先回答本题全部必答问题
