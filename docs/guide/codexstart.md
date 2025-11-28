# 注册账号

在[站点](https://new.xychatai.com/)注册账号

# 兑换码兑换

点击左上角**兑换码兑换**，粘贴兑换码后，点击立即兑换

（如果兑换失败，请您稍等片刻再兑换一次）

然后在左侧点击**vibecode**

![image-20251111221713527](assets\image-20251111221713527.png)

首先进入的是**控制台**

后续您可以在这个页面查看额度与使用情况

![image-20251115173320105](assets/image-20251115173320105.png)

# 一键安装

点击使用教程，根据您使用的系统，选择运行脚本安装环境

## cc switch配置

补充auth与config

```bash
CC switch 调整的auth 缺了东西， 然后config.toml也要修改

preferred_auth_method = "apikey"
disable_response_storage = true
model_provider = "codex"

[model_providers.codex]
name = "codex"
base_url = "https://node1.xychatai.com/codex/v1"
wire_api = "responses"
env_key = "CODEX_API_KEY"
```

然后 auth 里面吧 CODEX_API_KEY 配上，基本就是脚本的内容了

> 来自于vincent佬
