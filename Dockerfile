FROM node:8

ENV HOST localhost
ENV PORT 3000
EXPOSE 3000/tcp

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install GYP dependencies globally, will be used to code build other dependencies
RUN npm install -g --production node-gyp && \
    npm cache clean --force

# Install Gekko dependencies
COPY package.json .
RUN npm install --production && \
    npm install --production redis@0.10.0 talib@1.0.2 tulind@0.8.7 pg && \
#    npm install --production redis@0.10.0 atalib tulind pg && \
    npm cache clean --force

# Neuralnet requirements
RUN npm install --production convnetjs && \
    npm install --production mathjs && \
# N8_v2 requirements
    npm install --production zero-fill && \
    npm install --production numbro && \
    npm install --production stats-lite && \
    npm install --production cluster && \
    npm install --production os && \
    npm install --produciont lodash && \
    npm install --production gauss && \
    npm install --production fs-extra && \
    npm install --production fs && \
    npm cache clean --force

# Install Gekko Broker dependencies
WORKDIR exchange
COPY exchange/package.json .
RUN npm install --production && \
    npm cache clean --force
WORKDIR ../

# Bundle app source
COPY . /usr/src/app

# Gekkoga
RUN npm install --prefix gekkoga && \
    npm cache clean --force

EXPOSE 3000
RUN  chmod 755 /usr/src/app/docker-entrypoint.sh
ENTRYPOINT ["/usr/src/app/docker-entrypoint.sh"]

CMD ["--config", "config.js", "--ui"]
