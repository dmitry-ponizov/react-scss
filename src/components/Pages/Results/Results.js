import React, { Component } from 'react';
import classes from './Results.css';
import Navigation from './Navigation/Navigation'
import Profile from './Profile/Profile'
import WithOutUsers from './WithOutUsers/WithOutUsers'

class Results extends Component {
    

    render() {
        let profiles = this.props.users.map((user, index) => {
           return <Profile user={user}  key = { index } found={this.props.found[index]} / >
        })
        return (
            <div className={classes.Users}>
                <Navigation serfPage={this.props.serf} />
                {this.props.found.length ? 
                <div className={classes.Profiles}>
                    {profiles}
                </div>
                : <h1 className={classes.NotResult}>Not results</h1>}
                {this.props.notFound.length ? 
                <WithOutUsers notFound={this.props.notFound} />
                : ''}
            </div>
        )
    }
}

export default Results;