import React, { useState } from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Footer from '../../compoments/bottomBar/index'
import './index.css'
import 'antd/dist/antd.css';


function ThirdPage() {
    // 本地存储的算法类型
    const selector = ["图结构+自训练算法","Doc2vec+CentroidEM","TFIDF+CentroidEM","SIF+Word2vec+CentroidEM","BERT+CNN算法","BERT+BiLSTM+CRF算法"];
    // 当前存储的算法
    const [algorithm,setAlgorithm] = useState('自训练算法');
    // 当前的算法id
    const [alogorithmId,setId] = useState('0');
    // 当前的提交方式
    const [submitWay,setSubmitWay] = useState('文本提交');
    // 当前的提交类型
    const [submitType,setSubmitType] = useState('带标记文本提交');
    const [falsePredict,setPredict] = useState(0);
    // 存储调api后的输出结果
    const [resInput,setResInput] = useState([]);
    // 存储使用文件传输方式的文件列表
    const [fileArray,setfileArray] = useState([]);
    // 存储放置在本地，将要上传的到后台接口的文件列表
    const [localfileList,setfileList] = useState([]);
    // 用于做上传文件的数组
    var textObj = {};
    // 用于修改半监督学习算法和监督学习算法
    var [algorithmContent,setCnt] = useState('半监督学习算法');
    // 用于做分类器和算法切换
    function choseVal(event){
        setId(event.target.value);
        var val = event.target.value;
        if(val === "0"){
            setAlgorithm('自训练算法');
            setCnt('半监督学习算法');
        }else if(val === '4'){
            setAlgorithm('CNN算法');
            setCnt('有监督学习算法');
        }else if(val === '5'){
            setAlgorithm('BiLSTM+CRF算法');
            setCnt('有监督学习算法');
        }else{
            setCnt('半监督学习算法');
            setAlgorithm('CentroidEM');
        }
    }
    // 用于切换提交方式
    function featSubmitWay(event){
        const tempWay = event.target.value;
        console.log(tempWay);
        setSubmitWay(tempWay);
    }
    function featSubmitType(event){
        const tempType = event.target.value;
        setSubmitType(tempType);
        setResInput([]);
    }
    const props = {
        accept: '.txt', // 接收文件类型
        name: 'file',
        maxCount:5,
        // 阻塞上传，把文件内容和文件名放置入fileArray
        beforeUpload(file){
            return new Promise((reject) => {
                setfileList(localfileList.concat(file));
                var reader = new FileReader();
                reader.readAsText(file, "UTF-8");
                reader.onload = function() {
                    console.log('文件内容', this.result);
                    setfileArray(fileArray.concat({fileName:file.name,fileContent:this.result}));
                }
                return reject(false);
            })
        },
        // File类型的文件存放在fileList中
        fileList : localfileList,
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
    }
    // 用于提交文件类型的文本
    function postMsg(){
        let tempid = alogorithmId;
        if(alogorithmId === '4' || alogorithmId === '5') tempid = 3;
        if(submitType === "无标记文本提交"){
            let url = '//101.37.163.122:5000/api/v1/sniffle?kind=' + tempid;
            textObj.data = [];
            console.log(fileArray);
            fileArray.map((file) => {
                textObj.data.push({file_name:file.fileName,content:file.fileContent});
                return textObj;
            })
            setfileArray([]);
            fetch( url , {
                mode:'cors',
                method: 'POST',
                body:JSON.stringify(textObj),
                headers:{
                    'Content-Type' : 'application/json; charset=UTF-8',
                }
                }).then((res) => {
                    return res.json();
                }).then((res) =>{
                    console.log(res.data);
                    var tmparr = [];
                    res.data.map((item,index) => {
                        tmparr = tmparr.concat({id:resInput.length + index,messageType:submitWay,messageContent:item.content,algorithm:selector[alogorithmId],selectRes:item.result});
                        return tmparr;
                    })
                    setResInput(resInput.concat(tmparr));
                    console.log(resInput);
                    setfileList([]);
                }).catch((error) =>{
                    alert(error);
            })
        }else{
            let url = '//101.37.163.122:5000/api/v1/sniffle2?kind=' + tempid;
            textObj.data = [];
            console.log(fileArray);
            fileArray.map((file) => {
                textObj.data.push({content:file.fileContent});
                return textObj;
            })
            setfileArray([]);
            fetch( url , {
                mode:'cors',
                method: 'POST',
                body:JSON.stringify(textObj),
                headers:{
                    'Content-Type' : 'application/json; charset=UTF-8',
                }
                }).then((res) => {
                    return res.json();
                }).then((res) =>{
                    console.log(res);
                    var tmparr = [];
                    var tmpRedict = 0;
                    res.data.map((item,index) => {
                        tmparr = tmparr.concat({id:resInput.length + index,messageType:submitWay,messageTitle:submitType,messageContent:item.result.content,algorithm:selector[alogorithmId],selectRes:item.result.predict,predict:item.result.origin});
                        if(item.result.origin === item.result.predict){
                            tmpRedict++;
                        }
                        return tmparr;
                    })
                    setPredict(tmpRedict + falsePredict);
                    setResInput(resInput.concat(tmparr));
                    console.log(resInput);
                    setfileList([]);
                }).catch((error) =>{
                    alert(error + 'error您提交的文件格式有误');
            })
        }
    }
    // 用于文本提交类型的不良文本
    function postInput(){
        let test = document.getElementById("test");
        let text2 = test.value;
        if(text2.replace(/(^\s*)|(\s*$)/g, "") === ""){
            alert('您输入的文本内容不能为空或全为空格');
        }else{
            let tempid = alogorithmId;
            if(alogorithmId === '4' || alogorithmId === '5') tempid = 2;
            if(submitType === "无标记文本提交"){
            let url = '//101.37.163.122:5000/api/v1/sniffle?kind=' + tempid;
            textObj.data = [];
            textObj.data.unshift({file_name:"",content:text2});
            fetch( url , {
                mode:'cors',
                method: 'POST',
                body:JSON.stringify(textObj),
                headers:{
                    'Content-Type' : 'application/json; charset=UTF-8',
                }
                }).then((res) => {
                    return res.json();
                }).then((res) =>{
                    let tmparr = {id:resInput.length,messageType:submitWay,messageContent:res.data[0].content,algorithm:selector[alogorithmId],selectRes:res.data[0].result};
                    setResInput(resInput.concat(tmparr));
                    console.log(resInput);
                    test.value = "";
                }).catch((error) =>{
                    alert(error);
                })
            }else{
            let url = '//101.37.163.122:5000/api/v1/sniffle2?kind=' + tempid;
            textObj.data = [];
            textObj.data.unshift({content:text2});
            fetch( url , {
                mode:'cors',
                method: 'POST',
                body:JSON.stringify(textObj),
                headers:{
                    'Content-Type' : 'application/json; charset=UTF-8',
                }
                }).then((res) => {
                    return res.json();
                }).then((res) =>{
                    let tmparr = [],tmpRedict = 0;
                    res.data.map((item,index) => {
                        tmparr = tmparr.concat({id:resInput.length + index,messageType:submitWay,messageTitle:submitType,messageContent:item.result.content,algorithm:selector[alogorithmId],selectRes:item.result.predict,predict:item.result.origin});
                        if(item.result.origin === item.result.predict){
                            tmpRedict++;
                        }
                        console.log(falsePredict);
                        return tmparr;
                    })
                    setPredict(tmpRedict + falsePredict);
                    setResInput(resInput.concat(tmparr));
                    console.log(resInput);
                    test.value = "";
                }).catch((error) =>{
                    alert(error);
                })
            }
        }
    }
    return(
        <div> 
            <div className="massageInput">
                <div className="titleWord">信息提交</div>
                <div className="massageBox">
                    <div class="contentWord">分类器选择</div>
                    <select value={alogorithmId} onChange={choseVal}>
                        <option value="0" selected="selected">图结构</option>    
                        <option value="1">Doc2vec</option>
                        <option value="2">TFIDF</option>
                        <option value="3">SIF+Word2vec</option>
                        <option value="4">BERT+CNN算法</option>
                        <option value="5">BERT+BiLSTM+CRF算法</option>
                    </select>
                </div>

                <div className="contentSpace">
                    <div className="contentSelect">{algorithmContent}</div>
                    <div className="contentVal">{algorithm}</div>
                </div>
                <div className="submitWay">
                    <div className="contentSelect">文本提交方式</div>
                    <button className="btn blockDistance2" onClick={featSubmitWay} value="文本提交">文本提交</button>
                    <button className="btn blockDistance1" onClick={featSubmitWay} value="上传文件提交">上传文件提交</button>
                </div>
                <div className="submitWay">
                    <div className="contentSelect">文本提交类型</div>
                    <button className="btn blockDistance2" onClick={featSubmitType} value="带标记文本提交">带标记文本提交</button>
                    <button className="btn blockDistance1" onClick={featSubmitType} value="无标记文本提交">无标记文本提交</button>
                </div>
                {submitWay === "文本提交"?
                <div>
                <div className="inputType">
                    <div class="contentWord inputPos">文本提交</div>
                    <textarea rows="10" cols="35" id="test" placeholder="请输入文本"> </textarea>
                </div>
                <div className="mid">
                    <button className="submit" onClick={postInput}>提交</button>
                </div>
                </div>
                :
                <div className="inputBox">
                <div className="inputType">
                    <div className="contentWord margin">提交文件</div>
                </div>
                <div className = "upLoad">
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
                </div>
                <div class="permission"> 格式txt 每次至多上传五个文件</div>
                <div className="mid">
                    <button className="submit" onClick={postMsg}>提交</button>
                </div>
            </div>
                }
            </div>
            {submitType === "带标记文本提交"? 
            <div>
                <div className="conTable">分类器预测成功率为：{Number(falsePredict / resInput.length * 100).toFixed(2) + '%'}</div>
            <table border="1" className="resTable top">
            <tr>
                <th>编号</th>
                <th>提交信息类型</th>
                <th>文本内容/文件名</th>
                <th>分类器类型</th>
                <th>预测结果</th>
                <th>分类结果</th>
            </tr>
            {resInput.map((info) =>{
               return <tr>
                    <td>{info.id}</td>
                    <td>{info.messageType}</td>
                    <td>{info.messageContent}</td>
                    <td>{info.algorithm}</td>
                    <td>{info.predict}</td>
                    <td>{info.selectRes}</td>
                    </tr>
            })}
            </table>
            </div>
            :
            <table border="1" className="resTable">
                <tr>
                    <th>编号</th>
                    <th>提交信息类型</th>
                    <th>文本内容/文件名</th>
                    <th>分类器类型</th>
                    <th>分类结果</th>
                </tr>
                {resInput.map((info) =>{
                   return <tr>
                        <td>{info.id}</td>
                        <td>{info.messageType}</td>
                        <td>{info.messageContent}</td>
                        <td>{info.algorithm}</td>
                        <td>{info.selectRes}</td>
                        </tr>
                })}
            </table>
        }
        <Footer/>
        </div>
    );    
}

export default ThirdPage;