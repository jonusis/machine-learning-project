import React from 'react';
import './app.css'
import FirstPage from './pages/firstPage/index';
import SecPage from './pages/secPage/index';
import ThirdPage from './pages/thirdPage/index';
import messagePage from './pages/messagePage/index';
import YuliaoBox from './pages/yuliaoPage/index';
import imageH from './resorse/校徽/logo.png'
import {Redirect ,NavLink, Route,BrowserRouter } from 'react-router-dom';


function App() {
    return(
        <div className="app">
            <BrowserRouter>
            <div className="header">
                <img src={imageH} alt='' />
                <div className="headerTab">
                    <NavLink activeClassName="active" to="/page1">相关知识</NavLink>
                    <NavLink activeClassName="active" to="/page2">信息资讯</NavLink>
                    <NavLink activeClassName="active" to="/page3">分类器</NavLink>
                    <NavLink activeClassName="active" to="/page4/list1">不良语言语料库</NavLink>
                    <NavLink activeClassName="active" to="/path4/list2">不良语言词典</NavLink>

                </div>
            </div>
        <Redirect exact from="/" to="/page1" />
        <Route path="/page1" exact component={FirstPage}></Route>
        <Route path="/page2" exact component={SecPage}></Route>
        <Route path="/page3" exact component={ThirdPage}></Route>
        <Route path="/page4/list1" exact component={YuliaoBox}></Route>
        <Route path="/path4/list2" exact component={messagePage}></Route>
            </BrowserRouter>
        </div>
    );    
}

export default App;