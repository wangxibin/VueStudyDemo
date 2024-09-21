# 指定该镜像是基于nginx:latest镜像而构建的；
FROM nginx
# 命令的意思是将项目根目录下dist文件夹中的所有文件复制到镜像中/usr/share/nginx/html/目录下
COPY dist/ /usr/share/nginx/html/
# 将default.conf复制到etc/nginx/conf.d/default.conf，用本地的nginx.conf配置来替换Nginx镜像里的默认配置。
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 构建镜像
# 执行：docker build -t docker-demo-vue .
# 参数解释：
# -t 参数给镜像命名 docker-demo-vue
# . 是基于当前目录的 Dockerfile 来构建镜像

# 查看镜像
# docker image ls | grep docker-demo-vue

# 运行容器
# docker run -d -p 3000:80 --name docker-vue docker-demo-vue
# 参数解释：
# -d 设置容器在后台运行
# -p 表示端口映射，把本机的 3000 端口映射到 container 的 80 端口（这样外网就能通过本机的 3000 端口访问了。
# --name 设置容器名 docker-vue
# docker-demo-vue 是我们上面构建的镜像名字

# 查看容器id
# docker ps -a

# 查看对应的静态文件
# curl -v -i localhost:3000

