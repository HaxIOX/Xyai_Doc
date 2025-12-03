# 常见问题

## Codex 常见问题

**1.响应慢或者一直加载**

可能原因：
当前使用的域名所在的网络线路，在你本地运营商环境中质量较差（高延迟或丢包）。

**解决方案：**

1. 打开测速页面，选择更适合本地网络环境的域名： 
   👉 [https://test.noopenai.cn/](https://test.noopenai.cn/)
2. 根据测速结果，优先选择延迟更低、稳定性更好的节点，例如（不限于）：

   - `node1.xychatai.com`
   - `node2.xychatai.com`
   - `node3.xychatai.com`
3. 在客户端或配置中，将接口域名切换为测速结果较优的节点。

------

**2.Connection failed（连接失败）**

**报错示例：**

```bash
Connection failed: error sending request for url
(https://new.xychatai.com/codex/v1/responses)
```

**可能原因：**

- 环境变量 / 依赖未正确安装
- 一键脚本执行过程中出现异常

**解决方案：**

1. 如不确定或首次安装失败，建议 **重新执行一遍一键脚本**；
2. 执行完成后，重启相关服务或工具，再尝试发起请求。

------

**3.插件中使用 Codex 时卡住 / reconnecting**

**常见现象：**

- 在插件中使用 Codex：
  - 新建会话后，**第一条消息要卡很久才能发出**；
  - 或者消息一直发不出去，界面持续显示 `reconnecting`。

**解决方案：**

>1. 先尝试 **重启插件所在的软件**（例如客户端 / 编辑器等）；
>2. 如多次出现同样问题，可：
>   - 检查网络是否正常；
>   - 按上文方法更换节点域名；
>   - 或重新登录 / 重启插件。

------

**4.报错 400**

**报错示例：**

1.codex号池无可用的账号

```bash
unexpected status 400 Bad Request: {"error":{"message":"codex号池无可用的账号
|No available codex accounts in pool
(ratelimited or failed)","type":"request_error"}}
```

**解决方案：**

> 建议 **稍作等待后再重试**，等待站长补号，通常 **30 分钟左右**即可恢复。

2.HTTP 503

```bash
unexpected status 400 Bad Request: {"error":{"message":"all 10 attempts failed: 
HTTP 503: {"error":{"code":"","message":"所有令牌分组 Codex专用 下
对于模型 gpt-5.1-codex-max 均无可用渠道，请更换分组尝试
(request id:20251130224927129140426(CZyvzND))","type":"rix_api_error"}},"type":"request_error"}}
```

> 当号池没有可使用的账号时，会自动切到备用的api渠道，该渠道暂时不支持`gpt-5.1-codex-max`模型,可先切回其他模型，等待补号后使用`max`模型。

------

**5.  Failed to install Codex**

```bash
 Failed to install Codex: 无法加载文件 C:\Program Files\nodejs\npm.ps1
```

这个错误提示表明 **PowerShell 的执行策略阻止了脚本的运行**，而 `npm.ps1` 是一个 PowerShell 脚本文件，因此被拦截了。

**解决方案**

> 1.管理员权限运行 PowerShell
>
> ```bash
> Set-ExecutionPolicy RemoteSigned
> ```
>
> 输入命令后会提示你确认是否更改策略，输入 Y 确认即可。
>
> 2.使用 CMD 或 PowerShell 的“绕过模式”启动
>
> ```
> powershell -ExecutionPolicy Bypass
> ```
>
> 3.验证是否修复成功
>
> 在修改策略后，再次运行：
>
> ```powershell
> npm -v
> ```
>
> 如果正常显示 npm 版本号，则说明问题已解决

------

**6.命令行一切正常，但是在vscode插件里遇到这个报错：`Missing environment variable`**

openai官方更新了codex插件和codex cli导致的

**解决方案**

>卸载重装下codex插件，如果还是不行删除配置文件`~/.codex/config.toml`

## claude code常见问题

1.500错误

```bash
500 {"error":{"code":null,"message":"没有可用token（traceid: cd311bf0a9777b18aa39780bab544328）","param":null,"type":"invalid_request_error"}}
```

> 号池额度无了，联系客服后等待半个小时左右重试。

## 使用相关

### Q: codex的重置时间

A: 周期内首次使用后，往后移动周期时间计算的

> 也就是今天10点首次使用，那就是明天10点进行重置，十点重置后，在10:30进行当天的首次使用，同理第三天的重置时间为10:30

### Q: cursor可以使用吗？

A: 可以的，安装好环境后在cursor中安装codex插件即可一键使用。

### Q: 如何使用

A: 站点注册后安装，根据一键脚本安装后使用

### Q: 是否稳定

A: 目前后台多个账号轮询，基本稳定。

> 站点还有很多不足的地方，希望大佬们多多包涵，有什么问题与完善建议都可以提出，我们会努力完善做到更好。



