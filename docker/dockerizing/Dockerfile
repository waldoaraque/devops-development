FROM ubuntu:18.04
#ENV VERSION=18.04, PORT=5000
RUN apt-get update && apt-get upgrade -y && apt-get install -y --no-install-recommends \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common \
    dpkg \
    wget
RUN wget https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb 
RUN ls && dpkg -i packages-microsoft-prod.deb 
RUN add-apt-repository universe
RUN apt-get update && apt-get install -y aspnetcore-runtime-3.0 apache2
RUN a2enmod proxy proxy_http proxy_html proxy_balancer proxy_connect proxy_ajp lbmethod_byrequests
ADD 000-default.conf /etc/apache2/sites-enabled/
RUN service apache2 restart 
RUN apt-get install -y samba samba-common-bin
ADD smb.conf /etc/samba/
RUN testparm
RUN chmod 0777 /var/www
RUN apt-get install -y supervisor 
ADD app.conf /etc/supervisor/conf.d/
RUN service supervisor stop && service supervisor start
EXPOSE 5000 
CMD service apache2 start 
