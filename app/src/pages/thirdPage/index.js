import React, { useState } from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Footer from '../../compoments/bottomBar/index'
import './index.css'
import 'antd/dist/antd.css';


function ThirdPage() {
    // 本地存储的算法类型
    const selector = ["文本图+简单自训练算法（KNN)","Doc2vec+CentroidEM","TFIDF+CentroidEM","SIF+Word2vec+CentroidEM","BERT+CNN算法","BERT+BiLSTM+CRF算法"];
    // 当前存储的算法
    const [algorithm,setAlgorithm] = useState('简单自训练算法（KNN)');
    // 当前的算法id
    const [alogorithmId,setId] = useState('0');
    // 当前的提交方式
    const [submitWay,setSubmitWay] = useState('文本提交');
    // 存储调api后的输出结果
    const [resInput,setResInput] = useState([]);
    // 存储使用文件传输方式的文件列表
    const [fileArray,setfileArray] = useState([]);
    // 存储放置在本地，将要上传的到后台接口的文件列表
    const [localfileList,setfileList] = useState([]);
    // 用于做上传文件的数组
    var textObj = {};
    // 用于做分类器和算法切换
    function choseVal(event){
        setId(event.target.value);
        var val = event.target.value;
        if(val === "0"){
            setAlgorithm('简单自训练算法（KNN）');
        }else if(val === '4'){
            setAlgorithm('None');
        }else if(val === '5'){
            setAlgorithm('None');
        }else{
            setAlgorithm('CentroidEM');
        }
    }
    // 用于切换提交方式
    function featSubmitWay(event){
        const tempWay = event.target.value;
        console.log(tempWay);
        setSubmitWay(tempWay);
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
                    tmparr = tmparr.concat({id:resInput.length + index,messageType:submitWay,messageContent:item.file_name,algorithm:selector[alogorithmId],selectRes:item.result});
                    return tmparr;
                })
                setResInput(resInput.concat(tmparr));
                console.log(resInput);
                setfileList([]);
            }).catch((error) =>{
                alert(error);
        })
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
        }
    }
    return(
        <div> 
            <div className="massageInput">
                <div className="titleWord">信息提交</div>
                <div className="massageBox">
                    <div class="contentWord">分类器选择</div>
                    <select value={alogorithmId} onChange={choseVal}>
                        <option value="0" selected="selected">文本图</option>    
                        <option value="1">Doc2vec</option>    
                        <option value="2">TFIDF</option>
                        <option value="3">SIF+Word2vec</option>
                        <option value="4">BERT+CNN算法</option>
                        <option value="5">BERT+BiLSTM+CRF算法</option>
                    </select>
                </div>

                <div className="contentSpace">
                    <div className="contentSelect">半监督算法选择</div>
                    <div className="contentVal">{algorithm}</div>
                </div>
                <div className="submitWay">
                    <div className="contentSelect">文本提交方式</div>
                    <button className="btn blockDistance2" onClick={featSubmitWay} value="文本提交">文本提交</button>
                    <button className="btn blockDistance1" onClick={featSubmitWay} value="上传文件提交">上传文件提交</button>
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
            {resInput.length === 0? 
            <div></div>:
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