import React from 'react';
import imageH from '../../../src/resorse/校徽/logo4.png'
import imageL from '../../../src/resorse/校徽/logo5.png'
import './index.css'
function BottomBar() {
    return(
        <div className='bar'> 
            <div className='imgDiv'>
                <img src={imageH} className='imag' alt='' />
                <img src={imageL} className='imagL' alt='' />
            </div>
            <div className="detailMsg">
                <div className='text'>Copyright © 2005-2020 版权所有：华中师范大学 鄂ICP备05003325号-9</div>
                <div className="text">地址:湖北省武汉市洪山区珞喻路152号　邮编：430079</div>
                <div className="text">华中师范大学学生团队出品 | 校级科研立项</div>

            </div>
        </div>
    );    
}

export default BottomBar;