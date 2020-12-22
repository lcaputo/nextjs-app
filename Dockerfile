FROM node:14.15.3-buster-slim
# ------------------------------------
ARG BUILD_DEVELOPMENT
# if --build-arg BUILD_DEVELOPMENT=1, set NODE_ENV to 'development' or set to null otherwise.
ENV NODE_ENV=${BUILD_DEVELOPMENT:+development}
# if NODE_ENV is null, set it to 'production' (or leave as is otherwise).
ENV NODE_ENV=${NODE_ENV:-production}
# ------------------------------------
WORKDIR /usr/src/

COPY package*.json ./

RUN npm install

COPY . .

RUN addgroup --gid 420 docker \
    && adduser --gid 420 --uid 420 --disabled-password --quiet docker \
    && chown -R docker:docker /usr/src/

USER docker

EXPOSE ${APP_PORT}

CMD [ "sh", "-c", "npm run ${NODE_ENV}" ]