import React, { useEffect, useState } from 'react';
import Banner from '../../compoments/banner/index';
import Footer from '../../compoments/bottomBar/index'
import imageU from '../../resorse/新闻_slices/新闻.png';
import imageC from '../../resorse/换一换_slices/换一换.png';
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
        }).catch((error) => alert(error))
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
        }).catch((error) => alert(error))
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
        }).catch((error) => alert(error))
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
        }).catch((error) => alert(error))
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
                <div className="SwordStyle">信息资讯系统构建</div>
                <div className='box-text'>
                    <div>考虑到机器学习具备极强的时效性，同时本团队在学习过程中遇到了极多的困难，因此团队构建了网络信息的采集系统，对最新信息进行聚合和处理，最终完成一个机器学习的聚合系统。</div>
                    <div>为了方便查找，我们将信息分为以下四类：</div>
                    <div>1. 信息媒体号：其主要目标，是为了以最快的速度报导行业新闻和前沿技术，同时解读一些最新技术。作为相关方向学习者，偶尔了解即可。</div>
                    <div>2. 学术论坛号：聚焦于前沿学术分享，同时也包括一些行业的信息，推荐、解读人工智能前沿论文成果。作为相关方向学习者，可以选择性精读。</div>
                    <div>3. 个人博客号：具有很强原创输出能力的个体对自己的学习心得和方法的总结。聚焦于分享自己的学习理念。作为相关方向学习者，可以多认识了解。</div>
                    <div>4. 系列教程号：对标课堂教材，聚焦于系统性输出知识，让大家能够在一个完整的生态上完成整个的学习过程。作为相关方向学习者，可以系统性跟读。</div>
                </div>
            </div>
            <div className='infor'>
                <div className="backWord">Huazhong information</div>
                <div className="featureTitle">
                    <img src={imageU} className="titleImage" alt=''/>
                    <div className="titleText">信息资讯</div>
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
            <Footer/>
        </div>
    );    
}

export default SecPage;