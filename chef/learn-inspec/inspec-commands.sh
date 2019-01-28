#this is the way to execute a test into a container by shh

inspec exec auditd -t ssh://root:password@target

#ssh:// is the scheme. It specifies an SSH connection.
#root:password is the username and password for the account that permits SSH access.
#target is the hostname of the target system. The Docker image comes preconfigured with this hostname.

inspec check auditd/
#makes sure that our profile does not have errors.

inspec archive auditd/
#convert our profile to a zip or tar.gz packaged file