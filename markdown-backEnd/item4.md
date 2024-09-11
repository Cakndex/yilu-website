# 后端-0011（语言基础）

## 本节任务

- **了解什么是线程，什么是进程**
- **了解进程和线程之间的联系**
- **容器**：自顶向下学习 `Collection` 类以及其子类，学会各个容器的基本操作和 `Iterator` 的用法，有能力的同学可以多关注其底层实现
- **泛型**：学习泛化对象、方法、接口，通配符的使用，重点了解 `<?>` `<? super T>` `<? extends T>` 三者在作为List的范式的区别与作用
- **多线程**：学习如何创建、休眠、唤醒等基本操作，以及如何为线程资源上锁

## 题目描述

### 1. 生产者与消费者模型

现在有生产者和消费者两种角色，生产者可以产生资料。消费者可以对生产者产生的资料进行消费。

- **要求**:
  - 对生产者和消费者进行抽象形成接口 (`interface`)（思考一下每种角色应有什么功能，不限于上述）;
  - 按照你自己的需求实现消费者和生产者 (`implements`)（如：芝士雪豹）;
  - 依据多线程知识，使用你实现的类进行多个消费者并发消费生产者的资料的活动（尝试多种加锁方式）;
  - 并谈谈如果不使用锁可能会出现哪些问题。
  - 注：你可能需要为生产资料提供一个类。

### 2. 攻击程序

实现功能：一名玩家分别受到 Creep-A, Creep-B 攻击三次，每次减少 20hp 值，玩家初始 hp 值为 100，当玩家 hp 值为 0 时，玩家死亡。

**输出示例**：

```shell
Creep-A attack...
Creep-A: 当前player的hp值= 80
Creep-A attack...
Creep-A: 当前player的hp值= 60
Creep-A attack...
Creep-A: 当前player的hp值= 40
Creep-A end.
Creep-B attack...
Creep-B: 当前player的hp值= 20
Creep-B attack...
Creep-B: 当前player的hp值= 0
Creep-B: player is dead.
Creep-B end.
```

- 用同步块和同步方法两种方式实现。

### 3. Java实现泛型链表

要完成该题，我们需要先对C语言中的链表有完整的学习，然后，请用Java实现一个泛型链表并提供相应API。

- `boolean addList(Node node)` 添加结点
- `void removeList0()` 删除尾结点
- `void removelistByValue(int value)` 根据节点值删除节点
- `int find(int value)` 找到值为 value 的结点，返回这个结点下标（下标从 0 开始计算）

**提示**：具体的设计可以参考 `LinkedList` 的源码。
