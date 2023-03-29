FROM node:18.9.0-slim
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN chown www-data:www-data -R /app
USER www-data
EXPOSE 8000
CMD ["node", "server.js"]