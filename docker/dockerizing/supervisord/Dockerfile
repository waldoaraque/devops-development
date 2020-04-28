FROM ubuntu:18.04
RUN apt-get update && apt-get upgrade -y 
RUN apt-get install -y \
    --no-install-recommends \
    apt-transport-https \
    ca-certificates \
    software-properties-common \ 
    supervisor
ADD app.conf /etc/supervisor/conf.d/
RUN service supervisor stop && service supervisor start
CMD ["/usr/bin/supervisord"]