# 后端-0111（Web进阶）

## 本节任务

- 使用SpringBoot实现一个简单的登录验证程序

## 题目描述

> "这是现代的开发方式，非常方便，快速上手。关于SpringBoot的快速搭建和开始。"
> [Spring Boot官方入门指南](https://spring.io/guides/gs/spring-boot/)

1. 在你的MySQL数据库中建立一张 `user` 表，存储 `username` 和 `password`。
2. 使用 MyBatis 或者 `JdbcTemplate` 连接数据库，满足基础的 CRUD 操作。如果有能力可以使用 MyBatis Plus。
3. 实现一个 `Controller`。使用 REST 风格的注解来实现对请求的映射。
4. 将要返回给前端的数据进行包装，格式包含是否操作成功的 `flag`，以及返回的数据 `data`。
5. 会操作 Maven 的聚合，继承，了解分模块开发。

## 附加说明

- 确保你已经熟悉了Spring Boot的基础，包括其自动配置、起步依赖和微服务的概念。
- 使用Spring Initializr来初始化你的Spring Boot项目，这可以大大加快开发速度。
- 学习如何使用Spring Security来添加安全层，这是实现登录验证的关键。
- 理解RESTful API的设计原则，确保你的Controller能够返回正确格式的响应。
- 掌握MyBatis或JPA等ORM工具的使用，以便于数据库操作。
- 学会如何使用Maven进行多模块项目的构建和管理。
