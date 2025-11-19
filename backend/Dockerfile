FROM node:18-alpine

WORKDIR /app

# Copiar package.json e package-lock.json (se existir)
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar código e configurações
COPY . .

# Expor porta
EXPOSE 3000

# Comando para desenvolvimento (com nodemon para auto-reload)
# Usando --legacy-watch para funcionar melhor com volumes do Docker no Windows
CMD ["npm", "run", "dev"]

