## TCP

### 简介

> TCP位于TCP/IP模型的传输层，它是一种面向连接的端到端协议。TCP作为传输控制协议，可以为主机提供可靠的数据传输。

![](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimgimage-20220917183052789.png)

**1.TCP的主要特点**

> TCP是TCP/IP体系中非常复杂的一个协议，下面介绍TCP最主要的几个特点。

（1）支持面向连接的传输服务
应用程序在使用TCP提供的服务传送数据之前，必须先建立TCP连接。类似于日常生活中的电话通信，在进行通话之前需要先建立连接，双方知道电话已接通，开始语音对话，电话结束之后还要挂机释放连接。TCP提供服务之前建立连接的目的是通信双方为接下来的数据传送做好准备，初始化各种状态变量，分配缓存等资源。

（2）支持全双工通信
TCP允许通信双方的应用进程在任何时候都能发出数据。由于通信双方都设置有发送和接收缓冲区，应用程序将要发送的数据字节提交给发送缓冲区，就可以去进行别的进程，而TCP会在合适的时候把数据发送出去。在接收方，TCP把数据放入缓存，上层的应用程序在合适的时候读取缓存中的数据。

（3）支持同时建立多个并发的TCP连接
TCP协议支持同时建立多个连接，特别是服务器端，一般会用套接字来唯一标识端点，所以一条TCP连接由两个套接字地址标识。

（4）支持可靠的传输服务

TCP协议是一种可靠的传输服务协议，它使用了确认重传的机制，保证通过TCP连接传送的数据无差错、不丢失、不重复，并且按序到达。

（5）支持字节流的传输

面向字节流的含义是：虽然应用程序和TCP的交互是一次一个数据块（大小不等），但TCP把应用程序传输的数据看成是一连串无结构的字节流，TCP不保证接收方应用程序所收到的数据块和发送方发出的数据块具有对应大小的关系，

例如，发送方应用程序交给接收方的TCP共12个数据块，而接收方的应用程序是分5次，即5个数据块从TCP接收方缓存中将数据读取完毕。但发送方和接收方应用程序发送和接收的字节流是完全一样的。

流（Stream）相当于一个管道，从一端放入内容，从另一端可以照原样取出内容，它描述了一个不出现丢失、重复和乱序的数据传输过程。

综上所述，TCP协议的特点是：面向连接、面向字节流、支持全双工、支持并发连接、提供确认重传机制和拥塞流量控制。

**2.TCP的数据报格式**

> TCP虽然是面向字节流的，但TCP传送的数据单元却是报文段。
> TCP报文段由TCPHeader（头部）和TCP Data（数据）组成。
>
> TCP最多可以有60个字节的头部，前20个字节是固定的。后面的Options为可选项字段，长度为4*N字节（N必须是整数），最多为40字节。

如图4-24所示为TCP报文段及其首部的结构。

**（1）Source Port（源端口号）和Destination Port（目的端口号）**
源端口和目的端口字段各占2字节，分别表示发送与接收该报文段的应用进程的TCP端口号。每个TCP头部都包含源端和目的端的端口号，这两个值加上IP头部中的源IP地址和目的IP地址就可以唯一确定一个TCP连接。

**（2）Sequence Number（序号 seq）**
序号字段占4字节。TCP是面向数据流的，TCP传送的报文段可看成连续的数据流，在一个TCP连接中传送的数据流中的每一个字节都按顺序编号。首部中序号字段的值则指的是本报文段所发送的数据的第一个字节的序号，用于标识从发送端发出的不同的TCP数据段的序号。数据段在网络中传输时，它们的顺序可能会发生变化；接收端依据此序列号，便可按照正确的顺序重组数据。

**（3）Acknowledge Number（确认号 ack）**
确认号字段占4字节，用于标识接收端确认收到的数据段。确认序列号为成功收到的数据序列号加1，也就是期望收到发送方的下一个报文段的第一个数据字节的序号，这就是网络协议中典型的捎带确认方法。

**（4）Header length（首部长度）**
首部长度占4位，又称数据偏移，它指出TCP报文段的数据起始处距离TCP文段的起始处的偏移量。数据偏移的单位是32位字（以4字节为计算单位），实际报头长度是20～60字节，故该字段值是在5～15之间。

**（5）Resv（保留）**
保留字段占6位，保留为今后使用，但目前应置为0。
**（6）URG（紧急）**
当URG=1时，表明紧急指针字段有效。它告诉系统此报文段中有紧急数据，应尽快交付给应用程序（相当于高优先级的数据），而不需按序从接收缓存中读取。URG位与紧急指针一起使用。

**（7）ACK（确认）**
只有当ACK=1时确认号字段才有效。当ACK=0时，确认号无效。按照TCP的规定，在TCP连接建立之后发送的所有报文段的ACK位都置为1。
**（8）PSH（推送）**
当两个进程进行交互式通信时，一端应用进程希望在输入一个命令之后，能够立即得到对方的响应时，就将PSH置1，并立即创建一个报文段发送到对方；接收TCP收到PSH=1的报文段，就尽快地交付接收到的应用进程，而不再等到整个缓存都填满之后再向上交付，请求尽快应答。

**（9）RST（复位）**
当RST=1时，有两种含义：一是表明TCP连接中出现严重差错（如由于主机崩溃或其他原因），必须释放连接，然后再重新建立运输连接；二是拒绝一个非法TCP报文或拒绝释放一个连接。
**（10）SYN（同步）**
同步SYN=1表示这是一个连接请求或连接接收报文。SYN=1，ACK=0表示是一个连接建立请求报文；同意建立连接的响应报文为SYN=1，ACK=1。
**（11）FIN（终止）**
终止FIN位用来释放一个连接。FIN=1表明此报文段发送端的数据已发送完毕，并要求释放运输连接。

**（12）Window（窗口）**
窗口字段长度占2字节，窗口值指示发送该报文段一方的接收窗口大小，单位为字节。由于该字段为16位，所以窗口的最大值为65535B。窗口字段用来控制对方发送的数据量（从确认号开始，允许对方发送的数据量），反映了接收方接收缓存的可用空间大小。该机制通常用来进行流量控制。发送端将根据接收端通知的窗口值

例如：结点A发送给结点B的TCP报文的报头中确认号的值是450，窗口字段的值为1000，这表明，下一次结点B要向结点A发送的TCP报文段时，字段第一个字节号应该是450，字段的最大长度为1000，最后一个字节号最大为1449。

**（13）Checksum（校验和）**
校验和字段占2字节，检检验和字段校验整个TCP报文段，包括TCP头部和TCP数据。在计算校验和时，要在TCP报文段的前面加上12字节的伪首部，而且该字段是必需的。该值由发送端计算和记录并由接收端进行验证。

**（14）Urgent Pointer（紧急指针）**
紧急指针字段占16位，只有当紧急标志位URG=1时，该字段才有效，指出在本报文段中紧急数据共有多少个字节（紧急数据放在本报文段数据的最前面）。

**（15）Options（可选项）**
该字段长度可变，最大40B，也就是在TCP报头中有多达40B的选项字段。这里只介绍一个选项，即MSS，该选项TCP对报文数据部分最大长度有一个规定，称为最大段长度（Maximum Segment Size，MSS）。MSS告诉对方TCP：“我的缓存所能接收的报文段的数据字段最大长度是MSS个字节。”如果确定MSS值是100B，则整个TCP报文段长度可能是120～160B，具体值取决于报头的实际长度。

MSS值的选择并不简单，若太小，会导致网络的利用率降低，因为报头会占用大部分开销。反过来，若TCP报文段非常长，那么交付给IP层传输时就有可能被分解成多个短数据报片，目的站将收到的各个短数据报片装配成原来的TCP报文段，如果传输出错还要重传，这些也会使开销增大。一般情况下，MSS值选取时应尽可能大些，在IP层传输时不需要再分片就行。在TCP连接建立的过程中，双方可以将自己能够支持的MSS写入可选项字段，在进行数据传输时，MSS会取双方提出的较小的那个数值。若未设置，则MSS的默认值为536B，再加上20B的报头长度，则默认的报文段长度为556B。

**（16）Padding（填充）**
填充字段是为了使整个首部长度是4B的整数倍。
**常用的6 种标示：SYN(建立联机) ACK(确认) PSH(传送) FIN(结束) RST(重置) URG(紧急)**

### TCP 三次握手

![](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20220917182405.png)

注：seq：是数据的序号开头，ack是接收成功确认号，这时传输的字节数为0，所以ack + 1即可

**第一次握手**

客户端向服务器发出连接请求报文，这时报文首部中的同部位 SYN=1，同时随机生成初始序列号 seq=x，此时，TCP 客户端进程进入了 SYN-SENT(同步已发送状态)状态。TCP 规定，SYN 报文段(SYN=1 的报文段)不能携带数据，但需要消耗掉一个序号。这个三次握手中的开始。表示客户端想要和服务端建立连接。
**第二次握手**

TCP 服务器收到请求报文后，如果同意连接，则发出确认报文。确认报文中应该 ACK=1，SYN=1，确认号是 ack=x+1，同时也要为自己随机初始化一个序列号 seq=y，此时，TCP 服务器进程进入了 SYN-RCVD(同步收到)状态。这个报文也不能携带数据，但是同样要消耗一个序号。这个报文带有 SYN(建立连接)和 ACK(确认)标志，询问客户端是否准备好。

**第三次握手**

TCP 客户进程收到确认后，还要向服务器给出确认。确认报文的 ACK=1，ack=y+1，此时，TCP 连接建立，客户端进入 ESTABLISHED(已建立连接)状态。

TCP 规定，ACK 报文段可以携带数据，但是如果不携带数据则不消耗序号。这里客户端表示我已经准备好。

**记忆思路：**

​		两端都需要知道对方的接收和发送能力

​		1、客户端发送第一次握手，服务器接收到就知道了客户端的发送能力

​		2、服务器发送第二次握手，客户端接收到就知道了服务器的接收、发送能力

​		3、客户端发送第三次握手，这时服务器接收到就知道客户端的接收能力了

​		经过三次握手就能知道双方的接收发送能力都正常了，就可以建立连接了

**思考：为什么要三次握手呢，有人说两次握手就好了**

举例：已失效的连接请求报文段。

当没有第三次握手，那么服务器便无法确定客户端的接收能力，client 发送了第一个连接的请求报文，但是由于网络不好，这个请求没有立即到达服务端，而是在某个网络节点中滞留了，直到某个时间才到达 server，本来这已经是一个失效的报文，但是 server 端接收到这个请求报文后，还是会向 client 发出确认的报文，表示同意连接。假如不采用三次握手，那么只要 server 发出确认，新的建立就连接了，但其实这个请求是失效的请求，client 是不会理睬 server 的确认信息，也不会向服务端发送确认的请求，但是 server 认为新的连接已经建立起来了，并一直等待 client 发来数据，这样，server 的很多资源就没白白浪费掉了，采用三次握手就是为了防止这种情况的发生，server 会因为收不到确认的报文，就知道 client 并没有建立连接。这就是三次握手的作用。

### TCP 数据的传输过程

建立连接后，两台主机就可以相互传输数据了。如下图所示(本篇博客图片都是引用它人图片)：

![image-20220917183837776](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917183837776.png)

1、主机 A 初始 seq 为 1200，滑动窗体为 100，向主机 B 传递数据的过程。

2、假设主机 B 在完全成功接收数据的基础上，那么主机 B 为了确认这一点，向主机 A 发送 ACK 包，并将 ack 号设置为 1301。因此按如下的公式确认 ack 号：

**ack 号 = qeq 号 + 传递的字节数 + 1 (这是在完全接受成功的情况下)**

3、主机 A 获得 B 传来的 ack(1301) 后，开始发送 seq 为 1301，滑动窗体为 100 的数据。
与三次握手协议相同，最后加 1 是为了告诉对方要传递的 seq 号。上面说了，主机 B 完全成功接收 A 发来的数据才是这样的，如果存在丢包该如何？

下面分析传输过程中数据包丢失的情况，如下图所示：

![d1f6deb9c8e0bb87459d4f14a205491c.png](https://img-blog.csdnimg.cn/img_convert/d1f6deb9c8e0bb87459d4f14a205491c.png)

上图表示通过 seq 1301 数据包向主机 B 传递 100 字节的数据，但中间发生了错误，主机 B 未收到。经过一段时间后，主机 A 仍未收到对于 seq 1301 的 ACK 确认，因此尝试重传数据。为了完成数据包的重传，TCP 套接字每次发送数据包时都会启动定时器，如果在一定时间内没有收到目标机器传回的 ACK 包，那么定时器超时，数据包会重传。

当然上面也只是一种可能

### TCP 的四次挥手

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220918131005320.png" alt="image-20220918131005320" style="zoom:80%;" />

**第一次挥手**

TCP 发送一个 FIN(结束)，用来关闭客户到服务端的连接。

客户端进程发出连接释放报文，并且停止发送数据。释放数据报文首部，FIN=1，其序列号为 seq=u(等于前面已经传送过来的数据的最后一个字节的序号加 1)，此时，客户端进入 FIN-WAIT-1(终止等待 1)状态。TCP 规定，FIN 报文段即使不携带数据，也要消耗一个序号。

**第二次挥手**

服务端收到这个 FIN，他发回一个 ACK(确认)，确认收到序号为收到序号+1，和 SYN 一样，一个 FIN 将占用一个序号。

服务器收到连接释放报文，发出确认报文，ACK=1，ack=u+1，并且带上自己的序列号 seq=v，此时，服务端就进入了 CLOSE-WAIT(关闭等待)状态。TCP 服务器通知高层的应用进程，客户端向服务器的方向就释放了，这时候处于半关闭状态，即客户端已经没有数据要发送了，但是服务器若发送数据，客户端依然要接受。这个状态还要持续一段时间，也就是整个 CLOSE-WAIT 状态持续的时间。

客户端收到服务器的确认请求后，此时，客户端就进入 FIN-WAIT-2(终止等待 2)状态，等待服务器发送连接释放报文(在这之前还需要接受服务器发送的最后的数据)。

**第三次挥手**

服务端发送一个 FIN(结束)到客户端，服务端关闭客户端的连接。

服务器将最后的数据发送完毕后，就向客户端发送连接释放报文，FIN=1，ack=u+1，由于在半关闭状态，服务器很可能又发送了一些数据，假定此时的序列号为 seq=w，此时，服务器就进入了 LAST-ACK(最后确认)状态，等待客户端的确认。

**第四次挥手**

客户端发送 ACK(确认)报文确认，并将确认的序号+1，这样关闭完成。

客户端收到服务器的连接释放报文后，必须发出确认，ACK=1，ack=w+1，而自己的序列号是 seq=u+1，此时，客户端就进入了 TIME-WAIT(时间等待)状态。注意此时 TCP 连接还没有释放，必须经过 2*MSL(最长报文段寿命)的时间后，当客户端撤销相应的 TCB 后，才进入 CLOSED 状态。

服务器只要收到了客户端发出的确认，立即进入 CLOSED 状态。同样，撤销 TCB 后，就结束了这次的 TCP 连接。可以看到，服务器结束 TCP 连接的时间要比客户端早一些。

**思考：那么为什么是 4 次挥手呢？**

为了确保数据能够完成传输。

关闭连接时，当收到对方的 FIN 报文通知时，它仅仅表示对方没有数据发送给你了；但未必你所有的数据都全部发送给对方了，所以你可能未必会马上会关闭 SOCKET，也即你可能还需要发送一些数据给对方之后，再发送 FIN 报文给对方来表示你同意现在可以关闭连接了，所以它这里的 ACK 报文和 FIN 报文多数情况下都是分开发送的。

可能有人会有疑问，tcp 我握手的时候为何 ACK(确认)和 SYN(建立连接)是一起发送。挥手的时候为什么是分开的时候发送呢。

因为当 Server 端收到 Client 端的 SYN 连接请求报文后，可以直接发送 SYN+ACK 报文。其中 ACK 报文是用来应答的，SYN 报文是用来同步的。但是关闭连接时，当 Server 端收到 FIN 报文时，很可能并不会立即关闭 SOCKET，所以只能先回复一个 ACK 报文，告诉 Client 端，"你发的 FIN 报文我收到了"。只有等到我 Server 端所有的报文都发送完了，我才能发送 FIN 报文，因此不能一起发送。故需要四步挥手。
**思考：TIME_WAIT的作用呢，还有为啥状态时间要保持两个MSL？**

1）TIME_WAIT的作用是为了保证最后一次挥手的ACK报文能送达给对方，如果ACK丢失，对方会超时重传FIN，主动关闭端会再次响应ACK过去；如果没有TIME_WAIT状态，直接关闭，对方重传的FIN报文则被响应一个RST报文，此RST会被动关闭端被解析成错误

2）存在两个连接，第一个连接正常关闭，第二相同的连接紧接着建立；如果第一个连接的迷路报文到来，则会干扰第二连接，等待两个MSL则可以让上次连接的报文数据消逝在网络

### TCP 和 UDP 的区别

- 基于连接与无连接：UDP 是无连接的，即发送数据之前不需要建立连接。
- TCP 保证数据正确性，UDP 可能丢包，TCP 保证数据顺序，UDP 不保证。也就是说，通过 TCP 连接传送的数据，无差错，不丢失，不重复，且按序到达；UDP 尽最大努力交付，即不保证可靠交付。TCP 通过校验和、重传控制、序号标识、滑动窗口、确认应答实现可靠传输。如丢包时的重发控制，还可以对次序乱掉的分包进行顺序控制。
- UDP 具有较好的实时性，工作效率比 TCP 高，适用于对高速传输和实时性有较高的通信或广播通信。
- 每一条 TCP 连接只能是点到点的；UDP 支持一对一，一对多，多对一和多对多的交互通信。
- TCP 对系统资源要求较多，UDP 对系统资源要求较少。

## HTTP

### 简介

[![img](https://camo.githubusercontent.com/72d5e724c89e745a53342c282a15e994ba012ff2fbc47c89b380c003d666ea98/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f66353063373166302d623230622d313165622d616239302d6439616538313462323430642e706e67)](https://camo.githubusercontent.com/72d5e724c89e745a53342c282a15e994ba012ff2fbc47c89b380c003d666ea98/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f66353063373166302d623230622d313165622d616239302d6439616538313462323430642e706e67)

`HTTP` (HyperText Transfer Protocol)，即超文本运输协议，是实现网络通信的一种规范

[![img](https://camo.githubusercontent.com/fc1d8f6b511091dbcb212708c7698c1b03509c58fe9e1a7ee40f48b8ff35b849/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f66646131313962302d623230622d313165622d383566362d3666616337376330633962332e706e67)](https://camo.githubusercontent.com/fc1d8f6b511091dbcb212708c7698c1b03509c58fe9e1a7ee40f48b8ff35b849/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f66646131313962302d623230622d313165622d383566362d3666616337376330633962332e706e67)

在计算机和网络世界有，存在不同的协议，如广播协议、寻址协议、路由协议等等......

而`HTTP`是一个传输协议，即将数据由A传到B或将B传输到A，并且 A 与 B 之间能够存放很多第三方，如： A<=>X<=>Y<=>Z<=>B

`传输的数据并不是计算机底层中的二进制包，而是完整的、有意义的数据，如HTML 文件, 图片文件, 查询结果等超文本，能够被上层应用识别`

在实际应用中，`HTTP`常被用于在`Web`浏览器和网站服务器之间传递信息，以明文方式发送内容，不提供任何方式的数据加密

特点如下：

- 支持客户/服务器模式
- 简单快速：客户向服务器请求服务时，只需传送请求方法和路径。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快
- 灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记
- 无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间
- 无状态：HTTP协议无法根据之前的状态进行本次的请求处理

### HTTP请求过程

> 1）解析域名 -> 2）发起TCP三次握手，建立连接 -> 3）基于TCP发起HTTP请求 -> 4）服务器响应HTTP请求，并返回数据 -> 5）客户端解析返回数据

![image-20220917183911329](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917183911329.png)

###  HTTPS

在上述介绍`HTTP`中，了解到`HTTP`传递信息是以明文的形式发送内容，这并不安全。而`HTTPS`出现正是为了解决`HTTP`不安全的特性

为了保证这些隐私数据能加密传输，让`HTTP`运行安全的`SSL/TLS`协议上，即 HTTPS = HTTP + SSL/TLS，通过 `SSL`证书来验证服务器的身份，并为浏览器和服务器之间的通信进行加密

`SSL` 协议位于` TCP/IP` 协议与各种应用层协议之间，浏览器和服务器在使用 `SSL` 建立连接时需要选择一组恰当的加密算法来实现安全通信，为数据通讯提供安全支持

[![img](https://camo.githubusercontent.com/74467b23b30f05f5a1b441acbab976cba8bebf22635ff1bb9ecaaae7ac0335a5/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f30373863353063302d623230632d313165622d616239302d6439616538313462323430642e706e67)](https://camo.githubusercontent.com/74467b23b30f05f5a1b441acbab976cba8bebf22635ff1bb9ecaaae7ac0335a5/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f30373863353063302d623230632d313165622d616239302d6439616538313462323430642e706e67)

流程图如下所示：

[![img](https://camo.githubusercontent.com/8e98f093484c5552b8a77f6e51c3ee6fea8e3af2e3c23184976f111f94775a6b/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f30653430396663302d623230632d313165622d383566362d3666616337376330633962332e706e67)](https://camo.githubusercontent.com/8e98f093484c5552b8a77f6e51c3ee6fea8e3af2e3c23184976f111f94775a6b/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f30653430396663302d623230632d313165622d383566362d3666616337376330633962332e706e67)

- 首先客户端通过URL访问服务器建立SSL连接
- 服务端收到客户端请求后，会将网站支持的证书信息（证书中包含公钥）传送一份给客户端
- 客户端的服务器开始协商SSL连接的安全等级，也就是信息加密的等级
- 客户端的浏览器根据双方同意的安全等级，建立会话密钥，然后利用网站的公钥将会话密钥加密，并传送给网站
- 服务器利用自己的私钥解密出会话密钥
- 服务器利用会话密钥加密与客户端之间的通信

#### http、https区别

- HTTPS是HTTP协议的安全版本，HTTP协议的数据传输是明文的，是不安全的，HTTPS使用了SSL/TLS协议进行了加密处理，相对更安全
- HTTP 和 HTTPS 使用连接方式不同，默认端口也不一样，HTTP是80，HTTPS是443
- HTTPS 由于需要设计加密以及多次握手，性能方面不如 HTTP
- HTTPS需要SSL，SSL 证书需要钱，功能越强大的证书费用越高

### HTTP1.0/1.1/2.0 的区别

#### HTTP1.0

`HTTP`协议的第二个版本，第一个在通讯中指定版本号的HTTP协议版本

`HTTP 1.0` 浏览器与服务器只保持短暂的连接，每次请求都需要与服务器建立一个`TCP`连接

服务器完成请求处理后立即断开`TCP`连接，服务器不跟踪每个客户也不记录过去的请求

简单来讲，每次与服务器交互，都需要新开一个连接

![image-20220917183925278](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917183925278.png)

例如，解析`html`文件，当发现文件中存在资源文件的时候，这时候又创建单独的链接

最终导致，一个`html`文件的访问包含了多次的请求和响应，每次请求都需要创建连接、关系连接

这种形式明显造成了性能上的缺陷

如果需要建立长连接，需要设置一个非标准的Connection字段 `Connection: keep-alive`

#### HTTP1.1

在`HTTP1.1`中，默认支持长连接（`Connection: keep-alive`），即在一个TCP连接上可以传送多个`HTTP`请求和响应，减少了建立和关闭连接的消耗和延迟

建立一次连接，多次请求均由这个连接完成

![image-20220917183933218](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917183933218.png)

这样，在加载`html`文件的时候，文件中多个请求和响应就可以在一个连接中传输

同时，`HTTP 1.1`还允许客户端不用等待上一次请求结果返回，就可以发出下一次请求，但服务器端必须按照接收到客户端请求的先后顺序依次回送响应结果，以保证客户端能够区分出每次请求的响应内容，这样也显著地减少了整个下载过程所需要的时间

同时，`HTTP1.1`在`HTTP1.0`的基础上，增加更多的请求头和响应头来完善的功能，如下：

- 引入了更多的缓存控制策略，如If-Unmodified-Since, If-Match, If-None-Match等缓存头来控制缓存策略
- 引入range，允许值请求资源某个部分
- 引入host，实现了在一台WEB服务器上可以在同一个IP地址和端口号上使用不同的主机名来创建多个虚拟WEB站点

并且还添加了其他的请求方法：`put`、`delete`、`options`...

#### HTTP2.0

而`HTTP2.0`在相比之前版本，性能上有很大的提升，如添加了一个特性：

- 多路复用
- 二进制分帧
- 首部压缩
- 服务器推送

**多路复用**

`HTTP/2` 复用`TCP`连接，在一个连接里，客户端和浏览器都可以**同时**发送多个请求或回应，而且不用按照顺序一一对应，这样就避免了”队头堵塞”

![image-20220917183939812](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917183939812.png)

上图中，可以看到第四步中`css`、`js`资源是同时发送到服务端

**二进制分帧**

帧是`HTTP2`通信中最小单位信息

`HTTP/2` 采用二进制格式传输数据，而非 `HTTP 1.x `的文本格式，解析起来更高效

将请求和响应数据分割为更小的帧，并且它们采用二进制编码

`HTTP2 `中，同域名下所有通信都在单个连接上完成，该连接可以承载任意数量的双向数据流

每个数据流都以消息的形式发送，而消息又由一个或多个帧组成。多个帧之间可以乱序发送，根据帧首部的流标识可以重新组装，这也是多路复用同时发送数据的实现条件

**首部压缩**

`HTTP/2`在客户端和服务器端使用“首部表”来跟踪和存储之前发送的键值对，对于相同的数据，不再通过每次请求和响应发送

首部表在`HTTP/2`的连接存续期内始终存在，由客户端和服务器共同渐进地更新

例如：下图中的两个请求， 请求一发送了所有的头部字段，第二个请求则只需要发送差异数据，这样可以减少冗余数据，降低开销

![image-20220917183947280](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917183947280.png)

**服务器推送**

`HTTP2`引入服务器推送，允许服务端推送资源给客户端

服务器会顺便把一些客户端需要的资源一起推送到客户端，如在响应一个页面请求中，就可以随同页面的其它资源

免得客户端再次创建连接发送请求到服务器端获取

这种方式非常合适加载静态资源

![image-20220917183952495](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917183952495.png)

#### 四、总结

HTTP1.0：

- 浏览器与服务器只保持短暂的连接，浏览器的每次请求都需要与服务器建立一个TCP连接

HTTP1.1：

- 引入了持久连接，即TCP连接默认不关闭，可以被多个请求复用
- 在同一个TCP连接里面，客户端可以同时发送多个请求
- 虽然允许复用TCP连接，但是同一个TCP连接里面，所有的数据通信是按次序进行的，服务器只有处理完一个请求，才会接着处理下一个请求。如果前面的处理特别慢，后面就会有许多请求排队等着
- 新增了一些请求方法
- 新增了一些请求头和响应头

HTTP2.0：

- 采用二进制格式而非文本格式
- 完全多路复用，而非有序并阻塞的、只需一个连接即可实现并行
- 使用报头压缩，降低开销
- 服务器推送

### HTTP状态码

[![img](https://camo.githubusercontent.com/fe2bf6c2397ad07b2797599ac585a45e3debffe5f84f2da6f5b631d2f7032ce1/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f30333838333164302d626263392d313165622d616239302d6439616538313462323430642e706e67)](https://camo.githubusercontent.com/fe2bf6c2397ad07b2797599ac585a45e3debffe5f84f2da6f5b631d2f7032ce1/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f30333838333164302d626263392d313165622d616239302d6439616538313462323430642e706e67)

#### 一、是什么

HTTP状态码（英语：HTTP Status Code），用以表示网页服务器超文本传输协议响应状态的3位数字代码

它由 RFC 2616规范定义的，并得到 `RFC 2518`、`RFC 2817`、`RFC 2295`、`RFC 2774`与 `RFC 4918`等规范扩展

简单来讲，`http`状态码的作用是服务器告诉客户端当前请求响应的状态，通过状态码就能判断和分析服务器的运行状态

#### 二、分类

状态码第一位数字决定了不同的响应状态，有如下：

- 1 表示消息
- 2 表示成功
- 3 表示重定向
- 4 表示请求错误
- 5 表示服务器错误

###### 1xx

代表请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行结束

常见的有：

- 100（客户端继续发送请求，这是临时响应）：这个临时响应是用来通知客户端它的部分请求已经被服务器接收，且仍未被拒绝。客户端应当继续发送请求的剩余部分，或者如果请求已经完成，忽略这个响应。服务器必须在请求完成后向客户端发送一个最终响应
- 101：服务器根据客户端的请求切换协议，主要用于websocket或http2升级

###### 2xx

代表请求已成功被服务器接收、理解、并接受

常见的有：

- 200（成功）：请求已成功，请求所希望的响应头或数据体将随此响应返回
- 201（已创建）：请求成功并且服务器创建了新的资源
- 202（已创建）：服务器已经接收请求，但尚未处理
- 203（非授权信息）：服务器已成功处理请求，但返回的信息可能来自另一来源
- 204（无内容）：服务器成功处理请求，但没有返回任何内容
- 205（重置内容）：服务器成功处理请求，但没有返回任何内容
- 206（部分内容）：服务器成功处理了部分请求

###### 3xx

表示要完成请求，需要进一步操作。 通常，这些状态代码用来重定向

常见的有：

- 300（多种选择）：针对请求，服务器可执行多种操作。 服务器可根据请求者 (user agent) 选择一项操作，或提供操作列表供请求者选择
- 301（永久移动）：请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置
- 302（临时移动）： 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求
- 303（查看其他位置）：请求者应当对不同的位置使用单独的 GET 请求来检索响应时，服务器返回此代码
- 304 （缓存数据没更新）：是对客户端有缓存情况下服务端的一种响应
- 305 （使用代理）： 请求者只能使用代理访问请求的网页。 如果服务器返回此响应，还表示请求者应使用代理
- 307 （临时重定向）： 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求

###### 4xx

代表了客户端看起来可能发生了错误，妨碍了服务器的处理

常见的有：

- 400（错误请求）： 服务器不理解请求的语法
- 401（未授权）： 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。
- 403（禁止）： 服务器拒绝请求
- 404（未找到）： 服务器找不到请求的网页
- 405（方法禁用）： 禁用请求中指定的方法
- 406（不接受）： 无法使用请求的内容特性响应请求的网页
- 407（需要代理授权）： 此状态代码与 401（未授权）类似，但指定请求者应当授权使用代理
- 408（请求超时）： 服务器等候请求时发生超时

###### 5xx

表示服务器无法完成明显有效的请求。这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生

常见的有：

- 500（服务器内部错误）：服务器遇到错误，无法完成请求
- 501（尚未实施）：服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码
- 502（错误网关）： 服务器作为网关或代理，从上游服务器收到无效响应
- 503（服务不可用）： 服务器目前无法使用（由于超载或停机维护）
- 504（网关超时）： 服务器作为网关或代理，但是没有及时从上游服务器收到请求
- 505（HTTP 版本不受支持）： 服务器不支持请求中所用的 HTTP 协议版本

#### 三、适用场景

下面给出一些状态码的适用场景：

- 100：客户端在发送POST数据给服务器前，征询服务器情况，看服务器是否处理POST的数据，如果不处理，客户端则不上传POST数据，如果处理，则POST上传数据。常用于POST大数据传输
- 206：一般用来做断点续传，或者是视频文件等大文件的加载
- 301：永久重定向会缓存。新域名替换旧域名，旧的域名不再使用时，用户访问旧域名时用301就重定向到新的域名
- 302：临时重定向不会缓存，常用 于未登陆的用户访问用户中心重定向到登录页面
- 304：协商缓存，告诉客户端有缓存，直接使用缓存中的数据，返回页面的只有头部信息，是没有内容部分
- 400：参数有误，请求无法被服务器识别
- 403：告诉客户端进制访问该站点或者资源，如在外网环境下，然后访问只有内网IP才能访问的时候则返回
- 404：服务器找不到资源时，或者服务器拒绝请求又不想说明理由时
- 503：服务器停机维护时，主动用503响应请求或 nginx 设置限速，超过限速，会返回503
- 504：网关超时



### 请求类型

#### GET

`GET`方法请求一个指定资源的表示形式，使用GET的请求应该只被用于获取数据

#### POST

`POST`方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或**副作用**

本质上都是`TCP`链接，并无差别

但是由于`HTTP`的规定和浏览器/服务器的限制，导致他们在应用过程中会体现出一些区别

##### 常见的编码类型

> 在http协议中规定了GET、HEAD、POST、PUT、DELETE、CONNECT 等请求方式,其中比较常用的就是post和get，其中post用来向服务器提交数据，post只规定了提交的数据必须放在请求的主体中，但是并没有规定传输数据的编码方式。比较主流的有如下的几种编码方式。

##### text/plain

> 当我们不设置contentType时默认为此格式

**一般客户端发送此格式数据常用的有以下方式：**

**1、form enctype设为"text/plain"**

```
<!-- post信息[text/plain] -->
        <div class="upload1">
            <h3>post信息[text/plain]</h3>
            <h3>form + input方式(纯html)</h3>
            <form action="http://localhost:8080/upload" method="POST" enctype="text/plain">
                <label>姓名：</label><input type="text" name="name"><br />
                <label>年龄：</label><input type="text" name="age"><br />
                <input type="submit" value="提交">
            </form>
        </div>
```

**2、ajax设置contentType为text/plain或者被不设置**

```
var req = new XMLHttpRequest();
	req.open("POST", url);
if (type) {
	req.setRequestHeader("content-type", type)
}

req.send(data)
```

**服务端处理该格式：**

```
// 定义了一个post变量，用于暂存请求体的信息
var post = '';
// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
req.on('data', function (chunk) {
	post += chunk;
});
// 在end事件接收完毕
req.on('end', function () {
	console.log('------------接收到以下信息------------');
	console.log(post);
}
```

![image-20220917184610678](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917184610678.png)

##### application/x-www-form-urlencoded

> 通过key&value的格式，然后传给后台解析如果要使用这种编码传输，

**一般客户端发送此格式数据常用的有以下方式：**

**1、使用npm的qs**

```
qs可以将json序列化如下：
let a = {
  name:'june',
  age:26  
}
qs.stringify(a)  //"name=june&age=26" qs可以将josn对象转换成形如key&value
 
如何使用：
import qs from 'qs'
let data = {code: 'fds', headImgUrl: '99', innerDemoVos: [{code: '篮球', name: 'xx'}, {code: '台球', name: '小芳'}]}
let params = qs.stringify(data, {arrayFormat: 'indices', allowDots: true})
 
// post的content-type的格式需要设置成application/x-www-form-urlencoded，data就是post请求体。
let data = {code: 'fds', headImgUrl: '99', innerDemoVos: [{code: '篮球', name: 'xx'}, {code: '台球', name: '小芳'}]};
// 将json对象转换成form表单的key&value的形式，包括复杂的数组对象，注意{arrayFormat: 'indices', allowDots: true}参数，一定要写，这个关系到数组对象转换成的格式后台是否可以解析，如果不写那么数组对象就是innerDemo[0].[code]: 篮球，这样后台是无法解析，只有innerDemo[0].code: 篮球的格式才可以解析，
console.info(qs.stringify(data, {arrayFormat: 'indices', allowDots: true}));
```

**2、form enctype设为"application/x-www-form-urlencoded"**

```
<!-- post信息[x-www-form-urlencoded] -->
        <div class="upload1">
            <h3>post信息[x-www-form-urlencoded]</h3>
            <h3>form + input方式(纯html)</h3>
            <form action="http://localhost:8080/upload" method="POST" enctype="application/x-www-form-urlencoded">
                <label>姓名：</label><input type="text" name="name"><br />
                <label>年龄：</label><input type="text" name="age"><br />
                <input type="submit" value="提交">
            </form>
        </div>
```

**3、ajax设置contentType为application/x-www-form-urlencoded**

```
var req = new XMLHttpRequest();
req.open("POST", url);
req.setRequestHeader("content-type", 'application/x-www-form-urlencoded')

req.send(data)
```

**服务端处理该格式：**

**1、可以通过qs依赖包**

```
// 定义了一个post变量，用于暂存请求体的信息
var post = '';
// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
req.on('data', function (chunk) {
	post += chunk;
});
// 在end事件触发
req.on('end', function () {
	console.log('------------接收到以下信息------------');
	console.log(qs.parse(post);
}
```

**2、通过busboy依赖包处理**

```
const bb = busboy({ headers: req.headers });
// 如果是文件类型触发
bb.on('field', (name, val, info) => {
	console.log(`Field [${name}]: value: %j`, val);
	filedObj[name] = val
});
bb.on('close', () => {
	res.end();
});
req.pipe(bb);
```

##### application/json

> 这种编码格式现在比较流行推荐使用，前端传参不用管数据结构有多复杂层次有多深直接以json形式传就ok

**一般客户端发送此格式数据常用的有以下方式：**

1、**Content-Type设置为**application/json

**服务端处理该格式直接使用JSON.parse则可**

##### multipart/form-data

> 这也是常见的post请求方式，一般用来上传文件图片等，各大服务器的支持也比较好。

**一般客户端发送此格式数据常用的有以下方式：**

**1、form enctype设为"multipart/form-data"**

```
<!-- 单一文件上传 [FORM-DATA] -->
        <div class="upload1">
            <h3>单一文件上传 [FORM-DATA]</h3>
            <h3>form + input方式(纯html)</h3>
            <form action="http://localhost:8080/upload" method="POST" enctype="multipart/form-data">
                <input type="file" name="file"><br />
                <input type="submit" value="提交">
            </form>
        </div>
```

**2、ajax方式，不需要设置contentType，浏览器自动识别**

```
<!-- ajax多文件上传 [FORM-DATA] -->
        <div class="upload1">
            <h3>多文件上传 [FORM-DATA]</h3>
            <h3>input方式(ajax)</h3>
            <input id="mutilFormDataAjax" type="file" multiple />
            <button onclick="mutilFormDataAjax()">上传</button>
        </div>
        
 /* ajax多文件上传 [FORM-DATA] */
 function mutilFormDataAjax() {
 	const files = document.querySelector('#mutilFormDataAjax').files
 	if (files) {
 	var form = new FormData(); // FormData 对象
 		for (let i = 0; i < files.length; i++) {
 		form.append("file", files[i]);
 	}
 	post('http://localhost:8080/upload', form)
 	}
 }
```

**服务端处理该编码数据**：

```
const bb = busboy({ headers: req.headers });
const filedObj = {}
// 如果是文件类型触发
bb.on('file', (name, file, info) => {
	let arr = [];
	if (filename) {
	arr = filename.toString().split('.');//对传递的文件名进行拆分
	const pathData = parseInt(Date.parse(new Date()).toString().substr(0, 10));//文件名＋十位时间戳.文件类型
	const uploadDir = path.resolve(__dirname, './upload', pathData + '.' + arr[arr.length - 1]);
	file.pipe(fs.createWriteStream(uploadDir));//利用fs模块创建可以写入的流,并指定保存路径和名称
}
});
bb.on('field', (name, val, info) => {
	filedObj[name] = val
});
bb.on('close', () => {
	console.log('数据解析完毕');
	res.end(JSON.stringify(filedObj));
});
req.pipe(bb);
```

`注意：`

**浏览器将分为简单请求和非简单请求。**

只要同时满足一下两个条件，就属于简单请求

(1)使用下列方法之一：

- head
- get
- post

(2)请求的Heder是

- Accept
- Accept-Language
- Content-Language
- Content-Type: 只限于三个值：application/x-www-form-urlencoded、multipart/form-data、text/plain

不同时满足上面的两个条件，就属于非简单请求。浏览器对这两种的处理，是不一样的。

**简单请求**：

  对于简单请求，浏览器直接发出CORS请求。具体来说，就是在头信息之中，增加一个Origin字段。Origin字段用来说明，本次请求来自哪个源（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。

**非简单请求**：

  非简单请求是那种对服务器有特殊要求的请求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json。非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。

**完整案例：**[https://github.com/webpon/postUpload.git](https://github.com/webpon/postUpload.git)

#### 区别

从`w3schools`得到的标准答案的区别如下：

- GET在浏览器回退时是无害的，而POST会再次提交请求。
- GET产生的URL地址可以被Bookmark，而POST不可以。
- GET请求会被浏览器主动cache，而POST不会，除非手动设置。
- GET请求只能进行url编码，而POST支持多种编码方式。
- GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
- GET请求在URL中传送的参数是有长度限制的，而POST没有。
- 对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
- GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
- GET参数通过URL传递，POST放在Request body中

##### **参数位置**

貌似从上面看到`GET`与`POST`请求区别非常大，但两者实质并没有区别

无论 `GET `还是 `POST`，用的都是同一个传输层协议，所以在传输上没有区别

当不携带参数的时候，两者最大的区别为第一行方法名不同

> POST /uri HTTP/1.1 \r\n
>
> GET /uri HTTP/1.1 \r\n

当携带参数的时候，我们都知道`GET`请求是放在`url`中，`POST`则放在`body`中

`GET` 方法简约版报文是这样的

```
GET /index.html?name=qiming.c&age=22 HTTP/1.1
Host: localhost
```

`POST `方法简约版报文是这样的

```
POST /index.html HTTP/1.1
Host: localhost
Content-Type: application/x-www-form-urlencoded

name=qiming.c&age=22
```

注意：这里只是约定，并不属于`HTTP`规范，相反的，我们可以在`POST`请求中`url`中写入参数，或者`GET`请求中的`body`携带参数

##### **参数长度**

`HTTP `协议没有`Body`和 `URL` 的长度限制，对 `URL `限制的大多是浏览器和服务器的原因

`IE`对`URL`长度的限制是2083字节(2K+35)。对于其他浏览器，如Netscape、FireFox等，理论上没有长度限制，其限制取决于操作系统的支持

这里限制的是整个`URL`长度，而不仅仅是参数值的长度

服务器处理长` URL` 要消耗比较多的资源，为了性能和安全考虑，会给 `URL` 长度加限制

##### **安全**

`POST `比` GET` 安全，因为数据在地址栏上不可见

然而，从传输的角度来说，他们都是不安全的，因为` HTTP` 在网络上是明文传输的，只要在网络节点上捉包，就能完整地获取数据报文

只有使用`HTTPS`才能加密安全

##### **数据包**

对于`GET`方式的请求，浏览器会把`http header`和`data`一并发送出去，服务器响应200（返回数据）

对于`POST`，浏览器先发送`header`，服务器响应100 `continue`，浏览器再发送`data`，服务器响应200 ok

并不是所有浏览器都会在`POST`中发送两次包，`Firefox`就只发送一次

### HTTP 常见的请求头

#### 简介

HTTP头字段（HTTP header fields）,是指在超文本传输协议（HTTP）的请求和响应消息中的消息头部分

它们定义了一个超文本传输协议事务中的操作参数

HTTP头部字段可以自己根据需要定义，因此可能在 `Web `服务器和浏览器上发现非标准的头字段

下面是一个`HTTP`请求的请求头：

```
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```

#### 分类

常见的请求字段如下表所示：

| 字段名            | 说明                                                         | 示例                                                         |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Accept            | 能够接受的回应内容类型（Content-Types）                      | Accept: text/plain                                           |
| Accept-Charset    | 能够接受的字符集                                             | Accept-Charset: utf-8                                        |
| Accept-Encoding   | 能够接受的编码方式列表                                       | Accept-Encoding: gzip, deflate                               |
| Accept-Language   | 能够接受的回应内容的自然语言列表                             | Accept-Language: en-US                                       |
| Authorization     | 用于超文本传输协议的认证的认证信息                           | Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==            |
| Cache-Control     | 用来指定在这次的请求/响应链中的所有缓存机制 都必须 遵守的指令 | Cache-Control: no-cache                                      |
| Connection        | 该浏览器想要优先使用的连接类型                               | Connection: keep-alive Connection: Upgrade                   |
| Cookie            | 服务器通过 Set- Cookie （下文详述）发送的一个 超文本传输协议Cookie | Cookie: $Version=1; Skin=new;                                |
| Content-Length    | 以 八位字节数组 （8位的字节）表示的请求体的长度              | Content-Length: 348                                          |
| Content-Type      | 请求体的 多媒体类型                                          | Content-Type: application/x-www-form-urlencoded              |
| Date              | 发送该消息的日期和时间                                       | Date: Tue, 15 Nov 1994 08:12:31 GMT                          |
| Expect            | 表明客户端要求服务器做出特定的行为                           | Expect: 100-continue                                         |
| Host              | 服务器的域名(用于虚拟主机 )，以及服务器所监听的传输控制协议端口号 | Host: en.wikipedia.org:80 Host: en.wikipedia.org             |
| If-Match          | 仅当客户端提供的实体与服务器上对应的实体相匹配时，才进行对应的操作。主要作用时，用作像 PUT 这样的方法中，仅当从用户上次更新某个资源以来，该资源未被修改的情况下，才更新该资源 | If-Match: "737060cd8c284d8af7ad3082f209582d"                 |
| If-Modified-Since | 允许在对应的内容未被修改的情况下返回304未修改                | If-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT             |
| If-None-Match     | 允许在对应的内容未被修改的情况下返回304未修改                | If-None-Match: "737060cd8c284d8af7ad3082f209582d"            |
| If-Range          | 如果该实体未被修改过，则向我发送我所缺少的那一个或多个部分；否则，发送整个新的实体 | If-Range: "737060cd8c284d8af7ad3082f209582d"                 |
| Range             | 仅请求某个实体的一部分                                       | Range: bytes=500-999                                         |
| User-Agent        | 浏览器的浏览器身份标识字符串                                 | User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:12.0) Gecko/20100101 Firefox/21.0 |
| Origin            | 发起一个针对 跨来源资源共享 的请求                           | Origin: [http://www.example-social-network.com](http://www.example-social-network.com/) |

### 强缓存、协商缓存

#### 前言

> 浏览器缓存是性能优化非常重要的一个方案，合理地使用缓存可以提高用户体验，还能节省服务器的开销。掌握好缓存的原理和并合理地使用无论对前端还是运维都是相当重要的。

#### **什么是浏览器缓存**

> 浏览器缓存(http 缓存) 是指浏览器在本地磁盘对用户最近请求过的文档进行存储，当访问者再次访问同一页面时，浏览器就可以直接从本地磁盘加载文档。

**优点**

- 减少了冗余的数据传输，节省带宽，减少服务器压力

- 加快了客户端加载速度，提升用户体验。


#### 强缓存

> 强缓存不会向服务器发送请求，而是直接从缓存中读取资源，强缓存可以通过设置两种 HTTP Header 实现：Expires 和 Cache-Control，这两个头部分别是HTTP1.0和HTTP1.1的实现。

**Expires**
Expires是HTTP1.0提出的一个表示资源过期时间的header，它描述的是一个绝对时间，由服务器返回。
Expires 受限于本地时间，如果修改了本地时间，就会造成缓存失效。

**Cache-Control**
Cache-Control 出现于 HTTP/1.1，常见字段是max-age，单位是秒，很多web服务器都有默认配置，优先级高于Expires，表示的是相对时间。

例如Cache-Control:max-age=3600 代表资源的有效期是 3600 秒。取的是响应头中的 Date，请求发送的时间，表示当前资源在 Date ~ Date +3600s 这段时间里都是有效的。Cache-Control 还拥有多个值：

- no-cache 不直接使用缓存，也就是跳过强缓存。

- no-store 禁止浏览器缓存数据，每次请求资源都会向服务器要完整的资源。
- public 可以被所有用户缓存，包括终端用户和 CDN 等中间件代理服务器。
- private 只允许终端用户的浏览器缓存，不允许其他中间代理服务器缓存。

`要注意的就是no-cache和no-store的区别，no-cache是跳过强缓存，还是会走协商缓存的步骤，而no-store是真正的完全不走缓存，所有资源都不会缓存在本`地

#### 协商缓存

> 当浏览器对某个资源的请求没有命中强缓存，就会发一个请求到服务器，验证协商缓存是否命中，如果协商缓存命中，请求响应返回的http状态为304并且会显示一个Not Modified的字符串。

协商缓存用的是【Last-Modified，If-Modified-Since】和【ETag、If-None-Match】这两对Header来管理的。

`注意！！协商缓存需要配合强缓存使用，使用协商缓存需要先设置Cache-Control：no-cache或者pragma：no-cache来告诉浏览器不走强缓存`

**Last-Modified、If-Modified-Since**
这两个Header是HTTP1.0版本提出来的，两个字段配合使用。

Last-Modified 表示本地文件最后修改日期，浏览器会在请求头带上If-Modified-Since（上次返回的Last-Modified的值），服务器会将这个值与资源修改的时间匹配，如果时间不一致，服务器会返回新的资源，并且将 Last-Modified 值更新，作为响应头返回给浏览器。如果时间一致，表示资源没有更新，服务器返回 304 状态码，浏览器拿到响应状态码后从本地缓存中读取资源。

**但Last-Modified有几个问题**。

- 文件虽然被修改了，但最终的内容没有变化，这样文件修改时间还是会被更新

- 有的文件修改频率在秒以内，这时候以秒粒度来记录就不够了
- 有的服务器无法精确获取文件的最后修改时间。
- 如果资源是cdn给的，用户第一次拿一个cdn的，第二次拿另一个cdn的文件，实际文件没变，就浪费流量了。

**所以出现了ETAG。**

**ETag、If-None-Match**

> 在HTTP1.1版本中，服务器通过 Etag 来设置响应头缓存标识。Etag 的值由服务端生成。在第一次请求时，服务器会将资源和 Etag 一并返回给浏览器，浏览器将两者缓存到本地缓存数据库。在第二次请求时，浏览器会将 Etag 信息放到 If-None-Match 请求头去访问服务器，服务器收到请求后，会将服务器中的文件标识与浏览器发来的标识进行对比，如果不相同，服务器返回更新的资源和新的 Etag ，如果相同，服务器返回 304 状态码，浏览器读取缓存。

![image-20220917184211410](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917184211410.png)

#### 两者之间对比

首先在精确度上，`Etag`要优于`Last-Modified`。
 `Last-Modified`的时间单位是秒，如果某个文件在1秒内改变了多次，那么他们的`Last-Modified`其实并没有体现出来修改，但是`Etag / If-None-Match`每次都会改变确保了精度；如果是负载均衡的服务器，各个服务器生成的`Last-Modified`也有可能不一致。

第二在性能上，`Etag / If-None-Match`要逊于`Last-Modified / If-Modified-Since`，毕竟`Last-Modified / If-Modified-Since`只需要记录时间，而`Etag / If-None-Match`需要服务器通过算法来计算出一个`hash`值。

 第三在优先级上，服务器校验优先考虑`Etag / If-None-Match`，同时存在则只有`Etag / If-None-Match`生效。

#### 总结

强制缓存优先于协商缓存进行，若强制缓存(`Expires和Cache-Control`)生效则直接使用缓存，若不生效则进行协商缓存(`Last-Modified / If-Modified-Since`和`Etag / If-None-Match`)，协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请求的缓存失效，返回200，重新返回资源和缓存标识，再存入浏览器缓存中；生效则返回304，继续使用缓存。具体流程图如下：

![image-20220917184716299](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917184716299.png)

如果什么缓存策略都没设置，浏览器会采用一个启发式的算法，通常会取响应头中的`Date`减去`Last-Modified`值的10%作为缓存时间。

#### 最佳优化策略-消灭304

最佳优化策略：因为协商缓存本身也有http请求的损耗，所以最佳优化策略是要尽可能的将静态文件存储为较长的时间，多利用强缓存而不是协商缓存，即消灭304。
 但是给文件设置一个很长的`Cacha-Control`也会带来其他的问题，最主要的问题是静态内容更新时，用户不能及时获得更新的内容。这时候就要使用`hash`的方法对文件进行命名，通过每次更新不同的静态文件名来消除强缓存的影响。

#### node实践

##### 强缓存

- 强缓存设置靠请求头的Cache-Control或者Expires，听说有兼容性问题，老的是Expires，现在越来越多浏览器支持Cache-Control了，建议全都设上。

- Cache-Control设置的是个相对于现在的时间，单位是秒，Expires设置的是GMT时间，以设置10秒为例：

  ```js
  res.setHeader('Expires',new Date(Date.now()+10*1000).toGMTString())
  res.setHeader('Cache-Control','max-age=10')
  ```

  验证阶段，memory cache是浏览器的优化, 如果没有则取disk cache

  ![image.png](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img94191b370ed02f771ede067651852654.png)

##### 协商缓存

**Last-Modified，If-Modified-Since**

- 先看Last-Modified设置：

- 服务端设置Last-Modified后，浏览器请求同一个资源会带if-modified-since的请求头，所以服务端还要获取这个请求头的时间进行对比，相等返回304提前关闭请求即可，浏览器会自己去缓存里拿。

  ```js
  let statObj= await fs.stat(absPath)
  let mtime = statObj.ctime.toGMTString()
  // 协商缓存需要把强缓存关掉, 或者设为no-cache
  res.setHeader('Cache-Control', 'public, max-age=0');
  let ifModifiedSince =req.headers['if-modified-since']//获取
  if(ifModifiedSince===mtime){
      res.statusCode=304
  } else {
       res.setHeader('Last-Modified',mtime)//设置
       res.write(fileContent, 'utf-8');
  }
  res.end()
  ```

**etag、If-None-Match**

> **`etag`** **由响应头的** **`Last-Modified`** **与** **`Content-Length`** **表示为十六进制组合而成**
>
> 详情请访问：https://juejin.cn/post/6844904018012012552

示例：

![image-20220917184257538](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917184257538.png)

```js
function stattag (stat) {
  var mtime = stat.mtime.getTime().toString(16)
  var size = stat.size.toString(16)

  return '"' + size + '-' + mtime + '"'
}
let statObj= await fs.stat(absPath)
const eTag = stattag(statObj)
const ifNoneMatch = ctx.request.headers['if-none-match']
if(ifModifiedSince===eTag{
    res.statusCode=304
} else {
     res.setHeader('etag', eTag)//设置
     res.write(fileContent, 'utf-8');
}
res.end()
```

**完整案例请访问:** [https://github.com/webpon/httpCache](https://github.com/webpon/httpCache)

### cookie

**会话状态**

#### 一、什么是 Cookie？

> 我们在详细了解这个问题之前，需要先了解cookie是如何工作的？
> cookie是存放在浏览器中的，在每一个浏览器安装目录下，都存在一个文件夹，存放
> 着不同域下对应的cookie。`当浏览器通过http请求某一个域时，此时浏览器就会将`
> `该域下面的cookie自动放入request header中。我们需要注意，浏览器自动帮我们`
> `携带，`此时如果很多无关紧要的数据都存放在cookie中，都会随着请求发送给后台，
> 这样就无形当中增加了网络开销。此时我们再想想什么数据在每一次都需要?其实我
> 们的身份认证信息在每一次都需要携带，所以存放在cookie的数据最合适的是身份认
> 证信息，其他信息都不合适。
> 在localStorage出现之前，cookie一直背开发者所滥用，导致很多的无关紧要的数
> 据被请求携带到服务器。cookie也存在一些限制，`每一个域下的cookie最多是4KB,`
> `每一个域下的cookie最多存在20条。`

#### 二、Cookie 主要使用在以下场景

- 会话状态管理（如用户登录状态、及其他需要记录的信息）
- 个性化设置（如用户自定义设置）
- 浏览器追踪行为（如追踪分析用户行为）

#### 三、创建 Cookie

##### 1.浏览器自动创建

> 当服务器收到 HTTP 请求时，服务器可以在响应头里设置一个 **Set-cookie** 选项，浏览器接收到响应后会自动保存下 Cookie，之后浏览器对该服务器的每一次请求中都会通过请求头把 Cookie 信息发送给服务器。通过以下 node 版本代码案例（通过 req.cookie 设置 cookie）当请求了 '/' 路径 Cookie 就会保存如下图信息。后面请求其他 path （如：/login）时在以下代码中都能通过 'req.headers.cookie' 打印出请求携带的 Cookie 信息（即为浏览器保存的 Cookie）。 测试案例（express 版）：

```text
const express = require('express')
let app = express();
app.get('/',(req,res)=>{
    console.log(req.headers.cookie)
    res.cookie('token','dsafdsfd453542scdsfd')
    res.send('path is /')
});
app.get('/login',(req,res)=>{
    console.log(req.headers.cookie)
    res.send('path is /login')
});
app.listen(3000,()=>{
    console.log('express服务已经启动~~~');
})
```

访问'/'浏览器设置的 Cookie：

![image-20220917184844630](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917184844630.png)



##### 2.通过 js 设置 Cookie (也可以设置过期时间、域名、路径等)

> 注：字符串中不能包含 HttpOnly 标识。可以包含expires、max-age、domain、path、secure。 基本用法：

```text
// 可以直接在浏览器控制台输入进行测试
document.cookie = "token=dsagsdshj43sfs";
```

![image-20220917184851014](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917184851014.png)

#### 四、Cookie 的设置详解

##### 1.过期时间设置（Expires 字段）

设置 Cookie 30s 后过期

```text
// 30s 后浏览器 cookie 自动清空
res.cookie('token','dsafdsfd453542scdsfd',{expires:new Date(Date.now() + 30*1000)})
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-6bda00aa8f60d07e3d33ab751bd4a26a_720w.jpg)

##### 2.设置域（domain），指定 cookie 在哪个域下可以被接受

> 注：如果不指定 domain 则默认是当前源（origin），但不包括子域名。如果指定了 Domain 则一般包含子域名（二级域名、三级域名）

```text
res.cookie('token','dsafdsfd453542scdsfd',{domain:'localhost'})
```

**Cookie在顶级域名、二级域名和三级域名之间共享的情况**

1、在setcookie中省略domain参数，那么domain默认为当前域名
2、domain参数可以设置父域名以及自身，但不能设置其它域名，包括子域名，否则cookie不起作用
3、如果cookie设置为顶级域名，则全部的域名，包括顶级域名、二级域名、三级域名等，都可以共享该cookie
4、如果cookie设置为当前域名，则当前域名及其下面的所有子域名可以共享该cookie

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-e14b20a03862d554090a3cf995a0d0a7_720w.jpg)

##### 3.设置路径（path），指定 cookie 在当前主机下哪些路径可以接受 Cookie

设置在 **/login** 下接受 Cookie。(只要是/login开头的都能接受,如：/login/user 等),此时 '/' 下是没有 Cookie 的

```text
res.cookie('token','dsafdsfd453542scdsfd',{path:'/login'})
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-241c093eef988a4615681622e029b676_720w.jpg)



##### 4.设置不能通过 javascript 访问 Cookie。（HttpOnly字段）

不能通过 document.cookie 访问

```text
res.cookie('token','dsafdsfd453542scdsfd',{httpOnly:true})
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-5dc25d5b47d874c3efab67ecf6be6f3b_720w.png)



##### 5.设置一段时间过期。（Max-Age）

设置 Cookie 20s 后过期

```text
res.cookie('token','dsafdsfd453542scdsfd',{maxAge:20*1000})
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-759edbe4ab69b4eaf95716f3e089f9ca_720w.png)



##### 6.设置 secure 字段

标记为 secure 的 Cookie 只应通过被 Https 协议加密过的请求发送给服务端。（通过 https 创建的 Cookie 只能通过 Https 请求将 Cookie 携带到服务器，通过 http 无法拿到 Cookie）

```text
res.cookie('token','dsafdsfd453542scdsfd',{secure:true})
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-33bbd6f2fc3c5a7be03187e7c5ea13c7_720w.jpg)



##### 7.设置 someSite ，它有三个可选值 None、strict、Lax

> 首先了解下什么是跨站请求？比如说有 A、B两个网站，其中A站请求会产生 Cookie，且后续访问请求需携带回 Cookie（身份认证），如果在B网站通过链接的形式访问A站资源这个就叫跨站。这种情况访问成功与否会根据 Cookie 设置的 someSite 而定。 + someSize:None: 浏览器在同站请求、跨站请求下都会发送 Cookies + someSize:Strict: 浏览器只会在相同站点下发送 Cookies + someSize:Lax: 与 strict 类似，不同的是它可以从外站通过链接导航到该站。

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-0292fc9ee731e382c19abbfa9712f7c3_720w.jpg)



#### 五、通过 js 访问 Cookie

> 注：设置了 HttpOnly 标志的 Cookie 无法访问

首先需要稍微了解一下cookie的结构，简单地说：cookie是以键值对的形式保存的，即key=value的格式。各个cookie之间一般是以“;”分隔。

**JS设置cookie:**

假设在A页面中要保存变量username的值("jack")到cookie中,key值为name，则相应的JS代码为：

```js
document.cookie="name="+username;
```

**JS读取cookie:**

假设cookie中存储的内容为：name=jack;password=123

则在B页面中获取变量username的值的JS代码如下：

```js
var username=document.cookie.split(";")[0].split("=")[1];
//JS操作cookies方法!
//写cookies
function setCookie(name,value)
{
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
```

**读取cookies**

```js
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
```

**删除cookies**

```js
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
//使用示例
setCookie("name","hayden");
alert(getCookie("name"));
//如果需要设定自定义过期时间
//那么把上面的setCookie　函数换成下面两个函数就ok;
//程序代码
function setCookie(name,value,time)
{
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec*1);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getsec(str)
{
    alert(str);
    var str1=str.substring(1,str.length)*1;
    var str2=str.substring(0,1);
    if (str2=="s"){
        return str1*1000;
    }else if (str2=="h"){
        return str1*60*60*1000;
    }else if (str2=="d"){
        return str1*24*60*60*1000;
    }
}
//这是有设定过期时间的使用示例：
//s20是代表20秒
//h是指小时，如12小时则是：h12
//d是天数，30天则：d30
setCookie("name","hayden","s20");
```

#### 六、cookie 分类

> 会话 Cookie，指的是没有设置 Expires 和 max-Age 标示的 Cookie，关闭浏览器后就会被清空。 包含了 Expire 或 max-Age 的标志，清空的时间由其设置的时间而定。

#### 总结

> Cookie 更多的用途是用在身份认证来保证网站资源的安全性，而不是大数据量的本地数据存储。大数据量本地存储方案取而代之的是 webstorage和indexedDB。设置 Cookie 过期时间（Expires、max-Age标志）有助于防止**会话固定攻击**。设置 httpOnly 有助于缓解**跨站点脚本（XSS）**攻击。设置 SameSite 可以阻止 **跨站请求伪造攻击（CSRF）**。

### session

#### 简介

Cookie可以让服务端程序跟踪每个客户端的访问，但是每次客户端的访问都必须传回这些Cookie，如果Cookie很多，这无形地增加了客户端与服务端的数据传输量。此外cookie保存在客户端，有被篡改、盗取的风险。而Session的出现正是为了解决这个问题。

> 所以单纯的以实现保存用户状态目的的话，只使用cookie也是可行的。其实在Cookie设计之初就是直接保存用户信息，但是由于cookie 是存在用户端，最关键是用户可以是可见的，并可以随意的修改，很不安全。所以session机制诞生了

session意为会话，主要作用是记录了用户会话相关的数据。

理论上：

- session 没有大小限制，所以，可以储存任意数量的数据
- session 没有类型限制，所以，可以储存任意类型的数据
- session 没有安全问题，所以，可以储存任意安全级别的数据

理论上session可以存储任何数据，但并不建议任何数据都保存在SESSION中。SESSION通常用来保存与特定用户信息相关的信息，如：身份信息、登陆状态、用户的个性配置、权限列表、其他的一些通用数据（比如购物车）。

**通常我们把通用的、频繁存取的、小数据量的 跟用户相关的 数据放入SEESION**。

同一个客户端每次和服务端交互时，不需要每次都传回所有的Cookie值，而是只要传回一个会话标识（SessionId），这个ID是客户端第一次访问服务器的时候生成的，而且每个客户端是唯一的。这样每个客户端就有一个唯一的ID，客户端只要传回这个ID就行了，这个ID通常是NAME为JSESIONID的一个Cookie。在Web服务器上，各个会话独立存储保存不同会话的信息。如果遇到禁用Cookie的情况，一般的做法就是把这个会话标识放到URL的参数中。

#### session机制

session机制是一种服务器端的机制，Session可以用Cookie来实现，也可以用URL回写的机制来实现。用Cookie来实现的Session可以认为是对Cookie更高级的应用。一般使用cookie来实现session。

#### session的运作

![image-20220917184943806](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917184943806.png)

当客户端第一次访问服务器时，服务器创建一个session，同时生成一个唯一的会话key，即sessionID。接着sessionID及session分别作为**key和value**保存到缓存中，也可以保存到数据库中，然后服务器把sessionID以cookie的形式发送给客户端浏览器，浏览器下次访问服务器时直接携带上cookie中的sessionID，服务器再根据sessionID找到对应的session进行匹配。

总结：

1. session由服务端产生
2. 以字典的形式存储，session保存状态信息，sessionid返回给客户端保存至本地
3. 服务端需要一定的空间存储session，且一般为了提高响应速度，都是存储在内存中
4. sessionID会自动由浏览器带上

#### 集群下的session

像我们个人搭的一些小型网站，可能一台服务器就足够应对用户的访问，所以我们的session可以存储我们的应用服务器上，就如同上图模型。但对于具有一定规模的网站，甚至是阿里、腾讯的网站，背后是千万台服务器在运作。那么集群下的session该管理？

如果用户的session信息只是存储在当前访问的服务器上，那么当负载均衡器把用户的下一个请求转发到另一个服务器，由于另一台服务器没有用户的 Session信息，那么该用户就需要重新进行登录等操作，显然是不够合理的。

##### 1. sticky session

通过配置负载均衡器，**使得一个用户的所有请求都路由到同一个服务器**，这样就可以把用户的session存放在该服务器中。

![image-20220917185528584](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917185528584.png)

```
例：

负载均衡时 对用户ip求哈希取余，从而保证同一个用户的请求最终都路由到同一个服务器
    
    hash(ip) %  服务器台数
```

**缺点：**

1. 当服务器宕机时，将丢失该服务器上所有的session
2. 哈希函数和服务器台数会影响离散性质，即可能会导致负载不均匀
3. 扩展性一般，当扩展机器台数时，用户可能会被路由到其他服务器（一致性哈希能缓解）

##### 2. session replication

在服务器之间进行session同步操作，**每个服务器都有所有用户的session信息**，因此用户可以向任何一个服务器进行请求。

![image-20220917185535739](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917185535739.png)

此方案不用再要求负载均衡器保证同一个会话的多次请求必须到同一个Web服务器上了。我们在Web服务器之间增加了会话数据的同步，通过同步就保证了不同Web服务器之间Session数据的一致。一般应用容器都支持Session Replication方式，与Session Sticky方案相比，Session Replication方式对负载均衡器没有那么多的要求。

**存在问题：**

1. 同步Session数据造成了网络带宽的开销。只要Session数据有变化，就需要将数据同步到所有其他机器上，机器越多，同步带来的网络带宽开销就越大。
2. 每台Web服务器都要保存所有Session数据，如果整个集群的Session数据很多（很多人同时访问网站）的话，每台机器用于保存Session数据的内容占用会很严重。

这个方案是靠应用容器来完成Session的复制从而解决Session的问题的，应用本身并不关心这个事情。这个方案**不适合集群机器数多的场景**。如果只有几台机器，用这个方案是可以的。

##### 3. session server

使用一个单独的服务器存储session数据，可以使用传统的mysql或redis、memcached。

![image-20220917185545744](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917185545744.png)

优点是使大型网站具有伸缩性，保证了应用服务器的无状态，session server将用户的会话信息单独进行存储。相对于Session Replication，当Web服务器数量比较大、Session数比较多的时候，这个集中存储方案的优势是非常明显的。

存在问题：

1. 读写Session数据引入了网络操作，这相对于本机的数据读取来说，问题就在于存在时延和不稳定性，不过我们的通讯基本都是发生在内网，问题不大。
2. 如果集中存储Session的机器或者集群有问题，就会影响到我们的应用。（即session服务器尽量保证高可用）

#### 代码实践

实践教程：https://zhuanlan.zhihu.com/p/409813376

https://github.com/webpon/cookie-session.git

### token

对于 Token，在很多大型网站中都有所应用，比如 Facebook，Twitter，Google，Github 等等，比起传统的身份验证方法，Token 的扩展性更强，也更安全点，非常适合用在 Web 应用或者移动应用上。

先给一个非常熟悉的token场景：我们在A程序上准备登录账号，登录方式除了A程序注册的账号密码登录外，可以选择微信登录、QQ登录等等。如果我们选择微信登录，就会弹出微信页面，选择授权登陆以后，就会返回到A程序，微信登录成功！
 那么这个过程token是如何参与其中的呢？在这里，我们可以先把token暂时模拟成cookie，它能让我们不需要输入用户名密码而保持登录状态。

![image-20220917185711810](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220917185711810.png)

这里有一个关键点，就是跨域。我们常用的cookie只能是按域名发送对应的cookie，不能实现跨域的功能。这也是为什么会出现token的原因之一。

> 如果token或sessionid被盗取，服务器都无法辨识。在网络层面上使用明文传输的话是非常危险的，所以一定要使用HTTPS协议。

#### token和session的区别

token和session功能相似，那为什么会有token呢？普通cookie和session机制的问题：

1. 服务器需要记录每个用户的状态信息，内存开销大
2. 多机session问题，扩展性差
3. CORS（跨域资源共享）：当我们需要让数据跨多台移动设备上使用时，跨域资源共享难。
4. CSRF(跨站请求伪造)：用户在访问银行网站时，他们很容易受到跨站请求伪造的攻击，并且能够被利用其访问其他的网站。

**基于Token的身份验证是无状态的**，我们不将用户信息存在服务器中。这种概念解决了在服务端存储信息时的许多问题。NoSession意味着你的程序可以根据需要去增减机器，而不用去担心用户是否登录，不用去担心扩展性的问题。

其实token与session的问题是一种**时间与空间**的博弈问题，**session是空间换时间**，而**token是时间换空间**。两者的选择要看具体情况而定。

token 和 session 本质功能相似，但如果跨站使用，token 会更方便一些。以下几点特性也会让你在程序中使用基于Token的身份验证:

1. 无状态、可扩展
2. 支持移动设备
3. 跨程序调用
4. 安全

token更多是对用户进行认证，然后对某一个应用进行授权。让某个应用拥有用户的部分信息。这个token仅供此应用使用。

session像是这个用户登录了应用，用户把全部信息存放在此应用，应用拥有完整的用户信息。

所以**session和 token并不矛盾**，作为**身份认证token安全性比session好**，因为每个请求都有签名还能防止监听以及重放攻击，而session就必须靠链路层来保障通讯安全了。如上所说，如果你需要实现有状态的会话，仍然可以增加session来在服务器端保存一些状态。

Session是一种HTTP存储机制，目的是为无状态的HTTP提供的持久机制。所谓Session认证只是简单的把User信息存储到Session里，因为SID的不可预测性，暂且认为是安全的。这是一种认证手段。

而Token，如果指的是OAuth Token或类似的机制的话，提供的是 认证 和 授权 ，认证是针对用户，授权是针对App。其目的是让 某App有权利访问 某用户 的信息。这里的Token是唯一的。不可以转移到其它App上，也不可以转到其它 用户 上。

Session只提供一种简单的认证，即有此SID，即认为有此User的全部权利。是需要严格保密的，这个数据应该只保存在站方，不应该共享给其它网站或者第三方App。所以简单来说，如果你的用户数据可能需要和第三方共享，或者允许第三方调用API接口，用Token。如果永远只是自己的网站，自己的App，用什么就无所谓了。

token就是令牌，比如你授权（登录）一个程序时，他就是个依据，判断你是否已经授权该软件；cookie就是写在客户端的一个txt文件，里面包括你登录信息之类的，这样你下次在登录某个网站，就会自动调用cookie自动登录用户名；

session和cookie差不多，只是session是写在服务器端的文件，也需要在客户端写入cookie文件，但是文件里是你的浏览器编号.Session的状态是存储在服务器端，客户端只有session id；而Token的状态是存储在客户端。

#### token的运作

使用基于 Token 的身份验证方法，在**服务端不需要存储用户的登录记录**。大概的流程是这样的：

1. 客户端使用用户名跟密码请求登录；
2. 服务端收到请求，去验证用户名与密码；
3. 验证成功后，根据传过来的**唯一标识**userId(也可以是mac地址等唯一标识)，服务端会通过一些算法，如常用的HMAC-SHA256算法，然后加一个密钥，生成一个token，然后通过BASE64编码一下之后将这个token发送给客户端；
4. 客户端收到 Token 以后可以把它存储起来，比如放在 Cookie 里或者 Local Storage 里；（通过js代码写入Local Storage，通过js获取，并不会像cookie一样自动携带）
5. 客户端每次向服务端请求资源的时候需要带着服务端签发的 Token；
6. 服务端收到请求，然后去验证客户端请求里面带着的 Token，如果验证成功，就向客户端返回请求的数据。

#### 补充：为什么需要加盐

简单的哈希加密算法不够安全，虽然是不可逆的，反向算出来困难，但是如果反向查询，密码设置的简单，也很容易被攻破。比如我们使用 md5 加密一个密码 123456，对应的 md5 是 e10adc3949ba59abbe56e057f20f883e，找到一个 md5 解密的网站，比如 cmd5.com/ ，很容易就被破解了密码…

由于简单的哈希存在被反向查询破解的问题，所以可以采用加盐的方式。这种方式算是给用户的隐私数据加上密了，其实就是一段隐私数据加一段乱码再进行哈希。但这是比较早期的处理方式，仍存在一定的问题。

1. 存在**泄漏**的可能：盐一般采用硬编码，如果源码泄露或是内部人员泄漏，都会产生很大的安全问题。（这也是盐最大的缺陷）
2. **依赖性太强**：盐一旦被设定，再想做修改就非常困难，因为服务器存储的都是加盐后的数据，如果更换盐，则所有数据都需要改动。

#### tokens的优势

对比cookie session的好处

1、支持跨域访问:

```text
Cookie是不允许垮域访问的
（垮域访问：两个域名之间不能跨过域名来发送请求或者请求数据）
```

2、无状态(也称：服务端可扩展行):

```text
Token机制在服务端不需要存储session信息，因为Token 自身包含了所有登录用户的信息
只需要在客户端的cookie或本地介质存储状态信息.
基于这种无状态和不存储Session信息，负载负载均衡器能够将用户信息从一个服务传到其他服务器上。
```

3、更适用CDN:

```text
可以通过内容分发网络请求你服务端的所有资料（如：javascript，HTML,图片等），而你的服务端只要提供API即可.
```

4、去耦:

```text
不需要绑定到一个特定的身份验证方案。
Token可以在任何地方生成，只要在你的API被调用的时候，你可以进行Token生成调用即可.
```

5、更适用于移动应用:

```text
当你的客户端是一个原生平台（iOS, Android，Windows 8等）时，Cookie是不被支持的（你需要通过Cookie容器进行处理）
这时采用Token认证机制就会简单得多。
```

6、安全性

```text
请求中发送token而不再是发送cookie能够防止CSRF(跨站请求伪造)。
即使在客户端使用cookie存储token，cookie也仅仅是一个存储机制而不是用于认证。
不将信息存储在Session中，让我们少了对session操作。
token是有时效的，一段时间之后用户需要重新验证。
```

7、性能:

```text
一次网络往返时间（通过数据库查询session信息）总比做一次HMACSHA256计算的Token验证和解析要费时得多.
(内存型的session另说)
```

8、基于标准化:

```css
你的API可以采用标准化的 JSON Web Token (JWT). 
这个标准已经存在多个后端库（.NET, Ruby, Java,Python, PHP）和多家公司的支持（如：Firebase,Google, Microsoft）.
```

token的思想是算法验证，session的思想是信息存储对比。token是有多种方案的，可以设计成无需存储，token同时也是跨域的，session是要存储的，存储在数据库的思想。token存储是为了以后设计一个动态的跨域验证方案。例子:用redis实现动态token存储，还可以跨域访问，实现系统分离。

#### 有效期

需要设置有效期吗？
 对于这个问题，我们不妨先看两个例子。一个例子是登录密码，一般要求定期改变密码，以防止泄漏，所以密码是有有效期的；另一个例子是安全证书，SSL 安全证书都有有效期，目的是为了解决吊销的问题。所以无论是从安全的角度考虑，还是从吊销的角度考虑，Token 都需要设有效期。

那么有效期多长合适呢？

只能说，根据系统的安全需要，尽可能的短，但也不能短得离谱

然后新问题产生了，如果用户在正常操作的过程中，Token 过期失效了，要求用户重新登录……用户体验岂不是很糟糕？

为了解决在操作过程不能让用户感到 Token 失效这个问题，有一种方案是在服务器端保存 Token 状态，用户**每次操作都会自动刷新**（推迟） Token 的过期时间——Session 就是采用这种策略来保持用户登录状态的。然而仍然存在这样一个问题，在前后端分离、单页 App 这些情况下，每秒种可能发起很多次请求，每次都去刷新过期时间会产生非常大的代价。如果 Token 的过期时间被持久化到数据库或文件，代价就更大了。所以**通常为了提升效率，减少消耗，会把 Token 的过期时保存在缓存或者内存中**。

还有另一种方案，使用 Refresh Token，它可以避免频繁的读写操作。这种方案中，服务端不需要刷新 Token 的过期时间，**一旦 Token 过期，就反馈给前端，前端使用 Refresh Token 申请一个全新 Token 继续使用**。这种方案中，服务端只需要在客户端请求更新 Token 的时候对 Refresh Token 的有效性进行一次检查，大大减少了更新有效期的操作，也就避免了频繁读写。当然 Refresh Token 也是有有效期的，但是这个有效期就可以长一点了，比如，以天为单位的时间。

#### token的其他应用

令牌，最大的特点就是随机性，不可预测。一般黑客或软件无法猜测出来。

Token一般用在两个地方:

1. 防止表单重复提交、
2. anti csrf攻击（跨站点请求伪造）。

两者在原理上都是通过session token来实现的。当客户端请求页面时，服务器会生成一个随机数Token，并且将Token放置到session当中，然后将Token发给客户端（一般通过构造hidden表单）。下次客户端提交请求时，Token会随着表单一起提交到服务器端。

然后，如果应用于“anti csrf攻击”，则服务器端会对Token值进行验证，判断是否和session中的Token值相等，若相等，则可以证明请求有效，不是伪造的。

不过，如果应用于“防止表单重复提交”，服务器端第一次验证相同过后，会将session中的Token值更新下，若用户重复提交，第二次的验证判断将失败，因为用户提交的表单中的Token没变，但服务器端session中Token已经改变了。

上面的session应用相对安全，但也叫繁琐，同时当多页面多请求时，必须采用多Token同时生成的方法，这样占用更多资源，执行效率会降低。因此，也可用cookie存储验证信息的方法来代替session Token。比如，应对“重复提交”时，当第一次提交后便把已经提交的信息写到cookie中，当第二次提交时，由于cookie已经有提交记录，因此第二次提交会失败。
 不过，cookie存储有个致命弱点，如果cookie被劫持（xss攻击很容易得到用户cookie），那么又一次gameover。黑客将直接实现csrf攻击。

所以，安全和高效相对的。具体问题具体对待吧。

此外，要避免“加token但不进行校验”的情况，在session中增加了token，但服务端没有对token进行验证，根本起不到防范的作用。

还需注意的是，对数据库有改动的增删改操作，需要加token验证，对于查询操作，一定不要加token，防止攻击者通过查询操作获取token进行csrf攻击。但并不是这样攻击者就无法获得token，只是增大攻击成本而已。

```csharp
名称解释：
[1] XSS 攻击：
跨站脚本攻击(Cross Site Scripting)，恶意攻击者往 Web 页面里插入恶意 Script 代码，当用户浏览该页之时，嵌入其中 Web 里面的 Script 代码会被执行，从而达到恶意攻击用户的目的。
[2] CSRF 攻击：
CSRF（Cross-site request forgery）跨站请求伪造，也被称为“One Click Attack”或者 Session Riding，通常缩写为 CSRF 或者 XSRF，是一种对网站的恶意利用。
尽管听起来像跨站脚本（XSS），但它与 XSS 非常不同，XSS 利用站点内的信任用户，而 CSRF 则通过伪装来自受信任用户的请求来利用受信任的网站。
与 XSS 攻击相比，CSRF 攻击往往不大流行（因此对其进行防范的资源也相当稀少）和难以防范，所以被认为比 XSS 更具危险性。
```

#### 引用

```cpp
https://www.jianshu.com/p/c9017df96869
https://www.cnblogs.com/moyand/p/9047978.html
https://blog.csdn.net/u010902804/article/details/81182223
https://www.jianshu.com/p/3104e83dea8d
https://blog.csdn.net/qq_35246620/article/details/55049812
https://www.jianshu.com/p/de22230b7b80
```

#### 代码实践

实践教程：https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html

https://github.com/webpon/token_jwt

