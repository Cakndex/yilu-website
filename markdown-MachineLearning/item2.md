# Part 0 出发包

 ---

 ## 总览

 ```text
 🚩Part 0  出发包
 🟩Part 1  黑盒拆解实验卡
 🟩Part 2  决策边界画家
 🟩Part 3  计算机视觉
 🟩Part 4  方向探险
 ```

 ---

 ## 🎯 目标

 本部分旨在确认你已具备进行深度学习开发的基础环境，并跑通你的第一个 PyTorch 程序。

 ## 🛠️ 任务

 ### 任务 0.1：炼丹炉的搭建

 这是所有后续任务的前提。请在本地（Windows / Mac / Linux）完成以下操作：

 - 安装 **Anaconda** 或 **Miniconda**。
 - 创建一个 **Python 3.9+** 的虚拟环境。
 - 根据你的硬件安装对应的 **PyTorch**：
   - NVIDIA 显卡：安装 **CUDA** 版本
   - Mac M 芯片：安装 **MPS** 版本
   - 无独显：安装 **CPU** 版本

 #### 提交要求

 请在 **PyCharm / VS Code** 中运行以下代码，并提交**全屏截图**（需包含系统时间）：

 ```python
 import torch
 import numpy as np

 print(f"PyTorch Version: {torch.__version__}")
 print(f"CUDA Available: {torch.cuda.is_available()}")
 # 如果是 Mac M 芯片，可以打印 torch.backends.mps.is_available()

 # 生成一个随机张量
 x = torch.rand(3, 4)
 print(f"Random Tensor:\n{x}")
 ```

 #### 📍 tips

 在构建环境时，或多或少都会出现一些情况，如果遇到了问题，多问学长以及 AI 来解决问题
 当然，在解决了这些问题之后，能将你遇到问题、最终解决问题的过程记录下来，是再好不过的事了🌟