import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import {connect} from 'react-redux';
import {logout} from '../../Redux/reducers/user';



class Dash extends Component {
    constructor(props){
        super(props);
        this.user = null;
    }

    componentDidMount(){
        
    }


    render() {
        const name = (this.props.user && this.props.user.name) || null;
        return (
            <div>
            <Header />
                 <div><h1> Hi {name ? name : ''}  </h1></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    let {data: user} = state.user
    return {user}
}

const mapDispatchToProps = {logout}

export default  connect(mapStateToProps, mapDispatchToProps)(Dash);