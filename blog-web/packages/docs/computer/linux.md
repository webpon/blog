### 简介

![image-20221106215447601](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221106215447601.png)

> Linux是一种自由和开放源码的类Unix操作系统。目前存在着许多不同的Linux,但它们都使用了Linux内核。Linux可安装在各种计算机硬件设备中，从手机、平板电脑、路由器和视频游戏控制台，到台式计算机、大型机和超级计算机。Linux是一个领先的操作系统，世界上运算最快的10台超级计算机运行的都是Linux操作系统。严格来讲，Linux这个词本身只表示Linux内核，但实际上人们已经习惯了用Linux来形容整个基于Linux内核，并且使用GNU 工程各种工具和数据库的操作系统。Linux得名于计算机业余爱好者Linus Tor[va](https://product.pconline.com.cn/itbk/diy/display/1107/2479893.html)lds。

[Linux操作系统](https://so.csdn.net/so/search?q=Linux操作系统&spm=1001.2101.3001.7020)诞生于1991年的10月5日。Linux存在着许多不同的Linux版本，但它们都使用了Linux内核。！

1、Linux Mint：一个基于[Ubuntu](https://so.csdn.net/so/search?q=Ubuntu&spm=1001.2101.3001.7020)的发行版，更贴近普通用户，Linux

Mint不仅仅是一个具有新的应用程序和更新的桌面主题的Ubuntu，自开始以来，开发人员一直增加各种mint下的图形工具以提高可用性，比如说mintDesktop

– 用于配置桌面环境的实用程序、mintInstall – 一个易于使用的软件安装程序。

2、Ubuntu：Ubuntu发展成为最受欢迎的桌面Linux发行版，为开发易于使用和免费的桌面操作系统做出巨大贡献，该操作系统成为市场上专有桌面操作系统有力的竞争者。

3、Debian

GNU/Linux：1993年首次公布，该发行版本非常稳定，卓越的质量控制，包含超过30000个软件包，支持比任何其他Linux发行版本更多的处理器体系结构。

4、Mageia：一个桌面发行版本，最受欢迎的功能是最优秀的软件应用，精良的系统管理套件，吸引大量志愿者贡献者以及广泛的国际化支持，是最简单但功能强大的系统安装程序之一。

5、Fedora：Fedora 是一个 Linux

发行版，是一款由全球社区爱好者构建的面向日常应用的快速、稳定、强大的操作系统。它允许任何人自由地使用、修改和重发布，无论现在还是将来。

6、CentOS：Linux的发行版本之一，来自于Red Hat Enterprise

Linux依照开放源代码规定释出的源代码所编译而成，有些要求高度

### 安装

#### 虚拟机形式

##### 安装

1、下载vmware并安装

https://download3.vmware.com/software/WKST-1623-WIN-New/VMware-workstation-full-16.2.3-19376536.exe

2、激活，以下链接有激活码

http://www.win7zhijia.cn/win10jc/win10_44889.html

3、下载ubuntu或者其他linux系统镜像文件

https://releases.ubuntu.com/20.04/ubuntu-20.04.4-desktop-amd64.iso.torrent?_ga=2.103732992.1810834339.1653754411-1858835516.1653149195

4、安装ubuntu虚拟机

（1）工具栏选择文件中的新建虚拟机。

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbTBfNTM2ODIxMzg=,size_7,color_FFFFFF,t_70,g_se,x_16.png" alt="img" style="zoom:67%;" />

（2）选择典型，下一步

![image-20220529182535851](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220529182535851.png)

（3）选择下载好的镜像文件，当然，你稍后安装也一样

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220529182635057.png" alt="image-20220529182635057" style="zoom: 67%;" />

（4）输入一些ubuntu系统所需的

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220529182725491.png" alt="image-20220529182725491" style="zoom:67%;" />

（5）安装完毕，启动

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220529182903028.png" alt="image-20220529182903028" style="zoom:50%;" />

（6）美美的ubuntu就启动了

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220529183420616.png" alt="image-20220529183420616" style="zoom:50%;" />

##### 快照与系统恢复

1、拍摄快照

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220529200040692.png" alt="image-20220529200040692" style="zoom:50%;" />

2、恢复快照

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220529200456479.png" alt="image-20220529200456479" style="zoom:50%;" />



#### windows下的wsl2

> Windows Subsystem for Linux（简称WSL）是一个在Windows 10上能够运行原生Linux二进制[可执行文件](https://baike.baidu.com/item/可执行文件/2885816)（ELF格式）的兼容层。它是由[微软](https://baike.baidu.com/item/微软/124767)与Canonical公司合作开发，其目标是使纯正的Ubuntu、Debian等映像能下载和解压到用户的本地计算机，并且映像内的工具和实用工具能在此子系统上原生运行。
>
> 详情请访问：https://baike.baidu.com/item/wsl/20359185?fr=aladdin

由于 WSL2基于 ***Hyper-V 虚拟技术，所以需要提前在 BIOS中开启虚拟化支持。
关于如何开启，可以在百度搜索：***主板品牌+BIOS+虚拟化进行查询。

**步骤：**

1. 在***Windows 图标\*** 右键，选择以管理员方式运行***PowerShell\*** 或 ***Windows 终端\***

2. 在终端窗口中输入：

   ```
   wsl --install
   ```

    即可自动执行。（如下图）

   ![image-20221108185644400](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221108185644400.png)

   命令输出情况

3. 在完成 ***已安装 GUI 应用支持\*** 后， 按住`CTRL+C`取消操作后重启。

4. 开机后调出终端，输入执行`wsl --set-default-version 2` 将 WSL 默认版本调整为 WSL2

5. 在 Microsoft Store 中找到对应发行版进行安装即可；也可通过命令行安装。

6. 命令行安装方法：`wsl -l -o`可查看可安装的发行版，记录发行版名称后，执行 `wsl --install --d NAME`即可安装。如： `wsl --install --d ubuntu-20.04`可安装ubuntu20.04`（推荐此方式安装）`。

7. 安装完毕后，执行：`wsl -l -v`可查看安装的发行版的WSL版本。

   ![image-20220522224138006](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220522224138006.png)

*注：以上操作方法不适用于 Windows Server （服务器版本），Microsoft 无意在 Server 版本提供 WSL2 支持，仅有 Windows Server 2022 的预览版才支持 WSL2。预览版有效期短，且到期后不会通过 Windows Update 推送新的版本，所以不建议使用预览版本。*

需要尝鲜的可以下载：[Windows Server vNext Previde ISO](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.microsoft.com%2Fen-us%2Fsoftware-download%2Fwindowsinsiderpreviewserver) , 需要登录微软账号并加入 Insider 计划。

### 配置Linux

> 当我们拥有一个linux系统的时候，第一件事就是需要配置linux

#### xrdp远程桌面

> Xrdp 是一个微软远程桌面协议（RDP）的开源实现，它允许你通过图形界面控制远程系统。
>
> 通过 RDP，你可以登录远程机器，并且创建一个真实的桌面会话，就像你登录本地机器一样。

**安装 Xrdp**

Xrdp 被包含在默认的 Ubuntu 软件源中。想要安装它，运行：

```
sudo apt install xrdp 
```

一旦安装完成，Xrdp 服务将会自动启动。你可以输入下面的命令，验证它：

```
sudo systemctl status xrdp
```

输出将会像下面这样：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220529184347333.png" alt="image-20220529184347333" style="zoom: 67%;" />

使用windows下的远程桌面程序连接

![image-20220529184421324](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220529184421324.png)

输入虚拟机的ip地址，ip地址查看使用ip address在linux虚拟机上查看

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220529184526486.png" alt="image-20220529184526486" style="zoom:67%;" />

下一步输入用户名和密码登录，具体的用户名和密码根据自己的设定来输入，然后点击ok

`注意：远程访问的用户不要与服务器系统的用户冲突，可能会导致黑屏，建议新建一个专门用来远程连接桌面的用户`

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20200730144517142.jpg)

大功告成

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220529184701978.png" alt="image-20220529184701978" style="zoom: 50%;" />

新建一个rdp文件快捷方式，方便下次访问

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220529184956331.png" alt="image-20220529184956331" style="zoom:67%;" />

#### ssh

> SSH(远程连接工具)连接原理：ssh服务是一个守护进程(demon)，系统后台监听客户端的连接，ssh服务端的进程名为sshd,负责实时监听客户端的请求(IP 22端口)，包括公共秘钥等交换等信息。
>
> ssh服务端由2部分组成： openssh(提供ssh服务)  openssl(提供加密的程序)
>
> ssh的客户端可以用 XSHELL，Securecrt, Mobaxterm等工具进行连接

##### 安装

说明：安装时需要提供互联网或者提前下载安装包

```python
sudo apt-get install openssh-server
```

![image-20220529190455928](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220529190455928.png)

##### 启动

```python
sudo service ssh start
```

查询服务启动状态：

```python
sudo ps -e | grep ssh
或者
sudo service ssh status
或
netstat -an | grep "LISTEN "
```

![在这里插入图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgafac2346bf1a44c488688b83d7631102.jpeg)

![在这里插入图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img76be19657cd4485c8caada16a38be4d9.jpeg)

![在这里插入图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img5e496dc636ce4206b4c85e01eb03d29c.png)

##### 配置

###### 端口更改

[ssh](https://so.csdn.net/so/search?q=ssh&spm=1001.2101.3001.7020)默认开放22端口，如若想改为其他端口，可在此处修改。我在此处选择默认端口

```python
sudo gedit /etc/ssh/sshd_config
```

![image-20220529190636992](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220529190636992.png)

###### 检查防火墙端口开放

ssh默认开放22端口，如果修改可参考3.1

```
netstat -an | grep 22或 ufw status
```

如果没有，则开放22端口

```
ufw allow 22
若修改完成后，重启SSH服务
```

```
service sshd restart
```

防火墙生效并开机启动

```
ufw enable
```

######  sshd_config配置

[ubuntu](https://so.csdn.net/so/search?q=ubuntu&spm=1001.2101.3001.7020)拒绝root ssh远程登录通常情况是ssh设置了禁止root远程登录，解决办法就是：修改ssh配置，然后重启ssh服务即可。

```
sudo vi /etc/ssh/sshd_config 或 sudo gedit /etc/ssh/sshd_config
# 注释掉此行
# PermitRootLogin prohibit-password
# 新建一行并添加
PermitRootLogin yes
```

![image-20220529191325352](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220529191325352.png)

重启ssh服务

```
sudo service ssh restart
```

windows cmd访问：

> 使用ssh 用户名@主机Ip

例如：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220608224718483.png" alt="image-20220608224718483" style="zoom:67%;" />

#### Xshell

Xshell 是一个强大的安全终端模拟软件，它支持SSH1， SSH2， 以及Microsoft Windows 平台的TELNET 协议。它通过互联网到远程系统的安全连接以及它创新性的设计和特色帮助用户在复杂的网络环境中享受他们的工作。

Xshell 是目前最好的远程登录到Linux操作系统的软件，流畅的速度并且完美解决了中文乱码的问题，是目前程序员首选的软件。

2． 下载：https：／／www．netsarang．com

3． 安装和使用：参考 “Xshell安装手册．docx”

#### Xftp

1． 简介：

是一个基于windows平台的功能强大的SFTP、FTP文件传输软件。使用了Xftp 以后，windows 用户能安全地在UNIX／Linux和Windows PC 之间传输文件。

2． 下载：https：／／www．netsarang．com

3． 安装和使用：参考“Xftp安装手册．docx”

### Linux用户管理

**Linux用户简介：**

Linux系统是一个多用户多任务的操作系统，任何一个要使用系统资源的用户，都必须首先向系统管理员申请一个账号，然后以这个账号的身份进入系统。root用户是系统默认创建的管理员账号。

**查看当前用户**

1、shell终端中输入：who

当前用户为：book，使用tty7的终端，后面是登陆的时间

2、shell终端中输入：whoami

当前用户为：book，很精简输出结果

3、shell终端中输入：w

当前用户为：book，使用tty7的终端

，后面是一些其他信息

**查看所有用户**

1、正常登陆的用户，在/home下都有家目录，所以可以直接看这个目录下的文件

输入：ls /home

2、通用方法：直接查看/etc/passwd 文件后面第二个冒号的值大于1000时，这个就是一个用户

1）输入：cat /etc/passwd ，信息太多，不好查找

2）输入：cat /etc/passwd |cut -d: -f 1-3 ，只筛选出了有用的信息，方便查看，【推荐使用这个命令】

3）输入：lastlog ，这个是系统的所有用户，绝大部分是系统内置的

**添加用户：**

useradd ［选项］ 用户名

useradd zhangsan 创建一个账号叫zhangsan

useradd -m zhangsan：创建一个账号叫zhangsan，此时会创建账号、创建一个组zhangsan并且把zhangsan分到此组中、还会在／home下创建一个目录叫zhangsan作为新创建用户的根目录。

useradd －d ／home／ ls lisi：创建一个账号叫lisi，并且给lisi指定家目录／ls。

passwd zhangsan：给zhangsan设置密码或者修改密码。

**删除用户：**

userdel［选项］ 用户名

userdel zhangsan：删除用户zhangsan，保留zhangsan的主目录。

userdel –r lisi：删除用户lisi，并且把lisi的主目录也删除。

**查询用户信息：**

id 用户名

id zhangsan：查看用户zhangsan的信息。

**切换用户：**

su 用户名

su zhangsan：切换到zhangsan用户。

注意：从高权限用户切换到低权限用户时，不需要输密码；否则，需要输密码。

另：exit命令可以回到原来的用户。

**超级用户**

> 超级用户root，类似与windows下的Administrator用户

切换到root用户，有全部权限，可以直接useradd等命令

1、首次使用时，需要给root设置密码

```
sudo passwd root
```

2、切换到root用户

```
su root
```

其中，su表示switch user

3、退出

exit

sudo, 表示以管理员身份执行

1、在登陆系统时，默认不允许以root用户登录

2、只有特殊的用户，才能执行sudo

linux下，把能执行sudo命令的用户叫sudoer

Ubuntu系统Root用户无法登录问题：https://blog.csdn.net/chendongpu/article/details/124496497

**Linux组管理**

**Linux的组简介：**

Linux的组类似于角色，系统可以对有共性的多个用户进行统一的管理。每一个用户都至少属于一个组，创建用户时如果不指定组，会默认创建一个跟用户名相同的组，并且把新创建的用户分配到组中，root用户默认属于root组。

**添加组：**

groupadd 组名

groupadd devgroup：创建一个组devgroup。

**删除组：**

groupdel 组名

groupdel devgroup：删除组devgroup。

**添加用户时指定组：**

useradd –g 组名 用户名

useradd –g devgroup zhangsan：添加用户zhangsan，并且指定zhangsan属于组devgroup。

**将用户添加到组／从组中移除：**

gpasswd –a／－d 用户名 组名

gpasswd –a zhangsan test

gpasswd –d zhangsan test

### Linux系统目录结构

登录系统后，在当前命令窗口下输入命令：

```
 ls / 
```

你会看到如下图所示:

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img4_20.png)

树状目录结构：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgd0c50-linux2bfile2bsystem2bhierarchy.jpg" alt="img" style="zoom:67%;" />

以下是对这些目录的解释：

- **`/bin`**：
  bin 是 Binaries (二进制文件) 的缩写, 这个目录存放着最经常使用的命令。

- **/boot：**
  这里存放的是启动 Linux 时使用的一些核心文件，包括一些连接文件以及镜像文件。

- **/dev ：**
  dev 是 Device(设备) 的缩写, 该目录下存放的是 Linux 的外部设备，在 Linux 中访问设备的方式和访问文件的方式是相同的。

- **/etc：**
  etc 是 Etcetera(等等) 的缩写,这个目录用来存放所有的系统管理所需要的配置文件和子目录。

- **/home**：
  用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve。

- **/lib**：
  lib 是 Library(库) 的缩写这个目录里存放着系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库。

- **/lost+found**：
  这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。

- **/media**：
  linux 系统会自动识别一些设备，例如U盘、光驱等等，当识别后，Linux 会把识别的设备挂载到这个目录下。

- **/mnt**：
  系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在 /mnt/ 上，然后进入该目录就可以查看光驱里的内容了。

- **/opt**：
  opt 是 optional(可选) 的缩写，这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。

- **/proc**：
  proc 是 Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。
  这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件，比如可以通过下面的命令来屏蔽主机的ping命令，使别人无法ping你的机器：

  ```
  echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all
  ```

- **/root**：
  该目录为系统管理员，也称作超级权限者的用户主目录。

- **`/sbin`**：
  s 就是 Super User 的意思，是 Superuser Binaries (超级用户的二进制文件) 的缩写，这里存放的是系统管理员使用的系统管理程序。

- **/selinux**：
  这个目录是 Redhat/CentOS 所特有的目录，Selinux 是一个安全机制，类似于 windows 的防火墙，但是这套机制比较复杂，这个目录就是存放selinux相关的文件的。

- **/srv**：
  该目录存放一些服务启动之后需要提取的数据。

- **/sys**：

  这是 Linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs 。

  sysfs 文件系统集成了下面3种文件系统的信息：针对进程信息的 proc 文件系统、针对设备的 devfs 文件系统以及针对伪终端的 devpts 文件系统。

  该文件系统是内核设备树的一个直观反映。

  当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建。

- **/tmp**：
  tmp 是 temporary(临时) 的缩写这个目录是用来存放一些临时文件的。

- **/usr**：
  usr 是 unix shared resources(共享资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。

- **`/usr/bin`：**
  系统用户使用的应用程序。

- **`/usr/sbin`：**
  超级用户使用的比较高级的管理程序和系统守护程序。

- **/usr/src：**
  内核源代码默认的放置目录。

- **/var**：
  var 是 variable(变量) 的缩写，这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。

- **/run**：
  是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有 /var/run 目录，应该让它指向 run。

在 Linux 系统中，有几个目录是比较重要的，平时需要注意不要误删除或者随意更改内部文件。

**/etc**： 上边也提到了，这个是系统中的配置文件，如果你更改了该目录下的某个文件可能会导致系统不能启动。

**/bin, /sbin, /usr/bin, /usr/sbin**: 这是系统预设的执行文件的放置目录，比如 **ls** 就是在 **/bin/ls** 目录下的。

值得提出的是 **/bin**、**/usr/bin** 是给系统用户使用的指令（除 root 外的通用用户），而/sbin, /usr/sbin 则是给 root 使用的指令。

**/var**： 这是一个非常重要的目录，系统上跑了很多程序，那么每个程序都会有相应的日志产生，而这些日志就被记录到这个目录下，具体在 /var/log 目录下，另外 mail 的预设放置也是在这里。

### Linux常用基本命令大全

> 参考链接：https://www.runoob.com/linux/linux-command-manual.html

#### 一、系统信息

arch 显示机器的处理器架构
uname -m 显示机器的处理器架构
uname -r 显示正在使用的内核版本
dmidecode -q 显示硬件系统部件 - (SMBIOS / DMI)
hdparm -i /dev/hda 罗列一个磁盘的架构特性
hdparm -tT /dev/sda 在磁盘上执行测试性读取操作
cat /proc/cpuinfo 显示CPU info的信息
cat /proc/interrupts 显示中断
cat /proc/meminfo 校验内存使用
cat /proc/swaps 显示哪些swap被使用
cat /proc/version 显示内核的版本
cat /proc/net/dev 显示网络适配器及统计
cat /proc/mounts 显示已加载的文件系统
lspci -tv 罗列 PCI 设备
lsusb -tv 显示 USB 设备
date 显示系统日期
cal 2022 显示2022年的日历表
date 061217002022.00 设置日期和时间 - 月日时分年.秒
clock -w 将时间修改保存到 BIOS

#### 二、系统的关机、重启

shutdown -h now 关闭系统
init 0 关闭系统
telinit 0 关闭系统
shutdown -h hours:minutes & 按预定时间关闭系统
shutdown -c 取消按预定时间关闭系统
shutdown -r now 重启
reboot 重启
logout 注销

#### 三、目录操作

##### 1.显示当前文件夹路径 pwd

##### 2、目录切换 cd

命令：cd 目录

cd / 切换到根目录
cd /usr 切换到根目录下的usr目录
cd ../ 切换到上一级目录 或者 cd ..
cd ~ 切换到home目录
cd - 切换到上次访问的目录

##### 3、目录查看 ls [-al]

命令：ls [-al]

ls 查看当前目录下的所有目录和文件
ls -a 查看当前目录下的所有目录和文件（包括隐藏的文件）
ls -l 或 ll 列表查看当前目录下的所有目录和文件（列表查看，显示更多信息）

ls -li 查看一个文件夹下文件的详细信息，包括inode number，权限，大小等：

ls /dir 查看指定目录下的所有目录和文件 如：ls /usr

##### 4、目录操作【增，删，改，查】

创建目录【增】 mkdir

**命令：mkdir 目录**

mkdir aaa 在当前目录下创建一个名为aaa的目录
mkdir /usr/aaa 在指定目录下创建一个名为aaa的目录

mkdir -p aaa/ccc 在当前目录下建立多层目录

**命令：rmdir 目录**

删除空目录，如果目录非空，则删除失败

rmdir abc 删除当前目录下的abc目录

删除目录或文件【删】rm

**命令：rm [-rf] 目录**

删除文件：
rm 文件 删除当前目录下的文件
rm -f 文件 删除当前目录的的文件（不询问）

删除目录：
rm -r aaa 递归删除当前目录下的aaa目录
rm -rf aaa 递归删除当前目录下的aaa目录（不询问）

其中，r表示recursive递归删除 ,f 表示force强制删除

全部删除：
rm -rf * 将当前目录下的所有目录和文件全部删除
`rm -rf /* 【自杀命令！慎用！慎用！慎用！】将根目录下的所有文件全部删除`

注意：rm不仅可以删除目录，也可以删除其他文件或压缩包，为了方便大家的记忆，无论删除任何目录或文件，都直接使用 rm -rf 目录/文件/压缩包

目录修改【改】mv 和 cp

**重命名目录**
命令：mv 当前目录 新目录
例如：mv aaa bbb 将目录aaa改为bbb
注意：mv的语法不仅可以对目录进行重命名而且也可以对各种文件，压缩包等进行 重命名的操作

**剪切目录**
命令：mv 目录名称 目录的新位置
示例：将/usr/tmp目录下的aaa目录剪切到 /usr目录下面 mv /usr/tmp/aaa /usr
注意：mv语法不仅可以对目录进行剪切操作，对文件和压缩包等都可执行剪切操作

**拷贝目录**
命令：cp -r 目录名称 目录拷贝的目标位置 -r代表递归
示例：将/usr/tmp目录下的aaa目录复制到 /usr目录下面 cp /usr/tmp/aaa /usr
注意：cp命令不仅可以拷贝目录还可以拷贝文件，压缩包等，拷贝文件和压缩包时不 用写-r递归

**搜索目录【查】find**

命令：find 目录 参数 文件名称
示例：find /usr/tmp -name 'a*' 查找/usr/tmp目录下的所有以a开头的目录或文件

#### 四、文件操作

##### 1、文件操作【增，删，改，查】

**新建文件【增】touch**
命令：touch 文件名
示例：在当前目录创建一个名为aa.txt的文件 touch aa.txt

**删除文件 【删】 rm**
命令：rm -rf 文件名

**修改文件【改】 vi或vim**

【vi编辑器的3种模式】
基本上vi可以分为三种状态，分别是命令模式（command mode）、插入模式（Insert mode）和底行模式（last line mode），各模式的功能区分如下：

1) 命令行模式command mode）
   控制屏幕光标的移动，字符、字或行的删除，查找，移动复制某区段及进入Insert mode下，或者到 last line mode。
   命令行模式下的常用命令：
   【1】控制光标移动：↑，↓，j
   【2】删除当前行：dd
   【3】查找：/字符
   【4】进入编辑模式：i o a
   【5】进入底行模式：:

2) 编辑模式（Insert mode）
   只有在Insert mode下，才可以做文字输入，按「ESC」键可回到命令行模式。
   编辑模式下常用命令：
   【1】ESC 退出编辑模式到命令行模式；

3) 底行模式（last line mode）
   将文件保存或退出vi，也可以设置编辑环境，如寻找字符串、列出行号……等。
   底行模式下常用命令：
   【1】退出编辑： :q
   【2】强制退出： :q!
   【3】保存并退出： :wq

打开文件

命令：vi 文件名
示例：打开当前目录下的aa.txt文件 vi aa.txt 或者 vim aa.txt

注意：使用vi编辑器打开文件后，并不能编辑，因为此时处于命令模式，点击键盘i/a/o进入编辑模式。

编辑文件

使用vi编辑器打开文件后点击按键：i ，a或者o即可进入编辑模式。

i:在光标所在字符前开始插入
a:在光标所在字符后开始插入
o:在光标所在行的下面另起一新行插入

保存或者取消编辑

保存文件：

第一步：ESC 进入命令行模式
第二步：: 进入底行模式
第三步：wq 保存并退出编辑

取消编辑：

第一步：ESC 进入命令行模式
第二步：: 进入底行模式
第三步：q! 撤销本次修改并退出编辑

**文件的查看【查】**

文件的查看命令：cat/more/less/tail

cat：看最后一屏

示例：使用cat查看/etc/sudo.conf文件，只能显示最后一屏内容
cat sudo.conf

more：百分比显示

示例：使用more查看/etc/sudo.conf文件，可以显示百分比，回车可以向下一行，空格可以向下一页，q可以退出查看
more sudo.conf

less：翻页查看

示例：使用less查看/etc/sudo.conf文件，可以使用键盘上的PgUp和PgDn向上 和向下翻页，q结束查看
less sudo.conf

tail：指定行数或者动态查看

示例：使用tail -10 查看/etc/sudo.conf文件的后10行，Ctrl+C结束
tail -10 sudo.conf

##### 2、权限修改

rwx：r read代表可读，w write代表可写，x excute代表该文件是一个可执行文件，如果rwx任意位置变为-则代表不可读或不可写或不可执行文件。

示例：给aaa.txt文件权限改为可执行文件权限，aaa.txt文件的权限是-rw-------

第一位：-就代表是文件，d代表是文件夹
第一段（3位）：代表拥有者的权限
第二段（3位）：代表拥有者所在的组，组员的权限
第三段（最后3位）：代表的是其他用户的权限

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220530093150502.png" alt="image-20220530093150502" style="zoom:50%;" />

**修改文件权限**

##### 3、软链接

> 相当于windows下的“快捷方式”
>
> 使用In命令（link）来创建软链接

```
ln -s source link
```

其中，-s 表示soft软链接（默认为硬）

比如

```
ln -s example example2
```

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220530004144863.png" alt="image-20220530004144863" style="zoom:50%;" />

#### 五、压缩文件操作

##### 1、打包和压缩

Windows的压缩文件的扩展名 .zip/.rar
linux中的打包文件：aa.tar
linux中的压缩文件：bb.gz
linux中打包并压缩的文件：.tar.gz

Linux中的打包文件一般是以.tar结尾的，压缩的命令一般是以.gz结尾的。
而一般情况下打包和压缩是一起进行的，打包并压缩后的文件的后缀名一般.tar.gz。

**命令：tar -zcvf 打包压缩后的文件名 要打包的文件**
其中：z：调用gzip压缩命令进行压缩
c：create打包文件
v：verbose显示运行过程
f：file指定文件名

示例：打包并压缩/usr/tmp 下的所有文件 压缩后的压缩包指定名称为xxx.tar
tar -zcvf ab.tar aa.txt bb.txt
或：tar -zcvf ab.tar *

##### 2、解压

**命令：tar [-zxvf] 压缩文件**
其中：x：代表解压
示例：将/usr/tmp 下的ab.tar解压到当前目录下

示例：将/usr/tmp 下的ab.tar解压到根目录/usr下
tar -xvf ab.tar -C /usr------C代表指定解压的位置

#### 六、查找命令

##### 1、grep

grep命令是一种强大的文本搜索工具

使用实例：

ps -ef | grep sshd 查找指定ssh服务进程
ps -ef | grep sshd | grep -v grep 查找指定服务进程，排除gerp身
ps -ef | grep sshd -c 查找指定进程个数

##### 2、find

find命令在目录结构中搜索文件，并对搜索结果执行指定的操作。

find 默认搜索当前目录及其子目录，并且不过滤任何结果（也就是返回所有文件），将它们全都显示在屏幕上。

使用实例：

find . -name "*.log" -ls 在当前目录查找以.log结尾的文件，并显示详细信息。
find /root/ -perm 600 查找/root/目录下权限为600的文件
find . -type f -name "*.log" 查找当目录，以.log结尾的普通文件
find . -type d | sort 查找当前所有目录并排序
find . -size +100M 查找当前目录大于100M的文件

##### 3、locate

locate 让使用者可以很快速的搜寻某个路径。默认每天自动更新一次，所以使用locate 命令查不到最新变动过的文件。为了避免这种情况，可以在使用locate之前，先使用updatedb命令，手动更新数据库。如果数据库中没有查询的数据，则会报出locate: can not stat () `/var/lib/mlocate/mlocate.db': No such file or directory该错误！updatedb即可！

yum -y install mlocate 如果是精简版CentOS系统需要安装locate命令

使用实例：

updatedb
locate /etc/sh 搜索etc目录下所有以sh开头的文件
locate pwd 查找和pwd相关的所有文件

##### 4、whereis

whereis命令是定位可执行文件、源代码文件、帮助文件在文件系统中的位置。这些文件的属性应属于原始代码，二进制文件，或是帮助文件。

使用实例：

whereis ls 将和ls文件相关的文件都查找出来

##### 5、which

which命令的作用是在PATH变量指定的路径中，搜索某个系统命令的位置，并且返回第一个搜索结果。

使用实例：

which pwd 查找pwd命令所在路径
which java 查找path中java的路径

#### 七、su、sudo

##### 1、su

su用于用户之间的切换。但是切换前的用户依然保持登录状态。如果是root 向普通或虚拟用户切换不需要密码，反之普通用户切换到其它任何用户都需要密码验证。

su test:切换到test用户，但是路径还是/root目录
su - test : 切换到test用户，路径变成了/home/test
su : 切换到root用户，但是路径还是原来的路径
su - : 切换到root用户，并且路径是/root
su不足：如果某个用户需要使用root权限、则必须要把root密码告诉此用户。

退出返回之前的用户：exit

##### 2、sudo

sudo是为所有想使用root权限的普通用户设计的。可以让普通用户具有临时使用root权限的权利。只需输入自己账户的密码即可。

进入sudo配置文件命令：

vi /etc/sudoer或者visudo
案例：
允许hadoop用户以root身份执行各种应用命令，需要输入hadoop用户的密码。
hadoop ALL=(ALL) ALL

案例：
只允许hadoop用户以root身份执行ls 、cat命令，并且执行时候免输入密码。
配置文件中：
hadoop ALL=NOPASSWD: /bin/ls, /bin/cat

#### 八、系统服务

service iptables status --查看iptables服务的状态
service iptables start --开启iptables服务
service iptables stop --停止iptables服务
service iptables restart --重启iptables服务

chkconfig iptables off --关闭iptables服务的开机自启动
chkconfig iptables on --开启iptables服务的开机自启动

#### 九、网络管理

##### 1、主机名配置

[root@node1 ~]# vi /etc/sysconfig/network
NETWORKING=yes
HOSTNAME=node1

##### 2、IP 地址配置

[root@node1 ~]# vi /etc/sysconfig/network-scripts/ifcfg-eth0

##### 3、域名映射

/etc/hosts文件用于在通过主机名进行访问时做ip地址解析之用。所以，你想访问一个什么样的主机名，就需要把这个主机名和它对应的ip地址。

[root@node1 ~]# vi /etc/hosts

#### 在最后加上

192.168.52.201 node1
192.168.52.202 node2
192.168.52.203 node3

十、定时任务指令crontab 配置Linux常用命令
crontab是Unix和Linux用于设置定时任务的指令。通过crontab命令，可以在固定间隔时间,执行指定的系统指令或shell脚本。时间间隔的单位可以是分钟、小时、日、月、周及以上的任意组合。

crontab安装：

apt install crontabs
服务操作说明：

service crond start ## 启动服务
service crond stop ## 关闭服务
service crond restart ## 重启服务

1、命令格式

crontab [-u user] file

crontab [-u user] [ -e | -l | -r ]

参数说明：

-u user：用来设定某个用户的crontab服务

file：file是命令文件的名字,表示将file做为crontab的任务列表文件

并载入crontab。

-e：编辑某个用户的crontab文件内容。如果不指定用户，则表示编辑当前

用户的crontab文件。

-l：显示某个用户的crontab文件内容。如果不指定用户，则表示显示当前

用户的crontab文件内容。

-r：删除定时任务配置，从/var/spool/cron目录中删除某个用户的crontab

文件，如果不指定用户，则默认删除当前用户的crontab文件。

命令示例：

crontab file [-u user] ## 用指定的文件替代目前的crontab
crontab -l [-u user] ## 列出用户目前的crontab
crontab -e [-u user] ## 编辑用户目前的crontab

2、配置说明

命令：* * * * * command

解释：分 时 日 月 周 命令

第1列表示分钟1～59 每分钟用*或者 */1表示

第2列表示小时0～23（0表示0点）

第3列表示日期1～31

第4列表示月份1～12

第5列标识号星期0～6（0表示星期天）

第6列要运行的命令

十一、其他Linux常用命令
查看当前目录：pwd
命令：pwd 查看当前目录路径

查看进程：ps -ef
命令：ps -ef 查看所有正在运行的进程

结束进程：kill
命令：kill pid 或者 kill -9 pid(强制杀死进程) pid:进程号

网络通信命令：
ifconfig：查看网卡信息

命令：ifconfig 或 ifconfig | more

ping：查看与某台机器的连接情况

命令：ping ip

netstat -an：查看当前系统端口

命令：netstat -an

搜索指定端口
命令：netstat -an | grep 8080

配置网络
命令：setup

重启网络
命令：service network restart

切换用户
命令：su - 用户名

关闭防火墙
命令：chkconfig iptables off

或者：

iptables -L;
iptables -F;
service iptables stop
修改文件权限
命令：chmod 777

清屏
命令：ctrl + l

vi模式下快捷键
esc后:

保存并退出快捷键：shift+z+z

光标跳到最后一行快捷键：shift+g

删除一行：dd

复制一行内容：y+y

粘贴复制的内容：p

### wget下载

> wget是Ubuntu中的一个下载文件的工具，wget工具体积小但功能完善，它支持断点下载功能，同时支持FTP和HTTP下载方式。
> 我们在进行深度学习训练时，通常需要加载网络的预训练模型，即可以选择代码下载，也可以选择手动下载，比如我要加载权重文件：inception_resnet_v2，可以使用命令：

```
wget  https://github.com/fchollet/deep-learning-models/releases/download/v0.7/inception_resnet_v2_weights_tf_dim_ordering_tf_kernels_notop.h5
```

脑就会执行命令进行下载文件到当前文件夹：
![在这里插入图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20200416155151409.png)
下面是一些细分的下载命令：

详细可参考博客：https://www.cnblogs.com/cindy-cindy/p/6847502.html

**1、使用wget下载单个文件**
以下的例子是从网络下载一个文件并保存在当前目录

```
wget  https://github.com/fchollet/deep-learning-models/releases/download/v0.7/inception_resnet_v2_weights_tf_dim_ordering_tf_kernels_notop.h5
```

在下载的过程中会显示进度条，包含（下载完成百分比，已经下载的字节，当前下载速度，剩余下载时间）。

**2、使用wget -O下载并以不同的文件名保存**
wget默认会以最后一个符合”/”的后面的字符来命令，对于动态链接的下载通常文件名会不正确。
错误：下面的例子会下载一个文件并以名称download.php?id=1080保存

```
wget http://www.centos.bz/download?id=1 
```

即使下载的文件是zip格式，它仍然以download.php?id=1080命令。
正确：为了解决这个问题，我们可以使用参数-O来指定一个文件名：

```
wget -O wordpress.zip http://www.centos.bz/download.php?id=1080 
```

**3、使用wget –limit -rate限速下载**
当你执行wget的时候，它默认会占用全部可能的宽带下载。但是当你准备下载一个大文件，而你还需要下载其它文件时就有必要限速了。

```
wget –limit-rate=300k http://cn.wordpress.org/wordpress-3.1-zh_CN.zip 
```

4、使用wget -c断点续传 使用wget -c重新启动下载中断的文件

```
wget -c http://cn.wordpress.org/wordpress-3.1-zh_CN.zip 
```

对于我们下载大文件时突然由于网络等原因中断非常有帮助，我们可以继续接着下载而不是重新下载一个文件。需要继续中断的下载时可以使用-c参数。

5、使用wget -b后台下载
对于下载非常大的文件的时候，我们可以使用参数-b进行后台下载。

```
wget -b http://cn.wordpress.org/wordpress-3.1-zh_CN.zip 
Continuing in background, pid 1840. 
Output will be written to `wget-log’. 
```

你可以使用以下命令来察看下载进度

```
tail -f wget-log 
```

如果下载很慢，可以考虑使用**mwget**

使用参考链接：https://blog.csdn.net/weixin_37926734/article/details/124893268

### 程序安装

#### apt 命令

> apt（Advanced Packaging Tool）是一个在 Debian 和 Ubuntu 中的 Shell 前端软件包管理器。
>
> apt 命令提供了查找、安装、升级、删除某一个、一组甚至全部软件包的命令，而且命令简洁而又好记。
>
> apt 命令执行需要超级管理员权限(root)

**apt 语法**

```
  apt [options] [command] [package ...]
```

- **options：**可选，选项包括 -h（帮助），-y（当安装过程提示选择全部为"yes"），-q（不显示安装的过程）等等。
- **command：**要进行的操作。
- **package**：安装的包名。

**apt 常用命令**

- 列出所有可更新的软件清单命令：**sudo apt update**

- 升级软件包：**sudo apt upgrade**

  列出可更新的软件包及版本信息：**apt list --upgradeable**

  升级软件包，升级前先删除需要更新软件包：**sudo apt full-upgrade**

- 安装指定的软件命令：**sudo apt install &lt;package_name>**

  安装多个软件包：**sudo apt install &lt;package_1> &lt;package_2> &lt;package_3>**

- 更新指定的软件命令：**sudo apt update &lt;package_name>**

- 显示软件包具体信息,例如：版本号，安装大小，依赖关系等等：**sudo apt show &lt;package_name>**

- 删除软件包命令：**sudo apt remove &lt;package_name>**

  > 卸载已安装的软件。使用该命令后只卸载软件，但对于软件的配置文件将保留。

- 清理不再使用的依赖和库文件: **sudo apt autoremove**

- 移除软件包及配置文件: **sudo apt purge &lt;package_name>**

  > 卸载已安装的软件并删除卸载软件的配置文件。

- 清除系统因卸载软件之后不必要的依赖: **sudo apt-get autoremove**，

- 查找软件包命令： **sudo apt search &lt;keyword>**

- 列出所有已安装的包：**apt list --installed**

- 列出所有已安装的包的版本信息：**apt list --all-versions**

**实例**

查看一些可更新的包：

```
sudo apt update
```

升级安装包：

```
sudo apt upgrade
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgapt-commands-examples-1.png)

在以上交互式输入字母 **Y** 即可开始升级。

可以将以下两个命令组合起来，一键升级：

```
sudo apt update && sudo apt upgrade -y
```

安装 mplayer 包：

```
sudo apt install mplayer
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgapt-commands-examples-3.png)

如过不太记得完整的包名，我们可以只输入前半部分的包名，然后按下 **Tab** 键，会列出相关的包名：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgapt-commands-examples-2.png)

以上实例我们输入来 **reds**，然后按下 **Tab** 键，输出来四个相关的包。

如果我们想安装一个软件包，但如果软件包已经存在，则不要升级它，可以使用 **–no-upgrade** 选项:

```
sudo apt install <package_name> --no-upgrade
```

安装 mplayer 如果存在则不要升级：

```
sudo apt install mplayer --no-upgrade
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgapt-commands-examples-4.png)

如果只想升级，不要安装可以使用 **--only-upgrade** 参数：

```
sudo apt install <package_name> --only-upgrade
```

只升级 mplayer，如果不存在就不要安装它：

```
sudo apt install mplayer --only-upgrade
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgapt-commands-examples-5.png)

如果需要设置指定版本，语法格式如下：

```
sudo apt install <package_name>=<version_number>
```

**package_name** 为包名，**version_number** 为版本号。

移除包可以使用 remove 命令：

```
sudo apt remove mplayer
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgapt-commands-examples-6-e1499720021872.png)

查找名为 libimobile 的相关包：

```
apt search libimobile
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgapt-commands-examples-8.png)

查看 pinta 包的相关信息：

```
apt show pinta
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgapt-commands-examples-7.png)

列出可更新的软件包：

```
apt list --upgradeable
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgapt-commands-examples-9.png)

清理不再使用的依赖和库文件：

```
sudo apt autoremove
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgapt-commands-examples-10.png)

在以上交互式输入字母 **Y** 即可开始清理。

#### 源代码安装方式

源码安装（.tar、tar.gz、tar.bz2、tar.Z）

首先解压缩源码压缩包然后通过tar命令来完成

a．解xx.tar.gz：tar zxf xx.tar.gz

b．解xx.tar.Z：tar zxf xx.tar.Z

c．解xx.tgz：tar zxf xx.tgz

d．解xx.bz2：bunzip2 xx.bz2

e．解xx.tar：tar xf xx.tar

然后进入到解压出的目录中，建议先读一下README之类的说明文件，因为此时不同源代码包或者预编译包可能存在差异，然后建议使用ls -F --color或者ls -F命令（实际上我的只需要 l 命令即可）查看一下可执行文件，可执行文件会以*号的尾部标志。

一般依次执行：

./configure （检查编译环境）

make （对源代码进行编译）

sudo make install （将生成的可执行文件安装到当前计算机中）

make clean (选择执行，主要是用来清除一些临时文件)

即可完成安装。

**解释：**

1、configure，这一步一般用来生成 Makefile，为下一步的编译做准备，你可以通过在 configure 后加上参数来对安装进行控制，比如代码:./configure –prefix=/usr 意思是将该软件安装在 /usr 下面，执行文件就会安装在 /usr/bin （而不是默认的 /usr/local/bin),资源文件就会安装在 /usr/share（而不是默认的/usr/local/share）。同时一些软件的配置文件你可以通过指定 –sys-config= 参数进行设定。有一些软件还可以加上 –with、–enable、–without、–disable 等等参数对编译加以控制，你可以通过允许 ./configure –help 察看详细的说明帮助。

2、make，这一步就是编译，大多数的源代码包都经过这一步进行编译（当然有些perl或python编写的软件需要调用perl或python来进行编译）。如果 在 make 过程中出现 error ，你就要记下错误代码（注意不仅仅是最后一行），然后你可以向开发者提交 bugreport（一般在 INSTALL 里有提交地址），或者你的系统少了一些依赖库等，这些需要自己仔细研究错误代码。

3、make insatll，这条命令来进行安装（当然有些软件需要先运行 make check 或 make test 来进行一些测试），这一步一般需要你有 root 权限（因为要向系统写入文件）。

#### 二进制安装

二进制包的安装比较简单，我们需要做的只是将从网络上下载的二进制包解压后放到合适的目录，然后将包含可执行的主程序文件的目录添加进PATH环境变量即可。

### 常用的程序软件

#### nginx

> Nginx是一款轻量级的Web服务器、反向代理服务器，由于它的内存占用少，启动极快，高并发能力强，在互联网项目中广泛应用。

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-e1826bab1d07df8e97d61aa809b94a10_1440w.jpg)架构图

上图基本上说明了当下流行的技术架构，其中Nginx有点入口网关的味道。

##### 反向代理服务器？

经常听人说到一些术语，如反向代理，那么什么是反向代理，什么又是正向代理呢？

**正向代理：**

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-c8ac111c267ae0745f984e326ef0c47f_1440w.jpg)正向代理示意图

**反向代理：**

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-4787a512240b238ebf928cd0651e1d99_1440w.jpg)反向代理示意图

由于防火墙的原因，我们并不能直接访问谷歌，那么我们可以借助VPN来实现，这就是一个简单的正向代理的例子。这里你能够发现，正向代理“代理”的是客户端，而且客户端是知道目标的，而目标是不知道客户端是通过VPN访问的。

当我们在外网访问百度的时候，其实会进行一个转发，代理到内网去，这就是所谓的反向代理，即反向代理“代理”的是服务器端，而且这一个过程对于客户端而言是透明的。

##### Nginx的Master-Worker模式

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-0951372e22a6314b1e9b520b3cd6b3b6_1440w.jpg)nginx进程

启动Nginx后，其实就是在80端口启动了Socket服务进行监听，如图所示，Nginx涉及Master进程和Worker进程。

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-b24eb2b29b48f59883232a58392ddae3_1440w.jpg)Master-Worker模式

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-d21393745de9c470934575ef76cefd29_1440w.jpg)nginx.conf

Master进程的作用是？

**读取并验证配置文件nginx.conf；管理worker进程；**

Worker进程的作用是？

**每一个Worker进程都维护一个线程（避免线程切换），处理连接和请求；注意Worker进程的个数由配置文件决定，一般和CPU个数相关（有利于进程切换），配置几个就有几个Worker进程。**

##### Nginx如何做到热部署？

所谓热部署，就是配置文件nginx.conf修改后，不需要stop Nginx，不需要中断请求，就能让配置文件生效！（nginx -s reload 重新加载/nginx -t检查配置/nginx -s stop）

通过上文我们已经知道worker进程负责处理具体的请求，那么如果想达到热部署的效果，可以想象：

方案一：

修改配置文件nginx.conf后，主进程master负责推送给woker进程更新配置信息，woker进程收到信息后，更新进程内部的线程信息。（有点valatile的味道）

方案二：

修改配置文件nginx.conf后，重新生成新的worker进程，当然会以新的配置进行处理请求，而且新的请求必须都交给新的worker进程，至于老的worker进程，等把那些以前的请求处理完毕后，kill掉即可。

Nginx采用的就是方案二来达到热部署的！

##### Nginx如何做到高并发下的高效处理？

上文已经提及Nginx的worker进程个数与CPU绑定、worker进程内部包含一个线程高效回环处理请求，这的确有助于效率，但这是不够的。

**作为专业的程序员，我们可以开一下脑洞：BIO/NIO/AIO、异步/同步、阻塞/非阻塞...**

要同时处理那么多的请求，要知道，有的请求需要发生IO，可能需要很长时间，如果等着它，就会拖慢worker的处理速度。

**Nginx采用了Linux的epoll模型，epoll模型基于事件驱动机制，它可以监控多个事件是否准备完毕，如果OK，那么放入epoll队列中，这个过程是异步的。worker只需要从epoll队列循环处理即可。**

##### Nginx挂了怎么办？

Nginx既然作为入口网关，很重要，如果出现单点问题，显然是不可接受的。

答案是：**Keepalived+Nginx实现高可用**。

Keepalived是一个高可用解决方案，主要是用来防止服务器单点发生故障，可以通过和Nginx配合来实现Web服务的高可用。（其实，Keepalived不仅仅可以和Nginx配合，还可以和很多其他服务配合）

Keepalived+Nginx实现高可用的思路：

第一：请求不要直接打到Nginx上，应该先通过Keepalived（这就是所谓虚拟IP，VIP）

第二：Keepalived应该能监控Nginx的生命状态（提供一个用户自定义的脚本，定期检查Nginx进程状态，进行权重变化,，从而实现Nginx故障切换）

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-ec3208d1ea659d126fe2a008ec5ae927_1440w.jpg)Keepalived+Nginx

##### nginx.conf

很多时候，在开发、测试环境下，我们都得自己去配置Nginx，就是去配置nginx.conf。

nginx.conf是典型的分段配置文件，下面我们来分析下。

##### 虚拟主机

http的server段

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-b418e69a42a65f033cfdf3b80b988d83_1440w.jpg)

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-bec9b433b145d892b4eddfaf5b2aee1e_1440w.jpg)访问结果

其实这是把Nginx作为web server来处理静态资源。

第一：location可以进行正则匹配，应该注意正则的几种形式以及优先级。（这里不展开）

第二：Nginx能够提高速度的其中一个特性就是：动静分离，就是把静态资源放到Nginx上，由Nginx管理，动态请求转发给后端。

**第三：我们可以在Nginx下把静态资源、日志文件归属到不同域名下（也即是目录），这样方便管理维护。**

**第四：Nginx可以进行IP访问控制，有些电商平台，就可以在Nginx这一层，做一下处理，内置一个黑名单模块，那么就不必等请求通过Nginx达到后端在进行拦截，而是直接在Nginx这一层就处理掉。**

##### 反向代理【proxy_pass】

所谓反向代理，很简单，其实就是在location这一段配置中的root替换成**proxy_pass**即可。root说明是静态资源，可以由Nginx进行返回；而proxy_pass说明是动态请求，需要进行转发，比如代理到Tomcat上。

反向代理，上面已经说了，过程是透明的，比如说request -> Nginx -> Tomcat，那么对于Tomcat而言，请求的IP地址就是Nginx的地址，而非真实的request地址，这一点需要注意。不过好在Nginx不仅仅可以反向代理请求，还可以由用户**自定义设置HTTP HEADER**。

##### 负载均衡【upstream】

上面的反向代理中，我们通过proxy_pass来指定Tomcat的地址，很显然我们只能指定一台Tomcat地址，那么我们如果想指定多台来达到负载均衡呢？

第一，通过**upstream**来定义一组Tomcat，并指定负载策略（IPHASH、加权论调、最少连接），健康检查策略（Nginx可以监控这一组Tomcat的状态）等。

第二，将proxy_pass替换成upstream指定的值即可。

**负载均衡可能带来的问题？**

负载均衡所带来的明显的问题是，一个请求，可以到A server，也可以到B server，这完全不受我们的控制，当然这也不是什么问题，只是我们得注意的是：**用户状态的保存问题，如Session会话信息，不能在保存到服务器上。**

##### 缓存

缓存，是Nginx提供的，可以加快访问速度的机制，说白了，在配置上就是一个开启，同时指定目录，让缓存可以存储到磁盘上。具体配置，大家可以参考Nginx官方文档，这里就不在展开了。

#### pm2

> 如果直接通过node app来启动，如果报错了可能直接停在整个运行，supervisor感觉只是拿来用作开发环境的。再网上找到pm2.目前似乎最常见的线上部署nodejs项目的有forever,pm2这两种。
> 使用场合:
>
> - supervisor是开发环境用。
> - forever管理多个站点，每个站点访问量不大，不需要监控。
> - pm2 网站访问量比较大,需要完整的监控界面。

##### PM2的主要特性:

- 内建负载均衡（使用Node cluster 集群模块）
- 后台运行
- 0秒停机重载，我理解大概意思是维护升级的时候不需要停机.
- 具有Ubuntu和CentOS 的启动脚本
- 停止不稳定的进程（避免无限循环）
- 控制台检测
- 提供 HTTP API
- 远程控制和实时的接口API ( Nodejs 模块,允许和PM2进程管理器交互 )

1.pm2 是什么？

日常开发中需要启动一个node项目，需要用npm run …,，如果终端被关掉，程序也就自动停止，有时候几个项目一起跑起来，好几个终端开着，个人不太喜欢，有一神器可以解决：[pm2](http://pm2.keymetrics.io/docs/usage/quick-start/#usage)。pm2 是一个带有负载均衡功能的Node应用的进程管理器.当你要把你的独立代码利用全部的服务器上的所有CPU，并保证进程永远都活着，0秒的重载， PM2是完美的。它非常适合IaaS结构，但不要把它用于PaaS方案。

2.安装

npm install -g pm2

3.日常使用

由于node的百花齐放，启动一个网站的办法，也会有很多种。

直接运行js文件

```
pm2 start index.js
```

运行命令：

这里先以：npm run dev为例：

首先查看项目的package.json文件：

```
 "scripts": {
    "dev": "node build/dev-server.js --env=local",
    "start": "node build/dev-server.js --env=local",
    "build": "node build/build.js --env=publish",
    "build-local": "node build/build.js"
  },
```

npm run dev 实际就是运行node脚步文件：dev-server.js，

可以用pm2启动：pm2 start build/dev-server.js，可以给这个进程取一个自己记得能理解的名字：pm2 start build/dev-server.js --name XXX，（XXX是你定义的名字）

如果你的node项目配置文件和以上代码不一样，，，莫急，pm2 也是有办法可以启动的（个人觉得这是一个万能的启动的方法）：

```
pm2 start npm -- run XXX
```

用她替代：npm run dev，就可以写成：pm2 start npm -- run dev，项目启动：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img886977-20171128142359222-1681967336.png)

虽然项目启动了，但是名字并不是我想要的（我需要个自己能记得住的名字，并且是一个项目一个专属name），这时候可以用：

```
pm2 start npm --watch --name XXX -- run start
```

项目启动：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img886977-20171128142937706-1378783035.png)

OK pm2的项目启动大概就这些了，日常还有些常用指令，如：

查看所用已启动项目：

pm2 list

重启：

pm2 restart XXX

停止：

pm2 stop XXX

删除

pm2 delete XXX

……

如果不记得了，直接在控制台输入：pm2，控制台会给出日常指令，并且会对这些指令给出对应说明：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img886977-20171128144602159-703381003.png)

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1240.png)


`$ pm2 monit` 监视每个node进程的CPU和内存的使用情况

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1240-165673443134114.png)


`$ pm2 logs` 显示所有进程日志
`$ pm2 stop all` 停止所有进程
`$ pm2 restart all` 重启所有进程
`$ pm2 reload all` 0秒停机重载进程 (用于 NETWORKED 进程)
`$ pm2 stop 0` 停止指定的进程
`$ pm2 restart 0` 重启指定的进程
`$ pm2 startup` 产生 init 脚本 保持进程活着
`$ pm2 web` 运行健壮的 computer API endpoint
`$ pm2 delete 0` 杀死指定的进程
`$ pm2 delete all` 杀死全部进程

运行进程的不同方式：
`$ pm2 start app.js -i max` 根据有效CPU数目启动最大进程数目
`$ pm2 start app.js -i 3` 启动3个进程
`$ pm2 start app.js -x` 用fork模式启动 app.js 而不是使用 cluster
`$ pm2 start app.js -x -- -a 23` 用fork模式启动 app.js 并且传递参数 (-a 23)
`$ pm2 start app.js --name serverone` 启动一个进程并把它命名为 serverone
`$ pm2 stop serverone` 停止 serverone 进程
`$ pm2 start app.json` 启动进程, 在 app.json里设置选项
`$ pm2 start app.js -i max -- -a 23` 在--之后给 app.js 传递参数
`$ pm2 start app.js -i max -e err.log -o out.log` 启动 并 生成一个配置文件

###### 配置pm2启动文件

在项目根目录添加一个processes.json：
内容如下:

```
{
  "apps": [
    {
      "name": "mywork",
      "cwd": "/srv/node-app/current",
      "script": "bin/www",
      "log_date_format": "YYYY-MM-DD HH:mm Z",
      "error_file": "/var/log/node-app/node-app.stderr.log",
      "out_file": "log/node-app.stdout.log",
      "pid_file": "pids/node-geo-api.pid",
      "instances": 6,
      "min_uptime": "200s",
      "max_restarts": 10,
      "max_memory_restart": "1M",
      "cron_restart": "1 0 * * *",
      "watch": false,
      "merge_logs": true,
      "exec_interpreter": "node",
      "exec_mode": "fork",
      "autorestart": false,
      "vizion": false
    }
  ]
}
```

说明:

- apps:json结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用
- name:应用程序名称
- cwd:应用程序所在的目录
- script:应用程序的脚本路径
- log_date_format:
- error_file:自定义应用程序的错误日志文件
- out_file:自定义应用程序日志文件
- pid_file:自定义应用程序的pid文件
- instances:
- min_uptime:最小运行时间，这里设置的是60s即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启max_restarts设置数量
- max_restarts:设置应用程序异常退出重启的次数，默认15次（从0开始计数）
- cron_restart:定时启动，解决重启能解决的问题
- watch:是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。
- merge_logs:
- exec_interpreter:应用程序的脚本类型，这里使用的shell，默认是nodejs
- exec_mode:应用程序启动模式，这里设置的是cluster_mode（集群），默认是fork
- autorestart:启用/禁用应用程序崩溃或退出时自动重启
- vizion:启用/禁用vizion特性(版本控制)

可以通过`pm2 start processes.json`来启动。
也可以把命令写在package.json里。如下:

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1240-165673443134115.png)

通过`npm run pm2`来启动。

### Linux的进程管理

**1.进程的定义：**

软件运行时所占用的独立的系统资源（cpu 内存 磁盘输入输出设备等），称为进程。（一个线程只能属于一个进程，一个进程可以有多个线程。）

**2.启动并运行软件**

Ubuntu：systemctl start 运行的软件名

e.g:systemctl start networking

**3.查看进程   **ps

![image-20220702105113114](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220702105113114.png)

**4.查看软件的运行状态**

systemctl status 运行软件名

e.g：systemctl status networking

**5.终止程序的执行**

systemctl stop 服务名称或软件名称

**6.临时修改服务状态**

./服务名称或进程名称 status

**7.重新启动服务**

./服务名 restart

**8.设置自启软件【超级用户的权限】**

systemctl enable 服务名称

**9.top命令**

top

[pid:软件运行进程号]

**10.静态的查看进程**

ps -A#查看所有进程

**11.查看指定进程**

ps -A|grep 服务名

**12.杀死进程**

kill 进程名称

pkill 进程名称

### 管道符|

#### 管道符介绍

管道符`|`，也是Shell命令。

管道符的作用是链接多个命令，把命令1的结果作为命令2的操作对象。

```
命令格式：命令1 | 命令2
命令1的正确输出作为命令2的操作对象
```

> 提示：
>
> 管道符的基本作用和之前说过的`-exec`选项的基本作用是一样的。命令1的结果作为命令2的操作对象的这种操作称为`文本流操作`（就相当于流水线，第一个人操作完流水线转给第二个人操作）。但是`find`命令不支持文本流操作，在`find`命令中加入管道符，输出的结果是不正确的，所以在`find`命令中添加了`-exec \;`模拟管道符的作用。

#### 管道符应用

**（1）例子1：**

举个例子，我们经常需要使用`ll`命令查看文件的长格式，不过在有些目录中文件众多，比如`/etc/`目录，使用`ll`命令显示的内容就会非常多，只能看到最后的内容，而不能看到前面输出的内容。

这时我们马上想到`more`命令可以分屏显示文件内容，可是怎么让`more`命令分屏显示命令的输出呢？

> 注意：`more`命令是分屏显示文件中的数据，是显示字符串。而`ll`命令是输出的是命令的结果（也就是输出的是文件名）。

我想到了一种笨办法：

```
#用输出重定向，把ll命令的输出保存到/root/testfile文件中
[root@localhost ~]# ll -a /etc/ >> /root/testfile#既然testfile是文件，当然可以用more命合分屏显示了
[root@localhost ~]# more /root/testfile
总用量1784
drwxr-xr-x.105 root root 12288 10月 21 12：49.
dr-xr-xr-x.26 root root 4096 6月 5 19：06..
.…首路部分输出…
-rwxr-xr-x.1 root root 687 6月22 2012 auto.smb
--More--（7%）
```

可是这样操作实在不方便，这时就可以利用管道符了。

命令如下：

```
[root@localhost ~]# ll -a /etc/ | more
```

因为管道符是文本流操作，管道符把前边 `ll`命令的结果转换成文本，然后供`more`命令分屏显示。

**（2）例子2：**

通过`ll命令`，在显示`/etc/`文件夹里文件的结果中，搜索`yum`的文件名，应该使用`find`命令还是`grep`命令？

通过上边的提示，`find`命令是搜索文件名，`grep`命令是搜索文本内容的，管道符是文本流操作，之后都是文本结果（也就是字符串），所以需要用`grep`命令。还有就是`find`命令也不支持管道符操作。

```
[root@localhost ~ ] #ll -a /etc/ | grep yum
```

**（3）例子3：**

`netstat`命令（`CentOS 7`中，需要安装`net-snmp.x86_64`，`net-tools.x86_64`两个包才有此命令。7.5系统中已经自动安装）格式如下：

`netstat`命令是一个非常重要和常见的查询网络状态的网络命令。

`netstat`命令格式：

```
[root@localhost ~]# netstat [选项]选项：
  -a：列出所有网络状态，包括 Socket程序
  -c秒数：指定每隔几秒刷新一次网络状态
  -n：使用Ip地址和端口号显示，不使用域名与服务名
  -p：显示PID和程序名
  -t：显示使用TCP协议端口的连接状况-u：显示使用UDP协议端口的连接状况
  -1：仅显示监听状态的连接
  -r：显示路由表
```

示例：

```
# 需求：查看当前远程登陆有多少人
[root@localhost ~]# netstat -an | grep "ESTABLISHED" | wc -l# 网络中为ESTABLISHED状态的，表示是远程链接。
# wc -l ：统计有多少行。# 查询系统中所有开启的端口。
[root@DevOps ~]# netstat -tuln
```

