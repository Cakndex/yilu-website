# 命令行和重定向输入

### 📝 题目背景

在C语言中，我们经常需要从命令行接收输入，或者将程序的输出重定向到文件中。这可以通过标准输入输出函数实现。

### 🧩 问题描述

编写一个C程序，该程序从命令行接收一个字符串，然后将其内容输出到标准输出。接着，将标准输出重定向到一个文件中，并再次输出相同的字符串。

### 示例命令行操作

```shell
gcc -o program program.c    # 编译程序
./program                   # 执行程序
echo "Hello, World!" | ./program  # 使用管道将字符串传递给程序
./program > output.txt     # 将程序的输出重定向到文件
```

### 示例代码

 ```c
 #include <stdio.h>
#include <string.h>

int main() {
    char buffer[1024]; // 定义一个足够大的字符数组来存储输入
    printf("Please enter a string: ");
    
    // 读取一行输入，直到遇到换行符或EOF
    fgets(buffer, sizeof(buffer), stdin);
    
    // 移除可能读取到的换行符
    size_t len = strlen(buffer);
    if(len > 0 && buffer[len - 1] == '\n') {
        buffer[len - 1] = '\0';
    }
    
    // 输出读取到的字符串
    printf("Received: %s\n", buffer);
    
    // 再次输出，这次可能被重定向到文件
    printf("%s\n", buffer);
    
    return 0;
}
```
