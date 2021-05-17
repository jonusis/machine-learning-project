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
              setPageText('监督学习，又叫有监督学习，监督式学习，是机器学习的一种方法，可以由训练资料中学到或建立一个模式（函数/learning model），并依次模式推测新的实例。训练资料是由输入物件（通常是向量）和预期输出所组成。函数的输出可以是一个连续的值（称为回归分析），或是预测一个分类标签（称为分类）。一个监督式学习者的任务在观察完一个事先标记过的训练范例（输入和预期输出）后，去预测这个函数对任何可能出现的输入的输出。要达到此目的，学习者必须以“合理”的方式从现有的资料中一般化到非观察到的情况。');
              setPageTitle('监督学习');
              setpageResourse('资料来源：《wikipedia——监督学习》');
            }}>
              <img src={imageG} className="titleImg" alt=""/>
              <div className="wordStyle">监督学习</div>
              <div className="signPos2"> > </div>
            </div>
            <div className="title" onClick = {() =>{
              setPageText('机器学习指从有限的观测数据中学习出具有一般性的规律，并利用这些规律对未知数据进行预测的方法。机器学习是人工智能的一个重要分支，并逐渐成为推动人工智能发展的关键因素。作为一门学科，机器学习通常指一类问题以及解决这类问题的方法，即如何从观测数据（样本）中寻找规律，并利用学习到的规律（模型）对未知或无法观测的数据进行预测。机器学习与人类学习过程比较类似，我们教小孩子识别数字也是这样的过程。');
              setPageTitle('机器学习');
              setpageResourse('资料来源：《神经网络与深度学习》');
            }}>
              <img src={imageB} className="titleImg" alt=""/>
              <div className="wordStyle">机器学习</div>
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