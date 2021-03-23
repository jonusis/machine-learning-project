import React, { useState } from 'react';
import Banner from '../../compoments/banner/index';
import imageU from '../../resorse/新闻_slices/新闻.png';
import './index.css'


function SecPage(pros) {
    const [infor,setInfor] = useState([{title:'开新局 谋新篇 学校部署2021年工作要点', date:'2020-03-01'}])
    return(
        <div className='SecPage'>  
            <Banner/>
            <div className='Sbox'>
                <div className="SwordStyle">华中师范大学</div>
                <div className='box-text'>
                    华中师范大学（Central China Normal University）简称“华中师大”，位于湖北省会武汉，是中华人民共和国教育部直属重点综合性师范大学，国家“211工程”、“985工程优势学科创新平台”重点建设院校，世界一流学科建设高校，入选国家“2011计划”、“111计划”、国家建设高水平大学公派研究生项目、国家大学生文化素质教育基地，中日人文交流大学联盟创始高校，武汉七校联合办学成员，全国首批博士、硕士学位授予单位，国家师范生免费教育试点高校。
                </div>
            </div>
            <div className='infor'>
                <div className="backWord">Huazhong information</div>
                <div className="featureTitle">
                    <img src={imageU} className="titleImage" alt=''/>
                    <div className="titleText">华中资讯</div>
                </div>
                <div className='infor-box'>
                    <div className='title-infor'>
                        <img src={imageU} className='infor-image' alt=''></img>
                        <div className='title-text'>信息媒介</div>
                        <div className='change'>换一换</div>
                    </div>
                    {infor.map((infor,index)=>{ 
                        return  <div className='inforBox-small'>
                                    <div>{index+1}</div>
                                    <div className='inforBoxtitle'>{infor.title}</div>
                                    <div className='inforBoxdate'>{infor.date}</div>
                                </div>
                    })}
                </div>
            </div>
        </div>
    );    
}

export default SecPage;