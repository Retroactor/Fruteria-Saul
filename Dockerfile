FROM nginx:1.27-alpine

# Copia tu sitio (index.html, assets/, css/, js/)
COPY . /usr/share/nginx/html

# Sustituye la configuración por la nuestra
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
