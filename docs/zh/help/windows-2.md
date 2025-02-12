# 遇到驱动报错(代码52)解决方法

> 问题示例图

![](https://bu.dusays.com/2024/11/09/672ecaf3ad85e.webp)

## 打开该文件夹

目录在<code>C:\Windows\System32\drivers</code>

![](https://bu.dusays.com/2024/11/09/672ecaf3cf6c6.webp)

## 替换文件

找到<code>kikagousbaudio.sys</code>,重命名为<code>kikagousbaudio_1.sys </code>

![](https://bu.dusays.com/2024/11/09/672ecaf3c785a.webp)

当前文件夹再找到<code>USBAudio.sys</code>，复制 粘贴 该文件，重命名为<code>kikagousbaudio.sys</code>

::: warning 注意

操作都是在<code>C:\Windows\System32\drivers</code>目录下操作

:::
