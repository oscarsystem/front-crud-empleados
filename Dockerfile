# Etapa de compilación
#FROM node:latest AS build

#RUN mkdir -p /app

#WORKDIR /app
#COPY package.json /app
#RUN npm install
#COPY . /app
#COPY ..
#RUN npm run build --prod


# Etapa de compilación
FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Etapa de producción
FROM nginx:latest as production-stage
COPY --from=build-stage /app/dist/front-crud-empleados /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 98
CMD ["nginx", "-g", "daemon off;"]



#FROM nginx:latest
#COPY --from=build app/dist/front-crud-empleados /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/nginx.conf
# Exponer el puerto 80
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
