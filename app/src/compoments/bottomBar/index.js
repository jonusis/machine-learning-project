import React from 'react';
import imageH from '../../../src/resorse/校徽/logo2.png'
import './index.css'
function BottomBar() {
    return(
        <div className='bar'> 
            <div className='box'>
            <img src={imageH} className='imag' alt='' />
            <div className='text'>
                <ul>
                    关于我们
                    <div className='lit'>
                        <li className='litext'>机器学习</li>
                        <li className='litext'>相关知识</li>
                        <li className='litext'>分类器</li>
                    </div>
                </ul>
                <ul>
                    更多产品
                    <div className='lit'>
                        <li className='litext'>半监督学习</li>
                        <li className='litext'>人工神经网络</li>
                        <li className='litext'>Bert</li>
                    </div>
                </ul>
            </div>
            </div>
        </div>
    );    
}

export default BottomBar;