# Etapa de compilación
FROM node:latest AS build

RUN mkdir -p /app

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
#COPY ..
RUN npm run build --prod



#WORKDIR /usr/local/app
#COPY ./ ./usr/local/app
#RUN npm install
#RUN npm run build 
#RUN ng build

FROM nginx:latest
# Copiar los archivos compilados de la etapa de compilación al directorio de despliegue de Nginx
#COPY --from=build usr/local/app/dist/front-crud-empleados /usr/share/nginx/html
COPY --from=build app/dist/front-crud-empleados /usr/share/nginx/html
# Exponer el puerto 80
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
