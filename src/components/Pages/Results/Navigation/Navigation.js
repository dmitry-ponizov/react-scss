import React, { Component } from 'react'
import Title from '../../../UI/Title/Title'
import BackButton from '../../../UI/BackButton/BackButton';
import classes from './Navigation.css';
import Filter from './Filter/Filter'

const titles = {
    firstTitle: 'Moniic users on photo',
    secondTitle: 'People without Moniic account',
    backBtnTitle: 'Change photo'
}


class Navigation extends Component {

    render() {
        return (
            <div className={classes.Navigation}>
                <BackButton title={titles.backBtnTitle} serfPage={this.props.serfPage}/>
                <Title name={titles.firstTitle} />
                <Filter serfPage={this.props.serfPage} />
            </div>
        )
    }
}


export default Navigation;