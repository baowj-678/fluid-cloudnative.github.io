(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{417:function(s,t,a){"use strict";a.r(t);var i=a(19),_=Object(i.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"fluid-云原生环境下的高效-数据物流系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fluid-云原生环境下的高效-数据物流系统"}},[s._v("#")]),s._v(" Fluid — 云原生环境下的高效“数据物流系统”")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-logistics-01.webp",alt:"fluid_blog"}})]),s._v(" "),t("p",[s._v("得益于计算成本低、易于扩展、部署便捷、运维高效等多方面的优势，云计算平台吸引了越来越多的数据密集型应用在上面运行。如今，以 Kubernetes 为代表的云原生架构，因其灵活的资源可负载性以及高效的应用编排调度，在很多AI/大数据等数据密集型场景中应用广泛。然而，云原生环境和数据密集应用计算框架在早先设计理念和机制上存在天然分歧。因此，如何帮助数据密集型应用在云原生场景下高效、安全、便捷地访问数据，是一个既有理论意义又具应用价值的重要问题。")]),s._v(" "),t("p",[s._v("为了解决大数据、AI 等数据密集型应用在云原生计算存储分离场景下，存在的数据访问延时高、联合分析难、多维管理杂等痛点问题，南京大学 PASALab、阿里巴巴、Alluxio 在 2020 年 9 月份联合发起了开源项目 Fluid。Fluid 本质上是一个云原生环境下的数据密集型应用的高效支撑平台。本文将向大家介绍 Fluid 项目是如何将数据密集型应用更高效地运行于 K8s 环境中的。")]),s._v(" "),t("h2",{attrs:{id:"项目背景简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目背景简介"}},[s._v("#")]),s._v(" 项目背景简介")]),s._v(" "),t("h3",{attrs:{id:"_1-技术发展背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-技术发展背景"}},[s._v("#")]),s._v(" 1. 技术发展背景")]),s._v(" "),t("p",[s._v("过去十年"),t("strong",[s._v("云计算、大数据、人工智能等技术")]),s._v("发展突飞猛进。")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("云计算平台领域")]),s._v("：以 Docker、Kubernetes 为代表的容器及其编排的云原生技术，在应用服务部署自动化运维的浪潮当中得到了长足的发展。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("大数据处理领域")]),s._v("：以 Hadoop、Spark、Alluxio 为代表的大数据并行计算与分布式存储技术，在众多行业领域大数据处理与存储的应用落地中几乎形成了主流生态。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("人工智能框架领域")]),s._v("：PyTorch、Tensorflow、Caffe 等知名 AI 训练框架，在广大 AI 应用开发者反复使用和参与当中，发展日益成熟。")])])]),s._v(" "),t("p",[s._v("其中，大数据应用和 AI 应用通常需要围绕大规模数据展开计算分析，是典型的数据密集型应用，而云计算平台得益于其计算成本和易于规模扩展的优势，以及容器化在高效部署和敏捷迭代方面的长处，吸引了越来越多的数据密集型应用在上面部署运行。")]),s._v(" "),t("p",[s._v("大数据应用、AI、云计算三者的融合正在成为下一个重要的发展趋势。Gartner 预测，到 2023 年，70% 以上的 AI workloads 都将以应用容器化的方式部署运行，然后通过 Serverless 编程模型在云原生环境下进行构建。Spark 3.0.1 版本也开始支持 Kubernetes scheduler，拥抱云原生环境。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("详情见 Gartner 报告："),t("em",[s._v("https://www.gartner.com/en/conferences/emea/data-analytics-switzerland/featured-topics/topic-ai-machine-learning")])])]),s._v(" "),t("li",[t("p",[s._v("Spark3.0.1 runs on K8s："),t("em",[s._v("https://spark.apache.org/docs/latest/running-on-kubernetes.html")])])])]),s._v(" "),t("h3",{attrs:{id:"_2-面临的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-面临的问题"}},[s._v("#")]),s._v(" 2. 面临的问题")]),s._v(" "),t("p",[s._v("从用户的实际体验来看，现有云原生编排框架对数据密集型应用支持不够友好，主要体现在运行效率低下和数据管理复杂两方面。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-logistics-02.webp",alt:"fluid_blog"}})]),s._v(" "),t("p",[t("strong",[s._v("运行效率低下")]),s._v("：如上图所示，训练一个 RestNet50 神经网络，如果基于本地内存运行，大概每秒钟能训练近 1 万张图片；然而，在云原生环境下运行，基于 Cloud Storage 存储架构每秒训练的图片只能达到约 3000 张/秒，性能下降比较明显。")]),s._v(" "),t("p",[t("strong",[s._v("数据管理复杂")]),s._v("："),t("strong",[s._v("数据版本的多变、数据接口的多样、数据类型的抽象以及数据存储的异构")]),s._v("，都给云原生环境下面向数据密集型应用支撑带来了挑战。")]),s._v(" "),t("h3",{attrs:{id:"_3-问题的原因分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-问题的原因分析"}},[s._v("#")]),s._v(" 3.  问题的原因分析")]),s._v(" "),t("p",[s._v("云原生环境和数据密集处理框架在设计理念和机制上存在天然分歧，这两部分技术的早先产生和发展过程是相互独立的。我们可以看到，为了兼顾资源扩展的灵活性和使用成本，"),t("strong",[s._v("计算和存储分离")]),s._v("的基本架构在云原生环境中大行其道；反观之，以大数据和 AI 训练为代表的数据密集型应用框架，为了减少数据传输，设计理念更多需要考虑"),t("strong",[s._v("数据本地化架构")]),s._v("，两者在设计上存在分歧。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-logistics-03.webp",alt:"fluid_blog"}})]),s._v(" "),t("p",[s._v("另外，我们发现在云原生环境中，应用通常是以无状态（stateless）微服务化的方式进行部署，通过 FaaS（Function as a Service）方式串联。而在数据密集型框架应用中，是以数据抽象为中心开展，并进行任务分配执行，比如在 Spark 里都是围绕 RDD 构建整个大数据处理应用，中间加上算子。然而，无状态微服务并不是以数据为中心，这也存在设计上的分歧。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-logistics-04.webp",alt:"fluid_blog"}})]),s._v(" "),t("p",[s._v("以上问题导致以 Kubernetes 为代表的云原生编排框架对于数据密集型应用，尤其是 AI 和大数据应用的支持还不够友好，具体体现在前面所述的运行效率低下、数据操作管理复杂等方面。")]),s._v(" "),t("p",[s._v("我们纵观 Fluid 出现之前的云原生基金会（CNCF）全景图，涵盖了从应用交付 - 运维管理 - 底层存储的方方面面，但是缺少数据高效支撑组件这块重要拼图（注：Fluid近期刚进入CNCF 全景图，侧面反映本文理念得到了认可）。然而，这块拼图的缺失，就会造成大数据密集型应用在云原生环境下运行时，面临数据访问低效、数据隔离性弱、多数据源联合访问复杂方面的技术挑战。")]),s._v(" "),t("h3",{attrs:{id:"_4-云原生环境下的数据支撑挑战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-云原生环境下的数据支撑挑战"}},[s._v("#")]),s._v(" 4. 云原生环境下的数据支撑挑战")]),s._v(" "),t("p",[t("strong",[s._v("具体地，云原生环境下数据支撑的挑战主要分为三个方面")]),s._v("：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("第一："),t("strong",[s._v("云平台计算存储分离架构导致数据访问延时高")]),s._v("。为了监控资源灵活性满足本地无依赖的要求，云原生应用大多采用计算存储分离架构。但是从访问效率的角度来看，要求用云网络传输带宽，当数据密集型应用在云上运行时，会造成数据访问瓶颈、性能下降。")])]),s._v(" "),t("li",[t("p",[s._v("第二："),t("strong",[s._v("混合云场景下跨存储系统的联合分析困难")]),s._v("。大多公司/组织通常基于不同存储管理数据支撑多样化应用，具备其各自的特点。Ceph、GlusterFS、HDFS 都会被广泛使用，数据也通常会散落在这些异构存储当中。然而，当需要联合数据进行综合性分析时，会增加数据移动成本，必然导致在云原生环境下需要面对网络费用、等待延时、人工操作等比较复杂的问题。")])]),s._v(" "),t("li",[t("p",[s._v("第三："),t("strong",[s._v("云环境中数据安全治理与多维度管理复杂")]),s._v("。数据是很多公司的生命线，数据泄露、误操作、生命周期管理不当都会造成巨大损失。如何在云原生环境中保障数据的隔离，保护好用户的数据生命周期，都存在较大挑战。")])])]),s._v(" "),t("h3",{attrs:{id:"_5-kubernetes-生态中缺失的一块抽象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-kubernetes-生态中缺失的一块抽象"}},[s._v("#")]),s._v(" 5. Kubernetes 生态中缺失的一块抽象")]),s._v(" "),t("p",[s._v("综上所述，我们可以总结出一种现象：Kubernetes 生态中目前缺少数据密集型应用高效支撑的这块拼图。现有 Kubernetes 环境能对很多资源进行很好的抽象，包括将资源对象计算抽象成 Pod、将存储抽象成了 PV/PVC、将网络抽象成了 Service。云原生领域还有一些存储抽象主要面向数据持久化进行工作，提供对象和文件的持久化存储管理。但这些软件的功能缺乏以应用为中心的数据抽象及相关生命周期管理。")]),s._v(" "),t("h3",{attrs:{id:"_6-商店购物模式演变的联想"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-商店购物模式演变的联想"}},[s._v("#")]),s._v(" 6. 商店购物模式演变的联想")]),s._v(" "),t("p",[s._v("为了更好地理解这些问题，我们可以做一些联想性的思考。如下图所示，引入商品购物模式，我们将"),t("strong",[s._v("商品、超市、客户")]),s._v("类比为"),t("strong",[s._v("数据、存储、应用")]),s._v("。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-logistics-05.webp",alt:"fluid_blog"}})]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("商品")]),s._v("和"),t("strong",[s._v("数据")]),s._v("都会被消费，商品会被消费者购买掉，数据会被应用读走，两者有一定类似性。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("超市")]),s._v("和"),t("strong",[s._v("存储")]),s._v("类似，都起到贮藏与供应的功能。商品平时会贮藏在超市的货架上，当购买时扮演到供应的角色；对于存储而言，我们平时贮藏的数据都会被持久化到存储设备里，当应用需要时提供给用户。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("客户")]),s._v("和"),t("strong",[s._v("应用")]),s._v("类似，客户会到商店消费购买商品。类似的，应用会到存储读取数据。")])])]),s._v(" "),t("p",[t("strong",[s._v("商品、超市（商铺） 、客")]),s._v("户模式，在过去几千年里发展得非常成熟，非常稳定。直到 2000 年之后发生了颠覆性的变化，这就是电商的产生。电商发明了线上购物模式，其特点体现在不再以店铺为中心而是以客户为中心，商品贮藏在仓库，客户可以在线上虚拟商铺挑选商品，最后由现代化物流将商品交付到客户，交易过程"),t("strong",[s._v("高效便捷、交易量更大")]),s._v("。商品直接放在仓库里，仓库可以进行规范化、独立化管理，之后客户到电商平台上购买货物，会非常便捷、方便。客户不需要到店铺，在地铁上、车上、办公室、家里都可以用手机、电脑进行购物，而且不会存在商品寻找低效的情况，因为客户是在互联网上购物，都可以通过检索方式查找海量商品；线上购物的另一个优势是交易频次变得更高，交易量变得更大；客户也不需要必须去店里提货，快递可以直接送货上门，非常方便。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-logistics-06.webp",alt:"fluid_blog"}})]),s._v(" "),t("p",[s._v("电商模式的成功有很多因素，其中有两大因素非常关键，一是如支付宝这样的第三方数字化支付工具的出现，二是如菜鸟这样专业化的物流系统产生，构建起四通八达的物流网络，使快速的商品寄送模式得以实现。反观回到现在计算机系统中，在现代云架构下，数据贮存在云存储系统中，数据密集型应用也以pod等各种各样资源描述符的方式在云原生环境下运行，但中间却缺乏一个高效的数据交付、数据递送的方式。也就是说，在云原生架构下面，数据贮藏在云存储系统当中，应用还是根据需要去访问数据，但由于类似的数据**“物流系统”的缺失，导致数据密集型应用消费访问数据在云平台上比较低效**。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-logistics-07.webp",alt:"fluid_blog"}})]),s._v(" "),t("h2",{attrs:{id:"fluid-核心理念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fluid-核心理念"}},[s._v("#")]),s._v(" Fluid 核心理念")]),s._v(" "),t("p",[s._v("基于以上的分析，以及从观察中得到的联想，下面来介绍 Fluid 的核心理念。")]),s._v(" "),t("h3",{attrs:{id:"_1-fluid-扮演云原生的-数据物流系统-角色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-fluid-扮演云原生的-数据物流系统-角色"}},[s._v("#")]),s._v(" 1. Fluid 扮演云原生的“数据物流系统”角色")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-logistics-08.webp",alt:"fluid_blog"}})]),s._v(" "),t("p",[s._v("我们可以将 Fluid 所扮演角色理解为云原生环境下“数据物流系统”。回顾一下，在早先的大数据平台中，数据的访问尽量都是通过本地化进行。当用户写一个 MapReduce Job，Job 里包含很多 Task， 其中关注比较多的就是 MapTask 处理数据时是尽量将 Task 调度到用户要处理的数据所在的节点上运行。这种情况下，当用户访问数据时，尽管该数据是在 HDFS 这个分布式系统中，但本质上相当于从分布式系统中的本地节点上获取，我们称之为 Data Fetch。")]),s._v(" "),t("p",[s._v("随着大数据生态系统的迅速发展，其上的应用框架变得越来越多，底层存储系统也变得越来越丰富，各种上层应用要访问不同种类、多样化系统的痛点越来越明显，于是出现了 Alluxio 这样一个优秀的开源项目，来统一管理底层不同存储系统，为上层提供统一化的标准接口，对上层应用屏蔽不同存储的差异。而且 Alluxio 提供内存缓存，加速数据访问。这个过程就解耦了本地化的情况，存储就可以实现分离。这种分离架构在部署好之后通常还是静态的，实现从 Data Fetch 变成 Data Access 的过程。")]),s._v(" "),t("p",[s._v("Fluid 是在 Alluxio 基础之上，在云原生环境的调度层面上进行进一步的研究和拓展，希望获取云原生环境下数据节点以及应用的动态变化信息，让这一类静态的缓存等中间件动态、灵活地调动起来，从而让应用灵活性变得更强，实现数据智能化递送到应用的效果，即动态弹性（Data Delivery） 。")]),s._v(" "),t("p",[s._v("在进行项目设计时，我们希望 Fluid 从视角、思路、理念三个层次带来一些革新：")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("新视角")]),s._v("：从云原生资源调度结合与数据密集型处理两个方面，重新综合审视云原生场景的数据抽象与支撑访问。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("新思路")]),s._v("：针对容器编排缺乏数据感知，数据编排缺乏对云上架构变化的感知，提出了协同编排、多维管理、智能感知的一系列理念和创新方法；从而形成一套云原生环境下数据密集型应用的高效支撑平台。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("新理念")]),s._v("：通过 Fluid 这个项目，希望"),t("strong",[s._v("让数据可以像流体一样在云平台中")]),s._v("、在资源编排层和数据处理层之间能够灵活高效地被访问、转换和管理。")])])]),s._v(" "),t("h3",{attrs:{id:"_2-核心理念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-核心理念"}},[s._v("#")]),s._v(" 2. 核心理念")]),s._v(" "),t("p",[s._v("简单来说，Fluid 的核心理念，可以分为“一个抽象”和“两个编排”。")]),s._v(" "),t("p",[s._v("首先在云原生环境里，抽象出了数据集的概念，它能够提供一个对底层存储的包装，对上层也能提供各种各样的支撑和访问能力，从而通过 API 的方式来简单地在 K8s 下实现对数据的操作。")]),s._v(" "),t("p",[s._v("在这个基础之上，Fluid 提供了两个编排的能力：")]),s._v(" "),t("p",[s._v("首先是对于数据集进行编排，具体是指基于容器调度管理的数据进行编排。传统的方式只对数据本身进行管理，而 Fluid 的数据集编排则转为对承载数据的引擎进行编排和管理。通过对数据引擎进行合理的扩容、缩容和调度操作，和数据引擎的交互，从而实现对数据的迁移、缓存以及数据在 K8s 平台下灵活调度的管理和变化。")]),s._v(" "),t("p",[s._v("第二个编排是对使用和消费这类数据集的应用进行编排。我们需要处理这些应用的调度，在调度时尽量使其感知缓存数据集，这样就可以在这调度应用的时候合理选择节点，从而高效地进行相关计算。")]),s._v(" "),t("p",[s._v("总结来讲，Fluid 具有以下三大功能：")]),s._v(" "),t("h3",{attrs:{id:"_1-提供云平台数据集抽象的原生支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-提供云平台数据集抽象的原生支持"}},[s._v("#")]),s._v(" 1）提供云平台数据集抽象的原生支持")]),s._v(" "),t("p",[s._v("数据密集型应用所需基础支撑能力功能化，实现数据高效访问并降低多维成本。")]),s._v(" "),t("h3",{attrs:{id:"_2-基于容器调度管理的数据集编排"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-基于容器调度管理的数据集编排"}},[s._v("#")]),s._v(" 2）基于容器调度管理的数据集编排")]),s._v(" "),t("p",[s._v("通过数据集缓存引擎与 Kubernetes 容器调度和扩缩容能力的相互配合，实现数据集可迁移性。")]),s._v(" "),t("h3",{attrs:{id:"_3-面向云上数据本地化的应用调度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-面向云上数据本地化的应用调度"}},[s._v("#")]),s._v(" 3）面向云上数据本地化的应用调度")]),s._v(" "),t("p",[s._v("Kubernetes 调度器通过与缓存引擎交互获得节点的数据缓存信息，将使用该数据的应用以透明的方式调度到包含数据缓存的节点，最大化缓存本地性的优势。")]),s._v(" "),t("h2",{attrs:{id:"fluid-架构功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fluid-架构功能"}},[s._v("#")]),s._v(" Fluid 架构功能")]),s._v(" "),t("h3",{attrs:{id:"_1-fluid-系统架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-fluid-系统架构"}},[s._v("#")]),s._v(" 1. Fluid 系统架构")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-logistics-09.webp",alt:"fluid_blog"}})]),s._v(" "),t("p",[s._v("Fluid 是构建在 K8s 上的系统，对原生 K8s 具备良好的兼容性，无需修改任意代码。如上图所示，用户需要定义两个 CRD，分别是 Dataset 和 Runtime。Dataset 是数据集的通用定义，这是我们提供的 K8s 资源对象，需要写 YAML 文件来定义数据集从哪儿来，以及想要放到哪儿去；Runtime 是存储这些数据集的缓存引擎，目前使用的是开源的分布式缓存系统 Alluxio。这里要注意的是 Dataset 和 Runtime 定义的时候，它通常是要具有相同 Namespace，从而实现很好的绑定。")]),s._v(" "),t("p",[s._v("Fluid Operator 是 Fluid 项目的核心，它分为两部分。第一部分是 Fluid-controller-manager，包含很多 Controller；另一部分为 Fluid-Scheduler。这两个组件完成了编排调度的操作。Fluid-controller-manager 做的工作就是对数据进行编排，包括三个 Controller。这三个 Controller 从逻辑上它们是独立的，可以去做单进程。但为了降低复杂性，很多 Controller 的功能编译时被合并成一个和多个可执行文件，所以在真正运行起来时，也是一个进程。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("数据集的 Dataset Controller 负责整个数据集的生命周期管理，包括数据集的创建，以及要和哪个 Runtime 进行绑定。")])]),s._v(" "),t("li",[t("p",[s._v("Runtime Controller 负责数据集如何在云原生平台上被调度与缓存，应该放在哪些节点上，要有多少副本。")])]),s._v(" "),t("li",[t("p",[s._v("Volume Controller：由于 Fluid 是基于 K8s 运行，因此需要和 K8s 进行对接，这里我们使用的是 PVC（数据持久卷）协议，这是 K8s 本地存储栈的协议，使用非常广泛，Fluid 与 PVC 的对接非常流畅。")])])]),s._v(" "),t("p",[s._v("最下面为 Cache Runtime Engine，是真正完成缓存数据具体工作的地方。")]),s._v(" "),t("p",[s._v("图中右边部分的 Fluid-Scheduler 主要是基于定义好的 dataset、runtime controller 等具体信息，对 K8s 的调度器做一些扩展。这里面包含两个 Plugin：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Cache co-locality Plugin：Cache co-locality Plugin 做的事就是结合前面数据编排的信息，把应用调度到最合适的节点上，然后尽量能够让用户去读到缓存节点里面的信息。")])]),s._v(" "),t("li",[t("p",[s._v("Prefetch Plugin：当用户集群还没有缓存流入数据情况之下，且知道应用肯定是要读哪一类数据时，尤其在应用调度和编排运行之前，可以做 Prefetch 的调度，将这个数据从最底下的存储卷当中缓存到数据缓存里面，可以手动触发。")])])]),s._v(" "),t("p",[s._v("再往下就是标准 K8s。通过 K8s 可以对接底层不同的存储，具体的对接方式可通过 K8s 的 PVC 完成。由于通过 Alluxio 进行了抽象，可以直接支持 Alluxio 本身支持的存储类型。")]),s._v(" "),t("h3",{attrs:{id:"_2-fluid-的功能概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-fluid-的功能概念"}},[s._v("#")]),s._v(" 2. Fluid 的功能概念")]),s._v(" "),t("p",[s._v("Fluid 不是全存储加速和管理，而是以应用为中心数据集加速和管理。")]),s._v(" "),t("p",[t("strong",[s._v("三个重要概念")]),s._v("：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Dataset：数据集是逻辑上相关的一组数据的集合，不同数据集的特性和优化都是不一样的，所以对于数据集是要分开管理的，一致的文件特性，会被同一运算引擎使用。")])]),s._v(" "),t("li",[t("p",[s._v("Runtime：真正实现数据集安全性，版本管理和数据加速等能力的执行引擎的接口，包括如何创建、生命周期如何管理等等，定义了一系列生命周期的方法。")])]),s._v(" "),t("li",[t("p",[s._v("AlluxioRuntime：来自 Alluxio 社区，是支撑 Dataset 数据管理和缓存的执行引擎高效实现。")])])]),s._v(" "),t("p",[s._v("通过以上概念与架构，实现了以下功能：")]),s._v(" "),t("h3",{attrs:{id:"_1-加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-加速"}},[s._v("#")]),s._v(" 1）加速")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Observation: know the cache capacity easily.")])]),s._v(" "),t("li",[t("p",[s._v("Portableand Scalable: adjust the cache capacity on demand.")])]),s._v(" "),t("li",[t("p",[s._v("Co-locality:  bring data close to compute, and bring compute close to data.")])])]),s._v(" "),t("p",[s._v("通过 K8s 提供了这个很好的可观测性，我们能够知道我们的缓存容量和当前状态，进一步地我们就可以很灵活的去迁移和扩展缓存，然后按需增加缓存容量。并且在扩展和迁移过程当中会充分考虑 co-locality，即本地性。将数据和计算在编排和调度时放在一起，从而实现加速目的。")]),s._v(" "),t("h3",{attrs:{id:"_2-数据卷接口-统一访问不同存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据卷接口-统一访问不同存"}},[s._v("#")]),s._v(" 2）数据卷接口，统一访问不同存")]),s._v(" "),t("p",[s._v("从对接上面，支持数据卷接口，从而统一访问不同的存储，且 K8s 的任何数据卷都可以包装成 Fluid-Dataset 来进行使用加速。")]),s._v(" "),t("h3",{attrs:{id:"_3-隔离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-隔离"}},[s._v("#")]),s._v(" 3）隔离")]),s._v(" "),t("p",[s._v("隔离机制使得对数据集的访问可以在不同存储加速间进行隔离，并且实现权限控制管理。")]),s._v(" "),t("h3",{attrs:{id:"_3-如何使用-fluid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何使用-fluid"}},[s._v("#")]),s._v(" 3. 如何使用 Fluid")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-logistics-10.webp",alt:"fluid_blog"}}),s._v("\n以上图为例，用户在使用场景中需要使用来自两个不同地方的数据，假设一个来自阿里云，另外一个是本地存储 Ceph。在 Fluid 里面我们可以很容易地描述这样的数据集，通过创建一个自定义 K8s 资源对象 Dataset，对应的 mountPoint 可以加载两个，分别是阿里云和 Ceph。")]),s._v(" "),t("p",[s._v("创建好就可以运行，这个过程中 Fluid 会创建一个 Dataset，并自动将它变成一个 PVC。当用户需要用这个数据时创建一个 Pod，以 PVC 挂载的方式，将 Dataset 关联到运行中的 Pod 中对数据进行访问。甚至 Pod 根本都不知道 PVC 后台运行的是 Fluid，而不是其他的存储，例如 NFS。整个过程和背后的原理对用户都是透明的，这使得对遗留程序的对接非常友好。")]),s._v(" "),t("h3",{attrs:{id:"_4-如何检查和观测-dataset-状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何检查和观测-dataset-状态"}},[s._v("#")]),s._v(" 4. 如何检查和观测 dataset 状态")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-logistics-11.webp",alt:"fluid_blog"}})]),s._v(" "),t("p",[s._v("当真正运行起来时有很多可观测的东西，我们在 Dataset CRD 里定义了很多 metrics。如上图所以，缓存总容量为 200GB，实际需要的容量为 84.29GB，无需扩容，后续可根据实际需求灵活扩容。通过这个工具，用户可以有效查询存储容量与使用量，从而实现可观测性。")]),s._v(" "),t("h3",{attrs:{id:"_5-根据数据集本地性调度作业"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-根据数据集本地性调度作业"}},[s._v("#")]),s._v(" 5. 根据数据集本地性调度作业")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-logistics-12.webp",alt:"fluid_blog"}})]),s._v(" "),t("p",[s._v("对于使用数据集应用的编排也很容易，只需要使用 PVC 模式把 Fluid 数据集挂载到应用当中，然后 K8s 调度器就会和 Fluid 调度器进行交互。")]),s._v(" "),t("p",[s._v("如上图例子所示，挂载之后进行交互，根据调度策略安排 Pod 在对应的节点上运行。K8s 调度器和 Fluid 调度器交互时会看见三个节点，其中有两个有 Alluxio 缓存节点。我们知道经典的 K8s 调度包括两个很重要的阶段，一个是过滤阶段，另一个是优选阶段。在过滤阶段就会将第三个节点直接过滤掉，而在优选阶段可以利用一些内置优选的策略来选择更合适的节点，例如缓存空间量大小，这里面有很多未来可以拓展优化实现的空间。")]),s._v(" "),t("h2",{attrs:{id:"fluid-性能评估"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fluid-性能评估"}},[s._v("#")]),s._v(" Fluid 性能评估")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-logistics-13.webp",alt:"fluid_blog"}})]),s._v(" "),t("p",[s._v("如上图所示，我们发现卡数量越来越多的时候，使用 Fluid 会带来巨大的性能提升。这其中的本质原因是当 GPU 数量变得越来越多（或 GPU 算力越来越强）时，访问大规模数据已经成为整个训练任务的瓶颈。从上图是训练结果来看，使用 Fluid 训练的端到端的性能最后提升约1倍，减少成本并提升了用户体验。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-logistics-14.webp",alt:"fluid_blog"}})]),s._v(" "),t("h1",{attrs:{id:"加入-fluid-社区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加入-fluid-社区"}},[s._v("#")]),s._v(" 加入 Fluid 社区")]),s._v(" "),t("p",[s._v("想要了解更多关于 Fluid 的信息，请访问 Fluid 项目 Github 地址或查看 Fluid 项目主页。也欢迎大家加入 Fluid 社区交流钉钉群，与更多用户和开发者深入交流项目技术及其实际使用场景。")]),s._v(" "),t("FluidCommunity")],1)}),[],!1,null,null,null);t.default=_.exports}}]);