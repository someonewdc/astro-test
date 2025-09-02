# Используем стабильный и легковесный образ Alpine
FROM nginx:1.25-alpine
# Удаляем стандартную конфигурацию по умолчанию, чтобы она не конфликтовала с нашей
RUN rm /etc/nginx/conf.d/default.conf

# Копируем наши конфигурации сайтов
# Все файлы из папки ./conf.d/ на хосте попадут в /etc/nginx/conf.d/ в контейнере
COPY ./conf.d/ /etc/nginx/conf.d/

# Если у вас есть кастомный главный nginx.conf, раскомментируйте следующую строку
COPY ./nginx.conf /etc/nginx/nginx.conf