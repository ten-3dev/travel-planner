import React, { useState } from 'react';
import {HeartOutlined, HeartFilled} from '@ant-design/icons';

const LikeButton = ({like, id}) => {
    const [isChecked, setIsChecked] = useState(like);

    const onClick = () => {
        setIsChecked(!isChecked);
        console.log(id);
    }
    return(
            <div >
                {isChecked ?  
                <HeartFilled style={{ color: 'red', fontSize: '30px'}}onClick={onClick}/> :
                <HeartOutlined  style={{ fontSize: '30px'}} onClick={onClick}/>}
            </div>
    )
}
export default LikeButton;