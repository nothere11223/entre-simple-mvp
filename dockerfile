# Use Node.js >= 20.9
FROM node:20.14-alpine

WORKDIR /app

# Optional: proxy
# ENV HTTP_PROXY=http://your-proxy:port
# ENV HTTPS_PROXY=http://your-proxy:port

COPY package*.json ./

# Use mirror to avoid timeouts
RUN npm config set registry https://registry.npmmirror.com/
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]