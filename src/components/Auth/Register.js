import React, { Component } from 'react'
import {connect} from 'react-redux'
import {register} from '../../Redux/reducers/user'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            admin: false,
            name: '', 
            email: '', 
            password: ''
        }
    }

    handleRegister = e => {
        e.preventDefault()
        this.props.register(this.state)
            .then(() => {
                this.props.redirect()
            })
            .catch(err => {
                console.log('error registering', err)
            })
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        let {admin} = this.state
        this.setState({
            admin: !admin
        })
    }

    render() {
        return (
            <div className='auth-container'>
                <form  onSubmit={this.handleRegister} className='auth-form'>
                <span>
                    <input 
                        type='checkbox'
                        onChange={this.handleClick}
                        name='employee'
                        checked={!this.state.admin}
                        id='employee'/>
                    <label htmlFor='employee'>employee</label>
                </span>
                <span>
                    <input 
                        type='checkbox'
                        onChange={this.handleClick}
                        name='is_admin'
                        checked={this.state.is_admin}
                        id='is_admin'/>
                    <label htmlFor='admin'>admin?</label>
                </span>
                <input
                    type='text'
                    value={this.state.name}
                    name='name'
                    onChange={this.handleChange}
                    placeholder='name'/>
                <input
                    type='text'
                    value={this.state.email}
                    name='email'
                    onChange={this.handleChange}
                    placeholder='email'/>
                <input
                    type='password'
                    value={this.state.password}
                    name='password'
                    onChange={this.handleChange}
                    placeholder='password'/>
                <button>register</button>
                </form>
                <button onClick={this.props.toggle}>need to login?</button>
            </div>
        )
    }
}

export default connect(null, {register})(Register)