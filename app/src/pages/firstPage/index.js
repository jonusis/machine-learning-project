import React,{ useState } from 'react';
// import Header from '../../compoments/header/index'
import Banner from '../../compoments/banner/index';
import Footer from '../../compoments/bottomBar/index';
import imageU from '../../resorse/学习经历_slices/logo.png';
import imageG from '../../resorse/学习资料_slices/logo.png';
import imageB from '../../resorse/learn 机器学习_slices/logo.png';
import imageC from '../../resorse/项目_slices/logo.png';
import imageH from '../../resorse/合作_slices/logo.png';
import './index.css';

function FirstPage() {
  const [pageTitle,setPageTitle] = useState('半监督学习');
  const [pageText,setPageText] = useState("在监督学习中，由于对大量数据都进行标注成本往往太高，所以只对其中一部分数据进行人工标注得到训练集，而用少量有标签样本数据训练的出分类模型往往并不具备足够强泛化能力较弱。此外，海量的无标签数据中又蕴含一些很有价值的信息，对海量的无标签样本数据完全不加利用显得太过浪费。为了解决这个问题,半监督学习的方法应运而生。21 世纪以前，由于计算机的存储性能以及处理性能上的不足，再加上统计学理论并不完善，半监督学习发展较慢。进入 21 世纪之后，半监督学习逐渐成为机器学习领域的重点研究方向之一。");
  const [pageResourse,setpageResourse] = useState('资料来源：《基于主动自步学习的文本分类研究》');
    return (
      <div className="FirstPage">
        <Banner/>
        <div className="box">
          <div className="introduction">
            <div className="title" onClick = {() =>{
              setPageText('在监督学习中，由于对大量数据都进行标注成本往往太高，所以只对其中一部分数据进行人工标注得到训练集，而用少量有标签样本数据训练的出分类模型往往并不具备足够强泛化能力较弱。此外，海量的无标签数据中又蕴含一些很有价值的信息，对海量的无标签样本数据完全不加利用显得太过浪费。为了解决这个问题,半监督学习的方法应运而生。21 世纪以前，由于计算机的存储性能以及处理性能上的不足，再加上统计学理论并不完善，半监督学习发展较慢。进入 21 世纪之后，半监督学习逐渐成为机器学习领域的重点研究方向之一。');
              setPageTitle('半监督学习');
              setpageResourse('资料来源：《基于主动自步学习的文本分类研究》');
            }}>
              <img src={imageU} className="titleImg" alt=""/>
              <div className="wordStyle"> 半监督学习</div>
              <div className="signPos1"> > </div>
            </div>
            <div className="title" onClick = {() =>{
              setPageText('简称神经网络或类神经网络，在机器学习和认知科学领域，是一种模仿生物神经网络（动物的中枢神经系统，特别是大脑）的结构和功能的数学模型或计算模型，用于对函数进行估计或近似。神经网络由大量的人工神经元联结进行计算。大多数情况下人工神经网络能在外界信息的基础上改变内部结构，是一种自适应系统，方法的一种实际应用，通过统计学的标准数学方法我们能够得到大量的可以用函数来表达的局部结构空间，另一方面在人工智能学的人工感知领域，我们通过数学统计学的应用可以来做人工感知方面的决定问题（也就是说通过统计学的方法，人工神经网络能够类似人一样具有简单的决定能力和简单的判断能力），这种方法比起正式的逻辑学推理演算更具有优势。');
              setPageTitle('人工神经网络');
              setpageResourse('资料来源：wikipedia——人工神经网络');
            }}>
              <img src={imageG} className="titleImg" alt=""/>
              <div className="wordStyle"> 人工神经网络</div>
              <div className="signPos2"> > </div>
            </div>
            <div className="title" onClick = {() =>{
              setPageText('Bert是NLP里里程碑式的工作，对于后面NLP的研究和工业应用会产生长久的影响，但是从模型或者方法角度看，Bert借鉴了ELMO，GPT及CBOW，主要提出了Masked 语言模型及Next Sentence Prediction，然而Next Sentence Prediction基本不影响大局，而Masked LM明显借鉴了CBOW的思想。所以说Bert的模型没什么大的创新，更像NLP重要进展的集大成者。');
              setPageTitle('Bert');
              setpageResourse('资料来源：《从Word Embedding到Bert模型-自然语言处理中的预训练技术发展史》');
            }}>
              <img src={imageB} className="titleImg" alt=""/>
              <div className="wordStyle"> Bert</div>
              <div className="signPos3"> > </div>
            </div>
          </div>
          <div className="description">
            <div className="desTitle">{pageTitle}</div>
            <div className="desTextline">{pageText}</div>
            <div className="desResourse">{pageResourse}</div>
          </div>
        </div>
        <div className="feature">
          <div className="backWord">Project Features</div>
          <div className="featureTitle">
            <img src={imageC} className="titleImage" alt=''/>
            <div className="titleText">项目特色</div>
          </div>
          <div className="featureText">
          <div>语言的发展是社会发展的表现形式，语言文明是社会文明的重要体现。“使网络空间清朗起来”更是习近平总书记多次提及的互联网政治目标。加强对网络不良语言信息的检测与管理无疑是整治网络整体环境的有效突破口。然而目前对于网络不良语言信息检测的研究相对较少，同时网络上海量的媒体内容使得不良语言信息分析，过滤与监测工作量巨大。如果仅仅使用少量的有标记的不良语言标记样本，利用它们训练出来的学习系统往往很难具有泛化能力。</div>
          <div>因此，本项目旨在： </div>
          <div>1. 搭建网络不良语言信息监测仿真平台，建立完善的相关API接口调用，为建设网络环境不良文本检测平台提供一套可行的方案； </div>
          <div>2. 研究基于半监督学习的网络不良语言自动监测方法，迅速，有效的实现对于网络长文本短文本中存在的不良语言信息进行自动学习和识别。 </div>
          <div>3. 构建不良语言词典和网络不良语料库，为网络不良语言信息的监测和应用技术提供支持。</div>
          <div>4. 克服现有条件对网络舆论检测的局限，迅速有效的实现对网络中不良语言的自动学习与识别。在保证准确率的同时降低人工检测成本，并可识别由于缺乏先验知识、难以人工标注的不良语言。 </div>
          <div>5. 经过半监督学习，构建科学合理且可动态扩展的不良语言语料库，实现不良语言的动态监测和统计分析，为网络不良语言的管理提供一些参考与帮助。 本网站为服务该项目搭建的平台。同时对于最新机器学习相关新闻与分享进行二次组织与深度聚合，从而有效提升信息服务质量，服务于学习者的信息获取需求； 网站首期提供的分类器包括：Centroid算法，FastText，TextCNN，bert等，同时创造性的使用基于图结构的KNN算法；涉及半监督算法有：简单自训练，MixMatch等。 </div>
          <div>注：本项目定义不良文本为含有色情、反动、辱骂信息的文本。</div>
          </div>
        </div>
        <div className="feature">
          <div className="backWord">Project Features</div>
          <div className="featureTitle">
            <img src={imageH} className="titleImage" alt=''/>
            <div className="titleText">开发感言</div>
          </div>
          <div className="featureText idt">
          <div>在项目开发过程中感谢沈显君老师的支持与鼓励，同时也要感谢学长学姐对本项目的教导和帮助。 通过本项目，我们深刻地体会到了团队协作的重要性以及自己知识的不足。在此次开发过程中， 我们学到了许多，认识到了与更优秀的计算机人之间存在的差距。</div>
          </div>
        </div>
        <Footer/>
      </div>

    );
  }

export default FirstPage;