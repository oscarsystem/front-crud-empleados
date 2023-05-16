# Etapa de compilación
FROM node:latest AS build

WORKDIR /usr/local/app

COPY ./ ./usr/local/app

RUN npm install

RUN npm run build 


FROM nginx:latest
# Copiar los archivos compilados de la etapa de compilación al directorio de despliegue de Nginx
COPY --from=build usr/local/app/dist/front-crud-empleados /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

