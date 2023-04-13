FROM ubuntu

WORKDIR /app

COPY ./chatgpt-web/ /app

EXPOSE 3000

CMD ["nohup","/app/service/linux.bin","&"]