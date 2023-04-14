本docker来源gouguoyin大佬的chat-web项目 地址 [https://github.com/gouguoyin/chatgpt-web]()

chatgpt-web的docker版目前 arm架构有问题  mysql本地也有问题 访问远程mysql没问题

docker大体上没问题 做等gouguoyin大佬更新bug后 我后续在持续跟进

自己用之前记得修改.env配置

还有就是记得nginx配置文件修改成自己的域名

最后服务器部署的时候记得给logs  mysql文件夹权限

有其他问题后序在补充

2023-04-14 docker镜像更新到1.3版本 docker添加证书 修复邮件发送失败问题



# 教程

首先要下载源码文件

`curl https://github.com/jiajiangtao122/chatgpt-web-docker/releases/download/1.0/chatgpt-web.tar.gz`

然后解压压缩包

`tar -xzvf chatgpt-web.tar.gz`

进入目录

`cd chatgpt-web`

编辑配置文件 只需要修改邮箱相关的设置就行

`vim .env`

编辑yml文件 可改可不改 建议修改mysql的root密码  同时也要修改  .env的root密码

`vim docker-compose.yml`





