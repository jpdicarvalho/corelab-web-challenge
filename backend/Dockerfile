# Usando uma imagem do Node.js
FROM node:18

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todo o código para o container
COPY . .

# Gerar o Prisma Client
RUN npx prisma generate

# Expor a porta da API
EXPOSE 3000

# Comando para rodar a API
CMD ["npm", "run", "dev"]