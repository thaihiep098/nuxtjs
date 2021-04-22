FROM abiosoft/caddy

EXPOSE 8080

COPY Caddyfile /etc/Caddyfile

COPY ./dist/ /srv/
