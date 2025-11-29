# 常见问题

## Codex 常见问题

1.响应慢/一直加载

**现象：**

- 对话“转圈圈”很久才有回复
- 有时一直等待，没有结果

**可能原因：** 
当前使用的域名所在的网络线路，在你本地运营商环境中质量较差（高延迟或丢包）。

**解决方案：**

1. 打开测速页面，选择更适合本地网络环境的域名： 
   👉 [https://test.noopenai.cn/](https://test.noopenai.cn/)
2. 根据测速结果，优先选择延迟更低、稳定性更好的节点，例如（不限于）：

   - `node1.xychatai.com`
   - `node2.xychatai.com`
   - `node3.xychatai.com`

3. 在客户端或配置中，将接口域名切换为测速结果较优的节点。

2.Connection failed（连接失败）

**报错示例：**

```bash
Connection failed: error sending request for url (https://new.xychatai.com/codex/v1/responses)
```

**可能原因：**

- 环境变量 / 依赖未正确安装
- 一键脚本执行过程中出现异常

**解决方案：**

1. 如不确定或首次安装失败，建议 **重新执行一遍一键脚本**；
2. 执行完成后，重启相关服务或工具，再尝试发起请求。

3.插件中使用 Codex 时卡住 / reconnecting

**常见现象：**

- 在插件中使用 Codex：
  - 新建会话后，**第一条消息要卡很久才能发出**；
  - 或者消息一直发不出去，界面持续显示 `reconnecting`。

**解决方案：**

1. 先尝试 **重启插件所在的软件**（例如客户端 / 编辑器等）；
2. 如多次出现同样问题，可：
   - 检查网络是否正常；
   - 按上文方法更换节点域名；
   - 或重新登录 / 重启插件。

4.报错 400：all codex accounts are unavailable

**报错示例：**

```bash
■ unexpected status 400 Bad Request: {"error":{"message":"codex号池无可用的账号|No available codex accounts in pool(rate
limited or failed)","type":"request_error"}}
```

**含义：**

- 当前所有 Codex 账户均不可用，可能是号池账号不足。

**解决方案：**

1. 建议 **稍作等待后再重试**，等待站长补号，通常 **30 分钟左右**即可恢复。

## claude code常见问题

1.500错误

```bash
500 {"error":{"code":null,"message":"没有可用token（traceid: cd311bf0a9777b18aa39780bab544328）","param":null,"type":"invalid_request_error"}}
```

号池额度不够，联系客服后等待半个小时左右重试。

## 使用相关

### Q: cursor可以使用吗？

A: 可以的，安装好环境后在cursor中安装codex插件即可一键使用。

### Q: 如何使用

A: 站点注册后安装，根据一键脚本安装后使用

### Q: 是否稳定

A: 目前后台多个账号轮询，基本稳定。

> 站点还有很多不足的地方，希望大佬们多多包涵，有什么问题与完善建议都可以提出，我们会努力完善做到更好。

## cc switch使用教程

待补充....
