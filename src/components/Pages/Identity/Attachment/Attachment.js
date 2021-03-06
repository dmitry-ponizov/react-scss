import React, { Component } from 'react';
import classes from './Attachment.css'
import close from '../../../../assets/images/close.svg'
import WOW  from "wowjs";


class Attachment extends Component {


    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    

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
        let animate = 'wow bounceIn';
        return (
            <div className={classes.Attachment + ' ' + animate}>
                <div>
                    <span className={classes.PhotoName}>{this.short()}</span>
                    <div onClick={() => this.props.closeHandler(this.props.name)}>
                        <img src={close} alt="close" />
                    </div>
                </div>
                <span className={classes.PhotoSize}>{this.props.size}KB</span>
            </div>
        )
    }
}

export default Attachment;