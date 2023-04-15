本docker来源gouguoyin大佬的chat-web项目 地址 [https://github.com/gouguoyin/chatgpt-web]()

chatgpt-web的docker版目前 arm架构有问题  amd64可以正常用

docker大体上没问题 做等gouguoyin大佬更新bug后 我后续在持续跟进

自己用之前记得修改.env配置

还有就是记得nginx配置文件修改成自己的域名

最后服务器部署的时候记得给logs  mysql文件夹权限

有其他问题后序在补充

2023-04-14 docker镜像更新到1.3版本 docker添加证书 修复邮件发送失败问题



# 教程

没有安装docker和docker compose的先去安装  教程在 [https://www.pubfun.top/archives/155.html](https://www.pubfun.top/archives/155.html)

首先要下载源码文件

```
curl -O https://github.com/jiajiangtao122/chatgpt-web-docker/releases/download/1.1/chatgpt-web.tar.gz
```

或者

```
wget https://github.com/jiajiangtao122/chatgpt-web-docker/releases/download/1.1/chatgpt-web.tar.gz
```

然后解压压缩包

```
tar -xzvf chatgpt-web.tar.gz
```

进入目录

```
cd chatgpt-web
```

编辑配置文件 只需要修改邮箱 数据库密码相关的设置就行

```
vim .env
```

编辑yml文件 修改mysql的root密码  同时也要修改.env的root密码

```
vim docker-compose.yml
```

首次使用强烈建议修改mysql root的密码 

给mysql和logs赋值权限

```
chmod -R 777 logs mysql/data
```

同时给mysql配置文件设置权限防止报错

```
chmod -R 633 mysql/my.cnf
```

编辑nginx配置文件 把域名换成自己的域名

```
vim nginx/conf.d/admin.conf
```

```
vim nginx/conf.d/chat.conf
```

启动docker compose 进入对应的目录

```
docker compose up -d
```

重启docker compose 进入对应的目录

```
docker compose restart
```

停止docker compose 进入对应的目录

```
docker compose down
```

最后用mysql导入工具导入 db.sql就行了  记得数据库名字要和.env里的保持一致 默认chatgpt

后台登录用户名 默认账号 `245629560@qq.com`, 密码 `123456`

# 补充

如果自己本地有mysql的可以把  docker-compose.yml 里的mysql部分去掉（红框里的去掉）  然后修改.env里的mysql配置就行
![IX@R@_~GIUL%( 0IBUW8_%S](https://user-images.githubusercontent.com/48207940/232184251-bf99880e-9fc5-4bd9-a3f6-016395650c34.png)

同理 如果本地有都有nginx和mysql可以把nginx 和 mysql部分都去掉用你本地的配置文件

最后有其他问题的记得反馈





