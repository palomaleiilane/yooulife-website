FROM wordpress:latest

COPY ./wp-config-sample.php /usr/src/wordpress
COPY ./.htaccess /usr/src/wordpress
