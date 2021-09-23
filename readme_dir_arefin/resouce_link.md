


# file:///home/arefin/Programs/file_upload/express-fileupload/example/



client form, upload directory and server code are  in example directory.




arefin@arefin-HP-ProBook-450-G0:~/Programs/byvl/react-redux-fileupload$ ifconfig
lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 188170  bytes 382013400 (382.0 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 188170  bytes 382013400 (382.0 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlo1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.0.103  netmask 255.255.255.0  broadcast 192.168.0.255
        inet6 fe80::50ca:c8f9:df1f:f34b  prefixlen 64  scopeid 0x20<link>
        ether 70:18:8b:81:d9:89  txqueuelen 1000  (Ethernet)
        RX packets 1255749  bytes 1630212166 (1.6 GB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 631800  bytes 83936481 (83.9 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0


        
        
## 70:18:8b:81:d9:89

## 70-18-8b-81-d9-89


## To access the server from itself, use http://localhost/ or http://127.0.0.1/.

### To access the server from a separate computer on the same network, use http://192.168.X.X where X.X is your server's local 
#### IP address. You can find the sever's local IP address (assuming it's Linux) by running hostname -I.




## network_security_config.xml:

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="false">localhost</domain>
        <domain includeSubdomains="false">10.0.2.2</domain>
        <domain includeSubdomains="false">192.168.0.103</domain>
        <domain includeSubdomains="false">192.168.0.103</domain>
        <domain includeSubdomains="false">192.168.0.101</domain>
        <domain includeSubdomains="false">192.168.0.100</domain>
        <base-config cleartextTrafficPermitted="true"/>
    </domain-config>
</network-security-config>
```

android:networkSecurityConfig="@xml/network_security_config"



http://192.168.192.168.0.103


arefin@arefin-HP-ProBook-450-G0:~/Programs/byvl/tripzChatHook$ hostname -i
127.0.1.1
arefin@arefin-HP-ProBook-450-G0:~/Programs/byvl/tripzChatHook$ hostname -I
192.168.0.103 
arefin@arefin-HP-ProBook-450-G0:~/Programs/byvl/tripzChatHook$ 


## server's local IP address: hostname -I

arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ ifconfig
lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 234032  bytes 398156867 (398.1 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 234032  bytes 398156867 (398.1 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlo1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.0.103  netmask 255.255.255.0  broadcast 192.168.0.255
        inet6 fe80::50ca:c8f9:df1f:f34b  prefixlen 64  scopeid 0x20<link>
        ether 70:18:8b:81:d9:89  txqueuelen 1000  (Ethernet)
        RX packets 1267143  bytes 1635337285 (1.6 GB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 645385  bytes 93895588 (93.8 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ hostname -I
192.168.0.103 
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ 






arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ ifconfig | grep inet
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        inet 192.168.0.103  netmask 255.255.255.0  broadcast 192.168.0.255
        inet6 fe80::50ca:c8f9:df1f:f34b  prefixlen 64  scopeid 0x20<link>
arefin@arefin-HP-ProBook-450-G0:~/Programs/file_upload/express-gen$ 


