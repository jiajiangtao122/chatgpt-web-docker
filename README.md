本docker来源gouguoyin大佬的chat-web项目 地址 [https://github.com/gouguoyin/chatgpt-web]()

chatgpt-web的docker版目前 arm架构有问题  mysql本地也有问题 访问远程mysql没问题

docker大体上没问题 做等gouguoyin大佬更新bug后 我后续在持续跟进

自己用之前记得修改.env配置

还有就是记得nginx配置文件修改成自己的域名

最后服务器部署的时候记得给logs  mysql文件夹权限

有其他问题后序在补充

2023-04-14 docker镜像更新到1.3版本 docker添加证书 修复邮件发送失败问题



# 教程

没有安装docker和docker compose的先去安装  教程在 [https://www.pubfun.top/archives/155.html](https://www.pubfun.top/archives/155.html)

首先要下载源码文件

`curl https://github.com/jiajiangtao122/chatgpt-web-docker/releases/download/1.0/chatgpt-web.tar.gz`

然后解压压缩包

`tar -xzvf chatgpt-web.tar.gz`

进入目录

`cd chatgpt-web`

编辑配置文件 只需要修改邮箱相关的设置就行

`vim .env`

编辑yml文件 可改可不改 建议修改mysql的root密码  同时也要修改.env的root密码

`vim docker-compose.yml`

给mysql和logs赋值权限

`chmod -R 777 logs mysql/data`

同时给mysql配置文件设置只读权限防止报错

`chmod -R 644 mysql/my.conf`

编辑nginx配置文件 把域名换成自己的域名

`vim nginx/conf.d/admin.conf`

`vim nginx/conf.d/chat.conf`

启动docker

`docker compose up -d`

最后用mysql导入工具导入 db.dql就行了  记得数据库名字要和.env里的保持一致 默认chatgpt

最后有其他问题的记得反馈





