import React, { useState } from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './index.css'
import 'antd/dist/antd.css';


function ThirdPage() {
    const [algorithm,setAlgorithm] = useState('简单自训练算法（KNN)');
    const [alogorithmId,setId] = useState(0);
    const [submitWay,setSubmitWay] = useState('文本提交');
    var textArr = {"data" :["abc"]};
    function choseVal(event){
        setId(event.target.value);
        var val = event.target.value;
        if(val === "0"){
            setAlgorithm('简单自训练算法（KNN）');
        }else{
            setAlgorithm('CentroidEM');
        }
    }
    function featSubmitWay(event){
        const tempWay = event.target.value;
        console.log(submitWay);
        setSubmitWay(tempWay);
    }
    const props = {
        accept: '.txt',
        action: 'https://101.37.163.122/api/v1/sniffle',
        name: 'file',
        previewFile(file) {
            console.log('Your upload file:', file);
            // Your process logic. Here we just mock to the same file
            return fetch('https://101.37.163.122/api/v1/sniffle', {
              method: 'POST',
              body: file,
              headers:{
                  'content-type' : 'multipart/form-data',
              }
            })
              .then(res => console.log(res.json()))
        },
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
    function postInput(){
        var test = document.getElementById("test");
        var text2 = test.value; 
        console.log(text2);
        fetch('//101.37.163.122:5000/api/v1/sniffle?kind=0', {
              mode:'cors',
              method: 'POST',
              body:JSON.stringify(textArr),
              headers:{
                'Content-Type' : 'application/json; charset=UTF-8',
              }
            }).then((res) => {
                console.log(res);
                test.value = "";
            })
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
                <div className="inputType">
                    <div className="contentWord">提交文件</div>
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                    <div class="permission"> 格式txt 每次上传一张图片</div>
                </div>
                }
            </div>
        </div>
    );    
}

export default ThirdPage;