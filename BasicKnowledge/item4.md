# 字符串游戏

### 📝 背景介绍
在C语言中，字符串实际上是以空字符（`\0`）结尾的 `char` 类型数组。对于许多同学来说，这可能不是很简单。下面的题目可以帮助你更好地理解字符串的处理。

### 🧩 问题描述
观察下面这段程序，你可能已经敏锐地察觉到我想要做什么。但遗憾的是，编译器告诉我程序无法顺利运行，并出现了几个错误。你能帮我找出这些错误并进行修改吗？

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    char *A = "I LOVE YOU";
    char *B = NULL;
    int length = strlen(A);
    
    // 分配足够的空间给B，包括空字符
    B = (char*)malloc((length + 1) * sizeof(char));
    
    char* dest = B;
    char* src = A; // 从字符串A的开头开始
    
    // 使用正确的逻辑来复制字符串
    while (*src != '\0') {
        *dest++ = *src++; // 复制字符并移动指针
    }
    *dest = '\0'; // 确保复制的字符串以空字符结尾
    
    printf("%s", B);
    free(B); // 释放分配的内存
    return 0;
}