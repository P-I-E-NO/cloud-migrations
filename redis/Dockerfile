FROM ubuntu:latest

RUN apt update
RUN apt install -y redis-tools

WORKDIR /code
COPY ./up.sh /code/up.sh
RUN chmod +x ./up.sh

CMD ["./up.sh"]