chef-run web1 file hello.txt
ssh web1 cat /hello.txt
ssh web1 ls -l /hello.txt
chef-run web1 file hello.txt content='Hello World!'
ssh web1 cat /hello.txt
chef-run web1 file hello.txt action=delete