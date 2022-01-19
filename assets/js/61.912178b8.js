(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{531:function(t,s,a){"use strict";a.r(s);var n=a(51),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jvm性能分析工具使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm性能分析工具使用"}},[t._v("#")]),t._v(" JVM性能分析工具使用")]),t._v(" "),a("p",[t._v("有时需要对Fluid的底层缓存引擎，如Alluxio，进行性能分析，以更加迅速地找到性能瓶颈。\n"),a("a",{attrs:{href:"https://github.com/jvm-profiling-tools/async-profiler",target:"_blank",rel:"noopener noreferrer"}},[t._v("async-profiler"),a("OutboundLink")],1),t._v("是一款非常全面的JVM profiling工具，支持对"),a("code",[t._v("cpu")]),t._v("，"),a("code",[t._v("lock")]),t._v("等多种事件采样。\n在本文档中，我们介绍"),a("code",[t._v("async-profiler")]),t._v("的简单使用方法。\n请参考"),a("a",{attrs:{href:"https://github.com/jvm-profiling-tools/async-profiler",target:"_blank",rel:"noopener noreferrer"}},[t._v("async-profiler官方文档"),a("OutboundLink")],1),t._v("获取更加详细的使用教程。")]),t._v(" "),a("h2",{attrs:{id:"下载并解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载并解压"}},[t._v("#")]),t._v(" 下载并解压")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/jvm-profiling-tools/async-profiler/releases/download/v1.7.1/async-profiler-1.7.1-linux-x64.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxf async-profiler-1.7.1-linux-x64.tar.gz\n")])])]),a("h2",{attrs:{id:"简单使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单使用"}},[t._v("#")]),t._v(" 简单使用")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("查看Java进程")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ jps\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8576")]),t._v(" AlluxioFuse\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("33916")]),t._v(" Jps\n")])])])]),t._v(" "),a("li",[a("p",[t._v("采样占用CPU时间")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./profiler.sh -e cpu -i 1ms -d "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v(" -f cpu.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[a("strong",[t._v("命令说明")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("-e <EVENT>")]),t._v("： 指定要采样的时间，支持"),a("code",[t._v("cpu")]),t._v(", "),a("code",[t._v("lock")]),t._v("等")]),t._v(" "),a("li",[a("code",[t._v("-i <INTERVAL>")]),t._v("： 指定采样间隔， 支持最小纳秒级别采样，但不建议设置太小，对会被采样的进程造成较大的性能影响")]),t._v(" "),a("li",[a("code",[t._v("-d <DURATION>")]),t._v(": 指定采样持续时间，以秒为单位")]),t._v(" "),a("li",[a("code",[t._v("-f <FILENAME>")]),t._v(": 指定保存文件名字和格式，文件格式影响最终结果呈现形式，"),a("code",[t._v("txt")]),t._v("文档格式方便在服务器查看，"),a("code",[t._v("svg")]),t._v("矢量图格式可在浏览器打开")]),t._v(" "),a("li",[a("code",[t._v("<PID>")]),t._v(": 所有采样都必须指定一个JVM进程的PID， 如"),a("code",[t._v("jps")]),t._v("命令中的AlluxioFuse进程"),a("code",[t._v("8576")])])])]),t._v(" "),a("li",[a("p",[t._v("采样结果分析")]),t._v(" "),a("p",[t._v("async-profiler会周期性地采样JVM调用栈，并按照被采样次数由高到低排序。\n可认为采样次数越高的函数，花费的CPU时间也是越多的。因此，通过观察排名前几位的函数调用情况，可快速找出Java进程的主要性能瓶颈。")]),t._v(" "),a("p",[t._v("下面是对AlluxioFuse进行cpu采样的结果，由三部分内容组成。")]),t._v(" "),a("p",[t._v("第一部分，介绍采样的次数，GC情况等，其中的"),a("code",[t._v("Frame buffer usage")]),t._v("表示保存采样结果的buffer使用率。\n如果采样间隔太小，或者时间太长，可能会提示"),a("code",[t._v("overflow")]),t._v("，此时可用"),a("code",[t._v("-b N")]),t._v("调大buffer容量。")]),t._v(" "),a("p",[t._v("第二部分，是按照采样次数由高到低排序后的函数调用栈，性能分析时重点关注前几位。")]),t._v(" "),a("p",[t._v("第三部分，在最后，是占用CPU时间由高到低的函数。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" cpu.txt\n--- Execution profile ---\nTotal samples       "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("131152")]),t._v("\nGC_active           "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nunknown_Java        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("321")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.24")]),t._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnot_walkable_Java   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("234")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.18")]),t._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndeoptimization      "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nskipped             "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nFrame buffer usage  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23.9887")]),t._v("%\n\n--- "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9902352571")]),t._v(" ns "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.48")]),t._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9820")]),t._v(" samples\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" copy_user_enhanced_fast_string_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" copyout_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" copy_page_to_iter_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" skb_copy_datagram_iter_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" tcp_recvmsg_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" inet_recvmsg_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" sock_read_iter_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" __vfs_read_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" vfs_read_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ksys_read_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" do_syscall_64_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" entry_SYSCALL_64_after_hwframe_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("read")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.channel.unix.FileDescriptor.readAddress\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.channel.unix.FileDescriptor.readAddress\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.channel.epoll.AbstractEpollChannel.doReadBytes\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.channel.epoll.AbstractEpollStreamChannel"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$EpollStreamUnsafe")]),t._v(".epollInReady\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.channel.epoll.EpollEventLoop.processReady\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.channel.epoll.EpollEventLoop.run\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.util.concurrent.SingleThreadEventExecutor"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$4")]),t._v(".run\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.util.internal.ThreadExecutorMap"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v(".run\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" java.lang.Thread.run\n\n--- "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6862595502")]),t._v(" ns "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.19")]),t._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6836")]),t._v(" samples\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" jbyte_disjoint_arraycopy\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.util.internal.PlatformDependent0.copyMemoryWithSafePointPolling\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.util.internal.PlatformDependent0.copyMemory\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.util.internal.PlatformDependent.copyMemory\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.buffer.UnsafeByteBufUtil.getBytes\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.buffer.PooledUnsafeDirectByteBuf.getBytes\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.buffer.AbstractUnpooledSlicedByteBuf.getBytes\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.buffer.AbstractByteBuf.readBytes\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.grpc.netty.NettyReadableBuffer.readBytes\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.grpc.internal.CompositeReadableBuffer"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$3")]),t._v(".readInternal\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.grpc.internal.CompositeReadableBuffer"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ReadOperation")]),t._v(".read\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.grpc.internal.CompositeReadableBuffer.execute\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.grpc.internal.CompositeReadableBuffer.readBytes\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.grpc.ReadableDataBuffer.readBytes\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.block.stream.BlockInStream.readInternal\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.block.stream.BlockInStream.read\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.file.AlluxioFileInStream.read\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.file.cache.LocalCacheFileInStream.readExternalPage\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.file.cache.LocalCacheFileInStream.read\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.fuse.AlluxioJniFuseFileSystem.read\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.jnifuse.AbstractFuseFileSystem.readCallback\n\n--- "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6257779616")]),t._v(" ns "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.73")]),t._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6234")]),t._v(" samples\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" jlong_disjoint_arraycopy\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" java.util.HashMap.isEmpty\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" java.util.HashSet.isEmpty\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.file.cache.store.MemoryPageStore.put\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.file.cache.LocalCacheManager.addPage\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.file.cache.LocalCacheManager.putInternal\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.file.cache.LocalCacheManager.lambda"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$put")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.file.cache.LocalCacheManager"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$$")]),t._v("Lambda"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$324")]),t._v(".504173880.run\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" java.util.concurrent.Executors"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$RunnableAdapter")]),t._v(".call\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" java.util.concurrent.FutureTask.run\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" java.util.concurrent.ThreadPoolExecutor.runWorker\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" java.util.concurrent.ThreadPoolExecutor"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Worker")]),t._v(".run\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" java.lang.Thread.run\n\n--- "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5784713511")]),t._v(" ns "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.37")]),t._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5730")]),t._v(" samples\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" memcpy_erms_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" fuse_copy_do?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fuse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" fuse_copy_page?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fuse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" fuse_copy_args?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fuse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" fuse_dev_do_write?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fuse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" fuse_dev_write?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fuse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" do_iter_readv_writev_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" do_iter_write_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" vfs_writev_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" do_writev_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" do_syscall_64_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" entry_SYSCALL_64_after_hwframe_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" writev\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n         ns  percent  samples  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),t._v("\n  ----------  -------  -------  ---\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18748768943")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14.17")]),t._v("%    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18618")]),t._v("  jlong_disjoint_arraycopy\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12465418383")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.42")]),t._v("%    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12375")]),t._v("  copy_user_enhanced_fast_string_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11200001765")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.46")]),t._v("%    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11153")]),t._v("  /usr/lib/jvm/java-8-openjdk-amd64/jre/lib/amd64/server/libjvm.so\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8891711765")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.72")]),t._v("%     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8863")]),t._v("  jbyte_disjoint_arraycopy\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5934957181")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.48")]),t._v("%     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5877")]),t._v("  memcpy_erms_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5887736474")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.45")]),t._v("%     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5766")]),t._v("  _raw_spin_unlock_irqrestore_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5722725002")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.32")]),t._v("%     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5669")]),t._v("  /lib/x86_64-linux-gnu/libc-2.23.so\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5029972109")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.80")]),t._v("%     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5024")]),t._v("  jint_disjoint_arraycopy\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3313144887")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.50")]),t._v("%     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3284")]),t._v("  _raw_spin_lock_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2345730045")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.77")]),t._v("%     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2341")]),t._v("  jshort_disjoint_arraycopy\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2111075419")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.60")]),t._v("%     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2098")]),t._v("  java.lang.Long.equals\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1844566888")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.39")]),t._v("%     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1838")]),t._v("  __do_page_fault_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1493059573")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.13")]),t._v("%     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1472")]),t._v("  get_user_pages_fast_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1371331539")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.04")]),t._v("%     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1340")]),t._v("  finish_task_switch_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1333100221")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.01")]),t._v("%     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1324")]),t._v("  clear_page_erms_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1165108284")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.88")]),t._v("%     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1155")]),t._v("  io.netty.util.Recycler"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$WeakOrderQueue")]),t._v(".transfer\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1010331386")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.76")]),t._v("%     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1004")]),t._v("  __free_pages_ok_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("806598842")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.61")]),t._v("%      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("798")]),t._v("  fuse_copy_do?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fuse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("805970066")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.61")]),t._v("%      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("802")]),t._v("  try_charge_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("773960647")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.58")]),t._v("%      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("757")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("read")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("660352796")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.50")]),t._v("%      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("656")]),t._v("  get_page_from_freelist_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Tips")]),t._v(":")]),t._v(" "),a("ul",[a("li",[t._v("一般性能分析只需要采样"),a("code",[t._v("cpu")]),t._v("和"),a("code",[t._v("lock")]),t._v("即可，它们的结果是比较有参考意义的")]),t._v(" "),a("li",[t._v("如果是和内存相关的调优，可试着采样"),a("code",[t._v("alloc")]),t._v("事件")]),t._v(" "),a("li",[a("code",[t._v("wall")]),t._v("事件采样墙上时间，"),a("code",[t._v("-t")]),t._v("选项让每个进程分开采样，它俩搭配使用效果比较好")]),t._v(" "),a("li",[t._v("同一进程同时只能采样一种事件")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);