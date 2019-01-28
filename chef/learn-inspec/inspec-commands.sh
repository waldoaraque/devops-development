#this is the way to execute a test into a container by shh

inspec exec auditd -t ssh://root:password@target

#ssh:// is the scheme. It specifies an SSH connection.
#root:password is the username and password for the account that permits SSH access.
#target is the hostname of the target system. The Docker image comes preconfigured with this hostname.