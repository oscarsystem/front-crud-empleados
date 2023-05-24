# Etapa de compilación
#FROM node:latest AS build

#RUN mkdir -p /app
#WORKDIR /app
#COPY package.json /app
#RUN npm install
#COPY . /app
#RUN npm run build --prod

#FROM nginx:latest
#COPY --from=build app/dist/front-crud-empleados /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/nginx.conf
# Exponer el puerto 80
#EXPOSE 80



# Etapa de compilación
#FROM node:latest as build-stage
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build --prod

# Etapa de producción
#FROM nginx:latest as production-stage
#COPY --from=build-stage /app/dist/front-crud-empleados /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/nginx.conf
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

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
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]