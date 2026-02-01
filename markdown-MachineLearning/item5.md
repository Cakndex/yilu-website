 # Part 4 :自然语言处理（NLP）—— Transformer

 ## 1. 背景介绍

 Transformer 并不是一个巨大的黑盒，它其实是由一个个相同的Block堆叠而成的。每一个 Block 都包含两个核心子层：

 - **Multi-Head Self-Attention多头注意力机制**：负责捕捉词与词之间的关系。
 - **Feed-Forward Network前馈神经网络**：负责处理特征。

 更重要的是，为了防止网络退化，每个子层周围都包裹着 **Residual Connection残差连接** 和 **Layer Normalization层归一化**。公式如下：

 $$\text{Output} = \text{LayerNorm}(x + \text{Sublayer}(x))$$

 **你的任务**：用PyTorch搭建一个标准的 Transformer Block。

 ## 2. 任务拆解

 ### Step 1：核心零件 —— Self-Attention

 #### 任务

 我们先不考虑多头（Multi-Head）的复杂维度变换，先实现一个单头的 Self-Attention 类。

 #### 代码填空

 ```python
 import torch
 import torch.nn as nn
 import torch.nn.functional as F

 class SingleHeadSelfAttention(nn.Module):
     def __init__(self, d_model):
         super().__init__()
         self.d_model = d_model
         # 定义三个线性层: W_q, W_k, W_v
         self.w_q = nn.Linear(d_model, d_model)
         self.w_k = nn.Linear(d_model, d_model)
         self.w_v = nn.Linear(d_model, d_model)

     def forward(self, x, mask=None):
         # x shape: [batch_size, seq_len, d_model]

         # 1. 生成 Q, K, V
         Q = self.w_q(x)
         K = self.w_k(x)
         V = self.w_v(x)

         # 2. 计算 Attention Score = Q @ K^T / sqrt(d_model)
         # [请填空]

         # 3. 加上 Mask (可选，如果mask不为None)
         # [请填空]

         # 4. Softmax + 与 V 相乘
         # [请填空]

         return output, attention_weights
 ```

 ### Step 2：组装架构 —— Transformer Block

 #### 任务

 你需要把刚才写的 Attention 和一个简单的全连接层（FFN）组合起来，并加上残差连接和归一化。

 #### 结构图参考

 `Input -> Attention -> Add -> LayerNorm -> FeedForward -> Add -> LayerNorm -> Output`

 #### 代码填空

 ```python
 class TransformerBlock(nn.Module):
     def __init__(self, d_model):
         super().__init__()
         self.attention = SingleHeadSelfAttention(d_model)
         self.norm1 = nn.LayerNorm(d_model)
         self.norm2 = nn.LayerNorm(d_model)

         # 前馈网络通常是: Linear -> ReLU -> Linear
         self.feed_forward = nn.Sequential(
             nn.Linear(d_model, 4 * d_model),
             nn.ReLU(),
             nn.Linear(4 * d_model, d_model)
         )

     def forward(self, x, mask=None):
         # Part 1: Attention + Add + Norm
         # 注意：这里是面试常考点，究竟是先Norm还是后Norm？(这里采用经典的 Post-LN)

         attn_out, _ = self.attention(x, mask)
         x = self.norm1(x + attn_out) # [关键代码] 残差连接: x + sublayer(x)

         # Part 2: FFN + Add + Norm
         # 请补全这部分代码，实现 FeedForward 的残差连接结构
         # [请填空]

         return x
 ```

 ### Step 3：跑通

 #### 任务

 - 随机生成一个输入张量：`x = torch.randn(2, 10, 64)`（Batch=2, Length=10, Dim=64）。
 - 实例化你的 `TransformerBlock`。
 - 将 `x` 输入模型，检查输出的 Shape 是否依然是 `(2, 10, 64)`。

 #### 进阶验证

 打印模型输出的均值和方差，观察 LayerNorm 是否生效（方差应该接近 1）。

 ## 3. 回答问题

 1. **Mask之为什么是“负无穷”？**

    在实现 Mask 机制时（比如为了不让模型看见未来的词，或者屏蔽掉 Padding 的空位置），我们通常的操作是：
    `scores = scores.masked_fill(mask == 0, -1e9)`
    即将被 Mask 的位置填为一个极小的负数（负无穷）。问题：为什么我们不直接把这些位置乘以 0？
    提示：请回想一下 Softmax 的公式 $S_i = \frac{e^{x_i}}{\sum e^{x_j}}$。如果输入是 $0$，那么 $e^0$ 等于多少？这会导致这个位置的注意力权重变成 $0$ 吗？

 2. **Q、K、V 的意义**
    在 Self-Attention 中，输入 $X$ 明明都是同一个词向量序列，为什么我们要大费周章地用三个不同的线性变换矩阵（$W_Q, W_K, W_V$）把它映射成 $Q$（Query）、$K$（Key）、$V$（Value）？
    假设：如果我们不进行映射，直接让 $Q=X, K=X, V=X$，然后去算 $Attention(X, X, X) = \text{softmax}(XX^T)X$，这在逻辑上会有什么局限性？
 3. **点积的几何视角**
    Attention 的核心公式里有一个 $Q \cdot K^T$（点积）。问题：两个向量的点积（Dot Product）在几何上代表了什么关系？
    推演：当一个词的 Query 向量和另一个词的 Key 向量点积很大时，意味着这两个词在语义空间中处于什么状态？

 4. **缩放因子：为什么要除以 $\sqrt{d_k}$？**

    公式里有一个不起眼的除法：$\frac{QK^T}{\sqrt{d_k}}$。问题：如果不除以这个数，当 $d_k$（向量维度）非常大时，点积的结果数值会变得很大。这时候再过 Softmax 函数，会导致**梯度**发生什么现象？


