FROM node:6

# suppress werbose logging
ENV NPM_CONFIG_LOGLEVEL warn

# install serve globally
RUN npm install -g serve
CMD serve -s build
EXPOSE 5000

COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm install
COPY . .

RUN npm run build --production
