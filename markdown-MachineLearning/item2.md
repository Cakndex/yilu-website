
 # Part 1：环境搭建与深度学习基础

 ## 🎯 目标

 本部分旨在确认你已具备进行深度学习开发的基础环境，并考察你对核心概念的直觉理解。我们不考复杂的公式推导，但要求你准确理解每一个名词背后的物理或几何含义。

 ## 🛠️ 任务

 ### 任务 1.1：炼丹炉的搭建

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

 ### 任务 1.2：深度学习基础

 请用简练的语言回答以下 12 个问题。这些问题涵盖了从底层机制到模型架构的核心原理，请展示你的思考过程。


 1. 我们经常看到 `with torch.no_grad():` 和 `model.eval()` 这两行代码。请问：它们的作用分别是什么？如果在做Inference时，只写了 `model.eval()` 而没有写 `torch.no_grad()`：
    - 会影响计算结果吗？
    - 会影响显存占用吗？
    - 请简述理由。

 2. 在 PyTorch 的训练 Loop 中，通常顺序是：`optimizer.zero_grad()` -> `loss.backward()` -> `optimizer.step()`。请问：如果我们不小心漏掉了 `optimizer.zero_grad()`，直接进行下一轮 `backward()`，模型参数的梯度 `w.grad` 会发生什么变化？（是被覆盖？还是被累加？）这种机制在什么特定的训练场景下是有用的？

 3. 假设我们将神经网络的所有**权重参数Weights**都初始化为常数 1。请问：在反向传播时，同一层的所有神经元学到的Gradient会有什么关系？这对模型的学习能力有什么致命影响？

 4. SGD在遇到“峡谷”形状的损失曲面时容易震荡。为了解决这个问题，我们引入了动量Momentum。请描述：**动量是如何帮助优化器加速收敛并抑制震荡的？**

 5. 学习率Learning Rate是炼丹中最关键的超参数之一。如果学习率设置得过大，Loss 曲线通常会出现什么现象？如果学习率设置得过小，模型训练又会面临什么问题？

 6. 在训练模型时，我们不仅要看训练集 Loss，更要关注**验证集（Validation Set）Loss**。场景A：训练Loss持续下降且数值很低（模型在训练集上表现完美），但验证 Loss 却先降后升，两者差距越来越大。这是发生了什么现象？场景B：训练 Loss和验证Loss都居高不下，无论怎么训练都降不下去。这是发生了什么现象？对策：针对场景A过拟合，请列举几种除了“增加更多数据”以外的有效缓解手段。

 7. 在深度网络中，如果使用 Sigmoid 或 Tanh 作为激活函数，很容易出现**梯度消失**问题。请从这两个函数的导数图像/最大值角度，解释为什么梯度会消失？ReLU 激活函数是如何解决这个问题的？

 8. 虽然 ReLU 解决了梯度消失，但它有一个被称为 **Dying ReLU** 的问题。这是指神经元进入了什么状态？一旦进入这个状态，该神经元的梯度会变成多少？它还有可能“复活”被更新吗？

 9. 在 PyTorch 中，做多分类任务通常直接使用 `nn.CrossEntropyLoss`，它的输入是**未归一化**的 Logits，而不是经过 Softmax 后的概率。为什么 PyTorch 建议不要先手动写 Softmax 再传给 Loss，而是直接把 Logits 传进去？（提示：从 Log-Sum-Exp 的数值稳定性角度考虑）

 10. Dropout 在训练时以概率 $p$ 随机丢弃神经元。假设训练时 $p=0.5$（即丢弃 50%）。为了保证测试阶段和训练阶段输出的**期望值**保持一致，我们在测试阶段需要对权重或输出做什么操作？（或者反过来，PyTorch 在训练阶段做了什么？）

 11. **Batch Normalization**（BN）和**Layer Normalization**（LN）是深度学习中最常用的两种归一化手段。请用通俗的语言描述：它们在计算均值和方差的维度上有什么核心区别？为什么在 Transformer（NLP 任务）中通常优先使用 LN，而在 ResNet（CV 任务）中通常优先使用 BN？

 12. 在卷积神经网络（CNN）中，假设我们连续堆叠了 3 个 $3 \times 3$ 的卷积层（Stride=1, Padding=0）。请问：第 3 层输出特征图上的一个像素点，在最原始的输入图像上，能看到多大的区域（即感受野 Receptive Field 是多少）？
 
 #### 提交要求
 将自己对问题的回答和理解写成.md文档提交
