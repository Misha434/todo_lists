FROM node:14.17.4-alpine

ENV NODE_ENV=production

WORKDIR /todo_list
COPY . /todo_list/

COPY start.sh /start.sh
RUN chmod 744  /start.sh
CMD ["sh", "/start.sh"]