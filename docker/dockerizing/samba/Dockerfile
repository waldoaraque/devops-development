FROM ubuntu:18.04
RUN apt-get update && apt-get upgrade -y 
RUN apt-get install -y \
    --no-install-recommends \
    apt-transport-https \
    ca-certificates \
    software-properties-common \
    samba \
    samba-common-bin 
RUN apt-get update
ADD ./smb.conf /etc/samba/
ENTRYPOINT ["smbd", "--foreground", "--log-stdout", "--no-process-group"]
CMD []