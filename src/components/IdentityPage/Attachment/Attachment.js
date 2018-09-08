import React, { Component } from 'react';
import './Attachment.css'
import close from '../../../assets/images/close.svg'

class Attachment extends Component {

    short = () => {
        let value = this.props.name
        let size = 24
        if (value.length > size) {
            let str = value.slice(0, size);
            let a = str.split(' ');
            a.splice(a.length - 1, 1);
            str = a.join(' ');
            return str + ' ...';
        }

        return value;
    }
    render() {
    
        return (
            <div className="attachment">
                <div>
                    <span className="photo-name">{this.short()}</span>
                    <div onClick={() => this.props.closeHandler(this.props.name)}>
                        <img src={close} alt="close" />
                    </div>
                </div>
                <span className="photo-size">{this.props.size}KB</span>
            </div>
        )
    }
}

export default Attachment;