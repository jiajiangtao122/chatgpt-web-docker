本docker来源gouguoyin大佬的chat-web项目 地址 [https://github.com/gouguoyin/chatgpt-web](https://github.com/gouguoyin/chatgpt-web)

chatgpt-web的docker版目前arm64和amd64 都可以正常使用 

docker大体上没问题 做等gouguoyin大佬更新bug后 我后续在持续跟进

自己用之前记得修改.env配置

还有就是记得nginx配置文件修改成自己的域名

最后服务器部署的时候记得给logs  mysql文件夹权限

有其他问题后序在补充

2023-04-25 docker镜像更新到1.6版本 1.6版暂时只支持amd64  arm等后续更新

# 打个小广告 

我的小店里有 普通chatgpt号 120刀api  plus 有需要可以捧场 地址 [https://fk.xt666.cc](https://fk.xt666.cc)

# 首次使用教程

没有安装docker和docker compose的先去安装  教程在 [https://www.pubfun.top/archives/155.html](https://www.pubfun.top/archives/155.html)

首先要下载源码文件

```
curl -O https://github.com/jiajiangtao122/chatgpt-web-docker/releases/download/1.5/chatgpt-web.tar.gz
```

或者

```
wget https://github.com/jiajiangtao122/chatgpt-web-docker/releases/download/1.5/chatgpt-web.tar.gz
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

最后用mysql导入工具导入 db.sql就行了 或者docker导入也行  记得数据库名字要和.env里的保持一致 默认chatgpt 然后停止docker  在重新启动

停止
```
docker compose down
```
启动
```
docker compose up -d
```
# mysql db.sql导入教程

首先用把sql导入到mysql容器中

```
docker cp db.sql mysql:/db.sql
```

然后进入到mysql容器中

```
docker exec -it mysql /bin/bash
```

在容器中登录mysql    -p后面的密码要改成自己设置的mysql密码

```
mysql -uroot -p123456
```
<img width="296" alt="image" src="https://user-images.githubusercontent.com/48207940/232205213-e8527dc6-3e9c-40f0-97a6-d8a2530d9d3f.png">

然后会进入到mysql界面 先创建数据库名字 chatgpt

```
CREATE DATABASE IF NOT EXISTS chatgpt
DEFAULT CHARACTER SET utf8mb4
DEFAULT COLLATE utf8mb4_unicode_ci;
```
<img width="345" alt="image" src="https://user-images.githubusercontent.com/48207940/232205514-b9b39a11-d20c-4661-8b01-92d756507468.png">

然后开始导入db.sql

```
use chatgpt
source db.sql;
```
<img width="162" alt="image" src="https://user-images.githubusercontent.com/48207940/232205806-0b5aa126-c16c-45a5-9e7f-dca073f97096.png">
提示很多 Query OK 说明导入成功

输入两遍exit 退出mysql  退出容器

```
exit
```
<img width="128" alt="image" src="https://user-images.githubusercontent.com/48207940/232205916-6ef08b59-18de-4129-b295-e6140325fa54.png">


导入成功后重启docker

重启docker compose 进入对应的目录

停止
```
docker compose down
```
启动
```
docker compose up -d
```

# 后续更新后的使用教程

后续更新docker镜像后记得  `docker compose pull ` 然后移除以前的旧版 `docker compose down` 最后`docker compose up -d`

如果有提示要更新前后台代码  需要把 `chatgpt-web` 文件夹替换到服务器

如果有提示更新`db.sql` 需要把以前数据库chatgpt清空重新导入  导入教程上面有

如果有提示更新`.env` 需要去服务器修改.env

# 默认登录密码

后台登录用户名 默认账号 `245629560@qq.com`, 密码 `123456`

# 补充

如果自己本地有mysql的可以把  docker-compose.yml 里的mysql部分去掉（红框里的去掉）  然后修改.env里的mysql配置就行

![IX@R@_~GIUL%( 0IBUW8_%S](https://user-images.githubusercontent.com/48207940/232184251-bf99880e-9fc5-4bd9-a3f6-016395650c34.png)

同理 如果本地有都有nginx和mysql可以把nginx 和 mysql部分都去掉用你本地的配置文件

最后有其他问题的记得反馈



