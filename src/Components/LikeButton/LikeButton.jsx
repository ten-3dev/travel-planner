import React from 'react';
import {HeartOutlined, HeartFilled} from '@ant-design/icons';

class LikeButton extends React.Component{
    state = {
        isChecked: false,
        
    };

    onClick = () => {
        this.state.isChecked ?
        this.setState({
            isChecked: false,
           
        })
        :
        this.setState({
            isChecked: true,
           
        });
    }
    render(){
        return(
            <React.Fragment>
                <div >
                    {this.state.isChecked ?  
                    <HeartFilled style={{ color: 'red', fontSize: '30px'}}onClick={this.onClick}/> :
                    <HeartOutlined  style={{ fontSize: '30px'}} onClick={this.onClick}/>}
                    <h3>{this.state.notice}</h3>
                </div>
            </React.Fragment> 
        )
    }
}
// style= {{fontSize: '50px', color:'red'}}
export default LikeButton;