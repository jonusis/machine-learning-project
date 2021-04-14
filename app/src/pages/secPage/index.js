
import { Button } from 'antd';

import React, { useEffect, useState } from 'react';
import Banner from '../../compoments/banner/index';
import imageU from '../../resorse/新闻_slices/新闻.png';
import imageC from '../../resorse/换一换_slices/换一换.png';
import BottomBar from '../../compoments/bottomBar'

import './index.css'
var data = [],indexNow,dataNow= []
var data1 = [],indexNow1,dataNow1= []
var data2 = [],indexNow2,dataNow2= []
var data3 = [],indexNow3,dataNow3= []
function SecPage(pros) {
    useEffect(()=>{
        fetch('http://101.37.163.122:5000/api/v1/article?kind=0',{
            mode:'cors',
            method: 'GET',
            headers:{
                'Content-Type' : 'application/json; charset=UTF-8',
              }
        }).then((res)=>{
            return res.json()
        }).then(res=>{
            data = []
            dataNow= []
            res.list.map((infor,index) =>{
                data.push(infor)
                if(index <= 9){ 
                    dataNow.push(infor)
                }

                return data;
            })
            indexNow = 9
            setInfor(dataNow)
        })
        fetch('http://101.37.163.122:5000/api/v1/article?kind=1',{
            mode:'cors',
            method: 'GET',
            headers:{
                'Content-Type' : 'application/json; charset=UTF-8',
              }
        }).then((res)=>{
            return res.json()
        }).then(res=>{
            data1 = []
            dataNow1= []
            res.list.map((infor,index) =>{
                data1.push(infor)
                if(index <= 9){ 
                    dataNow1.push(infor)
                }

                return data1;
            })
            indexNow1 = 9
            setInfor1(dataNow1)
        })
        fetch('http://101.37.163.122:5000/api/v1/article?kind=2',{
            mode:'cors',
            method: 'GET',
            headers:{
                'Content-Type' : 'application/json; charset=UTF-8',
              }
        }).then((res)=>{
            return res.json()
        }).then(res=>{
            data2 = []
            dataNow2= []
            res.list.map((infor,index) =>{
                data2.push(infor)
                if(index <= 9){ 
                    dataNow2.push(infor)
                }

                return data2;
            })
            indexNow2 = 9
            setInfor2(dataNow2)
        })
        fetch('http://101.37.163.122:5000/api/v1/article?kind=3',{
            mode:'cors',
            method: 'GET',
            headers:{
                'Content-Type' : 'application/json; charset=UTF-8',
              }
        }).then((res)=>{
            return res.json()
        }).then(res=>{
            data3 = []
            dataNow3= []
            res.list.map((infor,index) =>{
                data3.push(infor)
                if(index <= 9){ 
                    dataNow3.push(infor)
                }

                return data3;
            })
            indexNow3 = 9
            setInfor3(dataNow3)
        })
    },[])
    const [infor,setInfor] = useState(dataNow);
    const [infor1,setInfor1] = useState(dataNow);
    const [infor2,setInfor2] = useState(dataNow);
    const [infor3,setInfor3] = useState(dataNow);
    function changeData(){
        dataNow = []
        data.map((infor,index) =>{
            if(indexNow === 29) indexNow = 0
            if(index >= indexNow && index < indexNow+10){
                dataNow.push(infor)
            } 

            return dataNow;
        })
        setInfor(dataNow)
        indexNow +=10
    }
    function changeData1(){
        dataNow1 = []
        data1.map((infor,index) =>{
            if(indexNow1 === 29) indexNow1 = 0
            if(index >= indexNow1 && index < indexNow1+10){
                dataNow1.push(infor)
            } 
            return data1;
        })
        setInfor1(dataNow1)
        indexNow1 +=10
    }
    function changeData2(){
        dataNow2 = []
        data2.map((infor,index) =>{
            if(indexNow2 === 29) indexNow2 = 0
            if(index >= indexNow2 && index < indexNow2+10){
                dataNow2.push(infor)
            } 

            return data2;

        })
        setInfor2(dataNow2)
        indexNow2 +=10
    }
    function changeData3(){
        dataNow3 = []
        data3.map((infor,index) =>{
            if(indexNow3 === 29) indexNow3 = 0
            if(index >= indexNow3 && index < indexNow3+10){
                dataNow3.push(infor)
            } 

            return data3;
        })
        setInfor3(dataNow3)
        indexNow3 +=10
    }
    
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
                <div className='box1'>
                    <div className='infor-box'>
                        <div className='title-infor'>
                            <div className='s1'>
                                <img src={imageU} className='infor-image' alt=''></img>
                                <div className='title-text'>信息媒介</div>
                            </div>
                            <button className='changeButton' onClick={changeData}>
                                <img src={imageC} className='infor-image1' alt=''></img>
                                换一换
                            </button>
                        </div>
                        <div className='inforBox'>
                        {infor.map((infor,index)=>{ 
                            return  <div className='inforBox-small'>
                                        <div className= {index+1 === 1 ? 'index1' : index+1 === 2 ? 'index2' : index+1 === 3 ? 'index3' : 'index4'}>{index+1}</div>
                                        <a className='inforBoxtitle' href={infor.url}>{infor.name}</a>
                                        <div className='inforBoxdate'>{infor.date}</div>
                                    </div>
                        })}
                        </div>
                    </div>
                    <div className='infor-box'>
                        <div className='title-infor'>
                            <div className='s1'>
                                <img src={imageU} className='infor-image' alt=''></img>
                                <div className='title-text'>学术论坛</div>
                            </div>
                            <button className='changeButton' onClick={changeData1}>
                                <img src={imageC} className='infor-image1' alt=''></img>
                                换一换
                            </button>
                        </div>
                        <div className='inforBox'>
                        {infor1.map((infor,index)=>{ 
                            return  <div className='inforBox-small'>
                                        <div className= {index+1 === 1 ? 'index1' : index+1 === 2 ? 'index2' : index+1 === 3 ? 'index3' : 'index4'}>{index+1}</div>
                                        <a className='inforBoxtitle' href={infor.url}>{infor.name}</a>
                                        <div className='inforBoxdate'>{infor.date}</div>
                                    </div>
                        })}
                        </div>
                    </div>
                </div>
                <div className='box1'>
                    <div className='infor-box'>
                        <div className='title-infor'>
                            <div className='s1'>
                                <img src={imageU} className='infor-image' alt=''></img>
                                <div className='title-text'>个人博客</div>
                            </div>
                            <button className='changeButton' onClick={changeData2}>
                                <img src={imageC} className='infor-image1' alt=''></img>
                                换一换
                            </button>
                        </div>
                        <div className='inforBox'>
                        {infor2.map((infor,index)=>{ 
                            return  <div className='inforBox-small'>
                                        <div className= {index+1 === 1 ? 'index1' : index+1 === 2 ? 'index2' : index+1 === 3 ? 'index3' : 'index4'}>{index+1}</div>
                                        <a className='inforBoxtitle' href={infor.url}>{infor.name}</a>
                                        <div className='inforBoxdate'>{infor.date}</div>
                                    </div>
                        })}
                        </div>
                    </div>
                    <div className='infor-box'>
                        <div className='title-infor'>
                            <div className='s1'>
                                <img src={imageU} className='infor-image' alt=''></img>
                                <div className='title-text'>系列教程</div>
                            </div>
                            <button className='changeButton'onClick={changeData3} >
                                <img src={imageC} className='infor-image1' alt=''></img>
                                换一换
                            </button>
                        </div>
                        <div className='inforBox'>
                        {infor3.map((infor,index)=>{ 
                            return  <div className='inforBox-small'>
                                        <div className= {index+1 === 1 ? 'index1' : index+1 === 2 ? 'index2' : index+1 === 3 ? 'index3' : 'index4'}>{index+1}</div>
                                        <a className='inforBoxtitle' href={infor.url}>{infor.name}</a>
                                        <div className='inforBoxdate'>{infor.date}</div>
                                    </div>
                        })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <BottomBar ></BottomBar>
            </div>
        </div>
    );    
}

export default SecPage;