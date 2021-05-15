import React,{useState, useEffect} from 'react';
import './index.css'
import Footer from '../../compoments/bottomBar/index';

function MessageBox() {
    useEffect(()=>{
        var url = 'http://101.37.163.122:5000/api/v1/dict?page=' + 1;
        fetch(url,{
            mode:'cors',
            method: 'GET',
        }).then((res)=>{
            return res.json()
        }).then(res=>{
            setData(res.list);
            setTotalPage(res.pages);
        }).catch((error) => alert(error))
    },[]);
    function getData(pgNum){
        var url = 'http://101.37.163.122:5000/api/v1/dict?page=' + pgNum;
        fetch(url,{
            mode:'cors',
            method: 'GET',
        }).then((res)=>{
            return res.json()
        }).then(res=>{
            setData(res.list);
            setTotalPage(res.pages);
        }).catch((error) => alert(error))
    }
    function goLastPage(){
        if(pageNumber === 1){
            alert("当前页已经是第一页");
            return;
        }
        setPageNumber(pageNumber - 1);
        getData(pageNumber - 1);
    }
    function goNextPage(){
        if(pageNumber + 1 > totalPage){
            alert('当前页已经是最后一页');
            return;
        }
        setPageNumber(pageNumber + 1);
        getData(pageNumber + 1);
    }
    const[pageNumber,setPageNumber] = useState(1);
    const[data,setData] = useState([]);
    const[totalPage,setTotalPage] = useState(1);
    return(
        <div>
        <div className='errorMsg'> 
        <div className="msgTitle">不良语言词典</div>
        <table className="dictionary" border="1">
            <tr>
                <th>编号</th>
                <th>不良文本内容</th>
            </tr>
             {data.map((element,index) => {
                return <tr>
                    <td>{index}</td>
                    <td>{element.content}</td>
                </tr>
            })}
        </table>
        <div className='pageNum'>
            <div className="lastPage" onClick={goLastPage}> 上一页 </div>
            <div className="currentPage"> 第{pageNumber}页 </div>
            <div className="nextPage" onClick={goNextPage}> 下一页 </div>
        </div>
    </div> 
    <Footer/>
    </div>
    )  
}

export default MessageBox;